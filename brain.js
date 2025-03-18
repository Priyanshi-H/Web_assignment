function checkFare() {
    const ageInput = document.getElementById('age');
    const resultElement = document.getElementById('fareResult');

    let age = ageInput.value.trim();

    if (age === '') {
        resultElement.innerText = "Please enter your age!";
        resultElement.style.color = "red";
        return;
    }

    age = parseInt(age);

    if (isNaN(age) || age < 0) {
        resultElement.innerText = "Please enter a valid age!";
        resultElement.style.color = "red";
        return;
    }

    let result = age <= 19 ? "You can pay the child's fare." : "You must pay the adult fare.";

    resultElement.innerText = result;
    resultElement.style.color = "green";
}


function displayFood() {
    const nameInput = document.getElementById('foodName');
    const cuisineInput = document.getElementById('cuisine');
    const outputElement = document.getElementById('foodOutput');

    const name = nameInput.value.trim();
    const cuisine = cuisineInput.value.trim();

    if (name === '' || cuisine === '') {
        outputElement.value = "Please fill out both fields!";
        outputElement.style.color = "red";
        return;
    }

    outputElement.style.color = "black";
    outputElement.value = `${name} loves ${cuisine}!`;
}
