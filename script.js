

// make sure that page is ready 
$(document).ready(function(e) {


    $("#contactForm").on("submit", function(e) {
        var form = this;
        e.preventDefault(); // prevent form from submitting 
        var error=false; 

        // Username validation
        var username = $("#username").val(); 
        if (!username || username.length < 3 || (username.indexOf(' ') >= 0) ) { 
            $.toast({heading: 'Warning', icon: 'warning', hideAfter: 4000, text: "Please enter a valid 3+ character username with no space."});
            error=true;   
        }
        
        // Email validation 
        var email = $("#email").val(); 
        if (!email || !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email).toLowerCase())) {             
            $.toast({heading: 'Warning', icon: 'warning', hideAfter: 4000, text: "Please enter a valid email."});
            error=true;
        }
         
        // Gender validation 
        if (!$("#gender").val()) {             
            $.toast({heading: 'Warning', icon: 'warning', hideAfter: 4000, text: "Please select a gender."});
            error=true;
        }  

        // Password validation 
        var password = $("#password").val();
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,27}$/.test(password)) {              
            $.toast({heading: 'Warning', icon: 'warning', hideAfter: 4000, text: "Please enter a valid 8-27 password with at least one special, uppercase, and lowercase character."});
            error=true;
        }

        // address validation
        var address = $("#address").val(); 
        if (!address) { 
            $.toast({heading: 'Warning', icon: 'warning', hideAfter: 4000, text: "Please enter a address."});
            error=true;   
        }

        // Pronoun validation
        var pronoun = $("#pronoun").val(); 
        if (!pronoun) { 
            $.toast({heading: 'Warning', icon: 'warning', hideAfter: 4000, text: "Please enter a pronoun."});
            error=true;   
        }

        // First name validation
        var firstname = $("#firstname").val(); 
        if (!firstname) { 
            $.toast({heading: 'Warning', icon: 'warning', hideAfter: 4000, text: "Please enter a firstname."});
            error=true;   
        }

        // Middlename name validation
        var middlename = $("#middlename").val(); 
        if (!middlename) { 
            $.toast({heading: 'Warning', icon: 'warning', hideAfter: 4000, text: "Please enter a middlename."});
            error=true;   
        }

        // Last name validation
        var lastname = $("#lastname").val(); 
        if (!lastname) { 
            $.toast({heading: 'Warning', icon: 'warning', hideAfter: 4000, text: "Please enter a lastname."});
            error=true;   
        }

        
        // Message validation
        var message = $("#message").val(); 
        if (!message || message.length > 2000) { 
            $.toast({heading: 'Warning', icon: 'warning', hideAfter: 4000, text: "Please enter a less than 2000 character message."});
            error=true;   
        }


        // if no errors, give success message and submit form
        if (!error) {
            $.toast({heading: 'Success', icon: 'success', hideAfter: 4000, text: "Form submitted!"})
            setTimeout(function() {form.submit();}, 500); // delay so that success message can be seen 
        
        } else { // if there are errors, give a generic error message 
            $.toast({heading: 'Error', icon: 'error', hideAfter: 4000, text: "Could not submit form, check warning messages."});
            e.preventDefault();
        }

    }); 

});