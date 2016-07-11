/*
  Created by Siumbeli Vladislav Jun 28, 2016.
 */

'use strict';
'format es6';

import name from '../../name';

class contactModalController{
    constructor(close) {
        this.close = close
    }
}

export default contactModalController

angular.module(name).controller('contactModalController', [
    (...args) => {
        return new contactModalController(...args);
    }
]);
