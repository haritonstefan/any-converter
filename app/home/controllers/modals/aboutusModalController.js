/*
  Created by Siumbeli Vladislav Jun 28, 2016.
 */

'use strict';
'format es6';

import name from '../../name';

class aboutusModalController{
    constructor(close) {
        this.close = close
    }
}

export default aboutusModalController

angular.module(name).controller('aboutusModalController', [
    (...args) => {
        return new aboutusModalController(...args);
    }
]);
