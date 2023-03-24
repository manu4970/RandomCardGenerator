const corazon = `<svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="red" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
<path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
</svg>`

const diamante = `<svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="red" class="bi bi-suit-diamond-fill" viewBox="0 0 16 16">
<path d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z"/>
</svg>`

const pica = `<svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="black" class="bi bi-suit-spade-fill" viewBox="0 0 16 16">
<path d="M7.184 11.246A3.5 3.5 0 0 1 1 9c0-1.602 1.14-2.633 2.66-4.008C4.986 3.792 6.602 2.33 8 0c1.398 2.33 3.014 3.792 4.34 4.992C13.86 6.367 15 7.398 15 9a3.5 3.5 0 0 1-6.184 2.246 19.92 19.92 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a19.919 19.919 0 0 0 1.582-2.907z"/>
</svg>`

const trebol = `<svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="black" class="bi bi-suit-club-fill" viewBox="0 0 16 16">
<path d="M11.5 12.5a3.493 3.493 0 0 1-2.684-1.254 19.92 19.92 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a19.919 19.919 0 0 0 1.582-2.907 3.5 3.5 0 1 1-2.538-5.743 3.5 3.5 0 1 1 6.708 0A3.5 3.5 0 1 1 11.5 12.5z"/>
</svg>`


const number = document.getElementById("number")
const pintaTop = document.querySelector(".pintaTop")
const pintaBot = document.querySelector(".pintaBot")
const pintaRandom = randomPin()
const btn = document.getElementById("btn")


number.textContent = randomNum()
pintaTop.innerHTML = setPinta("top")
pintaBot.innerHTML = setPinta("bot")
pintaBot.style.rotate = "180deg"

function randomPin(){
    let ranPin = Math.floor(Math.random()*4)+1
    if (ranPin === 1) ranPin = corazon
    if (ranPin === 2) ranPin = diamante
    if (ranPin === 3) ranPin = pica
    if (ranPin === 4) ranPin = trebol
    return ranPin
}

function randomNum(){
    let ranNum = Math.floor(Math.random()*13)+1
    if (ranNum === 1) ranNum ="A"
    if (ranNum === 11) ranNum ="J" 
    if (ranNum === 12) ranNum ="Q" 
    if (ranNum === 13) ranNum ="K" 
    return ranNum
}

function setPinta(position){
    let h3Top = `<h3 class="pintaTop">${pintaRandom}</h3>`
    let h3Bot = `<h3 class="pintaBot">${pintaRandom} </h3>`
    if (position === "top"){
        return h3Top
    }
    if (position === "bot"){
        return h3Bot
    }
}


btn.addEventListener("click", function(){
    number.textContent = randomNum()
    let generateSamepinta = randomPin()
    pintaTop.innerHTML = generateSamepinta
    pintaBot.innerHTML = generateSamepinta
    pintaBot.style.rotate = "180deg"
    console.log(pintaBot.innerHTML)
})







