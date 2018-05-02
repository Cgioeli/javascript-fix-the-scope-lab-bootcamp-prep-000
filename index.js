var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = 'cat'
  return animal
}

function add2(n) {
  var two = 2
  return n + two

  // Feel free to move things around!
  
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
<<<<<<< HEAD
var theFunk = funkyFunction()()
theFunk
=======
<<<<<<< HEAD
var theFunk = funkyFunction()
theFunk() 
=======
var theFunk = funkyFunction
theFunk();
>>>>>>> b7ac5c306afc408eb63b375761f30994671d70a4
>>>>>>> 3095da47912de28e4e05a87a1045f36294d87cb4
