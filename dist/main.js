(()=>{const e=document.querySelector("#create"),t=document.querySelector(".formOuter");e.addEventListener("click",(function(){t.classList.add("open")})),document.querySelector(".close").addEventListener("click",(()=>{t.classList.remove("open")})),window.addEventListener("keyup",(function(e){"Escape"==e.key&&t.classList.contains("open")&&t.classList.remove("open"),"Escape"==e.key&&o.classList.contains("open")&&o.classList.remove("open")})),window.addEventListener("click",(function(e){e.target.classList.contains("formOuter")&&e.target.classList.contains("open")&&t.classList.remove("open"),e.target.classList.contains("dispOuter")&&e.target.classList.contains("open")&&o.classList.remove("open")}));const s=[],n=document.querySelector(".tdtask"),c=(document.querySelector("#tname"),document.querySelector("#creator"),document.querySelector("#description"),document.querySelector("#date"),document.querySelector("#createform"));c.addEventListener("submit",(function(e){e.preventDefault();let a=new FormData(c);c.reset();let o=[];for(const e of a.entries())""==e[1]?o.push("N/A"):o.push(e[1]);const i=(l=o[0],p=o[1],u=o[2],m=o[3],{name:l,creator:p,description:u,date:m,status:"Incomplete"});var l,p,u,m;s.push(i);const L=document.createElement("div");L.classList.add("todoDesc"),L.classList.add(""+(s.length-1)),L.textContent=" · "+i.name;const v=document.createElement("button");v.classList.add("todoDisp"),v.classList.add(""+(s.length-1)),v.textContent="View Details",v.onclick=d;const C=document.createElement("button");C.classList.add("todoComp"),C.classList.add(""+(s.length-1)),C.textContent="Mark Complete",C.onclick=r;const E=document.createElement("div");E.classList.add("todoHouse"),E.classList.add(""+(s.length-1)),E.appendChild(L),E.appendChild(v),E.appendChild(C),n.appendChild(E),t.classList.remove("open")}));const a=document.querySelector(".dblInner"),o=document.querySelector(".dispOuter");function d(e){o.classList.add("open"),a.innerHTML=`\n    <div class="dispname">Task Name: ${s[parseInt(e.target.classList[1])].name}</div>\n    <div class="dispcreator">Task Creator: ${s[parseInt(e.target.classList[1])].creator}</div>\n    <div class="dispdesc">Description: ${s[parseInt(e.target.classList[1])].description} </div>\n    <div class="dispdate">Date Created: ${s[parseInt(e.target.classList[1])].date}</div>\n    <div class="dispstat">Status: ${s[parseInt(e.target.classList[1])].status}</div>\n    `}document.querySelector(".dispClose").addEventListener("click",(()=>{o.classList.remove("open")}));const i=document.querySelector(".done");function r(e){let t=e.target.classList[1];e.target.parentElement.remove(),s[t].status="Complete";const n=document.createElement("div");n.classList.add("compDesc"),n.classList.add(t),n.textContent=" · "+s[t].name;const c=document.createElement("button");c.classList.add("compDisp"),c.classList.add(t),c.textContent="View Details",c.onclick=d;const a=document.createElement("button");a.classList.add("unComp"),a.classList.add(t),a.textContent="Undo Complete";const o=document.createElement("div");o.classList.add("todoHouse"),o.classList.add(t),o.appendChild(n),o.appendChild(c),o.appendChild(a),i.appendChild(o)}})();