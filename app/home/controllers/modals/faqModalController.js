/**
 * Created by Stefan Hariton on 6/28/16.
 */

'use strict';
'format es6';

import name from '../../name';

class faqModalController{
    constructor(close) {
        this.close = close
    }
}

export default faqModalController

angular.module(name).controller('faqModalController', [
    (...args) => {
        return new faqModalController(...args);
    }
]);
