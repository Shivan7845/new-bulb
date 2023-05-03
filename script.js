let btn = document.getElementById('toggleBtn')
let bulb = document.getElementById('bulb')

btn.addEventListener ('click',toggleBulb)
function toggleBulb(){
    if(btn.textContent.includes('on')){
        bulb.src = "bulb_on.jpg"
        btn.textContent = "Turn off"
    }
    else{
        bulb.src = "bulb_off.jpg"
        btn.textContent = "Turn on"
    }
}