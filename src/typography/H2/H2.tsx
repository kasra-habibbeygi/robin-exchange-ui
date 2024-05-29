import { FC, HTMLAttributes, ReactNode } from 'react';

// Assets
import { H2Container } from './H2.style';

// Types
interface IH2 extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
}

const H2: FC<IH2> = ({ children, ...props }) => {
    return <H2Container {...props}>{children}</H2Container>;
};

export default H2;
