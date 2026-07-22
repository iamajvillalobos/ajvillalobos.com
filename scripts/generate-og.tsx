import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { Resvg } from '@resvg/resvg-js'
import satori from 'satori'

import {
  allOgPayloads,
  OG_HEIGHT,
  OG_WIDTH,
  type OgPayload,
} from '../src/lib/og'

const PAPER = '#fcfbf8'
const INK = '#1c1b1a'
const MUTED = '#6e6b66'
const LINE = '#e4e1da'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const fontsDir = path.join(root, 'public', 'fonts')
const outDir = path.join(root, 'public', 'og')

function OgCard({ title, description, meta }: OgPayload) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: PAPER,
        color: INK,
        padding: '72px 80px',
        fontFamily: 'Inter',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <div
          style={{
            color: MUTED,
            fontSize: 26,
            fontWeight: 400,
          }}
        >
          ajvillalobos.com
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 28,
          maxWidth: 1000,
        }}
      >
        <div
          style={{
            fontSize: title.length > 70 ? 56 : 68,
            fontWeight: 600,
            lineHeight: 1.12,
            letterSpacing: '-0.03em',
          }}
        >
          {title}
        </div>
        {description ? (
          <div
            style={{
              color: MUTED,
              fontSize: 30,
              fontWeight: 400,
              lineHeight: 1.4,
              maxWidth: 920,
            }}
          >
            {description}
          </div>
        ) : null}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          borderTop: `2px solid ${LINE}`,
          paddingTop: 28,
          color: MUTED,
          fontSize: 24,
        }}
      >
        {meta}
      </div>
    </div>
  )
}

async function renderPng(
  payload: OgPayload,
  fonts: { regular: Buffer; semiBold: Buffer },
) {
  const svg = await satori(<OgCard {...payload} />, {
    width: OG_WIDTH,
    height: OG_HEIGHT,
    fonts: [
      {
        name: 'Inter',
        data: fonts.regular,
        weight: 400,
        style: 'normal',
      },
      {
        name: 'Inter',
        data: fonts.semiBold,
        weight: 600,
        style: 'normal',
      },
    ],
  })

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: OG_WIDTH,
    },
  })

  return resvg.render().asPng()
}

async function main() {
  const fonts = {
    regular: await readFile(path.join(fontsDir, 'Inter-Regular.ttf')),
    semiBold: await readFile(path.join(fontsDir, 'Inter-SemiBold.ttf')),
  }

  const payloads = allOgPayloads()
  await mkdir(outDir, { recursive: true })

  for (const payload of payloads) {
    const png = await renderPng(payload, fonts)
    const filePath = path.join(outDir, `${payload.id}.png`)
    await mkdir(path.dirname(filePath), { recursive: true })
    await writeFile(filePath, png)
    console.log(`wrote ${path.relative(root, filePath)} (${png.byteLength} bytes)`)
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
