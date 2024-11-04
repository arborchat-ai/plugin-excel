/*! For license information please see commands.js.LICENSE.txt */
!function(){var e={29695:function(e,t,n){"use strict";var r=n(64583).Promise,o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=r))((function(r,i){function a(e){try{s(o.next(e))}catch(e){i(e)}}function c(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,o,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},a=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return a.next=c(0),a.throw=c(1),a.return=c(2),"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(s){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(15797);Office.onReady((function(e){e.host===Office.HostType.Excel&&Excel.run((function(e){return o(void 0,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,(0,a.getFromWorkbookSettings)("disableCalculationOverride")];case 1:return"true"===t.sent()?[3,3]:(e.application.calculationMode=Excel.CalculationMode.manual,console.log("Calculation mode set to manual"),[4,e.sync()]);case 2:return t.sent(),[3,4];case 3:console.log("Calculation mode not overridden"),t.label=4;case 4:return[2]}}))}))})).catch((function(e){console.error("Error during Excel initialization:",e)}))})),Office.actions.associate("recalculate",(function(e){return o(this,void 0,void 0,(function(){var t=this;return i(this,(function(n){switch(n.label){case 0:return[4,Excel.run((function(e){return o(t,void 0,void 0,(function(){var t,n,r=this;return i(this,(function(a){switch(a.label){case 0:return(t=e.workbook.getSelectedRange()).load("valuesAsJson"),t.load("formulas"),[4,e.sync()];case 1:return a.sent(),n=t.formulas,t.valuesAsJson.forEach((function(a,c){return o(r,void 0,void 0,(function(){var r=this;return i(this,(function(s){return a.forEach((function(a,s){return o(r,void 0,void 0,(function(){var r,o,u,l,f,d,v,h,p,y,b,g,_,m,w,k,A,S,E,O,C,x,V,R,T,j,I,M,F;return i(this,(function(i){switch(i.label){case 0:return n[c][s].startsWith("=")?(t.getCell(c,s).calculate(),[2]):a&&"Entity"===a.type&&a.properties?(r=a.properties.type,o=a.properties,r?"info"!==(null==r?void 0:r.basicValue)?[3,3]:o.ticker?((l=t.getCell(c,s)).load("formulas"),[4,e.sync()]):[2]:[2]):[3,30];case 1:return i.sent(),l.formulas=[['=COMPANY_INFO("'+(null===(f=o.ticker)||void 0===f?void 0:f.basicValue)+'")']],[4,e.sync()];case 2:return i.sent(),l.calculate(),[3,30];case 3:return"balanceSheet"!==(null==r?void 0:r.basicValue)?[3,6]:o.ticker&&o.period&&o.calendarYear?((l=t.getCell(c,s)).load("formulas"),[4,e.sync()]):[2];case 4:return i.sent(),u="FY"===(null===(d=o.period)||void 0===d?void 0:d.basicValue)?"0":null===(h=null===(v=o.period)||void 0===v?void 0:v.basicValue)||void 0===h?void 0:h.toString().replace("Q",""),l.formulas=[['=BALANCE_SHEET("'+(null===(p=o.ticker)||void 0===p?void 0:p.basicValue)+'", '+(null===(y=o.calendarYear)||void 0===y?void 0:y.basicValue)+'", '+u+")"]],[4,e.sync()];case 5:return i.sent(),l.calculate(),[3,30];case 6:return"incomeStatement"!==(null==r?void 0:r.basicValue)?[3,9]:o.ticker&&o.calendarYear&&o.period?((l=t.getCell(c,s)).load("formulas"),[4,e.sync()]):[2];case 7:return i.sent(),u="FY"===(null===(b=o.period)||void 0===b?void 0:b.basicValue)?"0":null===(_=null===(g=o.period)||void 0===g?void 0:g.basicValue)||void 0===_?void 0:_.toString().replace("Q",""),l.formulas=[['=INCOME("'+(null===(m=o.ticker)||void 0===m?void 0:m.basicValue)+'", '+(null===(w=o.calendarYear)||void 0===w?void 0:w.basicValue)+", "+u+")"]],[4,e.sync()];case 8:return i.sent(),l.calculate(),[3,30];case 9:return"cashFlow"!==(null==r?void 0:r.basicValue)?[3,12]:o.ticker&&o.calendarYear&&o.period?((l=t.getCell(c,s)).load("formulas"),[4,e.sync()]):[2];case 10:return i.sent(),u="FY"===(null===(k=o.period)||void 0===k?void 0:k.basicValue)?"0":null===(S=null===(A=o.period)||void 0===A?void 0:A.basicValue)||void 0===S?void 0:S.toString().replace("Q",""),l.formulas=[['=CASH_FLOW("'+(null===(E=o.ticker)||void 0===E?void 0:E.basicValue)+'", '+(null===(O=o.calendarYear)||void 0===O?void 0:O.basicValue)+", "+u+")"]],[4,e.sync()];case 11:return i.sent(),l.calculate(),[3,30];case 12:return"ratio"!==(null==r?void 0:r.basicValue)?[3,15]:o.ticker?((l=t.getCell(c,s)).load("formulas"),[4,e.sync()]):[2];case 13:return i.sent(),l.formulas=[['=RATIOS("'+(null===(C=o.ticker)||void 0===C?void 0:C.basicValue)+'")']],[4,e.sync()];case 14:return i.sent(),l.calculate(),[3,30];case 15:return"keyMetrics"!==(null==r?void 0:r.basicValue)?[3,18]:o.ticker?((l=t.getCell(c,s)).load("formulas"),[4,e.sync()]):[2];case 16:return i.sent(),l.formulas=[['=KEY_METRICS("'+(null===(x=o.ticker)||void 0===x?void 0:x.basicValue)+'")']],[4,e.sync()];case 17:return i.sent(),l.calculate(),[3,30];case 18:return"short"!==(null==r?void 0:r.basicValue)?[3,21]:o.ticker&&o.query?((l=t.getCell(c,s)).load("formulas"),[4,e.sync()]):[2];case 19:return i.sent(),l.formulas=[['=ARBOR_CHAT("'+(null===(V=o.ticker)||void 0===V?void 0:V.basicValue)+'", "'+(null===(R=o.query)||void 0===R?void 0:R.basicValue)+'")']],[4,e.sync()];case 20:return i.sent(),l.calculate(),[3,30];case 21:return"long"!==(null==r?void 0:r.basicValue)?[3,24]:o.ticker&&o.query?((l=t.getCell(c,s)).load("formulas"),[4,e.sync()]):[2];case 22:return i.sent(),l.formulas=[['=ARBOR_CHAT("'+(null===(T=o.ticker)||void 0===T?void 0:T.basicValue)+'", "'+(null===(j=o.query)||void 0===j?void 0:j.basicValue)+'", TRUE)']],[4,e.sync()];case 23:return i.sent(),l.calculate(),[3,30];case 24:return"number"!==(null==r?void 0:r.basicValue)?[3,27]:o.ticker&&o.query?((l=t.getCell(c,s)).load("formulas"),[4,e.sync()]):[2];case 25:return i.sent(),l.formulas=[['=ARBOR_NUMBER("'+(null===(I=o.ticker)||void 0===I?void 0:I.basicValue)+'", "'+(null===(M=o.query)||void 0===M?void 0:M.basicValue)+'")']],[4,e.sync()];case 26:return i.sent(),l.calculate(),[3,30];case 27:return"screen"!==(null==r?void 0:r.basicValue)?[3,30]:o.query?((l=t.getCell(c,s)).load("formulas"),[4,e.sync()]):[2];case 28:return i.sent(),l.formulas=[['=ARBOR_SCREEN("'+(null===(F=o.query)||void 0===F?void 0:F.basicValue)+'")']],[4,e.sync()];case 29:i.sent(),l.calculate(),i.label=30;case 30:return[2]}}))}))})),[2]}))}))})),t.calculate(),console.log("Recalculated"),[4,e.sync()];case 2:return a.sent(),[2]}}))}))})).catch((function(e){console.error("Error during recalculate:",e)}))];case 1:return n.sent(),e.completed(),[2]}}))}))})),Office.actions.associate("storeAnswer",(function(e){return o(this,void 0,void 0,(function(){var t=this;return i(this,(function(n){switch(n.label){case 0:return[4,Excel.run((function(e){return o(t,void 0,void 0,(function(){var t,n;return i(this,(function(r){switch(r.label){case 0:return(t=e.workbook.getSelectedRange()).load("hasSpill"),[4,e.sync()];case 1:return r.sent(),t.hasSpill?(n=t.getSpillingToRange()).copyFrom(n,Excel.RangeCopyType.values,!0):t.copyFrom(t,Excel.RangeCopyType.values,!0),[4,e.sync()];case 2:return r.sent(),[2]}}))}))})).catch((function(e){console.error("Error during storeAnswer:",e)}))];case 1:return n.sent(),e.completed(),[2]}}))}))}))},15797:function(e,t,n){"use strict";var r=n(64583).Promise,o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=r))((function(r,i){function a(e){try{s(o.next(e))}catch(e){i(e)}}function c(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,o,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},a=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return a.next=c(0),a.throw=c(1),a.return=c(2),"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(s){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.ARBOR_CHAT_API=void 0,t.setInLocalStorage=function(e,t){var n=Office.context.partitionKey;n?localStorage.setItem(n+e,t):localStorage.setItem(e,t)},t.getFromLocalStorage=function(e){var t=Office.context.partitionKey;return t?localStorage.getItem(t+e):localStorage.getItem(e)},t.clearLocalStorage=function(){localStorage.clear()},t.getFromWorkbookSettings=function(e){return o(this,void 0,void 0,(function(){var t=this;return i(this,(function(n){switch(n.label){case 0:return[4,Excel.run((function(n){return o(t,void 0,void 0,(function(){var t,r;return i(this,(function(o){switch(o.label){case 0:return t=n.workbook.settings,r=t.getItemOrNullObject(e),[4,n.sync()];case 1:return o.sent(),r.isNullObject?[2,null]:(r.load("value"),[4,n.sync()]);case 2:return o.sent(),[2,r.value]}}))}))}))];case 1:return[2,n.sent()]}}))}))},t.setInWorkbookSettings=function(e,t){return o(this,void 0,void 0,(function(){var n=this;return i(this,(function(r){switch(r.label){case 0:return[4,Excel.run((function(r){return o(n,void 0,void 0,(function(){var n,o;return i(this,(function(i){switch(i.label){case 0:return n=r.workbook.settings,o=n.getItemOrNullObject(e),[4,r.sync()];case 1:return i.sent(),o.isNullObject?n.add(e,t):o.value=t,[4,r.sync()];case 2:return i.sent(),[2]}}))}))}))];case 1:return r.sent(),[2]}}))}))},t.ARBOR_CHAT_API="https://api.arborchat.ai/stockchat"},64583:function(e,t,n){e.exports=function(){"use strict";function e(e){return"function"==typeof e}var t=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},r=0,o=void 0,i=void 0,a=function(e,t){v[r]=e,v[r+1]=t,2===(r+=2)&&(i?i(h):_())};var c="undefined"!=typeof window?window:void 0,s=c||{},u=s.MutationObserver||s.WebKitMutationObserver,l="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),f="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function d(){var e=setTimeout;return function(){return e(h,1)}}var v=new Array(1e3);function h(){for(var e=0;e<r;e+=2)(0,v[e])(v[e+1]),v[e]=void 0,v[e+1]=void 0;r=0}var p,y,b,g,_=void 0;function m(e,t){var n=this,r=new this.constructor(A);void 0===r[k]&&Y(r);var o=n._state;if(o){var i=arguments[o-1];a((function(){return M(o,r,i,n._result)}))}else j(n,r,e,t);return r}function w(e){if(e&&"object"==typeof e&&e.constructor===this)return e;var t=new this(A);return x(t,e),t}_=l?function(){return process.nextTick(h)}:u?(y=0,b=new u(h),g=document.createTextNode(""),b.observe(g,{characterData:!0}),function(){g.data=y=++y%2}):f?((p=new MessageChannel).port1.onmessage=h,function(){return p.port2.postMessage(0)}):void 0===c?function(){try{var e=Function("return this")().require("vertx");return void 0!==(o=e.runOnLoop||e.runOnContext)?function(){o(h)}:d()}catch(e){return d()}}():d();var k=Math.random().toString(36).substring(2);function A(){}var S=void 0,E=1,O=2;function C(t,n,r){n.constructor===t.constructor&&r===m&&n.constructor.resolve===w?function(e,t){t._state===E?R(e,t._result):t._state===O?T(e,t._result):j(t,void 0,(function(t){return x(e,t)}),(function(t){return T(e,t)}))}(t,n):void 0===r?R(t,n):e(r)?function(e,t,n){a((function(e){var r=!1,o=function(e,t,n,r){try{e.call(t,n,r)}catch(e){return e}}(n,t,(function(n){r||(r=!0,t!==n?x(e,n):R(e,n))}),(function(t){r||(r=!0,T(e,t))}),e._label);!r&&o&&(r=!0,T(e,o))}),e)}(t,n,r):R(t,n)}function x(e,t){if(e===t)T(e,new TypeError("You cannot resolve a promise with itself"));else if(o=typeof(r=t),null===r||"object"!==o&&"function"!==o)R(e,t);else{var n=void 0;try{n=t.then}catch(t){return void T(e,t)}C(e,t,n)}var r,o}function V(e){e._onerror&&e._onerror(e._result),I(e)}function R(e,t){e._state===S&&(e._result=t,e._state=E,0!==e._subscribers.length&&a(I,e))}function T(e,t){e._state===S&&(e._state=O,e._result=t,a(V,e))}function j(e,t,n,r){var o=e._subscribers,i=o.length;e._onerror=null,o[i]=t,o[i+E]=n,o[i+O]=r,0===i&&e._state&&a(I,e)}function I(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var r=void 0,o=void 0,i=e._result,a=0;a<t.length;a+=3)r=t[a],o=t[a+n],r?M(n,r,o,i):o(i);e._subscribers.length=0}}function M(t,n,r,o){var i=e(r),a=void 0,c=void 0,s=!0;if(i){try{a=r(o)}catch(e){s=!1,c=e}if(n===a)return void T(n,new TypeError("A promises callback cannot return that same promise."))}else a=o;n._state!==S||(i&&s?x(n,a):!1===s?T(n,c):t===E?R(n,a):t===O&&T(n,a))}var F=0;function Y(e){e[k]=F++,e._state=void 0,e._result=void 0,e._subscribers=[]}var P=function(){function e(e,n){this._instanceConstructor=e,this.promise=new e(A),this.promise[k]||Y(this.promise),t(n)?(this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?R(this.promise,this._result):(this.length=this.length||0,this._enumerate(n),0===this._remaining&&R(this.promise,this._result))):T(this.promise,new Error("Array Methods must be provided an Array"))}return e.prototype._enumerate=function(e){for(var t=0;this._state===S&&t<e.length;t++)this._eachEntry(e[t],t)},e.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,r=n.resolve;if(r===w){var o=void 0,i=void 0,a=!1;try{o=e.then}catch(e){a=!0,i=e}if(o===m&&e._state!==S)this._settledAt(e._state,t,e._result);else if("function"!=typeof o)this._remaining--,this._result[t]=e;else if(n===N){var c=new n(A);a?T(c,i):C(c,e,o),this._willSettleAt(c,t)}else this._willSettleAt(new n((function(t){return t(e)})),t)}else this._willSettleAt(r(e),t)},e.prototype._settledAt=function(e,t,n){var r=this.promise;r._state===S&&(this._remaining--,e===O?T(r,n):this._result[t]=n),0===this._remaining&&R(r,this._result)},e.prototype._willSettleAt=function(e,t){var n=this;j(e,void 0,(function(e){return n._settledAt(E,t,e)}),(function(e){return n._settledAt(O,t,e)}))},e}();var N=function(){function t(e){this[k]=F++,this._result=this._state=void 0,this._subscribers=[],A!==e&&("function"!=typeof e&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof t?function(e,t){try{t((function(t){x(e,t)}),(function(t){T(e,t)}))}catch(t){T(e,t)}}(this,e):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return t.prototype.catch=function(e){return this.then(null,e)},t.prototype.finally=function(t){var n=this,r=n.constructor;return e(t)?n.then((function(e){return r.resolve(t()).then((function(){return e}))}),(function(e){return r.resolve(t()).then((function(){throw e}))})):n.then(t,t)},t}();return N.prototype.then=m,N.all=function(e){return new P(this,e).promise},N.race=function(e){var n=this;return t(e)?new n((function(t,r){for(var o=e.length,i=0;i<o;i++)n.resolve(e[i]).then(t,r)})):new n((function(e,t){return t(new TypeError("You must pass an array to race."))}))},N.resolve=w,N.reject=function(e){var t=new this(A);return T(t,e),t},N._setScheduler=function(e){i=e},N._setAsap=function(e){a=e},N._asap=a,N.polyfill=function(){var e=void 0;if(void 0!==n.g)e=n.g;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var r=null;try{r=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===r&&!t.cast)return}e.Promise=N},N.Promise=N,N}()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n(29695)}();
//# sourceMappingURL=commands.js.map