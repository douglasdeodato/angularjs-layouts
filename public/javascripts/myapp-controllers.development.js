angular.module('myApp').controller('CitiesListCtrl',['$scope',function($scope){
	    $scope.cities =[
 		{name:'dublin', id:99},
 		{name:'trim', id:1}
 	];
}])
angular.module('myApp').controller('StreetListCtrl',['$scope',function($scope){
	    $scope.street =[
 		{name:'1 smithfield', id:3},
 		{name:'2 river plate', id:1333},
 		{name:'3 river plate', id:1}
 	];
}])
angular.module('myApp').controller('UsersListCtrl',['$scope',function($scope){
	    $scope.users =[
 		{name:'douglas', id:3},
 		{name:'bruno', id:1}
 	];
}])