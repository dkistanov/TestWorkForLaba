// Начальная функция

$(document).ready(function(){
    $('.scrollbar-inner').scrollbar();
});

$('.feedback__open').on('click', function() {
    $('.feedback__content').addClass('active')    
})

$('.feedback__close').on('click', function() {
    $('.feedback__content').removeClass('active')    
})
