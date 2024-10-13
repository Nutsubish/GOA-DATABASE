const defaultStudents = [
    { name: "Nika", age: 13, leader: "No Leader", facebook: "chemi fb"}
]

const creatediv = (student) =>{
    const studentDiv = document.createElement("div");
    studentDiv.classList.add("student")

    const names = document.createElement("p");
    names.textContent = `Name : ${student.name}`

    const ages = document.createElement("p");
    ages.textContent = `Age : ${student.age}`

    const leader = document.createElement("p");
    leader.textContent = `Group Leader: ${student.leader}`

    const facebook = document.createElement("p");
    facebook.textContent  = `Facebook Account : ${student.facebook}`

    studentDiv.appendChild(names);
    studentDiv.appendChild(ages);
    studentDiv.appendChild(leader);
    studentDiv.appendChild(facebook);

    document.getElementById("studentList").appendChild(studentDiv)
}



window.addEventListener("load", () =>{
    let signInButton = document.getElementById("signInButton");

    if(signInButton){
    signInButton.addEventListener("click",() =>{

        const selectedRole = document.getElementById("roles").value;

        localStorage.setItem("role", selectedRole)

        window.location.href = "index2.html"
    })}
})




const userRole = document.getElementById("userRole");

if(userRole){
    const role = localStorage.getItem("role")
    if(role){
        userRole.textContent = role
    }
    if(role == "Moderator"){
      let modpanel = document.getElementById("modpanel")
      modpanel.style.display = "block";
    }

    defaultStudents.forEach(creatediv)
let addbtn = document.getElementById("addStudent");

addbtn.addEventListener("click", () =>{
    const studentName = document.getElementById("studentName").value;

    const studentAge = document.getElementById("studentAge").value;

    const studentLeader = document.getElementById("studentLeader").value;

    const studentFb = document.getElementById("studentFacebook").value;

    const newStudent = {
        name: studentName,
        age: studentAge,
        leader: studentLeader,
        facebook: studentFb,
    }
    creatediv(newStudent)

})

let removebtn = document.getElementById("removeStudent");

removebtn.addEventListener("click", ()=>{
    const removeStudentName = document.getElementById("removeStudentName").value.toLowerCase();

    const studentList = document.getElementById("studentList");

    const studentDivs = studentList.getElementsByClassName("student");
    let studentFind = false

    for(let i = 0 ; i < studentDivs.length; i++){
        const name = studentDivs[i].getElementsByTagName("p")[0];

        const studentName = name.textContent.replace("Name:","")

        if(studentName == removeStudentName){
            studentList.removeChild(studentDivs[i]);
            studentFind = true;
        }
    }
    if(!studentFind){
        alert("Wrong User")
    }

})
}
