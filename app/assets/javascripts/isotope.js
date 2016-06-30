var $grid;

function setup_sort_events(){
  $grid = $('.grid').isotope({
    layoutMode: 'vertical',
    getSortData: {
      quality: '.qualityValue',
      title: '.titleValue',
      body: '.bodyValue'
    }
  });

  $('#sort_by_quality').unbind('click');
  $('#sort_by_quality').on('click',function(){
    $grid.isotope({ sortBy : 'quality' });
  });

  $('#sort_by_original').unbind('click');
  $('#sort_by_original').on('click',function(){
    $grid.isotope({ sortBy : 'original-order' });
  });
}
