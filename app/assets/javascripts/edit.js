function get_data(el){
  var p = el.parent()
  var id = p.attr("id");
  var titleValue = p.find('.titleValue').text();
  var bodyValue = p.find('.bodyValue').text();
  var qualityValue = p.find('.qualityValue').text();
  //$.ajax(
  console.log(id + " | " + titleValue + " | " + bodyValue + " | " + qualityValue);
}

$('.titleValue').on('blur',function(){
   get_data($(this));
})

$('.bodyValue').on('blur',function(){
   get_data($(this));
})

var AUTH_TOKEN = $('meta[name=csrf-token]').attr('content');
