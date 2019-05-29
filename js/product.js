// $(document).ready(function(){
//     $('form').submit(function(event){
//         var formData = {
//             'maker' : $('input[name=maker]').val(),
//             'model' : $('input[name=model]').val(),
//             'year' : $('input[name=year]').val(),
//             'price' : $('input[name=price]').val(),
//         };

//         $.ajax({
//             type    : 'POST',
//             url     : 'http://localhost:3000/cars',
//             data    : formData,
//             dataType : 'json',
//             encode   : true
//         })
//         .done(function(data){
//             console.log(data)
//         });
//         event.preventDefault();
//     })
// })

$(document).ready(function(){
    $('form').submit(function(event){
        var formData = {
            'maker' : $('input[name=maker]').val(),
            'model' : $('input[name=model]').val(),
            'year' : $('input[name=year]').val(),
            'price' : $('input[name=price]').val(),
        };

        $.post('http://localhost:3000/cars', function(formData) {

            console.log(data)
        
        })
            .fail(function(data) {
                console.log('server error')
            });
        event.preventDefault();
    })
})


