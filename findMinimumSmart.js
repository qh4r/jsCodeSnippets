function min(arr, toReturn) {
  var val = Math.min.apply(null, arr)
  return toReturn == 'value' ? val : arr.indexOf(val)
}