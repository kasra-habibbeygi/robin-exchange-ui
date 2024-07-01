import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@/core/form-group';

const meta: Meta<typeof Select> = {
    component: Select,
    title: 'Design System/Form Group/Select',
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
    name: 'Select',
    args: {
        name: '',
        onChange: () => {},
        value: null,
        renderOption: item => `${item}`,
        options: [
            {
                label: 'asd',
                value: 'asd'
            }
        ]
    }
};
