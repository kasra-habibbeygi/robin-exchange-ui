import { FC, HTMLAttributes, ReactNode } from 'react';

// Assets
import { PContainer } from './P.style';

// Types
interface IP extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
}

const P: FC<IP> = ({ children, ...props }) => {
    return <PContainer {...props}>{children}</PContainer>;
};

export default P;
