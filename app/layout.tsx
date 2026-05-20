import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://homefinishline.com'),
  title: {
    default: 'Home Finish Line | Trey Garza, VA Loan Specialist San Antonio TX',
    template: '%s | Home Finish Line',
  },
  description: 'Trey Garza, Licensed Texas Loan Officer (NMLS# 2700813) at Efinity Mortgage. VA Loan Specialist serving San Antonio and all of Texas. FHA, VA, USDA, Conventional loans.',
  keywords: ['VA loans San Antonio', 'mortgage San Antonio TX', 'first time home buyer San Antonio', 'Trey Garza loan officer', 'Efinity Mortgage San Antonio'],
  authors: [{ name: 'Trey Garza', url: 'https://homefinishline.com' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://homefinishline.com',
    siteName: 'Home Finish Line',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: 'Home Finish Line - Trey Garza VA Loan Specialist San Antonio' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Home Finish Line',
              description: 'VA Loan Specialist and Licensed Texas Mortgage Loan Officer serving San Antonio, TX',
              url: 'https://homefinishline.com',
              telephone: '',
              email: 'trey.garza@homefinishline.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'San Antonio',
                addressRegion: 'TX',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 29.4241,
                longitude: -98.4936,
              },
              employee: {
                '@type': 'Person',
                name: 'Trey Garza',
                jobTitle: 'Licensed Mortgage Loan Officer',
                identifier: 'NMLS# 2700813',
                worksFor: { '@type': 'Organization', name: 'Efinity Mortgage', identifier: 'NMLS# 1043983' },
              },
              areaServed: [
                { '@type': 'City', name: 'San Antonio', containedInPlace: { '@type': 'State', name: 'Texas' } },
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Mortgage Loan Programs',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'VA Home Loans' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'FHA Home Loans' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'USDA Home Loans' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Conventional Home Loans' } },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
