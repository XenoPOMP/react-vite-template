import { SimpleReactComponent } from '@interfaces/SimpleReactComponent';
import { CSSProperties } from 'react';

export interface ProgressiveImageProps {
  alt?: string;
  src: string;
  placeholderSrc: string;
  className?: string;
  sx?: CSSProperties;
  blur?: number;
}
