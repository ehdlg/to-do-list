import './styles/layout.css';
import { addNewProject, addNewTodo } from './functions';
import { printProjects } from './dom';

const btnSubmitProject = document.querySelector('#submit-project');
const inputProjectName = document.querySelector('#name-project');

btnSubmitProject.addEventListener('click', function () {
  addNewProject(inputProjectName.value);
});

printProjects();
