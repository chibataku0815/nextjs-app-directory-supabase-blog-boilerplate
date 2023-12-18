import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'jotai';
import CounterButton from './CounterButton';

// Meta型を使って、Storybookに関するメタデータを定義
export default {
  title: 'Components/CounterButton',
  component: CounterButton,
  decorators: [
    (Story) => (
      <Provider>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof CounterButton>;

// CounterButtonコンポーネントのStoryを定義
const Template: ComponentStory<typeof CounterButton> = (args) => (
  <CounterButton {...args} />
);

// デフォルトのストーリーを定義
export const Default = Template.bind({
  children: 'CounterButton',
});
