import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const FadeIn = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

const FadeOut = keyframes`
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
`;

export const ModalContainer = styled.section<{
    maxWidth: 'xs' | 'sm' | { [key: `${'min' | 'max'}-width: ${string}`]: string }[];
    status: boolean;
    blurStatus: boolean;
    mobileView: `${string}px` | null;
}>(
    ({ maxWidth, status, blurStatus, mobileView }) => css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 1500;
        display: flex;
        overflow: auto;
        padding: 50px 0;
        background: #00000094;
        backdrop-filter: ${blurStatus ? 'blur(2.5px)' : 'none'};
        animation: ${status ? FadeIn : FadeOut} 0.5s ease forwards;

        .modal-body {
            width: ${maxWidth === 'xs' ? '440px' : maxWidth === 'sm' && '600px'};
            height: max-content;
            background-color: #fff;
            position: relative;
            z-index: 1;
            border-radius: 8px;
            margin: auto;
        }

        @media (max-width: ${mobileView}) {
            overflow: hidden;

            .modal-body {
                margin: unset;
                position: absolute;
                bottom: 0;
                min-height: 250px;
                width: 100%;
                max-height: 90vh;
            }
        }

        ${Array.isArray(maxWidth) &&
        maxWidth.map(
            item => `
                @media (${Object.keys(item)[0]}) {
                    .modal-body {
                        width: ${Object.values(item)[0]};
                    }
                }
            `
        )}

        @media (max-width: 680px) {
            .modal-body {
                width: ${maxWidth === 'sm' && '440px'};
            }
        }
    `
);
