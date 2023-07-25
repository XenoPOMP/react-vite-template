import { Modify, PropsWith } from '@xenopomp/advanced-types';

export interface OverlayProps
  extends PropsWith<'children' | 'className' | 'id', {}> {
  backdrop: {
    blurAmount?: number;
    blurColor?: string;
  };
  trigger: boolean;
  flexCenter?: boolean;
  blockScroll?: boolean;
}
