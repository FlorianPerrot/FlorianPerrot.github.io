function stringGen(len){
  var text = " ";
  var charset = "abcdefghijklmnopqrstuvwxyz";
  for( var i=0; i < len; i++ )
    text += charset.charAt(Math.floor(Math.random() * charset.length));
  return text;
}

function ajoutFeuille(monSol){
  monSol.append('<span class="feuille">'+stringGen(5)+'</span>');
}

$(document).ready(function(){
  var $feuilles = $('.feuilles');
  var $menu1 = $('.menu1');
  var $video = $("#bgvid");

  $feuilles.click(function(){
    console.log('Ajout d\'une feuille.');
    ajoutFeuille($feuilles);
  });

  $('#small-menu').click(function() {
    console.log("Action sur le menu");
    toggleNav();
  });

  $video.click(function(){
    if($video.get(0).paused){
      console.log("Pause video");
      $video.get(0).play();}
    else{
      console.log("Play video");
      $video.get(0).pause();}
  });

  $('.menu1').click(function(){
    $video.get(0).play();
    $('#site-wrapper').removeClass('show-nav');
  })
});
