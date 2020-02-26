//function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
//1) the first element of the array as the object’s key, and
//2) the last element of the array as that key’s value.

var array=["GUVI","I","am","geek"];
console.log("JSON-PROGRAM 4");
function transformFirstAndLast(arr)
{
var obj={};
len_array=array.length-1;
obj[arr[0]]=arr[len_array];
console.log(obj);
}

transformFirstAndLast(array);

