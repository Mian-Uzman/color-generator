const redValue = document.getElementById('red-range')
const greenValue = document.getElementById('green-range')
const blueValue = document.getElementById('blue-range')
const colorContainer = document.getElementById("color-container")


const changeColor = () => {
    colorContainer.innerHTML = `<h4 style="text-align: center; margin: 6rem 0; color:#b6b6b6;"> rgb(${redValue.value}, ${greenValue.value}, ${blueValue.value}) </h4>`
    colorContainer.style.backgroundColor = `rgb(${redValue.value},${greenValue.value},${blueValue.value})`
}