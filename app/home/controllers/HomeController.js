/**
 * Created by Stefan Hariton on 6/12/16.
 */

'use strict';
'format es6';

import name from '../name';

class HomeController{
  constructor(ModalService) {
    this.modal = ModalService;
  }

  show(){
    this.modal.open({
      templateUrl: '/app/home/templates/modal.tpl.html',
      controller: 'FAQModalController'
    })
  }
}

export default HomeController

angular.module(name).controller('HomeController', [
    '$uibModal',
  (...args) => {
    return new HomeController(...args);
  }
]);
