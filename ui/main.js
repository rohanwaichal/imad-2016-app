console.log('Loaded!');

//button counter
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
    
    //rendering the variable in correct span
    counter = counter + 1;
    varspan = document.getElementById("count");
    span.innerHTML = counter.toString();
}