import { FC, ReactNode, useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

// Components
import Button from '@/core/form-group/button';
import Modal from './modal';

//Types
interface IModalSample {
    children: ReactNode;
    /**
     * You can set the size of the modal yourself by writing the key of the object
     * as a media query and setting the value of the object to the size of the modal.
     */
    maxWidth: 'xs' | 'sm' | { [key: `${'min' | 'max'}-width: ${string}`]: string }[];
    status: boolean;
    onClose: () => void;
    blur?: boolean;
    /**
     * When you set this prop, your modal will open from the bottom in responsive mode.
     */
    mobileView?: `${string}px`;
}

const Test = styled.div(
    () => css`
        padding: 20px;
        text-align: center;
    `
);

const ModalSample: FC<IModalSample> = ({ maxWidth, blur, children }) => {
    const [sampleStatus, setSampleStatus] = useState(false);

    return (
        <>
            <Button onClick={() => setSampleStatus(true)}>Modal Sample</Button>
            <Modal maxWidth={maxWidth} onClose={() => setSampleStatus(false)} status={sampleStatus} blur={blur}>
                <Test>This is the Modal Sample {children}</Test>
            </Modal>
        </>
    );
};

export default ModalSample;
