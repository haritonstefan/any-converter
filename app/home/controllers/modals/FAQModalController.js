/**
 * Created by Stefan Hariton on 6/28/16.
 */

'use strict';
'format es6';

import name from '../../name';

class FAQModalController{
    constructor(close) {
        this.close = close
    }
}

export default FAQModalController

angular.module(name).controller('FAQModalController', [
    (...args) => {
        return new FAQModalController(...args);
    }
]);
