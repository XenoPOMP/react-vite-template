import { ReactChildrenProps } from '../../interfaces/ReactChildren.props';
import { HTMLAttributes } from 'react';

export interface DragMenuProps extends ReactChildrenProps {
  classNames?: {
    constraint?: string,
    draggable?: string,
  };
  axis: 'x' | 'y';
}
