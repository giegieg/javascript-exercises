const removeFromArray = function() {
  let arr = Array.from(arguments);
  let input = arr[0];
  for(let i = 1; i<arr.length; i++) {
    let toRemove = arr[i];
    let toRemoveIndex = input.indexOf(toRemove);
    if(toRemoveIndex == -1)
      continue;
    input.splice(toRemoveIndex, 1);
  }
  return(input);
}

module.exports = removeFromArray
