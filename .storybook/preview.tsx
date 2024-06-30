import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider, createTheme } from '@mui/material';
import { designToken } from '../src/core/configs/theme'
import './global.css';

const preview: Preview = {
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            defaultValue: 'light',
            toolbar: {
                title: 'Theme',
                items: ['light', 'dark'],
                dynamicTitle: true,
            },
        },
        locale: {
            description: 'Internationalization locale',
            defaultValue: 'en',
            toolbar: {
                icon: 'globe',
                items: [
                    { value: 'en', title: 'English' },
                    { value: 'fa', title: 'فارسی' },
                ],
            },
        },
    },
    parameters: {
        backgrounds: {
            default: 'light',
            values: [
                {
                    name: 'light',
                    value: '#fff',
                },
                {
                    name: 'dark',
                    value: '#000',
                },
            ],
        },
    },
};

export const decorators = [
    (Story: any, { globals }) => {
        const { locale, theme } = globals;

        const directionClass = locale === 'fa' ? 'direction-rtl' : 'direction-ltr';
        const fontClass = locale === 'fa' ? 'font-fa' : 'font-en';
    
        const themeObject = designToken(theme, locale === 'fa' ? 'rtl' : 'ltr');    
        const generatedTheme = createTheme(themeObject);
    
        return (
            <div className={`${directionClass} ${fontClass}`}>
                <ThemeProvider theme={generatedTheme}>
                    <Story />
                </ThemeProvider>
            </div>
        );
    },
];

export default preview;
