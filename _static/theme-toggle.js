// theme-toggle.js — save preference and apply CSS class to <body>
(function(){
const LS_KEY = 'dl_portfolio_theme';
const root = document.documentElement;
function applyTheme(pref){
const body = document.body;
if(pref === 'light') body.classList.add('light-theme');
else body.classList.remove('light-theme');
}
function toggleTheme(){
const cur = localStorage.getItem(LS_KEY) || 'dark';
const next = cur === 'dark' ? 'light' : 'dark';
localStorage.setItem(LS_KEY, next);
applyTheme(next);
// animate knob if present
const knob = document.querySelector('.theme-knob');
if(knob) knob.style.transform = next === 'light' ? 'translateX(0)' : 'translateX(0)';
}
// on load, apply saved theme
document.addEventListener('DOMContentLoaded', ()=>{
const saved = localStorage.getItem(LS_KEY) || 'dark';
applyTheme(saved);


// attach click handler to any element with id 'dl-theme-toggle'
const btn = document.getElementById('dl-theme-toggle');
if(btn) btn.addEventListener('click', toggleTheme);
});
})();
