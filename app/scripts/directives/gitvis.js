'use strict';

angular.module('githubleagueClientApp')
  .directive('gitvis', function () {
    return {
      template: '<div class="chart"></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // element.text('this is the gitvis directive');

        var data = [32, 57, 112],
            dataEnter = data.concat(293),
            dataExit = data.slice(0, 2),
            w = 360,
            h = 180,
            x = d3.scale.ordinal().domain([57, 32, 112]).rangePoints([0, w], 1),
            y = d3.scale.ordinal().domain(data).rangePoints([0, h], 2);

        var svg = d3.select(element).append('svg')
            .attr('height', h)
            .attr('width', w);

        svg.selectAll('.little')
            .data(data)
            .enter().append('circle')
            .attr('class', 'little')
            .attr('cx', x)
            .attr('cy', y)
            .attr('r', 20 );

      }
    };
  });
