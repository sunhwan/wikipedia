"use strict";define(["modules/types/client_interaction/code_editor/model","src/util/datatraversing","src/util/util"],function(a,b,c){function d(){a.call(this)}return c.inherits(d,a,{getjPath:function(a){var c=[];return"outputValue"===a&&this.module.controller.outputObject&&b.getJPathsFromElement(this.module.controller.outputObject,c),c}}),d});