var r = document.querySelector(':root');
var dis = document.getElementById("colorDis");
color1 = document.getElementById('col1').value;
color2 = document.getElementById('col2').value;
color3 = document.getElementById('col3').value;


function grad(){
    angle_input = document.getElementById('angle').value;
    dis.style.backgroundImage =  "linear-gradient(" + angle + "deg"+ "," + color1 + "," + color2 + "," + color3 + ")";
    dis.style.borderColor = color1;
    console.log(dis.style.background);

}