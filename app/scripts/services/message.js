(function() {
  function Message($firebaseArray) { 
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    return {
      getByRoomId: function (roomId) {
		  return messages.filter(m => m.roomId === roomId).map(r => {
			  if(r.sentAt){
				  console.log(r.sentAt);
				  var date = new Date(r.sentAt);
				  var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
				  var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
				  var hours = date.getHours() > 12 ? date.getHours() % 12 : date.getHours();
				  
				  
				  r.sentAt = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${hours}:${minutes}:${seconds}`;
			  }else{
				  r.sentAt = "--";
			  }
			  return r;
		  });
      },
	

	  send: function(message, callback){
		  var _this = this;
		  messages.$add(message).then(function(){
			  callback(_this.getByRoomId(message.roomId));
		  });
	  }
		
      }
					
  	};
   
  
angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();



