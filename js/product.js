
$(document).ready(function(e){
   
 $.getJSON('http://localhost:3000/cars', function(data){
  
            var product;
            $.each(data, function(index, item){
        
                $.each(item, function(key, value){
                    product = '<div class="card card-custom" style="width: 18rem;">' + 
                    `<img src=${item.image} class="card-img-top" alt="...">`  + 
                    `<div class="card-body">`+
                    `<h5 class="card-title" style="display:none;" id=${item.id}>${item.id}</h5>` +
                    `<h5 class="card-title" id=${item.maker}>${item.maker}</h5>`+
                    `<p class="card-text model">${item.model}</p>` +
                    `<p class="card-text year" id=${item.year}>${item.year}</p>` +
                    `<p class="card-text price">N${item.price}</p>` +
                    `<a href="#" class="btn btn-primary btn-custom">Details</a>`+ " " +
                    `<a href="#" class="btn btn-primary btn-custom edit" id=${item.id}>Edit</a>` + " " +
                    `<a href="#" class="btn btn-primary btn-custom delete">Delete</a>` + " " +
                    '</div>'
                    
                })
                $("#res").append(product);
            })
            $('.edit').on('click', function(event){
                var {id} = event.target
                
                $.getJSON(`http://localhost:3000/cars/${id}`, function(data){
                    
                    // console.log(data.maker)
                    $('input[name=id]').val(data.id);
                    $('input[name=maker]').val(data.maker);
                    $('input[name=model]').val(data.model);
                    $('input[name=year]').val(data.year);
                    $('input[name=price]').val(data.price);
                    // $('#btn').html('Update Car')
                    $('input[name=image]').val()
                })
            })
            $('#btn1').on('click', function(event){
                
                var formData = {
                    'id'    :$('input[name=id]').val(),
                    'maker' : $('input[name=maker]').val(),
                    'model' : $('input[name=model]').val(),
                    'year' : $('input[name=year]').val(),
                    'price' : $('input[name=price]').val(),
                    'image' : $('input[name=image]').val(),
                };
                console.log(formData['id'])
                $.ajax({
                    type    : 'PATCH',
                    url     : `http://localhost:3000/cars/${formData['id']}`,
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
        
})


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
            type    : 'POST',
            url     : `http://localhost:3000/cars/`,
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

console.log('hey')

$(document).ready(function(){
    $('a').click(function(event){
        console.log('success') 
        event.preventDefault()
    })
    // $.ajax({
    //     type    : 'PUT',
    //     url     : `http://localhost:3000/cars/${id}`,
    //     data    : formData,
    //     dataType : 'json',
    //     encode   : true
    // })
    // .done(function(data){
    //     alert('sucess')

    // });
})

// $(document).ready(function(){
//     // var formData = {
//     //     'id' : $('.id').html(),
//     //     'maker' : $('.card-title').each(function(i){$(this).html()}),
//     //     'model' : $('.model').html(),
//     //     'year' : $('.year').html(),
//     //     'price' : $('.price').html(),
//     // };
   
//         $('.edit').on('click', function(){
//             $('input[name=id]').val($('#card-body').find('#id').text())
//             $('input[name=maker]').val($('.maker').html());
//             $('input[name=model]').val($('.model').html());
//             $('input[name=year]').val($('.year').html());
//             $('input[name=price]').val($('price').html());
//             $('#btn').html('Update Car')
//             $('input[name=image]').val()
        
        

//         })
   

// })


