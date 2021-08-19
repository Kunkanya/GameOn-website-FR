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
const locationTown = document.querySelectorAll('input[name="location"]');
const conditionGeneral = document.getElementById("checkbox1");

//Kunkanya : Error messages for function validate()
const nameErrorMessage =
  "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
const emailErrorMessage = "Veuillez entrer valid E-mail address.";
const birthDateErrorMessage = "Vous devez entrer votre date de naissance.";
const quantityErrorMessage = "Vous devez saisir une nummer.";
const locationErrorMessage = "Vous devez choisir une option.";
const conditionErrorMessage =
  "Vous devez vérifier que vous acceptez les termes et conditions.";
let valid = false;
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function test(){
  alert("yep");
  closeModal();
}
//Kunkanya : close modal form
function closeModal() {
  modalbg.style.display = "none";
  location.reload();
}

//Kunkanya : add preventdefault() for input form when the page is loading
form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});

//Kunkanya : function validation all the input forms before click submit button
function validate() {
  let valid = false;
  // Kunkanya: check Input for firstname if it is valid
  if (firstName.value === "" || firstName.value.length < 2) {
    // Kunkanya: when error go to setInputError function
    setInputError(firstName, nameErrorMessage);
    return false;
  } else {
    // Kunkanya: when success go to setInputError function
    setInputSuccess(firstName);
  }

  //Kunkanya: check Lastname
  if (lastName.value === "" || lastName.value.length < 2) {
    // Kunkanya: when error go to setInputError function
    setInputError(lastName, nameErrorMessage);
    return false;
  } else {
    // Kunkanya: when success go to setInputError function
    setInputSuccess(lastName);
  }

  //Kunkanya: check E-mail
  if (email.value === "" || email.value == null) {
    // Kunkanya: when error go to setInputError function
    setInputError(email, emailErrorMessage);
    return false;
  } else {
    // Kunkanya: when success go to setInputError function
    setInputSuccess(email);
  }

  //Kunkanya: check birthdate

  if (birthDate.value === "") {
    // Kunkanya: when error go to setInputError function
    setInputError(birthDate, birthDateErrorMessage);
    return false;
  } else {
    // Kunkanya: when success go to setInputError function
    setInputSuccess(birthDate);
  }

  //Kunkanya: check quantity
  if (quantity.value === "" || quantity.value === NaN) {
    // Kunkanya: when error go to setInputError function
    setInputError(quantity, quantityErrorMessage);
    return false;
  } else {
    // Kunkanya: when success go to setInputError function
    setInputSuccess(quantity);
  }

  // Kunkanya: check location. 
  let locationValid = false;
  //Kunkanya: to select the parent element of the DOM
  let parent = locationTown[0].parentElement;
  //Kunkanya: to select the child of the parent with tag "small"
  let err = parent.querySelector("small");
  //Kunkanya : check at least one round if it checked and break the loop if found the first checked.
  for (var i = 0; i < locationTown.length; i++) {
    if (locationTown[i].checked) {
      err.style.display = "none";
      locationValid = true;
      break;
    }
  }

  //Kunkanya: if location isnt checked show message error
  if (!locationValid) {
    err.style.display = "block";
    err.style.color = "red";
    err.innerText = locationErrorMessage;
    return false;
  }

  // Kunkanya: check condition general if checked
  if (!conditionGeneral.checked && valid == false) {
    let parent = conditionGeneral.parentElement;
    let err = parent.querySelector("small");
    if (!conditionGeneral.checked) {
      err.style.display = "block";
      err.style.color = "red";
      err.innerText = conditionErrorMessage;
      return false;
    } else {
      err.style.display = "none";
      valid = true;
    }
  } else {
    valid = true;
  }

  //Kunkanya : if valid = true then show the thankyou page
  if (valid == true) {
    form.style.display = "none";
    const submitPage = document.getElementById("thankyou");
    submitPage.style.display = "block";
  } 
}

//Kunkanya: if error, input = HTMLElement we want to check and message is the error message
function setInputError(input, message) {
  //Kunkanya : show the border red when input Error
  input.style.border = "solid red 2px";
  input.focus();
  input.className = "text-control";
  input.className = "text-control error";
  //Kunkanya : set the parent element in this case shold be "formData"
  let parent = input.parentElement;
  //Kunkanya : select the element for error message by using parentElement
  let err = parent.querySelector("small");
  //Kunkanya: show errorMessage block with red color and texts
  err.style.display = "block";
  err.style.color = "red";
  err.innerText = message;
}

//Kunkanya: InputSuccess : set border to green and display "none" for the error message
function setInputSuccess(input) {
  input.style.border = "solid green 2px";
  input.className = "text-control";
  input.className = "text-control success";
  let parent = input.parentElement;
  let err = parent.querySelector("small");
  err.style.display = "none";
}

