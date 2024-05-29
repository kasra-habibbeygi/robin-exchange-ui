import { FC, HTMLAttributes, ReactNode } from 'react';

// Assets
import { SmallContainer } from './Small.style';

// Types
interface ISmall extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
}

const Small: FC<ISmall> = ({ children, ...props }) => {
    return <SmallContainer {...props}>{children}</SmallContainer>;
};

export default Small;
