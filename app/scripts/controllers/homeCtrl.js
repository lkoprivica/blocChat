

(function() {
     function HomeCtrl($scope, $uibModal, Room) {
		 
		 //{all: stuff, add: function}
		 
	     this.Rooms = Room.all;
		 
		 $scope.addRoom = function(){
			 console.log('modal call')
			$uibModal.open({
            templateUrl: '/templates/modal.html',
            size: 'sm',
            controller: 'ModalCtrl as modal'
            });
		 };
	   console.log(this.Rooms);
		 
  	};
 
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['$scope', '$uibModal', 'Room', HomeCtrl]);
 })();