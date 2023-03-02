import { FC } from 'react';
import { RunningLineProps } from './RunningLine.props';
import cn from 'classnames';
import styles from './RunningLine.module.scss';

const RunningLine: FC<RunningLineProps> = ({
  children,
  className,
  style,
  behavior,
  direction,
  loop,
  scrollSpeed,
  scrollDelay,
  verticalAlign,
}) => {
  return (
    // @ts-ignore
    <marquee
      behavior={behavior !== undefined ? behavior : 'scroll'}
      direction={direction !== undefined ? direction : 'left'}
      loop={loop !== undefined ? loop : false}
      scrollamount={scrollSpeed !== undefined ? scrollSpeed : 6}
      scrolldelay={scrollDelay !== undefined ? scrollDelay : 85}
      style={style}
      className={cn(
        className,
        styles.runningLine,
        verticalAlign ? styles.vAlign : '',
      )}
    >
      {children}
      {/*
      // @ts-ignore */}
    </marquee>
  );
};

export default RunningLine;
