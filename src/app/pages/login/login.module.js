(function () {
  'use strict';

  angular.module('BlurAdmin.pages.login', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: 'app/pages/login/login.html',
          Controller: 'LoginCtrl',
          controllerAs: 'vm',
          sidebarMeta: {
            order: 800,
          },
        });
  }

})();