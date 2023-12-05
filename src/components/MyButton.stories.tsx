// stories/MyButton.stories.tsx
import { Meta, Story } from '@storybook/react';
import MyButton from './MyButton';

export default {
  title: 'Components/MyButton',
  component: MyButton,
} as Meta;

const Template: Story = (args) => <MyButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Click me',
};
