import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../../core';

const meta: Meta<typeof Checkbox> = {
    component: Checkbox,
    title: 'Design System/Form Group/Checkbox',
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
    name: 'Checkbox',
    args: {
        label: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  ',
        subTitle: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
    }
};
