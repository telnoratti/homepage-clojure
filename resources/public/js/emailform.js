function emailForm() {
    $.post("/email", 
    {
        from: $("html body div#content.sweet-justice div#c3 form#emailform input#from").val(),
        subject: $("html body div#content.sweet-justice div#c3 form#emailform input#subject").val(),
        message: $("html body div#content.sweet-justice div#c3 form#emailform textarea#message").val(),
    }, 
    function (data) {
        $("html body div#content.sweet-justice div#c3 form#emailform p#result").text(data);
    })
    $("html body div#content.sweet-justice div#c3 form#emailform p#result").text("Sending...");
}

var emailre = new RegExp("([A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]{2,4})");


$($("html body div#content.sweet-justice div#c3 form#emailform input#from").keyup(function() {
    match = $(this).val().match(emailre);
    if(match && match[1] == $(this).val()) {
        $(this).css({color: "black"});
    }
    else {
        $(this).css({color: "red"});
    }
}).keyup());