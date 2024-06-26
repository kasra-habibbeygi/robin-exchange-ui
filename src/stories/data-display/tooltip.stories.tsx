import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '@/core/data-display';

const meta: Meta<typeof Tooltip> = {
    component: Tooltip,
    title: 'Design System/Data Display/Tooltip',
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Primary: Story = {
    name: 'Tooltip',
    args: {
        children: <b>Profile Information</b>,
        title: 'Architecto aut veniam praesentium. Numquam dolorem iusto odio.Quaerat quia provident velit saepe praesentium veritatis.'
    }
};
