Object.prototype.hash = function (string) {
  var input = string || '';
  var arrS = input.split('.');
  try
  {
    arrS[0] = this[arrS[0]]
  } 
  catch (e)
  {
    return undefined;
  }
  for (var i = 0; i < arrS.length - 1; i++)
  {
    try
    {
      arrS[i + 1] = arrS[i][arrS[i + 1]];
    } 
    catch (e)
    {
      return undefined;
    }
  }
  return arrS[i];
}
var obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  }
};

Extract Nested Object Reference

