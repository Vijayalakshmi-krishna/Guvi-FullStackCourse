//Program to find array count of each item in an array and return to an object using reduce method
//Summary Lists-program 6 
console.log("SUMMARY LISTS-PROGRAM 6");
var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
function count_words(inputWords){

	const fruit_obj=inputWords.reduce((obj,item)=>{

		if((typeof(obj[item]))!="undefined"){
			obj[item]++;
			return obj;
		}
		else
		{
			obj[item]=1;
			return obj;
		}
		
		},{});
		return fruit_obj;

}

console.log(count_words(inputWords));

//use map function to double numbers
//Summary Lists-program 7
console.log("SUMMARY LISTS-PROGRAM 7");
var inp_arr=[10,12,14,16,18];
var op_arr=inp_arr.map((item)=>{

	return item*2;
});

console.log(op_arr);


