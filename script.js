var r = document.querySelector(':root');
var dis = document.getElementById("colorDis");



function grad(){
    color1 = document.getElementById('col1').value;
    color2 = document.getElementById('col2').value;
    color3 = document.getElementById('col3').value;
    angle_input = document.getElementById('angle').value;
    dis.style.background =  "linear-gradient("
     + angle_input
     + "deg, " 
     + color1 
     + "," 
     + color2 
     + "," 
     + color3 
     + ")";
    dis.style.borderColor = color1;
    console.log(dis.style.background);
}

//copy color hex code to clipboard
function cotoclip(color_code){
    navigator.clipboard.writeText(color_code);
    alert('Color copied to clipboard');
}