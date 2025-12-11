function hello(){
    let text;
    if(document.getElementById("a2").validity.rangeOverflow){
        text = "value too large";
    }else{
        text = "input ok";
    }
    document.getElementById("a1").innerHTML = text;
}