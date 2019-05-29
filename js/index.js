$(document).ready(function(){
    $('form').submit(function(event){
        var formData = {
            'maker' : $('input[name=maker]').val(),
            'model' : $('input[name=model]').val(),
            'year' : $('input[name=year]').val(),
            'price' : $('input[name=price]').val(),
            'image' : $('input[name=image]').val(),
        };

        $.ajax({
            type    : 'GET',
            url     : 'http://localhost:3000/cars',
            data    : formData,
            dataType : 'json',
            encode   : true
        })
        .done(function(data){

            alert(data)
        });
        event.preventDefault();
    })
})