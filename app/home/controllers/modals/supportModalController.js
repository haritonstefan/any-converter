/*
  Created by Siumbeli Vladislav Jun 28, 2016.
 */

'use strict';
'format es6';

import name from '../../name';

class supportModalController{
    constructor(close) {
        this.close = close
    }
}

export default supportModalController

angular.module(name).controller('supportModalController', [
    (...args) => {
        return new supportModalController(...args);
    }
]);
