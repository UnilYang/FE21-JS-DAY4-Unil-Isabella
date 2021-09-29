function removeSanta() {
    this.style.opacity = "0";
    this.style.transition = "1s";
    setTimeout(() => { this.remove(); }, 1000);

}


function addRemoveSanta() {
    var items = document.getElementsByClassName('santa');
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("click", removeSanta);

    }
}

addRemoveSanta()

// var items = document.getElementsByClassName('santa');
// console.log(items)