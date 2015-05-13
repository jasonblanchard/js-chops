$(document).ready(function() {
  $('.add-solution').on('click', function(event) {
    var $form = $(event.target).parent().parent();
    var link = $form.find('#solution').val();

    $('.solutions').append("<li class='collection-item'>" + link + "</li>");
  });
});
