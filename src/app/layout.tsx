import Footer from '@/components/Footer'
import Header from '@/components/Header'
import './globals.css'
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-black">
        <Header />
        {children}
        <Footer />

        {/* ✅ Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KVCPP55SLN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KVCPP55SLN', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </body>
    </html>
  )
}
