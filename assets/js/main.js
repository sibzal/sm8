let button = document.querySelector('.button')
button.addEventListener('mousedown', ()=>{
    button.style.background = 'red'
    button.style.border = 'none'
    button.style.padding = '10px 30px'
    button.style.color = '#fefefe'
    button.style.fontSize = '18px'
    button.style.borderRadius = '10px'
})

let button2 = document.querySelector('.button2')
button2.addEventListener('mouseup', ()=>{
    button2.style.background = 'none'
    button2.style.border = '1px solid blue'
    button2.style.padding = '5px 15px'
    button2.style.color = '#323232'
    button2.style.fontSize = '10px'
})

let button3 = document.querySelector('.button3')
button3.addEventListener('mouseover', ()=>{
    button3.style.background = '#323232'
    button3.style.border = 'none'
    button3.style.padding = '5px 15px'
    button3.style.color = '#fefefe'
    button3.style.fontSize = '25px'
    button3.style.borderRadius = '50px'
})

let button4 = document.querySelector('.button4')
button4.addEventListener('mouseout', ()=>{
    button4.style.background = 'blue'
    button4.style.border = 'none'
    button4.style.padding = '5px 15px'
    button4.style.color = '#fefefe'
    button4.style.fontSize = '14px'
    button4.style.borderRadius = '15px'
})
let button5 = document.querySelector('.button5')
button5.addEventListener('mousemove', ()=>{
    function generateColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16)
    }
    $color = generateColor()
    button5.style.background = $color
    button5.style.border = 'none'
    button5.style.padding = '10px 30px'
    button5.style.color = '#fefefe'
    button5.style.fontSize = '18px'
})

let button6 = document.querySelector('.button6')
button6.addEventListener('dblclick', ()=>{
    button6.style.background = 'yellow'
    button6.style.border = 'none'
    button6.style.padding = '10px 30px'
    button6.style.color = '#323232'
    button6.style.fontSize = '12px'
    button6.style.borderRadius = '20px'
})

let button7 = document.querySelector('.button7')
button7.addEventListener('contextmenu', ()=>{
    button7.style.background = 'brown'
    button7.style.border = 'none'
    button7.style.padding = '10px 30px'
    button7.style.color = '#fefefe'
    button7.style.fontSize = '14px'
})
