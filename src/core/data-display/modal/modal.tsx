import { forwardRef, MouseEvent, ReactNode, useEffect, useImperativeHandle, useRef } from 'react';
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
    maxWidth: 'xs' | 'sm' | { [key: `${'min' | 'max'}-width: ${string}`]: string }[];
    mobileView?: `${string}px`;
}

export interface ModalRef {
    close: () => void;
}

const ModalComponent = forwardRef<ModalRef, IModal>(({ children, maxWidth, onClose, status, blur = true, mobileView }, ref) => {
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

    useImperativeHandle(ref, () => ({
        close: () => {
            closeModal();
        }
    }));

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
});

const Modal = forwardRef<ModalRef, IModal>(({ children, maxWidth, onClose, status, blur = true, mobileView }, ref) => {
    return (
        <ModalComponent maxWidth={maxWidth} onClose={onClose} status={status} blur={blur} mobileView={mobileView} ref={ref}>
            {children}
        </ModalComponent>
    );
});

export default Modal;
