function translate(str) {
	// body...
	let strArr = str.split(" ");			//to separate words
	let result =[];

		for(let word of strArr) {
		result.push(conditions(word));
		}
	return(result.join(" "));
}

function conditions(str) {

	const vowels = {
		a: "a",
		e: "e",
		i: "i",
		o: "o",
		u: "u"
	}

	const exemption = {
		q: "q",
		u: "u"
	}
	//words that start with 'qu'
	if(str[0] in exemption && str[1] in exemption) {
		let letter = str.charAt(0);
		let letter2 = str.charAt(1);
		str = str.substring(2); 
		return(`${str}${letter}${letter2}ay`);
	}
	//words that start with a consonant followed by 'qu'
	else if(!(str[0] in vowels) && (str[1] in exemption) && (str[2] in exemption)) {
		let letter = str.charAt(0);
		let letter2 = str.charAt(1);
		let letter3 = str.charAt(2);
		str = str.substring(3); 
		return(`${str}${letter}${letter2}${letter3}ay`);
	}
	//words that start with a vowel
	else if(str[0] in vowels) {
		return(`${str}ay`);
	}
	//words that start with a consonant
	else if (!(str[0] in vowels) && (str[1] in vowels)) {
		let letter = str.charAt(0);
		str = str.substring(1); 
		return(`${str}${letter}ay`);
	}
	//words that start with two consonants
	else if (!(str[0] in vowels) && !(str[1] in vowels) && (str[2] in vowels)) {
		let letter = str.charAt(0);
		let letter2 = str.charAt(1);
		str = str.substring(2); 
		return(`${str}${letter}${letter2}ay`);
	}
	//words that start with three consonants
	else if (!(str[0] in vowels) && !(str[1] in vowels) && !(str[2] in vowels) && (str[3] in vowels)) {
		let letter = str.charAt(0);
		let letter2 = str.charAt(1);
		let letter3 = str.charAt(2);
		str = str.substring(3); 
		return(`${str}${letter}${letter2}${letter3}ay`);
	}
}

 
module.exports = {
	translate
}