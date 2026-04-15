class Palindrome {
	constructor() {}

	public isPalindromeUsingStringFunction( s: string ): boolean {
		//  [a-z0-9] → matches lowercase letters and digits
		//  ^ (inside []) → negates the set (NOT these characters)
		//  [^a-z0-9] → matches everything except lowercase letters and digits
		//  g → global flag (matches all occurrences in the string)
		const word = s.toLowerCase()
			.replace(/[^a-z0-9]/g, '')
		const reverseWord = word.split('').reverse().join('')

		return word === reverseWord
	};

	public isPalindrome( s: string ): boolean {
		let left = 0;
		let right = s.length - 1;

		while ( left < right ) {
			// move left pointer to next alphanumeric
			while ( left < right && !this.isAlphaNum(s[left]) ) {
				left++;
			}

			// move right point to previous alphanumeric
			while ( left < right && !this.isAlphaNum(s[right]) ) {
				right--;
			}

			if ( s[left].toLowerCase() !== s[right].toLowerCase() ) {
				return false;
			}

			// increase counter left and right
			left++;
			right--;
		}

		return true;
	}

	private isAlphaNum( c: string ): boolean {
		return /^[a-z0-9]$/i.test(c);
	}


}

/**
 * Self-invoking test block
 */
( () => {
	// Create instance
	const obj = new Palindrome();

	// Test Case using Object
	console.log(obj.isPalindrome('A man, a plan, a canal: Panama'));
	console.log(obj.isPalindrome('race a car'));
	console.log(obj.isPalindrome(' '));

	console.log(obj.isPalindromeUsingStringFunction('A man, a plan, a canal: Panama'));
	console.log(obj.isPalindromeUsingStringFunction('race a car'));
	console.log(obj.isPalindromeUsingStringFunction(' '));
} )()