'use strict';

angular.module('githubleagueClientApp')
  .controller('MainCtrl', function ($scope, League) {
    $scope.leaderBoard = [
      'Mark',
      'Gavin',
      'John'
    ];
    // window.league = League.query();
    League.query(function(league) {
      $scope.league = league;
      console.log('inside', league[0].name);
    });


    // $scope.firstPlaceName = $scope.league;
  });
