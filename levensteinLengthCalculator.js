function levenshtein(a,b)
{
  console.log(a+"    "+b);
  var longer = a.length>=b.length ? a : b
  var shorter = a.length<b.length ? a : b
  var tabl = longer.split('') || [], tabs = shorter.split('') || [], count = 0, rem = [];
  tabl.map(function(x,i){
    if(x != shorter[i]){
      count++;
      rem.push(x);
      if(rem.indexOf(shorter[i])!=-1){
        count--;
        rem = rem.splice(rem.indexOf(x),rem.length);
        }
    }
  })
  return count;
}