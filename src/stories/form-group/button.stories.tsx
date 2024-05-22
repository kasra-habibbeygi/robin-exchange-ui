import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../core';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Design System/Form Group/Button',
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    name: 'Button',
    args: {
        children: 'button'
    }
};

export const Docs = () => {
    return <div>Use Timer Documentation</div>;
};
