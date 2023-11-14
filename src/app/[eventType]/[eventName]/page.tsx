import { Metadata, ResolvingMetadata } from 'next';
import React from 'react';

import events from '@/data/events';
import importImage from '@/utils/importImage';

import Event from './event';

type Props = {
  params: { eventType: string; eventName: string };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const { eventType, eventName } = params;

  const event = events.find((event) => event.meta.path === `/${eventType}/${eventName}`);

  // access and extend (rather than replace) parent metadata
  const previousSiteName = (await parent).openGraph?.siteName || '';

  const image = event ? importImage(event.meta.image) : '';

  return {
    title: `${event?.category.text} | ${event?.meta.title}`,
    description: event?.meta.title,
    openGraph: {
      title: `${event?.category.text} | ${event?.meta.title}`,
      description: event?.meta.description,
      images: [image],
      siteName: previousSiteName
    }
  };
}

export default function EventPage({ params }: Props) {
  const { eventType, eventName } = params;
  const event = events.find((event) => event.meta.path === `/${eventType}/${eventName}`);

  if (!event) return null;

  return <Event event={event} />;
}

export async function generateStaticParams() {
  return events.map((event) => {
    // '/abc/123'.slice(1).split('/') => ['abc', '123']
    const [eventType, eventName] = event.meta.path.slice(1).split('/');
    return {
      eventType,
      eventName
    };
  });
}
