import React from 'react';
import Task from './Task';

export default {
  component: Task,
  title    : 'Task',
};

const Template = args => <Task {...args} />

export const Default = Template.bind({});
Default.args = {
  task: {
    id       : '1',
    title    : 'Test Task',
    state    : 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
}

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
}

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};

const LongTitleString = "いやいやいやいやこれメチャメチャ長いタイトルだけど表示上問題ないとか思ってる？中に入る文字数考慮してないデザインはダメだよほんと。困るからね。中に入れる文字考える人も制約があるならそれをちゃんと守ってくれないとね。その前提でやってるからこっちも。";

export const LongTitle = Template.bind({});
LongTitle.args = {
  task: {
    ...Default.args.task,
    title: LongTitleString,
  },
};