import { FC, MouseEvent, ReactNode } from 'react';

// Assets
import { ModalContainer } from './modal.style';
import { createPortal } from 'react-dom';
import useToggleModal from '../../hooks/useToggleModal';

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

    const handleClose = (event: MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            closeModal();
        }
    };

    return (
        <>
            {status &&
                createPortal(
                    <ModalContainer
                        status={modalStatus}
                        maxWidth={maxWidth}
                        onClick={handleClose}
                        blurStatus={blur}
                        mobileView={mobileView ?? null}
                    >
                        <div className='modal-body'>{children}</div>
                    </ModalContainer>,
                    document.body
                )}
        </>
    );
};

// This component is for implementing conditional rendering, which is essential for improving performance.
const Modal: FC<IModal> = ({ children, maxWidth, onClose, status, blur = true, mobileView }) => {
    return (
        <>
            {status && (
                <ModalComponent maxWidth={maxWidth} onClose={onClose} status={status} blur={blur} mobileView={mobileView}>
                    {children}
                </ModalComponent>
            )}
        </>
    );
};

export default Modal;
