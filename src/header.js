function createHeader() {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    ul.appendChild(loadHome());
    ul.appendChild(loadMenu());
    ul.appendChild(loadContact());

    nav.appendChild(ul);

    header.appendChild(nav);

    return header;
}

function loadHome() {
    const li = document.createElement('li');
    const a = document.createElement('a')

    a.href = './home.js';
    a.textContent = 'Home';
    li.appendChild(a);

    return li;
}

function loadMenu() {
    const li = document.createElement('li');
    const a = document.createElement('a')

    a.href = './menu.js';
    a.textContent = 'Menu';
    li.appendChild(a);

    return li;
}

function loadContact() {
    const li = document.createElement('li');
    const a = document.createElement('a')

    a.href = './home.js';
    a.textContent = 'Contact';
    li.appendChild(a);

    return li;
}

export default createHeader;