import CountDownTimer from '@components/CountDownTimer/CountDownTimer';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import CountDownBanner from '@components/CountDownBanner/CountDownBanner';
function HeadingListProduct() {
    const date = '2025-12-00:00:00'; // Set your target date here
    const { container, containerItem } = styles;
    return (
        <MainLayout>
            <div className={container}>
                <CountDownBanner />
                <div>Count down time</div>
                <div className={containerItem}>
                    <div>1</div>
                    <div>2</div>
                </div>
            </div>
            {/* <CountDownTimer targetDate={date} /> */}
        </MainLayout>
    );
}

export default HeadingListProduct;
