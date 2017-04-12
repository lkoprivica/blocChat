

(function() {
     function HomeCtrl($scope, $uibModal, Room, Message) {
		 
		 //{all: stuff, add: function}
		 
	     this.Rooms = Room.all;
		 this.messages = [];
		 this.roomName = "";
		 
		 var _this = this;
		 
		 $scope.addRoom = function(){
			$uibModal.open({
            templateUrl: '/templates/modal.html',
            size: 'sm',
            controller: 'ModalCtrl as modal'
            });
		 };

	  	 $scope.showmessages = function($id){
			 _this.roomName = Room.getRoomById($id);
			 _this.messages = Message.getByRoomId($id);
			  
	     } 
		 
  	};
 
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['$scope', '$uibModal', 'Room','Message', HomeCtrl]);
 })();