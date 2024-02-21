function validateForm(){
  let username = document.getElementById("exampleInputusername1").value;
  let email = document.getElementById("exampleInputEmail1").value;
  let password = document.getElementById("exampleInputPassword1").value;

  if(username === '' || email === '' || password === ''){
      alert("Please fill-in all the details");
      return false;
  }
  
  alert("Registration Successful!");
  return true;
}

function clearForm() {
  document.getElementById("register").reset();
}