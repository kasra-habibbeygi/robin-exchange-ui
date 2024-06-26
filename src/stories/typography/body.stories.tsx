import type { Meta, StoryObj } from '@storybook/react';
import PSample from '@/typography/body.sample';

const meta: Meta<typeof PSample> = {
    component: PSample,
    title: 'Design System/typography/Paragraph'
};

export default meta;
type Story = StoryObj<typeof PSample>;

export const Primary: Story = {
    name: 'Paragraph',
    args: {
        children: 'Paragraph'
    }
};
