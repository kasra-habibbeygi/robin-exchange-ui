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
                title: (
                    <p>
                        If you could have any superpower, what would it be and why?If you could have any superpower, what would it be and
                        why?
                    </p>
                ),
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
                title: <p>What's the last book you gave up on and stopped reading?</p>,
                content: (
                    <>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam distinctio itaque possimus minus facilis
                            quidem eligendi sint magni qui eveniet rem fuga labore, iusto, voluptas deleniti ut dolor obcaecati at! Lorem
                            ipsum dolor, sit amet consectetur adipisicing elit. Aperiam fugiat excepturi laborum iusto aspernatur suscipit
                            quia possimus laboriosam natus aut iste magni et facilis autem voluptatum consequuntur, sapiente cumque
                            rem!Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam distinctio itaque possimus minus facilis
                            quidem eligendi sint magni qui eveniet rem fuga labore, iusto, voluptas deleniti ut dolor obcaecati at! Lorem
                            ipsum dolor, sit amet consectetur adipisicing elit. Aperiam fugiat excepturi laborum iusto aspernatur suscipit
                            quia possimus laboriosam natus aut iste magni et facilis autem voluptatum consequuntur, sapiente cumque rem!
                        </div>
                    </>
                )
            },
            {
                title: <p>In your group of friends, what role do you play?</p>,
                content: (
                    <>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam distinctio itaque possimus minus facilis
                            quidem eligendi sint magni qui eveniet rem fuga labore, iusto, voluptas deleniti ut dolor obcaecati at! Lorem
                            ipsum dolor, sit amet consectetur adipisicing elit. Aperiam fugiat excepturi laborum iusto aspernatur suscipit
                            quia possimus laboriosam natus aut iste magni et facilis autem voluptatum consequuntur, sapiente cumque
                            rem!Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam distinctio itaque possimus minus facilis
                            quidem eligendi sint magni qui eveniet rem fuga labore, iusto, voluptas deleniti ut dolor obcaecati at! Lorem
                            ipsum dolor, sit amet consectetur adipisicing elit. Aperiam fugiat excepturi laborum iusto aspernatur suscipit
                            quia possimus laboriosam natus aut iste magni et facilis autem voluptatum consequuntur, sapiente cumque rem!
                        </div>
                    </>
                )
            },
            {
                title: <p>Have you ever saved someone's life?</p>,
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
