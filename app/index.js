/**
 * Created by Stefan Hariton on 6/12/16.
 */

import 'angular';
import 'angular-ui-router';
import 'angular-bootstrap';
import 'angular-ui/bootstrap-bower';
import 'angular-loading-bar';
import 'angular-modal-service';
import 'css';
import './home/index';
import './convert-document/index';
import moduleName from './name';

angular.module(moduleName, [
  'home',
  'convert-document',
  'angularModalService',
  'ui.bootstrap',
  'angular-loading-bar',
]);
