var button = document.querySelector(".button-popup");

var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-close");

var form = popup.querySelector("form");
var forename = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=e-mail]");
var text = popup.querySelector("textarea");

var isStorageSupport = true;
var storage = {
  forename: "",
  email: ""
};

try {
  storage.forename = localStorage.getItem("forename");
  storage.email = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-feedback-show");
  if (storage.forename) {
    forename.value = storage.forename;
    if (storage.email) {
      email.value = storage.email;
      text.focus();
    }
  } else {
    email.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-feedback-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!forename.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    if (forename.value.length == 0) {
      forename.classList.add("error");
    } else if (email.value.length == 0) {
      email.classList.add("error");
    }
  } else if (isStorageSupport) {
    localStorage.setItem("forename", forename.value);
    localStorage.setItem("email", email.value);
  }
});

forename.addEventListener("input", function(evt) {
  if (forename.value.length > 0) {
    forename.classList.remove("error");
  }
});

email.addEventListener("input", function(evt) {
  if (email.value.length > 0) {
    email.classList.remove("error");
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
