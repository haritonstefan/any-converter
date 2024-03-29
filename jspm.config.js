System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "build/index.js": [
      "app/index.js",
      "app/config.js",
      "app/name.js",
      "app/convert-document/index.js",
      "app/convert-document/controllers/index.js",
      "app/home/controllers/modals/termsOfuseModalController.js",
      "app/home/name.js",
      "npm:babel-runtime@5.8.38/helpers/bind.js",
      "npm:babel-runtime@5.8.38/helpers/class-call-check.js",
      "app/home/controllers/modals/aboutusModalController.js",
      "app/home/controllers/modals/privacyModalController.js",
      "app/home/controllers/modals/faqModalController.js",
      "app/convert-document/controllers/DocumentConvertController.js",
      "app/convert-document/name.js",
      "npm:babel-runtime@5.8.38/helpers/create-class.js",
      "npm:babel-runtime@5.8.38/core-js/object/define-property.js",
      "npm:core-js@1.2.7/library/fn/object/define-property.js",
      "npm:core-js@1.2.7/library/modules/$.js",
      "app/convert-document/services/index.js",
      "app/convert-document/services/documentConverterService.js",
      "app/convert-document/module/index.js",
      "app/convert-document/module/routes.js",
      "npm:babel-runtime@5.8.38/core-js/object/keys.js",
      "npm:core-js@1.2.7/library/fn/object/keys.js",
      "npm:core-js@1.2.7/library/modules/$.core.js",
      "npm:core-js@1.2.7/library/modules/es6.object.keys.js",
      "npm:core-js@1.2.7/library/modules/$.object-sap.js",
      "npm:core-js@1.2.7/library/modules/$.fails.js",
      "npm:core-js@1.2.7/library/modules/$.export.js",
      "npm:core-js@1.2.7/library/modules/$.ctx.js",
      "npm:core-js@1.2.7/library/modules/$.a-function.js",
      "npm:core-js@1.2.7/library/modules/$.global.js",
      "npm:core-js@1.2.7/library/modules/$.to-object.js",
      "npm:core-js@1.2.7/library/modules/$.defined.js",
      "app/convert-document/module/config.js",
      "app/convert-document/module/module.js",
      "app/home/index.js",
      "app/home/controllers/index.js",
      "app/home/controllers/HomeController.js",
      "app/home/module/index.js",
      "app/home/module/routes.js",
      "app/home/module/config.js",
      "app/home/module/module.js",
      "github:systemjs/plugin-css@0.1.26.js",
      "github:systemjs/plugin-css@0.1.26/css.js",
      "npm:angulartics-google-analytics@0.2.1.js",
      "npm:angulartics-google-analytics@0.2.1/lib/index.js",
      "npm:angulartics-google-analytics@0.2.1/lib/angulartics-ga.js",
      "npm:angulartics@1.1.2.js",
      "npm:angulartics@1.1.2/src/index.js",
      "npm:angulartics@1.1.2/src/angulartics.js",
      "github:angular-ui/ui-select@0.18.1.js",
      "github:angular-ui/ui-select@0.18.1/index.js",
      "github:angular-ui/ui-select@0.18.1/dist/select.js",
      "npm:ng-file-upload@12.0.4.js",
      "npm:ng-file-upload@12.0.4/index.js",
      "npm:ng-file-upload@12.0.4/dist/ng-file-upload-all.js",
      "github:angular-ui/bootstrap-bower@1.3.3.js",
      "github:angular-ui/bootstrap-bower@1.3.3/index.js",
      "github:angular-ui/bootstrap-bower@1.3.3/ui-bootstrap-tpls.js",
      "github:angular-ui/angular-ui-router-bower@0.3.1.js",
      "github:angular-ui/angular-ui-router-bower@0.3.1/release/angular-ui-router.js",
      "github:angular/bower-angular@1.5.8.js",
      "github:angular/bower-angular@1.5.8/angular.js"
    ]
  },

  map: {
    "angular": "github:angular/bower-angular@1.5.8",
    "angular-bootstrap": "github:angular-ui/bootstrap-bower@1.3.3",
    "angular-google-analytics": "npm:angular-google-analytics@1.1.7",
    "angular-ui-router": "github:angular-ui/angular-ui-router-bower@0.3.1",
    "angular-ui/bootstrap-bower": "github:angular-ui/bootstrap-bower@1.3.3",
    "angular-ui/ui-select": "github:angular-ui/ui-select@0.18.1",
    "angulartics": "npm:angulartics@1.1.2",
    "angulartics-google-analytics": "npm:angulartics-google-analytics@0.2.1",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@1.2.7",
    "css": "github:systemjs/plugin-css@0.1.26",
    "file-saver": "npm:file-saver@1.3.2",
    "ng-file-upload": "npm:ng-file-upload@12.0.4",
    "github:angular-ui/angular-ui-router-bower@0.3.1": {
      "angular": "github:angular/bower-angular@1.5.8"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.8"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:angular-google-analytics@1.1.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:angulartics-google-analytics@0.2.1": {
      "angulartics": "npm:angulartics@1.1.2"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:ng-file-upload@12.0.4": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
