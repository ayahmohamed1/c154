import type { Metadata } from 'next'
import giftData from '@/lib/giftData'
import GiftClient from '@/components/GiftClient'

export const metadata: Metadata = {
  metadataBase: new URL('https://agiftforyouuu.vercel.app'),
  title: 'Happy Birthday Skyla! 🎂',
  description: 'A special birthday message for Skyla 🤍',
  openGraph: {
    title: 'Happy Birthday Skyla! 🎂',
    description: 'A special birthday message for Skyla 🤍',
    url: 'https://agiftforyouuu.vercel.app',
    siteName: 'Birthday Gift',
    type: 'website',
    images: [
      {
        url: 'https://agiftforyouuu.vercel.app/images/cat-square.jpg',
        secureUrl: 'https://agiftforyouuu.vercel.app/images/cat-square.jpg',
        width: 600,
        height: 600,
        type: 'image/jpeg',
        alt: 'Happy Birthday Skyla Cat 🐱🎂',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Happy Birthday Skyla! 🎂',
    description: 'A special birthday message for Skyla 🤍',
    images: ['https://agiftforyouuu.vercel.app/images/cat-square.jpg'],
  },
}

export default function Home() {
  const data = giftData.ahmed || giftData.amir
  return <GiftClient data={data} />
}