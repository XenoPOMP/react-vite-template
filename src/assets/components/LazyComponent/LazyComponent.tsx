import { FC, ReactNode, Suspense, lazy } from 'react';

import { EsmImport } from '@type/EsmImport';

import type { LazyComponentProps } from './LazyComponent.props';

/**
 * Lazy-loading component.
 *
 * Use this if you need to use concurrent mode in React.
 *
 * @example
 * <LazyComponent element={() => import('some-module') fallback={<Loader />} />
 *
 * @param {EsmImport} element				{@link EsmImport} of lazy component.
 * @param {ReactNode} fallback      {@link ReactNode} that is being displayed while element
 * 																	is loading.
 * @constructor
 */
const LazyComponent: FC<LazyComponentProps> = ({ element, fallback }) => {
  const LazyElement = lazy(element);

  return (
    <Suspense fallback={fallback}>
      <LazyElement />
    </Suspense>
  );
};

export default LazyComponent;
