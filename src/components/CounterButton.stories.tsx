// stories/CounterButton.stories.tsx
import { Meta, Story } from '@storybook/react';
import { Provider } from 'jotai';
import CounterButton from '../components/CounterButton';

export default {
  title: 'Components/CounterButton',
  component: CounterButton,
  decorators: [(story) => <Provider>{story()}</Provider>],
} as Meta;

const Template: Story = (args) => <CounterButton {...args} />;

export const Default = Template.bind({});
