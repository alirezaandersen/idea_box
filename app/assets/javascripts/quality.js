
//upvote changes status of qualities per click
function setup_quality_events(){
    var qualities = ['swill','plausible','genius'];

    $('.upvote').unbind('click');
    $('.upvote').on('click',function(){
        var next_quality = current_quality >= 2 ? qualities[2] : qualities[current_quality_index+1];
        console.log("current_quality: " + current_quality + " | next_quality: " + next_quality);
        $(this).parent().parent().find('.qualityValue').text(next_quality);
    });
    //downvote changes status of qualities per click
    $('.downvote').unbind('click');
    $('.downvote').on('click',function(){
        var next_quality = current_quality <= 0 ? qualities[0] : qualities[current_quality_index-1];
        $(this).parent().parent().find('.qualityValue').text(next_quality);
    });
}

  function current_quality(){
    var current_quality = $(this).parent().parent().find('.qualityValue').text();
    var current_quality_index = qualities.indexOf(current_quality);
  }
