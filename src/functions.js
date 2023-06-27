import { getProjectsFromLocal, updateStorage } from './localstorage';
import Project from './project';
import ToDo from './todo';

export function isProjectNameDuplicate(name) {
  const projects = getProjectsFromLocal();
  return projects.some((project) => project.name === name);
}

export function setPrototypeObjects(projects) {
  projects.forEach((project) => {
    Object.setPrototypeOf(project, Project.prototype);
    project.todoList.forEach((todo) =>
      Object.setPrototypeOf(todo, ToDo.prototype)
    );
  });
}

export function addNewProject(projectName) {
  try {
    const newProject = new Project(projectName);
    const projectsLocal = getProjectsFromLocal();
    projectsLocal.push(newProject);
    updateStorage(projectsLocal);
    console.log(projectsLocal);
  } catch (e) {
    alert(e);
  }
}
