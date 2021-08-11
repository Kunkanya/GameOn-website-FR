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
const form = document.getElementById("form");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const y = document.querySelector("btn-submit");


//Kunkanya : Error messages for moDAL VALIDATION
const nameErrorMessage = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
const emailErrorMessage = "Veuillez entrer valid E-mail address.";
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

//Kunkanya : add preventdefault() for input form when the page is loading 
form.addEventListener('submit', (event)=>{
  event.preventDefault();
  //validate();
});

//Kunkanya : function validation all the input forms before click submit button
function validate(){
  // Kunkanya: check Input for firstname if it is valid
  if(firstName.value === "" || firstName.value.length < 2){
    console.log("tryagain");
    // Kunkanya: when error go to setInputError function
    setInputError(firstName , nameErrorMessage);
    ;
  }else{
    // Kunkanya: when success go to setInputError function
    setInputSuccess(firstName);
  }

  //Kunkanya: check Lastname
    if(lastName.value === "" || lastName.value.length < 2){
      console.log("tryagain");
      // Kunkanya: when error go to setInputError function
      setInputError(lastName , nameErrorMessage);
    }else{
      // Kunkanya: when success go to setInputError function
      setInputSuccess(lastName);
    }

    //Kunkanya: check E-mail
  if(email.value === "" || email.value == null){
    console.log("tryagain email");
    // Kunkanya: when error go to setInputError function
    setInputError(email , emailErrorMessage);
  }else{
    // Kunkanya: when success go to setInputError function
    setInputSuccess(email);
  }

  //Kunkanya: check birthdate
   if(birthDate.value === "" ){
    console.log("tryagain birthdate");
    // Kunkanya: when error go to setInputError function
    setInputError(birthDate, birthDateErrorMessage);
  }else{
    // Kunkanya: when success go to setInputError function
    setInputSuccess(birthDate);
  }

  };

//Kunkanya: if error, input = HTMLElement we want to check and message is the error message 
function setInputError(input, message){
  //Kunkanya : show the border red when input Error
  input.style.border = "solid red 2px";
  //Kunkanya : set the parent element in this case shold be "formData"
  let parent = input.parentElement;
  //Kunkanya : select the element for error message by using parentElement
  let err = parent.querySelector('small');
  //Kunkanya: show errorMessage block with red color and texts
  err.style.display = "block";
  err.style.color ="red";
  err.innerText = message;
}

//Kunkanya: InputSuccess : set border to green and display "none" for the error message
function setInputSuccess(input){
  input.style.border = "solid green 2px";
  let parent = input.parentElement;
  let err = parent.querySelector('small');
  err.style.display = "none";
}