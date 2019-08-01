$(document).ready(function(){
    
    $('form').submit(function(event){
        
         
        var formData = {
            'firstName' : $('input[name=first]').val(),
            'lastName' : $('input[name=last]').val(),
            'email' : $('input[name=email]').val(),
            'password' : $('input[name=password1]').val(),
            'password2' : $('input[name=cpassword]').val(),
        };
        if(formData.password !== formData.password2){
            
            alert('password does not match')
            return false
        }
        console.log(formData)
        $.ajax({
            type    : 'POST',
            url     : `https://car-flux.herokuapp.com/users`,
            data    : formData,
            dataType : 'json',
            encode   : true
        }).done(function(data){

          
            $('.alert-success').show();
            alert('proceed to login')
            window.location.assign('login.html').delay(2000)
                           
                    
                           
       })
        .fail(function(){
            alert('oops! server error')
        })
        
        event.preventDefault();
    
    })
})