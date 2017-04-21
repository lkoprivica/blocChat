

(function() {
     function HomeCtrl($scope, $uibModal, Room, Message, $cookies) {
		 
		 //{all: stuff, add: function}
		 
	     this.Rooms = Room.all;
		 this.messages = [];
		 this.roomName = "";
		 
		 
		 var _this = this;
		 
		 _this.currentRoomId = null;
		 
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
			 _this.currentRoomId = $id;
			  
	     } 	 
		 
		 $scope.addMessage = function(){
			 var newMessage = document.getElementsByName('messageContent')[0].value;
			 var userName = $cookies.get('blocChatCurrentUser');
			 
			 var message = {
				 content: newMessage,
				 username: userName,
				 sentAt: new Date(),
				 roomId: _this.currentRoomId
				 
			 };
			 
			 Message.send(message);
		 }
		 
			  
 	};
 
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['$scope', '$uibModal', 'Room','Message','$cookies', HomeCtrl]);
 })();