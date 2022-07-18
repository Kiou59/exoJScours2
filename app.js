
document.querySelector('#myButton').addEventListener("click",function(event){
console.log('ok')
    var myImg = document.querySelector("#myImg");
fetch("https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png")
    .then(response => response.blob())
    .then(function (myBlob) {
        var objectURL = URL.createObjectURL(myBlob);
        myImg.src = objectURL;
    });

});