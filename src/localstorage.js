import Project from './project';
import ToDo from './todo';

//Default values for the project and todo objects if there is no localStorage data
const defaultProject = new Project('Default');
const defaultTodo = new ToDo(
  'Programming',
  'Write some code',
  '06-30-2023',
  'High'
);
/**
 * Function that returns the projects stored in localStorage. First, it checks if
 * there are any projects stored with the invocation of checkStorage. Once it is sure that
 * the local storage is set, that information is retrieved with JSON.parse().
 * For each project, it is set the Project prototype, and for each ToDo object inside
 * the todoList array of the project object, the ToDo prototype is set.
 *
 * @returns Projects list stored in localStorage
 */
export function getProjectsFromLocal() {
  checkStorage();
  let projects = JSON.parse(localStorage.getItem('projects'));
  projects.forEach((project) => {
    Object.setPrototypeOf(project, Project.prototype);
    project.todoList.forEach((todo) =>
      Object.setPrototypeOf(todo, ToDo.prototype)
    );
  });

  return projects;
}

/**
 * Updates the value of the localStorage with the updatedProjects param that has
 * the project list with the new values.
 * @param {} updatedProjects
 */
export function updateStorage(updatedProjects) {
  localStorage.setItem('projects', JSON.stringify(updatedProjects));
}

/**
 * Check if the item 'projects' is set in localStorage. If it is not, that key
 * is created with the default values for project and todo objects.
 */
function checkStorage() {
  if (!localStorage.getItem('projects')) {
    const newProjects = [];
    defaultProject.addTodo(defaultTodo);
    newProjects.push(defaultProject);
    localStorage.setItem('projects', JSON.stringify(newProjects));
  }
}
