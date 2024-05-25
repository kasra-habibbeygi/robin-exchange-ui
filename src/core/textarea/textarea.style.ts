import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const TextAreaContainer = styled.div(
    () => css`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;

        label {
            text-transform: capitalize;
        }

        textarea {
            resize: none;
            width: 100%;
            min-height: 100px;
            border: 1px solid #d9d9d9;
            border-radius: 6px;
            padding: 16px;
            font-family: 'Product Sans';
            font-size: 16px;

            &:focus {
                border: 1px solid #ffd335;
                outline: none;
            }
        }
    `
);
