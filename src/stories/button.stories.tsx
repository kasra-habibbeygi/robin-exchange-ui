import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Design System/Form Group/Button',
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    name: 'I am the primary',
    args: {
        label: 'Default Label' // Provide a default value for the label
    }
};
