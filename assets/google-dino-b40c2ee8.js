const o=document.querySelector(".dino"),c=document.querySelector(".cactus"),e=document.querySelector(".dino-button");document.querySelector(".help");const s=document.querySelector(".dino-lose");let l=!1;function a(){if(l)return;l=!0;let t=0;const n=setInterval(()=>{if(t>=200){clearInterval(n);const i=setInterval(()=>{t<=0?(clearInterval(i),l=!1):(t-=10,o.style.bottom=`${t}px`)},20)}else t+=7,o.style.bottom=`${t}px`},20)}function r(){const t=o.getBoundingClientRect(),n=c.getBoundingClientRect();t.right>n.left&&t.left<n.right&&t.bottom>n.top&&(c.style.animationPlayState="paused",s.style.display="block",o.style.animationPlayState="paused")}document.addEventListener("mousedown",t=>{t.button===0&&a()});setInterval(()=>{r()},10);e&&(e.id="b_epr",e.innerText="Restart",e.addEventListener("click",()=>window.location.reload()),e.insertAdjacentElement("afterend",e));
