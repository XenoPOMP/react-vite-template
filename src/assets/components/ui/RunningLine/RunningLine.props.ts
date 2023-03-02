import { CSSProperties, ReactNode } from 'react';

export interface RunningLineProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  behavior?: 'scroll' | 'slide' | 'alternate';
  direction?: 'left' | 'right' | 'up' | 'down';
  loop?: boolean;
  scrollSpeed?: number;
  scrollDelay?: number;
  verticalAlign: boolean;
}
