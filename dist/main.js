(()=>{const e=document.querySelector("#create"),t=document.querySelector(".formOuter");e.addEventListener("click",(function(){t.classList.add("open")})),document.querySelector(".close").addEventListener("click",(()=>{t.classList.remove("open")})),window.addEventListener("keyup",(function(e){"Escape"==e.key&&t.classList.remove("open")})),window.addEventListener("click",(function(e){e.target.classList.contains("formOuter")&&e.target.classList.contains("open")&&t.classList.remove("open")}));const n=[],s=document.querySelector(".tdtask"),o=(document.querySelector("#tname"),document.querySelector("#creator"),document.querySelector("#description"),document.querySelector("#date"),document.querySelector("#createform"));o.addEventListener("submit",(function(e){e.preventDefault();let c=new FormData(o);o.reset();let d=[];for(const e of c.entries())""==e[1]?d.push(null):d.push(e[1]);const a=(r=d[0],l=d[1],i=d[2],u=d[3],{name:r,creator:l,description:i,date:u,status:"Incomplete"});var r,l,i,u;n.push(a);const m=document.createElement("div");m.classList.add("todoDesc"),m.classList.add(""+(n.length-1)),m.textContent=" · "+a.name;const p=document.createElement("button");p.classList.add("todoDisp"),p.classList.add(""+(n.length-1)),p.textContent="View Details";const L=document.createElement("button");L.classList.add("todoComp"),L.classList.add(""+(n.length-1)),L.textContent="Mark Complete";const v=document.createElement("div");v.classList.add("todoHouse"),v.classList.add(""+(n.length-1)),v.appendChild(m),v.appendChild(p),v.appendChild(L),s.appendChild(v),t.classList.remove("open")}))})();