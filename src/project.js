import ToDo from './todo';

export default class Project {
  constructor(name) {
    this.name = name;
    this._todoList = [];
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get todoList() {
    return this._todoList;
  }

  addTodo(newTodo) {
    if (!(newTodo instanceof ToDo)) {
      throw new Error('Only ToDo instances can be added to the project');
    }
    this.todoList.push(newTodo);
  }
}
