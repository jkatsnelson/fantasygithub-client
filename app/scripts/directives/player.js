'use strict';

angular.module('githubleagueClientApp')
  .directive('player', function () {
    return {
      template: '<div class="playerChart"></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        var bubbleChart,
            page,
            __bind;

        __bind = function(fn, this){
          return function() {
            return fn.apply(this, arguments);
          };
        };

        bubbleChart = (function() {

          var maxAmount;
          this.data = data;
          this.width = 800;
          this.height = 500;
          this.center = {
            x: this.width / 2,
            y: this.height / 2
          };
          this.typeCenters = {
            "2008": {
              x: this.width / 3,
              y: this.height / 2
            },
            "2009": {
              x: this.width / 2,
              y: this.height / 2
            },
            "2010": {
              x: 2 * this.width / 3,
              y: this.height / 2
            }
          };
          this.chartGravity = 0.1;
          this.damper = 0.1;
          this.vis = null;
          this.force = null;
          this.nodes = [];
          this.circles = null;
          //map an input domain to an putput range of colors for us
          this.fillColor = d3.scale.ordinal().domain(["low", "medium", "high"]).range(["#d84b2a", "#beccae", "#7aa25c"]);
          maxAmount = d3.max(data, function(d) {
            return parseInt(d.total_amount);
          });
          this.radiusScale = d3.scale.pow().exponent(0.5).domain([0, maxAmount]).range(2, 85);

        })();

      }
    };
  });
