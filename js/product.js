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
            url     : 'http://localhost:3000/cars',
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
$(document).ready(function(){
   
 $.getJSON('http://localhost:3000/cars', function(data){
  
            
            $.each(data, function(index, item){
                $.each(item, function(key, value){
                    $("#res").append('<div class="card card-custom" style="width: 18rem;">' + 
                    `<img src=${item.image} class="card-img-top" alt="...">`  + 
                    `<div class="card-body">`+
                    `<h5 class="card-title">${item.maker}</h5>`+
                    `<p class="card-text year">${item.year}</p>` +
                    `<p class="card-text price">${item.price}</p>` +
                    `<a href="#" class="btn btn-primary btn-custom">Details</a>`+
                    '</div>');
                    return false
                })
                
            })
            
            
            // $.each(data, function(key, value){
            //     $.each(item, function(key, value){
            //         $("#res").append(key +': '+ value + '</br>');
            //     })
                
       
            // })
           


 })
        
})





// $(document).ready(function(){
//     $('form').submit(function(event){
        
//         var formData = {
//             'maker' : $('input[name=maker]').val(),
//             'model' : $('input[name=model]').val(),
//             'year' : $('input[name=year]').val(),
//             'price' : $('input[name=price]').val(),
//         };

//         $.post('http://localhost:3000/cars', formData).done(function(response){
//             alert('success')
//             $('.result').html(response.status)
//         }) 
//             .fail(function(data) {
//                 console.log('server error')
//             });
//         alert('success')
//         event.preventDefault();
//     })
// })


