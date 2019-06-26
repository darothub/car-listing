$(document).ready(function(){
    $('form').submit(function(event){
        event.preventDefault();
        var formData = {
            'email' : $('#exampleInputEmail1').val(),
            'password' : $('#exampleInputPassword1').val(),
            
        };
        // console.log(formData)
        
        // $.getJSON('http://localhost:3000/users', function(data){
            
        // })
       
        $.ajax({
            type    : 'GET',
            url     : 'https://car-flux.herokuapp.com/users',
            dataType : 'json',
            encode   : true
        })
        .done(function(data){
            console.log(data)
               
               for(let i = 0; i< data.length; i++){
                
                    if(formData['email'] !== data[i]['email'] && formData['password'] !== data[i]['password'] ){
                        $('form').after('<div class="alert alert-danger" role="alert">Invalid username/password</div>')
                    
                        
                        
                        
                    }
                    else{
                        $('form').before('<div class="alert alert-success" role="alert" > You have signed in successfully </div>')
                        window.location.assign('products.html');
                        
                    }
                    // $('.alert-danger').fadeOut(2000)     
               }          
               
        })
        .fail(function(){
            alert('oops! server error')
        })
       
    })
})