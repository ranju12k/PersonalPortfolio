myApp.controller('HomeController', ['$scope', '$location', function($scope, $location) {
    $scope.navigateToContact = function() {
        $location.path('/contact');
    };
}]);
