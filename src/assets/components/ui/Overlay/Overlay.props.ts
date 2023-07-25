import { PropsWith } from '@xenopomp/advanced-types';

interface BaseOverlayProps
  extends PropsWith<'children' | 'className' | 'id', {}> {}

export interface OverlayProps extends BaseOverlayProps {
  backdrop?: {
    blurAmount?: number;
    blurColor?: string;
  };
  trigger: boolean;
  flexCenter?: boolean;
  blockScroll?: boolean;
}
