import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const CheckboxContainer = styled.div<{ haveLabel: boolean }>(
    () => css`
        display: flex;
        align-items: center;
        gap: 0;
        color: black;

        .MuiCheckbox-root {
            color: black;
        }

        label {
            cursor: pointer;
        }

        .content {
            display: flex;
            flex-direction: column;
            gap: 2px;
        }

        .Mui-disabled {
            opacity: 0.3;
        }

        &.success-color {
            svg {
                color: green;
            }
        }

        &.danger-color {
            svg {
                color: red;
            }
        }

        &.accent-color {
            svg {
                color: #029cfd;
            }
        }

        &.warning-color {
            svg {
                color: #ff9900;
            }
        }
    `
);
