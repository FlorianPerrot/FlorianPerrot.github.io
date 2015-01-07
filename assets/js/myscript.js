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
  $feuilles.click(function(){
    console.log('Ajout d\'une feuille.');
    ajoutFeuille($feuilles);
  });
});
