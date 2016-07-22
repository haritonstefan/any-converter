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

  showTermsOfuse(){
    this.modal.open({
      templateUrl: '/app/home/templates/termsOfuseModal.tpl.html',
      controller: 'termsOfuseModalController'
    })
  }

  showPrivacy(){
    this.modal.open({
      templateUrl: '/app/home/templates/privacyModal.tpl.html',
      controller: 'privacyModalController'
    })
  }

  showAboutUs(){
    this.modal.open({
      templateUrl: '/app/home/templates/aboutusModal.tpl.html',
      controller: 'aboutusModalController'
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
