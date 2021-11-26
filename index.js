// If already logged in, go to home page
console.log(localStorage.getItem("loggedin"));
if (localStorage.getItem("loggedin") == "true") {
  window.location = "home/home.html";
  console.log("true");
} else {
  console.log("false");
}

function login(event) {
  // stop page refreshing when submitting form
  event.preventDefault();

  const form = event.target.elements;
  const loginNoticeElement = document.getElementById("loginNotice");

  if (form.username.value == USER && form.password.value == PASS) {
    loginNoticeElement.innerHTML = "Logging in!";
    console.log("correct");
    window.location = "home/home.html";

    localStorage.setItem("loggedin", "true");
  } else {
    loginNoticeElement.innerHTML = "Incorrect Username or Password!";
  }
}
