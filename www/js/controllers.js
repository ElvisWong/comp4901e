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

.controller('DiscussionForumCtrl', function($scope, $ionicModal, $state, $timeout, $http) {

  $http.get('js/post.json').success(function(response){
    $scope.posts = null;
    $scope.posts = response;
    console.log($scope.posts);
  });

  $scope.postData = {};

   $ionicModal.fromTemplateUrl('templates/createTopic.html', {
    id: '1',
    scope: $scope,
    backdropClickToClose: false,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal_post = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeModal = function() {
      $scope.modal_post.hide();
  };

  $scope.successModal = function() {
      $scope.modal_post.hide();
      $state.go('menu.post');
  };

  // Open the login modal
  $scope.openModal = function() {
      $scope.modal_post.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doModal = function() {
      console.log('Adding post...', $scope.postData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeModal();
    }, 1000);
  };

  $scope.addCategory = function() {

  }
})

.controller('PostCtrl', function($scope, $stateParams, $state) {
  $scope.data = {};
  $scope.showSearch = false;

  $scope.createBoard = function() {
    $state.go('menu.board');
  };
  $scope.showSearchBar = function() {
      $scope.showSearch = true;
  };
  $scope.hideSearchBar = function() {
      $scope.showSearch = false;
  };
  $scope.clearSearch = function() {
    $scope.data.searchQuery = '';
  };

})

.controller('BoardCtrl', function($scope, $ionicModal, $state, $timeout){
    $scope.recruitData = {};

   $ionicModal.fromTemplateUrl('templates/recruitment.html', {
    id: '1',
    scope: $scope,
    backdropClickToClose: false,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal_recruit = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeModal = function() {
      $scope.modal_recruit.hide();
  };

  $scope.successModal = function() {
      $scope.modal_recruit.hide();
      $state.go('menu.board');
  };

  // Open the login modal
  $scope.openModal = function() {
      $scope.modal_recruit.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doModal = function() {
      console.log('Adding position...', $scope.recruitData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeModal();
    }, 1000);
  };
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
