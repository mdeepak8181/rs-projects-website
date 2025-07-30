import Head from 'next/head'

interface SeoProps {
  title: string
  description: string
  keywords?: string
  url?: string
  image?: string
}

export default function Seo({
  title,
  description,
  keywords = 'custom homes, builders in winnipeg, winnipeg builders, builder, residential construction, RS Projects, modern homes, home builder',
  url = 'https://www.rsprojects.ca/',
  image = 'https://www.rsprojects.ca/images/og-image.jpg',
}: SeoProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  )
}
