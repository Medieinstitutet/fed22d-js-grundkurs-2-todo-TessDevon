(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const i=document.querySelector("#toDoItemSection"),n=[{toDaysDate:"2022-12-12",deadLineDate:"2023-03-15, 05:30",category:"Tr\xE4dg\xE5rd",toDoName:"F\xF6rsta tr\xE4dg\xE5rdstunnan",description:"F\xD6rsta t\xF6mningen av tr\xE4dg\xE5rdstunnan. Fyll p\xE5 under veckan!"},{toDaysDate:"2022-12-12",deadLineDate:"2023-05-30, 15:30",category:"Hantverkare",toDoName:"Sotaren p\xE5bes\xF6k",description:"Fr\xE5ga om olika f\xF6rbr\xE4nningsalternativ."},{toDaysDate:"2022-12-14",deadLineDate:"2023-06-30, 08:00",category:"Hus och hem",toDoName:"M\xE5la om garaget",description:"M\xE5lning av garage denna veckan med f\xF6rtv\xE4tt och m\xE5lning."},{toDaysDate:"2022-12-14",deadLineDate:"2023-03-05, 09:00",category:"Tr\xE4dg\xE5rd",toDoName:"F\xF6rsta s\xE5dden",description:"B\xF6rja f\xF6rs\xE5 Physalis och Vattenmelon."},{toDaysDate:"2022-12-14",deadLineDate:"2023-04-15, 10:00",category:"Tr\xE4dg\xE5rd",toDoName:"Andra s\xE5dden",description:"Dags att f\xF6rs\xE5 tomat och gurka"},{toDaysDate:"2022-12-13",deadLineDate:"2023-03-15, 5:30",category:"Tr\xE4dg\xE5rd",toDoName:"F\xF6rsta tr\xE4dg\xE5rdstunnan",description:"F\xD6rsta t\xF6mningen av tr\xE4dg\xE5rdstunnan. Fyll p\xE5 under veckan!"}];function l(){const e=document.querySelectorAll("#category"),a=document.querySelectorAll("#toDoItem");console.log(e[0].innerHTML);for(let o=0;o<e.length;o++)e[o].innerHTML==="Tr\xE4dg\xE5rd"?(e[o].style.color="rgb(74, 119, 83)",a[o].style.border="5px solid rgb(74, 119, 83)"):e[o].innerHTML==="Hus och hem"?(e[o].style.color="rgb(57, 57, 136)",a[o].style.border="5px solid rgb(57, 57, 136)"):e[o].innerHTML==="Hantverkare"&&(e[o].style.color="rgb(116, 59, 131)",a[o].style.border="5px solid rgb(116, 59, 131)")}function c(){if(i!=null){i.innerHTML="";for(let e=0;e<n.length;e++)i.innerHTML+=`<article class="toDoItemClass" id="toDoItem">
      <div class="datePartInTODOItem">
        <span class="toDaysDateClass" id="toDaysDate">${n[e].toDaysDate}</span>
        <span class="deadLineDateClass" id="deadLineDate">${n[e].deadLineDate}</span>
      </div>
      <p class="categoryClass" id="category">${n[e].category}</p>
      <h2 class="toDoNameClass" id="toDoName">${n[e].toDoName}</h2>
      <p class="descriptionClass" id="description">${n[e].description}</p>
      <p class="fiveDaysToDeadlineP" id="fiveDaysToDeadline"></p>
      <div class="todoButtonsDiv">
        <button class="deliteButtonClass" id="deliteButton">Radera</button>
        <button class="doneButtonClass" id="doneButton">Markera som klar</button>
      </div>      
    </article>`;l()}}c();
