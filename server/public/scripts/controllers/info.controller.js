myApp.controller('InfoController', function ($http, UserService) {
    console.log('InfoController created');
    var vm = this;

    vm.userService = UserService;
    vm.userObject = UserService.userObject;


    vm.infoResult = UserService.infoResult;


});
