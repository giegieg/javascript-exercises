const capitals = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const caesar = function(str, shift) {
  let number = capitals.indexOf(str);
  return capitals[number+shift] ;
  
}

// const caesar = function(str, shift) {
//   let result = "";
//   for(let i=0; i<str.length; i++) {
//     let letterNum = str.charCodeAt(i);
//     letterNum += shift;
//     result = result + String.fromCharCode(letterNum);
//   }
//   return result;
// }

module.exports = caesar
