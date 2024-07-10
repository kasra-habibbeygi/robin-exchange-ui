import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { StylesConfig } from 'react-select';

export const SelectContainer = styled.div(
    ({ theme }) => css`
        label {
            color: #4b4b4b;
            margin-bottom: 4px;
            display: block;
            font-size: ${theme.fontSizeBase};
            width: 100%;
        }

        .robin-select__control {
            min-height: 56px;
            border-radius: ${theme.borderRadiusLarge};
            border: 1px solid ${theme.borderColorNormal};
        }

        .robin-select__control--is-focused {
            border: 2px solid ${theme.borderColorFocused} !important;
            box-shadow: none !important;
        }

        .robin-select__indicator-separator {
            display: none;
        }
    `
);

interface OptionType {
    value: string;
    label: string;
}

export const customStyles: StylesConfig<OptionType, false> = {
    dropdownIndicator: provided => ({
        ...provided,
        padding: '4px'
    }),

    menu: provided => ({
        ...provided,
        marginTop: '10px',
        borderRadius: '10px'
    }),

    menuList: provided => ({
        ...provided,
        borderRadius: '10px'
    }),

    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#006EFF' : state.isFocused ? '#006EFF' : 'white',
        color: state.isSelected ? 'white' : state.isFocused ? 'white' : 'black',
        padding: '4px 20px',
        cursor: 'pointer',
        textAlign: 'right',
        fontWeight: '300',
        fontSize: '16px'
    })
};
