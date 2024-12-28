var student1={id:1,name:"Su Su",greet:function () {
    console.log("Hello");
},
Hobbies:["Reading","Swimming"]
    
}

var student2=student1;
student2.name="John";

console.log(student1.id);
console.log(student1.name);
student1.greet();
console.log(student1.Hobbies[0]);
