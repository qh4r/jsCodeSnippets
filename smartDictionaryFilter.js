function autocomplete(input, dictionary){
  var r = new RegExp('^' + input.replace(/[^a-z]/gi,''), 'i');
  return dictionary.filter(function(w){ return r.test(w); }).slice(0, 5);
}