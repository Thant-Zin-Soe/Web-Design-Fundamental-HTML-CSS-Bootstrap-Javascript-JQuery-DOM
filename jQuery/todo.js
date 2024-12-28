$('input').keypress(function(e){
    if(e.which==13){
    var textValue=$(this).val();
    $("ul").append("<li><span>[Delete]</span>"+textValue+"</li>");
    $(this).val("");
}
})

$("ul").on("click","li",function(){
    $(this).toggleClass("complete");
    e.stopPropogration();
});

$('ul').on("click",'span',function(){
   
//      $(this).parent().remove();

   var p=$(this).parent();
   p.remove();
   e.stopPropogration();
});

