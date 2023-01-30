//stopwatch.js
let timerId;
let time = 0;
const stopwatch = document.getElementById("stopwatch");
let hour, min, sec;

const main_start = document.querySelector('#main-text')
const main = document.querySelector('.main-start')
const watch = document.querySelector('#watch')
const start = document.querySelector('#start')
const pause = document.querySelector('#pause')
const reset = document.querySelector('#reset')

let selected_value;
let num;
// const timeset = document.querySelector('.timeset')
// console.log(timeset)
var alert_select_value = function(select_obj) {
    // 우선 selectbox에서 선택된 index를 찾고 
    var selected_index = select_obj.selectedIndex;
    // 선택된 index의 value를 찾고 
    selected_value = select_obj.options[selected_index].value;
    // 원하는 동작을 수행한다. 여기서는 그냥 alert해주는 식으로만 처리함. 
    num = "00:00:" + selected_value;
    console.log(selected_value);

};


function printTime() {
    time++;
    stopwatch.innerText = getTimeFormatString();
    // console.log(getTimeFormatString())
    if (getTimeFormatString() === num) {
        setTimeout(function() {
            alert(selected_value + "초 완료!")
            pause.style.display = "none"
            reset.style.display = "none"
            start.style.display = "none"
            main.style.display = "block"
            watch.style.display = "none"
            resetClock()
        }, 100)

    }
}

//시계 시작 - 재귀호출로 반복실행
function startClock() {
    printTime();

    timerId = setTimeout(startClock, 1000);
}

//시계 중지
function pauseClock() {
    if (timerId != null) {
        clearTimeout(timerId);
    }

    // let record = "<h2>" + getTimeFormatString() + "</h2>"
    // document.querySelector(".record").innerHTML = record

}

// 시계 초기화
function resetClock() {
    pauseClock();
    stopwatch.innerText = "00:00:00";
    time = 0;
}

// 시간(int)을 시, 분, 초 문자열로 변환
function getTimeFormatString() {
    hour = parseInt(String(time / (60 * 60)));
    min = parseInt(String((time - (hour * 60 * 60)) / 60));
    sec = time % 60;

    return String(hour).padStart(2, '0') + ":" + String(min).padStart(2, '0') + ":" + String(sec).padStart(2, '0');
}

main_start.addEventListener('click', function() {
    main.style.display = "none"
    watch.style.display = "contents"
    pause.style.display = "contents"
    reset.style.display = "contents"
    start.style.display = "none"
    startClock()
})

start.addEventListener('click', function() {

    pause.style.display = "contents"
    reset.style.display = "contents"
    start.style.display = "none"
    startClock()
});
pause.addEventListener('click', function() {
    pause.style.display = "none"
    reset.style.display = "contents"
    start.style.display = "contents"
    pauseClock()
});
reset.addEventListener('click', function() {
    pause.style.display = "none"
    reset.style.display = "none"
    start.style.display = "none"
    main.style.display = "block"
    watch.style.display = "none"
    resetClock()
})