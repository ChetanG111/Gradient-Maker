var r = document.querySelector(':root')

function set_color1(){
    color1 = document.getElementById('col1')
    col1 = color1.value
    console.log(col1)
    r.style.setProperty('--col1', col1)
}