
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

// exo2
let listOfStudents = document.querySelector('#studentsList');
fetch("https://pachyderme.net/students.json")
.then(response =>response.json())
.then(function(myJson){
console.log(myJson.students)
var students =myJson.students;
students.forEach(student => {
    studentCard = document.createElement('div');
    studentCard.className="card"
studentName =document.createElement('div');
studentName.className='card-title'
studentInfo =document.createElement('div');
studentInfo.className = 'card-text'
studentInfo.innerHTML =`sex :${student.sex}`

    studentName.innerHTML=student.firstname +' '+student.lastname
    studentCard.appendChild(studentName)
    studentCard.appendChild(studentInfo)
    listOfStudents.appendChild(studentCard)
});
    });

// exo 3
const input = document.querySelector("#newName")
const frontName =document.querySelector("#name")
const add =document.querySelector("#addName")
const rmv = document.querySelector("#rmvName")
const pop =document.querySelector("#popName")

add.addEventListener("click",function(event){
    let inputValue=input.value
    localStorage.setItem("storageName",inputValue)

    input.value=''
})
pop.addEventListener("click",function(event){
    frontName.innerHTML=localStorage.getItem("storageName")
})
rmv.addEventListener("click",function(event){
    frontName.innerHTML=''
    localStorage.removeItem("storageName")
})
