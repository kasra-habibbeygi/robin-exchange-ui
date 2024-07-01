/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable init-declarations */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { ChangeEvent, MouseEvent, ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import isEqual from 'lodash/isEqual';

// Assets
import { SelectContainer, SelectDropDownContainer } from './select.style';

// Components
import Input from '../input';
import { useOutsideClick, useWindowSize } from '@/hooks';
import { OutlineAngle, OutlineCross } from '@/icons';

// Hooks

// Types
interface ISelect<T> {
    options: T[];
    value: T[keyof T] | T[keyof T][] | T | T[] | null;
    name: string;
    renderOption: (item: T) => ReactNode | string;
    onChange: (value: T | T[] | T[keyof T] | T[keyof T][]) => void;
    label?: string;
    placeholder?: string;
    returnOption?: 'all' | keyof T;
    multiSelect?: boolean;
    className?: string;
    searchKeys?: [keyof T];
}

const Select: <T>({
    name,
    label,
    placeholder,
    options,
    renderOption,
    onChange,
    returnOption,
    value,
    multiSelect,
    className,
    searchKeys
}: ISelect<T>) => ReactNode = ({
    name,
    label,
    placeholder,
    options,
    returnOption = 'all',
    value,
    renderOption,
    onChange,
    className,
    searchKeys,
    multiSelect = false
}) => {
    const dropDownRef = useRef<HTMLDivElement>(null);
    const [dropDownState, setDropDownState, ref] = useOutsideClick();
    const [optionsTemp, setOptionsTemp] = useState(options);
    const [searchInputValue, setSearchInputValue] = useState('');
    const [selectPosition, setSelectPosition] = useState({ top: 0, left: 0, width: 0 });
    const [isClient, setIsClient] = useState(false);
    const [width, height] = useWindowSize();

    const activeSelectRowHandler = (item: (typeof options)[0]) => {
        const isActiveRow = returnOption === 'all' ? isEqual(value, item) : item[returnOption] === value;
        return isActiveRow ? 'active_row' : '';
    };

    const onSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchInputValue(e.target.value);

        if (e.target.value === '') {
            setOptionsTemp(options);
        } else {
            const test = searchKeys?.map(searchKeysItem =>
                options.filter(item => (item[searchKeysItem] as string).toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
            );
            setOptionsTemp(test![0]);
        }
    };

    const onRemoveHandler = (filteredOption: typeof options) => {
        if (returnOption === 'all') {
            const filteredValue = (value as (typeof options)[]).filter(item => !isEqual(item, filteredOption)) as any;

            onChange(filteredValue.length ? filteredValue : null);
        } else {
            //@ts-ignore
            const filteredValue = (value as (typeof options)[]).filter(item => item !== filteredOption[returnOption]) as any;
            onChange(filteredValue.length ? filteredValue : null);
        }

        //@ts-ignore
        setOptionsTemp([...optionsTemp, filteredOption]);
    };

    const labelProviderHandler = () => {
        if (value === null) {
            return placeholder || '';
        }

        if (multiSelect) {
            const selectedValues = Array.isArray(value) ? value : [value];

            return (
                <span className='multi_select_pill_container'>
                    {selectedValues.map(selectedValue => {
                        const filteredOption =
                            returnOption === 'all'
                                ? options.find(optionItem => isEqual(optionItem, selectedValue))
                                : options.find(optionItem => optionItem[returnOption] === selectedValue);

                        return filteredOption ? (
                            <span className='multi_select_pill'>
                                {renderOption(filteredOption)}
                                <OutlineCross onClick={() => onRemoveHandler(filteredOption as typeof options)} />
                            </span>
                        ) : null;
                    })}
                </span>
            );
        }
        const filteredOption =
            returnOption === 'all'
                ? options.find(optionItem => isEqual(optionItem, value))
                : options.find(optionItem => optionItem[returnOption] === value);

        return filteredOption ? renderOption(filteredOption) : '';
    };

    const onChangeValueHandler = (item: (typeof options)[number]) => {
        let updatedValue;

        if (multiSelect) {
            if (value === null) {
                updatedValue = returnOption === 'all' ? [item] : [item[returnOption]];
                setOptionsTemp(optionsTemp.filter(optionsTempItems => optionsTempItems !== item));
            } else {
                updatedValue = returnOption === 'all' ? [...(value as []), item] : [...(value as []), item[returnOption]];
                setOptionsTemp(optionsTemp.filter(optionsTempItems => optionsTempItems !== item));
            }
        } else {
            updatedValue = returnOption === 'all' ? item : item[returnOption];
        }

        onChange(updatedValue);
        setDropDownState(false);
    };

    const onSelectOpenHandler = (event: MouseEvent<HTMLDivElement | HTMLOrSVGElement>) => {
        if (event.target === event.currentTarget) {
            setDropDownState(!dropDownState);
        }
    };

    useEffect(() => {
        if (dropDownRef.current) {
            const rect = dropDownRef.current.getBoundingClientRect();
            setSelectPosition({
                top: rect.top + window.scrollY + rect.height,
                left: rect.left + window.scrollX,
                width: rect.width
            });
        }
    }, [width, height]);

    useEffect(() => {
        setIsClient(true);

        if (multiSelect && value) {
            if (returnOption === 'all') {
                const filteredArray = optionsTemp.filter(item1 => {
                    return !(value as (typeof options)[]).some(item2 => isEqual(item1, item2));
                });
                setOptionsTemp(filteredArray);
            } else {
                const filteredArray = optionsTemp.filter(item => {
                    //@ts-ignore
                    return !(value as []).includes(item[returnOption]);
                });
                setOptionsTemp(filteredArray);
            }
        }
    }, []);

    return (
        <SelectContainer ref={ref} className={`${dropDownState ? 'select_active' : ''} ${className ? className : ''}`}>
            {label && <label> {label}</label>}
            <div className={`select_field ${value !== null}`} onClick={onSelectOpenHandler} ref={dropDownRef}>
                <span className='placeholder'>{labelProviderHandler()}</span>
                <OutlineAngle className='select_arrow' onClick={onSelectOpenHandler} />
            </div>
            {isClient &&
                createPortal(
                    <SelectDropDownContainer
                        className={`drop_down_field ${dropDownState ? 'drop_down_active' : ''}`}
                        selectPosition={selectPosition}
                        ref={ref}
                    >
                        {searchKeys && (
                            <div className='search_field'>
                                <Input name='search' onChange={e => onSearchHandler(e)} value={searchInputValue} placeholder='Search' />
                            </div>
                        )}
                        <ul>
                            {optionsTemp &&
                                optionsTemp.map((item, index) => (
                                    <li
                                        key={`${name}_${index}_select_options`}
                                        className={activeSelectRowHandler(item)}
                                        onClick={() => onChangeValueHandler(item)}
                                    >
                                        {renderOption(item)}
                                    </li>
                                ))}
                        </ul>
                        {!optionsTemp?.length && (
                            <div className='empty_field_select'>
                                <p>There is no item to display!</p>
                            </div>
                        )}
                    </SelectDropDownContainer>,
                    document.body
                )}
        </SelectContainer>
    );
};

export default Select;
