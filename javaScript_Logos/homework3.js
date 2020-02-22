"use strict"

let products = [];
let last = products[products.length - 1];

// -----------------------------

let style = [ "Джаз", "Блюз" ];
style.push("Рок-н-Ролл");
style.splice(-2, 1);
style.splice(-1, 0, "Класика")
console.log(style);
console.log(style.shift());
console.log(style.unshift("Реп", "Реггі"));

// ------------------------------

function find(arr, value) {
	for (var i = 0; i < arr.length; i++) {

		if (arr[i] === value) {
			return i;

		} else {
			return -1;
		}
	}
}

// =============================

function filterRange(array, a, b) {
	let newArray = [];
	for (var i = 0; i < array.length; i++) {
		if (array[i] >= a && array[i] <= b) {
			newArray.push(array[i]);
			return newArray;
		}
	}
}

// ==============================

function camelize(str) {
	let row = str.split('-');
	for (var i = 1; i < row.length; i++) {
		row[i] = row[i].charAt(0).toUpperCase() + row[i].slice(1);
	}
	console.log(str);
	str = row.join('');
	console.log(str);
}
camelize("my-short-string")
