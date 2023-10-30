import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.' +
        'Numquam itaque laboriosam fugiat adipisci reiciendis voluptatem iste voluptatibus,' +
        'tempore suscipit id natus exercitationem, voluptates magnam! Nemo ipsum' +
        'pariatur alias nihil tenetur?',
};
