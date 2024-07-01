import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const SelectContainer = styled.div(
    ({ theme }) => css`
        width: 100%;
        position: relative;

        label {
            color: ${theme.textActive};
            font-size: 14px;
            display: block;
            margin-bottom: 4px;
        }

        .select_field {
            width: 100%;
            color: white;
            background-color: transparent;
            border-radius: 18px;
            padding: 2px 12px;
            min-height: 38px;
            height: auto;
            border: 1px solid ${theme.mode === 'dark' ? '#4b4b4b' : '#EEEEEE'};
            transition: all linear 0.1s;
            cursor: pointer;
            position: relative;
            display: flex;
            align-items: center;

            .placeholder {
                color: ${theme.textSecondary};
                font-size: 14px;
            }
        }

        .select_arrow {
            width: 16px;
            height: 16px;
            color: ${theme.textSecondary};
            transform: rotate(90deg);
            position: absolute;
            right: 12px;
            transition: all 0.15s ease-out;
        }

        .drop_down_field {
            width: 100%;
            position: absolute;
            top: 60px;
            border-radius: 8px;
            padding: 6px;
            background: ${theme.mode === 'dark' ? '#5a5a5a29' : '#ffffff2b'};
            backdrop-filter: blur(10px);
            box-shadow: #0000001a 0px 2px 8px 0px;
            z-index: 1000;
            transition: all 0.15s ease-out;
            opacity: 0;
            pointer-events: none;
            max-height: 250px;
            overflow: auto;

            ul {
                list-style: none;
                display: flex;
                flex-direction: column;
                gap: 6px;

                li {
                    padding: 10px 12px;
                    border-radius: 4px;
                    color: ${theme.textActive};
                    font-size: 14px;
                    cursor: pointer;
                    transition: all linear 0.1s;

                    &.active_row {
                        background-color: #ffffff1a;
                    }

                    &:hover {
                        background-color: #ffffff0d;
                        backdrop-filter: blur(1.5px);
                    }
                }
            }
        }

        &.select_active {
            .select_arrow {
                transform: rotate(0);
            }
        }

        .multi_select_pill {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 6px;
            border-radius: 80px;
            background-color: ${theme.backgroundInputFocused};
            gap: 6px;

            svg {
                width: 16px;
                height: 16px;
                cursor: pointer;
                color: ${theme.colorError};
            }
        }

        .multi_select_pill_container {
            display: flex;
            flex-wrap: wrap;
            gap: 4px;
        }

        .empty_field_select {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 20px;
            color: ${theme.textSecondary};
            font-size: 14px;
            padding: 20px 0;

            svg {
                width: 40px;
                height: 40px;
            }
        }
    `
);

export const SelectDropDownContainer = styled.div<{ selectPosition: { width: number; left: number; top: number } }>(
    ({ theme, selectPosition }) => css`
        &.drop_down_field {
            width: ${selectPosition.width}px;
            position: absolute;
            top: calc(${selectPosition.top}px - 20px);
            border-radius: 8px;
            padding: 6px;
            background: ${theme.mode === 'dark' ? '#5a5a5a29' : '#ffffff2b'};
            backdrop-filter: blur(10px);
            box-shadow: #0000001a 0px 2px 8px 0px;
            z-index: 9999999999999;
            transition: all 0.15s ease-out;
            opacity: 0;
            pointer-events: none;
            max-height: 250px;
            overflow: auto;
            left: ${selectPosition.left}px;

            &.drop_down_active {
                top: calc(${selectPosition.top}px + 10px);
                left: ${selectPosition.left}px;
                opacity: 1;
                pointer-events: initial;
            }

            ul {
                list-style: none;
                display: flex;
                flex-direction: column;
                gap: 6px;

                li {
                    padding: 10px 12px;
                    border-radius: 4px;
                    color: ${theme.textActive};
                    font-size: 14px;
                    cursor: pointer;
                    transition: all linear 0.1s;

                    &.active_row {
                        background-color: #ffffff1a;
                    }

                    &:hover {
                        background-color: #ffffff0d;
                        backdrop-filter: blur(1.5px);
                    }
                }
            }
        }

        .empty_field_select {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 20px;
            color: ${theme.textSecondary};
            font-size: 14px;
            padding: 20px 0;

            svg {
                width: 40px;
                height: 40px;
            }
        }

        .search_field {
            margin-bottom: 8px;

            input {
                border-radius: 6px;
            }
        }
    `
);
