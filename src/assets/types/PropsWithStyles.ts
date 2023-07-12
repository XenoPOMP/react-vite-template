import { CSSProperties } from 'react';

export type PropsWithStyles<P extends any> = P & {
  style?: CSSProperties;
};
