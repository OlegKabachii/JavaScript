"use strict"

var numbers = [21,324,45,4,34,34,0,346,-69,-73,3,-1,5,54,4,353,3,23,43,65,79890,];
numbers.sort();
console.log(numbers);

function compareNumeric(a,b){
	return a - b;
}
numbers.sort(compareNumeric);
console.log(numbers);
numbers.reverse();
console.log(numbers);
//======================
function filterPos(obj){
	return obj>=0;
}
function filterNeg(obj){
	return obj<0;
}
var rezPos = numbers.filter(filterPos);
var rezPNeg = numbers.filter(filterNeg);

console.log(rezPos);
console.log(rezPNeg);

//-------------------------------------------

var student = [];
var id_1 = {yearOfStuding: 2001, facultyName: 'NBA'};
var id_2 = {yearOfStuding: 2001, facultyName: 'NBA'};
var id_3 = {yearOfStuding: 2002, facultyName: 'NBC'};
var id_4 = {yearOfStuding: 2003, facultyName: 'NBC'};
var id_5 = {yearOfStuding: 2007, facultyName: 'NBG'};
var id_6 = {yearOfStuding: 2008, facultyName: 'NBG'};
var id_7 = {yearOfStuding: 2019, facultyName: 'TBA'};
var id_8 = {yearOfStuding: 2004, facultyName: 'TBA'};
var id_9 = {yearOfStuding: 2004, facultyName: 'QBA'};
var id_10 = {yearOfStuding: 2002, facultyName: 'QBA'};

student.push(id_1,id_2,id_3,id_4,id_5,id_6,id_7,id_8,id_9,id_10);
console.log(student);

function getOne (student){
	console.log('facultyName -->' + student.facultyName);
}
student.forEach(getOne);

function getFacult(obj){
	return obj.facultyName;
}
var facultet = student.map(getFacult);
console.log('facultyNames--->' + facultet);

function getOfYear(sumObj, currentEl){
	return sumObj + currentEl.yearOfStuding;
}
var sumYears = student.reduce(getOfYear,0);
console.log(sumYears);








