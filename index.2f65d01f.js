!function(){var e=document.getElementById("openOrderModal"),t=document.getElementById("closeOrderModal"),n=document.getElementById("modalConnection"),r=document.getElementById("openOrderFromHero"),d=document.getElementById("orderForm");e.addEventListener("click",(function(){return m(n,!0)})),t.addEventListener("click",(function(){return m(n)})),r.addEventListener("click",(function(){return m(n,!0)}));var l=document.getElementById("modalThanks"),o=document.getElementById("closeThanksModal"),i=document.getElementById("continueThanksModal");o.addEventListener("click",(function(){return m(l)})),i.addEventListener("click",(function(){return m(l)}));var u=document.getElementById("subscribeForm"),c=document.getElementById("blogModal"),a=document.getElementById("subscribe");function m(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.classList.toggle("is-hidden"),document.body.style.overflowY=t?"hidden":null}function s(e){var t=!0,n=!1,r=void 0;try{for(var d,l=e[Symbol.iterator]();!(t=(d=l.next()).done);t=!0){if(!d.value.validity.valid)return!1}}catch(e){n=!0,r=e}finally{try{t||null==l.return||l.return()}finally{if(n)throw r}}return!0}function y(e){var t=!0,n=!1,r=void 0;try{for(var d,l=e[Symbol.iterator]();!(t=(d=l.next()).done);t=!0){d.value.value=null}}catch(e){n=!0,r=e}finally{try{t||null==l.return||l.return()}finally{if(n)throw r}}}document.getElementById("closeSubscribe").addEventListener("click",(function(){return m(c)})),a.addEventListener("click",(function(){return m(c,!0)})),u.addEventListener("submit",(function(e){e.preventDefault(),s(u.getElementsByTagName("input"))&&(m(c),y(u.getElementsByTagName("input")))})),d.addEventListener("submit",(function(e){e.preventDefault(),s(d.getElementsByTagName("input"))&&(m(n,!0),m(l,!0),y(d.getElementsByTagName("input")))}))}();
//# sourceMappingURL=index.2f65d01f.js.map
