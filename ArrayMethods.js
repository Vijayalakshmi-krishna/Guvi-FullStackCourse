//Program to use array methods
//Update for additional array functions

var request = new XMLHttpRequest()
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)
request.onload = function() {
	var jsondata = JSON.parse(this.response)
	//function to filter the json data where capital<=5
	function arr_filter() {
		const filteredItems = jsondata.filter((item) => {

			var len = item.capital.length;
			if (len <= 5) {
				return item.capital;
			}
		})	
		console.log(filteredItems);
	}
	arr_filter();
	//fuction to map the name of the country with captalize()
	function name_cap() {
		const cname_cap = jsondata.map((item) => {
			var name_str = item.name;
			return name_str.charAt(0).toUpperCase() + name_str.slice(1);
		})
		console.log(cname_cap);


	}
	name_cap();
	//function to find the country India in the json data
	function find_india() {
		const foundIndia = jsondata.find((item) => {
			return (item.name.toLowerCase() === "india")
		})
		console.log(foundIndia);
	}
	find_india();
	//function to use reduce method to find sum of the items in an array
	function reduce_sum_meth()
	{
		const arr=[1,2,3,4,5,6,7,8,9,10];
		const total=arr.reduce((curr_tot,item)=>{
			return item+curr_tot
		},0)
		console.log(total);
	}
	reduce_sum_meth();
	//functio to find the sum of odd elements in the array
	function reduce_oddsum_meth()
	{

		const arr=[1,2,3,4,5,6,7,8,9,10];
		const total=arr.reduce((odd_num,item)=>{
			if (item % 2 == 0)
			{
				item = 0
			}
			return item+odd_num;

		},0)
		console.log(total);
	}
	reduce_oddsum_meth();

	//use splice and slice method in array
	function arr_splice(){
		const arr=[2,4,6,7,12];
		arr.splice(3,1,8,10);
		console.log(arr);
	}
	arr_splice();
	function arr_slice(){
		const str_arr=["apple","banana","grapes","orange","kiwi"];
		const sli_arr=str_arr.slice(1,3);
		console.log(sli_arr)
	}
	arr_slice();
}
request.send();