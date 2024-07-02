import type { Meta, StoryObj } from '@storybook/react';
import ModalSample from '@/core/data-display/modal/modal.sample';

const meta: Meta<typeof ModalSample> = {
    component: ModalSample,
    title: 'Design System/Data Display/Modal',
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ModalSample>;

export const Primary: Story = {
    name: 'Modal',
    args: {
        maxWidth: 'sm',
        mobileView: '500px'
    }
};
