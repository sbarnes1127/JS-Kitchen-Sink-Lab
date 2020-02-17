var FullName = 'Sierra Barnes';

const TotalStates = 50

var a = 5 + 4;


function sayHello() {
    alert('Hello World!');
}

sayHello()


function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

var favVeg = ['Spinach', 'Carrots', 'Greens', 'Brussel Sprouts'];

for (var i = 0; i < favVeg.length; ++i) {
    console.log(favVeg[i]);
}

var Peer = [{
    name: 'John',
    age: 23,
},
{
    name: 'Rachel',
    age: 22,
},
{
    name: 'Forrest',
    age: 20,
},
{
    name: 'Ethan',
    age: 17,
},
{
    name: 'Lily',
    age: 13,
}]

for (let i = 0; i < Peer.length; i++) {
    let x = Peer[i].name
    let y = Peer[i].age
    checkAge(x, y);
};

function getLength(someWord) {
    return someWord.length
}
let x= getLength('Hello World');


if (x % 2 ===0) {console.log('The world is nice and even!')
} else {console.log('The world is an odd place!')}