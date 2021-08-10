function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

//Kunkanya set variable
const form = document.getElementsById("reserve");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const formSubmit =document.getElementsByClassName("btn-submit");


//Kunkanya : Error messages for moDAL VALIDATION
const nameErrorMessage = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
const birthDateErrorMessage = "Vous devez entrer votre date de naissance.";

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
};

//Kunkanya : close modal form
function closeModal() {
  modalbg.style.display = "none";
};

form.addEventListener('submit', e =>{
  e.preventDefault();
  console.log("prevent default");
  validate();
});

function validate(){
  checkInput();
  return true;
};

function checkInput(){
    // check Firstname and trimming value from firstname
    if (firstName.value == "" || firstName.value.length < 2){
        setClassError(firstName, nameErrorMessage);
        firstName.focus;
    }else{
        setClassSuccess(firstName);
    }
    if (lastName.value == "" || lastName.value.length < 2){
      setClassError(lastName, nameErrorMessage);
      lastName.focus;
    }else{
      setClassSuccess(firstName);
  }
};

// set class error to .text-control function
function setClassError(input, message){
  input.className = 'text-control error';
  const p = document.getElementsByClassName("errMsg");
  p.innerHTML = message
  //alert(p.innerHTML.value);
};

// set class to success to .text-control function
function setClassSuccess(input){
  input.className = 'text-control';
};

// try and catch error
try {
  validate();
} catch (error) {
  console.log(error instanceof TypeError);
  alert(error.message + " " + 
        error.lineNumber );
  
}