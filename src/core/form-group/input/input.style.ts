import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const InputContainer = styled.div(
    ({ theme }) => css`
        width: 100%;

        input {
            width: 100%;
            color: ${theme.textPrimary};
            background-color: transparent;
            padding: 10px 12px;
            height: 38px;
            transition: all linear 0.1s;
            font-weight: ${theme.fontWeightBase};
            outline: none;
            font-size: ${theme.fontSizeBase};
            border: 1px solid transparent;

            :focus {
                outline: none;
                border: 1px solid ${theme.borderFocused};
            }

            &::placeholder {
                color: ${theme.textSecondary};
                font-size: ${theme.fontSizeBase};
            }
        }

        &.disabled {
            opacity: 0.5;
        }

        .filled {
            background-color: #f5f5f5;
        }

        .shadow {
            box-shadow:
                rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
                rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
        }

        .outline {
            border: 1px solid ${theme.borderPrimary};
        }

        .normal-radius {
            border-radius: ${theme.borderRadiusSmall};
        }

        .rounded-radius {
            border-radius: 50px;
        }

        .sharp-radius {
            border-radius: 0;
        }

        label {
            color: #4b4b4b;
            margin-bottom: 4px;
            display: block;
            font-size: ${theme.fontSizeBase};
            width: 100%;
        }
    `
);
