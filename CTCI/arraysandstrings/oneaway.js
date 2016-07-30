// There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

function oneAway(str1, str2) {
	// Handle trivial (0-edit) case
	if (str1 === str2) {
		return true;
	}

	// Determine the shorter string (so that deletions + inserts are considered the same)
	var lStr = str1;
	var sStr =  str2;
	if (str1.length < str2.length) {
		sStr = str1;
		lStr = str2;
	}

	var editFound = false;
	var j = 0;
	for (var i = 0; i < sStr.length; i++) {
		if (sStr.charAt(i) != lStr.charAt(j)) {
			// Check to see if this makes a SECOND edit
			if (editFound) {
				return false;
			}
			editFound = true;
			if (sStr.length !== lStr.length) {
				j++;
			}
		}
		j++;
	}
	return true;
}

console.log(oneAway("pale", "ple"));
console.log(oneAway("pale", "pales"));
console.log(oneAway("pale", "bale"));
console.log(oneAway("pale", "bake"));
console.log(oneAway("pale", "palk"));
