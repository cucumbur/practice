// Given a string, write a function to check if it is a permutation of a palindrome. The palindrome does not need to be limited to dictionary words.
// example- Input: "Tact Coa", Output: true (because of "taco cat", "atco cta", etc)
function isPalindromePermutation(strInput) {
	var str = strInput.toLowerCase();


	// Find frequency of alphanumeric characters
	function frequency(strInput) {
		var charFrequencies = {};
		var nonAlphaCount = 0;

		for (var i = 0; i < str.length; i++) {
			var char = str.charAt(i);

			// Only consider alpha characters
			if (/[a-zA-Z]/.test( char )) {
				charFrequencies[char] = charFrequencies[char] ? charFrequencies[char] + 1 : 1;
			} else {
				nonAlphaCount++;
			}
		}

		return {charFrequencies: charFrequencies, nonAlphaCount: nonAlphaCount};
	}

	var strFreq = frequency(str);

	// Find how many characters show up an odd number of times
	var oddCount = 0;
	for (var char in strFreq.charFrequencies) {
		if (strFreq.charFrequencies[char] % 2 !== 0) {
			oddCount++;
		}
	}

	// Case 1: An even number of letters, every letter must be divisible by two
	// Case 2: An odd number of letters, every letter except one must be divisible by two
	var adjustedStringLength = str.length - strFreq.nonAlphaCount;
	if ((adjustedStringLength % 2 === 0) && oddCount === 0) {
		return true;
	} else if ((adjustedStringLength % 2 !== 0) && oddCount === 1) {
		return true;
	}
	return false;

}

console.log(isPalindromePermutation("taco cat"));
console.log(isPalindromePermutation("Tact Coa"));
console.log(isPalindromePermutation("garbage bro"));
console.log(isPalindromePermutation("moomoo"));
