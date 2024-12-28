var x=function(){
    console.log("Hello, I am anonymous function.");
}
function helloWorld(){
    console.log("Hello World");
}
function download(fn){
    console.log("Downloading...");
    fn();
}
// download(helloWorld);
download(function(){
    console.log("Hi");
})