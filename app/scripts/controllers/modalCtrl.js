//inject the proper dependencies for using modal
//Add methods to open, close and submit data to firebase from the modal.

(function() {
	function ModalCtrl($uibModalInstance, $scope, Room){
		this.Rooms = Room.all;
		
		$scope.create = function() {
			var roomName = document.getElementsByName('roomName')[0].value;
			Room.add(roomName);
			$uibModalInstance.close();
			
		};
		
		$scope.cancel = function(){
			$uibModalInstance.dismiss();
		};
	};
	
 angular
        .module('blocChat')
        .controller('ModalCtrl', [ '$uibModalInstance', '$scope', 'Room', ModalCtrl])
})();