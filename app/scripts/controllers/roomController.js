
(function() {
     function RoomCtrl(Rooms) {
		 console.log(Rooms);
        this.Rooms = Rooms;
  }
 
     angular
         .module('blocChat')
         .controller('RoomCtrl', ['Room', RoomCtrl]);
 })();