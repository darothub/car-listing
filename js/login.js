$(document).ready(function(){
    $('form').submit(function(event){
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
               
               for(let i = 0; i<data.length; i++){
                console.log(data[i]['email'])
                    if(data[i]['email'] === formData['email'] && data[i]['password'] === formData['password']){
                        $('form').before('<div class="alert alert-primary" role="alert" > You have signed in successfully </div>')
                        setTimeout(function(){ window.location.assign('products.html'); }, 3000); 
                        
                        
                        
                    }
                    else{
                        $('form').before('<div class="alert alert-danger" role="alert">Invalid username/password</div>')
                        $('.alert-danger').fadeOut(2000)
                        return false
                    }
                    
               }
               
           
               
             
        })
        .fail(function(){
            alert('oops! server error')
        })
        event.preventDefault();
    })
})