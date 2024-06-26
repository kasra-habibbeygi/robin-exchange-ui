// Assets
import { ChangeEvent, FC, ReactNode } from 'react';
import { CheckboxContainer } from './checkbox.style';

// MUI
import { Checkbox as MUICheckbox } from '@mui/material';

// Types
interface ICheckbox {
    checked: boolean;
    label?: ReactNode;
    subTitle?: ReactNode;
    color?: 'accent' | 'danger' | 'success' | 'warning';
    name: string;
    className?: string;
    disabled?: boolean;
    onChange: (status: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<ICheckbox> = ({ checked, label, name, onChange, subTitle, disabled = false, color = 'accent', className }) => {
    return (
        <CheckboxContainer haveLabel={!!label} className={`${className ? className : ''} ${color}-color`}>
            <MUICheckbox id={name} name={name} checked={checked} onChange={onChange} size='small' disabled={disabled} />
            <div className='content'>
                {label && <label htmlFor={name}>{label}</label>}
                {subTitle && <small>{subTitle}</small>}
            </div>
        </CheckboxContainer>
    );
};

export default Checkbox;
