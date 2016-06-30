//upvote changes status of qualities per click
function setup_quality_events(){
  var qualities = ['swill','plausible','genius'];
  $('.upvote').on('click',function(){
      var current_quality = $(this).parent().parent().find('.qualityValue').text()
      var current_quality_index = qualities.indexOf(current_quality);
      var next_quality = current_quality_index >= 2 ? qualities[2] : qualities[current_quality_index+1];
      $(this).parent().parent().find('.qualityValue').text(next_quality);
  });
  //downvote changes status of qualities per click
  $('.downvote').on('click',function(){
      var current_quality = $(this).parent().parent().find('.qualityValue').text()
      var current_quality_index = qualities.indexOf(current_quality);
      var next_quality = current_quality_index >= 2 ? qualities[1] : qualities[current_quality_index-1];
      //console.log(next_quality);
      $(this).parent().parent().find('.qualityValue').text(next_quality);
  });
}
