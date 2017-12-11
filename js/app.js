var canvasBody = document.querySelector(".canvas")
var paletteBody = document.querySelector(".palette")
var paletteColor = document.querySelector(".palette").childNodes
var colorsArray = ["black", "pink", "brown"]
let brush


function createCanvas(){
  for (var i = 0; i < 99; i++){
    var canvasBlock = document.createElement("div")
    canvasBody.appendChild(canvasBlock)
    canvasBlock.id = "canvasBlock"
    canvasBlock.style.background = "white"
    canvasBlock.style.border = "1px solid black"
    canvasBlock.style.width = "5vh"
    canvasBlock.style.height = "5vh"
    canvasBlock.addEventListener("click", colorBlock)
  }
}
createCanvas()

function createPalette() {
  for (var i = 0; i < colorsArray.length; i++) {
    var paletteColor = document.createElement("div")
    paletteColor.id = "color" + i
    paletteColor.classList.add("paletteColor")
    paletteBody.appendChild(paletteColor)
    paletteColor.style.background = colorsArray[i]
    paletteColor.addEventListener("click", colorBrush)
  }
}
createPalette(paletteColor)

function colorBrush(event) {
  brush = event.target.style.background
}

function colorBlock(event){
  event.target.style.background = brush
}
