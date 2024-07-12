// ContactService.js

var app = angular.module('profile');

app.service('ContactService', ['$http', function($http) {
    this.submitContact = function(contactData) {
        return $http.post('http://localhost:3000/api/contact', contactData);
    };
}]);
