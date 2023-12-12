function calculate() { 
    let value1 = document.querySelector("#burbulis").value;
    let value2 = document.querySelector("#burbulis1").value;

    
    
    
    
    
let score = Math.floor(Math.random() * 101) + "%";


if(value1 == "" || value2 == "" ) {
alert("Paskaties vai esi ielicis personas tu dauni!!!!!!!!!! ")
} else {
    document.querySelector("#score-text").style.visibility = "visible"; 
    document.querySelector("#score-text").innerText = score; 
}





}

