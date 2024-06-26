import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/core/form-group';

const meta: Meta<typeof Input> = {
    component: Input,
    title: 'Design System/Form Group/Input',
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    name: 'Input',
    args: {
        label: 'Email'
    }
};
