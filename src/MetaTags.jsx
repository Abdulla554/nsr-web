import { Helmet } from 'react-helmet-async'

export const MetaTags = ({ customTitle, customDescription }) => {
  const title = customTitle || "نصر للحاسبات - وجهتكم الموثوقة للحواسيب والمعدات الإلكترونية"
  const description = customDescription || "نصر للحاسبات، من الأسماء الرائدة في مجال بيع وصيانة الحواسيب والأجهزة الإلكترونية. نقدم مجموعة واسعة من الحواسيب المكتبية والمحمولة والأجهزة الملحقة من علامات تجارية عالمية ومحلية موثوقة، مع ضمانات وخدمة عملاء متميزة."
  const keywords = "حواسيب, كمبيوترات, أجهزة كمبيوتر مكتبية, لابتوبات, أجهزة إلكترونية, ملحقات كمبيوتر, نصر للحاسبات, معدات تكنولوجيا"
  const siteUrl = "https://nsr-pc.com"
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
      <meta name="author" content="نصر للحاسبات" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="business:contact_data:street_address" content="العراق" />
      <meta property="business:contact_data:phone_number" content="+964" />
      <meta property="business:contact_data:email" content="info@nsr-pc.com" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#1A73E8" />
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
