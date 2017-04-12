(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
	  
	  console.log(rooms);
	  
	var addRoom = function(room){
		
		 rooms.$add(room).then(function(ref) {
		  var id = ref.key;
		  console.log("added record with id " + id);
		  rooms.$indexFor(id); // returns location in the array
		});
	};
	  
	var roomName = function(id){
		var desiredRooms = rooms.filter(m => m.$id === id);
		if(desiredRooms.length){
			return desiredRooms[0].$value;
		}
		return "";
		
	}

    return {
      all: rooms,
	  add: addRoom,
	  getRoomById: roomName
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();

