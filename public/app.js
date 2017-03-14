var xhr = new XMLHttpRequest();
xhr.open('GET', '/projects/');
xhr.send(null);

xhr.onreadystatechange = function() {
  var DONE = 4;
  var OK = 200;
  if (xhr.readyState === DONE) {
    if (xhr.status === OK) {
      console.log(xhr.responseText);
  }
}
