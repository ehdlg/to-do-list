import { getProjectsFromLocal } from './localstorage';
const aside = document.querySelector('aside');

export function printProjects() {
  const projects = getProjectsFromLocal();
  projects.forEach((project) => {
    aside.appendChild(createProjectElement(project));
  });
}

export function removeElement(element) {
  element.remove();
}

export function createProjectElement(project) {
  const divProject = document.createElement('div');
  divProject.classList.add('project-list');

  const nameElement = document.createElement('h3');
  nameElement.innerText = project.name;
  divProject.appendChild(nameElement);

  const deleteProjectBtn = document.createElement('button');
  deleteProjectBtn.innerText = 'Delete project';
  deleteProjectBtn.dataset.projectname = project.name;
  deleteProjectBtn.classList.add('delete-project');
  divProject.appendChild(deleteProjectBtn);

  return divProject;
}
