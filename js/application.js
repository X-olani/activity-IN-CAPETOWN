$(document).ready(function() {
  dataType:'Jsonp'

  var all_acts = [];
  $.getJSON( "js/activity.json", function( act_data ) {

      $.each( act_data.act, function( key, val ) {
          var instance_of_acts = new Items(val);
          all_acts.push(instance_of_acts);
          $('p').append($( instance_of_acts.location));
      });

    });
});
