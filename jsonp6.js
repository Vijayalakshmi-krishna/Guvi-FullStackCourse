
//function that transforms some set of data from one format to another.
var array=[[["firstname","vasanth"],["lastname","raja"],["age",24],["role","jswizard"]],[["firstname","sri"],["lastname","devi"],["age",28],["role","coder"]]];
console.log("JSON-PROGRAM 6");
function transformGeekData(arr)
{
	var obj={};
	
	for (i in arr)
	{
		
		k=arr[i];
		for (j in k)
		{
			obj[k[j][0]]=k[j][1];
		}
		console.log(obj);
		
	}
	
}

transformGeekData(array);