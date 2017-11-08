$(function () {
  
  // Bootstrap Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Bootstrap Popover
  $('[data-toggle="popover"]').popover();

  // Bootstrap Modal
  $('#exampleModal').modal({
    keyboard: true,
    show:false,
  }).on('show', function(){ //subscribe to show method
        var getIdFromRow = $(event.target).closest('tr').data('id'); //get the id from tr
      //make your ajax call populate items or what even you need
      $(this).find('#exampleModal').html($('<b> Order Id selected: ' + getIdFromRow  + '</b>'))
  });
  $('#exampleModal2').modal({
    keyboard: true,
    show:false,
  }).on('show', function(){ //subscribe to show method
        var getIdFromRow = $(event.target).closest('tr').data('id'); //get the id from tr
      //make your ajax call populate items or what even you need
      $(this).find('#exampleModal').html($('<b> Order Id selected: ' + getIdFromRow  + '</b>'))
  });

  $('.chart-row.header .dd').click(function(){
    // var disabled = false;
    // disabled = $(this).hasClass('disabled');
    // if(disabled == false) {
      $(this).toggleClass('selected');
    // }
  });

})

var closing = false;

function toggleView(target){  
  switch (target) {
    case "package":      
      $(".chart-row.package").slideToggle();
      break;
    case "stock":      
      $(".room-stock").slideToggle();
      break;
    case "price":      
      $(".room-price").slideToggle();
      break;
    case "closing":      
      if(closing == false) {
        console.log('work');
        $(".chart-row.package").hide();
        $(".room-stock").hide();
        $(".room-price").hide();
        $(".closeout").fadeIn();
        closing = true;
      } else {
        $(".closeout").hide();
        $(".room-stock").fadeIn();
        $(".chart-row.package").fadeIn();
        closing = false;
      }      
      break;
    default:
      break;
  }
}

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 265) {
    $('.sticky-date').fadeIn(50);
  } else {
    $('.sticky-date').fadeOut(50);
  }
});

