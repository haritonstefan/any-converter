/*
  Created by Siumbeli Vladislav Jun 28, 2016.
 */

'use strict';
'format es6';

import name from '../../name';

class ToSModalController{
    constructor(close) {
        this.close = close
    }
}

export default ToSModalController

angular.module(name).controller('ToSModalController', [
    (...args) => {
        return new ToSModalController(...args);
    }
]);
