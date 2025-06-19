const contacts = [
    {
        name: 'Aya',
        phone: '+7 747 272 0090',
        email: 'aya.09nice@gmail.com'
    },
    {
        name: 'Yuki',
        phone: '+66 888 123 4455',
        email: 'yuki@gmail.com'
    },
    {
        name: 'Selena',
        phone: '+465 123 445 5566',
        email: 'sss@gmail.com'
    }
]

const created_contact_form = document.getElementById('create_contact_form');
const contacts_block = document.getElementById('contacts_block');
const search_block = document.getElementById('search_block');

function showContacts() {
    contacts_block.innerHTML = '';

    contacts.forEach(contact => {
        const div = document.createElement('div');
        const p1 = document.createElement('h3');
        p1.textContent = contact.name;

        const p2 = document.createElement('p');
        p2.textContent = contact.phone;

        const p3 = document.createElement('p');
        p3.textContent = contact.email;

        const button = document.createElement('button');
        button.textContent = 'Delete contact';
        button.onclick = () => deleteContact(contact);

        div.classList.add('contact-card');
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        div.appendChild(button);
        contacts_block.appendChild(div);

        
    })
}

function deleteContact(contact) {
    const index = contacts.findIndex(c => c.phone === contact.phone);
    if (index !== -1) {
        contacts.splice(index, 1);
        showContacts();
    }
}

const contact_name = document.getElementById('contact_name');
const contact_phone = document.getElementById('contact_phone');
const contact_email = document.getElementById('contact_email');


function createContact() {
    const name = contact_name.value;
    const phone = contact_phone.value;
    const email = contact_email.value;

    const new_contact ={
        name: name,
        phone: phone,
        email: email
    }
    contacts.push(new_contact);
    showContacts()
}

const create_btn = document.getElementById('create_btn');
create_btn.addEventListener('click', () => createContact());


const search_btn = document.getElementById('search_btn');
const search_name = document.getElementById('search_by_name');
search_btn.addEventListener('click', () => {

    let found = false;
    contacts.forEach(contact => {
        if (search_name.value === contact.name) {
            found = true;
            const div = document.createElement('div');
            const p1 = document.createElement('h3');
            p1.textContent = contact.name;

            const p2 = document.createElement('p');
            p2.textContent = contact.phone;

            const p3 = document.createElement('p');
            p3.textContent = contact.email;   

            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);
            search_block.appendChild(div)
        } 
    })
    if (!found) {
        alert("There's no such contact!");
    }
    
})

showContacts();

