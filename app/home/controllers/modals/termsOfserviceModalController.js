/*
  Created by Siumbeli Vladislav Jun 28, 2016.
 */

'use strict';
'format es6';

import name from '../../name';

class termsOfserviceModalController{
    constructor(close) {
        this.close = close
    }
}

export default termsOfserviceModalController

angular.module(name).controller('termsOfserviceModalController', [
    (...args) => {
        return new termsOfserviceModalController(...args);
    }
]);
