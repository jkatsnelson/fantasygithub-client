'use strict';

angular.module('githubleagueClientApp')
  .directive('gitvis', function () {
    return {
      template: "<div id='mapContainer'></div>",
      restrict: 'E',
      val: '=',
      link: function postLink(scope, element, attrs) {
        // element.text('this is the gitvis directive');
        function draw(ht) {
          $("#mapContainer").html("<svg id='map' xmlns='http://www.w3.org/2000/svg' width='100%' height='" + ht + "'></svg>");
          var map = d3.select("svg");
          var width = $("svg").parent().width();
          var height = ht;

          // I discovered that the unscaled equirectangular map is 640x360. Thus, we
          // should scale our map accordingly. Depending on the width ratio of the new
          // container, the scale will be this ratio * 100. You could also use the height
          // instead. The aspect ratio of an equirectangular map is 2:1, so that's why
          // our height is half of our width.

          var projection = d3.geo.equirectangular().scale((width/640)*600).translate([width/2, height/2]);
          var path = d3.geo.path().projection(projection);
          d3.json('../geodata/world-map.json', function(collection) {
              map.selectAll('path').data(collection.features).enter()
                  .append('path')
                  .attr('d', path)
                  .attr("width", width)
                  .attr("height", width/2);
          });
        }
        draw($("#mapContainer").width()/2);







      }
    };
  });
