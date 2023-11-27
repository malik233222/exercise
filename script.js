

function funksiyam() {
    let userEmail = prompt("Enter the mail address:");
    let userPassword = prompt("Enter the password pls: ");

    let email = "admin@gmail.com";
    let password = "12345";

    if (email == userEmail && password == userPassword) {
        alert("Welcome")

    }
    else {
        alert("invalid password or mail address[")
    }
}