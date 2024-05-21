import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '../../core';

const meta: Meta<typeof Pagination> = {
    component: Pagination,
    title: 'Design System/Navigation/Pagination',
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Primary: Story = {
    name: 'Pagination',
    args: {
        totalPages: 20
    }
};
