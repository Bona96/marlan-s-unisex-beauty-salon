import type { ReactNode } from 'react';

export type ServiceType = {
    icon: ReactNode;
    title: string;
    desc: string;
    details: string;
};

export type GalleryProps = {
  images: string[];
};