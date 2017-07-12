console.log("JS LOADED");
$ = jQuery;
$( document ).ready(function() {

  $('.cta').click(function() {
    var p = $( "p:first" );
    $( "p:last" ).text( "scrollTop:" + p.scrollTop() );
  });

  console.log('hello');
  // $('.menu-icon').click(function() {
  //   console.log('hello');
  //   $(this).toggleClass('highlight');
  // });
});
