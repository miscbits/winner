$(document).ready(function(){
    WebFontConfig = {
        google: { families: [ 'Roboto:400,300:latin' ] }
    };
    (function() {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
          '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
    })();

    $("body").on("click", function(event) {
        if ( !($("#wakeup").is(":checked")) ) {
            $("#wakeup").prop('checked', true);
        }
        else if ( !($("#stretch").is(":checked")) ) {
            $("#stretch").prop('checked', true);
        }
        else if ( !($("#breathe").is(":checked")) ) {
            $("#breathe").prop('checked', true);
        }
        if($("#wakeup").is(":checked") && $("#stretch").is(":checked") && $("#breathe").is(":checked")) {
            alert("Congratulations! You have now been successful!")
        }
    })
});
