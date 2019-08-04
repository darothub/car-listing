$(document).ready(function(e){
   
    $.getJSON('https://car-flux.herokuapp.com/cars', function(data){
     
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
                   
                   $.getJSON(`https://car-flux.herokuapp.com/cars/${id}`, function(data){
                       
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
                       url     : `https://car-flux.herokuapp.com/cars/${formData['id']}`,
                       data    : formData,
                       dataType : 'json',
                       encode   : true
                   })
                   .done(function(data){
                       alert('success')
                       
           
                   });
                   event.preventDefault();
               })
               $('.delete').on('click', function(event){
                   var response = confirm("Are you sure you want to delete?")
                   if(response){
                       var {id} = event.target
                       var {maker} = event.target
                       var formData = {
                           'id'    :$('input[name=id]').val()
                       };
                       
                       $.ajax({
                           type    : 'DELETE',
                           url     : ` https://car-flux.herokuapp.com/cars/${id}`,
                           data    : formData,
                           dataType : 'json',
                           encode   : true
                       })
                       .done(function(data){
                           
                           alert(`item is deleted`)
                           location.reload(true)
                     
               
                       }).fail(function(data){
                           alert('error! can not perform action')
                       })
                   }
                   else{
                       alert("Not deleting")
                   }
           
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
                       url     : `https://car-flux.herokuapp.com/cars/${id}`,
                       dataType : 'json',
                       encode   : true
                   })
                   .done(function(data){
                       
                       // $('display.html').load('.display')
                       // console.log(data)
                       productById = 
                            '<div class="card">' + 
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
                       
                       productImage = `<div class= "card"><img src =${data.image} class="card-img-top" '><div class="card-body"></div></div>`
                       $(".display").slideDown('slow');
                       $("#display").append(productById);
                       $(".car-lists").hide();
                       $('#right-display').append(productImage)
                       $('#right-display').append(productImage)
                       $('#display').append(`<div><p class="lead">Location:</p> <p class="lead">Contact:</p></div>`)
                       // $('#right-display').append(`<p>Contact:</p>`)
                       
                       
                       // window.location.assign('../display.html')
                   }).fail(function(data){
                       alert('error! can not perform action')
                   })
                   event.preventDefault();
               })
           })
           
   })

   

   $(document).ready(function(){

    var CLOUDINARY_URL =  'https://api.cloudinary.com/v1_1/carflux/image/upload';
    var CLOUDINARY_UPLOAD_PRESET = 'of6bplnq'
     $("#upload").on('click', function(e){
        var image = $('#inputGroupFile04')
        var file = image[0].files[0] 
        var formData = {
            'maker' : $('input[name=maker]').val(),
            'model' : $('input[name=model]').val(),
            'year' : $('input[name=year]').val(),
            'price' : $('input[name=price]').val(),
            
        };       
        console.log(file)
        var formDatas = new FormData()
        formDatas.append('file', file)
        formDatas.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
        $('#uploading-msg').show().fadeOut(3000)

        $.ajax({
            type    : 'POST',
            url     : CLOUDINARY_URL,
            data    : formDatas,
            dataType : 'json',
            header:{
                'Content_Type':'application/x-www-form-urlencoded'
            },
            processData: false,
            cache: false,
            contentType: false,
            encode   : true
        })
       
        .done(function(data){
            
            $('.img-thumbnail').attr('src', data.secure_url)
            $('.img-thumbnail').show()
            $('#imageUrl').val(data.secure_url)
            formData['image'] = $('#imageUrl').val()
            
            console.log(data.secure_url)

            $('#myForm').on('submit', function(event){
                $.ajax({
                        type    : 'POST',
                        url     : `https://car-flux.herokuapp.com/cars`,
                        data    : formData,
                        dataType : 'json',
                        encode   : true
                    })
                    .done(function(data){
                        console.log(data)
                        alert('sucess')
                        
            
                    })
                    .fail(function(err){
                        console.log(err)
                    })
                event.preventDefault()   

            })

        })
  
        .fail(function(data){
            console.log(data)
        })
        
       e.preventDefault()

      
     })
     
   })
   

   
   console.log('hey')

   $(document).ready(function(){
    $("#btn-back").on('click', function(e){
      e.preventDefault()
      window.location.assign('products.html')
    })
  })

 
   
 


   