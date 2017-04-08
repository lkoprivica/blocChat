(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
	  
	var addRoom = function(room){
		
		 rooms.$add(room).then(function(ref) {
		  var id = ref.key;
		  console.log("added record with id " + id);
		  rooms.$indexFor(id); // returns location in the array
		});
	}

    return {
      all: rooms,
	  add: addRoom
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();

