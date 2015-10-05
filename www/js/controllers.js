angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};
  $scope.regData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    id: '1',
    scope: $scope,
    backdropClickToClose: false,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal_login = modal;
  });

  $ionicModal.fromTemplateUrl('templates/register.html', {
    id: '2',
    scope: $scope,
    backdropClickToClose: false,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal_reg = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeModal = function(index) {
    if (index == 1) 
      $scope.modal_login.hide();
    else 
      $scope.modal_reg.hide();
  };

  $scope.successModal = function(index) {
    if (index == 1) {
      $scope.modal_login.hide();
      $state.go('menu.home');
    }else {
      $scope.modal_reg.hide();
      $state.go('app');
    }
  }

  // Open the login modal
  $scope.openModal = function(index) {
    if (index == 1)
      $scope.modal_login.show();
    else 
      $scope.modal_reg.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doModal = function(index) {
    if (index == 1)
      console.log('Doing login', $scope.loginData);
    else
      console.log('Doing register', $scope.regData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeModal(index);
    }, 1000);
  };

})

.controller('DiscussionForumCtrl', function($scope) {
  $scope.posts = [
  { title: 'Post 1', author: 'Elvis Wong', id: 1 },
  { title: 'Post 2', author: 'Elvis Wong', id: 2 },
  { title: 'Post 3', author: 'Elvis Wong', id: 3 },
  { title: 'Post 4', author: 'Elvis Wong', id: 4 },
  { title: 'Post 5', author: 'Elvis Wong', id: 5 },
  { title: 'Post 6', author: 'Elvis Wong', id: 6 },
  { title: 'Post 7', author: 'Elvis Wong', id: 7 },
  { title: 'Post 8', author: 'Elvis Wong', id: 8 }
  ];
})

.controller('PostCtrl', function($scope, $stateParams) {
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
