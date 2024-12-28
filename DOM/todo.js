var input=document.querySelector("#todoInput");
var uls=document.querySelector("ul");
input.addEventListener("keypress",function(e){
    if(e.which==13){
        
        // var todo=this.value;
        // uls.innerHTML+="<li>"+todo+"</li>";
        // this.value="";

        var createLi=document.createElement("li");// this is more systematic
        createLi.innerText=this.value;
        uls.appendChild(createLi);
        this.value="";

    
    }
});