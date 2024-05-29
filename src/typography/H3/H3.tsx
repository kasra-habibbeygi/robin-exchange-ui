import { FC, HTMLAttributes, ReactNode } from 'react';

// Assets
import { H3Container } from './H3.style';

// Types
interface IH3 extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
}

const H3: FC<IH3> = ({ children, ...props }) => {
    return <H3Container {...props}>{children}</H3Container>;
};

export default H3;
