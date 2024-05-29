import { FC, HTMLAttributes, ReactNode } from 'react';

// Assets
import { H5Container } from './H5.style';

// Types
interface IH5 extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
}

const H5: FC<IH5> = ({ children, ...props }) => {
    return <H5Container {...props}>{children}</H5Container>;
};

export default H5;
