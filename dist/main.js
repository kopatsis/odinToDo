(()=>{const t=document.querySelector("#create"),e=document.querySelector(".formOuter");t.addEventListener("click",(function(){e.classList.add("open")})),document.querySelector(".close").addEventListener("click",(()=>{e.classList.remove("open")})),window.addEventListener("keyup",(function(t){"Escape"==t.key&&e.classList.contains("open")&&e.classList.remove("open"),"Escape"==t.key&&o.classList.contains("open")&&o.classList.remove("open")})),window.addEventListener("click",(function(t){t.target.classList.contains("formOuter")&&t.target.classList.contains("open")&&e.classList.remove("open"),t.target.classList.contains("dispOuter")&&t.target.classList.contains("open")&&o.classList.remove("open")}));const s=[],n=document.querySelector(".tdtask"),c=(document.querySelector("#tname"),document.querySelector("#creator"),document.querySelector("#description"),document.querySelector("#date"),document.querySelector("#createform"));c.addEventListener("submit",(function(t){t.preventDefault();let a=new FormData(c);c.reset();let o=[];for(const t of a.entries())""==t[1]?o.push("N/A"):o.push(t[1]);const i=(r=o[0],p=o[1],m=o[2],u=o[3],{name:r,creator:p,description:m,date:u,status:"Incomplete"});var r,p,m,u;s.push(i);const L=document.createElement("div");L.classList.add("todoDesc"),L.classList.add(""+(s.length-1)),L.textContent=" · "+i.name;const v=document.createElement("button");v.classList.add("todoDisp"),v.classList.add(""+(s.length-1)),v.textContent="≡ Details",v.onclick=d;const C=document.createElement("button");C.classList.add("todoComp"),C.classList.add(""+(s.length-1)),C.textContent="✓ Complete",C.onclick=l;const E=document.createElement("div");E.classList.add("todoHouse"),E.classList.add(""+(s.length-1)),E.appendChild(L),E.appendChild(v),E.appendChild(C),n.appendChild(E),e.classList.remove("open")}));const a=document.querySelector(".dblInner"),o=document.querySelector(".dispOuter");function d(t){o.classList.add("open"),a.innerHTML=`\n    <div class="disp name">Task Name: ${s[parseInt(t.target.classList[1])].name}</div>\n    <div class="disp creator">Task Creator: ${s[parseInt(t.target.classList[1])].creator}</div>\n    <div class="disp desc">Description: ${s[parseInt(t.target.classList[1])].description} </div>\n    <div class="disp date">Date Created: ${s[parseInt(t.target.classList[1])].date}</div>\n    <div class="disp stat">Status: ${s[parseInt(t.target.classList[1])].status}</div>\n    `}document.querySelector(".dispClose").addEventListener("click",(()=>{o.classList.remove("open")}));const i=document.querySelector(".done");function l(t){let e=t.target.classList[1];t.target.parentElement.remove(),s[e].status="Complete";const n=document.createElement("div");n.classList.add("compDesc"),n.classList.add(e),n.textContent=" · "+s[e].name;const c=document.createElement("button");c.classList.add("compDisp"),c.classList.add(e),c.textContent="≡ Details",c.onclick=d;const a=document.createElement("button");a.classList.add("compComp"),a.classList.add(e),a.textContent="✗ Incomplete",a.onclick=r;const o=document.createElement("div");o.classList.add("todoHouse"),o.classList.add(e),o.appendChild(n),o.appendChild(c),o.appendChild(a),i.appendChild(o)}function r(t){let e=t.target.classList[1];t.target.parentElement.remove(),s[e].status="Incomplete";const c=document.createElement("div");c.classList.add("todoDesc"),c.classList.add(e),c.textContent=" · "+s[e].name;const a=document.createElement("button");a.classList.add("todoDisp"),a.classList.add(e),a.textContent="≡ Details",a.onclick=d;const o=document.createElement("button");o.classList.add("todoComp"),o.classList.add(e),o.textContent="✓ Complete",o.onclick=l;const i=document.createElement("div");i.classList.add("todoHouse"),i.classList.add(e),i.appendChild(c),i.appendChild(a),i.appendChild(o),n.appendChild(i)}})();