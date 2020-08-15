var body =  document.getElementsByTagName("body");
var span = document.getElementById("hexvalue");
let x = undefined; 
function onloadColorChange() {
    x = Math.ceil(Math.random() * 10000000);
    x = x.toString(16);
    x = "#" + x;
    body[0].style.backgroundColor = x;
    span.innerHTML = x;
}