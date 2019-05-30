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
   
   
   
   