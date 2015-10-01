angular.module('myApp', [])
.controller('show_hide',['$scope',function($scope){
	    $scope.data = {
            show: true,
            hide: false
        };
}])