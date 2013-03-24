'use strict';

angular.module('githubleagueClientApp')
  .controller('MainCtrl', function ($scope, League) {
    $scope.leaderBoard = [
      'jQuery',
      'Javascript',
      'Bootstrap'
    ];

    // window.league = League.query();
    $scope.data = [12,44,78];
  });
