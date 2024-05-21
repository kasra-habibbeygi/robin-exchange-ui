import type { Preview } from "@storybook/react";
import './global.css'

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
export default preview;
