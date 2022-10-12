//step 1: grab html element
const plusBtn = document.querySelector("#plus-btn")
const minusBtn = document.querySelector("#minus-btn")
const counterText = document.querySelector("#counter")
const resetBtn = document.querySelector("#reset-btn")


//step 2: write our function
let count = 0

function increase(){
    count++
    counterText.textContent = count
    console.log(count)
}


function decrease(){
    count--
    counterText.textContent = count
    console.log(count)
}

function reset(){
    count = 0
    counterText.textContent = count
}




//step 3: combine step 1 and 2 using addEventListener
plusBtn.addEventListener('click', increase)
minusBtn.addEventListener('click', decrease)
resetBtn.addEventListener('click', reset)



//------Theme

//Step 1 grab all buttons using query selector all
const themeBtn = document.querySelectorAll(".theme-buttons")





//step 2 write function
function selectTheme (event){
    console.log(event.target)
    const theme = event.target.textContent
    document.querySelector('body').className = theme
    document.querySelector('main').className = theme
    
    const buttons = document.querySelectorAll('button')

    for (let i = 0; i<buttons.length; i++){
        buttons[i].className = theme
    }
}



//step 3 combine step 1 and 2 add event listeners
for(let i = 0; i < themeBtn.length; i++){
    themeBtn[i].addEventListener('click', selectTheme)
}