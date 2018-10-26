function validateFname(){
  var fnamevar = document.getElementById("fname").value,
  firstnamediv = document.getElementById("fnamemsg")
  if(fnamevar === ""){
  fname.style.border='1px solid red';
  firstnamediv.innerHTML ="first name can not be empty";
  }
  else{
  fname.style.border='1px solid white';
  firstnamediv.innerHTML ="";
  }
  }
  function validatelname(){
  var lnamevar = document.getElementById("lname").value;
  lnamediv = document.getElementById("lnamemsg");
  if(lnamevar === ""){
  lname.style.border='1px solid red';
  lnamediv.innerHTML ="last name can not be empty";
  }
  else{
  lname.style.border='1px solid white';
  lnamediv.innerHTML ="";
  }
  }
  function checkPhone() {
  var phonevar = document.getElementById("phonenumber").value;
  var phonediv = document.getElementById("phonemsg")
  var phoneNum = phonevar.replace(/[^\d]/g, '');
  if(phoneNum.length==10) { 
  phonenumber.style.borderColor="white";
  phonediv.innerHTML="";  
  return true;
  } 
  else if(phoneNum.length!=10){
  phonenumber.style.borderColor="red";
  phonediv.innerHTML="Enter phone number";
  return false;
  }
  }
  function validateEmail(){
  var emailvar = document.getElementById("email").value;
  emaildiv = document.getElementById("emailmsg");
  if(emailvar === ""){
  email.style.border='1px solid red';
  emaildiv.innerHTML ="email can not be empty";
  }
  else{
  email.style.border='1px solid white';
  emaildiv.innerHTML ="";
  }
  }
  