$( document ).ready(function() {
  console.log('hello');
  $('.menu-icon').click(function() {
    console.log('hello');
    $(this).toggleClass('highlight');
  });
});
