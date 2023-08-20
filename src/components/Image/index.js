import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';

const Image = forwardRef(({ src, alt, className, fallback = images.noImage, ...props }, ref) => {
    const [fallBack, setFallback] = useState('');

    const handleError = () => {
        setFallback(fallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            fallback={fallback}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
