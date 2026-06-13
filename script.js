// complete the given function

function palindrome(str){
	// Remove all non-alphanumeric characters and convert to lowercase
  const cleaned = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
  // Create reversed string
  const reversed = cleaned.split('').reverse().join('');
  
  // Check if cleaned string equals reversed string
  return cleaned === reversed;

}
module.exports = palindrome
