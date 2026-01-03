import type { ReactNode } from 'react';

export type ServiceType = {
    icon: ReactNode;
    title: string;
    desc: string;
    details: string;
};
<<<<<<< HEAD
export type HeroVideoSliderProps = {
  videos: string[]
  interval?: number
}

export type VideoSliderProps = {
  videos: string[];
  isFirstPart?: boolean;
=======

export type VideoSliderProps = {
  videos: string[];
>>>>>>> 26691f90b02f8637c8f1d630af190497a885a961
};

// Define an interface for the component's props to ensure type safety
 export interface VideoPlayerProps {
  src: string;
  poster?: string; // Optional poster image URL
  controls?: boolean; // Optional controls visibility, default to true
  autoPlay?: boolean; // Optional autoplay behavior, default to false
  loop?: boolean; // Optional loop behavior, default to false
  muted?: boolean; // Optional muted behavior, default to false
  width?: string | number; // Optional width
  height?: string | number; // Optional height
  className?: string; // Optional additional CSS classes
  style?: React.CSSProperties; // Optional inline styles
}

export type GalleryProps = {
  images: string[];
};