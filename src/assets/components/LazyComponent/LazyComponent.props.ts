import { ComponentType, ReactNode } from 'react';

import { EsmImport } from '@type/EsmImport';

export interface LazyComponentProps {
  element: EsmImport;
  fallback: ReactNode;
}
