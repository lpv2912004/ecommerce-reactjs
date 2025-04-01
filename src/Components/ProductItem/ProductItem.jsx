import styles from './styles.module.scss';
import fbIcon from '@icons/svgs/fbIcon.svg';
import insIcon from '@icons/svgs/insIcon.svg';
import ytbIcon from '@icons/svgs/ytbIcon.svg';
import CartIcon from '@icons/svgs/cartIcon.svg';
import HeartIcon from '@icons/svgs/heartIcon.svg';
import ReloadIcon from '@icons/svgs/reloadIcon.svg';
function ProductItem({ src, prevSrc, name, price }) {
    const {
        boxImg,
        showImageWhenHover,
        showFunctionWhenHover,
        boxIcon,
        title,
        priceClass
    } = styles;

    return (
        <div>
            <div className={boxImg}>
                <img src={src} alt={src} />
                <img
                    src={prevSrc}
                    alt={prevSrc}
                    className={showImageWhenHover}
                />
                <div className={showFunctionWhenHover}>
                    <div className={boxIcon}>
                        <img src={CartIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={HeartIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={ReloadIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={CartIcon} alt='' />
                    </div>
                </div>
            </div>
            <div className={title}>{name}</div>
            <div className={priceClass}>${price}</div>
        </div>
    );
}

export default ProductItem;
