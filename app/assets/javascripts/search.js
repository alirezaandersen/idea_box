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
