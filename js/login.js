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
               var i = 0;
               while(i < data.length){
                    if(formData['email'] === data[i]['email'] && formData['password'] === data[i]['password'] ){
                        $('form').before('<div class="alert alert-primary" role="alert" > You have signed in successfully </div>')
                        setTimeout(function(){ window.location.assign('products.html'); }, 3000); 
                        
                         return false
                        
                    }
                    else{
                        $('form').before('<div class="alert alert-danger" role="alert">Invalid username/password</div>')
                        $('.alert-danger').fadeOut(2000)
                        return false
                    }
                    i++
               }
               
           
               
             
        })
        .fail(function(){
            alert('oops! server error')
        })
        event.preventDefault();
    })
})