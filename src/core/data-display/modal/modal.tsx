import { FC, MouseEvent, ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useToggleModal } from '@/hooks';

// Assets
import { ModalContainer } from './modal.style';

// Types
interface IModal {
    children: ReactNode;
    status: boolean;
    onClose: () => void;
    blur?: boolean;
    /**
     * You can set the size of the modal yourself by writing the key of the object
     * as a media query and setting the value of the object to the size of the modal.
     */
    maxWidth: 'xs' | 'sm' | { [key: `${'min' | 'max'}-width: ${string}`]: string }[];
    /**
     * When you set this prop, your modal will open from the bottom in responsive mode.
     */
    mobileView?: `${string}px`;
}

const ModalComponent: FC<IModal> = ({ children, maxWidth, onClose, status, blur = true, mobileView }) => {
    const [modalStatus, closeModal] = useToggleModal(status, onClose);
    const closeActionRef = useRef<HTMLDivElement | null>(null);

    const handleClose = (event: MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            closeModal();
        }
    };

    const handleCloseActionClick = () => {
        closeModal();
    };

    useEffect(() => {
        const closeActionElement = document.getElementById('close-modal');
        if (closeActionElement) {
            closeActionRef.current = closeActionElement as HTMLDivElement;
            closeActionRef.current.addEventListener('click', handleCloseActionClick);
        }

        return () => {
            if (closeActionRef.current) {
                closeActionRef.current.removeEventListener('click', handleCloseActionClick);
            }
        };
    }, [status]);

    return (
        <>
            {createPortal(
                <ModalContainer status={modalStatus} maxWidth={maxWidth} blurStatus={blur} mobileView={mobileView ?? null}>
                    <span className='back-layer' onClick={handleClose}></span>
                    <div className='modal-body'>
                        <div className='scroll-field'>{children}</div>
                    </div>
                </ModalContainer>,
                document.body
            )}
        </>
    );
};

const Modal: FC<IModal> = ({ children, maxWidth, onClose, status, blur = true, mobileView }) => {
    return (
        <ModalComponent maxWidth={maxWidth} onClose={onClose} status={status} blur={blur} mobileView={mobileView}>
            {children}
        </ModalComponent>
    );
};

export default Modal;
