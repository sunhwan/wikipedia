"use strict";define(["modules/default/defaultmodel","src/util/datatraversing"],function(a,b){function c(){}return $.extend(!0,c.prototype,a,{getjPath:function(a){var c=[];switch(a){case"formValue":b.getJPathsFromElement(this.module.view.formValue,c)}return c}}),c});