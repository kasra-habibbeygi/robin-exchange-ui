import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const RadioGroupContainer = styled.div(
    () => css`
        &.accent-color {
            span {
                .MuiSvgIcon-root {
                    color: #029cfd;
                }
            }
        }

        &.danger-color {
            span {
                .MuiSvgIcon-root {
                    color: red;
                }
            }
        }

        &.success-color {
            span {
                .MuiSvgIcon-root {
                    color: green;
                }
            }
        }

        &.warning-color {
            span {
                .MuiSvgIcon-root {
                    color: #ff9900;
                }
            }
        }
    `
);
