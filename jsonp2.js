//function which returns an newArray of all the input object’s keys.
var per_det={"name":"Rajanikanth",age:33,haspets:false}
console.log("JSON-PROGRAM 2");
function PrintAllKeys(dat)
{
 var arr=[];
 for (i in per_det)
	{
		var key=i;
		arr.push(key);
	}
	return arr;
}

console.log(PrintAllKeys(per_det));