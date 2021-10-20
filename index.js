fetch('https://salty-shore-94674.herokuapp.com/users')
  .then(response => response.json())
  .then(json => {
    var ul = document.getElementById('006')
    json.forEach(element => {
      var li = document.createElement('li')
      li.innerHTML = element.name ;
      ul.appendChild(li);

    });
  })