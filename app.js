
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

    studentName.innerHTML=student.firstname +' '+student.lastname
    studentCard.appendChild(studentName)
    listOfStudents.appendChild(studentCard)
    
    
    
});
        
    });
    
