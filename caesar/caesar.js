const capitals = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const letterConversion = function(letter, shift) {
  let number = capitals.indexOf(letter);
  if(shift>26) {
    shift = shift%26;
  }
  if((number+shift)>25) {
    return capitals[number+shift-26];
  } 
  else if((number+shift)<0) {
    return capitals[number+shift+26];
  }
  return capitals[number+shift] ;
}

function caesar(str, shift) {
  let strArr = str.split("");
  let result = [];
  for(let letter of strArr) {
    if(letter == letter.match(/[^A-Za-z0-9]+/g)) {
     result.push(letter);
    }
    else if (letter == letter.toLowerCase()) {
      result.push(letterConversion(letter.toUpperCase(),shift).toLowerCase());
    }
    else if (letter == letter.toUpperCase()) {
      result.push(letterConversion(letter,shift));
    }
  }
  return(result.join(""));
}

module.exports = caesar
