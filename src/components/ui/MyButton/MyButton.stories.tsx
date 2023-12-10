// stories/MyButton.stories.tsx
// SCF3.0
import { Meta, Story } from '@storybook/react';
import { Provider } from 'jotai';
import MyButton, { MyButtonProps } from './MyButton';

const meta: Meta = {
  title: 'Components/MyButton',
  component: MyButton,
  decorators: [
    (Story) => (
      <Provider>
        <Story />
      </Provider>
    ),
  ],
  argTypes: {
    children: {
      options: ['Primary', 'Secondary'],
      control: { type: 'radio' },
    },
    onClick: { action: 'clicked' },
  },
};
export default meta;

const Template: Story<MyButtonProps> = (args) => <MyButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
};

export const Secondary = Template.bind({});
