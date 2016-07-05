/**
 * Created by Stefan Hariton on 6/12/16.
 */

import 'angular';
import 'angular-ui-router';
import 'angular-bootstrap';
import 'angular-ui/bootstrap-bower';
import 'angular-loading-bar';
import 'ng-file-upload';
import 'css';
import './home/index';
import './convert-document/index';
import moduleName from './name';
import config from '../config.js';

angular.module(moduleName, [
  'home',
  'convert-document',
  'ui.bootstrap',
  'angular-loading-bar',
  'ngFileUpload'
]);

angular.module(moduleName).constant('rootApi', config.rootApi);

angular.module(moduleName).run(['$rootScope', ($rootScope) => {
  $rootScope.$on("$stateChangeError", console.log.bind(console));
}]);