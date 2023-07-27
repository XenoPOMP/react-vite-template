import { EsmImport } from '@xenopomp/advanced-types';

import { ComponentType, ReactNode } from 'react';

export interface LazyComponentProps {
  element: EsmImport;
  fallback: ReactNode;
}
