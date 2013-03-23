'use strict';

angular.module('githubleagueClientApp')
  .controller('PlayerCtrl', function ($scope, $routeParams) {
    $scope.playerId = $routeParams.playerId;
  });
