import { setPrototypeObjects } from './functions';

/**
 * Function that returns the projects stored in localStorage. First, it checks if
 * there are any projects stored with the invocation of checkStorage. Once it is sure that
 * the local storage is set, that information is retrieved with JSON.parse().
 * The prototypes of the projects and ToDo objects are set with the function
 * setPrototypeObjest imported from ./functions.js
 *
 * @returns Projects list stored in localStorage
 */
export function getProjectsFromLocal() {
  checkStorage();
  let projects = JSON.parse(localStorage.getItem('projects'));
  setPrototypeObjects(projects);
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
