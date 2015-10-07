var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
	$scope.name = 'World';

	$scope.go = function() {

		$scope.msg = 'clicked';
	}

	$scope.back = function() {

		$scope.backmsg = 'you where in the top and back again :)';
	}
});