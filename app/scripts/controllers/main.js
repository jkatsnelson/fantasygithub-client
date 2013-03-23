'use strict';

angular.module('githubleagueClientApp')
  .controller('MainCtrl', function ($scope, League) {
    $scope.leaderBoard = [
      'jQuery',
      'Javascript',
      'Bootstrap'
    ];
    // window.league = League.query();
    League.query(function(league) {
      $scope.league = league;
      console.log('inside', league[0].name);
    });
  });
