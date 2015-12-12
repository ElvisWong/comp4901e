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
