import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from '../../core';

const meta: Meta<typeof Menu> = {
    component: Menu,
    title: 'Design System/Data Display/Menu',
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Primary: Story = {
    name: 'Menu'
};
