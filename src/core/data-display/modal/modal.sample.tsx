import { FC, ReactNode, useRef, useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

// Components
import Button from '@/core/form-group/button';
import Modal from './modal';

// Types
interface IModalSample {
    children: ReactNode;
    maxWidth: 'xs' | 'sm' | { [key: `${'min' | 'max'}-width: ${string}`]: string }[];
    mobileView?: `${string}px`;
    status: boolean;
    onClose: () => void;
    blur?: boolean;
}

const Test = styled.div(
    () => css`
        padding: 20px;
        text-align: center;
    `
);

interface ModalRef {
    close: () => void;
}

const ModalSample: FC<IModalSample> = ({ maxWidth, blur, children, mobileView }) => {
    const [sampleStatus, setSampleStatus] = useState(false);
    const modalRef = useRef<ModalRef>(null);

    const closeModal = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
    };

    return (
        <>
            <Button onClick={() => setSampleStatus(true)}>Modal Sample</Button>

            {sampleStatus && (
                <Modal
                    ref={modalRef}
                    maxWidth={maxWidth}
                    onClose={() => setSampleStatus(false)}
                    status={sampleStatus}
                    blur={blur}
                    mobileView={mobileView}
                >
                    <Test>
                        This is the Modal Sample {children}
                        <button onClick={closeModal}>Close Modal</button>
                    </Test>
                </Modal>
            )}
        </>
    );
};

export default ModalSample;
