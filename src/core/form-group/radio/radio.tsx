import { FC, ReactNode } from 'react';

// MUI
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

// Assets
import { RadioGroupContainer } from './radio.style';

// Types
interface IRadioButtonGroup {
    items: {
        title: ReactNode;
        value: string;
        disabled: boolean;
    }[];
    onChange: (value: string) => void;
    value: string;
    name: string;
    className?: string;
    color?: 'accent' | 'danger' | 'success' | 'warning';
}

const RadioButtonGroup: FC<IRadioButtonGroup> = ({ items, onChange, value, className, name, color = 'accent' }) => {
    return (
        <RadioGroupContainer className={`${className ? className : ''} ${color}-color`}>
            <RadioGroup onChange={(_, value) => onChange(value)} value={value} name={name}>
                {items.map((item, index) => (
                    <FormControlLabel key={`radio-${index}-${name}`} value={item.value} control={<Radio />} label={item.title} />
                ))}
            </RadioGroup>
        </RadioGroupContainer>
    );
};

export default RadioButtonGroup;
