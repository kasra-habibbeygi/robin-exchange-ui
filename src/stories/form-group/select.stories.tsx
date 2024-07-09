import type { Meta, StoryObj } from '@storybook/react';
import SelectSample from '@/core/form-group/select/select.sample';

const meta: Meta<typeof SelectSample> = {
    component: SelectSample,
    title: 'Design System/Form Group/Select',
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof SelectSample>;

export const Primary: Story = {
    name: 'Select'
};
