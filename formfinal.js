//date picker widget
$(function() {
	$("#datepicker").datepicker();

});


//function to count characters of bio
function charCount() {

	if (this.about_me.value.length <= 140) {
		var x = document.getElementById("characters");
		x.innerHTML = '<p>' + this.about_me.value.length + '</p>';
	} else {
		var x = document.getElementById("characters");
		x.innerHTML = '<p style="color:red;">' + (140 - this.about_me.value.length) + '</p>';
	}


}


var form = document.querySelector('form');
form.addEventListener('submit', function(e) {
	var errors, errorDiv, errorStyle, errorHighlight, noErrorStyle, noHighlight, lightHighlight, namePattern, lnamePattern, skillsArray;

	errors = [];

	errorStyle = [];

	noErrorStyle = [];

	skillsArray = [];

	errorDiv = document.getElementById('error');

	namePattern = /^[a-z]+$/igm

	lnamePattern = /^[a-z]+$/igm

	emailPattern = /[a-z0-9_\-.]+@[a-z0-9]+\.[a-z]{2,}(.[a-z]{2,})?/igm

	phonePattern = /^[1\-]{0,}[\s\-(]{0,}[A-Za-z0-9]{3}[\s\-)]{0,}[A-Za-z0-9_]{3}[\s\-]{0,}[A-Za-z0-9_]{4}$/igm

	cellPhonePattern = /^[1\-]{0,}[\s\-(]{0,}[A-Za-z0-9]{3}[\s\-)]{0,}[A-Za-z0-9_]{3}[\s\-]{0,}[A-Za-z0-9_]{4}$/igm

	websitePattern = /^[^\W][A-Za-z0-9_\-.\/:]+\.[a-z]{2,}(.[a-z]})?[A-Za-z0-9_\-\/.]{0,}$/igm

	datePattern = /^[A-Za-z0-9]?[A-Za-z0-9]{1}[\/\-)]{1}[A-Za-z0-9]?[A-Za-z0-9]{1}[\/\-)]{1}[A-Za-z0-9_]{2,4}$/

	dateMonthPattern = /^[January|Febuary|March|April|May|June|July|August|September|October|November|December]{0,}[\-\s]{1}[A-Za-z0-9]{0,2}[st|nd|rd|th]{0,}[\-\s)]{1}[A-Za-z0-9]{2,4}$/




	// Makes sure first name length greater than zero and passes name pattern test
	if ((this.first_name.value.length === 0) || (namePattern.test(this.first_name.value) === false)) {
		errors.push('Valid first name is required');
		errorStyle.push('first_name');
	} else {
		noErrorStyle.push('first_name');
	}



	// Makes sure last name length greater than zero and passes lname pattern test
	if ((this.last_name.value.length === 0) || (lnamePattern.test(this.last_name.value) === false)) {
		errors.push('Valid last name is required.');
		errorStyle.push('last_name');
	} else {
		noErrorStyle.push('last_name');
	}


	// Makes sure email length greater than zero and passes email pattern test
	if ((this.email.value.length === 0) || (emailPattern.test(this.email.value) === false)) {
		errors.push(' Valid email is required.');
		errorStyle.push('email');
	} else {
		noErrorStyle.push('email');
	}

	// Makes sure website length greater than zero and passes website pattern test
	if ((this.website.value.length === 0) || (websitePattern.test(this.website.value) === false)) {
		errors.push('Valid website URL is required.');
		errorStyle.push('website');
	} else {
		noErrorStyle.push('website');
	}

	// Makes sure homephone length greater than zero and passes phone pattern test
	if ((this.homephone.value.length === 0) || (phonePattern.test(this.homephone.value) === false)) {
		errors.push(' Valid homephone is required.');
		errorStyle.push('homephone');
	} else {
		noErrorStyle.push('homephone');
	}


	// Makes sure cellphone length greater than zero and passes cellphone pattern test
	if ((this.cellphone.value.length === 0) || (cellPhonePattern.test(this.cellphone.value) === false)) {
		errors.push(' Valid cellphone is required.');
		errorStyle.push('cellphone');
	} else {
		noErrorStyle.push('cellphone');
	}

	// Makes sure experience level is greater than zero.
	if (this.experience.value.length === 0) {
		errors.push(' Experience level is required');
		errorStyle.push('experience');
	} else {
		noErrorStyle.push('experience')
	}


	// Makes sure bio length greater than zero and smaller than 140. 
	if (this.about_me.value.length === 0) {
		errors.push('Please enter a biography.');
		errorStyle.push('about_me');
	} else if (this.about_me.value.length > 140) {
		errors.push('Biography is too long. (MAX: 140 char)');
		errorStyle.push('about_me');
	} else {
		noErrorStyle.push('about_me');
	}

	// Selects all checked radio buttons and makes sure value is not 0. 
	var group = document.querySelectorAll('input[type="radio"]:checked');
	if (group.length === 0) {
		errors.push('Please enter a meal preference.');
		errorStyle.push('meal');
	} else {
		noErrorStyle.push('meal');
	}



	// Selects all checked checkboxes and makes sure value is not 0. 
	var skills = document.getElementsByName('skills');
	for (i = 0; i < skills.length; i++) {
		if (skills[i].checked === true) {
			skillsArray.push(skills[i]);
		}
	}


	if (skillsArray.length === 0) {
		errors.push('Please enter your skill(s).');
		errorStyle.push('skills');
	} else {
		noErrorStyle.push('skills');
	}


	// Makes sure date greater than zero and passes date pattern test
	if (this.datepicker.value.length === 0) {
		errors.push('Please select or input expected date of arrival.');
		errorStyle.push('datepicker');
	} else if ((datePattern.test(this.datepicker.value) === false) && (dateMonthPattern.test(this.datepicker.value) === false)) {
		errors.push('Please input valid expected date of arrival.');
		errorStyle.push('datepicker');
	} else {
		noErrorStyle.push('datepicker');
	}


	// Red border style for incorrect elements
	for (i = 0; i < errorStyle.length; i++) {

		this.errorHighlight = document.getElementById(errorStyle[i]);
		this.errorHighlight.style.border = '#CC0000 2px solid ';

	};

	// clears out previous styles for corrected elements
	for (i = 0; i < noErrorStyle.length; i++) {
		if ((noErrorStyle[i] === 'meal') || (noErrorStyle[i] === 'skills')) {

			this.lightHighlight = document.getElementById(noErrorStyle[i]);
			this.lightHighlight.style.border = '0px';

		} else {
			this.noHighlight = document.getElementById(noErrorStyle[i]);
			this.noHighlight.style.border = '#999 1px solid';
		}
	};

	//If any inputs failed prevent form submit
	if (errors.length > 0) {
		//prevent form submit
		e.preventDefault();

		//unhide
		errorDiv.className = '';

		//clear out previous errors
		errorDiv.innerHTML = errors.join('<br>');
	}
}, false);


//Javacript Document