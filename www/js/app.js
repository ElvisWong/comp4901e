// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.constants', 'starter.directives', 'angular-timeline', 'oitozero.ngSweetAlert', 'tabSlideBox'])

.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, USER_ROLES) {
  $stateProvider


   .state('app', {
    url:'/app/',
    templateUrl: 'templates/starter.html',
    controller: 'AppCtrl'
  })
  .state('login', {
    url:'/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })
  .state('register', {
    url:'/register',
    templateUrl: 'templates/register.html',
    controller: 'RegisterCtrl'
  })
  .state('menu', {
    url:'/menu',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('menu.home', {
    url:'/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'DiscussionForumCtrl'
      }

    }
  })

  .state('menu.post', {
    url: '/home/:postId',
    views: {
      'menuContent': {
        templateUrl: 'templates/post.html',
        controller: 'PostCtrl'
      }
    }
  })

  .state('menu.board', {
    url: '/home/createBoard/:createBoardId',
    views: {
      'menuContent': {
        templateUrl: 'templates/createBoard.html',
        controller: 'BoardCtrl'
      }
    }
  })

  .state('menu.groups', {
    url: '/groups',
    views: {
      'menuContent': {
        templateUrl: 'templates/groups.html'
      }
    }
  })

  .state('menu.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('menu.pitching', {
      url: '/pitching',
      views: {
        'menuContent': {
          templateUrl: 'templates/pitching.html',
          controller: 'PitchingCtrl'
        }
      }
    })

  .state('menu.single', {
    url: '/pitching/:PlaylistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // .state('protected-route', {
  //   url: '/protected',
  //   resolve: {
  //     auth: function resolveAuthentication(AuthResolver) { 
  //       return AuthResolver.resolve();
  //     }
  //   }
  // });
  // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/');
})

;

