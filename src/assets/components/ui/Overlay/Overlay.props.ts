import { Modify } from '@type/Modify';
import { PropsWith } from '@type/PropsWith';

export interface OverlayProps
  extends Modify<
    PropsWith<'children' | 'className' | 'id', {}>,
    'id',
    Required<PropsWith<'children' | 'className' | 'id', {}>['id']>
  > {
  backdrop: {
    blurAmount?: number;
    blurColor?: string;
  };
  trigger: boolean;
  flexCenter?: boolean;
  blockScroll?: boolean;
}
