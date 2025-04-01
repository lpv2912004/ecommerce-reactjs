import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
const CountDownTimer = ({ targetDate }) => {
    const { box, title } = styles;
    const calCulateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                Hours: Math.floor(
                    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                ),
                Mins: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                Secs: Math.floor((difference % (1000 * 60)) / 1000)
            };

            return timeLeft;
        }
    };

    const [timeLeft, setTimeLeft] = useState(calCulateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calCulateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    const formatNumber = (number) => {
        return String(number).padStart(2, '0');
    };

    const timerComponent = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (timeLeft[interval] !== undefined) {
            timerComponent.push(
                <span className={box} key={interval}>
                    {formatNumber(timeLeft[interval])}{' '}
                    <span className={title}>{interval} </span>
                </span>
            );
        }
    });

    return timerComponent;
};
export default CountDownTimer;
