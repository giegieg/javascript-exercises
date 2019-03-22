const sumAll = function(a,b) {
  if(typeof(a) != "number" || typeof(b) != "number" || a<0 || b<0){
    return("ERROR");
  }
  else if(a>b) {
    let c = a;
    a = b;
    b = c;
  }
  
  let sum = 0;
  for(i=a; i<=b; i++) {
    sum += i;
  }
  return (sum);
}

module.exports = sumAll
