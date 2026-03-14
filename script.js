async function generateMeme(){

let response = await fetch("https://api.imgflip.com/get_memes")

let data = await response.json()

let memes = data.data.memes

let randomMeme = memes[Math.floor(Math.random() * memes.length)]

document.getElementById("memeImage").src = randomMeme.url

let topText = document.getElementById("topText").value
let bottomText = document.getElementById("bottomText").value

document.getElementById("topCaption").innerText = topText
document.getElementById("bottomCaption").innerText = bottomText

}