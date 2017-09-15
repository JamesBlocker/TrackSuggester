$(document).ready(function() {
    $('.container').height($(window).height());
    $('img').hide();
    $('.jumbotron h1').fadeIn(1500);
    $('img').fadeIn(2000);
    $('.jumbotron h2').fadeIn(2500);
    $('.jumbotron h3').fadeIn(3500);
    $('.jumbotron h4').fadeIn(4500);

    setTimeout(function() {
        $('.jumbotron#splash').fadeOut(1000);
    }, 6000);

    setTimeout(function() {
        $('body').css("background-color", "#c2cbd3");
        $('#questions').fadeIn();
    }, 7000);

    $('form#questions').submit(function(event) {
        event.preventDefault();

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

        $('#questions').fadeOut(1000);

        if (answer1 === 'option1') {
            phpPts += 1;
        } else if (answer1 === 'option2') {
            javaPts += 1;
        } else if (answer1 === 'option3') {
            cSharpPts += 1;
        }else if (answer1 === 'option3') {
            rubyPts += 1;
        }

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

        bestLanguage = Math.max(phpPts, javaPts, cSharpPts, rubyPts);

        if (cSharpPts === bestLanguage && bestLanguage !== 0) {
            setTimeout(function() {
                $('.cSharpPanel').fadeIn(1000);
            }, 1000);
            setTimeout(function() {
                $('body').css("background-color", "#d8ac95");
            }, 1200);
        } else if (javaPts === bestLanguage && bestLanguage !== 0) {
            setTimeout(function() {
                $('.javaPanel').fadeIn(1000);
            }, 1000);
            setTimeout(function() {
                $('body').css("background-color", "#95d89d");
            }, 1500);
        } else if (phpPts === bestLanguage && bestLanguage !== 0) {
            setTimeout(function() {
                $('.phpPanel').fadeIn(1000);
            }, 1000);
            setTimeout(function() {
                $('body').css("background-color", "#b795d8");
            }, 1200);
        } else if (rubyPts === bestLanguage && bestLanguage !== 0) {
            setTimeout(function() {
                $('.rubyPanel').fadeIn(1000);
            }, 1000);
            setTimeout(function() {
                $('body').css("background-color", "#d89595");
            }, 1200);
        } else {
            setTimeout(function() {
                $('.oopsPanel').fadeIn(1000);
            }, 1000);
            setTimeout(function() {
                $('body').css("background-color", "#cc4747");
            }, 1200);
        }
    });

    $('button#refresh').click(function() {
        location.reload();
    });
});
