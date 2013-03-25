'use strict';

angular.module('githubleagueClientApp')
  .controller('TeamCtrl', function ($scope, $routeParams) {
    $scope.teamName = $routeParams.teamName;
    $scope.players = [
      {
        'id': '123',
        'first': 'jim',
        'last': 'jones'
      },
      {
        'id': '2343',
        'first': 'mike',
        'last': 'ronson'
      },
      { 
        'id': '8',
        'first': 'bobby',
        'last': 'strings'
      }
    ];
  });
