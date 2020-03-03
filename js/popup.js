var button = document.querySelector(".button-popup");

var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-close");

var form = popup.querySelector("form");
var forename = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=e-mail]");
var text = popup.querySelector("textarea");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("forename");
} catch (err) {
  isStorageSupport = false;
}

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-feedback-show");

  if (storage) {
    forname.value = storage;
    email.focus();
  } else {
    forename.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-feedback-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!forename.value || !email.value || !text.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-feedback-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-feedback-show");
      popup.classList.remove("modal-error");
    }
  }
});
