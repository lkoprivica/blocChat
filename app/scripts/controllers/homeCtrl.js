

(function() {
     function HomeCtrl($scope, $uibModal, Room, Message, $cookies) {
		 
		 //{all: stuff, add: function}
		 
	     this.Rooms = Room.all;
		 this.messages = [];
		 this.roomName = "";
		
		 
		 
		 var _this = this;
		 $scope.messageInput = "";
		 
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
			 var newMessage = $scope.messageInput;
			 var userName = $cookies.get('blocChatCurrentUser');
			 
			 var currentTime = new Date();
			 
			 //var timeString = "";
			 //timeString += currentTime.getMonth() + "-" + currentTime.getDate() + "-" + currentTime.getYear(); ///...and so on...
			 
			 var message = {
				 content: newMessage,
				 username: userName,
				 sentAt: currentTime.toString(),
				 roomId: _this.currentRoomId
				 
			 };
			 
			 Message.send(message, function(messages){
				 _this.messages = messages;
				 $scope.messageInput = "";
				 
			 });
			 
		 }
		 
			  
 	};
 
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['$scope', '$uibModal', 'Room','Message','$cookies', HomeCtrl]);
 })();