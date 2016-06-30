//console.log("i am inside index.js");
var $grid;

function truncate() {
  $('.bodyValue').each(function (index) {
    var bodyValue = $(this).text();
    truncated_val = bodyValue.substr(0, 99);
    if (bodyValue.length >= 100) {
      $(this).text(truncated_val + '...');
    }
  });
}

function process(){
    //Grabs the AUTH_TOKEN to be able to update titleValue and bodyValue
    var AUTH_TOKEN = $('meta[name=csrf-token]').attr('content');

    //truncate body on page load
    truncate();

    //ajax to edit/update
    function get_data(el) {
        var p = el.parent()
        var id = p.attr("id");
        var titleValue = p.find('.titleValue').text();
        var bodyValue = p.find('.bodyValue').text();
        var qualityValue = p.find('.qualityValue').text();
        console.log(id + " | " + titleValue + " | " + bodyValue + " | " + qualityValue);
        $.ajax({
                type: "POST",
                data: {
                    authenticity_token: AUTH_TOKEN,
                    _method: 'PUT',
                    idea:{
                      id: id,
                      title: titleValue,
                      body: bodyValue,
                      quality: qualityValue
                    }
                },
                url: '/ideas/' + id,
                headers: {
                    "X-HTTP-Method-Override": "PUT"
                }
            }).done(function() {
                //alert("success");
            })
            .fail(function() {
                //alert("error");
            })
            .always(function() {
              truncate();
            });
    }

    //event listener activates edit/update ajax when leaving .titleValue input
    $('.titleValue').on('blur', function() {
        get_data($(this));
    })

    //event listener activates edit/update ajax when leaving .bodyValue input
    $('.bodyValue').on('blur', function() {
        get_data($(this));
    })

    //upvote changes status of qualities per click
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

    //destroy - deletes and removes idea from page and data
    $('destroy_data').on('click',function(){
      var current_idea = $(this).idea;
      $this.parent().parent().remove()
      $.ajax({
              type: "DELETE",
              url: '/ideas/' + id,
            });
    });
  }

  function toLowerCase(val){
    if(typeof val === "string"){
      return val.toLowerCase();
    }
    return val;
  }

  function setup_search(){
    var title_words;
    var body_words;

    function searchMatch(title, body, searchStr) {
      return title.indexOf(searchStr) >= 0 || body.indexOf(searchStr) >= 0;
    }
    $('#search').keyup(function (event) {
      var input = toLowerCase(event.target.value);

      console.log(input + '|' + title_words + '|' + body_words);
      $('#ideas').children().each(function () {
        title_words = toLowerCase($(this).find('.titleValue').text());
        body_words = toLowerCase($(this).find('.bodyValue').text());
        if (searchMatch(title_words, body_words, input)) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    });
  }

  function setup_sort(){
    $grid = $('.grid').isotope({
      layoutMode: 'vertical',
      getSortData: {
        quality: '.qualityValue',
        title: '.titleValue',
        body: '.bodyValue'
      }
    });

    $('#sort_by_quality').on('click',function(){
      $grid.isotope({ sortBy : 'quality' });
    });

    $('#sort_by_original').on('click',function(){
      $grid.isotope({ sortBy : 'original-order' });
    });
  }
  $(document).ready(function() {
  //$(window).bind('page:change', function(){
    setup_search();
    setup_sort();
    process();


  });
