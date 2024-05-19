/* eslint-disable max-len */
import { FC, HTMLAttributes, ReactNode } from 'react';

// Assets
import { ButtonContainer } from './button.style';

// MUI
import { CircularProgress } from '@mui/material';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    loading?: boolean;
    variant?: 'outline' | 'filled' | 'ghost';
    radius?: 'normal' | 'rounded' | 'sharp';
    color?: 'success' | 'danger' | 'accent' | 'warn';
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    type?: 'submit' | 'button';
}

const Button: FC<ButtonProps> = ({
    children,
    className,
    loading = false,
    variant = 'filled',
    radius = 'normal',
    color = 'accent',
    disabled = false,
    type = 'button',
    onClick = null,
    ...props
}) => {
    return (
        <ButtonContainer
            className={`${className} ${variant} ${radius}-radius ${color}-color ${className ? className : ''} ${disabled ? 'disabled' : ''}`}
            disabled={loading || disabled}
            type={type}
            {...(onClick && { onClick })}
            {...props}
        >
            {loading ? <CircularProgress className='loader-field' /> : children}
        </ButtonContainer>
    );
};

export default Button;
