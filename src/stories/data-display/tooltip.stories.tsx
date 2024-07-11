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
        children: <b>اطلاعات پروفایل کاربری</b>,
        title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و '
    }
};
