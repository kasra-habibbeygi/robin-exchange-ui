import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '../../core';

const meta: Meta<typeof Tooltip> = {
    component: Tooltip,
    title: 'Design System/Data Display/Tooltip',
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Primary: Story = {
    name: 'Tooltip',
    args: {
        children: <b>Test</b>,
        title: 'for Test'
    }
};
