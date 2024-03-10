// # Each todo should have:
//     - id
//     - name
//     - isCompleted
// # Each todo should be able to move between completed and not completed state
// # Each todo should be able to update the name
// # Print Log on Todo completed state change
// # Add ability to add and remove todo
// # Add ability to get list of completed todos and not completed todos
// # Print log every time new todo is added or removed with the current status: total, completed, incomplete
// # Print log only once when all todos are completed

import { action, computed, observable, reaction, when } from 'mobx';

let initialId = 0;

class Todo {
  id: number = initialId++;

  @observable
  name: string = '';
  @observable
  isCompleted: boolean = false;

  private disposer: () => void;

  constructor(name: string) {
    this.name = name;

    this.disposer = reaction(
      () => this.isCompleted,
      () =>
        console.log(
          `${this.id}-Todo: ${this.name} changed to ${
            this.isCompleted ? 'Done' : 'Incomplete'
          }`
        )
    );
  }

  @action
  toggleToDo() {
    this.isCompleted = !this.isCompleted;
  }

  @action
  updateName(newName: string) {
    this.name = newName;
  }

  dispose() {
    this.disposer();
  }
}

class TodoList {
  @observable
  todoList: Todo[] = [];

  constructor() {
    reaction(
      () => this.todoList.length,
      () =>
        console.log(
          `Current Todo Count: ${this.todoList.length}, Done Todos: ${this.completedTodo}, Incomplete Todos: ${this.inCompletedTodo}`
        )
    );

    when(
      () =>
        this.todoList.length > 0 &&
        this.todoList.every((todo) => todo.isCompleted),
      () => console.log(`Congratulations !`)
    );
  }

  @action
  addTodo(name: string) {
    this.todoList.push(new Todo(name));
  }

  getTodo(name: string) {
    return this.todoList.find((todo) => todo.name === name);
  }

  @action
  removeTodo(name: string) {
    const todoToRemove = this.getTodo(name);

    if (todoToRemove) {
      todoToRemove.dispose();
      const todoToRemoveIndex = this.todoList.indexOf(todoToRemove);
      this.todoList.splice(todoToRemoveIndex, 1);
    }
  }

  @computed
  get completedTodo() {
    return this.todoList.filter((todo) => todo.isCompleted === true);
  }

  @computed
  get inCompletedTodo() {
    return this.todoList.filter((todo) => todo.isCompleted === false);
  }
}

const todoList = new TodoList();

todoList.addTodo('Learn Mobx!');
todoList.addTodo('Finish The Course!');
todoList.addTodo('Add some Review!');
todoList.addTodo('Go Play Outside');

todoList.getTodo('Learn Mobx!')?.toggleToDo();
todoList.getTodo('Finish The Course!')?.toggleToDo();
todoList.getTodo('Add some Review!')?.toggleToDo();

todoList.removeTodo('Go Play Outside');
