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
  } catch (e) {
    alert(e);
  }
}

export function deleteProject(projectName) {
  const projects = getProjectsFromLocal();
  let projectFound = false;
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].name === projectName) {
      projects.splice(i, 1);
      projectFound = true;
      updateStorage(projects);
    }
  }
  if (!projectFound) {
    alert(`Project ${projectName} not found`);
  }
}

export function addNewTodo() {}
