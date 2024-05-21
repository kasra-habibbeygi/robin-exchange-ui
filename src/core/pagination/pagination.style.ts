import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const PaginationContainer = styled.div(
    () => css`
        &.outline {
            &.accent-color {
                .MuiPaginationItem-root {
                    border: 1px solid #029cfd;
                }

                .Mui-selected {
                    background-color: #029cfd;
                    color: white;
                }
            }

            &.normal-color {
                .MuiPaginationItem-root {
                    border: 1px solid #d9d9d9;
                }

                .Mui-selected {
                    background-color: #d9d9d9;
                }
            }
        }

        &.filled {
            &.accent-color {
                .MuiPaginationItem-root {
                    background-color: #029cfd;
                    color: white;
                }

                .Mui-selected {
                    background-color: #005b95;
                }
            }

            &.normal-color {
                .MuiPaginationItem-root {
                    background-color: #d9d9d9;
                }

                .Mui-selected {
                    background-color: #646464;
                    color: white;
                }
            }
        }

        &.ghost {
            .MuiPaginationItem-root {
                background-color: transparent;
            }

            &.accent-color {
                .Mui-selected {
                    background-color: #005b95;
                    color: white;
                }
            }

            &.normal-color {
                .Mui-selected {
                    background-color: #d9d9d9;
                }
            }
        }

        .MuiPaginationItem-ellipsis {
            background-color: transparent !important;
            border: none !important;
        }

        &.normal-radius {
            button {
                border-radius: 4px;
            }
        }

        &.rounded-radius {
            button {
                border-radius: 50px;
            }
        }

        &.sharp-radius {
            button {
                border-radius: 0px;
            }
        }
    `
);
