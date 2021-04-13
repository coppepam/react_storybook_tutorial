// A simple store/actions/reducer implementation (store/actions/reducer 簡単に実装してみるよ)
// A true app would be more complex and separated into different files. (ガチのアプリはファイル分けたりもっと複雑だからな)
import {createStore} from 'redux';

// The actions are the "names" of the changes that can happen to store (ストア変更時のアクション名)
export const actions = {
  ARCHIVE_TASK: 'ARCHIVE_TASK',
  PIN_TASK    : 'PIN_TASK'
};

// The action creators bundle actions with the data required to excute them (アクションクリエイターはアクション実行に必要なデータをぶっこみます)
export const archiveTask = id => ({type: actions.ARCHIVE_TASK, id});
export const pinTask     = id => ({type: actions.PIN_TASK, id});

// All our reducers simply change the state of a single task. (ぼくらのリデューサーはひとつのタスクの状態を変更するだけよ)
function taskStateReducer (taskState) {
  return (state, action) => {
    return {
      ...state,
      tasks: state.tasks.map(task => 
        task.id === action.id ? {...task, state: taskState} : task
      ),
    }
  };
}

// The reducer discibes how the contents of the store change for each action (リデューサーはアクションごとにストアの内容がどう変化するか判別するよ)
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ARCHIVE_TASK:
      return taskStateReducer('TASK_ARCHIVED')(state, action);
    case actions.PIN_TASK:
      return taskStateReducer('PIN_TASK')(state, action);
    default:
      return state;
  }
};

// The initial state of our store when the app loads. (アプリロード時の初期状態)
// Usually you would fetch this from a server (普通はサーバーからもらうもんだぞ)
const defaultTasks = [
  {id: '1', title: 'Something',       state: 'TASK_INBOX'},
  {id: '2', title: 'Something more',  state: 'TASK_INBOX'},
  {id: '3', title: 'Something else',  state: 'TASK_INBOX'},
  {id: '4', title: 'Something again', state: 'TASK_INBOX'},
];

// We export the construted redux store
export default createStore(reducer, {tasks: defaultTasks});