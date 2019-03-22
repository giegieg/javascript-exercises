const snakeCase = function(str) {
  let arr = str.split('');
  for (i=0; i<arr.length; i++) {
    if (arr[i] === " " || arr[i] === "-") {
      arr[i] = "_";
    }
    else if (arr[i] === arr[i].toUpperCase()) {
      arr[i] = arr[i].toLowerCase();
    }
  }
  
  let arr_new = arr.join("");
  arr_new = arr_new.replace(/[^\w\s]|/g, "");
  return arr_new;
}

// console.log(snakeCase("heLlo, wORld"));
module.exports = snakeCase
