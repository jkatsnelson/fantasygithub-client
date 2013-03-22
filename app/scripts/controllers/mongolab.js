'use strict';
angular.module('mongolab', ['ngResource']).
    factory('Project', function($resource) {
      var Project = $resource('https://api.mongolab.com/api/1/databases' +
          '/angularjs/collections/projects/:id',
          { apiKey: '4f847ad3e4b08a2eed5f3b54' },
          { update: { method: 'PUT' } }
      );

      Project.prototype.update = function(cb) {
        return Project.update({id: this._id.$oid},
            angular.extend({}, this, {_id:undefined}), cb);
      };

      Project.prototype.destroy = function(cb) {
        return Project.remove({id: this._id.$oid}, cb);
      };

      return Project;
    });

angular.module('mongolab', ['ngResource']).
  factory('User', function($resource) {
    var User = $resource('https://api.mongolab.com/api/1/databases' +
      '/angularjs/collections/users/:id',
      { apiKey: 'VkJNPFm17AUkdKs_06eLWIbYFtuAC7NC'}, {
        update: { method: 'PUT' }
      }
    );
    User.prototype.update = function (cb) {
      return User.update({id: this._id.$oid},
        angular.extend({}, this, {_id:undefined}), cb);
    };
    User.prototype.destroy = function (cb) {
      return User.remove({id: this._id.$oid}, cb);
    };
    return User;
  });