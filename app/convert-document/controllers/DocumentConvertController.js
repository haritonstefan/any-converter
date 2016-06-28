/**
 * Created by Stefan Hariton on 6/12/16.
 */

'use strict';
'format es6';

import name from '../name';

class ConvertDocumentCtrl{
  constructor(ModalService) {
    this.modal = ModalService;
  }

  showFaQ(){
    this.modal.open({
      templateUrl: '/app/home/templates/faqModal.tpl.html',
      controller: 'FAQModalController'
    })
  }

  showToS(){
    this.modal.open({
      templateUrl: '/app/home/templates/tosModal.tpl.html',
      controller: 'ToSModalController'
    })
  }

  showPrI(){
    this.modal.open({
      templateUrl: '/app/home/templates/priModal.tpl.html',
      controller: 'PrIModalController'
    })
  }

  showSeC(){
    this.modal.open({
      templateUrl: '/app/home/templates/secModal.tpl.html',
      controller: 'SeCModalController'
    })
  }

  showSuP(){
    this.modal.open({
      templateUrl: '/app/home/templates/supModal.tpl.html',
      controller: 'SuPModalController'
    })
    
  }
}

export default ConvertDocumentCtrl

angular.module(name).controller('ConvertDocumentCtrl', [
  (...args) => {
    return new ConvertDocumentCtrl(...args);
  }
]);
