'use strict';

function makeBuffer() {
	var str = '';

	return {
		getStr : function() {
			str++;
		},
		add : function(value) {
			str = str + " " + value.toString();
		},
		print : function() {
			return str;
		},
		reset : function() {
			str = '';
		}
	}
}

var buffer = makeBuffer();

buffer.add('JavaScript');
buffer.add('Вчити');
buffer.add('Потрібно!');
console.log(buffer.print());
//---------------------------------
buffer.reset();
buffer.add(0);
buffer.add(1);
buffer.add(0);
console.log (buffer.print()); // '010
//-------------------------------------
buffer.reset();
buffer.add("Тест");
buffer.add("тебе не з'їсть");
console.log(buffer.print());
console.log("--------------");
buffer.reset();
console.log(buffer.print());
console.log('--------------');
