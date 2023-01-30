// main.js
// 로딩 창 
const main = document.querySelector(".main-start")
const loading = document.querySelector(".loading-container")

const all = document.querySelector('body')

loading.addEventListener('click', function() {
    window.location.href = './stopwatch.html'
        // loading.style.display = 'none';
        // main.style.display = 'block'
})

setTimeout(function() {
    window.location.href = './stopwatch.html'
        // loading.style.display = 'none';
        // main.style.display = 'block'
}, Math.random(1000) * 5000)