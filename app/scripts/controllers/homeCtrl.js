

(function() {
     function HomeCtrl($scope, $uibModal, Room, Message, $cookies) {
		 
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
		 
		 $scope.addMessage = function(){
			 var newMessage = document.getElementsByName('messageContent')[0].value;
			 var userName = $cookies.get('blocChatCurrentUser');
			 
			 var message = {
				 message: newMessage,
				 userName: userName;
			 };
			 
			 Message.send(message);
		 }
		 
			  
 	};
 
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['$scope', '$uibModal', 'Room','Message','$cookies', HomeCtrl]);
 })();