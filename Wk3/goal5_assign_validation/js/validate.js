/*
     Developed by the JavaScript team at Fullsail
     Date: 1306
*/

(function(){

    myform.onsubmit = function(e){

		var input_name = document.querySelector("#f_username");
		var input_email = document.querySelector("#f_email");
		var input_phone = document.querySelector("#f_phone");
		var input_password = document.querySelector("#f_password");
		var input_ssn = document.querySelector("#f_ssn");
		
		
		
        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.

        validateField(input_uname);  //id = is the form input field ID
		validateField(input_email);
		validateField(input_phone);
		validateField(input_password);
		validateField(input_ssn);

        e.preventDefault();
        return false;
    };


    var validateField = function(inputName){

        if (inputName.name === 'f_username'){
            var pattern = /[^A-Za-z0-9_@\.]|@{2,}|\.{5,}/;     
        }else if(inputName.name === 'f_email'){
            var pattern = /^[\w\.=-]+@[\w\.-]+\.[\w]{2,3}$/;    
        }else if(inputName.name === 'f_phone'){
            var pattern = /^[2-9]\d{2}-\d{3}-\d{4}$/;    
        }else if(inputName.name === 'f_password'){
            var pattern = /^[a-zA-Z]\w{3,14}$/;    
        }else if(inputName.name === 'f_ssn'){
            var pattern = /^\d{3}-\d{2}-\d{4}$/;    
        };

        var pass = pattern.test(inputName.value);
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        };
    };

})();  // end wrapper



