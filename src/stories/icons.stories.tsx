import type { Meta, StoryObj } from '@storybook/react';
import SVGList from '../icons/list';

const meta: Meta<typeof SVGList> = {
    component: SVGList,
    title: 'Icons/List'
};

export default meta;
type Story = StoryObj<typeof SVGList>;

export const Primary: Story = {
    name: 'List'
};
