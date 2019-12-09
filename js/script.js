$(function(){

 $( "#slider-range" ).slider({
 range: true,
 min: 15000,
 max: 100000,
 step: 1000,
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
 min: 5,
 max: 300,
 values: [ 50, 200 ],
 slide: function( event, ui ) {
 $( "#area" ).val( "от кв.м " + ui.values[ 0 ] + " - до кв.м " + ui.values[ 1 ] );
 }
 });
 $( "#area" ).val( "от кв.м " + $( "#slider-range2" ).slider( "values", 0 ) +
 " - до кв.м " + $( "#slider-range2" ).slider( "values", 1 ) );

});

function getFileName () {

var file = document.getElementById ('file').value;

file = file.replace (/\\/g, "/").split ('/').pop ();

document.getElementById ('file-name').innerHTML = file;

}
