//function which returns an newArray of all the input object’s values.

var per_det={"name":"Rajanikanth",age:33,haspets:false};
console.log("JSON-PROGRAM 1");
function PrintAllValues(dat)
{
	var ret_arr=[];
	for (i in per_det)
	{
		ret_arr.push(per_det[i])	
	}
	return (ret_arr);
		

}
console.log(PrintAllValues(per_det));