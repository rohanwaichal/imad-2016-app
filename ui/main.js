console.log('Loaded!');

//change the content of main-text
var element = document.getElementById('main-text');
element.innerHTML = "New Value";

//move the image
var img = document.getElementById('madi');
img.onclick = function (){
    img.style.marginleft = '100px';
};