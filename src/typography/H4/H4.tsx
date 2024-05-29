import { FC, HTMLAttributes, ReactNode } from 'react';

// Assets
import { H4Container } from './H4.style';

// Types
interface IH4 extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
}

const H4: FC<IH4> = ({ children, ...props }) => {
    return <H4Container {...props}>{children}</H4Container>;
};

export default H4;
