# Search Discoverability Checklist

Use this after the Cloudflare deployment is live at `https://ajvillalobos.com`.

## Launch Checks

- Confirm `https://ajvillalobos.com/` returns SSR HTML with the profile text visible in the initial response.
- Confirm `https://ajvillalobos.com/sitemap.xml` returns XML and lists the homepage plus PDF resume.
- Confirm `https://ajvillalobos.com/robots.txt` includes `Sitemap: https://ajvillalobos.com/sitemap.xml`.
- Confirm `https://ajvillalobos.com/llms.txt` returns plain text.
- Confirm `https://ajvillalobos.com/aj-villalobos-ai-resume.pdf` returns a valid PDF.
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
