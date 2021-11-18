import createHeader from "./header";

function createMenu() {
    const menu = document.createElement('div');
    menu.id = 'menu';

    const steamed = document.createElement('div');
    steamed.id = 'steamed';
    const steamedDumpling = document.createElement('h1');
    steamedDumpling.textContent = 'Steamed Dumpling';
    steamed.appendChild(steamedDumpling);

    const fried = document.createElement('div');
    fried.id = 'fried';
    const friedDumpling = document.createElement('h1');
    friedDumpling.textContent = 'Fried Dumpling';
    fried.appendChild(friedDumpling);

    menu.appendChild(steamed);
    menu.appendChild(fried);

    return menu;
}

export default createMenu;