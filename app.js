var myApp = angular.module("profile", ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'FrontEnd/Home/Home.html',
            controller: 'HomeController'
        })
        .when('/contact', {
            templateUrl: 'FrontEnd/Contact/Contact.html',
             controller: 'ContactController'
             
        })
        .when('/projects', {
            templateUrl: 'FrontEnd/Projects/Projects.html',
            controller:'ProjectsController'
        })
        .when('/about', {
            templateUrl: 'FrontEnd/About/About.html',
            controller:'AboutController'
        })
        .when('/skills',{
            templateUrl: 'FrontEnd/Skills/Skills.html',
             controller:'SkillsController'
        })

        .otherwise({
            redirectTo: '/'
        });
}]);
