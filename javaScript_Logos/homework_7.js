"use strict"

function funcColor() {
	var element = document.querySelectorAll('ul>li>a');
	for (var i = 0; i < element.length; i++) {
		var check = element[i].innerHTML.split('/');
		if (check[0] === 'http:' || check[0] === 'ftp:') {
			element[i].className = 'external-red';
		}
	}
}

function fillText() {
	var elements = document.querySelectorAll('ul>li');
	for (var i = 0; i < elements.length; i++) {
		var currentElement = elements[i];
		currentElement.innerHTML = 'abc';
	}
}
function count() {

	var liElements = document.querySelectorAll('ul>li');
	var count = liElements.length;
	alert('Coun of elements - ' + liElements.length);
}
