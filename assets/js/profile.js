const name = document.getElementById("name");
const email = document.getElementById("email");
const chapter = document.getElementById("chapter");
const confirm = document.getElementById("confirm");
const outputNameTitle = document.getElementById("name-holder");
const outputName = document.getElementById("nameOrig");
const outputEmail = document.getElementById("emailOrig");
const outputChapter = document.getElementById("chapterOrig");

//condition to check if the input is empty
confirm.addEventListener("click", function() {
    if (name.value === "" || email.value === "" || chapter.value === "") {
        alert("Please fill out all fields");
        return;
    } else {
//Inputs the details to profile section
        dislayDetails();
        document.querySelector(".popup").classList.remove("active");
    }
});

//Function to display the details
function dislayDetails() {
    outputNameTitle.innerHTML = name.value;
    outputName.innerHTML = "<i class='fa-solid fa-file-signature'></i> " + name.value;
    outputEmail.innerHTML = "<i class='fa-solid fa-envelope'></i> " + email.value;
    outputChapter.innerHTML = "<i class='fa-solid fa-location-dot'></i> " + chapter.value;
}

//Profile picture upload
let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("input-file");

inputFile.onchange = function(){
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
}

document.querySelector("#edit-button").addEventListener("click", function() {
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-button").addEventListener("click", function() {
    document.querySelector(".popup").classList.remove("active");
});

document.querySelector(".popup #button-cancel").addEventListener("click", function() {
    document.querySelector(".popup").classList.remove("active");
});