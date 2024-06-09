import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface IAccordionContainer {
    contentHeight: number;
    lastOne: boolean;
    active: boolean;
    disabled: boolean | null;
}

export const AccordionContainer = styled.div<IAccordionContainer>(
    ({ contentHeight, lastOne, disabled, active }) => css`
        padding: 0 20px;
        border-bottom: ${lastOne ? '' : '1px solid #e5e5e5'};
        padding: 16px 0;
        opacity: ${disabled ? '0.5' : '1'};
        pointer-events: ${disabled ? 'none' : 'initial'};

        .title {
            font-weight: 400;
            cursor: pointer;
            font-size: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            svg {
                min-width: 20px;
                width: 20px;
                height: auto;
                margin-left: 20px;
                transform: rotate(${active ? '90deg' : '0'});
                transition: all 0.3s cubic-bezier(0.6, 0.24, 0.03, 0.74);
            }
        }

        .content {
            height: ${contentHeight}px;
            overflow: hidden;
            transition: all 0.3s cubic-bezier(0.6, 0.24, 0.03, 0.74);

            & > div {
                padding-top: 20px;
                padding-top: 20px;
                line-height: 26px;
                font-weight: 300;
            }
        }

        p {
            margin: 0;
        }
    `
);
