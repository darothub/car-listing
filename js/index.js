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
        var div = '<div class="card-container-custom" id="res"></div>'
        $.ajax({
            type    : 'GET',
            url     : 'http://localhost:3000/cars',
            dataType : 'json',
            encode   : true
        })
        .done(function(data){
            $.each(data, function(index, item){
                if(item.maker === formData['maker']){
                    console.log(item)
                    $.each(item, function(key, value){
                        // console.log(item)
                        product = '<div class="card card-custom" style="width: 18rem;">' + 
                        `<img src=${item.image} class="card-img-top" alt="...">`  + 
                        `<div class="card-body">`+
                        `<h5 class="card-title" style="display:none;" id=${item.id}>${item.id}</h5>` +
                        `<h5 class="card-title" id=${item.maker}>${item.maker}</h5>`+
                        `<p class="card-text model">${item.model}</p>` +
                        `<p class="card-text year" id=${item.year}>${item.year}</p>` +
                        `<p class="card-text price">N${item.price}</p>` +
                        `<a href="#" class="btn btn-primary btn-custom details" id=${item.id}>Details</a>`+ " " +
                        `<a href="#" class="btn btn-primary btn-custom edit" style="display: none;" id=${item.id}>Edit</a>` + " " +
                        `<a href="#" class="btn btn-primary btn-custom delete" style="display: none;" id=${item.id}>Delete</a>` + " " +
                        '</div>'
                        
                     
                    })
                    // $('.car-list').append($("#res"))
                    $('.car-list').html($("#res").append(product)).hide().fadeIn(1500);
                    
               }
                
            })
           
            
        })
        .fail(function(){
            alert('sorry! server error ')
        })
        event.preventDefault();
    })
})

$(document).ready(function(e){
   console.log('ready')
    $.getJSON('http://localhost:3000/cars', function(data){
     
        var optionMaker ;
        var optionModel;
        var objMaker={}
        var objModel = {}
        var arrMaker;
        var arrModel;
            
        $.each(data, function(index, item){
            
            // console.log(data[index]['maker'] )
            objMaker[data[index]['maker']] = 1
            objModel[data[index]['model']] = 1
            
            arrMaker = Object.keys(objMaker)
            arrModel = Object.keys(objModel)
       
            
            
        })
        // console.log(arrModel)   
        $.each(arrMaker, function(key){
            //    if(item['maker'] === data[index]['maker'] ){
            //        console.log(item['maker']) 
            //        return false
            //    }
            console.log(arrMaker[key])
               optionMaker = `<option value="${arrMaker[key]}">${arrMaker[key]}</option>`
            
               $(".maker").append(optionMaker);
                // return false
        })        
        $.each(arrModel, function(key){
            
            // console.log(arrModel[key])
               optionModel = `<option value="${arrModel[key]}">${arrModel[key]}</option>`
               $(".model").append(optionModel);
                
        }) 
        
    })
           
   })
   
   
   
   