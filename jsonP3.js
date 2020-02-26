
//function which converts an object literal into an array of arrays.
var object ={"name":"ISRO","age":35,"role":"scientist"}
console.log("JSON-PROGRAM 3");
function convertListToObject(dat)
{
	var arr=[];
	var fin_arr=[];
	for (i in dat)
	{
		arr.push([i,dat[i]]);
	}
		
	for (i in arr)
	{

		
		console.log(arr[i]);
	}
	console.log(arr);

}
(convertListToObject(object));