/**
 * Created by Stefan Hariton on 6/12/16.
 */

import 'angular';
import 'angular-ui-router';
import 'angular-bootstrap';
import 'angular-ui/bootstrap-bower';
import 'ng-file-upload';
import 'angular-ui/ui-select';
import 'angulartics';
import 'angulartics-google-analytics';
import 'css';
import './home/index';
import './convert-document/index';
import moduleName from './name';
import config from './config.js';

angular.module(moduleName, [
  'home',
  'convert-document',
  'ui.bootstrap',
  'ngFileUpload',
  'ui.select',
  'angulartics',
  'angulartics.google.analytics'
]);

angular.module(moduleName).constant('rootApi', config[window.env]["rootApi"]);

angular.module(moduleName).run(['$rootScope', ($rootScope) => {
  $rootScope.$on("$stateChangeError", console.log.bind(console));
}]);
