(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        $stateProvider
            .state('landing', {
                url: '/',
                controller: 'MainCtrl',
                controllerAs: 'mc',
                templateURL: '/templates/landing.html'
            });
    }
    angular
        .module('chat', ['ui.router', 'firebase'])
        .config(config);
}());
