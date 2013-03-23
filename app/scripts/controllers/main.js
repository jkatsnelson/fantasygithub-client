'use strict';

angular.module('githubleagueClientApp')
  .controller('MainCtrl', function ($scope, League) {
    $scope.leaderBoard = [
      'Mark',
      'Gavin',
      'John'
    ];
    $scope.league = League.query();
    // console.log($scope.league);
  });
