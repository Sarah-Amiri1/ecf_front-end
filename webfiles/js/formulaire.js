const form = document.querySelector("form");
const lastnameField = document.querySelector("input[name='lastname']");
const firstnameField = document.querySelector("input[name='firstname']");
const emailField = document.querySelector("input[name='mail']");
const objectField = document.querySelector("input[name='object']");
const messageField = document.querySelector("textarea[name='message']");
const agreementCheckbox = document.querySelector("input[name='agreement']");
const submitButton = document.querySelector("button[type='submit']");

function validateText(field, min, max) {
    const value = field.value.trim();
    return value.length >= min && value.length <= max && /^[a-zA-ZÀ-ÿ\s-]+$/.test(value);
}

function validateEmail(field) {
    const value = field.value.trim();
    return /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(value);
}

function setFieldState(field, isValid) {
    field.style.border = isValid ? "" : "2px solid red";
}

function validateForm() {
    let valid = true;

    const lastnameValid = validateText(lastnameField, 2, 50);
    setFieldState(lastnameField, lastnameValid);
    if (!lastnameValid) valid = false;

    const firstnameValid = validateText(firstnameField, 2, 50);
    setFieldState(firstnameField, firstnameValid);
    if (!firstnameValid) valid = false;

    const emailValid = validateEmail(emailField);
    setFieldState(emailField, emailValid);
    if (!emailValid) valid = false;

    const objectValid = validateText(objectField, 3, 250);
    setFieldState(objectField, objectValid);
    if (!objectValid) valid = false;

    const messageValid = validateText(messageField, 3, 250);
    setFieldState(messageField, messageValid);
    if (!messageValid) valid = false;

    if (!agreementCheckbox.checked) {
        alert("Vous devez accepter les mentions légales.");
        valid = false;
    }

    return valid;
}

form.addEventListener("submit", function (e) {
    if (!validateForm()) {
        e.preventDefault();
        alert("Veuillez corriger les erreurs avant de soumettre le formulaire.");
    } else {
        alert("Formulaire envoyé avec succès !");
        form.reset();
        [lastnameField, firstnameField, emailField, objectField, messageField].forEach(field => field.style.border = "");
    }
});
