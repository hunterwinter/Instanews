    let $grid = $('.grid');

$(document).ready(function() {
 
  $('select').on('change', function() {
    let sections = $('.sections :selected').val();
  
    $('.append').hide();

    $('.loading').show();

    $('.picturelist').empty();
 
  $.getJSON('http://api.nytimes.com/svc/topstories/v1/' + sections + '.json?api-key=0bba64eadd85cae4c4718bcca20ce3ab:8:75124074')
  
  .done(function(data) {
    
    let results = data.results;
    let stuff = "";
    let number = 0;

    console.log(results);

      if (results.length === 0) {
        $('.option-menu').append('<p class="append">No stories found.</p>');
        $('.append').show();
      }
      
      else{

           results = results.filter(function(item) {
            return item.multimedia.length;
          }).splice(0,12);

      results.forEach(function(item,  index){
        let img = item.multimedia[4];
        let abst = item.abstract;
        let story = item.url;
      
      $('ul').append('<li class= "box-' + index + '"> <a class="text" href="' + story + '"><p class="writing"> ' + abst +'</p></a> </li>');
            
        $('.box-' + index).css("background-image", "url('" + img.url + "')");
        
      });
    }
})
  
  .always(function() {
        $('.loading').hide();
      
    });
  });
});

















