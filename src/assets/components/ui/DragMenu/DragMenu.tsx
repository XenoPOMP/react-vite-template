import cn from 'classnames';
import { motion } from 'framer-motion';
import { FC, PropsWithChildren, useRef } from 'react';

import styles from './DragMenu.module.scss';
import type { DragMenuProps } from './DragMenu.props';

/**
 * Draggable component.
 *
 * @param children
 * @param classNames
 * @param {"x"|"y"} axis
 * @constructor
 */
const DragMenu: FC<PropsWithChildren<DragMenuProps>> = ({
  children,
  classNames,
  axis,
}) => {
  const constraintRef = useRef(null);

  return (
    <motion.div
      ref={constraintRef}
      className={cn(classNames?.constraint, styles.dragElement)}
    >
      <motion.div
        drag={axis}
        dragConstraints={constraintRef}
        dragElastic={0.2}
        className={classNames?.draggable}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default DragMenu;
