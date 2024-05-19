import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const ButtonContainer = styled(Button)(
    () => css`
        font-size: 14px;
        font-weight: 500;
        padding: 6px 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 30px;
        height: 30px;
        color: red;
        font-weight: 400;
        text-transform: capitalize;

        &.filled {
            &.success-color {
                color: white;
                background-color: green;
            }

            &.danger-color {
                color: white;
                background-color: red;
            }

            &.accent-color {
                color: white;
                background-color: #029cfd;
            }

            &.warn-color {
                color: white;
                background-color: #ff9900;
            }
        }

        &.outline {
            background-color: transparent;

            &.success-color {
                color: green;
                border: 1px solid green;

                .loader-field {
                    svg {
                        color: green;
                    }
                }
            }

            &.accent-color {
                color: #029cfd;
                border: 1px solid #029cfd;

                .loader-field {
                    svg {
                        color: #029cfd;
                    }
                }
            }

            &.warn-color {
                color: #ff9900;
                border: 1px solid #ff9900;

                .loader-field {
                    svg {
                        color: #ff9900;
                    }
                }
            }

            &.danger-color {
                color: red;
                border: 1px solid red;

                .loader-field {
                    svg {
                        color: red;
                    }
                }
            }
        }

        &.ghost {
            background-color: transparent;

            &.success-color {
                color: green;

                .loader-field {
                    svg {
                        color: green;
                    }
                }
            }

            &.danger-color {
                color: red;

                .loader-field {
                    svg {
                        color: red;
                    }
                }
            }

            &.accent-color {
                color: #029cfd;

                .loader-field {
                    svg {
                        color: #029cfd;
                    }
                }
            }

            &.warn-color {
                color: #ff9900;

                .loader-field {
                    svg {
                        color: #ff9900;
                    }
                }
            }
        }

        &.disabled {
            opacity: 0.4;
            cursor: not-allowed;
        }

        &.normal-radius {
            border-radius: 4px;
        }

        &.rounded-radius {
            border-radius: 500px;
        }

        &.sharp-radius {
            border-radius: 0;
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
