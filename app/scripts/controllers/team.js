'use strict';

angular.module('githubleagueClientApp')
  .controller('TeamCtrl', function ($scope) {
    $scope.Players = [
      'Player One',
      'Player Two',
      'Player Three'
    ];
  });
