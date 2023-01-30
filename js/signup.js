// login.js
const loading = document.querySelector(".loading-container")
const signup = document.querySelector('.signup')
const nonMembers = document.querySelector('.signup .none-members')

const btn = document.querySelector('.btn')
const all = document.querySelector('body')

loading.addEventListener('click', function() {
    loading.style.display = 'none';

    signup.style.display = 'contents'
})

setTimeout(function() {
    loading.style.display = 'none';

    signup.style.display = 'contents'
}, Math.random(1000) * 5000)

btn.addEventListener('click', function() {
    loading.style.display = 'contents';
})