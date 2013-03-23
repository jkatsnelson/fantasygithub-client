'use strict';

angular.module('githubleagueClientApp')
  .controller('TeamsCtrl', function ($scope) {
    $scope.Teams = [
      'HTML5 Badoingadoings',
      'Angular Agents of Rock',
      'Karma Koders'
    ];
  });
