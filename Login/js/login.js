// login.js



document.querySelector("#btn").addEventListener("click", () => {
    const id = "jodory9524@gmail.com";
    const password = "1234";
    console.log(location.href);
    if (id == document.querySelector("#id").value) {
        if (password == document.querySelector("#password").value) {

            location.href = "../index.html";
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