import { FC, HTMLAttributes, ReactNode } from 'react';

// Assets
import { H6Container } from './H6.style';

// Types
interface IH6 extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
}

const H6: FC<IH6> = ({ children, ...props }) => {
    return <H6Container {...props}>{children}</H6Container>;
};

export default H6;
