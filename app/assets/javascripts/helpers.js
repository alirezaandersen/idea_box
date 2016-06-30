function truncate() {
  $('.bodyValue').each(function (index) {
    var bodyValue = $(this).text();
    truncated_val = bodyValue.substr(0, 99);
    if (bodyValue.length >= 100) {
      $(this).text(truncated_val + '...');
    }
  });
}

function toLowerCase(val){
  if(typeof val === "string"){
    return val.toLowerCase();
  }
  return val;
}
