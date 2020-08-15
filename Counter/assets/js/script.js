let count = 0;

var value = document.getElementById('val');
var incr = document.getElementById('incr');
var decr = document.getElementById('decr');
var res = document.getElementById('res');

value.innerHTML = count;
incr.onclick = function() {
  count = count +1;
  value.innerHTML = count;
}

decr.onclick = function() {
  count = count -1;
  value.innerHTML = count
}

res.onclick = function() {
  count = 0;
  value.innerHTML = count;
}
