const e=document.querySelectorAll(".biggestNum-input"),n=document.querySelector(".biggestNum-paragraph"),u=()=>{const t=Array.from(e).map(a=>Number(a.value)||0),r=Math.max(...t);n.textContent=`Найбільше число, яке ви ввели: ${r}`};e.forEach(t=>{t.addEventListener("input",u)});
//# sourceMappingURL=biggest-number-859e96b8.js.map
