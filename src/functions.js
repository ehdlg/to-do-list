import { getProjectsFromLocal } from './localstorage';
import Project from './project';
import ToDo from './todo';

export function isProjectNameDuplicate(name) {
  const projects = getProjectsFromLocal();
  console.log(projects);
}

export function setPrototypeObjects(projects) {
  projects.forEach((project) => {
    Object.setPrototypeOf(project, Project.prototype);
    project.todoList.forEach((todo) =>
      Object.setPrototypeOf(todo, ToDo.prototype)
    );
  });
}
