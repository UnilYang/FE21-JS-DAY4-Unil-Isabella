//Basic 1 + 2
function printName() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;
    let job = document.getElementById("select").value;

    document.getElementById("result").innerHTML = `My name is <span id="color">${fname}</span> ${lname}. I am ${age} years old and I work in ${job}.`;

    if (fname.length > 4) {
        document.getElementById("color").style.color = "green";
    } else {
        document.getElementById("color").style.color = "red";
    }

    if (job == "IT") {
        document.getElementById("result").style.backgroundColor = "purple";
    } else if (job == "Hospitality") {
        document.getElementById("result").style.backgroundColor = "yellow";
    } else if (job == "Finance") {
        document.getElementById("result").style.backgroundColor = "blue";
    } else {
        document.getElementById("result").style.backgroundColor = "orange";
    }
}
document.getElementById("btn").addEventListener("click", printName);