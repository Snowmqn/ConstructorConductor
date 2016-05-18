//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

var Person = function(name, age) {
  this.name = name;
  this.age = age;
};


//Now create three instances of Person with data you make up
var person1 = Person("Name1", 1);
var person2 = Person("Name2", 2);
var person3 = Person("Name3", 3);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.sayName = function() {alert(this.name)};
