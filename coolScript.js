function titleCase(title, minorWords) {
  var check = title || '';
  if (check == '') {
    return ''
  }
  var arrT = check.split(' ');
  check = minorWords || '';
  var arrW = check.toLowerCase() .split(' ');
  for (var i = 0; i < arrT.length; i++) {
    arrT[i] = arrT[i].toLowerCase();
    if (!String.prototype.contains.call(arrW, arrT[i]) || i == 0) {
      arrT[i] = arrT[i].replace(arrT[i][0], arrT[i][0].toUpperCase());
    }
  }
  return arrT.join(' ');
}
