'use strict';

angular.module('githubleagueClientApp')
  .directive('player', function () {
    return {
      template: '<div class="playerChart"></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        function bubbleChart(data) {
          var max_amount;
          this.data = data;
          this.width = 940;
          this.height = 600;
          // this.tooltip = CustomTooltip("gates_tooltip", 240);
          this.center = {
            x: this.width / 2,
            y: this.height / 2
          };
          this.year_centers = {
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
          this.layout_gravity = -0.01;
          this.damper = 0.1;
          this.vis = null;
          this.nodes = [];
          this.force = null;
          this.circles = null;
          this.fill_color = d3.scale.ordinal().domain(["low", "medium", "high"]).range(["#d84b2a", "#beccae", "#7aa25c"]);
          max_amount = d3.max(this.data, function(d) {
            return parseInt(d.total_amount);
          });
          this.radius_scale = d3.scale.pow().exponent(0.5).domain([0, max_amount]).range([2, 85]);
          this.create_nodes();
          this.create_vis();
          console.log('in');
          return this;
        };

        bubbleChart.prototype.create_nodes = function() {
          var that = this;
          this.data.forEach(function(d) {
            var node;
            node = {
              id: d.id,
              radius: that.radius_scale(parseInt(d.total_amount)),
              value: d.total_amount,
              name: d.grant_title,
              org: d.organization,
              group: d.group,
              year: d.start_year,
              x: Math.random() * 900,
              y: Math.random() * 800
            };
            return that.nodes.push(node);
          });
          return this.nodes.sort(function(a, b) {
            return b.value - a.value;
          });
        };

        bubbleChart.prototype.create_vis = function() {
          var that = this;
          this.vis = d3.select(".playerChart").append("svg").attr("width", this.width).attr("height", this.height).attr("id", "svg_vis");
          this.circles = this.vis.selectAll("circle").data(this.nodes, function(d) {
            return d.id;
          });
          that = this;
          this.circles.enter().append("circle").attr("r", 0).attr("fill", function(d) {
            return that.fill_color(d.group);
          }).attr("stroke-width", 2).attr("stroke", function(d) {
            return d3.rgb(that.fill_color(d.group)).darker();
          }).attr("id", function(d) {
            return "bubble_" + d.id;
          });
          return this.circles.transition().duration(2000).attr("r", function(d) {
            return d.radius;
          });
        };




        var renderChart = function(csv) {
          console.log(csv);
          window.chart = new bubbleChart(csv);
          return window.chart;
        }

        d3.csv("../geodata/fakeuser.csv", renderChart)

      }
    };
  });
