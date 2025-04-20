import styles from './styles.module.scss';
import { CgClose } from 'react-icons/cg';

function ItemProduct() {
    const { container, boxContent, title, price, boxClose } = styles;
    return (
        <div className={container}>
            <img
                src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.1-min.jpg'
                alt=''
            />

            <div className={boxClose}>
                <CgClose style={{ fontSize: '20px', color: 'c1c1c1' }} />
            </div>

            <div className={boxContent}>
                <div className={title}>title Image</div>
                <div className={price}>$199.99</div>
            </div>
        </div>
    );
}

export default ItemProduct;
