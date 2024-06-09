import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const TextAreaContainer = styled.div(
    () => css`
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        label {
            text-transform: capitalize;
            display: flex;
            width: 100%;
        }

        textarea {
            display: block;
            resize: none;
            width: 100%;
            min-height: 100px;
            border-radius: 6px;
            padding: 16px;
            font-family: 'Product Sans';
            font-size: 16px;
            transition: all linear 0.2s;
            border: 1px solid transparent;
            outline: none;
        }

        .filled {
            background-color: #f5f5f5;

            &:focus {
                border: 1px solid #ffd335;
            }
        }

        .shadow {
            box-shadow:
                rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
                rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

            &:focus {
                border: 1px solid #ffd335;
            }
        }

        .outline {
            border: 1px solid #d9d9d9;

            &:focus {
                border: 1px solid #ffd335;
            }
        }
    `
);
