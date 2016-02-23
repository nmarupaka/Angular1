; (function(){
    angular
        .module('FirstApp',[
            'ui.router'           
        ]).config(['$stateProvider', '$urlRouterProvider', '$httpProvider', routeConfiguration])
    
    function routeConfiguration($stateProvider, $urlRouterProvider, $httpProvider) {
         $stateProvider
            .state('user', {
                url: '/user',
                templateUrl: '/templates/user.template.html',
                controller: 'UserController',
            }).state('user.detail', {
                url: '/:id',
                templateUrl: '/templates/user.detail.template.html',
                controller: 'UserDetailsController',
                controllerAs: 'vm',
            }).state('person', {
                url: '/person',
                templateUrl: '/templates/person.template.html',
                controller: 'PersonController',
            });
         
         return $urlRouterProvider.otherwise('user')
    }
})();