/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, HTMLAttributes } from 'react';
import { InputContainer } from './input.style';

// Types
interface IInput extends HTMLAttributes<HTMLInputElement> {
    type?: 'text' | 'number' | 'password' | 'tel';
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    variant?: 'filled' | 'outline' | 'shadow';
    radius?: 'sharp' | 'rounded' | 'normal';
    className?: string;
    register: any;
    error?: string;
}

const Input: FC<IInput> = ({
    type = 'text',
    placeholder,
    className,
    disabled = false,
    variant = 'outline',
    radius = 'normal',
    register,
    error,
    label,
    ...props
}) => {
    return (
        <InputContainer className={`input-container ${className ? className : ''} ${disabled ? 'disabled' : ''}`} error={!!error}>
            {label && <label>{label}</label>}
            <input
                className={`${variant} ${radius}-radius`}
                type={type === 'number' ? 'text' : type}
                placeholder={placeholder}
                disabled={disabled}
                {...register}
                {...props}
            />
            <p className='error-field'>{error}</p>
        </InputContainer>
    );
};

export default Input;
