
$(document).ready(function(e){
   
 $.getJSON('http://localhost:3000/cars', function(data){
  
            var product;
            $.each(data, function(index, item){
        
                $.each(item, function(key, value){
                    product = 
                    '<div class="col-md-4 ">' +
                        '<div class="card">' + 
                        `<img src=${item.image} class="card-img-top" alt="...">`  + 
                        `<div class="card-body">`+
                        `<h5 class="card-title" style="display:none;" id=${item.id}>${item.id}</h5>` +
                        `<h5 class="card-title" id=${item.maker}>${item.maker}</h5>`+
                        `<p class="card-text model">${item.model}</p>` +
                        `<p class="card-text year" id=${item.year}>${item.year}</p>` +
                        `<p class="card-text price">N${item.price}</p>` +
                        `<a href="#" class="btn btn-primary  details" id=${item.id} >Details</a>`+ " " +
                        `<a href="#" class="btn btn-primary  edit"  id=${item.id}>Edit</a>` + " " +
                        `<a href="#" class="btn btn-primary  delete"  id=${item.id}>Delete</a>` + 
                        '</div>' +
                     '</div'
                    
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
                    $('#btn').hide();
                    $('#btn1').toggle();
                    $('input[name=image]').val()
                })
                event.preventDefault();
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
            $('.delete').on('click', function(event){
                var {id} = event.target
                var formData = {
                    'id'    :$('input[name=id]').val()
                };
                
                $.ajax({
                    type    : 'DELETE',
                    url     : `http://localhost:3000/cars/${id}`,
                    data    : formData,
                    dataType : 'json',
                    encode   : true
                })
                .done(function(data){
                    // prompt('are you sure you want to delete?')
                    alert('sucess')
        
                }).fail(function(data){
                    alert('error! can not perform action')
                })
                event.preventDefault();
            })
            $('.details').on('click', function(event){
                $('.form-content').hide()
                $("#res").hide()
                var {id} = event.target
                // console.log(id)
                var productById ;
                var productImage;
                $.ajax({
                    type    : 'GET',
                    url     : `http://localhost:3000/cars/${id}`,
                    dataType : 'json',
                    encode   : true
                })
                .done(function(data){
                    
                    // $('display.html').load('.display')
                    // console.log(data)
                    productById = '<div class="card card-custom" id="card" style="width: 18rem;">' + 
                    `<img src=${data.image} class="card-img-top" alt="...">`  + 
                    `<div class="card-body">`+
                    `<h5 class="card-title" style="display:none;" id=${data.id}>${data.id}</h5>` +
                    `<h5 class="card-title" id=${data.maker}>${data.maker}</h5>`+
                    `<p class="card-text model">${data.model}</p>` +
                    `<p class="card-text year" id=${data.year}>${data.year}</p>` +
                    `<p class="card-text price">N${data.price}</p>` +
                    `<a href="#" class="btn btn-primary btn-custom details"  style ="display:none" id=${data.id}>Details</a>`+ " " +
                    `<a href="#" class="btn btn-primary btn-custom edit"  style ="display:none" id=${data.id}>Edit</a>` + " " +
                    `<a href="#" class="btn btn-primary btn-custom delete"  style ="display:none" id=${data.id}>Delete</a>` + " " +
                    '</div>'
                    productImage = `<img src =${data.image} style='width: 280px'>`
                    $(".display").slideDown('slow');
                    $("#display").append(productById);
                    $(".car-lists").hide();
                    $('#right-display').append(productImage)
                    $('#right-display').append(productImage)
                    $('#right-display').append(`<p>Location:</p>`)
                    $('#right-display').append(`<p>Contact:</p>`)
                    
                    
                    // window.location.assign('../display.html')
                }).fail(function(data){
                    alert('error! can not perform action')
                })
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
  $("#btn-back").on('click', function(e){
    e.preventDefault()
    location.reload(true)
  })
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


