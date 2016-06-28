/*
  Created by Siumbeli Vladislav Jun 28, 2016.
 */

'use strict';
'format es6';

import name from '../../name';

class SuPModalController{
    constructor(close) {
        this.close = close
    }
}

export default SuPModalController

angular.module(name).controller('SuPModalController', [
    (...args) => {
        return new SuPModalController(...args);
    }
]);
