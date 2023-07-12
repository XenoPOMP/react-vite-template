import { PropsWithChildren } from 'react';

import { PropsWithClassnames } from '@type/PropsWithClassnames';
import { PropsWithId } from '@type/PropsWithId';
import { PropsWithStyles } from '@type/PropsWithStyles';

type ConcatenationVariants<P extends any = unknown> = {
  /** Children node. */
  children?: Pick<PropsWithChildren<P>, 'children'>['children'];

  /** Stylesheet object. */
  style?: Pick<PropsWithStyles<P>, 'style'>['style'];

  /** Classname string. */
  className?: Pick<PropsWithClassnames<P>, 'className'>['className'];

  /** ID. */
  id?: Pick<PropsWithId<P>, 'id'>['id'];
};

/**
 * Universal props` wrapper.
 *
 * C generic is concatenation variant of type {@link ConcatenationVariants}.
 *
 * P generic is input type that is being wrapped.
 *
 * @example
 * // Children
 * const NewProps: PropsWith<'children', {}> = {};
 * console.log(NewProps.children); // ReactNode
 *
 * // Style
 * const NewProps: PropsWith<'style', {}> = {};
 * console.log(NewProps.style); // CSSProperties
 *
 *
 * // Multi
 * const NewProps: PropsWith<'children' | 'style', {}> = {};
 * console.log(NewProps.children); // ReactNode
 * console.log(NewProps.style); // CSSProperties
 *
 * @return  wrapped type.
 */
export type PropsWith<
  C extends keyof ConcatenationVariants<P>,
  P extends any,
> = P & Pick<ConcatenationVariants<P>, C>;
