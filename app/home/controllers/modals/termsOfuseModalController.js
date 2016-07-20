/*
  Created by Siumbeli Vladislav Jun 28, 2016.
 */

'use strict';
'format es6';

import name from '../../name';

class termsOfuseModalController{
    constructor(close) {
        this.close = close
    }
}

export default termsOfuseModalController

angular.module(name).controller('termsOfuseModalController', [
    (...args) => {
        return new termsOfuseModalController(...args);
    }
]);
