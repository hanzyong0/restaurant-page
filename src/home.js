function createHome() {
    const container = document.createElement('div');
    container.id = 'container';

    const followContainer = document.createElement('div');
    followContainer.id = 'follow-container';

    const title = document.createElement('p');
    title.textContent = 'Restaurant';
    const description = document.createElement('p');
    description.textContent = '"Best Dumpling Place In The World!"';

    followContainer.appendChild(title);
    followContainer.appendChild(description);

    container.append(followContainer);

    return container;
}

export default createHome;