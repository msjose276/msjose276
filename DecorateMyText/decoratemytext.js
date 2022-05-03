
function decorationTimer(){
    setInterval(decoration,500);
}


function decoration(){

    //document.getElementById("textArea").style.fontSize = "24pt";
    var textArea = document.getElementById("textArea");
    var style = window.getComputedStyle(textArea, null).getPropertyValue('font-size');
    var fontSize = parseInt(style);
    var newSize = (fontSize+2).toString();

    document.getElementById("textArea").style.fontSize = newSize+"pt";
}

function Check(value){

    if (document.getElementById('bling').checked) {
        document.getElementById("textArea").style.fontWeight = "bold";
        document.getElementById("textArea").style.color = "green";
        document.getElementById("textArea").style.textDecoration = "underline";
        document.body.style.backgroundColor = "orange";

    } else {
        document.getElementById("textArea").style.fontWeight = "normal";
        document.getElementById("textArea").style.color = "black";
        document.getElementById("textArea").style.textDecoration = "none";
        document.body.style.backgroundColor = "white";
    }

}


function Malkovitch(){
    var text = document.getElementById("textArea").value;
    const myArray = text.split(" ");

    var count = 0;
    var newText = "";
    for (const ele of myArray) {
        if(ele.length>=5)
            newText = newText + "Malkovitch ";
        else 
            newText = newText + ele +" ";
        count++;
    }
    document.getElementById("textArea").value = newText;
}