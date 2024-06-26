import type { Meta, StoryObj } from '@storybook/react';
import HeadingSample from '@/typography/heading.sample';

const meta: Meta<typeof HeadingSample> = {
    component: HeadingSample,
    title: 'Design System/typography/Heading'
};

export default meta;
type Story = StoryObj<typeof HeadingSample>;

export const Primary: Story = {
    name: 'Heading',
    args: {
        children: 'Heading'
    }
};
