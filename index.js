import{i as u,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",f=o=>{const s=new URLSearchParams({key:"45683137-9da9ef345b4290ae910ded200",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}?${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},h=o=>`<div class="gallery-card">
    <a href="${o.largeImageURL}"><img src="${o.previewURL}" alt="" title="" class="gallery-img"/></a>
</div>`,n=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),l=document.querySelector(".loader"),g=o=>{o.preventDefault();const s=n.elements.user_query.value;l.classList.toggle("is-hidden"),f(s).then(r=>{if(l.classList.toggle("is-hidden"),r.hits.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML="",n.reset();return}const a=r.hits.map(t=>h(t)).join("");c.innerHTML=a;var e=new d(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt",captionPosition:"bottom"});e.refresh()}).catch(r=>{console.log(r)})};n.addEventListener("submit",g);
//# sourceMappingURL=index.js.map
