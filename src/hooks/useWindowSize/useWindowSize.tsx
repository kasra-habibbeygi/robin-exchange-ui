import { useState, useEffect } from 'react';

interface WindowSize {
    width: number | undefined;
    height: number | undefined;
}

type ReturnTuple = [number | undefined, number | undefined];

const useWindowSize = (): ReturnTuple => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: undefined,
        height: undefined
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return [windowSize.width, windowSize.height];
};

export default useWindowSize;
