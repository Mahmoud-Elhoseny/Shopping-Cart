let changeNewName = document.querySelector("#changeName")
let NewEmail = document.querySelector("#changeEmail")
let EditForm = document.querySelector("#edit-profile-form")
let inputFile = document.getElementById("upload-file")


let NAme = localStorage.getItem("userName")
let EMail = localStorage.getItem("Email")



changeNewName.value = NAme
NewEmail.value = EMail

// evemts
EditForm.addEventListener("submit",editProfile)



// functions

function editProfile (e) {
    e.preventDefault();

localStorage.setItem("userName",changeNewName.value)
localStorage.setItem("Email",NewEmail.value)


    setTimeout(() => {
        window.location = "profile.html"
    }, 1500);


}
