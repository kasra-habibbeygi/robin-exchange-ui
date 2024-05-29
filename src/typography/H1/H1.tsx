import { FC, HTMLAttributes, ReactNode } from 'react';

// Assets
import { H1Container } from './H1.style';

// Types
interface IH1 extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
}

const H1: FC<IH1> = ({ children, ...props }) => {
    return <H1Container {...props}>{children}</H1Container>;
};

export default H1;
