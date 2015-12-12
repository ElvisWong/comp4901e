angular.module('starter.services',[])

.service('Session', function () {

    var session = {};

    session.create = function(sessionId, userId, userRole) {
        session.id = sessionId;
        session.userLogin = userId;
        session.userRole = userRole;
    };

    session.destroy = function () {
        session.id = null;
        session.userLogin = null;
        session.userRole = null;
    };

    return session;
})

.factory('authenticate', function($http, $cookieStore, $location, $rootScope, $state, $stateParams){
  var isLogged = false;

  try {
        isLogged = $cookieStore.get('user') ? true : false;
    } catch (err) {
        // seems like passport is assigning user data to client side.
        // deliberate try-catch and do nothing here to alleviate this problem
        // console.log(err);
    }
    var isAdmin = false;
    var isShare = false;
    var noteCount = 0;

    var service = {
        isLogged: isLogged,
        isAdmin: isAdmin,
        isShare: isShare,
        noteCount: noteCount,
        setAdmin: setAdmin,
        setNoteCount: setNoteCount,
        login: login,
        logout: logout,
        verify: verify,
        register: register,
        resetPassword: resetPassword,
        changePassword: changePassword,
        save: save,
        profile: profile
    };

    setAdmin();
    setNoteCount();

    return service;


    function login(user) {
        return $http.post("/api/account/login", user);
    }
    function logout() {
        $http.get('/api/account/logout');
        $cookieStore.remove('user');
        $cookieStore.remove('notifications');
        $location.path('/login');
    }
    function save(user, file) {
        var fd = new FormData();
        fd.append("user", angular.toJson(user));
        fd.append('timestamp', Date.now());
        if (file) fd.append("upload", file.file);
        return $http.post("/api/account/save", fd, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        });
    }
    function setNoteCount() {
        var notes;
        try {
            service.noteCount = $cookieStore.get('notifications');
        } catch(err) {
        }
    }
    function setAdmin() {
        var user;
        try {
            user = $cookieStore.get('user');
        } catch(err) {
        // seems like passport is assigning user data to client side.
        // deliberate try-catch and do nothing here to alleviate this problem
        // console.log(err);
        }
        if (user) service.isAdmin = user.group === 'admin';
        else service.isAdmin = false;
        if (user) service.isShare = user.group === 'share';
        else service.isShare = false;
    }
    function verify(user) {
        return $http.post("/api/account/verify", user);
    }
    function register(user) {
        return $http.post("/api/account/register", user );
    }
    function profile(urlParams) {
        return $http.post('/api/account/profile', { urlParams: urlParams });
    }
    function resetPassword(user) {
        return $http.post('/api/account/reset', { user: user });
    }
    function changePassword(user, hash) {
        return $http.post('/api/account/password', { user: user, hash: hash });
    }

});