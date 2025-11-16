const palindromes = function (str) {
  // Convert to lowercase and remove non-letter/number characters
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Reverse the cleaned string
  const reversed = cleaned.split("").reverse().join("");

  // Compare the cleaned string to its reversed version
  return cleaned === reversed;

};

// Do not edit below this line
module.exports = palindromes;
