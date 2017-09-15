$(document).ready(function() {
    $('form#questions').submit(function(event) {
        $('.jumbotron').fadeOut();
        event.preventDefault();

    });
});
