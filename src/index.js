import './style.css';
import createHeader from './header';
import createHome from './home';

const content = document.querySelector('#content');

content.appendChild(createHeader());
content.appendChild(createHome());