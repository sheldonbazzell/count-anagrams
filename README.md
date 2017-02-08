<h1>Count Anagrams</h1>
<p>This was an algorithm given to me during an interview. The algorithm takes an array of strings as an input. The algorithm iterates the array to find anagrams. When an anagram is found, one of the two strings that make us this anagram are added to the object as a key. The value for this key is a count of the number of anagrams associated to this string.</p>
<p>Example input: <br> ["dog", "cart" "ogd", "cat", "act", "god", "trac", "arct"]</p>
<p>Given this input, this algorithm would return the following: <br> { 'dog': 3, 'cart': 3, 'cat':2 }</p>