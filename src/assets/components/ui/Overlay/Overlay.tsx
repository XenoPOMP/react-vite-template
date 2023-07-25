import cn from 'classnames';
import { CSSProperties, FC, useEffect } from 'react';
import { tw } from 'tailwindcss-typescript';

import useBodyClassnames from '@hooks/useBodyClassnames';
import { useUniqueId } from '@hooks/useUniqueId';

import { isUndefined } from '@utils/type-checks';

import styles from './Overlay.module.scss';
import type { OverlayProps } from './Overlay.props';

interface OverlayStyles extends CSSProperties {
  '--blur-amount'?: string;
  '--blur-color'?: string;
}

/**
 * Overlay component.
 *
 * @param className
 * @param id            ID of overlay. It`s required because
 *                      multiple overlays can be added to app.
 * @param backdrop			backdrop blur options.
 * @param trigger				trigger to appear.
 * @param flexCenter    if true, applies flex center to overlay.
 * @param children
 * @param blockScroll   if true, overlay will block scrolling.
 * @constructor
 */
const Overlay: FC<OverlayProps> = ({
  className,
  id,
  backdrop,
  trigger,
  flexCenter,
  children,
  blockScroll,
}) => {
  const getStyles = (): OverlayStyles => {
    return !isUndefined(backdrop)
      ? {
          '--blur-amount': backdrop.blurAmount
            ? `${backdrop.blurAmount}px`
            : '0px',
          background: backdrop.blurColor,
        }
      : {};
  };

  const [registerClasses, deleteClasses] = useBodyClassnames();
  const generatedId = useUniqueId();

  useEffect(() => {
    const name: string = `overlay-${id ?? generatedId}`;

    if (trigger && blockScroll) {
      registerClasses(name, [tw('overflow-hidden')]);
      return;
    }

    return () => {
      deleteClasses(name);
    };
  }, [trigger, blockScroll]);

  return (
    <>
      {trigger && (
        <div
          style={getStyles()}
          className={cn(
            styles.overlay,
            flexCenter ? styles.flexCenter : '',
            className
          )}
          id={id}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Overlay;
