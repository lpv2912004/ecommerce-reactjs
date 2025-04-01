import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import CountDownBanner from '@components/CountDownBanner/CountDownBanner';
import ProductItem from '@components/ProductItem/ProductItem';
function HeadingListProduct({ data }) {
    // Set your target date here
    console.log('data la:', data.length, data);
    const { container, containerItem } = styles;
    return (
        <MainLayout>
            <div className={container}>
                <CountDownBanner />
                <div className={containerItem}>
                    {data.map((item) => {
                        return (
                            <ProductItem
                                key={item.id}
                                src={item.images[0]}
                                prevSrc={item.images[1]}
                                name={item.name}
                                price={item.price}
                            />
                        );
                    })}

                    {/* <ProductItem /> */}
                </div>
            </div>
            {/* <CountDownTimer targetDate={date} /> */}
        </MainLayout>
    );
}

export default HeadingListProduct;
