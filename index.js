fetch('https://salty-shore-94674.herokuapp.com/users')
  .then(response => response.json())
  .then(json => console.log(json))