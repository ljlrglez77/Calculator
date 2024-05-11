//Calculator Program

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}
function takeOutToDisplay(){
    let x = display.value;
    let y = "";
    let i = 0;
    if (x != ""){
    while (i<=(x.length-2)){
        y +=x[i];
        i++;
    }
    }
    display.value = y;
}
function clearDisplay(){
    display.value="";
}
function SqrDisplay(){
    let x= display.value;
    display.value*= x;
}

function SRootDisplay(){
    let x= display.value;
    display.value = Math.sqrt(x);
    
}

function calculate(){
    try{ 
        display.value = eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}
    