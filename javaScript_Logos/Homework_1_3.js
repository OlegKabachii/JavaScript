"use strict"

let id;
let pass;

console.log("Who's there?");

switch (id) {

case null: {
	console.log("Canceled");
	break;
}

case "Other": {
	console.log("I don't know you");
	break;
}

case "Admin": {
	console.log("Password?");
	switch (pass) {
	case null: {
		console.log("Canceled.");
		break;
	}
	case "Other": {
		console.log("Wrong password");
		break;
	}
	case "Master": {
		console.log("Welcome!");
		break;
	}
	}
}
}
