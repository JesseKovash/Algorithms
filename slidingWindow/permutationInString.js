// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false


// Constraints:

// 1 <= s1.length, s2.length <= 104
// s1 and s2 consist of lowercase English letters.

var checkInclusion = function (s1, str) {

  let windowStart = 0;
  let matched = 0;
  let charFreq = {};

  for (let i = 0; i < s1.length; i++) {
    let char = s1[i];
    if (charFreq[char] === undefined) {
      charFreq[char] = 1;
    } else {
      charFreq[char]++;
    }
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd];
    if (rightChar in charFreq) {
      charFreq[rightChar] -= 1;
      if (charFreq[rightChar] === 0) {
        matched += 1;
      }
    }

    if (matched === Object.keys(charFreq).length) {
      return true;
    }

    if (windowEnd >= s1.length - 1) {
      let leftChar = str[windowStart];
      windowStart += 1;
      if (leftChar in charFreq) {
        if (charFreq[leftChar] === 0) {
          matched -= 1;
        }
        charFreq[leftChar] += 1;
      }
    }
  }
  return false;
};