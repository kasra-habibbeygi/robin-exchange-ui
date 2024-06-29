import React from "react";
import type { Preview } from "@storybook/react";
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
};

export const decorators = [
    (Story: any, { globals }) => {
        const { locale } = globals;
        const directionClass = locale === 'fa' ? 'direction-rtl' : 'direction-ltr';
        const fontClass = locale === 'fa' ? 'font-fa' : 'font-en';

        return (
            <div className={`${directionClass} ${fontClass}`}>
                <Story />
            </div>
        );
    },
];

export default preview;
