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

.factory('userService', function() {

    var user = {
        token: '',
        username: 'guest',
        jobtitle: ''
    };

    var factory = {
        setCurrentUser: setCurrentUser,
        getUserToken: getUserToken,
        getUsername: getUsername,
        getJobtitle: getJobtitle,
        clearCurrentUser: clearCurrentUser
    };

    return factory;

    function setCurrentUser(data) {
        user.token = data.id;
        user.username = data.username;
        user.jobtitle = user.jobtitle;
    };

    function getUserToken() {
        return user.token;
    };

    function getUsername() {
        return user.username;
    };

    function getJobtitle() {
        return user.jobtitle;
    };


    function clearCurrentUser() {
        user.token = '';
        user.username = '';
        user.jobtitle = '';
    };
})

.factory('postService', function() {

    var post = {
        title: '',
        create_time: '',
        last_modified_time: '',
        is_recruiting: false,
        categories: [],
        view_num: 0,
        like_num: 0,
        id: null,
        memberId: null
    };

    var factory = {
        setCurrentPost: setCurrentPost,
        getPostId: getPostId,
        getPostTitle: getPostTitle,
        clearCurrentPost: clearCurrentPost
    };

    return factory;

    function setCurrentPost(data) {
        post.id = data.id;
        post.title = data.title;
    };

    function getPostId() {
        return post.id;
    };

    function getPostTitle() {
        return post.title;
    };

    function clearCurrentPost() {
        post.id = '';
        post.title = '';
    };
});
