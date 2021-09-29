function printPerson() {
    let firstName = document.getElementById("first").value;
    let lastName = document.getElementById("last").value;
    let agePerson = Number(document.getElementById(
        "age").value);
    let job = document.getElementById("job").value;

    if (firstName.length > 4) {
        document.getElementById("results").style.color = "green";
    } else {
        document.getElementById("results").style.color = "red";
    }
    if (job == "Web Developer") {
        document.getElementById("results").style.background = "purple";
    } else if (job == "Nurse") {
        document.getElementById("results").style.background = "yellow";
    } else {
        document.getElementById("results").style.background = "pink";
    }

    document.getElementById("result1").innerHTML = `Firstname: ${firstName}`;
    document.getElementById("result2").innerHTML = `Lastname: ${lastName}`;
    document.getElementById("result3").innerHTML = `Age: ${agePerson}`;
    document.getElementById("result4").innerHTML = `Job: ${job}`;
}

document.getElementById("btn").addEventListener("click", printPerson);