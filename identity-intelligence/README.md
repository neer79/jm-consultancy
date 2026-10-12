# JM Consulting Identity Intelligence Hub

Static, privacy-conscious identity intelligence microsite for JM Consulting.

## Included

- Main Identity Intelligence landing page
- Filterable briefing archive for 2–12 October 2026
- Business exposure, architecture adjustment and JM Consulting capability framing
- Framework relevance labels for ISO/IEC 27001, NIST CSF, NIST AI RMF, GDPR and HIPAA
- Explicit non-certification and non-legal-advice statements
- No analytics, tracking pixels, account registration or external font requests

## Local preview

```bash
cd identity-intelligence
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Recommended production deployment

Use a dedicated subdomain: `intelligence.jmconsulting.co.in`.

### Cloudflare Pages

1. Create a Pages project connected to this GitHub repository.
2. Set the project root to `identity-intelligence`.
3. Framework preset: `None`.
4. Build command: leave blank.
5. Output directory: `.`.
6. Deploy, then add `intelligence.jmconsulting.co.in` as the custom domain.
7. Add a navigation link from the main JM Consulting website to the subdomain.

### Netlify

1. Import the GitHub repository.
2. Base directory: `identity-intelligence`.
3. Build command: leave blank.
4. Publish directory: `identity-intelligence` when configured from repository root, or `.` when the base directory is applied by the provider.
5. Attach `intelligence.jmconsulting.co.in` and follow the displayed DNS instructions.

### Vercel

1. Import the repository.
2. Root directory: `identity-intelligence`.
3. Framework preset: `Other`.
4. Build command: leave blank.
5. Output directory: `.`.
6. Add the custom domain after the first successful deployment.

## Integrating into the existing Next.js website

The current JM Consulting application is under `jm-consultancy/` in the repository. To serve the Hub from the same deployment:

1. Copy this directory's `index.html`, `archive.html` and `assets/` into `jm-consultancy/public/identity-intelligence/`.
2. Add an **Identity Intelligence** navigation link pointing to `/identity-intelligence/`.
3. Build the main application with `npm ci && npm run build`.
4. Verify `/identity-intelligence/` and `/identity-intelligence/archive.html` before production deployment.

## Publishing workflow

1. Research from primary or authoritative sources.
2. Separate reported facts from JM Consulting conclusions.
3. Add business exposure, architecture adjustment, JM capability and control-relevance fields.
4. Review source links, copyright risk, trademarks, personal data and framework wording.
5. Obtain human approval.
6. Publish the full article to the Hub.
7. Publish a concise LinkedIn version that links to the Hub.

LinkedIn publishing must use an authorized LinkedIn Page API/integration. Do not store LinkedIn passwords or browser-session cookies in this repository or CI/CD secrets.

## Editorial and compliance boundary

Framework relevance indicates that a topic may fall within or support a control category. It does not state that JM Consulting, the website, a product or a client environment is certified, audited or legally compliant. Formal conclusions require an appropriately scoped legal, compliance or accredited audit review.

Third-party product names and trademarks identify their respective owners and do not imply endorsement. Use original summaries, limited quotations and links to primary sources. Record material corrections and provide a rights-review contact route.
