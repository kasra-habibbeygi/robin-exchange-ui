import Select from './select';
import { useForm } from 'react-hook-form';

const colourOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' }
];

interface Inputs {
    phoneNumber: string;
}

const SelectSample = () => {
    const { control } = useForm<Inputs>({ mode: 'onChange' });

    return <Select control={control} options={colourOptions} label='برای تست' name='phoneNumber' />;
};

export default SelectSample;
