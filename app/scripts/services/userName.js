(function() {
  function BlocChatCookies($uibModal, $cookies) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
		 $uibModal.open({
	     	templateUrl: '/templates/userName.html',
         	size: 'sm',
         	controller: 'userNameCtrl as userName'
		 });
    }
  }

  angular
    .module('blocChat')
    .run(['$uibModal', '$cookies', BlocChatCookies]);
})();