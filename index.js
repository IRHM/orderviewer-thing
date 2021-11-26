function login(event) {
  // stop page refreshing when submitting form
  event.preventDefault();

  const form = event.target.elements;
  const loginNoticeElement = document.getElementById("loginNotice");

  if (form.username.value == USER && form.password.value == PASS) {
    loginNoticeElement.innerHTML = "Logging in!";
    console.log("correct");
    window.location = "home/home.html";
    // localStorage.setItem()
  } else {
    loginNoticeElement.innerHTML = "Incorrect Username or Password!";
  }
}
