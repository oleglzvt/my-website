$(document).ready(() => {

    // mobile menu button functionality
    $('.header-nav').on('click', () => {
        if($(window).width() <= 720) {
            $('.header-links-mobile').animate({width:'toggle'}, 500);
            $('.menu i').hasClass('fa-bars') ? $('.menu i').removeClass('fa-bars').addClass('fa-times') : $('.menu i').removeClass('fa-times').addClass('fa-bars')
        } 
    })

    // checking the window size to hide the mobile nav menu on resize
    $(window).resize(() => {
        if ($(window).width() > 720) {
            $('#header-links').removeClass('header-links-mobile').addClass('header-links');
        } else if ($(window).width() <= 720) {
            $('#header-links').removeClass('header-links').addClass('header-links-mobile');
        }
    }).resize();

    // slide animation to the section when respective section link is clicked
    const scrollToSection = (sectionId) => {
        let section = $(`[id='${sectionId}']`);
        $('html,body').animate({scrollTop: section.offset().top},'slow');
    }

    $('.arrow-up').on('click', () => {
        scrollToSection('home')
    })
    
    $(".about-link").on('click', () => {
       scrollToSection('about');
    });

    $(".skills-link").on('click', () => {
       scrollToSection('skills');
    });

    $(".projects-link").on('click', () => {
       scrollToSection('projects');
    });

    $(".contact-link").on('click', () => {
       scrollToSection('contact');
    });

    // download cv button functionality
    $('#resume').on('click', (e) => {
        e.preventDefault();
        window.open(
            './assets/oleg-lozovatyi-resume.pdf',
            '_blank'
        ) 
    })

    // trigger the animation on the sections
    $(window).scroll( () => {
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
    $('#numberlicios-github').on('click', () => {
        window.open(
            'https://github.com/oleglzvt/numberlicious',
            '_blank'
        ) 
    })
    
    $('#numberlicios-live').on('click', () => {
        window.open(
            'https://oleglzvt.github.io/numberlicious/',
            '_blank'
        ) 
    })

    $('#pirate-draw-github').on('click', () => {
        window.open(
            'https://github.com/oleglzvt/pirate-card-draw',
            '_blank'
        ) 
    })

    $('#pirate-draw-live').on('click', () => {
        window.open(
            'https://oleglzvt.github.io/pirate-card-draw/',
            '_blank'
        ) 
    })

    $('#a-bitter-parent-github').on('click', () => {
        window.open(
            'https://github.com/oleglzvt/a-bitter-parent',
            '_blank'
        ) 
    })

    $('#a-bitter-parent-live').on('click', () => {
        window.open(
            'https://oleglzvt.github.io/a-bitter-parent/',
            '_blank'
        ) 
    })

    $('#supernatural-github').on('click', () => {
        window.open(
            'https://github.com/oleglzvt/olegLozovatyiProjectThree',
            '_blank'
        ) 
    })

    $('#supernatural-live').on('click', () => {
        window.open(
            'https://oleglzvt.github.io/olegLozovatyiProjectThree/',
            '_blank'
        ) 
    })

    // go back button after submitting the contact form
    $('#go-back').on('click', () => {
        window.location.href = './index.html'
    })

    // slide up button appear condition
    let upBtn = $('#arrow-up');
    upBtn.hide();
    $(window).scroll(() => {
        if ($(window).scrollTop() > 300) {
          upBtn.show();
        } else {
          upBtn.hide();
        }
    });

    // function to switch between desktop and mobile versions of the slide up button
    $(window).resize(() => {
        if ($(window).width() <= 720) {
            upBtn.removeClass('arrow-up').addClass('arrow-up-mobile')
        } else {
            upBtn.removeClass('arrow-up-mobile').addClass('arrow-up')
        }
    }).resize();
});
