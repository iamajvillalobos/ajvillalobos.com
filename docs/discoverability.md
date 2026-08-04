# Search Discoverability Checklist

Use this after the Cloudflare deployment is live at `https://ajvillalobos.com`.

## Launch Checks

- Confirm `https://ajvillalobos.com/` returns SSR HTML with the profile text visible in the initial response.
- Confirm `https://ajvillalobos.com/sitemap.xml` returns XML and lists the homepage, blog index, blog posts, and PDF resume.
- Confirm `https://ajvillalobos.com/blog` and a sample post return SSR HTML.
- Confirm `https://ajvillalobos.com/robots.txt` includes `Sitemap: https://ajvillalobos.com/sitemap.xml`.
- Confirm `https://ajvillalobos.com/llms.txt` returns plain text.
- Confirm `https://ajvillalobos.com/aj-villalobos-senior-product-engineer-resume.pdf` returns a valid PDF.
- Confirm SSR HTML includes `og:image` and `twitter:card` = `summary_large_image`.
- Confirm static OG cards exist as PNG:
  - `https://ajvillalobos.com/og/home.png`
  - `https://ajvillalobos.com/og/blog.png`
  - `https://ajvillalobos.com/og/blog/<slug>.png`
- After adding a post, run `mise exec -- pnpm generate-og` (also runs on `pnpm build`).
- Validate link previews with [Twitter/X Card Validator](https://cards-dev.twitter.com/validator) or [opengraph.xyz](https://www.opengraph.xyz/).
- Validate JSON-LD with Google's Rich Results Test or Schema Markup Validator.

## Submission

- Add `ajvillalobos.com` as a property in Google Search Console.
- Submit `https://ajvillalobos.com/sitemap.xml` in Google Search Console.
- Add the site to Bing Webmaster Tools and submit the same sitemap.
- Request indexing for the homepage after DNS and HTTPS are stable.

## Monitoring

- Check Google Search Console indexing status for `/` and the PDF URL.
- Check Bing Webmaster Tools crawl/index status.
- Watch Cloudflare analytics/logs for crawler requests to `/`, `/robots.txt`, `/sitemap.xml`, `/llms.txt`, and the PDF.
- Review search appearance after indexing for the target phrases on the page, especially senior Ruby on Rails engineer, Rails developer Philippines, and Rails engineer with AI-assisted development experience.
