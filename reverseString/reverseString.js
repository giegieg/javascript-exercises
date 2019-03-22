const reverseString = function(str) {
let r = str.split("");
r = r.reverse();
str = r.join("");
return(str);
}

module.exports = reverseString
