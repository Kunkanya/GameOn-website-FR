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

const firstName = document.getElementById("first");


//Kunkanya : Error messages for moDAL VALIDATION
const nameErrorMessage = "Veuillez entrer 2 caractères ou plus pour le champ du nom."
const birthDateErrorMessage = "Vous devez entrer votre date de naissance."
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Kunkanya : close modal form
function closeModal() {
  modalbg.style.display = "none";
}


//Kunkanya: create Element for error message
function createElement(){
  var p = document.createElement("p");
  var node = document.createTextNode("nameErrorMessage");
  p.appendChild(node);
  var input = document.getElementsByClassName("text-control");
  input.appendChild(p);
}

//Variables 
var lastName = document.getElementById("last").value;
var email = document.getElementById("email").value;
var birthDate = document.getElementById("birthdate").value;
var quantity = document.getElementById("quantity").value;
var errorMsg = document.getElementsByClassName("errMsg")


//Kunkanya :function checkFirstName(){
  function FirstNamevalidate(){
    var valid = true;
    if (firstName.value == "" || (0 <= firstName.length < 2)){
      valid = false;
      firstName.style.border = "solid 2px red";
      firstName.insertAdjacentHTML('afterend','<p id="errorMessage" style=font-size:0.8rem;color:red>'+ nameErrorMessage +'</p>');
      var err = document.getElementById("errorMessage")
      firstName.focus();
      return valid;
    } else {
      valid = true;
      return valid;
      }
    }
// Kunkanya : test function validate()
function validate(){
  errorMsg.style.display = "none";
  var valid = true;
  if (firstName.value == "" || (0 <= firstName.length < 2)){
    valid = false;
    firstName.style.border = "solid 2px red";
    errorMsg.style.display = "block";
}else {
  valid = true;
  return valid;
}
   
//Kunkanya : Function return value from the location checkbox
function validateLocation()  {
  let i=0; 
  let locationArr = document.getElementsByName("location");
  for (i=0 ; i < locationArr.length; i++) {
     var locationChecked = document.getElementsByName("location")[i];
     if (locationChecked.checked == true){
         var locationValue = locationChecked.value
         return locationValue;
        }
  }
 }
//Kunkanya : validation checkbox1 for condition
/*function conditionCheck(){
  var x = document.getElementById("checkbox1").checked;
  if (x = false){
    alert("Vous devez vérifier que vous acceptez les termes et conditions.");
  } else {
    var conditionChecked = document.getElementsByClassName("checkbox1").value
    //alert(conditionChecked);
    alert("condition Checked");
  }
}*/

//Kunkanya : Function validation in the input form
  function validate__test() {
    if (firstName = "") {
    window.alert("Veuillez entrer 2 caractères ou plus pour le champ du nom.")
  }else{
  window.alert(firstName + " " + lastName + " " + email + " " + birthDate + " " + quantity + " " + location + " " + condition )  
  alert("Merci! Votre reservation a été recue")
}
}

