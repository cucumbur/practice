/* Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additionla characters, and that you are given the "true" length of the string. */

function urlify(str) {

	//Regex way
	 //var output = str.replace(/\s+/g, "%20");


	// Stupid way
	var isSpace = false;
	var output = "";
	for (var i = 0; i < str.length; i++) {
		var char = str.charAt(i);
		if (char === " " && !isSpace) {
			isSpace = true;
			output += "%20";
		} else if (char !== " ") {
			isSpace = false;
			output += char;
		}
	}

	// Remove unnecessary end whitespace
	if (output.slice(-3) === "%20") {
		output = output.slice(0, -3);
	}
	return output;

}

console.log(urlify("Mr John Smith    "));
console.log(urlify("Mr John Smith"));
console.log(urlify("  Mr John Smith"));
