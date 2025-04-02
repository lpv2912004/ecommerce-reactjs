import Button from '@components/Button/Button';
import styles from './styles.module.scss';
import { use, useEffect, useRef, useState } from 'react';
import useTranslateXImage from '@components/SaleHomePage/TranslateXImage';
function SaleHomePage() {
    const { container, title, des, boxImage, boxBtn, contentBox } = styles;
    const { translateXPosition, handleTranslateX, scrollPosition } = useTranslateXImage();

    useEffect(() => {
        handleTranslateX();
    }, [scrollPosition]);

    return (
        <div className={container}>
            <div
                className={boxImage}
                style={{
                    transform: `translateX(${translateXPosition}px)`,
                    transition: 'transform 0.6s ease-in-out'
                }}
            >
                <img
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg'
                    alt=''
                />
            </div>
            <div className={contentBox}>
                <h2 className={title}>Sale of the year</h2>
                <p className={des}>
                    Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.
                </p>
                <div className={boxBtn}>
                    <Button content={'Read more'} isPrimary={false} />
                </div>
            </div>
            <div
                className={boxImage}
                style={{
                    transform: `translateX(-${translateXPosition}px)`,
                    transition: 'transform 0.6s ease-in-out'
                }}
            >
                <img
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg'
                    alt=''
                />
            </div>
        </div>
    );
}

export default SaleHomePage;
