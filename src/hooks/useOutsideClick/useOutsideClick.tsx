import { RefObject, useEffect, useRef, useState } from 'react';

const useOutsideClick = (): [boolean, (state: boolean) => void, RefObject<HTMLDivElement>] => {
    const [openStatus, setOpenStatus] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node) && openStatus) {
                setTimeout(() => {
                    setOpenStatus(false);
                }, 10);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openStatus]);

    return [openStatus, setOpenStatus, ref];
};

export default useOutsideClick;
