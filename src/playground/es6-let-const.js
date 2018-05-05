var nameVar = 'C';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'J';
nameLet = 'B'; //ok
//let nameLet = 'K'; // not ok, causes error
console.log('nameLet', nameLet);

const nameConst = 'D';
//const nameConst = 'E'; // not ok, error
//nameConst = 'F'; // not ok, error
console.log('nameConst', nameConst);

if (true) {
	var chicken = 'egg'; // accessible in global scope
	//let chicken = 'egg'; // not accessible in global scope
}

console.log(chicken);

var fullName = 'Chris Ewald';

if (fullName) {
	var firstName = fullName.split(' ')[0];
}