import './style.css';
import createHeader from './header';
import createHome from './home';
import createMenu from './menu';
import createContact from './contact';

const content = document.querySelector('#content');



content.appendChild(createHeader());
content.appendChild(createHome());


const links = document.querySelectorAll('a');

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        if (e.target.textContent === 'Home') {
            content.removeChild(content.lastChild);
            content.appendChild(createHome());
        };
        if (e.target.textContent === 'Menu') {
            content.removeChild(content.lastChild);
            content.appendChild(createMenu());
        };
        if (e.target.textContent === 'Contact') {
            content.removeChild(content.lastChild);
            content.appendChild(createContact());
        };
    });
});
