const repeatString = function(b,c) {
  let str = "";
  if(c<0) {
    return("ERROR");
  }
  for(a=0; a<c; a++) {
    str = str + b;
  }
  return str;
}
module.exports = repeatString
