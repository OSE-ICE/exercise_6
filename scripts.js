const harry = {
    name: 'Harry Potter',
    hair: 'black',
}

const hermoine = {
    name: 'Hermoine Granger',
    hair: 'brown',
}

const ron = {
    name: 'Ron Weasley',
    hair: 'red',
}

const wizzards = [harry, hermoine, ron,];

const list = document.getElementById('list')

wizzards.forEach(wizzard => {
    const listItem = document.createElement('li');
    listItem.textContent = wizzard.name;
    listItem.style.color = wizzard.hair;
    list.appendChild(listItem);
});