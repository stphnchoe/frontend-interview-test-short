$(document).ready(() => {
  $('form').on('submit', function(e) {
    let date = new Date();
    let $input = $(e.currentTarget).find('input').first();
    let $post = $('<p></p>').text(`${$input.val()} - ${date.getSeconds()}`);

    e.preventDefault();
    $('#page').prepend($post);
    
    //resets input field
    $input.val('');
  })
});