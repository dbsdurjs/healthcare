// facereader.js
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('.image-upload-wrap').hide();
            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();
            $('.image-title').html(input.files[0].name);
        };
        reader.readAsDataURL(input.files[0]);
        init().then(() => {
            console.log("hello");
            predict();
        });
    } else {
        removeUpload();
    }
}

function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function() {
    $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function() {
    $('.image-upload-wrap').removeClass('image-dropping');
});



const URL = "https://teachablemachine.withgoogle.com/models/wHijUKrEn/";
let model, webcam, labelContainer, maxPredictions;

async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) {
        labelContainer.appendChild(document.createElement("div"));
    }
}

async function predict() {

    var image = document.getElementById("face-image")
    const prediction = await model.predict(image, false);
    prediction.sort((a, b) => parseFloat(b.probability) - parseFloat(a.probability));
    console.log(prediction[0].className);
    var resultMessege;
    switch (prediction[0].className) {
        case "타격가(ex.권투, 킥복싱, 무예타이)":
            resultMessege = "당신의 관상은 천부적인 타격가 입니다!! 타격쪽 운동을 추천드립니다 쪼매 치시나보네요"
            break;
        case "구기종목(ex.축구, 농구, 야구)":
            resultMessege = "당신의 관상은 구기종목에 소질있습니다!! 앞으로 공과 친해질수 있도록 하세요!!"
            break;
        case "그래플러(ex.주짓수, 유도, 레슬링)":
            resultMessege = "당신의 관상은 천상 그래플러 입니다. 길거리에서 만나고 싶지 않군요"
            break;
        case "보디빌딩":
            resultMessege = "당신의 관상은 보디빌더 입니다!! 쉽게 근육이 붙는 체형이시군요"
            break;
        case "운동찐따(운동하지마샘)":
            resultMessege = "당신의 관상은 운동과 부적합합니다!! 운동보단 다른것을 취미로 찾으세요!!!"
            break;
        default:
            resultMessege = "알수없음 에러 자동 기폭장치 가동 5초전"
    }
    $('.result-message').html(resultMessege);
    for (let i = 0; i < maxPredictions; i++) {
        const classPrediction =
            prediction[i].className + ": " + prediction[i].probability.toFixed(2);
        labelContainer.childNodes[i].innerHTML = classPrediction;
    }
}