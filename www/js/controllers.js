angular.module('starter.controllers', [])

/* Starter Controller */
.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state, AuthService, $ionicPopup) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  

  $scope.openLogin = function() {
    $state.go('login');
  };
  
  $scope.openSignUp = function() {
    $state.go('register');
  }

})

.controller('LoginCtrl', function($rootScope, $scope, $state, AuthService, $ionicPopup, $ionicLoading){

  // $scope.currentUser = null;
  // $scope.userRoles = USER_ROLES;
  // $scope.isAuthorized = AuthService.isAuthorized;
 
  // $scope.facebookLogin = function() {
  //       $cordovaOauth.facebook("CLIENT_ID_HERE", ["email", "read_stream", "user_website", "user_location", "user_relationships"]).then(function(result) {
  //           // results
  //           $localStorage.accessToken = result.access_token;
  //           $location.path("/menu/home");
  //       }, function(error) {
  //           // error
  //           alert("There was a problem signing in!  See the console for logs");
  //           console.log(error);
  //       });
  // };
  // $cordovaOauth.dropbox(string appKey);
    // $cordovaOauth.digitalOcean(string clientId, string clientSecret);
    // $cordovaOauth.google(string clientId, array appScope);
    // $cordovaOauth.github(string clientId, string clientSecret, array appScope);
    // $cordovaOauth.linkedin(string clientId, string clientSecret, array appScope, string state);
    // $cordovaOauth.instagram(string clientId, array appScope);
    // $cordovaOauth.box(string clientId, string clientSecret, string state);
    // $cordovaOauth.reddit(string clientId, string clientSecret, array appScope);
    // $cordovaOauth.twitter(string consumerKey, string consumerSecretKey);
    // $cordovaOauth.meetup(string consumerKey);
    // $cordovaOauth.foursquare(string clientId);
    // $cordovaOauth.salesforce(string loginUrl, string clientId);
    // $cordovaOauth.strava(string clientId, string clientSecret, array appScope);

  $scope.setCurrentUser = function (user) {
    //$scope.currentUser = user;
  };

  $scope.login = function (credentials) {
    $ionicLoading.show({
      template: "loading"
    });
    AuthService.login(credentials).then(function (user) {
      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
      console.log(user);
      $scope.setCurrentUser(user);
      $ionicLoading.hide();
      $state.go('menu.home');
    }, function () {
      $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
    });
  };

    $scope.closeLogin = function() {
    $state.go('app');
  };

})

.controller('RegisterCtrl', function($scope, $state, $ionicPopup, $ionicLoading, Session, Test) {
  $scope.user = {
    email: '',
    username: '',
    password: '',
    jobtitle: '',
    description: ''
  };

  $scope.testing = function(msg) {
    console.log(msg);
    Test.create(msg, function(msg){
      console.log(msg);
    }, function(e) {
      console.log(e);
    });
  };

  // $scope.register = function(regData) {
  //   console.log("start Register");
  //   $scope.$broadcast("autofill:update");
  //   $ionicLoading.show({
  //     template: "loading registration..."
  //   });
  //   test.register(user, function(msg) {
  //       console.log(msg);
  //       var alertPopup = $ionicPopup.alert({
  //         title: "Done Register",
  //         template: "Welcome to cooper"
  //       });
  //       $state.go('app');
  //       $ionicLoading.hide();
  //     }
  //     ,function(e) {
  //       $scope.message = e;
  //       console.log(e);
  //       $ionicLoading.hide();
  //     });  
  //   console.log("end Register");
  // };

  $scope.closeReg = function() {
    $state.go('app');
  };


})

.controller('DiscussionForumCtrl', function($httpBackend, $ionicHistory, AuthService, $scope, $ionicModal, $state, $timeout, $http, $location) {

  // $scope.init = function() {
  //       if($localStorage.hasOwnProperty("accessToken") === true) {
  //           $http.get("https://graph.facebook.com/v2.2/me", { params: { access_token: $localStorage.accessToken, fields: "id,name,gender,location,website,picture,relationship_status", format: "json" }}).then(function(result) {
  //               $scope.profileData = result.data;
  //           }, function(error) {
  //               alert("There was a problem getting your profile.  Check the logs for details.");
  //               console.log(error);
  //           });
  //       } else {
  //           alert("Not signed in");
  //           $location.path("/login");
  //       }
  //   };

  // $http.get('json/post.json').success(function(response){
  //   $scope.posts = response;
  //   console.log($scope.posts);
  // });

  $scope.postData = {};
  $scope.groupData = {};
  $scope.showButton = false;
  $scope.posts = {};
  $scope.activate = activate;
  $scope.getPost = getPost;



  activate();

  $scope.logout = function() {
    AuthService.logout();
    $state.go('login');
  };

  function activate() {
    getPost();
  };

  function getPost() {
    $http.get('json/post.json')
      .success(function(data) {
        $scope.posts = data; 
        console.log($scope.posts);
      })
      .error(function(e) {
        console.log('Error msg on getPost: ' + e);
      });
  };

  $scope.openButton = function() {
    if($scope.showButton == true)
      $scope.showButton = false;
    else
      $scope.showButton = true;
  };

   $ionicModal.fromTemplateUrl('templates/createTopic.html', {
    id: '1',
    scope: $scope,
    backdropClickToClose: false,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal_post = modal;
  });

  $ionicModal.fromTemplateUrl('templates/createGroup.html', {
    id: '2',
    scope: $scope,
    backdropClickToClose: false,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal_group = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeModal = function(index) {
    if (index == 1) 
      $scope.modal_post.hide();
    else 
      $scope.modal_group.hide();
  };

  $scope.successModal = function(index) {
    if (index == 1) {
      $scope.modal_post.hide();
      $state.go('menu.post', {postId: 1});
    }else {
      $scope.modal_group.hide();
      $state.go('menu.board', {createBoardId: 1});
    }
  }

  // Open the login modal
  $scope.openModal = function(index) {
    if (index == 1)
      $scope.modal_post.show();
    else 
      $scope.modal_group.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doModal = function(index) {
    if (index == 1)
      console.log('Creating Post', $scope.postData);
    else
      console.log('Creating group', $scope.groupData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeModal(index);
    }, 1000);
  };

})

.controller('PostCtrl', function($scope, $stateParams, $http, $state, $filter) {
  $scope.data = {};
  $scope.showSearch = false;
  $scope.postId = $stateParams.postId;
  $scope.boardId = $scope.postId;

  $scope.createBoard = function() {
    $state.go('menu.board', {createBoardId: $scope.boardId});
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

.controller('BoardCtrl', function($scope, $ionicModal, $state, $timeout, $stateParams){
    $scope.recruitData = {};

   $ionicModal.fromTemplateUrl('templates/createGroup.html', {
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
