


$(document).ready(function(){
    console.log('hey')
    $('.btn').click(function(event){
         
        var formData = {
            'firstName' : $('input[id=first_name]').val(),
            'lastName' : $('input[id=last_name]').val(),
            'email' : $('input[type=email]').val(),
            'password' :  $('input[type=password]').val()
    
        };
        // var validFirstName = typeof formData['firstName'] === 'string' && formData['firstName'].trim() !== ''
        // var validLastName = typeof formData['lastName'] === 'string' && formData['firstName'].trim() !== ''
        var validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData['email'])
        if(!validEmail) {alert('invalid email')}
        // else if(!validFirstName || !validLastName){alert('invalid first/last name')}

        $.ajax({
            type    : 'POST',
            url     : `http://localhost:3000/users`,
            data    : formData,
            dataType : 'json',
            encode   : true
        })
        .done(function(data){
        
                $('.alert').show()
                alert('Proceed to login')

          
           
        });
         setTimeout(function(){ window.location.assign('login.html'); }, 3000)
        event.preventDefault();
    })
})