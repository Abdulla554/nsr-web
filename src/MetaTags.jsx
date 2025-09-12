 

import { Helmet } from 'react-helmet-async'

export const MetaTags = ({ customTitle, customDescription }) => {
  const title = customTitle || "السندان - وجهتكم الموثوقة للمستلزمات الطبية"
  const description = customDescription || "السندان، من الأسماء الرائدة في مجال المستلزمات الطبية والأجهزة الطبية. نقدم مجموعة واسعة من المستلزمات الطبية والأجهزة من علامات تجارية عالمية ومحلية موثوقة، مع ضمانات موثوقة وخدمة عملاء متميزة."
  const keywords = "مستلزمات طبية, أجهزة طبية, أجهزة تشخيص, أجهزة علاج, مستلزمات طبية أساسية, السندان, تجهيزات طبية"
  const siteUrl = "https://alsandan.com"
  const imageUrl = `${siteUrl}/logo.png`  

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang="ar" dir="rtl" />
      <meta charSet="UTF-8" />
      <link rel="icon" type="image/png" href="/ico.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="السندان" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="business.medical" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="business:contact_data:street_address" content="البصرة، العراق" />
      <meta property="business:contact_data:phone_number" content="" />
      <meta property="business:contact_data:email" content="info@alsandan.com" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#DAA520" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Preconnect to Important Origins */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* PWA Tags */}
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Helmet>
  )
}