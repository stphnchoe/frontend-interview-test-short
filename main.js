$(document).ready(() => {
  $('#search').on('submit', 'form', function(e) {
    let date = new Date();
    let $input = $(e.currentTarget).find('input').first();
    let $post = $('<p></p>').text(`${$input.val()} - ${date.getSeconds()}`);

    console.log('this is this', this);
    console.log('this is target', e.currentTarget);
    e.preventDefault();
    $('#page').prepend($post);
    
    //resets input field
    $input.val('');
  })
});