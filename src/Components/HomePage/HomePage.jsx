import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import AdvanceHeading from '@components/AdvanceHeading/AdvanceHeading';
import Info from '@components/Info/Info';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
function HomePage() {
    const { container } = styles;
    return (
        <>
            <MyHeader />
            <Banner />
            <div className={container}>
                <Info />
                <AdvanceHeading />
                <HeadingListProduct />
            </div>
        </>
    );
}

export default HomePage;
