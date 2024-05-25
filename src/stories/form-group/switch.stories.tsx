import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '../../core';

const meta: Meta<typeof Switch> = {
    component: Switch,
    title: 'Design System/Form Group/Switch',
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Primary: Story = {
    name: 'Switch',
    args: {
        label: 'label',
        subLabel: 'Sub Label',
        type: 'rounded'
    }
};
