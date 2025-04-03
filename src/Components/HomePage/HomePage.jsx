import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import AdvanceHeading from '@components/AdvanceHeading/AdvanceHeading';
import Info from '@components/Info/Info';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import { useEffect, useState } from 'react';
import { getProduct } from '@/apis/productService';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import SaleHomePage from '@components/SaleHomePage/SaleHomePage';
import MyFooter from '@components/Footer/Footer';
function HomePage() {
    const { container } = styles;
    const [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        getProduct().then((res) => {
            setListProducts(res.contents);
        });
    }, []);

    return (
        <>
            <MyHeader />
            <Banner />
            <div className={container}>
                <Info />
                <AdvanceHeading />
                <HeadingListProduct data={listProducts.slice(0, 2)} />
                <PopularProduct data={listProducts.slice(2, listProducts.length)} />
                <SaleHomePage />
                <MyFooter />
            </div>
        </>
    );
}

export default HomePage;
