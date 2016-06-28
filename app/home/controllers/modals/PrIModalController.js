/*
  Created by Siumbeli Vladislav Jun 28, 2016.
 */

'use strict';
'format es6';

import name from '../../name';

class PrIModalController{
    constructor(close) {
        this.close = close
    }
}

export default PrIModalController

angular.module(name).controller('PrIModalController', [
    (...args) => {
        return new PrIModalController(...args);
    }
]);
