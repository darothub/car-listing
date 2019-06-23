$(document).ready(function(){
    $('form').submit(function(event){
        var formData = {
            'email' : $('#exampleInputEmail1').val(),
            'password' : $('#exampleInputPassword1').val(),
            
        };
        console.log(formData)
        
        // $.getJSON('http://localhost:3000/users', function(data){
            
        // })
       
        $.ajax({
            type    : 'GET',
            url     : 'http://localhost:3000/users',
            dataType : 'json',
            encode   : true
        })
        .done(function(data){
            console.log(data)
               var i = 0;
               while(i < data.length){
                    if(formData['email'] === data[i]['email'] && formData['password'] === data[i]['password'] ){
                        $('.form-content').before('<div class="alert alert-primary" role="alert" > You have signed in successfully </div>')
                        setTimeout(function(){ window.location.assign('products.html'); }, 3000); 
                        
                         return false
                        
                    }
                   
                    i++
               }
               $('.form-content').before('<div class="alert alert-danger" role="alert">Invalid username/password</div>')
               $('.alert-danger').hide().fadeIn(2000).fadeOut(1000)
           
            
             
        })
        .fail(function(){
            alert('oops! server error')
        })
        event.preventDefault();
    })
})