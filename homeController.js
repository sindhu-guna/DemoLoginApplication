//homeController.js
(function () {
    'use strict';
    angular
    .module('app')
    .controller('HomeController', HomeController);
    HomeController.$inject = ['UserService', '$rootScope'];
    function HomeController(UserService, $rootScope) {
    var vm = this;
    vm.showUsers = false;
    vm.currentUser = null;
    vm.allUsers = [];
    initController();
    function initController() {
    loadCurrentUser();
    }
    function loadCurrentUser() {
    UserService.getByUsername($rootScope.globals.currentUser.username)
    .then(function (user) {
    vm.currentUser = user;
    });
    }
    }
    })();