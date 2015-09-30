function permutations(string) {
  var tab = string.split(''), current = string.split(''), output = [], used = [];
  for(var i = 0; i<tab.length; i++){
    for(var c in current){ 
      if(Array.isArray(current[c])){
        used = current[c].map(function(a){return a});
        } else {
        used = [];
        used.push(current[c])
        }
      for(var t = 0; t<tab.length; t++){
        if(used.indexOf(tab[t])>-1){
          used.splice(used.indexOf(tab[t]),1);
        } else {
        if(current[c].length>1){
          var one = current[c].map(function(a){return a});        
          }else{
          var one = []
          one.push(current[c]);
          }
        one.push(tab[t])
        output.push(one);
        }
      }
    }
    current = output.length == 0 ? current : output;
    output = [];
  }
  var result = current.map(function(a){ return a.length<2?a:a.join('')}).sort();  
  return result.filter(function(a,b){return a!=result[b-1]})
  }