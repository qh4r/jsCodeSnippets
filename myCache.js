function cache(func) {
   var f = func , c = {};
   return function(){
     var arr = Array.prototype.slice.call(arguments);
     var temp = JSON.stringify(arr);       
     if(c[temp]==undefined){
       c[temp] = {};
       c[temp]['rzt']=f.apply(null,arr);
     }
     return c[temp]['rzt'];
   }
 }