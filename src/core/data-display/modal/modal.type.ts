import { ReactNode } from 'react';

export interface IModal {
    onClose: () => void;
    children: ReactNode;
    status: boolean;
    blur?: boolean;
    mobileView?: `${string}px`;
    maxWidth: 'xs' | 'sm' | { [key: `${'min' | 'max'}-width: ${string}`]: string }[];
}

export interface ModalRef {
    close: () => void;
}
