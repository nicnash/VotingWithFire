angular.module('firebase.config', [])
  .constant('FBURL', 'https://ngfireyeo.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','google','twitter','github'])

  .constant('loginRedirectPath', '/login');
