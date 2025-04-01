import CountDownTimer from '@components/CountDownTimer/CountDownTimer';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
function CountDownBanner() {
    const { container, containerTimer, title, boxBtn } = styles;
    const date = '2025-12-00:00:00';
    return (
        <div className={container}>
            <div className={containerTimer}>
                <CountDownTimer targetDate={date} />
            </div>
            <p className={title}> The classics make a comeback</p>
            <div className={boxBtn}>
                <Button content={'Buy Now'} />
            </div>
        </div>
    );
}

export default CountDownBanner;
