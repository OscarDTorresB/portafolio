/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)' /* all */,
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval'; script-src-elem 'self' 'sha256-ZbaiDlrQfVgKGZzfa8IH38JRTxTfFXWzuT9b+DbwD2E=' www.googletagmanager.com; style-src 'self' fonts.googleapis.com 'unsafe-inline'; font-src 'self' fonts.gstatic.com; img-src 'self' data:; connect-src 'self' vitals.vercel-insights.com www.google-analytics.com"
          }
        ]
      }
    ]
  }
}
