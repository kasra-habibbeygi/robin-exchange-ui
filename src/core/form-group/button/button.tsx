/* eslint-disable max-len */
import { FC, HTMLAttributes, ReactNode } from 'react';

// Assets
import { ButtonContainer } from './button.style';

// MUI
import { CircularProgress } from '@mui/material';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    /**
     * You must definitely provide a child for the button. The child can be anything, ranging from a string to composite HTML elements.
     */
    children: ReactNode;
    /**
     * If you need a loading indicator inside the button, enable this property.
     */
    loading?: boolean;
    variant?: 'outline' | 'filled' | 'ghost';
    radius?: 'normal' | 'rounded' | 'sharp';
    color?: 'accent';
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
    onClick = null
}) => {
    return (
        <ButtonContainer
            className={`${className} ${variant} ${radius}-radius ${color}-color ${className ? className : ''} ${disabled ? 'disabled' : ''}`}
            disabled={loading || disabled}
            type={type}
            {...(onClick && { onClick })}
        >
            {loading ? <CircularProgress className='loader-field' /> : children}
        </ButtonContainer>
    );
};

export default Button;
