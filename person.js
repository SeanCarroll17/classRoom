
function addPerson(name, age, hair, skin) {
  this.name = name;
  this.age = age;
  this.hair = hair;
  this.skin = skin
}


var people = document.getElementById('add_Person');
function set(){

  let person = new addPerson('michael', 16);
  localStorage.setItem('name', person.name)
  localStorage.setItem('age', person.age)

};
people.addEventListener('click', function(){
  set()
  let name = document.getElementById('name');
  let age = document.getElementById('age')
  name.innerText = localStorage.getItem('name');
  age.innerText = localStorage.getItem('age');
})
