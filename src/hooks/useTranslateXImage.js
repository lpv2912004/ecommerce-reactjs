import useScrollHandling from '@/hooks/useScrollHandling';
import { useEffect, useState } from 'react';
const useTranslateXImage = () => {
    const { scrollPosition, scrollDirection } = useScrollHandling();

    const [translateXPosition, setTranslateXPosition] = useState(75);

    const handleTranslateX = () => {
        if (scrollDirection == 'down' && scrollPosition >= 1500) {
            setTranslateXPosition(translateXPosition <= 0 ? 0 : translateXPosition - 1);
        } else if (scrollDirection == 'up') {
            setTranslateXPosition(translateXPosition >= 75 ? 75 : translateXPosition + 1);
        }
    };

    useEffect(() => {
        handleTranslateX();
    }, [scrollPosition]);

    return { translateXPosition };
};

export default useTranslateXImage;
