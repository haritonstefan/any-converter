/**
 * Created by Stefan Hariton on 6/12/16.
 */

import moduleName from '../name';

class Config{
  constructor() {

  }
}

angular.module(moduleName).config([
  (...args) => {
    return new Config(...args);
  }
]);
