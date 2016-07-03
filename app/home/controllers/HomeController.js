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

  showFaq(){
    this.modal.open({
      templateUrl: '/app/home/templates/faqModal.tpl.html',
      controller: 'faqModalController'
    })
  }

  showTermsOfservice(){
    this.modal.open({
      templateUrl: '/app/home/templates/termsOfserviceModal.tpl.html',
      controller: 'termsOfserviceModalController'
    })
  }

  showPrivacy(){
    this.modal.open({
      templateUrl: '/app/home/templates/privacyModal.tpl.html',
      controller: 'privacyModalController'
    })
  }

  showSecurity(){
    this.modal.open({
      templateUrl: '/app/home/templates/securityModal.tpl.html',
      controller: 'securityModalController'
    })
  }

  showSupport(){
    this.modal.open({
      templateUrl: '/app/home/templates/supportModal.tpl.html',
      controller: 'supportModalController'
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
