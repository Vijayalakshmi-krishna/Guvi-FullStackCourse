import { Cat } from "./cat";
import { Dog } from "./dog";

let myCat=new Cat({age:7,name:"cat1"});
let mydog=new Dog({age:5,name:"dog1"});

myCat.makeSound("meow-meow");
mydog.makeSound("bow-bow")