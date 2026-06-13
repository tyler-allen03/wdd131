document.getElementById("currentyear").innerHTML = new Date().getFullYear()
document.getElementById("lastModified").innerHTML = document.lastModified;





const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const inputField = document.getElementById("contactInfo");
const radioButtons = document.querySelectorAll("input[type='radio']");

radioButtons.forEach(radio => {
    radio.addEventListener('change', (event) => {
        if (event.target.checked) {
            inputField.type = event.target.value;
            if (inputField.type === "text") {
                inputField.removeAttribute("required");
            }
            else {
                inputField.setAttribute("required", true);
            }
        }
    });
});

const submitButton = document.getElementById("submitBTN");
let firstName = document.getElementById("fName");
let lastName = document.getElementById("lName");
let prefContact = document.getElementById("contactInfo");
let story = document.getElementById("story");


if (submitButton) {
    submitButton.addEventListener('click', () => {

        let contactInformation =
        {
            fName: firstName.value,
            lName: lastName.value,
            contact: prefContact.value,
            experience: story.value
        }
        localStorage.setItem("completedForm", JSON.stringify(contactInformation));

    });
}

// IF THIS ERRORS IT IS BECAUSE YOU DELETED THE LOCAL STORAGE INFO WHILE STILL ON THE THANK YOU PAGE, GO BACK TO THE FORM AND RESUBMIT THE FORM, WHICH IS THE ONLY WAY TO REACH THE THANK YOU PAGE, AND THAT WILL READD THE LOCAL STORAGE RESOLVING THE ERROR

function getFormInfo() {
    return JSON.parse(localStorage.getItem("completedForm"));
}

let information = getFormInfo();
let firstNameSub = information["fName"];
let lastNameSub = information["lName"];

const element = document.querySelector("#userName");

if (element) {
    let named = document.getElementById("userName").textContent = `${firstNameSub} ${lastNameSub}`;
}