// const fibonacci = function(x) {
//   if(x<0) {
//     return("OOPS");
//   }
//   let sequence = [1,1];
//   for(let i=2; i<x; i++) {
//     var currentNum = sequence[i-2] + sequence[i-1];
//     sequence.push(currentNum);
//   }
//   return currentNum;
// }


const fibonacci = function(x) {
  if(x<0) {
    return("OOPS");
  }
  let currentNum = 0;
  let prevMem = 1;
  let prevPrevMem = 1;
  for (let i=2; i<x; i++) {
    currentNum=prevMem+prevPrevMem;
    prevPrevMem = prevMem;
    prevMem = currentNum;
  } 
  return currentNum; 
}
module.exports = fibonacci
