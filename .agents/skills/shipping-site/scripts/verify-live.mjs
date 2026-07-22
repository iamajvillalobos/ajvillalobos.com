const [urlValue, ...expectedValues] = process.argv.slice(2)

if (!urlValue || expectedValues.length === 0) {
  console.error(
    'Usage: node verify-live.mjs <url> <expected-text> [additional-expected-text...]',
  )
  process.exit(2)
}

const url = new URL(urlValue)
const allowedHosts = new Set(['ajvillalobos.com', 'www.ajvillalobos.com'])

if (url.protocol !== 'https:' || !allowedHosts.has(url.hostname)) {
  console.error('URL must use HTTPS on ajvillalobos.com or www.ajvillalobos.com')
  process.exit(2)
}

const attempts = 5
const retryDelayMs = 2_000
let lastFailure = 'No request attempted'

for (let attempt = 1; attempt <= attempts; attempt += 1) {
  try {
    const response = await fetch(url, {
      headers: { 'cache-control': 'no-cache' },
      redirect: 'follow',
    })
    const body = await response.text()
    const missingValues = expectedValues.filter((value) => !body.includes(value))

    if (response.ok && missingValues.length === 0) {
      console.log(
        `Verified ${url}: HTTP ${response.status}; found ${expectedValues.length} expected value(s).`,
      )
      process.exit(0)
    }

    const failures = []
    if (!response.ok) failures.push(`HTTP ${response.status}`)
    if (missingValues.length > 0) {
      failures.push(`missing ${missingValues.map((value) => JSON.stringify(value)).join(', ')}`)
    }
    lastFailure = failures.join('; ')
  } catch (error) {
    lastFailure = error instanceof Error ? error.message : String(error)
  }

  if (attempt < attempts) {
    await new Promise((resolve) => setTimeout(resolve, retryDelayMs))
  }
}

console.error(`Live verification failed for ${url} after ${attempts} attempts: ${lastFailure}`)
process.exit(1)
