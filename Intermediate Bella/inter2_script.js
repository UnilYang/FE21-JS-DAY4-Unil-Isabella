function changeBg() {
    let one = Math.round(Math.random() * 256);
    let two = Math.round(Math.random() * 256);
    let three = Math.round(Math.random() * 256);

    document.getElementById("container").style.backgroundColor = `rgb(${one}, ${two}, ${three})`;
}

document.getElementById("btn").addEventListener("click", changeBg);