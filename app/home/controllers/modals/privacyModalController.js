/*
  Created by Siumbeli Vladislav Jun 28, 2016.
 */

'use strict';
'format es6';

import name from '../../name';

class privacyModalController{
    constructor(close) {
        this.close = close
    }
}

export default privacyModalController

angular.module(name).controller('privacyModalController', [
    (...args) => {
        return new privacyModalController(...args);
    }
]);
