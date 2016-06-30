//destroy - deletes and removes idea from page and data
function setup_destroy_events(){
  $('destroy_data').unbind('click');
  $('destroy_data').on('click',function(){
    var current_idea = $(this).idea;
    $this.parent().parent().remove()
    $.ajax({
            type: "DELETE",
            url: '/ideas/' + id,
          });
  });
}
