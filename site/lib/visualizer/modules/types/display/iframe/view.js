"use strict";define(["modules/default/defaultview"],function(a){function b(){}return $.extend(!0,b.prototype,a,{init:function(){this.dom=$("<iframe>");var a=this;this.dom.load(function(){"about:blank"!=a.dom.attr("src")&&(a._loadingTimeout?clearTimeout(a._loadingTimeout):a.hideLoading())}),this.module.getDomContent().html(this.dom),this.resolveReady()},blank:{url:function(){this.dom.attr("src","about:blank")}},update:{url:function(a){var b=this;b._loadingTimeout&&clearTimeout(b._loadingTimeout),this._loadingTimeout=setTimeout(function(){b._loadingTimeout=null,b.showLoading()},500),this.dom.attr("src",String(a.get()))}}}),b});