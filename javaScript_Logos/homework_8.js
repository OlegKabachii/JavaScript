'use strict'

function hide() {
	var element = document.getElementById('html');
	element.className = 'hide';
}
function hideBtn() {
	var element = document.getElementById('btn');
	element.className = 'hide';
}
function show() {
	
		var element = document.querySelector('ul>li>.one').style.display;
		element ? document.querySelector('ul>li>.one').style.display = 'none'
				: document.querySelector('ul>li>.one').style.display = 'list-item';

}
