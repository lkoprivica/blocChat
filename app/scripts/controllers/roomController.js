
(function() {
     function RoomCtrl(Rooms) {
		 console.log("roomCtrl");
        this.Rooms = Rooms.all;
		 
  }
 
     angular
         .module('blocChat')
         .controller('RoomCtrl', ['Room', RoomCtrl]);
 })();