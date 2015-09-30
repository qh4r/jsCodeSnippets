function flip(fn) {
return function(){    
    return fn.apply(null,Array.prototype.reverse.apply(arguments));
    };
}