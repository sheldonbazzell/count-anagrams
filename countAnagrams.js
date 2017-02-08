function countAnagrams(arr) {
	var ret = {};

	for(var word1 in arr) {
		for(var word2 in arr) {
			// skip iteration of self
			if(word1 == word2) {
				continue;
			} else {
				if(isAnagram(arr[word1], arr[word2])) {
					// they are anagrams
					// is arr[word2] in the ret object?
					if(!ret[arr[word2]]) {
						ret[arr[word2]] = 1;
					} else {
						ret[arr[word2]]++;
					}
				// they are not anagrams, add to ret object
				} else {
					ret[arr[word1]] = 1;
				}
			}
		}
	}
	// remove unnecessary keys in ret object
	for(var key in ret) {
		for(var key2 in ret) {
			if(key == key2) {
				continue;
			} else {
				if(isAnagram(key, key2)) {
					if(ret[key] > ret[key2]) {
						delete ret[key2]
					} else {
						delete ret[key]
					}
				}
			}
		}
	}
	return ret;
}

function isAnagram(word1, word2) {
	var check = {};
	// dont start logic unless this condition passes
	if(word1.length == word2.length &&
		typeof word1 == 'string' &&
		typeof word2 == 'string') {

		// iterating word1: store the letters from word1 as keys in 'check'
		// store the count of each letter value for respective key
		for(var ltr1 in word1) {
			if(word1[ltr1] in check) {
				check[word1[ltr1]]++;
			} else {
				check[word1[ltr1]] = 1;
			}
		}
		// iterating word2: decrement the value on the iteration of word2
		for(var ltr2 in word2) {
			if(word2[ltr2] in check) {
				check[word1[ltr2]]--;
			} else {
				check[word1[ltr2]] = 1;
			}
		}
		// does each key in check now have a value of 0?
		for(var key in check) {
			if(check[key] !== 0) {
				return false;
			}
		}
		return true
	}
	return false;
}

var test = ['dog', 'ract', 'god', 'cat', 'cram', 'marc', 'arcm', 'act', 'tac', 'cart', 'track', 'trac', 'ogd']
console.log(countAnagrams(test));
