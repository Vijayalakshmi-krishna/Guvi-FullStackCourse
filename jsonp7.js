//Write an “assertObjectsEqual” function from scratch.
console.log("JSON-PROGRAM 7 ");
testname="detects that two objects are equal"
function assertObjectsEqual(act, exp) {
	console.log(JSON.stringify(act));
	if (Object.keys(act).length == Object.keys(exp).length) {
		for (i in act) {

			if (act[i] == exp[i]) {
				console.log("Passed")
			} else {
				console.log("FAILED [" + testname +"] Expected" + JSON.stringify(exp) + ",But Got " + JSON.stringify(act));
			}
		}
	}
	else
	{
		console.log("FAILED ["  + testname + "] Expected" + JSON.stringify(exp) + ",But Got " + JSON.stringify(act));
	}



}
var expected = {
	foo: 5,
	bar: 6
};
var actual = {
	foo: 5,
	bar: 6
};
assertObjectsEqual(actual, expected);
var expected = {
	foo: 6,
	bar: 5
};
var actual = {
	foo: 5,
	bar: 6
};
assertObjectsEqual(actual, expected,testname);