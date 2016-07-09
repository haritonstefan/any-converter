/**
 * Created by Stefan Hariton on 7/4/16.
 */

'use strict';

import moduleName from '../name';

class documentConverterService {
    constructor($http, rootApi) {
        this.$http = $http;
        this.$http.defaults.headers.post["Content-Type"] = undefined;
        this.$http.defaults.transformRequest = angular.identity;
        this.rootApi = rootApi;
    }

    convert(params) {
        console.log(params.values().next());
        return this.$http.post(`${this.rootApi}/document`, params);
    }
}

angular.module(moduleName).service('documentConverterService', [
    '$http',
    'rootApi',
    (...args) => {
        return new documentConverterService(...args);
    }
]);
