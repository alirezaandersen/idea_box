function setup_idea_events(){
    //Grabs the AUTH_TOKEN to be able to update titleValue and bodyValue
    var AUTH_TOKEN = $('meta[name=csrf-token]').attr('content');

    //truncate body on page load
    truncate();

    //ajax to edit/update
    function get_data(el) {
        var p = el.parent();
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
    $('.titleValue').unbind('blur');
    $('.titleValue').on('blur', function() {
        get_data($(this));
    });

    //event listener activates edit/update ajax when leaving .bodyValue input
    $('.bodyValue').unbind('blur');
    $('.bodyValue').on('blur', function() {
        get_data($(this));
    });

  }
