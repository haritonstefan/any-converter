/**
 * Created by Stefan Hariton on 6/12/16.
 */


import moduleName from '../name';

var routes = {
  'app': {
    url: '/',
    templateUrl: 'app/home/templates/home.tpl.html',
    controller: 'HomeController',
    controllerAs: 'HomeCtrl'
  }
};

class Config {
  constructor($stateProvider, $urlRouterProvider) {
    console.log('routes');
    let stateNames = Object.keys(routes);
    $urlRouterProvider.when('', '/');
    // $urlRouterProvider.otherwise('/');
    angular.forEach(stateNames, (stateName) => {
      console.log('registering');
      $stateProvider.state(stateName, routes[stateName]);
    });
  }
}

angular.module(moduleName).config([
  '$stateProvider',
  '$urlRouterProvider',
  (...args) => {
    return new Config(...args);
  }
]);