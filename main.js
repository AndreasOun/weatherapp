(()=>{var e={252:()=>{const e=document.getElementById("search-form"),t=document.getElementById("search-input"),r=document.getElementById("weather-results");e.addEventListener("submit",(e=>{e.preventDefault();const n=t.value.trim();0!==n.length?fetch(`https://api.openweathermap.org/data/2.5/weather?q=${n}&appid=66cc99f1e885be2e31cb63fd65cbc469&units=metric`).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{console.log(e),r.innerHTML=`\n        <p class="text-2xl font-bold">${e.name}, ${e.sys.country}</p>\n        <i class="${e.weather[0].main} text-4xl"></i>\n        <p class="text-xl">${e.weather[0].description}</p>\n        <p class="text-3xl font-bold">${e.main.temp}°C</p>\n        <p>Feels like ${e.main.feels_like}°C</p>\n      `})).catch((e=>{console.error("There was a problem with the fetch operation:",e),r.innerHTML='<p class="text-red-500">There was an error. Please try again later.</p>'})):r.innerHTML='<p class="text-red-500">Please enter a city name</p>'}))}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(252)})()})();