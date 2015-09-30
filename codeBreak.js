function tryCode(indications) {
    var start = [5,5,5];
    tryCode = function(indications){
    start = indications==null ? start: start.map(function(v, i) {
    return indications[i]==0 ? v : indications[i] > 0 ? v+=1 : v-=1;
    })
    return start;
   }
  return tryCode();
}