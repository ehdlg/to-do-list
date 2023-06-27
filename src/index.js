import './styles/layout.css';
import { addNewProject, addNewTodo, deleteProject } from './functions';
import { printProjects, removeElement } from './dom';
import { updateStorage } from './localstorage';

printProjects();

const btnSubmitProject = document.querySelector('#submit-project');
const inputProjectName = document.querySelector('#name-project');
const deleteProjectBtns = document.querySelectorAll('.delete-project');

btnSubmitProject.addEventListener('click', function () {
  addNewProject(inputProjectName.value);
});

deleteProjectBtns.forEach((deleteBtn) => {
  deleteBtn.addEventListener('click', function () {
    if (confirm('Are you sure you want to delete this project?')) {
      deleteProject(this.dataset.projectname);
      removeElement(this.parentNode);
    }
  });
});
