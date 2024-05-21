import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from '../core';

const meta: Meta<typeof Radio> = {
    component: Radio,
    title: 'Design System/Form Group/Radio',
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Primary: Story = {
    name: 'Radio',
    args: {
        items: [
            {
                disabled: false,
                title: 'item 1',
                value: '1'
            },
            {
                disabled: false,
                title: 'item 2',
                value: '2'
            }
        ]
    }
};
