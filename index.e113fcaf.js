var _typeof=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};!function(){var e=document.getElementById("mainMenuButton"),t=document.querySelector("[data-menu-button]"),n=document.querySelector("[data-menu]"),o=document.getElementById("closeMenuBtn"),d=document.getElementById("mobile-menu").children,i=function(e){((void 0===e?"undefined":_typeof(e))!==("undefined"==typeof MediaQueryListEvent?"undefined":_typeof(MediaQueryListEvent))||(null==e?void 0:e.matches)&&!t.classList.contains("is-open"))&&(t.classList.contains("is-open")||(document.body.style.overflowY=null),t.classList.add("is-open"),t.setAttribute("aria-expanded",!1),n.classList.remove("is-open"))},l=!0,a=!1,s=void 0;try{for(var r,u=d[Symbol.iterator]();!(l=(r=u.next()).done);l=!0){r.value.addEventListener("click",i)}}catch(e){a=!0,s=e}finally{try{l||null==u.return||u.return()}finally{if(a)throw s}}e.addEventListener("click",(function(){document.body.style.overflowY?document.body.style.overflowY=null:document.body.style.overflowY="hidden";var e="true"===t.getAttribute("aria-expanded")||!1;t.classList.toggle("is-open"),t.setAttribute("aria-expanded",!e),n.classList.toggle("is-open")})),o.addEventListener("click",i),window.matchMedia("(min-width: 768px)").addEventListener("change",i)}();
//# sourceMappingURL=index.e113fcaf.js.map
