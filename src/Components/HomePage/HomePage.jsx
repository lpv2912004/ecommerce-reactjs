import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import AdvanceHeading from '@components/AdvanceHeading/AdvanceHeading';
import Info from '@components/Info/Info';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import { useEffect, useState } from 'react';
import { getProduct } from '@/apis/productService';
import PopularProduct from '@components/PopularProduct/PopularProduct';
function HomePage() {
    const { container } = styles;
    const [listProducts, setListProducts] = useState([]);
    useEffect(() => {
        getProduct().then((res) => {
            setListProducts(res.contents);
        });
    }, []);
    console.log(listProducts, 'list Product');
    return (
        <>
            <MyHeader />
            <Banner />
            <div className={container}>
                <Info />
                <AdvanceHeading />
                <HeadingListProduct data={listProducts.slice(0, 2)} />
                <PopularProduct
                    data={listProducts.slice(2, listProducts.length)}
                />
                <div style={{ height: '200px' }}></div>
            </div>
        </>
    );
}

export default HomePage;
