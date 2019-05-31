


$(document).ready(function(){
    console.log('hey')
    $('.btn').click(function(event){
         
        var formData = {
            'firstName' : $('input[id=first_name]').val(),
            'lastName' : $('input[id=last_name]').val(),
            'email' : $('input[type=email]').val(),
            'password' :  $('input[type=password]').val()
    
        };

        $.ajax({
            type    : 'POST',
            url     : `http://localhost:3000/users`,
            data    : formData,
            dataType : 'json',
            encode   : true
        })
        .done(function(data){
            alert('sucess')

        });
        event.preventDefault();
    })
})