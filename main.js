const btn = document.getElementById("btn")
const array = ["+5kb","+10kb","-10kb","-5kb"]

btn.addEventListener("click", ()=>{
    let rndNum = Math.floor(Math.random()*array.length)
    btn.innerText = array[rndNum]
    route.classList.add("animation_style")
    setTimeout(() => {
        route.classList.remove("animation_style")
    }, 4000);
})