import { useState } from 'react';

const useToggleModal = (status: boolean, setStatus: () => void): [boolean, () => void] => {
    const [tempModalStatus, setTempModalStatus] = useState<boolean>(status);
    const onClose = () => {
        setTempModalStatus(false);

        setTimeout(() => {
            setStatus();
        }, 300);
    };

    return [tempModalStatus, onClose];
};

export default useToggleModal;
