export default class ToDo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  get title() {
    return 'The title is: ' + this._title;
  }

  set title(newTitle) {
    if (newTitle.length > 5) {
      throw new Error('The title must be less than 5 characters long');
    }
    this._title = newTitle;
  }
}
