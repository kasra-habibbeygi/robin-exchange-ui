import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@/core/form-group';

const meta: Meta<typeof Textarea> = {
    component: Textarea,
    title: 'Design System/Form Group/Textarea',
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Primary: Story = {
    name: 'Textarea',
    args: {
        label: 'Test',
        placeholder: 'Test',
        variant: 'outline'
    }
};
