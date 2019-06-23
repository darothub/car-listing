$(document).ready(function(){
    console.log('hey')
    $('form').submit(function(event){
         
        var formData = {
            'firstName' : $('input[id=first_name]').val(),
            'lastName' : $('input[id=last_name]').val(),
            'email' : $('input[type=email]').val(),
            'password' :  $('input[type=password]').val(),
            'password2' : $('#exampleInputPassword2').val()
    
        };
        if(formData.password !== formData.password2){
            
            alert('password does not match')
            return false
        }
    
        $.ajax({
            type    : 'POST',
            url     : `http://localhost:3000/users`,
            data    : formData,
            dataType : 'json',
            encode   : true
        })
        .done(function(data){
            
                $('form').before('<div class="alert alert-primary" role="alert"> You have successfully signed up </div>')
                $('.alert-primary').fadeOut(2000)
               
                

            
            
        })
        .fail(function(){
            alert('oops! server error')
        })
        
        event.preventDefault();
    
    })
})