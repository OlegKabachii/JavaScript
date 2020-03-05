function check(userAge) {
	if (isNaN(this.userAge) || this.userAge < 1 || this.userAge > 100) {
		this.classList.remove('acceted');
		this.classList.add('error');
		this.value = "1-100";
		userAge.focus();

	} else {
		this.classList.remove('error');
		this.classList.add('acceted');

	}
}
$(document).ready(
		function() {
			$('#get').bind(
					'click',
					function() {
						var user = {
							userName : $('#nameGet').val(),
							userSurname : $('#surnameGet').val(),
							userAge : $('#ageGet').val(),
							userAddress : $('#addressGet').val()
						};
						for ( var data in user)
							user[data] += '.ValidatedByGET';
						if (check(user)) {
							$.ajax({
								type : 'GET',
								contentType : 'application/json',
								url : "/userGet?userName=" + user.userName
										+ "&userSurname=" + user.userSurname
										+ "&userAge=" + user.userAge
										+ "&userAddress=" + user.userAddress,
								success : function(data) {
									console.log("Success");
									console.log(JSON.stringify(data));
								}
							});
						}
					});
		});
$(document).ready(function() {
	$('#post').bind('click', function() {
		var user = {
			userName : $('#namePost').val(),
			userSurname : $('#surnamePost').val(),
			userAge : $('#agePost').val(),
			userAddress : $('#addressPost').val()
		};
		for ( var data in user)
			user[data] += '.ValidatedByPOST';

		if (postValidation(user)) {
			$.ajax({
				type : 'POST',
				data : JSON.stringify(userData),
				contentType : 'application/json',
				url : "/userPost",
				success : function(data) {
					console.log("Success");
					console.log(JSON.stringify(data));
				}
			});
		}
	});
});