var input=document.getElementById("myInput");
var p=document.getElementById("showText");
input.addEventListener("keyup",function(e){
   p.innerText=this.value;
    if(e.which == 13){
       this.value="";
    }

});