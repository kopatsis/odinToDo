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

var iterator = 0;
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
    console.log(temp);
    console.log(JSON.stringify(temp));
    localStorage.setItem(iterator, JSON.stringify(temp));

    const tempdesc = document.createElement('div');
    tempdesc.classList.add('todoDesc');
    tempdesc.classList.add(iterator);
    tempdesc.textContent = " · " + temp.name;

    const tempdisp = document.createElement('button');
    tempdisp.classList.add('todoDisp');
    tempdisp.classList.add(iterator);
    tempdisp.textContent = "≡ Details";
    tempdisp.onclick = displayTask;

    const tempcomp = document.createElement('button');
    tempcomp.classList.add('todoComp');
    tempcomp.classList.add(iterator);
    tempcomp.textContent = "✓ Complete";
    tempcomp.onclick = completeTask;

    const tempdel = document.createElement('button');
    tempdel.classList.add('todoDel');
    tempdel.classList.add(iterator);
    tempdel.textContent = "⌦ Delete";
    tempdel.onclick = deleteTask;

    const temphouse = document.createElement('div');
    temphouse.classList.add('todoHouse');
    temphouse.classList.add(iterator);
    temphouse.appendChild(tempdesc);
    temphouse.appendChild(tempdisp);
    temphouse.appendChild(tempcomp);
    temphouse.appendChild(tempdel);

    tdsect.appendChild(temphouse);
    formOuter.classList.remove('open');

    iterator++;
}

const dblInner = document.querySelector('.dblInner');
const dispOuter = document.querySelector('.dispOuter');
const dispClose = document.querySelector('.dispClose');
dispClose.addEventListener('click', () =>{
    dispOuter.classList.remove('open');
})
function displayTask(e){
    dispOuter.classList.add('open');
    let temp = JSON.parse(localStorage.getItem(parseInt(e.target.classList[1])));
    dblInner.innerHTML = `
    <div class="disp name">Task Name: ${temp.name}</div>
    <div class="disp creator">Task Creator: ${temp.creator}</div>
    <div class="disp desc">Description: ${temp.description} </div>
    <div class="disp date">Date Created: ${temp.date}</div>
    <div class="disp stat">Status: ${temp.status}</div>
    `;
}

const done = document.querySelector('.done');
function completeTask(e){
    let index = parseInt(e.target.classList[1]);
    e.target.parentElement.remove();

    let temp = JSON.parse(localStorage.getItem(index));
    temp.status = 'Complete';
    localStorage.setItem(index, JSON.stringify(temp));

    const tempdesc = document.createElement('div');
    tempdesc.classList.add('todoDesc');
    tempdesc.classList.add(index);
    tempdesc.textContent = " · " + temp.name;

    const tempdisp = document.createElement('button');
    tempdisp.classList.add('todoDisp');
    tempdisp.classList.add('.compDesc');
    tempdisp.classList.add(index);
    tempdisp.textContent = "≡ Details";
    tempdisp.onclick = displayTask;

    const tempcomp = document.createElement('button');
    tempcomp.classList.add('todoComp');
    tempcomp.classList.add(index);
    tempcomp.textContent = "✗ Incomplete";
    tempcomp.onclick = undoComplete;

    const tempdel = document.createElement('button');
    tempdel.classList.add('todoDel');
    tempdel.classList.add(index);
    tempdel.textContent = "⌦ Delete";
    tempdel.onclick = deleteTask;

    const temphouse = document.createElement('div');
    temphouse.classList.add('todoHouse');
    temphouse.classList.add(index);
    temphouse.appendChild(tempdesc);
    temphouse.appendChild(tempdisp);
    temphouse.appendChild(tempcomp);
    temphouse.appendChild(tempdel);

    done.appendChild(temphouse);
}

function undoComplete(e){
    let index = parseInt(e.target.classList[1]);
    e.target.parentElement.remove();

    let temp = JSON.parse(localStorage.getItem(index));
    temp.status = 'Incomplete';
    localStorage.setItem(index, JSON.stringify(temp));

    const tempdesc = document.createElement('div');
    tempdesc.classList.add('todoDesc');
    tempdesc.classList.add(index);
    tempdesc.textContent = " · " + temp.name;

    const tempdisp = document.createElement('button');
    tempdisp.classList.add('todoDisp');
    tempdisp.classList.add(index);
    tempdisp.textContent = "≡ Details";
    tempdisp.onclick = displayTask;

    const tempcomp = document.createElement('button');
    tempcomp.classList.add('todoComp');
    tempcomp.classList.add(index);
    tempcomp.textContent = "✓ Complete";
    tempcomp.onclick = completeTask;

    const tempdel = document.createElement('button');
    tempdel.classList.add('todoDel');
    tempdel.classList.add(index);
    tempdel.textContent = "⌦ Delete";
    tempdel.onclick = deleteTask;

    const temphouse = document.createElement('div');
    temphouse.classList.add('todoHouse');
    temphouse.classList.add(index);
    temphouse.appendChild(tempdesc);
    temphouse.appendChild(tempdisp);
    temphouse.appendChild(tempcomp);
    temphouse.appendChild(tempdel);

    tdsect.appendChild(temphouse);
}

function deleteTask(e){
    let index = parseInt(e.target.classList[1]);
    e.target.parentElement.remove();
    localStorage.setItem(index, 555);
}

const reset = document.querySelector('#reset');
reset.addEventListener('click', () =>{
    tdsect.innerHTML = '';
    done.innerHTML = '';
    localStorage.clear();
});

function todoFactory(name, creator, description, date){
    return{
        name: name,
        creator: creator,
        description: description,
        date: date,
        status: "Incomplete"
    }
}

function populator(){
    if (localStorage["parametersetbyme"] == 555){
        for (const [key, value] of Object.entries(localStorage)){
            if (value != 555){
                iterator++;
                populateBeg(key, value);
            }
        }
    } else{
        localStorage.clear();
        localStorage["parametersetbyme"] = 555;
    }
}

function populateBeg(key, value){
    let temp = JSON.parse(value);

    const tempdesc = document.createElement('div');
    tempdesc.classList.add('todoDesc');
    tempdesc.classList.add(key);
    tempdesc.textContent = " · " + temp.name;
    
    const tempdisp = document.createElement('button');
    tempdisp.classList.add('todoDisp');
    tempdisp.classList.add(key);
    tempdisp.textContent = "≡ Details";
    tempdisp.onclick = displayTask;

    const tempcomp = document.createElement('button');
    tempcomp.classList.add('todoComp');
    tempcomp.classList.add(key);
    tempcomp.textContent = "✗ Incomplete";

    const tempdel = document.createElement('button');
    tempdel.classList.add('todoDel');
    tempdel.classList.add(key);
    tempdel.textContent = "⌦ Delete";
    tempdel.onclick = deleteTask;

    const temphouse = document.createElement('div');
    temphouse.classList.add('todoHouse');
    temphouse.classList.add(key);
    temphouse.appendChild(tempdesc);
    temphouse.appendChild(tempdisp);
    temphouse.appendChild(tempcomp);
    temphouse.appendChild(tempdel);

    if (value.status == "Incomplete"){
        tempcomp.onclick = completeTask;
        tdsect.appendChild(temphouse);
    } else{
        tempcomp.onclick = undoComplete;
        tempdisp.classList.add('.compDesc');
        done.appendChild(temphouse);
    }
}

populator();