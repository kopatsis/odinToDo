const create = document.querySelector('#create');
const formOuter = document.querySelector('.formOuter');

create.addEventListener('click', displayForm);
function displayForm () {
    formOuter.classList.add('open');
}

const close = document.querySelector('.close');
close.addEventListener('click', () => {
    formOuter.classList.remove('open');
});
window.addEventListener('keyup', function esc(e){
    if (e.key == 'Escape') formOuter.classList.remove('open');
});
window.addEventListener('click', function escape(e){
    if (e.target.classList.contains('formOuter') && e.target.classList.contains('open')) formOuter.classList.remove('open');
});

const taskCollection = [];
const tdsect = document.querySelector('.tdtask');

const tname = document.querySelector('#tname');
const creator = document.querySelector('#creator');
const description = document.querySelector('#description');
const date = document.querySelector('#date');
const form = document.querySelector('#createform');

form.addEventListener('submit', function todoCreate(e){
    e.preventDefault();
    let formData = new FormData(form);
    form.reset();
    let vals = []
    for (const pair of formData.entries()) {
        if (pair[1] == ''){
            vals.push(null);
        } else{
            vals.push(pair[1]);
        }
    }
    const temp = todoFactory(vals[0], vals[1], vals[2], vals[3]);
    taskCollection.push(temp);

    const tempdesc = document.createElement('div');
    tempdesc.classList.add('todoDesc');
    tempdesc.classList.add(`${taskCollection.length-1}`);
    tempdesc.textContent = " · " + temp.name;

    const tempdisp = document.createElement('button');
    tempdisp.classList.add('todoDisp');
    tempdisp.classList.add(`${taskCollection.length-1}`);
    tempdisp.textContent = "View Details";
    // Add onclick here

    const tempcomp = document.createElement('button');
    tempcomp.classList.add('todoComp');
    tempcomp.classList.add(`${taskCollection.length-1}`);
    tempcomp.textContent = "Mark Complete";
    // Add onclick here

    const temphouse = document.createElement('div');
    temphouse.classList.add('todoHouse');
    temphouse.classList.add(`${taskCollection.length-1}`);
    temphouse.appendChild(tempdesc);
    temphouse.appendChild(tempdisp);
    temphouse.appendChild(tempcomp);

    tdsect.appendChild(temphouse);
    formOuter.classList.remove('open');
});


function todoFactory(name, creator, description, date){
    return {
        name: name,
        creator: creator,
        description: description,
        date: date,
        status: "Incomplete"
    }
}