function random_bg_color() {
    let rgb = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)];

    document.getElementById("randomBgColor").style.backgroundColor = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
}
document.getElementById("btn").addEventListener("click", random_bg_color);