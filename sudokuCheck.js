var Sudoku = function(data) 
{
  //   Private methods
  // -------------------------



  //   Public methods
  // -------------------------
  return {
    isValid: function() {
    var result = true;    
    console.log(data)
      var trans = data.map(function(a,i){return data.map(function(a){return a[i]})});
      var tri = trans.map(function(a,i){return trans.map(function(a){return a[i]})});
      
      data.forEach(function(d){result = !d.sort()
      .filter(function(a,b){return a==b}).length&&result?true:false});      
      
      trans.forEach(function(d){result = !d.sort()
      .filter(function(a,b){return a==b}).length&&result?true:false});      
      if(!Array.isArray(data)){
         return false;}         
      if(data[0] == undefined){
      return false;}      
      if(!Array.isArray(data[0])){      
      return false;
      }
      if(data[0].length < 2){
      return false;
      }
      if(parseFloat(Math.sqrt(data.length))!=parseInt(Math.sqrt(data.length))
      || parseFloat(Math.sqrt(data[0].length))!=parseInt(Math.sqrt(data[0].length))
      || data.length != data[0].length){
      return false};      
      var chunk = Math.sqrt(data.length);
      for(var i=0;i<data.length;i+=chunk){      
        for(var j=0;j<data.length;j+=chunk){
        var test = [];        
          for(var ii = 0;ii<chunk;ii++){          
            for(var jj= 0;jj<chunk;jj++){
            if(tri[ii+i] == undefined){
            return false;
            }
            if(parseInt(tri[ii+i][jj+j]) == NaN){
            return false;
            }                        
            test.push(tri[ii+i][jj+j]);
            }
           }           
           if(test.sort().filter(function(a,b){return a==b}).length>0){
             return false;
             }
         } 
      }      
      return result;
    }
  };
};