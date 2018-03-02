myApp.controller('KanbanController', function (UserService, KanbanService, $http,$location) {
let vm = this ; 

vm.KanbanService = KanbanService
vm.UserService = UserService
});