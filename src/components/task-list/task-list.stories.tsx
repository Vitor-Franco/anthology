import type { Meta, StoryObj } from '@storybook/react';
import { TaskList } from './task-list';
import { TaskListProvider } from './task-list-context';

const meta = {
  title: 'Components/TaskList',
  component: TaskList,
  loaders: [
    async () => {
      const tasks = await fetch('https://jsonplaceholder.typicode.com/todos').then((res) =>
        res.json(),
      );
      return { tasks };
    },
  ],
  decorators: [
    (Story, context) => (
      <TaskListProvider tasks={context.loaded.tasks}>
        <div style={{ padding: '3rem' }}>
          <Story />
        </div>
      </TaskListProvider>
    ),
  ],
} as Meta<typeof TaskList>;

export default meta;
type Story = StoryObj<typeof TaskList>;

export const Default: Story = {
  args: {},
};
