function setup_events(){
  setup_search_events();
  setup_sort_events();
  setup_destroy_events();
  setup_quality_events();
  setup_idea_events();
}
  $(document).ready(function() {
  //$(window).bind('page:change', function(){
    setup_events();
  });
