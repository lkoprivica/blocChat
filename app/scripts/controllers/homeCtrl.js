

(function() {
     function HomeCtrl(Room) {
		
        this.Rooms = Room;
		 this.messages = [
			 1, 2, 3, 4, 5
		 ]
  }
 
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', HomeCtrl]);
 })();