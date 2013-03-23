'use strict';

angular.module('githubleagueClientApp')
  .controller('TeamCtrl', function ($scope, Team) {
    $scope.Players = [
      'Player One',
      'Player Two',
      'Player Three'
    ];
    $scope.Team = Team.query();
  });
