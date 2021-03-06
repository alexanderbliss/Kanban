myApp.service('UserService', function ($http, $location) {
    console.log('UserService Loaded');
    var self = this;
    self.userObject = {};
    self.infoResult = { data: [] }


    self.getuser = function () {
        console.log('UserService -- getuser');
        return $http.get('/user').then(function (response) {
            if (response.data.username) {
                // user has a curret session on the server
                self.userObject.userName = response.data.username;
                self.userObject.id = response.data.userId
                self.userObject.real_name = response.data.name
                self.userObject.email = response.data.email
                console.log('UserService -- getuser -- User Data: ', self.userObject);
            } else {
                console.log('UserService -- getuser -- failure');
                // user has no session, bounce them back to the login page
                $location.path("/home");
            }
        }, function (response) {
            console.log('UserService -- getuser -- failure: ', response);
            $location.path("/home");
        });
    }

    self.logout = function () {
        console.log('UserService -- logout');
        $http.get('/user/logout').then(function (response) {
            console.log('UserService -- logout -- logged out');
            $location.path("/home");
        });
    }
});
