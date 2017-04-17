(function() {
	function userNameCtrl($uibModalInstance, $scope, $cookies){
		
		$scope.create = function() {
			var userName = document.getElementsByName('userName')[0].value;
			if(userName){
				$cookies.put('blocChatCurrentUser', userName);
				$uibModalInstance.close();
			}else{
				//display some error message 
				alert("Username must be entered!")
			}
			
		};
		
		$scope.cancel = function(){
			$uibModalInstance.dismiss();
		};
	};
	
 angular
        .module('blocChat')
        .controller('userNameCtrl', [ '$uibModalInstance', '$scope', '$cookies', userNameCtrl])
})();