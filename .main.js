const btn = document.getElementById("btn")
const array = ["Da","Daaa","Net","No"]

btn.addEventListener("click", ()=>{
    let rndNum = Matc.floor(Math.random()*array.length)
    btn.innerText = array[rndNum]
})