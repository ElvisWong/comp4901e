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
  { title: 'Post 1 - Hello World Project', author: 'Elvis Wong', like: 13, view: 368, type: "cd-icon-location.svg", content: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', date: 'Oct 5, 2015', time: "23:30:30", id: 1 },
  { title: 'Post 2', author: 'Elvis Wong', like: 13, view: 368, type: "cd-icon-movie.svg", content: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', date: 'Oct 5, 2015', time: "23:30:30", id: 2 },
  { title: 'Post 3', author: 'Elvis Wong', like: 13, view: 368, type: "cd-icon-picture.svg", content: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', date: 'Oct 5, 2015', time: "23:30:30", id: 3 },
  { title: 'Post 4', author: 'Elvis Wong', like: 13, view: 368, type: "cd-icon-location.svg", content: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', date: 'Oct 5, 2015', time: "23:30:30", id: 4 },
  { title: 'Post 5', author: 'Elvis Wong', like: 13, view: 368, type: "cd-icon-movie.svg", content: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', date: 'Oct 5, 2015', time: "23:30:30", id: 5 },
  { title: 'Post 6', author: 'Elvis Wong', like: 13, view: 368, type: "cd-icon-picture.svg", content: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', date: 'Oct 5, 2015', time: "23:30:30", id: 6 },
  { title: 'Post 7', author: 'Elvis Wong', like: 13, view: 368, type: "cd-icon-location.svg", content: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', date: 'Oct 5, 2015', time: "23:30:30", id: 7 },
  { title: 'Post 8', author: 'Elvis Wong', like: 13, view: 368, type: "cd-icon-movie.svg", content: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', date: 'Oct 5, 2015', time: "23:30:30", id: 8 }
  ];
})

.controller('PostCtrl', function($scope, $stateParams, $state) {
  $scope.createBoard = function() {
    $state.go('menu.board');
  };
})

.controller('BoardCtrl', function($scope){

})

.controller('PitchingCtrl', function($scope) {
  $scope.pitchingVideoList = [
    { title: 'Reggae', id: 1, teamName: 'Project Group 12' },
    { title: 'Chill', id: 2, teamName: 'Project Group 12' },
    { title: 'Dubstep', id: 3, teamName: 'Project Group 12' },
    { title: 'Indie', id: 4, teamName: 'Project Group 12' },
    { title: 'Rap', id: 5, teamName: 'Project Group 12' },
    { title: 'Cowbell', id: 6, teamName: 'Project Group 12' }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
