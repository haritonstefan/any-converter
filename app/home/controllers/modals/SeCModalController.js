/*
  Created by Siumbeli Vladislav Jun 28, 2016.
 */

'use strict';
'format es6';

import name from '../../name';

class SeCModalController{
    constructor(close) {
        this.close = close
    }
}

export default SeCModalController

angular.module(name).controller('SeCModalController', [
    (...args) => {
        return new SeCModalController(...args);
    }
]);
