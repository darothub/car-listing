// $(document).ready(function(){
//     $('form').submit(function(event){
//         var formData = {
//             'maker' : $('input[name=maker]').val(),
//             'model' : $('input[name=model]').val(),
//             'year' : $('input[name=year]').val(),
//             'price' : $('input[name=price]').val(),
//             'image' : $('input[name=image]').val(),
//         };

//         $.ajax({
//             type    : 'POST',
//             url     : 'http://localhost:3000/cars',
//             data    : formData,
//             dataType : 'json',
//             encode   : true
//         })
//         .done(function(data){

//             // var product = '';
//             // $.each(data, function(key, value){
//             //     product += `<div class="card card-custom" style="width: 18rem;">` ;
//             //     product += `<img src=${formData['image']} class="card-img-top" alt="...">`;
//             //     product += `<div class="card-body">`;
//             //     product += `<h5 class="card-title">${formData['maker']}</h5>`;
//             //     product += `<p class="card-text">${formData['price']}</p>`;
//             //     product += `<a href="#" class="btn btn-primary btn-custom">Details</a>`
//             //     product += `</div>`
//             //     product += `</div>`
//             // })
//             // $(".card-container-custom").append(product);
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

        $.post('http://localhost:3000/cars', formData).done(function(response){
            alert('success')
            $('.result').html(response.status)
        }) 
            .fail(function(data) {
                console.log('server error')
            });
        alert('success')
        event.preventDefault();
    })
})


