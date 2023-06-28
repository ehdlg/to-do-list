import ToDo from './todo';
import { isProjectNameDuplicate } from './functions';

export default class Project {
  constructor(name) {
    this.name = name;
    this._todoList = [];
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (isProjectNameDuplicate(newName)) {
      throw new Error('The project already exists.');
    }
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
