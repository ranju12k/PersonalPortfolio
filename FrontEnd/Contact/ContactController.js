// ContactController.js

var app = angular.module('profile');

app.controller('ContactController', ['$scope', '$location', 'ContactService', '$window', function($scope, $location, ContactService, $window) {
    $scope.submitContactForm = function() {
        var newContact = {
            name: $scope.name,
            email: $scope.email,
            message: $scope.message
        };

        ContactService.submitContact(newContact)
            .then(function(response) {
                if (response.data.success) {
                    console.log('Message sent successfully');
                    $window.alert('Your message has been received.');
                    $location.path('/projects');
                } else {
                    console.error('Error sending message');
                }
            })
            .catch(function(error) {
                console.error('Error sending message', error);
            });
    };
}]);

