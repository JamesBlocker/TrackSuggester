$(document).ready(function() {
    $('form#questions').submit(function(event) {
        event.preventDefault();
        // $('.jumbotron').fadeOut();
        // $('.cSharp').fadeIn();
        var answer1 = $('input:radio[name=q1]:checked').val();
        var answer2 = $('input:radio[name=q2]:checked').val();
        var answer3 = $('input:radio[name=q3]:checked').val();
        var answer4 = $('input:radio[name=q4]:checked').val();
        var answer5 = $('input:radio[name=q5]:checked').val();
        var answer6 = $('input:radio[name=q6]:checked').val();

        var cSharpPts = 0;
        var javaPts = 0;
        var phpPts = 0;
        var rubyPts = 0;



    });
});
