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
    if (e.key == 'Escape' && formOuter.classList.contains('open')) formOuter.classList.remove('open');
    if (e.key == 'Escape' && dispOuter.classList.contains('open')) dispOuter.classList.remove('open');
});
window.addEventListener('click', function escape(e){
    if (e.target.classList.contains('formOuter') && e.target.classList.contains('open')) formOuter.classList.remove('open');
    if (e.target.classList.contains('dispOuter') && e.target.classList.contains('open')) dispOuter.classList.remove('open');   
});

const taskCollection = [];
const tdsect = document.querySelector('.tdtask');

const tname = document.querySelector('#tname');
const creator = document.querySelector('#creator');
const description = document.querySelector('#description');
const date = document.querySelector('#date');
const form = document.querySelector('#createform');

form.addEventListener('submit', todoCreate);

function todoCreate(e){
    e.preventDefault();
    let formData = new FormData(form);
    form.reset();
    let vals = []
    for (const pair of formData.entries()) {
        if (pair[1] == ''){
            vals.push("N/A");
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
    tempdisp.onclick = displayTask;

    const tempcomp = document.createElement('button');
    tempcomp.classList.add('todoComp');
    tempcomp.classList.add(`${taskCollection.length-1}`);
    tempcomp.textContent = "Mark Complete";
    tempcomp.onclick = completeTask;

    const temphouse = document.createElement('div');
    temphouse.classList.add('todoHouse');
    temphouse.classList.add(`${taskCollection.length-1}`);
    temphouse.appendChild(tempdesc);
    temphouse.appendChild(tempdisp);
    temphouse.appendChild(tempcomp);

    tdsect.appendChild(temphouse);
    formOuter.classList.remove('open');
}

const dblInner = document.querySelector('.dblInner');
const dispOuter = document.querySelector('.dispOuter');
const dispClose = document.querySelector('.dispClose');
dispClose.addEventListener('click', () =>{
    dispOuter.classList.remove('open');
})
function displayTask(e){
    dispOuter.classList.add('open');
    dblInner.innerHTML = `
    <div class="dispname">Task Name: ${taskCollection[parseInt(e.target.classList[1])].name}</div>
    <div class="dispcreator">Task Creator: ${taskCollection[parseInt(e.target.classList[1])].creator}</div>
    <div class="dispdesc">Description: ${taskCollection[parseInt(e.target.classList[1])].description} </div>
    <div class="dispdate">Date Created: ${taskCollection[parseInt(e.target.classList[1])].date}</div>
    <div class="dispstat">Status: ${taskCollection[parseInt(e.target.classList[1])].status}</div>
    `;
}

const done = document.querySelector('.done');
function completeTask(e){
    let index = e.target.classList[1];
    e.target.parentElement.remove();

    taskCollection[index].status = "Complete"

    const tempdesc = document.createElement('div');
    tempdesc.classList.add('compDesc');
    tempdesc.classList.add(index);
    tempdesc.textContent = " · " + taskCollection[index].name;

    const tempdisp = document.createElement('button');
    tempdisp.classList.add('compDisp');
    tempdisp.classList.add(index);
    tempdisp.textContent = "View Details";
    tempdisp.onclick = displayTask;

    const tempcomp = document.createElement('button');
    tempcomp.classList.add('unComp');
    tempcomp.classList.add(index);
    tempcomp.textContent = "Undo Complete";
    tempcomp.onclick = undoComplete;

    const temphouse = document.createElement('div');
    temphouse.classList.add('todoHouse');
    temphouse.classList.add(index);
    temphouse.appendChild(tempdesc);
    temphouse.appendChild(tempdisp);
    temphouse.appendChild(tempcomp);

    done.appendChild(temphouse);
}

function undoComplete(e){
    let index = e.target.classList[1];
    e.target.parentElement.remove();

    taskCollection[index].status = "Incomplete"

    const tempdesc = document.createElement('div');
    tempdesc.classList.add('todoDesc');
    tempdesc.classList.add(index);
    tempdesc.textContent = " · " + taskCollection[index].name;

    const tempdisp = document.createElement('button');
    tempdisp.classList.add('todoDisp');
    tempdisp.classList.add(index);
    tempdisp.textContent = "View Details";
    tempdisp.onclick = displayTask;

    const tempcomp = document.createElement('button');
    tempcomp.classList.add('todoComp');
    tempcomp.classList.add(index);
    tempcomp.textContent = "Mark Complete";
    tempcomp.onclick = completeTask;

    const temphouse = document.createElement('div');
    temphouse.classList.add('todoHouse');
    temphouse.classList.add(index);
    temphouse.appendChild(tempdesc);
    temphouse.appendChild(tempdisp);
    temphouse.appendChild(tempcomp);

    tdsect.appendChild(temphouse);
}

function todoFactory(name, creator, description, date){
    return {
        name: name,
        creator: creator,
        description: description,
        date: date,
        status: "Incomplete"
    }
}