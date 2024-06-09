import { ChangeEvent, FC } from 'react';
import { InputContainer } from './input.style';

// Types
interface IInput {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string | number;
    name: string;
    type?: 'text' | 'number' | 'password' | 'tel';
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    variant?: 'filled' | 'outline' | 'shadow';
    radius?: 'sharp' | 'rounded' | 'normal';
    className?: string;
}

const Input: FC<IInput> = ({
    type = 'text',
    onChange,
    value = '',
    label,
    placeholder,
    className,
    name,
    disabled = false,
    variant = 'outline',
    radius = 'normal'
}) => {
    const newValue = type === 'number' ? (value !== '' ? parseFloat(value as string).toLocaleString() : '') : value;

    return (
        <InputContainer className={`input-container ${className ? className : ''} ${disabled ? 'disabled' : ''}`}>
            {label && <label htmlFor={name}>{label}</label>}
            <input
                className={`${variant} ${radius}-radius`}
                type={type === 'number' ? 'text' : type}
                placeholder={placeholder}
                id={name}
                name={name}
                onChange={onChange}
                value={newValue}
                disabled={disabled}
            />
        </InputContainer>
    );
};

export default Input;
