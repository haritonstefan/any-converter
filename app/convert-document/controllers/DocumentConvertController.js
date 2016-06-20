/**
 * Created by Stefan Hariton on 6/12/16.
 */

'use strict';
'format es6';

import name from '../name';

class ConvertDocumentCtrl{
  constructor() {
    console.log('We have to convert docs!');
  }
}

export default ConvertDocumentCtrl

angular.module(name).controller('ConvertDocumentCtrl', [
  (...args) => {
    return new ConvertDocumentCtrl(...args);
  }
]);
