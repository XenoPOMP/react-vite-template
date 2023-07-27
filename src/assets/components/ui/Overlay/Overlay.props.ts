import { PropsWith } from '@xenopomp/react-essentials';

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
