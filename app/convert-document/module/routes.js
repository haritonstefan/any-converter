/**
 * Created by Stefan Hariton on 6/12/16.
 */


import moduleName from '../name';

var routes = {
  'convert-document': {
    url: 'convert/document',
    templateUrl: 'app/convert-document/templates/convert-document.tpl.html',
    controller: 'ConvertDocumentCtrl',
    controllerAs: 'DocConvCtrl'
  }
};

class Config {
  constructor($stateProvider, $urlRouterProvider) {
    console.log('routes');
    let stateNames = Object.keys(routes);
    // $urlRouterProvider.when('', '/');
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
