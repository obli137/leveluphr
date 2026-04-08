import { useEffect } from 'react';

type PageMeta = {
  title: string;
  description?: string;
};

const setMetaDescription = (description: string) => {
  const existing = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (existing) {
    existing.setAttribute('content', description);
    return;
  }

  const meta = document.createElement('meta');
  meta.setAttribute('name', 'description');
  meta.setAttribute('content', description);
  document.head.appendChild(meta);
};

export const usePageMeta = ({ title, description }: PageMeta) => {
  useEffect(() => {
    const prevTitle = document.title;
    const prevDescription = document
      .querySelector<HTMLMetaElement>('meta[name="description"]')
      ?.getAttribute('content');

    document.title = title;
    if (description) setMetaDescription(description);

    return () => {
      document.title = prevTitle;
      if (prevDescription) setMetaDescription(prevDescription);
    };
  }, [title, description]);
};

