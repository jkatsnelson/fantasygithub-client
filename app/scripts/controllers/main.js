'use strict';

angular.module('githubleagueClientApp')
  .controller('MainCtrl', function ($scope) {
    $scope.leaderBoard = [
      'Mark',
      'Gavin',
      'John'
    ];
    $scope.leader = $scope.leaderBoard[0]
  });
