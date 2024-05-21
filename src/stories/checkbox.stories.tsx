import type { Meta, StoryObj } from '@storybook/react';
import { CheckBox } from '../core';

const meta: Meta<typeof CheckBox> = {
    component: CheckBox,
    title: 'Design System/Form Group/Checkbox',
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

export const Primary: Story = {
    name: 'Checkbox',
    args: {
        label: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  ',
        subTitle: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
    }
};
