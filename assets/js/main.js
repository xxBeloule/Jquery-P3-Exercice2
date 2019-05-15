$(document).ready(function() {
    var nbclics = 0;
  $('#buttonPLUS').click(function () {
   nbclics++;
    $('#number').val(nbclics);
  });
$(function() {
  $('#buttonMOIN').click(function () {
    nbclics--;
    $('#number').val(nbclics);
  });
});
});
