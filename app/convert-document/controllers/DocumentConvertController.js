/**
 * Created by Stefan Hariton on 6/12/16.
 */

'use strict';
'format es6';

import name from '../name';

class ConvertDocumentCtrl{
  constructor(documentFormats, documentPattern, modalService, documentConverterService) {
    this.documentPattern = documentPattern;
    this.documentFormats = documentFormats;
    this.modal = modalService;
    this.service = documentConverterService;
  }

  convert() {
    let fd = new FormData();
    fd.set('file', this.file);
    fd.set('from', this.from);
    fd.set('to', this.to);
    this.service.convert(fd).then((response) => {
      var blob = new Blob([new Uint8Array(response.data.file.data)], {type: `${response.data.type}`});
      saveAs(blob, response.data.fileName);
    })
  }
  
  selectFile(files) {
    this.file = files[0];
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

  showContact(){
    this.modal.open({
      templateUrl: '/app/home/templates/contactModal.tpl.html',
      controller: 'contactModalController'
    })
  }

}

export default ConvertDocumentCtrl

angular.module(name).controller('ConvertDocumentCtrl', [
  'documentFormats',
  'documentPattern',
  '$uibModal',
  'documentConverterService',
  (...args) => {
    return new ConvertDocumentCtrl(...args);
  }
]);
