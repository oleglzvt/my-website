$(document).ready(function(){

    // mobile menu button functionality
    $('.header-nav').on('click', function() {
        if($(window).width() <= 720) {
            $('.header-links-mobile').animate({width:'toggle'}, 500);
        }
    })

    // checking the window size to hide the mobile nav menu on resize
    $(window).resize(function() {
        if($(window).width() > 720) {
            $('.header-links-mobile').hide();
        }
    }).resize();

    // slide animation to the section when respective section link is clicked
    const scrollToSection = (sectionId) => {
        let section = $(`section[id='${sectionId}']`);
        $('html,body').animate({scrollTop: section.offset().top},'slow');
    }
    
    $("#about-link").on('click', function() {
       scrollToSection('about');
    });

    $("#skills-link").on('click', function() {
       scrollToSection('skills');
    });

    $("#projects-link").on('click', function() {
       scrollToSection('projects');
    });

    $("#contact-link").on('click', function() {
       scrollToSection('contact');
    });

    // download cv button functionality
    $('#resume').on('click', function(e) {
        e.preventDefault();
        window.open(
            './assets/oleg-lozovatyi-resume.pdf',
            '_blank'
        ) 
    })

    // trigger the animation on the sections
    $(window).scroll(function () {
        $('section, .project').each(function () {
            let elementPosition = $(this).offset().top;
            let elementHeight = $(this).height();
            let topOfWindow = $(window).scrollTop();
    
            if (elementPosition < topOfWindow + elementHeight && elementPosition + elementHeight > topOfWindow) {
                $(this).addClass('animate');
            } 
        });
    });

    // links to the github repos and live host of the projects
    $('#numberlicios-github').on('click', function() {
        window.open(
            'https://github.com/oleglzvt/numberlicious',
            '_blank'
        ) 
    })
    
    $('#numberlicios-live').on('click', function() {
        window.open(
            'https://oleglzvt.github.io/numberlicious/',
            '_blank'
        ) 
    })

    $('#pirate-draw-github').on('click', function() {
        window.open(
            'https://github.com/oleglzvt/pirate-card-draw',
            '_blank'
        ) 
    })

    $('#pirate-draw-live').on('click', function() {
        window.open(
            'https://oleglzvt.github.io/pirate-card-draw/',
            '_blank'
        ) 
    })

    $('#supernatural-github').on('click', function() {
        window.open(
            'https://github.com/oleglzvt/olegLozovatyiProjectThree',
            '_blank'
        ) 
    })

    $('#supernatural-live').on('click', function() {
        window.open(
            'https://oleglzvt.github.io/olegLozovatyiProjectThree/',
            '_blank'
        ) 
    })

    // go back button after submitting the contact form
    $('#go-back').on('click', function() {
        window.location.href = './index.html'
    })
});
