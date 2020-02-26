
//function which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
var array=[["make","ford"],["model","mustang"],["year",1964]];
console.log("JSON-PROGRAM 5");
function fromListToObject(arr)
{
	var obj={};
	for (i in arr)
	{
		var k=arr[i];
		var key=k[0];
		var val=k[1];	
		obj[key]=val;
	}
		return obj;
}

console.log(fromListToObject(array));