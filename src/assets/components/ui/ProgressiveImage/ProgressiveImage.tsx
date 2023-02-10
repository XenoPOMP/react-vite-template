import cn from 'classnames';
import { CSSProperties, FC, useEffect, useState } from "react";
import styles from './ProgressiveImage.module.scss';
import { ProgressiveImageProps } from './ProgressiveImage.props';

const ProgressiveImage: FC<ProgressiveImageProps> = ({
  src,
  placeholderSrc,
  alt,
  className,
  sx,
  blur
}) => {
  // Error handling
  useEffect(() => {
    if (alt === undefined) {
      console.warn('It`s recommended to provide alt to img tag');
    }
  }, []);

  // prettier-ignore
  const [imageSrc, setImageSrc] = useState<string>(placeholderSrc);
  let loadingStateClass =
    imageSrc === placeholderSrc ? styles.loading : styles.loaded;
  // Load full quality image
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
    };
  }, [src]);

  const getFullSx = (): CSSProperties => {
    return {
      ...sx,
      '--blur-value': blur ? `${blur}px` : '10px'
    } as CSSProperties;
  };

  return (
    <img
      className={cn(className, styles.progressive, loadingStateClass)}
      style={getFullSx()}
      alt={alt || ''}
      src={imageSrc}
    />
  );
};

export default ProgressiveImage;
