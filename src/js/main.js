$(document).ready(function() {
  $('.add-solution').on('click', function(event) {
    var $form = $(event.target).parent().parent();
    var link = $form.find('#solution').val();

    if (/^http/.test(link)) {
      $('.solutions').append("<li class='collection-item'><a href='" + link + "' target='_blank'>" + link + "</li>");
      $form.find('#solution').val('');
    } else {
      Materialize.toast('Make sure you add a URL!', 3000);
    }
  });
});
