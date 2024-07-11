import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { StylesConfig } from 'react-select';

export const SelectContainer = styled.div(
    ({ theme }) => css`
        label {
            color: ${theme.textPrimary};
            margin-bottom: 4px;
            display: block;
            font-size: ${theme.fontSizeBase};
            width: 100%;
        }

        .robin-select__control {
            min-height: 56px;
            border-radius: ${theme.radiusMedium};
            border: 1px solid ${theme.borderPrimary};
        }

        .robin-select__control--is-focused {
            border: 2px solid ${theme.borderActive} !important;
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
        backgroundColor: state.isSelected ? '#0E73F9' : state.isFocused ? '#0E73F9' : 'white',
        color: state.isSelected ? 'white' : state.isFocused ? 'white' : 'black',
        padding: '4px 20px',
        cursor: 'pointer',
        textAlign: 'right',
        fontWeight: '300',
        fontSize: '14px'
    })
};
