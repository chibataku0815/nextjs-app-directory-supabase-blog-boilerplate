// src/components/forms/Login/Login.stories.tsx
import { Story } from '@storybook/react';
import Login from './Login';

export default {
  title: 'components/forms/Login',
  component: Login,
};

const Template: Story = () => <Login />;
export const Default = Template.bind({});
Default.args = {};
