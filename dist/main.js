(()=>{const t=document.querySelector("#create"),e=document.querySelector(".formOuter");t.addEventListener("click",(function(){e.classList.add("open")})),document.querySelector(".close").addEventListener("click",(()=>{e.classList.remove("open")})),window.addEventListener("keyup",(function(t){"Escape"==t.key&&e.classList.contains("open")&&e.classList.remove("open"),"Escape"==t.key&&c.classList.contains("open")&&c.classList.remove("open")})),window.addEventListener("click",(function(t){t.target.classList.contains("formOuter")&&t.target.classList.contains("open")&&e.classList.remove("open"),t.target.classList.contains("dispOuter")&&t.target.classList.contains("open")&&c.classList.remove("open")}));var s=0;const n=document.querySelector(".tdtask"),a=(document.querySelector("#tname"),document.querySelector("#creator"),document.querySelector("#description"),document.querySelector("#date"),document.querySelector("#createform"));a.addEventListener("submit",(function(t){t.preventDefault();let o=new FormData(a);a.reset();let c=[];for(const t of o.entries())""==t[1]?c.push("N/A"):c.push(t[1]);const l=(r=c[0],p=c[1],u=c[2],L=c[3],{name:r,creator:p,description:u,date:L,status:"Incomplete"});var r,p,u,L;localStorage.setItem(s,JSON.stringify(l));const C=document.createElement("div");C.classList.add("todoDesc"),C.classList.add(s),C.textContent=" · "+l.name;const v=document.createElement("button");v.classList.add("todoDisp"),v.classList.add(s),v.textContent="≡ Details",v.onclick=d;const S=document.createElement("button");S.classList.add("todoComp"),S.classList.add(s),S.textContent="✓ Complete",S.onclick=i;const E=document.createElement("button");E.classList.add("todoDel"),E.classList.add(s),E.textContent="⌦ Delete",E.onclick=m;const g=document.createElement("div");g.classList.add("todoHouse"),g.classList.add(s),g.appendChild(C),g.appendChild(v),g.appendChild(S),g.appendChild(E),n.appendChild(g),e.classList.remove("open"),s++}));const o=document.querySelector(".dblInner"),c=document.querySelector(".dispOuter");function d(t){c.classList.add("open");let e=JSON.parse(localStorage.getItem(parseInt(t.target.classList[1])));o.innerHTML=`\n    <div class="disp name">Task Name:</div>\n    <div class="display small">${e.name}</div>\n    <div class="disp creator">Task Creator:</div>\n    <div class="display small">${e.creator}</div>\n    <div class="disp desc">Description:</div>\n    <div class="display large">${e.description}</div>\n    <div class="disp date">Date Created:</div>\n    <div class="display small">${e.date}</div>\n    <div class="disp stat">Status:</div>\n    <div class="display small">${e.status}</div>\n    `}document.querySelector(".dispClose").addEventListener("click",(()=>{c.classList.remove("open")}));const l=document.querySelector(".done");function i(t){let e=parseInt(t.target.classList[1]);t.target.parentElement.remove();let s=JSON.parse(localStorage.getItem(e));s.status="Complete",localStorage.setItem(e,JSON.stringify(s));const n=document.createElement("div");n.classList.add("todoDesc"),n.classList.add("compDesc"),n.classList.add(e),n.textContent=" · "+s.name;const a=document.createElement("button");a.classList.add("todoDisp"),a.classList.add(e),a.textContent="≡ Details",a.onclick=d;const o=document.createElement("button");o.classList.add("todoComp"),o.classList.add(e),o.textContent="✗ Incomplete",o.onclick=r;const c=document.createElement("button");c.classList.add("todoDel"),c.classList.add(e),c.textContent="⌦ Delete",c.onclick=m;const i=document.createElement("div");i.classList.add("todoHouse"),i.classList.add(e),i.appendChild(n),i.appendChild(a),i.appendChild(o),i.appendChild(c),l.appendChild(i)}function r(t){let e=parseInt(t.target.classList[1]);t.target.parentElement.remove();let s=JSON.parse(localStorage.getItem(e));s.status="Incomplete",localStorage.setItem(e,JSON.stringify(s));const a=document.createElement("div");a.classList.add("todoDesc"),a.classList.add(e),a.textContent=" · "+s.name;const o=document.createElement("button");o.classList.add("todoDisp"),o.classList.add(e),o.textContent="≡ Details",o.onclick=d;const c=document.createElement("button");c.classList.add("todoComp"),c.classList.add(e),c.textContent="✓ Complete",c.onclick=i;const l=document.createElement("button");l.classList.add("todoDel"),l.classList.add(e),l.textContent="⌦ Delete",l.onclick=m;const r=document.createElement("div");r.classList.add("todoHouse"),r.classList.add(e),r.appendChild(a),r.appendChild(o),r.appendChild(c),r.appendChild(l),n.appendChild(r)}function m(t){let e=parseInt(t.target.classList[1]);t.target.parentElement.remove(),localStorage.setItem(e,555)}function p(t,e){let s=JSON.parse(e);const a=document.createElement("div");a.classList.add("todoDesc"),a.classList.add(t),a.textContent=" · "+s.name;const o=document.createElement("button");o.classList.add("todoDisp"),o.classList.add(t),o.textContent="≡ Details",o.onclick=d;const c=document.createElement("button");c.classList.add("todoComp"),c.classList.add(t),c.textContent="✗ Incomplete";const p=document.createElement("button");p.classList.add("todoDel"),p.classList.add(t),p.textContent="⌦ Delete",p.onclick=m;const u=document.createElement("div");u.classList.add("todoHouse"),u.classList.add(t),u.appendChild(a),u.appendChild(o),u.appendChild(c),u.appendChild(p),"Incomplete"==s.status?(c.onclick=i,c.textContent="✓ Complete",n.appendChild(u)):(c.onclick=r,a.classList.add("compDesc"),c.textContent="✗ Incomplete",l.appendChild(u))}document.querySelector("#reset").addEventListener("click",(()=>{n.innerHTML="",l.innerHTML="",localStorage.clear()})),function(){if(555==localStorage.parametersetbyme)for(const[t,e]of Object.entries(localStorage))555!=e&&(s++,p(t,e));else localStorage.clear(),localStorage.parametersetbyme=555}()})();