import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MenuContainer = styled.div(
    () => css`
        position: relative;

        .menu-container {
            opacity: 0;
            pointer-events: none;
            transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
            background-color: red;
            width: max-content;
            bottom: -26px;
            position: absolute;

            &.active {
                pointer-events: initial;
                opacity: 1;
            }
        }
    `
);
