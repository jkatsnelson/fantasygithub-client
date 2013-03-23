'use strict';

angular.module('githubleagueClientApp', ['mongolab'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/teams', {
        templateUrl: 'views/teams-index.html',
        controller: 'TeamsCtrl'
      })
      .when('/team', {
        templateUrl: 'views/team-show.html',
        controller: 'TeamCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
