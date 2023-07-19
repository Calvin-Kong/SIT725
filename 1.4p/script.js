function changeText() {
    var textList = ["Blue","Yellow","Green","Red"]
    var textColor = ["blue","yellow","green","red"]
    var array = getRandomNumber(0, textList.length - 1)
    var array = getTextColor(0, textColor.length - 1)
    document.getElementById("header").innerHTML = textList[array];
    document.getElementById("header").style.color = textColor[array];
}

function getRandomNumber(min,max) {
    return Math.floor(Math.random() * (max-min + 1) + min);
}

function getTextColor(min,max) {
    return Math.floor(Math.random() * (max-min + 1) + min);
}