Array.prototype.groupBy = function (fn) {
  var result = {
  };
  for (var i = 0; i < this.length; i++)
  {
    try {
      if (!result[fn(this[i])])
      {
        result[fn(this[i])] = [
        ];
      }
      result[fn(this[i])].push(this[i]);
    } 
    catch (e) {
      if (!result[this[i]])
      {
        result[this[i]] = [
        ];
      }
      result[this[i]].push(this[i]);
    }
  }
  return result;
}
