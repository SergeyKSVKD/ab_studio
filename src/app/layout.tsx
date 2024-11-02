import type { Metadata } from 'next'
import './globals.scss'
import { Montserrat } from "next/font/google"
import type { Viewport } from 'next'
import Favicon from '/public/Metadata/logo.jpg';

const montserrat = Montserrat({
  weight: ["400", '700', '300', '900'],
  subsets: ["latin", 'latin-ext'],
  display: "swap",
})

export const metadata: Metadata = {
  title: 'AB studio | Студия ремонта и дизайна',
  description: '',
  icons: [{ rel: 'icon', url: Favicon.src }],
  alternates: {
    canonical: '',
    languages: {
      ru: ''
    },
  },
  robots: {
    // index: false,
    index: true,
    follow: true,
    // nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  keywords: [],
  openGraph: {
    title: '',
    description: '',
    siteName: '',
    images: [{
      url: '',
      width: 1200,
      height: 630,
      type: 'image/jpg'
    }],
    type: "website",
    locale: 'ru_RU',
    url: '',
  }
}

export const viewport: Viewport = {
  userScalable: true,
  width: 'device-width',
  initialScale: 1,
  // maximumScale: 1,
  viewportFit: 'cover',
  // minimumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru-Ru">
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  )
}
