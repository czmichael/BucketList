bucketListApp.controller('LeftSidebarCtrl', 

function ($scope, $http, $uibModal) {
	
	$scope.openLocationModal = function() {
		
		$uibModal.open({
			animation: $scope.animationsEnabled,
		    	templateUrl: 'locationModal.html',
		    	//controller: 'ModalInstanceCtrl',
		    	//size: size,
		      
		});
		
	};


}); 
