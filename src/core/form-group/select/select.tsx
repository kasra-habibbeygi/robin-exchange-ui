/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactSelect from 'react-select';
import { FC } from 'react';
import { Controller } from 'react-hook-form';

// Assets
import { customStyles, SelectContainer } from './select.style';

// type
interface ISelect {
    control: any;
    label?: string;
    name: string;
    defaultValue?: {
        value: string | number;
        label: string;
    } | null;
    options: {
        value: string | number;
        label: string;
    }[];
}

const Select: FC<ISelect> = ({ control, options, label, defaultValue, name }) => {
    return (
        <SelectContainer>
            <label>{label}</label>
            <Controller
                name={name}
                control={control}
                defaultValue=''
                render={({ field }) => (
                    <ReactSelect
                        className='select-component'
                        classNamePrefix='robin-select'
                        isDisabled={false}
                        defaultValue={defaultValue}
                        isLoading={false}
                        isClearable={false}
                        isRtl
                        isSearchable={false}
                        options={options}
                        placeholder=''
                        menuPortalTarget={document.body}
                        //@ts-ignore
                        styles={customStyles}
                        onChange={selectedOption => {
                            field.onChange(selectedOption);
                        }}
                        value={options.find(option => option.value === field.value)}
                    />
                )}
            />
        </SelectContainer>
    );
};

export default Select;
