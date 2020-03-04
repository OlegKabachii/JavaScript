

userAge.onblur = function () {
	if (isNaN(this.value)||this.value<1||this.value>100) {
		this.classList.remove('acceted');
		this.classList.add('error');
		this.value = "1-100";
		userAge.focus();

	} else {
		this.classList.remove('error');
		this.classList.add('acceted');
		}
}
function get() {
	var user = {
		userName:document.getElementById('nameGet').value,	
        userSurname: document.getElementById('surnameGet').value,
	    userAge: document.getElementById('ageGet').value,
        userAddress: document.getElementById('addressGet').value
	};
	for(var data in user)
        user[data] += '.ValidatedByGET';
    
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "/userGet?userName="+user.userName+
			"&userSurname="+user.userSurname+"&userAge="+user.userAge+"&userAddress="+user.userAddress,true);
	xhr.setRequestHeader("Content-type","application/json");
	xhr.send();
}

function post() {
	var user = {
        userName:document.getElementById('namePost').value,	
        userSurname: document.getElementById('surnamePost').value,
	    userAge: document.getElementById('agePost').value,
        userAddress: document.getElementById('addressPost').value	
		};
    for(var data in user)
        user[data] += '.ValidatedByPOST';
		
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/userPost",true);
    xhr.setRequestHeader("Content-type","application/json");
    xhr.send(JSON.stringify(user));
}
