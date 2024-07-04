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
            &.success-color {
                color: white;
                background-color: ${theme.colorSuccess};
            }

            &.danger-color {
                color: white;
                background-color: ${theme.colorError};
            }

            &.accent-color {
                color: white;
                background-color: ${theme.colorPrimary};
            }

            &.warn-color {
                color: white;
                background-color: ${theme.colorWarning};
            }
        }

        &.outline {
            background-color: transparent;

            &.success-color {
                color: green;
                border: 1px solid ${theme.colorSuccess};

                .loader-field {
                    svg {
                        color: ${theme.colorSuccess};
                    }
                }
            }

            &.accent-color {
                color: ${theme.colorPrimary};
                border: 1px solid ${theme.colorPrimary};

                .loader-field {
                    svg {
                        color: ${theme.colorPrimary};
                    }
                }
            }

            &.warn-color {
                color: ${theme.colorWarning};
                border: 1px solid ${theme.colorWarning};

                .loader-field {
                    svg {
                        color: ${theme.colorWarning};
                    }
                }
            }

            &.danger-color {
                color: ${theme.colorError};
                border: 1px solid ${theme.colorError};

                .loader-field {
                    svg {
                        color: ${theme.colorError};
                    }
                }
            }
        }

        &.ghost {
            background-color: transparent;

            &.success-color {
                color: ${theme.colorSuccess};

                .loader-field {
                    svg {
                        color: ${theme.colorSuccess};
                    }
                }
            }

            &.danger-color {
                color: ${theme.colorError};

                .loader-field {
                    svg {
                        color: ${theme.colorError};
                    }
                }
            }

            &.accent-color {
                color: ${theme.colorPrimary};

                .loader-field {
                    svg {
                        color: ${theme.colorPrimary};
                    }
                }
            }

            &.warn-color {
                color: ${theme.colorWarning};

                .loader-field {
                    svg {
                        color: ${theme.colorWarning};
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
            border-radius: ${theme.borderRadiusLarge};
        }

        &.rounded-radius {
            border-radius: ${theme.borderRadiusRound};
        }

        &.sharp-radius {
            border-radius: ${theme.borderRadiusNone};
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
