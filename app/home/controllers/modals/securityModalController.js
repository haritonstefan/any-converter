/*
  Created by Siumbeli Vladislav Jun 28, 2016.
 */

'use strict';
'format es6';

import name from '../../name';

class securityModalController{
    constructor(close) {
        this.close = close
    }
}

export default securityModalController

angular.module(name).controller('securityModalController', [
    (...args) => {
        return new securityModalController(...args);
    }
]);
