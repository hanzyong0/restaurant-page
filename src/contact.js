function createContact() {
    const contact = document.createElement('div');
    contact.id = 'contact';

    const p = document.createElement('p');
    p.textContent = '012 - 3456789';

    contact.appendChild(p);

    return contact;
}

export default createContact;