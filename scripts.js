var haveAccount = document.getElementById("have-account");
var dontHaveAccount = document.getElementById("dont-have-account");
var signUpButton = document.getElementById("sign-up-btn");
var loginButton = document.getElementById("login-btn");
var loginButton2 = document.getElementById("login-btn-2");
var loginText = document.getElementById("login-text");
var loginContainer = document.getElementById("login-container");
var x = window.matchMedia("(max-width: 968px)");

$(function() {
    $(signUpButton).click();
});

myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

function myFunction(x) {
    if (!x.matches) { // If media query matches

signUpButton.addEventListener("click", function(){
  if(loginContainer.style.left == "48%"){
    $(loginContainer).animate({left: "17%"},700);
    msg ='<div class="login-form"><div class="login-header"><h1>Sign Up</h1><img class="login-logo" src="img/logo.png" alt="Logo"></div><img class="line-under" src="img/line_under.png" alt="Underline"><form><div class="required"><label for="email">Name<span class="asterix">*</span></label><span class="name-icon"></span></div><input class="form-fields" type="name" name="name" id="name"><div id="required-email" class="required"><label for="email">Email<span class="asterix">*</span></label><span class="email-icon"></span></div><input class="form-fields" type="email" name="email" id="email"><div id="required-password"class="required"><label for="password">Password<span class="asterix">*</span></label><span class="loc-icon"></span></div><input class="form-fields" type="password" name="password" id="password"><div class="login-buttons"><button id="sign-up-btn" type="button" value="SIGN UP" class="login-btn">SIGN UP</button></div></form></div>';
    loginContainer.innerHTML = msg;
    haveAccount.style.visibility = "visible";
    haveAccount.style.display = "block";
    dontHaveAccount.style.visibility = "hidden";
    dontHaveAccount.style.display = "none";
  } else {
    loginContainer.style.left = "48%";
    haveAccount.style.visibility = "hidden";
    haveAccount.style.display = "none";
    dontHaveAccount.style.visibility = "visible";
    dontHaveAccount.style.display = "block";
  }
});



loginButton.addEventListener("click", function(){

  if(loginContainer.style.left == "48%"){
    $(loginContainer).animate({left: "17%"},700);
    haveAccount.style.visibility = "visible";
    haveAccount.style.display = "block";
    dontHaveAccount.style.visibility = "hidden";
    dontHaveAccount.style.display = "none";
    msg ='<div class="login-header"><h1>Login</h1><img class="login-logo" src="img/logo.png" alt="Logo"></div><img class="line-under" src="img/line_under.png" alt="Underline"><form><div class="required"><label for="email">Email<span class="asterix">*</span></label><span class="email-icon"></span></div><input class="form-fields" type="email" name="email" id="email"><div id="required-password"class="required"><label for="password">Password<span class="asterix">*</span></label><span class="loc-icon"></span></div><input class="form-fields" type="password" name="password" id="password"><div class="login-buttons"><button id="login-btn-2" type="button" value="LOGIN" class="login-btn">LOGIN</button><input type="image" src="img/Forgot_.png" class="forgot-btn"></div></form></div>';
    loginContainer.innerHTML = msg;
  } else {
    $(loginContainer).animate({left: "48%"},700);
    msg ='<div class="login-form"><div class="login-header"><h1>Login</h1><img class="login-logo" src="img/logo.png" alt="Logo"></div><img class="line-under" src="img/line_under.png" alt="Underline"><form><div class="required"><label for="email">Email<span class="asterix">*</span></label><span class="email-icon"></span></div><input class="form-fields" type="email" name="email" id="email"><div id="required-password"class="required"><label for="password">Password<span class="asterix">*</span></label><span class="loc-icon"></span></div><input class="form-fields" type="password" name="password" id="password"><div class="login-buttons"><button id="login-btn-2" type="button" value="LOGIN" class="login-btn">LOGIN</button><input type="image" src="img/Forgot_.png" class="forgot-btn"></div></form></div>';
    loginContainer.innerHTML = msg;
    haveAccount.style.visibility = "hidden";
    haveAccount.style.display = "none";
    dontHaveAccount.style.visibility = "visible";
    dontHaveAccount.style.display = "block";
  }
});
}}
