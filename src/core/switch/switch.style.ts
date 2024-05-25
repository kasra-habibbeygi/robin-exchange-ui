import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const SwitchContainer = styled.div(
    () => css`
        display: flex;
        align-items: center;
        gap: 10px;

        .label {
            p {
                margin: 0;
                text-transform: capitalize;
            }
        }

        .MuiSwitch-root {
            height: 22px;
            width: 38px;
            padding: 0;
            overflow: visible;
        }

        .MuiSwitch-switchBase {
            top: -6px;
            left: -5px;
        }

        .MuiSwitch-thumb {
            width: 16px;
            height: 16px;
            background-color: #ffffff;
        }

        .MuiSwitch-track {
            border-radius: 6px;
            background-color: #cdd1e3;
            opacity: 1 !important;
        }

        .Mui-checked {
            transform: translateX(14px);

            .MuiSwitch-thumb {
                background-color: #ffffff;
            }

            + .MuiSwitch-track {
                background-color: #3ebd89 !important;
            }
        }

        &.normal-type {
            .MuiSwitch-track {
                border-radius: 6px;
            }

            .MuiSwitch-thumb {
                border-radius: 4px;
            }
        }

        &.rounded-type {
            .MuiSwitch-track {
                border-radius: 50px;
            }

            .MuiSwitch-thumb {
                border-radius: 100px;
            }
        }
    `
);
