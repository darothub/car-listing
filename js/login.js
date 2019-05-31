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
            $.each(data, function(index, item){
                console.log(formData['email'])
                if(formData['email'] === item['email'] && formData['password'] === item['password'] ){
                    $('.form-content').before('<div class="alert alert-primary" role="alert"> You have sign in successfully </div>')
                }
                $('.form-content').before('<div class="alert alert-danger" role="alert">Invalid username/password</div>')
            })
            
             
        })
        .fail(function(){
            alert('oops! server error')
        })
        event.preventDefault();
    })
})