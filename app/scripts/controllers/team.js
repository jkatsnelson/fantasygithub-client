'use strict';

angular.module('githubleagueClientApp')
  .controller('TeamCtrl', function ($scope, $routeParams) {
    $scope.teamName = $routeParams.teamName;

    $scope.players = [
      'Player One',
      'Player Two',
      'Player Three'
    ];
  });
