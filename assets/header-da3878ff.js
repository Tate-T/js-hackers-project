const i=document.querySelector(".header__overlay"),o=document.querySelector("#header-btn"),s=document.querySelector("#first-variant"),r=document.querySelector("#second-variant"),a=document.querySelector("#third-variant"),d=document.querySelector("#forth-variant");o.firstElementChild.style.transform="rotate(0)";o.addEventListener("click",n=>{i.classList.toggle("is-hidden"),o.firstElementChild.style.transform+="rotate(180deg)"});const l=[{id:"one2",name:"Високосний калькулятор",category:"numerical"},{id:"two2",name:"Вгадай число",category:"numerical"},{id:"three2",name:"Камінь-Ножиці-Папір",category:"game"},{id:"four2",name:"Калькулятор",category:"numerical"},{id:"five2",name:"Калькулятор часу",category:"numerical"},{id:"six2",name:"Google динозаврик",category:"game"},{id:"seven2",name:"Футбол",category:"game"},{id:"eight2",name:"Найбільше число",category:"numerical"},{id:"nine2",name:"Наша команда",category:"acquaintance"},{id:"ten2",name:"Вчений",category:"acquaintance"}],m=[...l],t=[...m];s.addEventListener("click",()=>{const n=document.querySelectorAll(".section__deleted");for(const e of n)e.classList.remove("section__deleted");o.firstElementChild.style.transform="rotate(0)",i.classList.toggle("is-hidden")});r.addEventListener("click",()=>{const n=document.querySelectorAll(".section__deleted");for(const e of n)e.classList.remove("section__deleted");o.firstElementChild.style.transform="rotate(0)",i.classList.toggle("is-hidden");for(let e=0;e<t.length;e+=1)if(t[e].category!=="numerical"){const c=document.querySelector(`#${t[e].id}`);c&&c.classList.add("section__deleted")}});a.addEventListener("click",()=>{const n=document.querySelectorAll(".section__deleted");for(const e of n)e.classList.remove("section__deleted");o.firstElementChild.style.transform="rotate(0)",i.classList.toggle("is-hidden");for(let e=0;e<t.length;e+=1)if(t[e].category!=="game"){const c=document.querySelector(`#${t[e].id}`);c&&c.classList.add("section__deleted")}});d.addEventListener("click",()=>{const n=document.querySelectorAll(".section__deleted");for(const e of n)e.classList.remove("section__deleted");o.firstElementChild.style.transform="rotate(0)",i.classList.toggle("is-hidden");for(let e=0;e<t.length;e+=1)if(t[e].category!=="acquaintance"){const c=document.querySelector(`#${t[e].id}`);c&&c.classList.add("section__deleted")}});
//# sourceMappingURL=header-da3878ff.js.map
