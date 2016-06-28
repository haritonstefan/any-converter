/**
 * Created by Stefan Hariton on 6/12/16.
 */

'use strict';
'format es6';

import name from '../name';

class HomeController{
  constructor() {
  	
  }
}

export default HomeController

angular.module(name).controller('HomeController', [
  (...args) => {
    return new HomeController(...args);
  }
]);
