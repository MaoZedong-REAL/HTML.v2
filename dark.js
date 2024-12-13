
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;


themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme'); 

    if (body.classList.contains('dark-theme')) {
        themeToggleButton.textContent = 'Light';
    } else {
        themeToggleButton.textContent = 'Dark';
    }
});

document.getElementById("submitButton").addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value.trim();
    let isValid = true;

    // Reset error messages
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("addressError").textContent = "";

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Neteisingas el. pašto adresas.";
        isValid = false;
    }

    // Validate phone
    const phonePattern = /^\+?\d{8,15}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent = "Neteisingas telefono numeris.";
        isValid = false;
    }

    // Validate address
    if (address.length < 5) {
        document.getElementById("addressError").textContent = "Adresas turi būti ne trumpesnis kaip 5 simboliai.";
        isValid = false;
    }

    if (!isValid) {
        alert("Prašome ištaisyti klaidas.");
        return;
    }

    const formData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: email,
        phone: phone,
        address: address,
        question1: parseInt(document.getElementById("question1").value),
        question2: parseInt(document.getElementById("question2").value),
        question3: parseInt(document.getElementById("question3").value),
        question4: parseInt(document.getElementById("question4").value),
        question5: parseInt(document.getElementById("question5").value),
    };

    console.log(formData);

    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        <p>Vardas: ${formData.firstName}</p>
        <p>Pavardė: ${formData.lastName}</p>
        <p>El. paštas: ${formData.email}</p>
        <p>Telefonas: ${formData.phone}</p>
        <p>Adresas: ${formData.address}</p>
        <p>Klausimas 1: ${formData.question1}</p>
        <p>Klausimas 2: ${formData.question2}</p>
        <p>Klausimas 3: ${formData.question3}</p>
        <p>Klausimas 4: ${formData.question4}</p>
        <p>Klausimas 5: ${formData.question5}</p>
    `;

    const average =
        (formData.question1 +
            formData.question2 +
            formData.question3 +
            formData.question4 +
            formData.question5) / 5;

    let averageClass = "";
    if (average < 4) {
        averageClass = "red";
    } else if (average <= 7) {
        averageClass = "orange";
    } else {
        averageClass = "green";
    }

    outputDiv.innerHTML += `
        <p class="average ${averageClass}">
            Vidutinis įvertinimas: ${average.toFixed(2)}
        </p>
    `;
});