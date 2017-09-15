$(document).ready(function() {
    $('form#questions').submit(function(event) {
        event.preventDefault();
        $('.jumbotron').fadeOut();
        // $('.cSharpPanel').fadeIn();


        var answer1 = $("input:radio[name=q1]:checked").val();
        var answer2 = $('input:radio[name=q2]:checked').val();
        var answer3 = $('input:radio[name=q3]:checked').val();
        var answer4 = $('input:radio[name=q4]:checked').val();
        var answer5 = $('input:radio[name=q5]:checked').val();
        var answer6 = $('input:radio[name=q6]:checked').val();
        var cSharpPts = 0;
        var javaPts = 0;
        var phpPts = 0;
        var rubyPts = 0;

        alert(answer1);

        if (answer1 === 'option1') {
            phpPts += 1;
        } else if (answer1 === 'option2') {
            javaPts += 1;
        } else if (answer1 === 'option3') {
            cSharpPts += 1;
        }else if (answer1 === 'option3') {
            rubyPts += 1;
        }

        alert('c#1' + cSharpPts);
        if (answer2 === 'option1') {
            rubyPts += 1;
        } else if (answer2 === 'option2') {
            cSharpPts += 1;
        } else if (answer2 === 'option3') {
            javaPts += 1;
        }else if (answer2 === 'option3') {
            phpPts += 1;
        }

        if (answer3 === 'option1') {
            phpPts += 1;
        } else if (answer3 === 'option2') {
            rubyPts += 1;
        } else if (answer3 === 'option3') {
            javaPts += 1;
        }else if (answer3 === 'option3') {
            cSharpPts += 1;
        }

        if (answer4 === 'option1') {
            rubyPts += 1;
        } else if (answer4 === 'option2') {
            phpPts += 1;
        } else if (answer4 === 'option3') {
            cSharpPts += 1;
        }else if (answer4 === 'option3') {
            javaPts += 1;
        }

        if (answer5 === 'option1') {
            phpPts += 1;
        } else if (answer5 === 'option2') {
            javaPts += 1;
        } else if (answer5 === 'option3') {
            cSharpPts += 1;
        }else if (answer5 === 'option3') {
            rubyPts += 1;
        }

        if (answer6 === 'option1') {
            rubyPts += 1;
        } else if (answer6 === 'option2') {
            cSharpPts += 1;
        } else if (answer6 === 'option3') {
            javaPts += 1;
        }else if (answer6 === 'option3') {
            phpPts += 1;
        }

        alert('c#2' + cSharpPts);
        bestLanguage = Math.max(phpPts, javaPts, cSharpPts, rubyPts);
        alert('best' + bestLanguage);

        //
        if (cSharpPts === bestLanguage) {
            $('.cSharpPanel').fadeIn();
        } else if (javaPts === bestLanguage) {
            $('.javaPanel').fadeIn();
        } else if (phpPts === bestLanguage) {
            $('.phpPanel').fadeIn();
        } else if (rubyPts === bestLanguage) {
            $('.rubyPanel').fadeIn();
        } else {
            $('.oopsPanel').fadeIn();
        }

    });
});
