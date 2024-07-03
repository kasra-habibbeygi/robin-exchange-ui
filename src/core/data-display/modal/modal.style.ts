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

const slideIn = keyframes`
    0% {
        transform: translateY(100%);
    }

    100% {
        transform: translateY(0);
    }
`;

const slideOut = keyframes`
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(100%);
    }
`;

export const ModalContainer = styled.section<{
    maxWidth: 'xs' | 'sm' | { [key: `${'min' | 'max'}-width: ${string}`]: string }[];
    status: boolean;
    blurStatus: boolean;
    mobileView: `${string}px` | null;
}>(
    ({ maxWidth, status, blurStatus, mobileView, theme }) => css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 1500;
        display: flex;
        padding: 50px 0;

        .back-layer {
            animation: ${status ? FadeIn : FadeOut} 0.5s ease forwards;
            background: #00000094;
            backdrop-filter: ${blurStatus ? 'blur(2.5px)' : 'none'};
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }

        .modal-body {
            width: ${maxWidth === 'xs' ? '440px' : maxWidth === 'sm' && '600px'};
            animation: ${status ? FadeIn : FadeOut} 0.5s ease forwards;
            height: max-content;
            background-color: #fff;
            position: relative;
            z-index: 1;
            border-radius: ${theme.borderRadiusLarge};
            margin: auto;
            max-height: 100%;
            overflow: auto;
        }

        @media (max-width: ${mobileView}) {
            overflow: hidden;

            .scroll-field {
                max-height: inherit;
                overflow: auto;

                &::-webkit-scrollbar-track {
                    background: #ebebeb;
                    background-color: transparent;
                    border-radius: 50px;
                    width: 7px;
                }

                &::-webkit-scrollbar-thumb {
                    background: rgb(197, 197, 197);
                    border-radius: 50px;
                }

                &::-webkit-scrollbar-thumb:hover {
                    border-radius: 50px;
                    background: #767676;
                }

                &::-webkit-scrollbar-thumb:hover {
                    border-radius: 50px;
                }

                &::-webkit-scrollbar:horizontal {
                    width: 7px;
                }
            }

            .modal-body {
                border-radius: ${theme.borderRadiusLarge} ${theme.borderRadiusLarge} 0 0;
                margin: unset;
                position: absolute;
                bottom: 0;
                min-height: 250px;
                width: 100% !important;
                max-height: 80vh;
                padding: 10px;
                transition: all linear 0.2s;
                overflow: unset;
                animation: ${status ? slideIn : slideOut} 0.5s ease forwards;
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

        @media (max-width: 460px) {
            .modal-body {
                width: 100%;
            }
        }
    `
);
