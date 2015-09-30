function min(arr, toReturn) {
console.log(arr+"     "+toReturn);
  if(toReturn=='value'){
    return arr.reduce(function(a,b){return a<=b?a:b});
  } else {
    return arr.indexOf(arr.reduce(function(a,b){return a<=b?a:b}));
  }
}