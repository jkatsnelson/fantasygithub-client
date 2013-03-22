'use strict';

angular.module('githubleagueClientApp')
  .controller('TeamCtrl', function ($scope) {
    $scope.Teams = [
      'HTML5 Badoingadoings',
      'Angular Agents of Rock',
      'Karma Koders'
    ];
  });
