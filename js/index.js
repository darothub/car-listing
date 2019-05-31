$(document).ready(function(){
    $('form').submit(function(event){
        var formData = {
            'maker' : $('select.maker').children('option:selected').val(),
            'model' : $('select.model').children('option:selected').val(),
            'year' : $('select.year').children('option:selected').val(),
            'price' : $('select.price').children('option:selected').val(),
            
        };

        
        // $.getJSON('http://localhost:3000/cars', function(data){
        //     console.log(data)
        // })
        var product;
        $.ajax({
            type    : 'GET',
            url     : 'http://localhost:3000/cars',
            dataType : 'json',
            encode   : true
        })
        .done(function(data){
            $.each(data, function(index, item){
                $.each(item, function(key, value){
                    if(item.maker === formData['maker']){
                        console.log(item)
                        product = '<div class="card card-custom" style="width: 18rem;">' + 
                        `<img src=${item.image} class="card-img-top" alt="...">`  + 
                        `<div class="card-body">`+
                        `<h5 class="card-title" style="display:none;" id=${item.id}>${item.id}</h5>` +
                        `<h5 class="card-title" id=${item.maker}>${item.maker}</h5>`+
                        `<p class="card-text model">${item.model}</p>` +
                        `<p class="card-text year" id=${item.year}>${item.year}</p>` +
                        `<p class="card-text price">N${item.price}</p>` +
                        `<a href="#" class="btn btn-primary btn-custom details" id=${item.id}>Details</a>`+ " " +
                        `<a href="#" class="btn btn-primary btn-custom edit" id=${item.id}>Edit</a>` + " " +
                        `<a href="#" class="btn btn-primary btn-custom delete" id=${item.id}>Delete</a>` + " " +
                        '</div>'
                   }
                })
                $("#res").append(product);
            })
            .fail(function(){
                alert('sorry! car not available at the moment ')
            })
             
        });
        event.preventDefault();
    })
})

$(document).ready(function(e){
   console.log('ready')
    $.getJSON('http://localhost:3000/cars', function(data){
     
        var optionMaker ;
        var optionModel;
        var arr=[]
            
        $.each(data, function(index, item){
            console.log(item.maker)
            
            
            $.each(item, function(key, value){
                if(item.maker === $('.option')){
                    return false
                }

                optionMaker = `<option value="${item.maker}">${item.maker}</option>`
                optionModel = `<option value="${item.model}">${item.model}</option>`
                
            })
            $(".maker").append(optionMaker);
            $(".model").append(optionModel);
        })            
        
   
    })
           
   })
   
   
   
   