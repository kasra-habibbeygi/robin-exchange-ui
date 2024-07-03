/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';
import { InputContainer } from './input.style';

// Types
interface IInput {
    type?: 'text' | 'number' | 'password' | 'tel';
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    variant?: 'filled' | 'outline' | 'shadow';
    radius?: 'sharp' | 'rounded' | 'normal';
    className?: string;
    register: any;
}

const Input: FC<IInput> = ({
    type = 'text',
    placeholder,
    className,
    disabled = false,
    variant = 'outline',
    radius = 'normal',
    register,
    ...props
}) => {
    return (
        <InputContainer className={`input-container ${className ? className : ''} ${disabled ? 'disabled' : ''}`}>
            {/* {label && <label htmlFor={name}>{label}</label>} */}
            <input
                className={`${variant} ${radius}-radius`}
                type={type === 'number' ? 'text' : type}
                placeholder={placeholder}
                disabled={disabled}
                {...register}
                {...props}
            />
        </InputContainer>
    );
};

export default Input;
