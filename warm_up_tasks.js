//Warm up tasks
//program to find even or odd
console.log("PROGRAM 1");
var iseven=((num)=>{
    if(num%2==0){
        return "true";
    }
    else{
        return "false";
    }
});
console.log(iseven(11));

console.log("PROGRAM 2");
//check whether both the numbers are odd
var areBothOdd=function (a,b){
    if ((a%2!=0) && (b%2!=0))
    {
        return ("true");
    }
    else
    {
       return ("false");
    }

}
console.log(areBothOdd(1,3));

//string concatenation
console.log("PROGRAM 3");
function getFullName(str1,str2){
    console.log(str1 +" " +str2);
    
}
getFullName("GUVI","GEEK");

//to find the length of the string
console.log("PROGRAM 4");
function getLengthOfWord(str){
    console.log(str.length);
}
getLengthOfWord("GUVI");

//compare the length of two string 
console.log("PROGRAM 5");
function isSameLength(str1,str2)
{
    if(str1.length == str2.length){
        console.log("true");
    }
}
isSameLength("GUVI","GEEK");

//program to find the nth element in an array
console.log("PROGRAM 6");
function getNthElement(arr,ind)
{
    if(arr.length == 0){
        console.log("Undefined");
    }
    else{
        console.log(arr[ind]);
    }
    
}
getNthElement([1,3,5],1);

//program to get the last element in an array
console.log("PROGRAM 7");
function getLastElement(arr){
    if (arr.length==0){
        console.log("Undefined");
    }
    else{
        console.log(arr[arr.length-1]);
    }
}
getLastElement([1,2,3,4]);
//get the value of a given key
console.log("PROGRAM 8");

var obj={"name":"sangeetha"}
function getProperty(obj,key){
    return obj[key];
}
console.log(getProperty(obj,"name"));

var myObj={};

//add a property to an object
console.log("PROGRAM 9");
function addProperty(myObj,key){
    myObj[key]=true;
}
console.log(addProperty(myObj,'status'));
//remove a property from an object
console.log("PROGRAM 11");
var myobj={"name":"sangeetha","id":1};
function removeproperty(myobj,key){
      delete myobj[key];
      return myobj;

}
console.log(removeproperty(myobj,'name'));


