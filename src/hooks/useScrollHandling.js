import { useEffect, useRef, useState } from 'react';

const useScrollHandling = () => {
    const [scrollDirection, setScrollDirection] = useState(null);
    const prevScrollPosition = useRef(0);
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollTracking = () => {
        const currentScrollPosition = window.pageYOffset;

        if (currentScrollPosition > prevScrollPosition.current) {
            setScrollDirection('down');
        } else if (currentScrollPosition < prevScrollPosition.current) {
            setScrollDirection('up');
        }

        prevScrollPosition.current = currentScrollPosition <= 0 ? 0 : currentScrollPosition;

        setScrollPosition(currentScrollPosition);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollTracking);

        return () => window.removeEventListener('scroll', scrollTracking);
    }, []);

    return { scrollDirection, scrollPosition };
};
export default useScrollHandling;
