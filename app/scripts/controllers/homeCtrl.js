

(function() {
     function HomeCtrl(Room) {
		
        this.Rooms = Room.all;
		 
		 
		
	  
	  console.log(this.Rooms);
		 
  	};
 
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', HomeCtrl]);
 })();