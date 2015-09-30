function autocomplete(input, dictionary) {
  var rmv = new RegExp('[~!@#$%^&*()_+1234567890]','gi');
  input = input.replace(rmv,'');
  var rx = new RegExp("^" + input + '[\w]*', 'gi'),
  j = 0,
  result = [];  
  for(var i  = 0; i< dictionary.length; i++) {    
    if (dictionary[i].match(rx)) {
      j++;
      result.push(dictionary[i]);     
    }
    if(j>=5){
    break;
    }
  };  
  return result;
}