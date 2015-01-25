function stringGen(len){
  var text = " ";
  var charset = "abcdefghijklmnopqrstuvwxyz";
  for( var i=0; i < len; i++ )
    text += charset.charAt(Math.floor(Math.random() * charset.length));
  return text;
}

function ajoutArbre(monSol){
  monSol.append('<span>'+stringGen(5)+'</span>');
}

function suprArbre(monSol){
  monSol.children("span").last().remove();
}

$(document).ready(function(){
  var $arbres = $('footer .arbres');
  var $menu1 = $('.menu1');
  var $video = $("#bgvid");
  var $seed = $('footer .seed');
  var $axe = $('footer .axe');

  /* GESTION DES ARBRES */
  $seed.click(function(){
    if($arbres.width() > (($arbres.children().length+1)*$arbres.children().last().width()) ){
      ajoutArbre($arbres);
      console.log("Ajout d\'un arbre");
    }
  });
  $axe.click(function(){
    console.log('supr un arbre.');
    suprArbre($arbres);
  });

  /* GESTION DU MENU */
  $('#small-menu').click(function() {
    console.log("Action sur le menu");
    toggleNav();
  });
  $('.menu3').click(function(){
    $('#site-wrapper').removeClass('show-nav');
  });
  $('.menu1').click(function(){
    $video.get(0).play();
    $('#site-wrapper').removeClass('show-nav');
  });

  /* GESTION VIDEO */
  $video.click(function(){
    if($video.get(0).paused){
      console.log("Pause video");
      $video.get(0).play();}
    else{
      console.log("Play video");
      $video.get(0).pause();}
  });

});
