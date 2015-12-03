bucketListApp.controller('DashboardCtrl', 

function ($scope, $http) {
	
	var myAddress = { latitude: 39.143827, longitude: -76.879980 };
	$scope.map = { center: myAddress, zoom: 2 };


});