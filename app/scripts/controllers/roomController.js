
(function() {
     function RoomCtrl(Rooms) {
		 console.log("roomCtrl");
        this.Rooms = Rooms;
		 
		 
  }
 
     angular
         .module('blocChat')
         .controller('RoomCtrl', ['Room', RoomCtrl]);
 })();