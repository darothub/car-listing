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
                        $('.alert-danger').show()
                        $('.alert-danger').fadeOut(2000)
                    
                        return false
                        
                        
                    }
                    else{
                        $('.alert-success').show()
                        $('.alert-success').fadeOut(2000)
                        window.location.assign('products.html').delay(2000)
                        
                        return false
                    }
                    // $('.alert-danger').fadeOut(2000) 
                      
                    return false  
               }          
               
        })
        .fail(function(){
            alert('oops! server error')
        })
       
    })
})