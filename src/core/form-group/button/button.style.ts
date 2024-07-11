import { css } from '@emotion/react';
import { Button } from '@mui/material';
import styled from '@emotion/styled';

export const ButtonContainer = styled(Button)(
    ({ theme }) => css`
        font-size: ${theme.fontSizeBase};
        font-weight: ${theme.fontWeightBase};
        padding: 6px 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 48px;
        height: 48px;
        text-transform: capitalize;
        font-family: 'Yekan Bakh' !important;

        &.filled {
            &.accent-color {
                color: white;
                background-color: ${theme.surfaceBrand};
            }
        }

        &.outline {
            background-color: transparent;

            &.accent-color {
                color: ${theme.textBrand};
                border: 1px solid ${theme.borderActive};

                .loader-field {
                    svg {
                        color: ${theme.textBrand};
                    }
                }
            }
        }

        &.ghost {
            background-color: transparent;

            &.accent-color {
                color: ${theme.textBrand};

                .loader-field {
                    svg {
                        color: ${theme.textBrand};
                    }
                }
            }
        }

        &.disabled {
            opacity: 0.6;
            cursor: not-allowed;
            background-color: #818389 !important;
        }

        &.normal-radius {
            border-radius: ${theme.radiusMedium};
        }

        &.rounded-radius {
            border-radius: ${theme.radiusRound};
        }

        &.sharp-radius {
            border-radius: ${theme.radiusNone};
        }

        .loader-field {
            width: 20px !important;
            height: 20px !important;
            display: block;
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
                color: white;
            }
        }
    `
);
