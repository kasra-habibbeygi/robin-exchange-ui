import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const InputContainer = styled.div(
    () => css`
        width: 100%;

        input {
            width: 100%;
            color: black;
            background-color: transparent;
            border-radius: 50px;
            padding: 10px 12px;
            height: 38px;
            transition: all linear 0.1s;
            font-weight: 400;
            outline: none;
            font-size: 14px;
            border: 1px solid transparent;

            :focus {
                outline: none;
                border: 1px solid #ffd335;
            }

            &::placeholder {
                color: #4b4b4b;
                font-size: 14px;
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
            border: 1px solid #d9d9d9;
        }

        .normal-radius {
            border-radius: 6px;
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
            font-size: 14px;
            width: 100%;
        }
    `
);
