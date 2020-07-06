$(document).ready(function(){

    $('#resume').on('click', function(e) {
        e.preventDefault();
        window.open(
            './assets/oleg-lozovatyi-resume.pdf',
            '_blank'
        ) 
    })

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

    $('#go-back').on('click', function() {
        window.open(
            './index.html'
        ) 
    })
});
