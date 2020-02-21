"use strict"

let user = {};
user.name = "ПИЛИП";
user.surname = "ШЕВЧЕНКО";

let temp = user;
temp.name = "СЕРГІЙ";

delete user.name;

//----------------------------

var employeeSalaries = {
		id1 : 100,
		id2 : 100,
		id3 : 100}

var sum=0;
if(employeeSalaries!=null){

for (var key in employeeSalaries)
	sum+=employeeSalaries[key];
console.log("Сума зарплат працівників: " + sum);}
else{
	console.log("Сума зарплат працівників: " + sum);
}

//---------------------------------------------------------

function func(val1, val2, type){
	
	try{
		let sum;
		switch (type){
		case '+':
			sum = val1+val2;
			break;
		case '-':
			sum = val1-val2;
			break;
		case '*': 
			sum=val1*val2;
			break;
		case '/':
			sum=val1/val2;
			break;
		}
		
		if(sum!=null){
			return sum;
		}
		else{
			console.log("Data inout error");
		}
		
	}
	catch(err){
		console.log("Data error");
	}
};

console.log(func(10, 10,'*'));



