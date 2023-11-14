import '@/styles/global.scss';

import type { Metadata } from 'next';

import homeData from '@/data/home';
import openGraphImage from '@/images/og-image.jpg';

export const metadata: Metadata = {
  title: homeData.meta.title,
  description: homeData.meta.title,
  openGraph: {
    title: homeData.meta.title,
    description: homeData.meta.description,
    images: [
      {
        url: openGraphImage.src,
        width: openGraphImage.width,
        height: openGraphImage.height,
        alt: homeData.meta.title
      }
    ],
    siteName: homeData.meta.title
  }
};

type RootLayout = {
  children: React.ReactNode;
};

export default function RootLayout(props: RootLayout) {
  const { children } = props;
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
