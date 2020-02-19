"use strict"

let id;
let pass;

console.log("Who's there?");

if (id == null) {
	console.log("Canceled");}
 else if (id == "Other") {
	console.log("I don't know you");}
 else if (id == "Admin") {
	console.log("Password?");
	if (pass == "Master") {
		console.log("Welcome!");}
	else if (pass == "Other") {
		console.log("Wrong password");}
	else if (pass == "Canceled") {
		console.log("Canceled.");}
}
 
