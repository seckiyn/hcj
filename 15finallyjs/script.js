let counter = ""
for (let i = 0; i < 100; i++){
    // console.log(i)
    counter += "<br>Hello JavaScript!"
}

const a = document.getElementById("pngbutton")
const button = document.getElementById("turn")
button.onclick = "alert(1)"

let image_links = ["../img/button_on.png", "../img/button_off.png"]
let flag = 0
const toggle_image_of_a = () => {
    a.src = image_links.at(flag)
    flag = (flag + 1 )% 2
    // console.log(flag)
    // console.log(a)
}


a.addEventListener("click", toggle_image_of_a)
console.log(button)
console.log(a)
