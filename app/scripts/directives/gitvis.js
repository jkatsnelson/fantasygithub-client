'use strict';

angular.module('githubleagueClientApp')
  .directive('gitvis', function () {
    return {
      template: '<div class="chart"><button>run</button></div>',
      restrict: 'E',
      val: '=',
      link: function postLink(scope, element, attrs) {
        // element.text('this is the gitvis directive');
        d3.tsv('/commitByTimeandLocation.csv', function (data) {
          // console.log(data);
          var data = scope.data,
              w = 360,
              h = 180,
              x = d3.scale.ordinal().domain(data).rangePoints([0, w], 1),
              y = d3.scale.ordinal().domain(data).rangePoints([0, h], 2);

          var svg = d3.select(element[0].firstChild).append('svg')
              .attr('height', h)
              .attr('width', w);

          svg.selectAll('.little')
              .data(data)
              .enter().append('circle')
              .attr('class', 'little')
              .attr('cx', x)
              .attr('cy', y)
              .attr('r', 20 );

          d3.select('.chart button').on('click', function() {
            svg.selectAll('.select').remove();

            svg.selectAll('.select')
                .data(data)
              .enter().append('circle')
                .attr('class', 'select')
                .attr('cx', x)
                .attr('cy', y)
                .attr('r', 55)
                .style('fill', 'none')
                .style('stroke', 'red')
                .style('stroke-width', 6)
                .style('stroke-opacity', 8e-6)
              .transition()
                .duration(815)
                .attr('r', 20)
                .style('stroke-opacity', 1);
          });
        });
      }
    };
  });
