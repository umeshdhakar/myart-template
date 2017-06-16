$(function () {

    if (window.innerWidth < 800) {
        $('.options').removeClass('btn-group-vertical').addClass('btn-group');
    };
    $('.headline').hide().slideDown('bounce');

    $('#type').change(function () {
        if ($(this).val() == 'text') {
            $('.textarea').show();
        } else
            $('.textarea').hide();
    });
    $('.videotype').click(function () {
        if ($(this).val() == "url") {
            $('.youtube').show();
            $('.upload').hide();
        }
        if ($(this).val() == "local") {
            $('.youtube').hide();
            $('.upload').show();
        }
    });
    $('#media').carousel({
        pause: true,
        interval: false,
    });
    $('.thumbnail > img').click(function () {
        $('.mediaview>img').attr('src', ($(this).attr('src')));
    })

});