/**
 * Created by Stefan Hariton on 6/12/16.
 */


import moduleName from '../name';

var routes = {
  'app': {
    abstract: true,
    template: '<div ui-view></div>',
    'url': ''
  },
  'app.home': {
    url: '/',
    templateUrl: 'app/home/templates/home.tpl.html',
    controller: 'HomeController',
    controllerAs: 'HomeCtrl'
  }
};

class Config {
  constructor($stateProvider, $locationProvider) {
    console.log('routes');
    let stateNames = Object.keys(routes);

    $locationProvider.html5Mode(true);

    angular.forEach(stateNames, (stateName) => {
      console.log('registering');
      $stateProvider.state(stateName, routes[stateName]);
    });
  }
}

angular.module(moduleName).config([
  '$stateProvider',
  '$locationProvider',
  (...args) => {
    return new Config(...args);
  }
]);
