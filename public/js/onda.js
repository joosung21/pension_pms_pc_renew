$(function () {
  
  // Bootstrap Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Bootstrap Modal on table row click
  $('#exampleModal').modal({
    keyboard: true,
    backdrop: "static",
    show:false,
  }).on('show', function(){ //subscribe to show method
        var getIdFromRow = $(event.target).closest('tr').data('id'); //get the id from tr
      //make your ajax call populate items or what even you need
      $(this).find('#exampleModal').html($('<b> Order Id selected: ' + getIdFromRow  + '</b>'))
  });
})