var xhr = new XMLHttpRequest();
xhr.open('GET', '/projects/');
xhr.send(null);

xhr.onreadystatechange = function() {
  var DONE = 4;
  var OK = 200;
  if (xhr.readyState === DONE) {
    if (xhr.status === OK) {
      console.log(xhr.responseText);
      var projects = JSON.parse(xhr.responseText);
      projects.forEach(function(project) {
        var name = document.createElement('a');
        name.innerHTML = project.name;
        name.href = "/projects/" + project.id;
        document.body.appendChild(name);
      });
    } else {
      console.log('Error:' + xhr.status);
    }
  }
}
