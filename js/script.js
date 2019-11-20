$(function(){
 
 $( "#slider-range" ).slider({
 range: true,
 min: 15000,
 max: 100000,
 values: [ 30000, 60000 ],
 slide: function( event, ui ) {
 $( "#price" ).val( "от ₽ " + ui.values[ 0 ] + " - до ₽ " + ui.values[ 1 ] );
 }
 });
 $( "#price" ).val( "от ₽ " + $( "#slider-range" ).slider( "values", 0 ) +
 " - до ₽ " + $( "#slider-range" ).slider( "values", 1 ) );
 
});

$(function(){
 
 $( "#slider-range2" ).slider({
 range: true,
 min: 15000,
 max: 100000,
 values: [ 30000, 60000 ],
 slide: function( event, ui ) {
 $( "#area" ).val( "от ₽ " + ui.values[ 0 ] + " - до ₽ " + ui.values[ 1 ] );
 }
 });
 $( "#area" ).val( "от ₽ " + $( "#slider-range2" ).slider( "values", 0 ) +
 " - до ₽ " + $( "#slider-range2" ).slider( "values", 1 ) );
 
});

function getFileName () {

var file = document.getElementById ('file').value;

file = file.replace (/\\/g, "/").split ('/').pop ();

document.getElementById ('file-name').innerHTML = file;

}