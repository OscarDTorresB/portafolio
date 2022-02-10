/** @type {import('next').NextConfig} */
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' https://www.googletagmanager.com;
  script-src-elem 'self' 'sha256-ZbaiDlrQfVgKGZzfa8IH38JRTxTfFXWzuT9b+DbwD2E=' https://www.googletagmanager.com 'sha256-mdLzfD1Dm/LdRSmG7JLzRDl2ynl/7TOgM1jk6IXuk/A=';
  style-src 'self' fonts.googleapis.com 'unsafe-inline';
  font-src 'self' fonts.gstatic.com;
  img-src 'self' data: www.googletagmanager.com;
  connect-src 'self' https://api.emailjs.com/api/v1.0/email/send vitals.vercel-insights.com https://www.google-analytics.com;
`
const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=()'
  }
]

  

module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)' /* all */,
        headers: securityHeaders,
      }
    ]
  }
}
