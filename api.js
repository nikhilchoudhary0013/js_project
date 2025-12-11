function myfun(){

const ap = document.getElementById("id1");

 if(!ap.checkValidity()){

    document.getElementById("id2").innerHTML = ap.validationMessage ;
 } 
 else{

    document.getElementById("id2").innerHTML = "input OK";
 }


} 
