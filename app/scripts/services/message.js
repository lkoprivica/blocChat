(function() {
  function Message($firebaseArray) { 
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    return {
      getByRoomId: function (roomId) {
		  return messages.filter(m => m.roomId === roomId);
      },
	
	  send: function(message){
		  messages.$add(message).then(function(){return;})
	  }

		
      }
  	};
   
  
angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();

