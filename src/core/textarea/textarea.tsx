import { ChangeEvent, FC, ReactNode } from 'react';

// Assets
import { TextAreaContainer } from './textarea.style';

// Types
interface ITextarea {
    className?: string;
    label?: ReactNode;
    placeholder?: string;
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    variant?: 'filled' | 'outline' | 'ghost';
}

const Textarea: FC<ITextarea> = ({ label, className, placeholder, onChange, name, value, variant = 'outline' }) => {
    return (
        <TextAreaContainer className={`${className ? className : ''} ${variant}`}>
            {label && <label htmlFor={name}>{label}</label>}
            <textarea name={name} id={name} value={value} onChange={e => onChange(e)} placeholder={placeholder}></textarea>
        </TextAreaContainer>
    );
};

export default Textarea;
