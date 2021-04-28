//Для переключения вкладок
let tab = document.querySelectorAll(".tab");
let content = document.querySelectorAll(".content");

var  getNumTab = function(){
	var numTab = this.getAttribute('itab');
	for (var i = 0; i < content.length; i++) {
		content[i].className = 'content hide';
		tab[i].className = 'tab';
	}
	content[numTab].className = 'content show';
	tab[numTab].className = 'tab active';
}

for (var i = 0; i < tab.length; i++) {
	tab[i].onclick = getNumTab;
}
//Замена placeholder-а на label
let inputPh = document.querySelectorAll("#sign-fname, #sign-lname, #sign-email, #sign-password");
for (var i = 0; i < inputPh.length; i++) {
	inputPh[i].addEventListener('blur', function() {
		this.type = 'hiden';
		var label = document.querySelector("label[for='" + this.name + "']");
		if (label) {
			if (this.value == "") {
				label.style.display = "block";
			}
			else {
				label.style.display = "none";	
			}
		}
	})
}

let inputLogPh = document.querySelectorAll("#log-fname, #log-lname, #log-email, #log-password");
for (var i = 0; i < inputLogPh.length; i++) {
	inputLogPh[i].addEventListener('blur', function() {
		this.type = 'hiden';
		var label = document.querySelector("label[for='" + this.name + "']");
		if (label) {
			if (this.value == "") {
				label.style.display = "block";
			}
			else {
				label.style.display = "none";	
			}
		}
	})
}

//При нажатие на submit GET STARTED
let formSignUp = document.querySelector(".form-signup");

formSignUp.addEventListener("invalid", function(evt){
	evt.preventDefault();
	if(evt.target.validity.valueMissing) {
		evt.target.previousElementSibling.innerHTML = "Заполните это поле";
		evt.target.previousElementSibling.style.opacity = "1";
	}
	if (evt.target.validity.tooShort) {
		evt.target.previousElementSibling.innerHTML = "Минимально количество символов должно быть не менее" + evt.target.getAttribute("minlength");
		evt.target.previousElementSibling.style.opacity = "1";
	}
	if (evt.target.validity.patternMismatch) {
		evt.target.previousElementSibling.innerHTML = "Неправильный адресс электронной почты." + "<br>" + "Например: ivanov@mail.ru";
		evt.target.previousElementSibling.style.opacity = "1";
	}
}, true);

let getStarted = document.querySelector("#sign-submit");

getStarted.onclick = function() {
	var input = document.querySelectorAll(".form-signup div input");
	
	for (var i = 0; i < input.length; i++) {
		if (input[i].validity.valid == false) {
			input[i].style.borderColor = "#f00";
			input[i].style.backgroundColor = "#fff";
		}
		else {
			input[i].style.borderColor = "#0f0";
			input[i].style.backgroundColor = "#fff";
		}
	}
}

formSignUp.onclick = function() {
	var errorSignUp = document.querySelectorAll(".form-signup .error");
	for (var i = 0; i < errorSignUp.length; i++) {
		errorSignUp[i].style.opacity = "0";
	}
}

//При нажатие на submit LOG IN
let formLogIn = document.querySelector(".form-login");
let inputLogIn = document.querySelectorAll(".form-login div input");
console.log(inputLogIn);

for (var i = 0; i < inputLogIn.length; i++) {
	var inptLog = inputLogIn[i];
	inptLog.addEventListener("blur", function(evt) {
		if(evt.target.validity.valueMissing){
			evt.target.previousElementSibling.innerHTML = "Заполните это поле";
			evt.target.previousElementSibling.style.opacity = "1";
		}
		if (evt.target.validity.patternMismatch) {
			evt.target.previousElementSibling.innerHTML = "Неправильный адресс электронной почты." + "<br>" + "Например: ivanov@mail.ru";
			evt.target.previousElementSibling.style.opacity = "1";
	}
	});
}

formLogIn.addEventListener("submit", function(evt) {
	evt.preventDefault();
});

for (var i = 0; i < inputLogIn.length; i++){
	inputLogIn[i].onclick = function(evt) {
		evt.target.previousElementSibling.style.opacity = "0";
	}
}

