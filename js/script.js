$(function() {
console.log("ahoj");

const img_gal = $(function(img, e) {
    // Cache variables
    const $overlay = $('<div id="overlay"></div>');
    const $image = $("<img>");
    const $caption = $('<p class="caption"></p>');

    // add image to overlay
    $overlay.append($image);

    // add overlay
    $("body").append($overlay);

    // Capture click event on a link to img
    const img_links = $('#image_gallery a');

    img_links.click(function(e) {
        e.preventDefault();
        const img_loc = $(this).attr('href');
        $image.attr('src', img_loc);
        //add caption to overlay
        $caption.insertAfter($image);
        $image.addClass('bordered_img');
        $overlay.slideDown();

        // const caption_text = $(this).children('img').attr('alt');
        // $caption.text(caption_text);

    });

    $overlay.click(function() {
        $overlay.slideUp();
    });
});



$('.tab-container').find('a').click(function(e) {
    const theKeyword = $(this).data('keyword');
    console.log(theKeyword);
    e.preventDefault();
    $('.tab-container').find('a').removeClass('tab-selected');
    $(this).addClass('tab-selected');

    $('.item-container').find('li').show();
    $('.item-container').find('li').not(theKeyword).hide();

});



});
