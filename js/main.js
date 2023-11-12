const $ = document;

const allImagesSelector = $.querySelectorAll(`img`);

allImagesSelector.forEach((img) => {
  img.setAttribute(`loading`, `lazy`);
});

const emailInputSelector = $.querySelector(`#email-input`);
const emailSubmitSelector = $.querySelector(`#email-submit`);
const emailMessageSelector = $.querySelector(`#email-message`);
let userEmail = null;
const emailCheckerRegex = /^[a-z]+((\d*)|(_)|(_\d*))?[a-z]*@.{2,6}\..{2,4}$/i;

emailSubmitSelector.addEventListener(`click`, (e) => {
  e.preventDefault();

  userEmail = emailInputSelector.value.trim();

  if (userEmail.match(emailCheckerRegex)) {
    emailMessageSelector.classList.add(`ds-bl`);
    emailMessageSelector.style.color = `#4ba87d`;
    emailMessageSelector.innerHTML = `Thanks! Email received.`;

    setTimeout(() => {
      emailMessageSelector.classList.remove(`ds-bl`);
    }, 4000);
  } else {
    emailMessageSelector.classList.add(`ds-bl`);
    emailMessageSelector.style.color = `red`;
    emailMessageSelector.innerHTML = `Enter your email correctly`;

    setTimeout(() => {
      emailMessageSelector.classList.remove(`ds-bl`);
    }, 4000);
  }
});
