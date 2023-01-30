// login.js

const loading = document.querySelector(".loading-container")
const login = document.querySelector('.login')
const nonMembers = document.querySelector('.login .none-members')

const btn = document.querySelector('.btn')
const all = document.querySelector('body')

loading.addEventListener('click', function() {
    loading.style.display = 'none';

    login.style.display = 'contents'
})

setTimeout(function() {
    loading.style.display = 'none';

    login.style.display = 'contents'
}, Math.random(1000) * 5000)

// btn.addEventListener('click', function() {
//     loading.style.display = 'contents';
//     login.style.display = 'none'
// })


document.querySelector("#btn").addEventListener("click", () => {
    const id = "jodory9524@gmail.com";
    const password = "1234";
    console.log(location.href);
    if (id == document.querySelector("#id").value) {
        if (password == document.querySelector("#password").value) {

            location.href = "index.html";
            alert("환영합니다!");
            //document.write("환영합니다!");

        } else {
            alert("비밀번호가 맞지 않습니다.");
            //document.write("비밀번호가 맞지 않습니다.");
        }
    } else {
        alert("아이디 혹은 비밀번호가 맞지 않습니다.");
        //document.wrtie("아이디 혹은 비밀번호가 맞지 않습니다.");
    }
});