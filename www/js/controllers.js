angular.module('starter.controllers', ['ngCordova'])


.controller('VideoCtrl', function($scope, $cordovaCapture) {
  $scope.clip = '';

  $scope.captureVideo = function() {
    var options = { limit: 1, duration: 20 };
    alert("jisgs");
    $cordovaCapture.captureVideo(options).then(function(videoData) {
      alert("kddhyhddfgy");
    }, function(err) {
      // An error occurred. Show a message to the user
    });


  };

})
