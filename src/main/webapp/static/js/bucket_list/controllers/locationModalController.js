bucketListApp.controller('LocationModalCtrl', 

function ($scope, $http) {
	
	$scope.searchLocation = function() {
		var geocoder;
		geocoder = new google.maps.Geocoder();
		var location = $scope.location;
		var address = location.address;
		
		getCoordinates(function(coordinates) {
			location.latitude = coordinates.geometry.location.lat();
			location.longitude = coordinates.geometry.location.lng();
			// Since this is an Async callback, Angular does not know when to update
			// the front end model, needs to add this following line of code
			$scope.$apply();
		});
		
		function getCoordinates(callback) {
			
			geocoder.geocode( { 'address': address}, function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					var resultLocation = results[0];
					callback(resultLocation);
				} else {
					alert("Geocode was not successful for the following reason: " + status);
				}
			});
		}
	};


	$scope.pingToMap = function() {
		alert("ping to map")
	};
	
}); 





