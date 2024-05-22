import { useEffect, useState } from 'react';

interface IUseTimer {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    setNewCountDown: (state: number) => void;
}

const useTimer: (targetDate: number) => IUseTimer = (targetDate = 0) => {
    const [countDown, setCountDown] = useState<number>(targetDate);

    useEffect(() => {
        const myInterval = setInterval(() => {
            setCountDown(countDown - 1000);
        }, 1000);

        if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
            clearInterval(myInterval);
        }

        return () => {
            clearInterval(myInterval);
        };
    });

    let days: number = Math.floor(countDown / (1000 * 60 * 60 * 24));
    let hours: number = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes: number = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    let seconds: number = Math.floor((countDown % (1000 * 60)) / 1000);

    if (days < 0) {
        days = 0;
    }

    if (hours < 0) {
        hours = 0;
    }

    if (minutes < 0) {
        minutes = 0;
    }

    if (seconds < 0) {
        seconds = 0;
    }

    const setNewCountDown = (state: number) => {
        setCountDown(state);
    };

    return { days, hours, minutes, seconds, setNewCountDown };
};

export default useTimer;
