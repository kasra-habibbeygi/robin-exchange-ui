/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, ReactNode } from 'react';

// Assets
import { SwitchContainer } from './switch.style';

// MUI
import { Switch as MUISwitch } from '@mui/material';

// Types
interface ISwitch {
    label?: ReactNode;
    subLabel?: ReactNode;
    value: boolean;
    className?: string;
    type: 'normal' | 'rounded';
    onChange: (state: boolean) => void;
}

const Switch: FC<ISwitch> = ({ value, onChange, label, subLabel, className, type = 'normal' }) => {
    const onSwitchChangeHandler = (_: any, checked: boolean) => {
        onChange(checked);
    };

    return (
        <SwitchContainer className={`${className ? className : ''} ${type}-type`}>
            <MUISwitch checked={value} onChange={onSwitchChangeHandler} />
            {label && (
                <div className='label'>
                    <p>{label}</p>
                    <small>{subLabel}</small>
                </div>
            )}
        </SwitchContainer>
    );
};

export default Switch;
