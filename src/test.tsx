import React from 'react';
import Todo from './stores/data/todos/todo';
import TodoStore from './stores/data/todos/todo-store';
import { Observer, observer, useObserver } from 'mobx-react-lite';

const newTodo = new Todo('Buy milk', 123, new TodoStore());

// <Observer>
export const Test1 = () => {
  return (
    <div>
      <Observer>{() => <div>{newTodo.name}</div>}</Observer>
      <button onClick={() => newTodo.updateName('First name')}>
        First name
      </button>
      <button onClick={() => newTodo.updateName('Last name')}>Last name</button>
    </div>
  );
};

// observer(()=>{})
export const Test2 = observer(() => {
  return (
    <div>
      <div>{newTodo.name}</div>
      <button onClick={() => newTodo.updateName('First name')}>
        First name
      </button>
      <button onClick={() => newTodo.updateName('Last name')}>Last name</button>
    </div>
  );
});

// useObserver
export const Test3 = () => {
  return useObserver(() => (
    <div>
      <div>{newTodo.name}</div>
      <button onClick={() => newTodo.updateName('First name')}>
        First name
      </button>
      <button onClick={() => newTodo.updateName('Last name')}>Last name</button>
    </div>
  ));
};
