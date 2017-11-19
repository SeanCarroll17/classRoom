function addPerson(name, age) {
  this.name = name;
  this.age = age;
}

let click = document.getElementById('add_Person');

function newPerson(){
  click.style.display = 'none'
  let body = document.getElementsByTagName('body')[0]
  let table = document.createElement('table');
  let tableName = document.createElement('tr')
  let tableAge = document.createElement('tr')
  table.appendChild(tableName)
  table.appendChild(tableAge)
  body.appendChild(table)


  let person = new addPerson('michael', 16);
  tableName.innerText = person.name;
  tableAge.innerText = person.age;
}
click.addEventListener('click', newPerson);
