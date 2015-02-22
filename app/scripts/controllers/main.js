'use strict';

/**
 * @ngdoc function
 * @name votingWithFireApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the votingWithFireApp
 */
angular.module('votingWithFireApp')
  .controller('MainCtrl', function ($scope,$rootScope,$location,simpleLogin,$route) {
    // $rootScope.message = "hello world#{#{$@#{@#{$#{@$@#{$@#{$@#{$@#{$@#{$@#{$}}}}}}}}}}}";
    $rootScope.$route = $route;
    $scope.user = simpleLogin.getUser();
    console.log($scope.user);
    $rootScope.userName = $scope.user.twitter.username;

    // $rootScope.loc = $location.path();
  });
