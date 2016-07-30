// Given two strings, write a method to decide if one is a permutation of the other

function isPermutation(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}

	function letterFrequency(str) {
		var letterTable = {};
		for (var i=0; i<str1.length; i++) {
			var char = str.charAt(i);
			letterTable[char] = letterTable[char] ? letterTable[char] + 1 : 1;
		}
		return letterTable;
	}

	str1freq = letterFrequency(str1);
	str2freq = letterFrequency(str2);

	// If lodash was being used:
	//return _.isEqual(str1freq, str2freq);

	for (var char in str1freq) {
		if (str1freq[char] !== str2freq[char]) {
			return false;
		}
	}

	return true;

}

console.log(isPermutation("hello", "olleh"));
console.log(isPermutation("hello", "zello"));
console.log(isPermutation("oooO", "oooo"));
