import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '../../core';

const meta: Meta<typeof Accordion> = {
    component: Accordion,
    title: 'Design System/Data Display/Accordion',
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Primary: Story = {
    name: 'Accordion',
    args: {
        dataList: [
            {
                title: <p>title</p>,
                content: (
                    <>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                        </div>
                    </>
                )
            },
            {
                title: <p>title</p>,
                content: (
                    <>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                        </div>
                    </>
                )
            },
            {
                title: <p>title</p>,
                content: (
                    <>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                        </div>
                    </>
                )
            },
            {
                title: <p>title</p>,
                content: (
                    <>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                        </div>
                    </>
                )
            }
        ]
    }
};
