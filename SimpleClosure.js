function createFunctions(n) {
  var callbacks = [
  ];
  for (var i = 0; i < n; i++) {
    callbacks.push((function () {
      var x = i;
      return function () {
        return x;
      }
    }) ());
  }
  return callbacks;
}
