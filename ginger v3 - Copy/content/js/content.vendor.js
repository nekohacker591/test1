/*! @sentry/tracing & @sentry/browser 6.3.1 (7962eee) | https://github.com/getsentry/sentry-javascript */
var Sentry=function(t){var n=function(t,i){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])})(t,i)};function i(t,i){function r(){this.constructor=t}n(t,i),t.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}var r,e,o,a,u,s=function(){return(s=Object.assign||function(t){for(var n,i=1,r=arguments.length;i<r;i++)for(var e in n=arguments[i])Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t}).apply(this,arguments)};function c(t,n){var i={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(i[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var e=0;for(r=Object.getOwnPropertySymbols(t);e<r.length;e++)n.indexOf(r[e])<0&&(i[r[e]]=t[r[e]])}return i}function f(t){var n="function"==typeof Symbol&&t[Symbol.iterator],i=0;return n?n.call(t):{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}}}function h(t,n){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var r,e,o=i.call(t),a=[];try{for(;(void 0===n||n-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(t){e={error:t}}finally{try{r&&!r.done&&(i=o.return)&&i.call(o)}finally{if(e)throw e.error}}return a}function v(){for(var t=[],n=0;n<arguments.length;n++)t=t.concat(h(arguments[n]));return t}function d(t){switch(Object.prototype.toString.call(t)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return E(t,Error)}}function l(t){return"[object ErrorEvent]"===Object.prototype.toString.call(t)}function p(t){return"[object DOMError]"===Object.prototype.toString.call(t)}function m(t){return"[object String]"===Object.prototype.toString.call(t)}function y(t){return null===t||"object"!=typeof t&&"function"!=typeof t}function g(t){return"[object Object]"===Object.prototype.toString.call(t)}function b(t){return"undefined"!=typeof Event&&E(t,Event)}function w(t){return"undefined"!=typeof Element&&E(t,Element)}function T(t){return Boolean(t&&t.then&&"function"==typeof t.then)}function E(t,n){try{return t instanceof n}catch(t){return!1}}function S(t){try{for(var n=t,i=[],r=0,e=0,o=" > ".length,a=void 0;n&&r++<5&&!("html"===(a=x(n))||r>1&&e+i.length*o+a.length>=80);)i.push(a),e+=a.length,n=n.parentNode;return i.reverse().join(" > ")}catch(t){return"<unknown>"}}function x(t){var n,i,r,e,o,a=t,u=[];if(!a||!a.tagName)return"";if(u.push(a.tagName.toLowerCase()),a.id&&u.push("#"+a.id),(n=a.className)&&m(n))for(i=n.split(/\s+/),o=0;o<i.length;o++)u.push("."+i[o]);var s=["type","name","title","alt"];for(o=0;o<s.length;o++)r=s[o],(e=a.getAttribute(r))&&u.push("["+r+'="'+e+'"]');return u.join("")}!function(t){t[t.None=0]="None",t[t.Error=1]="Error",t[t.Debug=2]="Debug",t[t.Verbose=3]="Verbose"}(r||(r={})),function(t){t.Ok="ok",t.Exited="exited",t.Crashed="crashed",t.Abnormal="abnormal"}(e||(e={})),(o=t.Severity||(t.Severity={})).Fatal="fatal",o.Error="error",o.Warning="warning",o.Log="log",o.Info="info",o.Debug="debug",o.Critical="critical",function(t){t.fromString=function(n){switch(n){case"debug":return t.Debug;case"info":return t.Info;case"warn":case"warning":return t.Warning;case"error":return t.Error;case"fatal":return t.Fatal;case"critical":return t.Critical;case"log":default:return t.Log}}}(t.Severity||(t.Severity={})),(a=t.Status||(t.Status={})).Unknown="unknown",a.Skipped="skipped",a.Success="success",a.RateLimit="rate_limit",a.Invalid="invalid",a.Failed="failed",function(t){t.fromHttpCode=function(n){return n>=200&&n<300?t.Success:429===n?t.RateLimit:n>=400&&n<500?t.Invalid:n>=500?t.Failed:t.Unknown}}(t.Status||(t.Status={})),function(t){t.Explicit="explicitly_set",t.Sampler="client_sampler",t.Rate="client_rate",t.Inheritance="inheritance"}(u||(u={}));var _=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,n){return t.__proto__=n,t}:function(t,n){for(var i in n)t.hasOwnProperty(i)||(t[i]=n[i]);return t});var k=function(t){function n(n){var i=this.constructor,r=t.call(this,n)||this;return r.message=n,r.name=i.prototype.constructor.name,_(r,i.prototype),r}return i(n,t),n}(Error),O=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,j=function(){function t(t){"string"==typeof t?this.t(t):this.i(t),this.o()}return t.prototype.toString=function(t){void 0===t&&(t=!1);var n=this,i=n.host,r=n.path,e=n.pass,o=n.port,a=n.projectId;return n.protocol+"://"+n.publicKey+(t&&e?":"+e:"")+"@"+i+(o?":"+o:"")+"/"+(r?r+"/":r)+a},t.prototype.t=function(t){var n=O.exec(t);if(!n)throw new k("Invalid Dsn");var i=h(n.slice(1),6),r=i[0],e=i[1],o=i[2],a=void 0===o?"":o,u=i[3],s=i[4],c=void 0===s?"":s,f="",v=i[5],d=v.split("/");if(d.length>1&&(f=d.slice(0,-1).join("/"),v=d.pop()),v){var l=v.match(/^\d+/);l&&(v=l[0])}this.i({host:u,pass:a,path:f,projectId:v,port:c,protocol:r,publicKey:e})},t.prototype.i=function(t){"user"in t&&!("publicKey"in t)&&(t.publicKey=t.user),this.user=t.publicKey||"",this.protocol=t.protocol,this.publicKey=t.publicKey||"",this.pass=t.pass||"",this.host=t.host,this.port=t.port||"",this.path=t.path||"",this.projectId=t.projectId},t.prototype.o=function(){var t=this;if(["protocol","publicKey","host","projectId"].forEach(function(n){if(!t[n])throw new k("Invalid Dsn: "+n+" missing")}),!this.projectId.match(/^\d+$/))throw new k("Invalid Dsn: Invalid projectId "+this.projectId);if("http"!==this.protocol&&"https"!==this.protocol)throw new k("Invalid Dsn: Invalid protocol "+this.protocol);if(this.port&&isNaN(parseInt(this.port,10)))throw new k("Invalid Dsn: Invalid port "+this.port)},t}();function D(){return"[object process]"===Object.prototype.toString.call("undefined"!=typeof process?process:0)}function I(t,n){return void 0===n&&(n=0),"string"!=typeof t||0===n?t:t.length<=n?t:t.substr(0,n)+"..."}function N(t,n){if(!Array.isArray(t))return"";for(var i=[],r=0;r<t.length;r++){var e=t[r];try{i.push(String(e))}catch(t){i.push("[value cannot be serialized]")}}return i.join(n)}function R(t,n){return!!m(t)&&(i=n,"[object RegExp]"===Object.prototype.toString.call(i)?n.test(t):"string"==typeof n&&-1!==t.indexOf(n));var i}var C={};function M(){return D()?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:C}function A(){var t=M(),n=t.crypto||t.msCrypto;if(void 0!==n&&n.getRandomValues){var i=new Uint16Array(8);n.getRandomValues(i),i[3]=4095&i[3]|16384,i[4]=16383&i[4]|32768;var r=function(t){for(var n=t.toString(16);n.length<4;)n="0"+n;return n};return r(i[0])+r(i[1])+r(i[2])+r(i[3])+r(i[4])+r(i[5])+r(i[6])+r(i[7])}return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=16*Math.random()|0;return("x"===t?n:3&n|8).toString(16)})}function L(t){if(!t)return{};var n=t.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!n)return{};var i=n[6]||"",r=n[8]||"";return{host:n[4],path:n[5],protocol:n[2],relative:n[5]+i+r}}function q(t){if(t.message)return t.message;if(t.exception&&t.exception.values&&t.exception.values[0]){var n=t.exception.values[0];return n.type&&n.value?n.type+": "+n.value:n.type||n.value||t.event_id||"<unknown>"}return t.event_id||"<unknown>"}function F(t){var n=M();if(!("console"in n))return t();var i=n.console,r={};["debug","info","warn","error","log","assert"].forEach(function(t){t in n.console&&i[t].__sentry_original__&&(r[t]=i[t],i[t]=i[t].__sentry_original__)});var e=t();return Object.keys(r).forEach(function(t){i[t]=r[t]}),e}function U(t,n,i){t.exception=t.exception||{},t.exception.values=t.exception.values||[],t.exception.values[0]=t.exception.values[0]||{},t.exception.values[0].value=t.exception.values[0].value||n||"",t.exception.values[0].type=t.exception.values[0].type||i||"Error"}function P(t,n){void 0===n&&(n={});try{t.exception.values[0].mechanism=t.exception.values[0].mechanism||{},Object.keys(n).forEach(function(i){t.exception.values[0].mechanism[i]=n[i]})}catch(t){}}var H=6e4;var B=M(),J="Sentry Logger ",X=function(){function t(){this.u=!1}return t.prototype.disable=function(){this.u=!1},t.prototype.enable=function(){this.u=!0},t.prototype.log=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this.u&&F(function(){B.console.log(J+"[Log]: "+t.join(" "))})},t.prototype.warn=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this.u&&F(function(){B.console.warn(J+"[Warn]: "+t.join(" "))})},t.prototype.error=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this.u&&F(function(){B.console.error(J+"[Error]: "+t.join(" "))})},t}();B.__SENTRY__=B.__SENTRY__||{};var G=B.__SENTRY__.logger||(B.__SENTRY__.logger=new X),W=function(){function t(){this.s="function"==typeof WeakSet,this.h=this.s?new WeakSet:[]}return t.prototype.memoize=function(t){if(this.s)return!!this.h.has(t)||(this.h.add(t),!1);for(var n=0;n<this.h.length;n++){if(this.h[n]===t)return!0}return this.h.push(t),!1},t.prototype.unmemoize=function(t){if(this.s)this.h.delete(t);else for(var n=0;n<this.h.length;n++)if(this.h[n]===t){this.h.splice(n,1);break}},t}(),$="<anonymous>";function z(t){try{return t&&"function"==typeof t&&t.name||$}catch(t){return $}}function K(t,n,i){if(n in t){var r=t[n],e=i(r);if("function"==typeof e)try{e.prototype=e.prototype||{},Object.defineProperties(e,{__sentry_original__:{enumerable:!1,value:r}})}catch(t){}t[n]=e}}function V(t){if(d(t)){var n=t,i={message:n.message,name:n.name,stack:n.stack};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(i[r]=n[r]);return i}if(b(t)){var e=t,o={};o.type=e.type;try{o.target=w(e.target)?S(e.target):Object.prototype.toString.call(e.target)}catch(t){o.target="<unknown>"}try{o.currentTarget=w(e.currentTarget)?S(e.currentTarget):Object.prototype.toString.call(e.currentTarget)}catch(t){o.currentTarget="<unknown>"}for(var r in"undefined"!=typeof CustomEvent&&E(t,CustomEvent)&&(o.detail=e.detail),e)Object.prototype.hasOwnProperty.call(e,r)&&(o[r]=e);return o}return t}function Y(t){return function(t){return~-encodeURI(t).split(/%..|./).length}(JSON.stringify(t))}function Q(t,n,i){void 0===n&&(n=3),void 0===i&&(i=102400);var r=nt(t,n);return Y(r)>i?Q(t,n-1,i):r}function Z(t,n){return"domain"===n&&t&&"object"==typeof t&&t.v?"[Domain]":"domainEmitter"===n?"[DomainEmitter]":"undefined"!=typeof global&&t===global?"[Global]":"undefined"!=typeof window&&t===window?"[Window]":"undefined"!=typeof document&&t===document?"[Document]":g(i=t)&&"nativeEvent"in i&&"preventDefault"in i&&"stopPropagation"in i?"[SyntheticEvent]":"number"==typeof t&&t!=t?"[NaN]":void 0===t?"[undefined]":"function"==typeof t?"[Function: "+z(t)+"]":"symbol"==typeof t?"["+String(t)+"]":"bigint"==typeof t?"[BigInt: "+String(t)+"]":t;var i}function tt(t,n,i,r){if(void 0===i&&(i=1/0),void 0===r&&(r=new W),0===i)return function(t){var n=Object.prototype.toString.call(t);if("string"==typeof t)return t;if("[object Object]"===n)return"[Object]";if("[object Array]"===n)return"[Array]";var i=Z(t);return y(i)?i:n}(n);if(null!=n&&"function"==typeof n.toJSON)return n.toJSON();var e=Z(n,t);if(y(e))return e;var o=V(n),a=Array.isArray(n)?[]:{};if(r.memoize(n))return"[Circular ~]";for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(a[u]=tt(u,o[u],i-1,r));return r.unmemoize(n),a}function nt(t,n){try{return JSON.parse(JSON.stringify(t,function(t,i){return tt(t,i,n)}))}catch(t){return"**non-serializable**"}}function it(t,n){void 0===n&&(n=40);var i=Object.keys(V(t));if(i.sort(),!i.length)return"[object has no keys]";if(i[0].length>=n)return I(i[0],n);for(var r=i.length;r>0;r--){var e=i.slice(0,r).join(", ");if(!(e.length>n))return r===i.length?e:I(e,n)}return""}function rt(t){var n,i;if(g(t)){var r=t,e={};try{for(var o=f(Object.keys(r)),a=o.next();!a.done;a=o.next()){var u=a.value;void 0!==r[u]&&(e[u]=rt(r[u]))}}catch(t){n={error:t}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}return e}return Array.isArray(t)?t.map(rt):t}function et(){if(!("fetch"in M()))return!1;try{return new Headers,new Request(""),new Response,!0}catch(t){return!1}}function ot(t){return t&&/^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())}function at(){if(!et())return!1;try{return new Request("_",{referrerPolicy:"origin"}),!0}catch(t){return!1}}var ut,st=M(),ct={},ft={};function ht(t){if(!ft[t])switch(ft[t]=!0,t){case"console":!function(){if(!("console"in st))return;["debug","info","warn","error","log","assert"].forEach(function(t){t in st.console&&K(st.console,t,function(n){return function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];dt("console",{args:i,level:t}),n&&Function.prototype.apply.call(n,st.console,i)}})})}();break;case"dom":!function(){if(!("document"in st))return;var t=dt.bind(null,"dom"),n=bt(t,!0);st.document.addEventListener("click",n,!1),st.document.addEventListener("keypress",n,!1),["EventTarget","Node"].forEach(function(n){var i=st[n]&&st[n].prototype;i&&i.hasOwnProperty&&i.hasOwnProperty("addEventListener")&&(K(i,"addEventListener",function(n){return function(i,r,e){if("click"===i||"keypress"==i)try{var o=this.__sentry_instrumentation_handlers__=this.__sentry_instrumentation_handlers__||{},a=o[i]=o[i]||{refCount:0};if(!a.handler){var u=bt(t);a.handler=u,n.call(this,i,u,e)}a.refCount+=1}catch(t){}return n.call(this,i,r,e)}}),K(i,"removeEventListener",function(t){return function(n,i,r){if("click"===n||"keypress"==n)try{var e=this.__sentry_instrumentation_handlers__||{},o=e[n];o&&(o.refCount-=1,o.refCount<=0&&(t.call(this,n,o.handler,r),o.handler=void 0,delete e[n]),0===Object.keys(e).length&&delete this.__sentry_instrumentation_handlers__)}catch(t){}return t.call(this,n,i,r)}}))})}();break;case"xhr":!function(){if(!("XMLHttpRequest"in st))return;var t=[],n=[],i=XMLHttpRequest.prototype;K(i,"open",function(i){return function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];var o=this,a=r[1];o.__sentry_xhr__={method:m(r[0])?r[0].toUpperCase():r[0],url:r[1]},m(a)&&"POST"===o.__sentry_xhr__.method&&a.match(/sentry_key/)&&(o.__sentry_own_request__=!0);var u=function(){if(4===o.readyState){try{o.__sentry_xhr__&&(o.__sentry_xhr__.status_code=o.status)}catch(t){}try{var i=t.indexOf(o);if(-1!==i){t.splice(i);var e=n.splice(i)[0];o.__sentry_xhr__&&void 0!==e[0]&&(o.__sentry_xhr__.body=e[0])}}catch(t){}dt("xhr",{args:r,endTimestamp:Date.now(),startTimestamp:Date.now(),xhr:o})}};return"onreadystatechange"in o&&"function"==typeof o.onreadystatechange?K(o,"onreadystatechange",function(t){return function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return u(),t.apply(o,n)}}):o.addEventListener("readystatechange",u),i.apply(o,r)}}),K(i,"send",function(i){return function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return t.push(this),n.push(r),dt("xhr",{args:r,startTimestamp:Date.now(),xhr:this}),i.apply(this,r)}})}();break;case"fetch":!function(){if(!function(){if(!et())return!1;var t=M();if(ot(t.fetch))return!0;var n=!1,i=t.document;if(i&&"function"==typeof i.createElement)try{var r=i.createElement("iframe");r.hidden=!0,i.head.appendChild(r),r.contentWindow&&r.contentWindow.fetch&&(n=ot(r.contentWindow.fetch)),i.head.removeChild(r)}catch(t){G.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",t)}return n}())return;K(st,"fetch",function(t){return function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];var r={args:n,fetchData:{method:lt(n),url:pt(n)},startTimestamp:Date.now()};return dt("fetch",s({},r)),t.apply(st,n).then(function(t){return dt("fetch",s(s({},r),{endTimestamp:Date.now(),response:t})),t},function(t){throw dt("fetch",s(s({},r),{endTimestamp:Date.now(),error:t})),t})}})}();break;case"history":!function(){if(t=M(),n=t.chrome,i=n&&n.app&&n.app.runtime,r="history"in t&&!!t.history.pushState&&!!t.history.replaceState,i||!r)return;var t,n,i,r;var e=st.onpopstate;function o(t){return function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];var r=n.length>2?n[2]:void 0;if(r){var e=ut,o=String(r);ut=o,dt("history",{from:e,to:o})}return t.apply(this,n)}}st.onpopstate=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var i=st.location.href,r=ut;if(ut=i,dt("history",{from:r,to:i}),e)try{return e.apply(this,t)}catch(t){}},K(st.history,"pushState",o),K(st.history,"replaceState",o)}();break;case"error":wt=st.onerror,st.onerror=function(t,n,i,r,e){return dt("error",{column:r,error:e,line:i,msg:t,url:n}),!!wt&&wt.apply(this,arguments)};break;case"unhandledrejection":Et=st.onunhandledrejection,st.onunhandledrejection=function(t){return dt("unhandledrejection",t),!Et||Et.apply(this,arguments)};break;default:G.warn("unknown instrumentation type:",t)}}function vt(t){t&&"string"==typeof t.type&&"function"==typeof t.callback&&(ct[t.type]=ct[t.type]||[],ct[t.type].push(t.callback),ht(t.type))}function dt(t,n){var i,r;if(t&&ct[t])try{for(var e=f(ct[t]||[]),o=e.next();!o.done;o=e.next()){var a=o.value;try{a(n)}catch(n){G.error("Error while triggering instrumentation handler.\nType: "+t+"\nName: "+z(a)+"\nError: "+n)}}}catch(t){i={error:t}}finally{try{o&&!o.done&&(r=e.return)&&r.call(e)}finally{if(i)throw i.error}}}function lt(t){return void 0===t&&(t=[]),"Request"in st&&E(t[0],Request)&&t[0].method?String(t[0].method).toUpperCase():t[1]&&t[1].method?String(t[1].method).toUpperCase():"GET"}function pt(t){return void 0===t&&(t=[]),"string"==typeof t[0]?t[0]:"Request"in st&&E(t[0],Request)?t[0].url:String(t[0])}var mt,yt,gt=1e3;function bt(t,n){return void 0===n&&(n=!1),function(i){if(i&&yt!==i&&!function(t){if("keypress"!==t.type)return!1;try{var n=t.target;if(!n||!n.tagName)return!0;if("INPUT"===n.tagName||"TEXTAREA"===n.tagName||n.isContentEditable)return!1}catch(t){}return!0}(i)){var r="keypress"===i.type?"input":i.type;void 0===mt?(t({event:i,name:r,global:n}),yt=i):function(t,n){if(!t)return!0;if(t.type!==n.type)return!0;try{if(t.target!==n.target)return!0}catch(t){}return!1}(yt,i)&&(t({event:i,name:r,global:n}),yt=i),clearTimeout(mt),mt=st.setTimeout(function(){mt=void 0},gt)}}}var wt=null;var Tt,Et=null;!function(t){t.PENDING="PENDING",t.RESOLVED="RESOLVED",t.REJECTED="REJECTED"}(Tt||(Tt={}));var St=function(){function t(t){var n=this;this.l=Tt.PENDING,this.p=[],this.m=function(t){n.g(Tt.RESOLVED,t)},this.T=function(t){n.g(Tt.REJECTED,t)},this.g=function(t,i){n.l===Tt.PENDING&&(T(i)?i.then(n.m,n.T):(n.l=t,n.S=i,n._()))},this.k=function(t){n.p=n.p.concat(t),n._()},this._=function(){if(n.l!==Tt.PENDING){var t=n.p.slice();n.p=[],t.forEach(function(t){t.done||(n.l===Tt.RESOLVED&&t.onfulfilled&&t.onfulfilled(n.S),n.l===Tt.REJECTED&&t.onrejected&&t.onrejected(n.S),t.done=!0)})}};try{t(this.m,this.T)}catch(t){this.T(t)}}return t.resolve=function(n){return new t(function(t){t(n)})},t.reject=function(n){return new t(function(t,i){i(n)})},t.all=function(n){return new t(function(i,r){if(Array.isArray(n))if(0!==n.length){var e=n.length,o=[];n.forEach(function(n,a){t.resolve(n).then(function(t){o[a]=t,0===(e-=1)&&i(o)}).then(null,r)})}else i([]);else r(new TypeError("Promise.all requires an array as input."))})},t.prototype.then=function(n,i){var r=this;return new t(function(t,e){r.k({done:!1,onfulfilled:function(i){if(n)try{return void t(n(i))}catch(t){return void e(t)}else t(i)},onrejected:function(n){if(i)try{return void t(i(n))}catch(t){return void e(t)}else e(n)}})})},t.prototype.catch=function(t){return this.then(function(t){return t},t)},t.prototype.finally=function(n){var i=this;return new t(function(t,r){var e,o;return i.then(function(t){o=!1,e=t,n&&n()},function(t){o=!0,e=t,n&&n()}).then(function(){o?r(e):t(e)})})},t.prototype.toString=function(){return"[object SyncPromise]"},t}(),xt=function(){function t(t){this.O=t,this.j=[]}return t.prototype.isReady=function(){return void 0===this.O||this.length()<this.O},t.prototype.add=function(t){var n=this;return this.isReady()?(-1===this.j.indexOf(t)&&this.j.push(t),t.then(function(){return n.remove(t)}).then(null,function(){return n.remove(t).then(null,function(){})}),t):St.reject(new k("Not adding Promise due to buffer limit reached."))},t.prototype.remove=function(t){return this.j.splice(this.j.indexOf(t),1)[0]},t.prototype.length=function(){return this.j.length},t.prototype.drain=function(t){var n=this;return new St(function(i){var r=setTimeout(function(){t&&t>0&&i(!1)},t);St.all(n.j).then(function(){clearTimeout(r),i(!0)}).then(null,function(){i(!0)})})},t}(),_t={nowSeconds:function(){return Date.now()/1e3}};var kt=D()?function(){try{return(t=module,n="perf_hooks",t.require(n)).performance}catch(t){return}var t,n}():function(){var t=M().performance;if(t&&t.now)return{now:function(){return t.now()},timeOrigin:Date.now()-t.now()}}(),Ot=void 0===kt?_t:{nowSeconds:function(){return(kt.timeOrigin+kt.now())/1e3}},jt=_t.nowSeconds.bind(_t),Dt=Ot.nowSeconds.bind(Ot),It=function(){var t=M().performance;if(t){var n=t.now(),i=Date.now(),r=t.timeOrigin?Math.abs(t.timeOrigin+n-i):36e5,e=r<36e5,o=t.timing&&t.timing.navigationStart,a="number"==typeof o?Math.abs(o+n-i):36e5;return e||a<36e5?r<=a?t.timeOrigin:o:i}}(),Nt=function(){function t(){this.D=!1,this.I=[],this.N=[],this.R=[],this.C={},this.M={},this.A={},this.L={}}return t.clone=function(n){var i=new t;return n&&(i.R=v(n.R),i.M=s({},n.M),i.A=s({},n.A),i.L=s({},n.L),i.C=n.C,i.q=n.q,i.F=n.F,i.U=n.U,i.P=n.P,i.H=n.H,i.N=v(n.N)),i},t.prototype.addScopeListener=function(t){this.I.push(t)},t.prototype.addEventProcessor=function(t){return this.N.push(t),this},t.prototype.setUser=function(t){return this.C=t||{},this.U&&this.U.update({user:t}),this.B(),this},t.prototype.getUser=function(){return this.C},t.prototype.setTags=function(t){return this.M=s(s({},this.M),t),this.B(),this},t.prototype.setTag=function(t,n){var i;return this.M=s(s({},this.M),((i={})[t]=n,i)),this.B(),this},t.prototype.setExtras=function(t){return this.A=s(s({},this.A),t),this.B(),this},t.prototype.setExtra=function(t,n){var i;return this.A=s(s({},this.A),((i={})[t]=n,i)),this.B(),this},t.prototype.setFingerprint=function(t){return this.H=t,this.B(),this},t.prototype.setLevel=function(t){return this.q=t,this.B(),this},t.prototype.setTransactionName=function(t){return this.P=t,this.B(),this},t.prototype.setTransaction=function(t){return this.setTransactionName(t)},t.prototype.setContext=function(t,n){var i;return null===n?delete this.L[t]:this.L=s(s({},this.L),((i={})[t]=n,i)),this.B(),this},t.prototype.setSpan=function(t){return this.F=t,this.B(),this},t.prototype.getSpan=function(){return this.F},t.prototype.getTransaction=function(){var t,n,i,r,e=this.getSpan();return(null===(t=e)||void 0===t?void 0:t.transaction)?null===(n=e)||void 0===n?void 0:n.transaction:(null===(r=null===(i=e)||void 0===i?void 0:i.spanRecorder)||void 0===r?void 0:r.spans[0])?e.spanRecorder.spans[0]:void 0},t.prototype.setSession=function(t){return t?this.U=t:delete this.U,this.B(),this},t.prototype.getSession=function(){return this.U},t.prototype.update=function(n){if(!n)return this;if("function"==typeof n){var i=n(this);return i instanceof t?i:this}return n instanceof t?(this.M=s(s({},this.M),n.M),this.A=s(s({},this.A),n.A),this.L=s(s({},this.L),n.L),n.C&&Object.keys(n.C).length&&(this.C=n.C),n.q&&(this.q=n.q),n.H&&(this.H=n.H)):g(n)&&(n=n,this.M=s(s({},this.M),n.tags),this.A=s(s({},this.A),n.extra),this.L=s(s({},this.L),n.contexts),n.user&&(this.C=n.user),n.level&&(this.q=n.level),n.fingerprint&&(this.H=n.fingerprint)),this},t.prototype.clear=function(){return this.R=[],this.M={},this.A={},this.C={},this.L={},this.q=void 0,this.P=void 0,this.H=void 0,this.F=void 0,this.U=void 0,this.B(),this},t.prototype.addBreadcrumb=function(t,n){var i=s({timestamp:jt()},t);return this.R=void 0!==n&&n>=0?v(this.R,[i]).slice(-n):v(this.R,[i]),this.B(),this},t.prototype.clearBreadcrumbs=function(){return this.R=[],this.B(),this},t.prototype.applyToEvent=function(t,n){var i;if(this.A&&Object.keys(this.A).length&&(t.extra=s(s({},this.A),t.extra)),this.M&&Object.keys(this.M).length&&(t.tags=s(s({},this.M),t.tags)),this.C&&Object.keys(this.C).length&&(t.user=s(s({},this.C),t.user)),this.L&&Object.keys(this.L).length&&(t.contexts=s(s({},this.L),t.contexts)),this.q&&(t.level=this.q),this.P&&(t.transaction=this.P),this.F){t.contexts=s({trace:this.F.getTraceContext()},t.contexts);var r=null===(i=this.F.transaction)||void 0===i?void 0:i.name;r&&(t.tags=s({transaction:r},t.tags))}return this.J(t),t.breadcrumbs=v(t.breadcrumbs||[],this.R),t.breadcrumbs=t.breadcrumbs.length>0?t.breadcrumbs:void 0,this.X(v(Rt(),this.N),t,n)},t.prototype.X=function(t,n,i,r){var e=this;return void 0===r&&(r=0),new St(function(o,a){var u=t[r];if(null===n||"function"!=typeof u)o(n);else{var c=u(s({},n),i);T(c)?c.then(function(n){return e.X(t,n,i,r+1).then(o)}).then(null,a):e.X(t,c,i,r+1).then(o).then(null,a)}})},t.prototype.B=function(){var t=this;this.D||(this.D=!0,this.I.forEach(function(n){n(t)}),this.D=!1)},t.prototype.J=function(t){t.fingerprint=t.fingerprint?Array.isArray(t.fingerprint)?t.fingerprint:[t.fingerprint]:[],this.H&&(t.fingerprint=t.fingerprint.concat(this.H)),t.fingerprint&&!t.fingerprint.length&&delete t.fingerprint},t}();function Rt(){var t=M();return t.__SENTRY__=t.__SENTRY__||{},t.__SENTRY__.globalEventProcessors=t.__SENTRY__.globalEventProcessors||[],t.__SENTRY__.globalEventProcessors}function Ct(t){Rt().push(t)}var Mt=function(){function t(t){this.errors=0,this.sid=A(),this.timestamp=Date.now(),this.started=Date.now(),this.duration=0,this.status=e.Ok,this.init=!0,t&&this.update(t)}return t.prototype.update=function(t){void 0===t&&(t={}),t.user&&(t.user.ip_address&&(this.ipAddress=t.user.ip_address),t.did||(this.did=t.user.id||t.user.email||t.user.username)),this.timestamp=t.timestamp||Date.now(),t.sid&&(this.sid=32===t.sid.length?t.sid:A()),void 0!==t.init&&(this.init=t.init),t.did&&(this.did=""+t.did),"number"==typeof t.started&&(this.started=t.started),"number"==typeof t.duration?this.duration=t.duration:this.duration=this.timestamp-this.started,t.release&&(this.release=t.release),t.environment&&(this.environment=t.environment),t.ipAddress&&(this.ipAddress=t.ipAddress),t.userAgent&&(this.userAgent=t.userAgent),"number"==typeof t.errors&&(this.errors=t.errors),t.status&&(this.status=t.status)},t.prototype.close=function(t){t?this.update({status:t}):this.status===e.Ok?this.update({status:e.Exited}):this.update()},t.prototype.toJSON=function(){return rt({sid:""+this.sid,init:this.init,started:new Date(this.started).toISOString(),timestamp:new Date(this.timestamp).toISOString(),status:this.status,errors:this.errors,did:"number"==typeof this.did||"string"==typeof this.did?""+this.did:void 0,duration:this.duration,attrs:rt({release:this.release,environment:this.environment,ip_address:this.ipAddress,user_agent:this.userAgent})})},t}(),At=3,Lt=function(){function t(t,n,i){void 0===n&&(n=new Nt),void 0===i&&(i=At),this.G=i,this.W=[{}],this.getStackTop().scope=n,this.bindClient(t)}return t.prototype.isOlderThan=function(t){return this.G<t},t.prototype.bindClient=function(t){this.getStackTop().client=t,t&&t.setupIntegrations&&t.setupIntegrations()},t.prototype.pushScope=function(){var t=Nt.clone(this.getScope());return this.getStack().push({client:this.getClient(),scope:t}),t},t.prototype.popScope=function(){return!(this.getStack().length<=1)&&!!this.getStack().pop()},t.prototype.withScope=function(t){var n=this.pushScope();try{t(n)}finally{this.popScope()}},t.prototype.getClient=function(){return this.getStackTop().client},t.prototype.getScope=function(){return this.getStackTop().scope},t.prototype.getStack=function(){return this.W},t.prototype.getStackTop=function(){return this.W[this.W.length-1]},t.prototype.captureException=function(t,n){var i=this.$=A(),r=n;if(!n){var e=void 0;try{throw new Error("Sentry syntheticException")}catch(t){e=t}r={originalException:t,syntheticException:e}}return this.K("captureException",t,s(s({},r),{event_id:i})),i},t.prototype.captureMessage=function(t,n,i){var r=this.$=A(),e=i;if(!i){var o=void 0;try{throw new Error(t)}catch(t){o=t}e={originalException:t,syntheticException:o}}return this.K("captureMessage",t,n,s(s({},e),{event_id:r})),r},t.prototype.captureEvent=function(t,n){var i=this.$=A();return this.K("captureEvent",t,s(s({},n),{event_id:i})),i},t.prototype.lastEventId=function(){return this.$},t.prototype.addBreadcrumb=function(t,n){var i=this.getStackTop(),r=i.scope,e=i.client;if(r&&e){var o=e.getOptions&&e.getOptions()||{},a=o.beforeBreadcrumb,u=void 0===a?null:a,c=o.maxBreadcrumbs,f=void 0===c?100:c;if(!(f<=0)){var h=jt(),v=s({timestamp:h},t),d=u?F(function(){return u(v,n)}):v;null!==d&&r.addBreadcrumb(d,Math.min(f,100))}}},t.prototype.setUser=function(t){var n=this.getScope();n&&n.setUser(t)},t.prototype.setTags=function(t){var n=this.getScope();n&&n.setTags(t)},t.prototype.setExtras=function(t){var n=this.getScope();n&&n.setExtras(t)},t.prototype.setTag=function(t,n){var i=this.getScope();i&&i.setTag(t,n)},t.prototype.setExtra=function(t,n){var i=this.getScope();i&&i.setExtra(t,n)},t.prototype.setContext=function(t,n){var i=this.getScope();i&&i.setContext(t,n)},t.prototype.configureScope=function(t){var n=this.getStackTop(),i=n.scope,r=n.client;i&&r&&t(i)},t.prototype.run=function(t){var n=Ft(this);try{t(this)}finally{Ft(n)}},t.prototype.getIntegration=function(t){var n=this.getClient();if(!n)return null;try{return n.getIntegration(t)}catch(n){return G.warn("Cannot retrieve integration "+t.id+" from the current Hub"),null}},t.prototype.startSpan=function(t){return this.V("startSpan",t)},t.prototype.startTransaction=function(t,n){return this.V("startTransaction",t,n)},t.prototype.traceHeaders=function(){return this.V("traceHeaders")},t.prototype.captureSession=function(t){if(void 0===t&&(t=!1),t)return this.endSession();this.Y()},t.prototype.endSession=function(){var t,n,i,r,e;null===(i=null===(n=null===(t=this.getStackTop())||void 0===t?void 0:t.scope)||void 0===n?void 0:n.getSession())||void 0===i||i.close(),this.Y(),null===(e=null===(r=this.getStackTop())||void 0===r?void 0:r.scope)||void 0===e||e.setSession()},t.prototype.startSession=function(t){var n=this.getStackTop(),i=n.scope,r=n.client,o=r&&r.getOptions()||{},a=o.release,u=o.environment,c=new Mt(s(s({release:a,environment:u},i&&{user:i.getUser()}),t));if(i){var f=i.getSession&&i.getSession();f&&f.status===e.Ok&&f.update({status:e.Exited}),this.endSession(),i.setSession(c)}return c},t.prototype.Y=function(){var t=this.getStackTop(),n=t.scope,i=t.client;if(n){var r=n.getSession&&n.getSession();r&&i&&i.captureSession&&i.captureSession(r)}},t.prototype.K=function(t){for(var n,i=[],r=1;r<arguments.length;r++)i[r-1]=arguments[r];var e=this.getStackTop(),o=e.scope,a=e.client;a&&a[t]&&(n=a)[t].apply(n,v(i,[o]))},t.prototype.V=function(t){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];var r=qt().__SENTRY__;if(r&&r.extensions&&"function"==typeof r.extensions[t])return r.extensions[t].apply(this,n);G.warn("Extension method "+t+" couldn't be found, doing nothing.")},t}();function qt(){var t=M();return t.__SENTRY__=t.__SENTRY__||{extensions:{},hub:void 0},t}function Ft(t){var n=qt(),i=Ht(n);return Bt(n,t),i}function Ut(){var t=qt();return Pt(t)&&!Ht(t).isOlderThan(At)||Bt(t,new Lt),D()?function(t){var n,i,r;try{var e=null===(r=null===(i=null===(n=qt().__SENTRY__)||void 0===n?void 0:n.extensions)||void 0===i?void 0:i.domain)||void 0===r?void 0:r.active;if(!e)return Ht(t);if(!Pt(e)||Ht(e).isOlderThan(At)){var o=Ht(t).getStackTop();Bt(e,new Lt(o.client,Nt.clone(o.scope)))}return Ht(e)}catch(n){return Ht(t)}}(t):Ht(t)}function Pt(t){return!!(t&&t.__SENTRY__&&t.__SENTRY__.hub)}function Ht(t){return t&&t.__SENTRY__&&t.__SENTRY__.hub?t.__SENTRY__.hub:(t.__SENTRY__=t.__SENTRY__||{},t.__SENTRY__.hub=new Lt,t.__SENTRY__.hub)}function Bt(t,n){return!!t&&(t.__SENTRY__=t.__SENTRY__||{},t.__SENTRY__.hub=n,!0)}function Jt(t){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];var r=Ut();if(r&&r[t])return r[t].apply(r,v(n));throw new Error("No hub defined or "+t+" was not found on the hub, please open a bug report.")}function captureException(t,n){var i;try{throw new Error("Sentry syntheticException")}catch(t){i=t}return Jt("captureException",t,{captureContext:n,originalException:t,syntheticException:i})}function Xt(t){Jt("withScope",t)}var Gt=function(){function t(t,n){void 0===n&&(n={}),this.dsn=t,this.Z=new j(t),this.metadata=n}return t.prototype.getDsn=function(){return this.Z},t.prototype.getBaseApiEndpoint=function(){var t=this.Z,n=t.protocol?t.protocol+":":"",i=t.port?":"+t.port:"";return n+"//"+t.host+i+(t.path?"/"+t.path:"")+"/api/"},t.prototype.getStoreEndpoint=function(){return this.tt("store")},t.prototype.getStoreEndpointWithUrlEncodedAuth=function(){return this.getStoreEndpoint()+"?"+this.nt()},t.prototype.getEnvelopeEndpointWithUrlEncodedAuth=function(){return this.it()+"?"+this.nt()},t.prototype.getStoreEndpointPath=function(){var t=this.Z;return(t.path?"/"+t.path:"")+"/api/"+t.projectId+"/store/"},t.prototype.getRequestHeaders=function(t,n){var i=this.Z,r=["Sentry sentry_version=7"];return r.push("sentry_client="+t+"/"+n),r.push("sentry_key="+i.publicKey),i.pass&&r.push("sentry_secret="+i.pass),{"Content-Type":"application/json","X-Sentry-Auth":r.join(", ")}},t.prototype.getReportDialogEndpoint=function(t){void 0===t&&(t={});var n=this.Z,i=this.getBaseApiEndpoint()+"embed/error-page/",r=[];for(var e in r.push("dsn="+n.toString()),t)if("dsn"!==e)if("user"===e){if(!t.user)continue;t.user.name&&r.push("name="+encodeURIComponent(t.user.name)),t.user.email&&r.push("email="+encodeURIComponent(t.user.email))}else r.push(encodeURIComponent(e)+"="+encodeURIComponent(t[e]));return r.length?i+"?"+r.join("&"):i},t.prototype.it=function(){return this.tt("envelope")},t.prototype.tt=function(t){return""+this.getBaseApiEndpoint()+this.Z.projectId+"/"+t+"/"},t.prototype.nt=function(){var t,n={sentry_key:this.Z.publicKey,sentry_version:"7"};return t=n,Object.keys(t).map(function(n){return encodeURIComponent(n)+"="+encodeURIComponent(t[n])}).join("&")},t}(),Wt=[];function $t(t){var n={};return function(t){var n=t.defaultIntegrations&&v(t.defaultIntegrations)||[],i=t.integrations,r=[];if(Array.isArray(i)){var e=i.map(function(t){return t.name}),o=[];n.forEach(function(t){-1===e.indexOf(t.name)&&-1===o.indexOf(t.name)&&(r.push(t),o.push(t.name))}),i.forEach(function(t){-1===o.indexOf(t.name)&&(r.push(t),o.push(t.name))})}else"function"==typeof i?(r=i(n),r=Array.isArray(r)?r:[r]):r=v(n);var a=r.map(function(t){return t.name});return-1!==a.indexOf("Debug")&&r.push.apply(r,v(r.splice(a.indexOf("Debug"),1))),r}(t).forEach(function(t){n[t.name]=t,function(t){-1===Wt.indexOf(t.name)&&(t.setupOnce(Ct,Ut),Wt.push(t.name),G.log("Integration installed: "+t.name))}(t)}),n}var zt=function(){function t(t,n){this.rt={},this.et=0,this.ot=new t(n),this.at=n,n.dsn&&(this.ut=new j(n.dsn))}return t.prototype.captureException=function(t,n,i){var r=this,e=n&&n.event_id;return this.st(this.ct().eventFromException(t,n).then(function(t){return r.ft(t,n,i)}).then(function(t){e=t})),e},t.prototype.captureMessage=function(t,n,i,r){var e=this,o=i&&i.event_id,a=y(t)?this.ct().eventFromMessage(String(t),n,i):this.ct().eventFromException(t,i);return this.st(a.then(function(t){return e.ft(t,i,r)}).then(function(t){o=t})),o},t.prototype.captureEvent=function(t,n,i){var r=n&&n.event_id;return this.st(this.ft(t,n,i).then(function(t){r=t})),r},t.prototype.captureSession=function(t){"string"!=typeof t.release?G.warn("Discarded session because of missing or non-string release"):(this.ht(t),t.update({init:!1}))},t.prototype.getDsn=function(){return this.ut},t.prototype.getOptions=function(){return this.at},t.prototype.flush=function(t){var n=this;return this.vt(t).then(function(i){return n.ct().getTransport().close(t).then(function(t){return i&&t})})},t.prototype.close=function(t){var n=this;return this.flush(t).then(function(t){return n.getOptions().enabled=!1,t})},t.prototype.setupIntegrations=function(){this.dt()&&(this.rt=$t(this.at))},t.prototype.getIntegration=function(t){try{return this.rt[t.id]||null}catch(n){return G.warn("Cannot retrieve integration "+t.id+" from the current Client"),null}},t.prototype.lt=function(t,n){var i,r,o,a=!1,u=!1,c=n.exception&&n.exception.values;if(c){u=!0;try{for(var h=f(c),v=h.next();!v.done;v=h.next()){var d=v.value.mechanism;if(d&&!1===d.handled){a=!0;break}}}catch(t){i={error:t}}finally{try{v&&!v.done&&(r=h.return)&&r.call(h)}finally{if(i)throw i.error}}}var l=n.user;if(!t.userAgent){var p=n.request?n.request.headers:{};for(var m in p)if("user-agent"===m.toLowerCase()){o=p[m];break}}t.update(s(s({},a&&{status:e.Crashed}),{user:l,userAgent:o,errors:t.errors+Number(u||a)})),this.captureSession(t)},t.prototype.ht=function(t){this.ct().sendSession(t)},t.prototype.vt=function(t){var n=this;return new St(function(i){var r=0,e=setInterval(function(){0==n.et?(clearInterval(e),i(!0)):(r+=1,t&&r>=t&&(clearInterval(e),i(!1)))},1)})},t.prototype.ct=function(){return this.ot},t.prototype.dt=function(){return!1!==this.getOptions().enabled&&void 0!==this.ut},t.prototype.pt=function(t,n,i){var r=this,e=this.getOptions().normalizeDepth,o=void 0===e?3:e,a=s(s({},t),{event_id:t.event_id||(i&&i.event_id?i.event_id:A()),timestamp:t.timestamp||jt()});this.yt(a),this.gt(a);var u=n;i&&i.captureContext&&(u=Nt.clone(u).update(i.captureContext));var c=St.resolve(a);return u&&(c=u.applyToEvent(a,i)),c.then(function(t){return"number"==typeof o&&o>0?r.bt(t,o):t})},t.prototype.bt=function(t,n){if(!t)return null;var i=s(s(s(s(s({},t),t.breadcrumbs&&{breadcrumbs:t.breadcrumbs.map(function(t){return s(s({},t),t.data&&{data:nt(t.data,n)})})}),t.user&&{user:nt(t.user,n)}),t.contexts&&{contexts:nt(t.contexts,n)}),t.extra&&{extra:nt(t.extra,n)});return t.contexts&&t.contexts.trace&&(i.contexts.trace=t.contexts.trace),i},t.prototype.yt=function(t){var n=this.getOptions(),i=n.environment,r=n.release,e=n.dist,o=n.maxValueLength,a=void 0===o?250:o;"environment"in t||(t.environment="environment"in n?i:"production"),void 0===t.release&&void 0!==r&&(t.release=r),void 0===t.dist&&void 0!==e&&(t.dist=e),t.message&&(t.message=I(t.message,a));var u=t.exception&&t.exception.values&&t.exception.values[0];u&&u.value&&(u.value=I(u.value,a));var s=t.request;s&&s.url&&(s.url=I(s.url,a))},t.prototype.gt=function(t){var n=Object.keys(this.rt);n.length>0&&(t.sdk=t.sdk||{},t.sdk.integrations=v(t.sdk.integrations||[],n))},t.prototype.wt=function(t){this.ct().sendEvent(t)},t.prototype.ft=function(t,n,i){return this.Tt(t,n,i).then(function(t){return t.event_id},function(t){G.error(t)})},t.prototype.Tt=function(t,n,i){var r=this,e=this.getOptions(),o=e.beforeSend,a=e.sampleRate;if(!this.dt())return St.reject(new k("SDK not enabled, will not send event."));var u="transaction"===t.type;return!u&&"number"==typeof a&&Math.random()>a?St.reject(new k("Discarding event because it's not included in the random sample (sampling rate = "+a+")")):this.pt(t,i,n).then(function(t){if(null===t)throw new k("An event processor returned null, will not send event.");if(n&&n.data&&!0===n.data.__sentry__||u||!o)return t;var i=o(t,n);if(void 0===i)throw new k("`beforeSend` method has to return `null` or a valid event.");return T(i)?i.then(function(t){return t},function(t){throw new k("beforeSend rejected with "+t)}):i}).then(function(t){if(null===t)throw new k("`beforeSend` returned `null`, will not send event.");var n=i&&i.getSession&&i.getSession();return!u&&n&&r.lt(n,t),r.wt(t),t}).then(null,function(t){if(t instanceof k)throw t;throw r.captureException(t,{data:{__sentry__:!0},originalException:t}),new k("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: "+t)})},t.prototype.st=function(t){var n=this;this.et+=1,t.then(function(t){return n.et-=1,t},function(t){return n.et-=1,t})},t}(),Kt=function(){function n(){}return n.prototype.sendEvent=function(n){return St.resolve({reason:"NoopTransport: Event has been skipped because no Dsn is configured.",status:t.Status.Skipped})},n.prototype.close=function(t){return St.resolve(!0)},n}(),Vt=function(){function t(t){this.at=t,this.at.dsn||G.warn("No DSN provided, backend will not do anything."),this.Et=this.St()}return t.prototype.eventFromException=function(t,n){throw new k("Backend has to implement `eventFromException` method")},t.prototype.eventFromMessage=function(t,n,i){throw new k("Backend has to implement `eventFromMessage` method")},t.prototype.sendEvent=function(t){this.Et.sendEvent(t).then(null,function(t){G.error("Error while sending event: "+t)})},t.prototype.sendSession=function(t){this.Et.sendSession?this.Et.sendSession(t).then(null,function(t){G.error("Error while sending session: "+t)}):G.warn("Dropping session because custom transport doesn't implement sendSession")},t.prototype.getTransport=function(){return this.Et},t.prototype.St=function(){return new Kt},t}();function Yt(t){if(t.metadata&&t.metadata.sdk){var n=t.metadata.sdk;return{name:n.name,version:n.version}}}function Qt(t,n){return n?(t.sdk=t.sdk||{},t.sdk.name=t.sdk.name||n.name,t.sdk.version=t.sdk.version||n.version,t.sdk.integrations=v(t.sdk.integrations||[],n.integrations||[]),t.sdk.packages=v(t.sdk.packages||[],n.packages||[]),t):t}function Zt(t,n){var i=Yt(n);return{body:JSON.stringify(s({sent_at:(new Date).toISOString()},i&&{sdk:i}))+"\n"+JSON.stringify({type:"session"})+"\n"+JSON.stringify(t),type:"session",url:n.getEnvelopeEndpointWithUrlEncodedAuth()}}function tn(t,n){var i=Yt(n),r=t.type||"event",e="transaction"===r,o=t.debug_meta||{},a=o.transactionSampling,u=c(o,["transactionSampling"]),f=a||{},h=f.method,v=f.rate;0===Object.keys(u).length?delete t.debug_meta:t.debug_meta=u;var d={body:JSON.stringify(i?Qt(t,n.metadata.sdk):t),type:r,url:e?n.getEnvelopeEndpointWithUrlEncodedAuth():n.getStoreEndpointWithUrlEncodedAuth()};if(e){var l=JSON.stringify(s({event_id:t.event_id,sent_at:(new Date).toISOString()},i&&{sdk:i}))+"\n"+JSON.stringify({type:t.type,sample_rates:[{id:h,rate:v}]})+"\n"+d.body;d.body=l}return d}var nn,rn="6.3.1",en=function(){function t(){this.name=t.id}return t.prototype.setupOnce=function(){nn=Function.prototype.toString,Function.prototype.toString=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var i=this.__sentry_original__||this;return nn.apply(i,t)}},t.id="FunctionToString",t}(),on=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/],an=function(){function t(n){void 0===n&&(n={}),this.at=n,this.name=t.id}return t.prototype.setupOnce=function(){Ct(function(n){var i=Ut();if(!i)return n;var r=i.getIntegration(t);if(r){var e=i.getClient(),o=e?e.getOptions():{},a=r.xt(o);if(r._t(n,a))return null}return n})},t.prototype._t=function(t,n){return this.kt(t,n)?(G.warn("Event dropped due to being internal Sentry Error.\nEvent: "+q(t)),!0):this.Ot(t,n)?(G.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: "+q(t)),!0):this.jt(t,n)?(G.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: "+q(t)+".\nUrl: "+this.Dt(t)),!0):!this.It(t,n)&&(G.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: "+q(t)+".\nUrl: "+this.Dt(t)),!0)},t.prototype.kt=function(t,n){if(!n.ignoreInternal)return!1;try{return t&&t.exception&&t.exception.values&&t.exception.values[0]&&"SentryError"===t.exception.values[0].type||!1}catch(t){return!1}},t.prototype.Ot=function(t,n){return!(!n.ignoreErrors||!n.ignoreErrors.length)&&this.Nt(t).some(function(t){return n.ignoreErrors.some(function(n){return R(t,n)})})},t.prototype.jt=function(t,n){if(!n.denyUrls||!n.denyUrls.length)return!1;var i=this.Dt(t);return!!i&&n.denyUrls.some(function(t){return R(i,t)})},t.prototype.It=function(t,n){if(!n.allowUrls||!n.allowUrls.length)return!0;var i=this.Dt(t);return!i||n.allowUrls.some(function(t){return R(i,t)})},t.prototype.xt=function(t){return void 0===t&&(t={}),{allowUrls:v(this.at.whitelistUrls||[],this.at.allowUrls||[],t.whitelistUrls||[],t.allowUrls||[]),denyUrls:v(this.at.blacklistUrls||[],this.at.denyUrls||[],t.blacklistUrls||[],t.denyUrls||[]),ignoreErrors:v(this.at.ignoreErrors||[],t.ignoreErrors||[],on),ignoreInternal:void 0===this.at.ignoreInternal||this.at.ignoreInternal}},t.prototype.Nt=function(t){if(t.message)return[t.message];if(t.exception)try{var n=t.exception.values&&t.exception.values[0]||{},i=n.type,r=void 0===i?"":i,e=n.value,o=void 0===e?"":e;return[""+o,r+": "+o]}catch(n){return G.error("Cannot extract message for event "+q(t)),[]}return[]},t.prototype.Dt=function(t){try{if(t.stacktrace){var n=t.stacktrace.frames;return n&&n[n.length-1].filename||null}if(t.exception){var i=t.exception.values&&t.exception.values[0].stacktrace&&t.exception.values[0].stacktrace.frames;return i&&i[i.length-1].filename||null}return null}catch(n){return G.error("Cannot extract url for event "+q(t)),null}},t.id="InboundFilters",t}(),un=Object.freeze({__proto__:null,FunctionToString:en,InboundFilters:an}),sn="?",cn=/^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,fn=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. \/=]+)(?::(\d+))?(?::(\d+))?\s*$/i,hn=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,vn=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,dn=/\((\S*)(?::(\d+))(?::(\d+))\)/,ln=/Minified React error #\d+;/i;function pn(t){var n=null,i=0;t&&("number"==typeof t.framesToPop?i=t.framesToPop:ln.test(t.message)&&(i=1));try{if(n=function(t){if(!t||!t.stacktrace)return null;for(var n,i=t.stacktrace,r=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,e=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i,o=i.split("\n"),a=[],u=0;u<o.length;u+=2){var s=null;(n=r.exec(o[u]))?s={url:n[2],func:n[3],args:[],line:+n[1],column:null}:(n=e.exec(o[u]))&&(s={url:n[6],func:n[3]||n[4],args:n[5]?n[5].split(","):[],line:+n[1],column:+n[2]}),s&&(!s.func&&s.line&&(s.func=sn),a.push(s))}if(!a.length)return null;return{message:yn(t),name:t.name,stack:a}}(t))return mn(n,i)}catch(t){}try{if(n=function(t){if(!t||!t.stack)return null;for(var n,i,r,e=[],o=t.stack.split("\n"),a=0;a<o.length;++a){if(i=cn.exec(o[a])){var u=i[2]&&0===i[2].indexOf("native");i[2]&&0===i[2].indexOf("eval")&&(n=dn.exec(i[2]))&&(i[2]=n[1],i[3]=n[2],i[4]=n[3]);var s=i[2]&&0===i[2].indexOf("address at ")?i[2].substr("address at ".length):i[2],c=i[1]||sn,f=-1!==c.indexOf("safari-extension"),h=-1!==c.indexOf("safari-web-extension");(f||h)&&(c=-1!==c.indexOf("@")?c.split("@")[0]:sn,s=f?"safari-extension:"+s:"safari-web-extension:"+s),r={url:s,func:c,args:u?[i[2]]:[],line:i[3]?+i[3]:null,column:i[4]?+i[4]:null}}else if(i=hn.exec(o[a]))r={url:i[2],func:i[1]||sn,args:[],line:+i[3],column:i[4]?+i[4]:null};else{if(!(i=fn.exec(o[a])))continue;i[3]&&i[3].indexOf(" > eval")>-1&&(n=vn.exec(i[3]))?(i[1]=i[1]||"eval",i[3]=n[1],i[4]=n[2],i[5]=""):0!==a||i[5]||void 0===t.columnNumber||(e[0].column=t.columnNumber+1),r={url:i[3],func:i[1]||sn,args:i[2]?i[2].split(","):[],line:i[4]?+i[4]:null,column:i[5]?+i[5]:null}}!r.func&&r.line&&(r.func=sn),e.push(r)}if(!e.length)return null;return{message:yn(t),name:t.name,stack:e}}(t))return mn(n,i)}catch(t){}return{message:yn(t),name:t&&t.name,stack:[],failed:!0}}function mn(t,n){try{return s(s({},t),{stack:t.stack.slice(n)})}catch(n){return t}}function yn(t){var n=t&&t.message;return n?n.error&&"string"==typeof n.error.message?n.error.message:n:"No error message"}var gn=50;function bn(t){var n=Tn(t.stack),i={type:t.name,value:t.message};return n&&n.length&&(i.stacktrace={frames:n}),void 0===i.type&&""===i.value&&(i.value="Unrecoverable error caught"),i}function wn(t){return{exception:{values:[bn(t)]}}}function Tn(t){if(!t||!t.length)return[];var n=t,i=n[0].func||"",r=n[n.length-1].func||"";return-1===i.indexOf("captureMessage")&&-1===i.indexOf("captureException")||(n=n.slice(1)),-1!==r.indexOf("sentryWrapped")&&(n=n.slice(0,-1)),n.slice(0,gn).map(function(t){return{colno:null===t.column?void 0:t.column,filename:t.url||n[0].url,function:t.func||"?",in_app:!0,lineno:null===t.line?void 0:t.line}}).reverse()}function En(t,n,i){var r,e;if(void 0===i&&(i={}),l(t)&&t.error)return r=wn(pn(t=t.error));if(p(t)||(e=t,"[object DOMException]"===Object.prototype.toString.call(e))){var o=t,a=o.name||(p(o)?"DOMError":"DOMException"),u=o.message?a+": "+o.message:a;return U(r=Sn(u,n,i),u),"code"in o&&(r.tags=s(s({},r.tags),{"DOMException.code":""+o.code})),r}return d(t)?r=wn(pn(t)):g(t)||b(t)?(P(r=function(t,n,i){var r={exception:{values:[{type:b(t)?t.constructor.name:i?"UnhandledRejection":"Error",value:"Non-Error "+(i?"promise rejection":"exception")+" captured with keys: "+it(t)}]},extra:{__serialized__:Q(t)}};if(n){var e=Tn(pn(n).stack);r.stacktrace={frames:e}}return r}(t,n,i.rejection),{synthetic:!0}),r):(U(r=Sn(t,n,i),""+t,void 0),P(r,{synthetic:!0}),r)}function Sn(t,n,i){void 0===i&&(i={});var r={message:t};if(i.attachStacktrace&&n){var e=Tn(pn(n).stack);r.stacktrace={frames:e}}return r}var xn={event:"error",transaction:"transaction",session:"session"},_n=function(){function n(t){this.options=t,this.j=new xt(30),this.Rt={},this.Ct=new Gt(t.dsn,t.Mt),this.url=this.Ct.getStoreEndpointWithUrlEncodedAuth()}return n.prototype.sendEvent=function(t){throw new k("Transport Class has to implement `sendEvent` method")},n.prototype.close=function(t){return this.j.drain(t)},n.prototype.At=function(n){var i=n.requestType,r=n.response,e=n.headers,o=n.resolve,a=n.reject,u=t.Status.fromHttpCode(r.status);this.Lt(e)&&G.warn("Too many requests, backing off until: "+this.qt(i)),u!==t.Status.Success?a(r):o({status:u})},n.prototype.qt=function(t){var n=xn[t];return this.Rt[n]||this.Rt.all},n.prototype.Ft=function(t){return this.qt(t)>new Date(Date.now())},n.prototype.Lt=function(t){var n,i,r,e,o=Date.now(),a=t["x-sentry-rate-limits"],u=t["retry-after"];if(a){try{for(var s=f(a.trim().split(",")),c=s.next();!c.done;c=s.next()){var h=c.value.split(":",2),v=parseInt(h[0],10),d=1e3*(isNaN(v)?60:v);try{for(var l=(r=void 0,f(h[1].split(";"))),p=l.next();!p.done;p=l.next()){var m=p.value;this.Rt[m||"all"]=new Date(o+d)}}catch(t){r={error:t}}finally{try{p&&!p.done&&(e=l.return)&&e.call(l)}finally{if(r)throw r.error}}}}catch(t){n={error:t}}finally{try{c&&!c.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}return!0}return!!u&&(this.Rt.all=new Date(o+function(t,n){if(!n)return H;var i=parseInt(""+n,10);if(!isNaN(i))return 1e3*i;var r=Date.parse(""+n);return isNaN(r)?H:r-t}(o,u)),!0)},n}();var kn=function(t){function n(n,i){void 0===i&&(i=function(){var t,n,i=M();if(ot(i.fetch))return i.fetch.bind(i);var r=i.document,e=i.fetch;if("function"==typeof(null===(t=r)||void 0===t?void 0:t.createElement))try{var o=r.createElement("iframe");o.hidden=!0,r.head.appendChild(o),(null===(n=o.contentWindow)||void 0===n?void 0:n.fetch)&&(e=o.contentWindow.fetch),r.head.removeChild(o)}catch(t){G.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",t)}return e.bind(i)}());var r=t.call(this,n)||this;return r.Ut=i,r}return i(n,t),n.prototype.sendEvent=function(t){return this.Pt(tn(t,this.Ct),t)},n.prototype.sendSession=function(t){return this.Pt(Zt(t,this.Ct),t)},n.prototype.Pt=function(t,n){var i=this;if(this.Ft(t.type))return Promise.reject({event:n,type:t.type,reason:"Transport locked till "+this.qt(t.type)+" due to too many requests.",status:429});var r={body:t.body,method:"POST",referrerPolicy:at()?"origin":""};return void 0!==this.options.fetchParameters&&Object.assign(r,this.options.fetchParameters),void 0!==this.options.headers&&(r.headers=this.options.headers),this.j.add(new St(function(n,e){i.Ut(t.url,r).then(function(r){var o={"x-sentry-rate-limits":r.headers.get("X-Sentry-Rate-Limits"),"retry-after":r.headers.get("Retry-After")};i.At({requestType:t.type,response:r,headers:o,resolve:n,reject:e})}).catch(e)}))},n}(_n),On=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return i(n,t),n.prototype.sendEvent=function(t){return this.Pt(tn(t,this.Ct),t)},n.prototype.sendSession=function(t){return this.Pt(Zt(t,this.Ct),t)},n.prototype.Pt=function(t,n){var i=this;return this.Ft(t.type)?Promise.reject({event:n,type:t.type,reason:"Transport locked till "+this.qt(t.type)+" due to too many requests.",status:429}):this.j.add(new St(function(n,r){var e=new XMLHttpRequest;for(var o in e.onreadystatechange=function(){if(4===e.readyState){var o={"x-sentry-rate-limits":e.getResponseHeader("X-Sentry-Rate-Limits"),"retry-after":e.getResponseHeader("Retry-After")};i.At({requestType:t.type,response:e,headers:o,resolve:n,reject:r})}},e.open("POST",t.url),i.options.headers)i.options.headers.hasOwnProperty(o)&&e.setRequestHeader(o,i.options.headers[o]);e.send(t.body)}))},n}(_n),jn=Object.freeze({__proto__:null,BaseTransport:_n,FetchTransport:kn,XHRTransport:On}),Dn=function(n){function r(){return null!==n&&n.apply(this,arguments)||this}return i(r,n),r.prototype.eventFromException=function(n,i){return function(n,i,r){var e=En(i,r&&r.syntheticException||void 0,{attachStacktrace:n.attachStacktrace});return P(e,{handled:!0,type:"generic"}),e.level=t.Severity.Error,r&&r.event_id&&(e.event_id=r.event_id),St.resolve(e)}(this.at,n,i)},r.prototype.eventFromMessage=function(n,i,r){return void 0===i&&(i=t.Severity.Info),function(n,i,r,e){void 0===r&&(r=t.Severity.Info);var o=Sn(i,e&&e.syntheticException||void 0,{attachStacktrace:n.attachStacktrace});return o.level=r,e&&e.event_id&&(o.event_id=e.event_id),St.resolve(o)}(this.at,n,i,r)},r.prototype.St=function(){if(!this.at.dsn)return n.prototype.St.call(this);var t=s(s({},this.at.transportOptions),{dsn:this.at.dsn,Mt:this.at.Mt});return this.at.transport?new this.at.transport(t):et()?new kn(t):new On(t)},r}(Vt),In=0;function Nn(){return In>0}function Rn(t,n,i){if(void 0===n&&(n={}),"function"!=typeof t)return t;try{if(t.__sentry__)return t;if(t.__sentry_wrapped__)return t.__sentry_wrapped__}catch(n){return t}var sentryWrapped=function(){var r=Array.prototype.slice.call(arguments);try{i&&"function"==typeof i&&i.apply(this,arguments);var e=r.map(function(t){return Rn(t,n)});return t.handleEvent?t.handleEvent.apply(this,e):t.apply(this,e)}catch(t){throw In+=1,setTimeout(function(){In-=1}),Xt(function(i){i.addEventProcessor(function(t){var i=s({},t);return n.mechanism&&(U(i,void 0,void 0),P(i,n.mechanism)),i.extra=s(s({},i.extra),{arguments:r}),i}),captureException(t)}),t}};try{for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(sentryWrapped[r]=t[r])}catch(t){}t.prototype=t.prototype||{},sentryWrapped.prototype=t.prototype,Object.defineProperty(t,"__sentry_wrapped__",{enumerable:!1,value:sentryWrapped}),Object.defineProperties(sentryWrapped,{__sentry__:{enumerable:!1,value:!0},__sentry_original__:{enumerable:!1,value:t}});try{Object.getOwnPropertyDescriptor(sentryWrapped,"name").configurable&&Object.defineProperty(sentryWrapped,"name",{get:function(){return t.name}})}catch(t){}return sentryWrapped}function Cn(t){if(void 0===t&&(t={}),t.eventId)if(t.dsn){var n=document.createElement("script");n.async=!0,n.src=new Gt(t.dsn).getReportDialogEndpoint(t),t.onLoad&&(n.onload=t.onLoad),(document.head||document.body).appendChild(n)}else G.error("Missing dsn option in showReportDialog call");else G.error("Missing eventId option in showReportDialog call")}var Mn=function(){function n(t){this.name=n.id,this.Ht=!1,this.Bt=!1,this.at=s({onerror:!0,onunhandledrejection:!0},t)}return n.prototype.setupOnce=function(){Error.stackTraceLimit=50,this.at.onerror&&(G.log("Global Handler attached: onerror"),this.Jt()),this.at.onunhandledrejection&&(G.log("Global Handler attached: onunhandledrejection"),this.Xt())},n.prototype.Jt=function(){var t=this;this.Ht||(vt({callback:function(i){var r=i.error,e=Ut(),o=e.getIntegration(n),a=r&&!0===r.__sentry_own_request__;if(o&&!Nn()&&!a){var u=e.getClient(),s=y(r)?t.Gt(i.msg,i.url,i.line,i.column):t.Wt(En(r,void 0,{attachStacktrace:u&&u.getOptions().attachStacktrace,rejection:!1}),i.url,i.line,i.column);P(s,{handled:!1,type:"onerror"}),e.captureEvent(s,{originalException:r})}},type:"error"}),this.Ht=!0)},n.prototype.Xt=function(){var i=this;this.Bt||(vt({callback:function(r){var e=r;try{"reason"in r?e=r.reason:"detail"in r&&"reason"in r.detail&&(e=r.detail.reason)}catch(t){}var o=Ut(),a=o.getIntegration(n),u=e&&!0===e.__sentry_own_request__;if(!a||Nn()||u)return!0;var s=o.getClient(),c=y(e)?i.$t(e):En(e,void 0,{attachStacktrace:s&&s.getOptions().attachStacktrace,rejection:!0});c.level=t.Severity.Error,P(c,{handled:!1,type:"onunhandledrejection"}),o.captureEvent(c,{originalException:e})},type:"unhandledrejection"}),this.Bt=!0)},n.prototype.Gt=function(t,n,i,r){var e,o=l(t)?t.message:t;if(m(o)){var a=o.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);a&&(e=a[1],o=a[2])}var u={exception:{values:[{type:e||"Error",value:o}]}};return this.Wt(u,n,i,r)},n.prototype.$t=function(t){return{exception:{values:[{type:"UnhandledRejection",value:"Non-Error promise rejection captured with value: "+String(t)}]}}},n.prototype.Wt=function(t,n,i,r){t.exception=t.exception||{},t.exception.values=t.exception.values||[],t.exception.values[0]=t.exception.values[0]||{},t.exception.values[0].stacktrace=t.exception.values[0].stacktrace||{},t.exception.values[0].stacktrace.frames=t.exception.values[0].stacktrace.frames||[];var e=isNaN(parseInt(r,10))?void 0:r,o=isNaN(parseInt(i,10))?void 0:i,a=m(n)&&n.length>0?n:function(){try{return document.location.href}catch(t){return""}}();return 0===t.exception.values[0].stacktrace.frames.length&&t.exception.values[0].stacktrace.frames.push({colno:e,filename:a,function:"?",in_app:!0,lineno:o}),t},n.id="GlobalHandlers",n}(),An=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],Ln=function(){function t(n){this.name=t.id,this.at=s({XMLHttpRequest:!0,eventTarget:!0,requestAnimationFrame:!0,setInterval:!0,setTimeout:!0},n)}return t.prototype.setupOnce=function(){var t=M();(this.at.setTimeout&&K(t,"setTimeout",this.zt.bind(this)),this.at.setInterval&&K(t,"setInterval",this.zt.bind(this)),this.at.requestAnimationFrame&&K(t,"requestAnimationFrame",this.Kt.bind(this)),this.at.XMLHttpRequest&&"XMLHttpRequest"in t&&K(XMLHttpRequest.prototype,"send",this.Vt.bind(this)),this.at.eventTarget)&&(Array.isArray(this.at.eventTarget)?this.at.eventTarget:An).forEach(this.Yt.bind(this))},t.prototype.zt=function(t){return function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];var r=n[0];return n[0]=Rn(r,{mechanism:{data:{function:z(t)},handled:!0,type:"instrument"}}),t.apply(this,n)}},t.prototype.Kt=function(t){return function(n){return t.call(this,Rn(n,{mechanism:{data:{function:"requestAnimationFrame",handler:z(t)},handled:!0,type:"instrument"}}))}},t.prototype.Yt=function(t){var n=M(),i=n[t]&&n[t].prototype;i&&i.hasOwnProperty&&i.hasOwnProperty("addEventListener")&&(K(i,"addEventListener",function(n){return function(i,r,e){try{"function"==typeof r.handleEvent&&(r.handleEvent=Rn(r.handleEvent.bind(r),{mechanism:{data:{function:"handleEvent",handler:z(r),target:t},handled:!0,type:"instrument"}}))}catch(t){}return n.call(this,i,Rn(r,{mechanism:{data:{function:"addEventListener",handler:z(r),target:t},handled:!0,type:"instrument"}}),e)}}),K(i,"removeEventListener",function(t){return function(n,i,r){var e,o=i;try{var a=null===(e=o)||void 0===e?void 0:e.__sentry_wrapped__;a&&t.call(this,n,a,r)}catch(t){}return t.call(this,n,o,r)}}))},t.prototype.Vt=function(t){return function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];var r=this;return["onload","onerror","onprogress","onreadystatechange"].forEach(function(t){t in r&&"function"==typeof r[t]&&K(r,t,function(n){var i={mechanism:{data:{function:t,handler:z(n)},handled:!0,type:"instrument"}};return n.__sentry_original__&&(i.mechanism.data.handler=z(n.__sentry_original__)),Rn(n,i)})}),t.apply(this,n)}},t.id="TryCatch",t}(),qn=function(){function n(t){this.name=n.id,this.at=s({console:!0,dom:!0,fetch:!0,history:!0,sentry:!0,xhr:!0},t)}return n.prototype.addSentryBreadcrumb=function(t){this.at.sentry&&Ut().addBreadcrumb({category:"sentry."+("transaction"===t.type?"transaction":"event"),event_id:t.event_id,level:t.level,message:q(t)},{event:t})},n.prototype.setupOnce=function(){var t=this;this.at.console&&vt({callback:function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];t.Qt.apply(t,v(n))},type:"console"}),this.at.dom&&vt({callback:function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];t.Zt.apply(t,v(n))},type:"dom"}),this.at.xhr&&vt({callback:function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];t.tn.apply(t,v(n))},type:"xhr"}),this.at.fetch&&vt({callback:function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];t.nn.apply(t,v(n))},type:"fetch"}),this.at.history&&vt({callback:function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];t.in.apply(t,v(n))},type:"history"})},n.prototype.Qt=function(n){var i={category:"console",data:{arguments:n.args,logger:"console"},level:t.Severity.fromString(n.level),message:N(n.args," ")};if("assert"===n.level){if(!1!==n.args[0])return;i.message="Assertion failed: "+(N(n.args.slice(1)," ")||"console.assert"),i.data.arguments=n.args.slice(1)}Ut().addBreadcrumb(i,{input:n.args,level:n.level})},n.prototype.Zt=function(t){var n;try{n=t.event.target?S(t.event.target):S(t.event)}catch(t){n="<unknown>"}0!==n.length&&Ut().addBreadcrumb({category:"ui."+t.name,message:n},{event:t.event,name:t.name,global:t.global})},n.prototype.tn=function(t){if(t.endTimestamp){if(t.xhr.__sentry_own_request__)return;var n=t.xhr.__sentry_xhr__||{},i=n.method,r=n.url,e=n.status_code,o=n.body;Ut().addBreadcrumb({category:"xhr",data:{method:i,url:r,status_code:e},type:"http"},{xhr:t.xhr,input:o})}else;},n.prototype.nn=function(n){n.endTimestamp&&(n.fetchData.url.match(/sentry_key/)&&"POST"===n.fetchData.method||(n.error?Ut().addBreadcrumb({category:"fetch",data:n.fetchData,level:t.Severity.Error,type:"http"},{data:n.error,input:n.args}):Ut().addBreadcrumb({category:"fetch",data:s(s({},n.fetchData),{status_code:n.response.status}),type:"http"},{input:n.args,response:n.response})))},n.prototype.in=function(t){var n=M(),i=t.from,r=t.to,e=L(n.location.href),o=L(i),a=L(r);o.path||(o=e),e.protocol===a.protocol&&e.host===a.host&&(r=a.relative),e.protocol===o.protocol&&e.host===o.host&&(i=o.relative),Ut().addBreadcrumb({category:"navigation",data:{from:i,to:r}})},n.id="Breadcrumbs",n}(),Fn="cause",Un=5,Pn=function(){function t(n){void 0===n&&(n={}),this.name=t.id,this.rn=n.key||Fn,this.O=n.limit||Un}return t.prototype.setupOnce=function(){Ct(function(n,i){var r=Ut().getIntegration(t);return r?r.en(n,i):n})},t.prototype.en=function(t,n){if(!(t.exception&&t.exception.values&&n&&E(n.originalException,Error)))return t;var i=this.on(n.originalException,this.rn);return t.exception.values=v(i,t.exception.values),t},t.prototype.on=function(t,n,i){if(void 0===i&&(i=[]),!E(t[n],Error)||i.length+1>=this.O)return i;var r=bn(pn(t[n]));return this.on(t[n],n,v([r],i))},t.id="LinkedErrors",t}(),Hn=M(),Bn=function(){function t(){this.name=t.id}return t.prototype.setupOnce=function(){Ct(function(n){var i,r,e;if(Ut().getIntegration(t)){if(!Hn.navigator&&!Hn.location&&!Hn.document)return n;var o=(null===(i=n.request)||void 0===i?void 0:i.url)||(null===(r=Hn.location)||void 0===r?void 0:r.href),a=(Hn.document||{}).referrer,u=(Hn.navigator||{}).userAgent,c=s(s(s({},null===(e=n.request)||void 0===e?void 0:e.headers),a&&{Referer:a}),u&&{"User-Agent":u}),f=s(s({},o&&{url:o}),{headers:c});return s(s({},n),{request:f})}return n})},t.id="UserAgent",t}(),Jn=Object.freeze({__proto__:null,GlobalHandlers:Mn,TryCatch:Ln,Breadcrumbs:qn,LinkedErrors:Pn,UserAgent:Bn}),Xn=function(t){function n(n){void 0===n&&(n={});return n.Mt=n.Mt||{},n.Mt.sdk=n.Mt.sdk||{name:"sentry.javascript.browser",packages:[{name:"npm:@sentry/browser",version:rn}],version:rn},t.call(this,Dn,n)||this}return i(n,t),n.prototype.showReportDialog=function(t){void 0===t&&(t={}),M().document&&(this.dt()?Cn(s(s({},t),{dsn:t.dsn||this.getDsn()})):G.error("Trying to call showReportDialog with Sentry Client disabled"))},n.prototype.pt=function(n,i,r){return n.platform=n.platform||"javascript",t.prototype.pt.call(this,n,i,r)},n.prototype.wt=function(n){var i=this.getIntegration(qn);i&&i.addSentryBreadcrumb(n),t.prototype.wt.call(this,n)},n}(zt),Gn=[new an,new en,new Ln,new qn,new Mn,new Pn,new Bn];var Wn={},$n=M();$n.Sentry&&$n.Sentry.Integrations&&(Wn=$n.Sentry.Integrations);var zn,Kn=s(s(s({},Wn),un),Jn);!function(t){t.Ok="ok",t.DeadlineExceeded="deadline_exceeded",t.Unauthenticated="unauthenticated",t.PermissionDenied="permission_denied",t.NotFound="not_found",t.ResourceExhausted="resource_exhausted",t.InvalidArgument="invalid_argument",t.Unimplemented="unimplemented",t.Unavailable="unavailable",t.InternalError="internal_error",t.UnknownError="unknown_error",t.Cancelled="cancelled",t.AlreadyExists="already_exists",t.FailedPrecondition="failed_precondition",t.Aborted="aborted",t.OutOfRange="out_of_range",t.DataLoss="data_loss"}(zn||(zn={})),function(t){t.fromHttpCode=function(n){if(n<400)return t.Ok;if(n>=400&&n<500)switch(n){case 401:return t.Unauthenticated;case 403:return t.PermissionDenied;case 404:return t.NotFound;case 409:return t.AlreadyExists;case 413:return t.FailedPrecondition;case 429:return t.ResourceExhausted;default:return t.InvalidArgument}if(n>=500&&n<600)switch(n){case 501:return t.Unimplemented;case 503:return t.Unavailable;case 504:return t.DeadlineExceeded;default:return t.InternalError}return t.UnknownError}}(zn||(zn={}));var Vn=new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");function Yn(t){return"tracesSampleRate"in t||"tracesSampler"in t}function Qn(t){var n,i;return void 0===t&&(t=Ut()),null===(i=null===(n=t)||void 0===n?void 0:n.getScope())||void 0===i?void 0:i.getTransaction()}function Zn(t){return t/1e3}function ti(){var t=Qn();t&&(G.log("[Tracing] Transaction: "+zn.InternalError+" -> Global error occured"),t.setStatus(zn.InternalError))}var ni=function(){function t(t){void 0===t&&(t=1e3),this.spans=[],this.an=t}return t.prototype.add=function(t){this.spans.length>this.an?t.spanRecorder=void 0:this.spans.push(t)},t}(),ii=function(){function t(t){if(this.traceId=A(),this.spanId=A().substring(16),this.startTimestamp=Dt(),this.tags={},this.data={},!t)return this;t.traceId&&(this.traceId=t.traceId),t.spanId&&(this.spanId=t.spanId),t.parentSpanId&&(this.parentSpanId=t.parentSpanId),"sampled"in t&&(this.sampled=t.sampled),t.op&&(this.op=t.op),t.description&&(this.description=t.description),t.data&&(this.data=t.data),t.tags&&(this.tags=t.tags),t.status&&(this.status=t.status),t.startTimestamp&&(this.startTimestamp=t.startTimestamp),t.endTimestamp&&(this.endTimestamp=t.endTimestamp)}return t.prototype.child=function(t){return this.startChild(t)},t.prototype.startChild=function(n){var i=new t(s(s({},n),{parentSpanId:this.spanId,sampled:this.sampled,traceId:this.traceId}));return i.spanRecorder=this.spanRecorder,i.spanRecorder&&i.spanRecorder.add(i),i.transaction=this.transaction,i},t.prototype.setTag=function(t,n){var i;return this.tags=s(s({},this.tags),((i={})[t]=n,i)),this},t.prototype.setData=function(t,n){var i;return this.data=s(s({},this.data),((i={})[t]=n,i)),this},t.prototype.setStatus=function(t){return this.status=t,this},t.prototype.setHttpStatus=function(t){this.setTag("http.status_code",String(t));var n=zn.fromHttpCode(t);return n!==zn.UnknownError&&this.setStatus(n),this},t.prototype.isSuccess=function(){return this.status===zn.Ok},t.prototype.finish=function(t){this.endTimestamp="number"==typeof t?t:Dt()},t.prototype.toTraceparent=function(){var t="";return void 0!==this.sampled&&(t=this.sampled?"-1":"-0"),this.traceId+"-"+this.spanId+t},t.prototype.toContext=function(){return rt({data:this.data,description:this.description,endTimestamp:this.endTimestamp,op:this.op,parentSpanId:this.parentSpanId,sampled:this.sampled,spanId:this.spanId,startTimestamp:this.startTimestamp,status:this.status,tags:this.tags,traceId:this.traceId})},t.prototype.updateWithContext=function(t){var n,i,r,e,o;return this.data=null!=(n=t.data)?n:{},this.description=t.description,this.endTimestamp=t.endTimestamp,this.op=t.op,this.parentSpanId=t.parentSpanId,this.sampled=t.sampled,this.spanId=null!=(i=t.spanId)?i:this.spanId,this.startTimestamp=null!=(r=t.startTimestamp)?r:this.startTimestamp,this.status=t.status,this.tags=null!=(e=t.tags)?e:{},this.traceId=null!=(o=t.traceId)?o:this.traceId,this},t.prototype.getTraceContext=function(){return rt({data:Object.keys(this.data).length>0?this.data:void 0,description:this.description,op:this.op,parent_span_id:this.parentSpanId,span_id:this.spanId,status:this.status,tags:Object.keys(this.tags).length>0?this.tags:void 0,trace_id:this.traceId})},t.prototype.toJSON=function(){return rt({data:Object.keys(this.data).length>0?this.data:void 0,description:this.description,op:this.op,parent_span_id:this.parentSpanId,span_id:this.spanId,start_timestamp:this.startTimestamp,status:this.status,tags:Object.keys(this.tags).length>0?this.tags:void 0,timestamp:this.endTimestamp,trace_id:this.traceId})},t}(),ri=function(t){function n(n,i){var r=t.call(this,n)||this;return r.Mt={},r.un={},r.sn=Ut(),E(i,Lt)&&(r.sn=i),r.name=n.name||"",r.cn=n.trimEnd,r.transaction=r,r}return i(n,t),n.prototype.setName=function(t){this.name=t},n.prototype.initSpanRecorder=function(t){void 0===t&&(t=1e3),this.spanRecorder||(this.spanRecorder=new ni(t)),this.spanRecorder.add(this)},n.prototype.setMeasurements=function(t){this.un=s({},t)},n.prototype.setMetadata=function(t){this.Mt=s(s({},this.Mt),t)},n.prototype.finish=function(n){var i=this;if(void 0===this.endTimestamp){if(this.name||(G.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),this.name="<unlabeled transaction>"),t.prototype.finish.call(this,n),!0===this.sampled){var r=this.spanRecorder?this.spanRecorder.spans.filter(function(t){return t!==i&&t.endTimestamp}):[];this.cn&&r.length>0&&(this.endTimestamp=r.reduce(function(t,n){return t.endTimestamp&&n.endTimestamp?t.endTimestamp>n.endTimestamp?t:n:t}).endTimestamp);var e={contexts:{trace:this.getTraceContext()},spans:r,start_timestamp:this.startTimestamp,tags:this.tags,timestamp:this.endTimestamp,transaction:this.name,type:"transaction",debug_meta:this.Mt};return Object.keys(this.un).length>0&&(G.log("[Measurements] Adding measurements to transaction",JSON.stringify(this.un,void 0,2)),e.measurements=this.un),G.log("[Tracing] Finishing "+this.op+" transaction: "+this.name+"."),this.sn.captureEvent(e)}G.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled.")}},n.prototype.toContext=function(){var n=t.prototype.toContext.call(this);return rt(s(s({},n),{name:this.name,trimEnd:this.cn}))},n.prototype.updateWithContext=function(n){var i;return t.prototype.updateWithContext.call(this,n),this.name=null!=(i=n.name)?i:"",this.cn=n.trimEnd,this},n}(ii),ei=1e3,oi=function(t){function n(n,i,r,e){void 0===r&&(r="");var o=t.call(this,e)||this;return o.fn=n,o.hn=i,o.transactionSpanId=r,o}return i(n,t),n.prototype.add=function(n){var i=this;n.spanId!==this.transactionSpanId&&(n.finish=function(t){n.endTimestamp="number"==typeof t?t:Dt(),i.hn(n.spanId)},void 0===n.endTimestamp&&this.fn(n.spanId)),t.prototype.add.call(this,n)},n}(ni),ai=function(t){function n(n,i,r,e){void 0===r&&(r=ei),void 0===e&&(e=!1);var o=t.call(this,n,i)||this;return o.vn=i,o.dn=r,o.ln=e,o.activities={},o.pn=0,o.mn=0,o.yn=!1,o.gn=[],i&&e&&(ui(i),G.log("Setting idle transaction on scope. Span ID: "+o.spanId),i.configureScope(function(t){return t.setSpan(o)})),o.bn=setTimeout(function(){o.yn||o.finish()},o.dn),o}return i(n,t),n.prototype.finish=function(n){var i,r,e=this;if(void 0===n&&(n=Dt()),this.yn=!0,this.activities={},this.spanRecorder){G.log("[Tracing] finishing IdleTransaction",new Date(1e3*n).toISOString(),this.op);try{for(var o=f(this.gn),a=o.next();!a.done;a=o.next()){(0,a.value)(this,n)}}catch(t){i={error:t}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}this.spanRecorder.spans=this.spanRecorder.spans.filter(function(t){if(t.spanId===e.spanId)return!0;t.endTimestamp||(t.endTimestamp=n,t.setStatus(zn.Cancelled),G.log("[Tracing] cancelling span since transaction ended early",JSON.stringify(t,void 0,2)));var i=t.startTimestamp<n;return i||G.log("[Tracing] discarding Span since it happened after Transaction was finished",JSON.stringify(t,void 0,2)),i}),G.log("[Tracing] flushing IdleTransaction")}else G.log("[Tracing] No active IdleTransaction");return this.ln&&ui(this.vn),t.prototype.finish.call(this,n)},n.prototype.registerBeforeFinishCallback=function(t){this.gn.push(t)},n.prototype.initSpanRecorder=function(t){var n=this;if(!this.spanRecorder){this.spanRecorder=new oi(function(t){n.yn||n.fn(t)},function(t){n.yn||n.hn(t)},this.spanId,t),G.log("Starting heartbeat"),this.wn()}this.spanRecorder.add(this)},n.prototype.fn=function(t){this.bn&&(clearTimeout(this.bn),this.bn=void 0),G.log("[Tracing] pushActivity: "+t),this.activities[t]=!0,G.log("[Tracing] new activities count",Object.keys(this.activities).length)},n.prototype.hn=function(t){var n=this;if(this.activities[t]&&(G.log("[Tracing] popActivity "+t),delete this.activities[t],G.log("[Tracing] new activities count",Object.keys(this.activities).length)),0===Object.keys(this.activities).length){var i=this.dn,r=Dt()+i/1e3;setTimeout(function(){n.yn||n.finish(r)},i)}},n.prototype.Tn=function(){if(clearTimeout(this.pn),!this.yn){var t=Object.keys(this.activities),n=t.length?t.reduce(function(t,n){return t+n}):"";n===this.En?this.mn+=1:this.mn=1,this.En=n,this.mn>=3?(G.log("[Tracing] Transaction finished because of no change for 3 heart beats"),this.setStatus(zn.DeadlineExceeded),this.setTag("heartbeat","failed"),this.finish()):this.wn()}},n.prototype.wn=function(){var t=this;G.log("pinging Heartbeat -> current counter: "+this.mn),this.pn=setTimeout(function(){t.Tn()},5e3)},n}(ri);function ui(t){if(t){var n=t.getScope();if(n)n.getTransaction()&&n.setSpan(void 0)}}function si(){var t=this.getScope();if(t){var n=t.getSpan();if(n)return{"sentry-trace":n.toTraceparent()}}return{}}function ci(t,n,i){return Yn(n)?void 0!==t.sampled?(t.setMetadata({transactionSampling:{method:u.Explicit}}),t):("function"==typeof n.tracesSampler?(r=n.tracesSampler(i),t.setMetadata({transactionSampling:{method:u.Sampler,rate:Number(r)}})):void 0!==i.parentSampled?(r=i.parentSampled,t.setMetadata({transactionSampling:{method:u.Inheritance}})):(r=n.tracesSampleRate,t.setMetadata({transactionSampling:{method:u.Rate,rate:Number(r)}})),function(t){if(isNaN(t)||"number"!=typeof t&&"boolean"!=typeof t)return G.warn("[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got "+JSON.stringify(t)+" of type "+JSON.stringify(typeof t)+"."),!1;if(t<0||t>1)return G.warn("[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got "+t+"."),!1;return!0}(r)?r?(t.sampled=Math.random()<r,t.sampled?(G.log("[Tracing] starting "+t.op+" transaction - "+t.name),t):(G.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = "+Number(r)+")"),t)):(G.log("[Tracing] Discarding transaction because "+("function"==typeof n.tracesSampler?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0")),t.sampled=!1,t):(G.warn("[Tracing] Discarding transaction because of invalid sample rate."),t.sampled=!1,t)):(t.sampled=!1,t);var r}function fi(t,n){var i,r,e=(null===(i=this.getClient())||void 0===i?void 0:i.getOptions())||{},o=new ri(t,this);return(o=ci(o,e,s({parentSampled:t.parentSampled,transactionContext:t},n))).sampled&&o.initSpanRecorder(null===(r=e.Sn)||void 0===r?void 0:r.maxSpans),o}function hi(){var t;(t=qt()).__SENTRY__&&(t.__SENTRY__.extensions=t.__SENTRY__.extensions||{},t.__SENTRY__.extensions.startTransaction||(t.__SENTRY__.extensions.startTransaction=fi),t.__SENTRY__.extensions.traceHeaders||(t.__SENTRY__.extensions.traceHeaders=si)),vt({callback:ti,type:"error"}),vt({callback:ti,type:"unhandledrejection"})}var vi=M();var di,li,pi=function(t,n,i,r){var e;return function(){i&&n.isFinal&&i.disconnect(),n.value>=0&&(r||n.isFinal||"hidden"===document.visibilityState)&&(n.delta=n.value-(e||0),(n.delta||n.isFinal||void 0===e)&&(t(n),e=n.value))}},mi=function(t,n){return void 0===n&&(n=-1),{name:t,value:n,delta:0,entries:[],id:Date.now()+"-"+(Math.floor(Math.random()*(9e12-1))+1e12),isFinal:!1}},yi=function(t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var i=new PerformanceObserver(function(t){return t.getEntries().map(n)});return i.observe({type:t,buffered:!0}),i}}catch(t){}},gi=!1,bi=!1,wi=function(t){gi=!t.persisted},Ti=function(t,n){void 0===n&&(n=!1),bi||(addEventListener("pagehide",wi),addEventListener("beforeunload",function(){}),bi=!0),addEventListener("visibilitychange",function(n){var i=n.timeStamp;"hidden"===document.visibilityState&&t({timeStamp:i,isUnloading:gi})},{capture:!0,once:n})},Ei=function(){return void 0===di&&(di="hidden"===document.visibilityState?0:1/0,Ti(function(t){var n=t.timeStamp;return di=n},!0)),{get timeStamp(){return di}}},Si=function(t,n){void 0===n&&(n=!1);var i,r=mi("LCP"),e=Ei(),o=function(t){var n=t.startTime;n<e.timeStamp?(r.value=n,r.entries.push(t)):r.isFinal=!0,i()},a=yi("largest-contentful-paint",o);if(a){i=pi(t,r,a,n);var u=function(){r.isFinal||(a.takeRecords().map(o),r.isFinal=!0,i())};(li||(li=new Promise(function(t){return["scroll","keydown","pointerdown"].map(function(n){addEventListener(n,t,{once:!0,passive:!0,capture:!0})})})),li).then(u),Ti(u,!0)}},xi=M(),_i=function(t){var n,i=mi("TTFB");n=function(){try{var n=xi.performance.getEntriesByType("navigation")[0]||function(){var t=xi.performance.timing,n={entryType:"navigation",startTime:0};for(var i in t)"navigationStart"!==i&&"toJSON"!==i&&(n[i]=Math.max(t[i]-t.navigationStart,0));return n}();i.value=i.delta=n.responseStart,i.entries=[n],t(i)}catch(t){}},"complete"===document.readyState?setTimeout(n,0):addEventListener("pageshow",n)},ki=M(),Oi=function(){function t(){this.un={},this.xn=0,ki&&ki.performance&&(ki.performance.mark&&ki.performance.mark("sentry-tracing-init"),this._n(),this.kn(),this.On(),this.jn())}return t.prototype.addPerformanceEntries=function(t){var n=this;if(ki&&ki.performance&&ki.performance.getEntries&&It){G.log("[Tracing] Adding & adjusting spans using Performance API");var i,r,e,o=Zn(It);if(ki.document)for(var a=0;a<document.scripts.length;a++)if("true"===document.scripts[a].dataset.entry){i=document.scripts[a].src;break}if(ki.performance.getEntries().slice(this.xn).forEach(function(a){var u=Zn(a.startTime),s=Zn(a.duration);if(!("navigation"===t.op&&o+u<t.startTimestamp))switch(a.entryType){case"navigation":!function(t,n,i){ji({transaction:t,entry:n,event:"unloadEvent",timeOrigin:i}),ji({transaction:t,entry:n,event:"redirect",timeOrigin:i}),ji({transaction:t,entry:n,event:"domContentLoadedEvent",timeOrigin:i}),ji({transaction:t,entry:n,event:"loadEvent",timeOrigin:i}),ji({transaction:t,entry:n,event:"connect",timeOrigin:i}),ji({transaction:t,entry:n,event:"secureConnection",timeOrigin:i,eventEnd:"connectEnd",description:"TLS/SSL"}),ji({transaction:t,entry:n,event:"fetch",timeOrigin:i,eventEnd:"domainLookupStart",description:"cache"}),ji({transaction:t,entry:n,event:"domainLookup",timeOrigin:i,description:"DNS"}),function(t,n,i){Di(t,{op:"browser",description:"request",startTimestamp:i+Zn(n.requestStart),endTimestamp:i+Zn(n.responseEnd)}),Di(t,{op:"browser",description:"response",startTimestamp:i+Zn(n.responseStart),endTimestamp:i+Zn(n.responseEnd)})}(t,n,i)}(t,a,o);break;case"mark":case"paint":case"measure":var c=function(t,n,i,r,e){var o=e+i,a=o+r;return Di(t,{description:n.name,endTimestamp:a,op:n.entryType,startTimestamp:o}),o}(t,a,u,s,o);void 0===e&&"sentry-tracing-init"===a.name&&(e=c);var f=Ei(),h=a.startTime<f.timeStamp;"first-paint"===a.name&&h&&(G.log("[Measurements] Adding FP"),n.un.fp={value:a.startTime},n.un["mark.fp"]={value:c}),"first-contentful-paint"===a.name&&h&&(G.log("[Measurements] Adding FCP"),n.un.fcp={value:a.startTime},n.un["mark.fcp"]={value:c});break;case"resource":var v=a.name.replace(window.location.origin,""),d=function(t,n,i,r,e,o){if("xmlhttprequest"===n.initiatorType||"fetch"===n.initiatorType)return;var a={};"transferSize"in n&&(a["Transfer Size"]=n.transferSize);"encodedBodySize"in n&&(a["Encoded Body Size"]=n.encodedBodySize);"decodedBodySize"in n&&(a["Decoded Body Size"]=n.decodedBodySize);var u=o+r,s=u+e;return Di(t,{description:i,endTimestamp:s,op:n.initiatorType?"resource."+n.initiatorType:"resource",startTimestamp:u,data:a}),s}(t,a,v,u,s,o);void 0===r&&(i||"").indexOf(v)>-1&&(r=d)}}),void 0!==r&&void 0!==e&&Di(t,{description:"evaluation",endTimestamp:e,op:"script",startTimestamp:r}),this.xn=Math.max(performance.getEntries().length-1,0),this.Dn(t),"pageload"===t.op){var u=Zn(It);["fcp","fp","lcp","ttfb"].forEach(function(i){if(n.un[i]&&!(u>=t.startTimestamp)){var r=n.un[i].value,e=u+Zn(r),o=Math.abs(1e3*(e-t.startTimestamp)),a=o-r;G.log("[Measurements] Normalized "+i+" from "+r+" to "+o+" ("+a+")"),n.un[i].value=o}}),this.un["mark.fid"]&&this.un.fid&&Di(t,{description:"first input delay",endTimestamp:this.un["mark.fid"].value+Zn(this.un.fid.value),op:"web.vitals",startTimestamp:this.un["mark.fid"].value}),t.setMeasurements(this.un),this.In&&(G.log("[Measurements] Adding LCP Data"),this.In.element&&t.setTag("lcp.element",S(this.In.element)),this.In.id&&t.setTag("lcp.id",this.In.id),this.In.url&&t.setTag("lcp.url",this.In.url.trim().slice(0,200)),t.setTag("lcp.size",this.In.size))}}},t.prototype._n=function(){var t=this;!function(t,n){void 0===n&&(n=!1);var i,r=mi("CLS",0),e=function(t){t.hadRecentInput||(r.value+=t.value,r.entries.push(t),i())},o=yi("layout-shift",e);o&&(i=pi(t,r,o,n),Ti(function(t){var n=t.isUnloading;o.takeRecords().map(e),n&&(r.isFinal=!0),i()}))}(function(n){n.entries.pop()&&(G.log("[Measurements] Adding CLS"),t.un.cls={value:n.value})})},t.prototype.Dn=function(t){var n=ki.navigator;if(n){var i=n.connection;i&&(i.effectiveType&&t.setTag("effectiveConnectionType",i.effectiveType),i.type&&t.setTag("connectionType",i.type),Ii(i.rtt)&&(this.un["connection.rtt"]={value:i.rtt}),Ii(i.downlink)&&(this.un["connection.downlink"]={value:i.downlink})),Ii(n.deviceMemory)&&t.setTag("deviceMemory",String(n.deviceMemory)),Ii(n.hardwareConcurrency)&&t.setTag("hardwareConcurrency",String(n.hardwareConcurrency))}},t.prototype.kn=function(){var t=this;Si(function(n){var i=n.entries.pop();if(i){var r=Zn(It),e=Zn(i.startTime);G.log("[Measurements] Adding LCP"),t.un.lcp={value:n.value},t.un["mark.lcp"]={value:r+e},t.In=i}})},t.prototype.On=function(){var t,n,i,r,e,o,a=this;t=function(t){var n=t.entries.pop();if(n){var i=Zn(It),r=Zn(n.startTime);G.log("[Measurements] Adding FID"),a.un.fid={value:t.value},a.un["mark.fid"]={value:i+r}}},n=mi("FID"),i=Ei(),e=yi("first-input",r=function(t){t.startTime<i.timeStamp&&(n.value=t.processingStart-t.startTime,n.entries.push(t),n.isFinal=!0,o())}),o=pi(t,n,e),e?Ti(function(){e.takeRecords().map(r),e.disconnect()},!0):window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay(function(t,r){r.timeStamp<i.timeStamp&&(n.value=t,n.isFinal=!0,n.entries=[{entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+t}],o())})},t.prototype.jn=function(){var t=this;_i(function(n){var i,r=n.entries.pop();if(r){G.log("[Measurements] Adding TTFB"),t.un.ttfb={value:n.value};var e=n.value-(i=n.entries[0],null!=i?i:r).requestStart;t.un["ttfb.requestTime"]={value:e}}})},t}();function ji(t){var n=t.transaction,i=t.entry,r=t.event,e=t.timeOrigin,o=t.eventEnd,a=t.description,u=o?i[o]:i[r+"End"],s=i[r+"Start"];s&&u&&Di(n,{op:"browser",description:null!=a?a:r,startTimestamp:e+Zn(s),endTimestamp:e+Zn(u)})}function Di(t,n){var i=n.startTimestamp,r=c(n,["startTimestamp"]);return i&&t.startTimestamp>i&&(t.startTimestamp=i),t.startChild(s({startTimestamp:i},r))}function Ii(t){return"number"==typeof t&&isFinite(t)}var Ni={traceFetch:!0,traceXHR:!0,tracingOrigins:["localhost",/^\//]};function Ri(t){var n=s(s({},Ni),t),i=n.traceFetch,r=n.traceXHR,e=n.tracingOrigins,o=n.shouldCreateSpanForRequest,a={},u=function(t){if(a[t])return a[t];var n=e;return a[t]=n.some(function(n){return R(t,n)})&&!R(t,"sentry_key"),a[t]},c=u;"function"==typeof o&&(c=function(t){return u(t)&&o(t)});var f={};i&&vt({callback:function(t){!function(t,n,i){var r,e=null===(r=Ut().getClient())||void 0===r?void 0:r.getOptions();if(!(e&&Yn(e)&&t.fetchData&&n(t.fetchData.url)))return;if(t.endTimestamp&&t.fetchData.__span){var o=i[t.fetchData.__span];return void(o&&(t.response?o.setHttpStatus(t.response.status):t.error&&o.setStatus(zn.InternalError),o.finish(),delete i[t.fetchData.__span]))}var a=Qn();if(a){var o=a.startChild({data:s(s({},t.fetchData),{type:"fetch"}),description:t.fetchData.method+" "+t.fetchData.url,op:"http"});t.fetchData.__span=o.spanId,i[o.spanId]=o;var u=t.args[0]=t.args[0],c=t.args[1]=t.args[1]||{},f=c.headers;E(u,Request)&&(f=u.headers),f?"function"==typeof f.append?f.append("sentry-trace",o.toTraceparent()):f=Array.isArray(f)?v(f,[["sentry-trace",o.toTraceparent()]]):s(s({},f),{"sentry-trace":o.toTraceparent()}):f={"sentry-trace":o.toTraceparent()},c.headers=f}}(t,c,f)},type:"fetch"}),r&&vt({callback:function(t){!function(t,n,i){var r,e=null===(r=Ut().getClient())||void 0===r?void 0:r.getOptions();if(!e||!Yn(e)||!(t.xhr&&t.xhr.__sentry_xhr__&&n(t.xhr.__sentry_xhr__.url))||t.xhr.__sentry_own_request__)return;var o=t.xhr.__sentry_xhr__;if(t.endTimestamp&&t.xhr.__sentry_xhr_span_id__){var a=i[t.xhr.__sentry_xhr_span_id__];return void(a&&(a.setHttpStatus(o.status_code),a.finish(),delete i[t.xhr.__sentry_xhr_span_id__]))}var u=Qn();if(u){var a=u.startChild({data:s(s({},o.data),{type:"xhr",method:o.method,url:o.url}),description:o.method+" "+o.url,op:"http"});if(t.xhr.__sentry_xhr_span_id__=a.spanId,i[t.xhr.__sentry_xhr_span_id__]=a,t.xhr.setRequestHeader)try{t.xhr.setRequestHeader("sentry-trace",a.toTraceparent())}catch(t){}}}(t,c,f)},type:"xhr"})}var Ci=M();var Mi=s({idleTimeout:ei,markBackgroundTransactions:!0,maxTransactionDuration:600,routingInstrumentation:function(t,n,i){if(void 0===n&&(n=!0),void 0===i&&(i=!0),Ci&&Ci.location){var r,e=Ci.location.href;n&&(r=t({name:Ci.location.pathname,op:"pageload"})),i&&vt({callback:function(n){var i=n.to,o=n.from;void 0===o&&e&&-1!==e.indexOf(i)?e=void 0:o!==i&&(e=void 0,r&&(G.log("[Tracing] Finishing current transaction with op: "+r.op),r.finish()),r=t({name:Ci.location.pathname,op:"navigation"}))},type:"history"})}else G.warn("Could not initialize routing instrumentation due to invalid location")},startTransactionOnLocationChange:!0,startTransactionOnPageLoad:!0},Ni),Ai=function(){function t(n){this.name=t.id,this.Nn=new Oi,this.Rn=!1;var i=Ni.tracingOrigins;n&&n.tracingOrigins&&Array.isArray(n.tracingOrigins)&&0!==n.tracingOrigins.length?i=n.tracingOrigins:this.Rn=!0,this.options=s(s(s({},Mi),n),{tracingOrigins:i})}return t.prototype.setupOnce=function(t,n){var i=this;this.Cn=n,this.Rn&&(G.warn("[Tracing] You need to define `tracingOrigins` in the options. Set an array of urls or patterns to trace."),G.warn("[Tracing] We added a reasonable default for you: "+Ni.tracingOrigins));var r=this.options,e=r.routingInstrumentation,o=r.startTransactionOnLocationChange,a=r.startTransactionOnPageLoad,u=r.markBackgroundTransactions,s=r.traceFetch,c=r.traceXHR,f=r.tracingOrigins,h=r.shouldCreateSpanForRequest;e(function(t){return i.Mn(t)},a,o),u&&(vi&&vi.document?vi.document.addEventListener("visibilitychange",function(){var t=Qn();vi.document.hidden&&t&&(G.log("[Tracing] Transaction: "+zn.Cancelled+" -> since tab moved to the background, op: "+t.op),t.status||t.setStatus(zn.Cancelled),t.setTag("visibilitychange","document.hidden"),t.finish())}):G.warn("[Tracing] Could not set up background tab detection due to lack of global document")),Ri({traceFetch:s,traceXHR:c,tracingOrigins:f,shouldCreateSpanForRequest:h})},t.prototype.Mn=function(t){var n=this;if(this.Cn){var i=this.options,r=i.beforeNavigate,e=i.idleTimeout,o=i.maxTransactionDuration,a="pageload"===t.op?function(){var t=(n="sentry-trace",i=document.querySelector("meta[name="+n+"]"),i?i.getAttribute("content"):null);var n,i;if(t)return function(t){var n=t.match(Vn);if(n){var i=void 0;return"1"===n[3]?i=!0:"0"===n[3]&&(i=!1),{traceId:n[1],parentSampled:i,parentSpanId:n[2]}}}(t);return}():void 0,u=s(s(s({},t),a),{trimEnd:!0}),c="function"==typeof r?r(u):u,f=void 0===c?s(s({},u),{sampled:!1}):c;!1===f.sampled&&G.log("[Tracing] Will not send "+f.op+" transaction because of beforeNavigate."),G.log("[Tracing] Starting "+f.op+" transaction on scope");var h=function(t,n,i,r,e){var o,a,u=(null===(o=t.getClient())||void 0===o?void 0:o.getOptions())||{},c=new ai(n,t,i,r);return(c=ci(c,u,s({parentSampled:n.parentSampled,transactionContext:n},e))).sampled&&c.initSpanRecorder(null===(a=u.Sn)||void 0===a?void 0:a.maxSpans),c}(this.Cn(),f,e,!0,{location:M().location});return h.registerBeforeFinishCallback(function(t,i){n.Nn.addPerformanceEntries(t),function(t,n,i){var r=i-n.startTimestamp;i&&(r>t||r<0)&&(n.setStatus(zn.DeadlineExceeded),n.setTag("maxTransactionDurationExceeded","true"))}(1e3*o,t,i)}),h}G.warn("[Tracing] Did not create "+t.op+" transaction because _getCurrentHub is invalid.")},t.id="BrowserTracing",t}();var Li={},qi=M();qi.Sentry&&qi.Sentry.Integrations&&(Li=qi.Sentry.Integrations);var Fi=s(s(s({},Li),Kn),{BrowserTracing:Ai});return hi(),t.BrowserClient=Xn,t.Hub=Lt,t.Integrations=Fi,t.SDK_NAME="sentry.javascript.browser",t.SDK_VERSION=rn,t.Scope=Nt,t.Span=ii,t.Transports=jn,t.addBreadcrumb=function(t){Jt("addBreadcrumb",t)},t.addExtensionMethods=hi,t.addGlobalEventProcessor=Ct,t.captureEvent=function(t){return Jt("captureEvent",t)},t.captureException=captureException,t.captureMessage=function(t,n){var i;try{throw new Error(t)}catch(t){i=t}return Jt("captureMessage",t,"string"==typeof n?n:void 0,s({originalException:t,syntheticException:i},"string"!=typeof n?{captureContext:n}:void 0))},t.close=function(t){var n=Ut().getClient();return n?n.close(t):St.reject(!1)},t.configureScope=function(t){Jt("configureScope",t)},t.defaultIntegrations=Gn,t.flush=function(t){var n=Ut().getClient();return n?n.flush(t):St.reject(!1)},t.forceLoad=function(){},t.getCurrentHub=Ut,t.getHubFromCarrier=Ht,t.init=function(t){if(void 0===t&&(t={}),void 0===t.defaultIntegrations&&(t.defaultIntegrations=Gn),void 0===t.release){var n=M();n.SENTRY_RELEASE&&n.SENTRY_RELEASE.id&&(t.release=n.SENTRY_RELEASE.id)}void 0===t.autoSessionTracking&&(t.autoSessionTracking=!0),function(t,n){!0===n.debug&&G.enable();var i=Ut(),r=new t(n);i.bindClient(r)}(Xn,t),t.autoSessionTracking&&function(){if(void 0!==M().document){var t=Ut();"function"==typeof t.startSession&&"function"==typeof t.captureSession&&(t.startSession(),t.captureSession(),vt({callback:function(){t.startSession(),t.captureSession()},type:"history"}))}else G.warn("Session tracking in non-browser environment with @sentry/browser is not supported.")}()},t.lastEventId=function(){return Ut().lastEventId()},t.onLoad=function(t){t()},t.setContext=function(t,n){Jt("setContext",t,n)},t.setExtra=function(t,n){Jt("setExtra",t,n)},t.setExtras=function(t){Jt("setExtras",t)},t.setTag=function(t,n){Jt("setTag",t,n)},t.setTags=function(t){Jt("setTags",t)},t.setUser=function(t){Jt("setUser",t)},t.showReportDialog=function(t){void 0===t&&(t={}),t.eventId||(t.eventId=Ut().lastEventId());var n=Ut().getClient();n&&n.showReportDialog(t)},t.startTransaction=function(t,n){return Jt("startTransaction",s({},t),n)},t.withScope=Xt,t.wrap=function(t){return Rn(t)()},t}({});
//# sourceMappingURL=bundle.tracing.min.js.map

/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

/*!

 diff v4.0.1

Software License Agreement (BSD License)

Copyright (c) 2009-2015, Kevin Decker <kpdecker@gmail.com>

All rights reserved.

Redistribution and use of this software in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above
  copyright notice, this list of conditions and the
  following disclaimer.

* Redistributions in binary form must reproduce the above
  copyright notice, this list of conditions and the
  following disclaimer in the documentation and/or other
  materials provided with the distribution.

* Neither the name of Kevin Decker nor the names of its
  contributors may be used to endorse or promote products
  derived from this software without specific prior
  written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT
OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
@license
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.Diff = {}));
}(this, function (exports) { 'use strict';

  function Diff() {}
  Diff.prototype = {
    diff: function diff(oldString, newString) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var callback = options.callback;

      if (typeof options === 'function') {
        callback = options;
        options = {};
      }

      this.options = options;
      var self = this;

      function done(value) {
        if (callback) {
          setTimeout(function () {
            callback(undefined, value);
          }, 0);
          return true;
        } else {
          return value;
        }
      } // Allow subclasses to massage the input prior to running


      oldString = this.castInput(oldString);
      newString = this.castInput(newString);
      oldString = this.removeEmpty(this.tokenize(oldString));
      newString = this.removeEmpty(this.tokenize(newString));
      var newLen = newString.length,
          oldLen = oldString.length;
      var editLength = 1;
      var maxEditLength = newLen + oldLen;
      var bestPath = [{
        newPos: -1,
        components: []
      }]; // Seed editLength = 0, i.e. the content starts with the same values

      var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);

      if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
        // Identity per the equality and tokenizer
        return done([{
          value: this.join(newString),
          count: newString.length
        }]);
      } // Main worker method. checks all permutations of a given edit length for acceptance.


      function execEditLength() {
        for (var diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {
          var basePath = void 0;

          var addPath = bestPath[diagonalPath - 1],
              removePath = bestPath[diagonalPath + 1],
              _oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;

          if (addPath) {
            // No one else is going to attempt to use this value, clear it
            bestPath[diagonalPath - 1] = undefined;
          }

          var canAdd = addPath && addPath.newPos + 1 < newLen,
              canRemove = removePath && 0 <= _oldPos && _oldPos < oldLen;

          if (!canAdd && !canRemove) {
            // If this path is a terminal then prune
            bestPath[diagonalPath] = undefined;
            continue;
          } // Select the diagonal that we want to branch from. We select the prior
          // path whose position in the new string is the farthest from the origin
          // and does not pass the bounds of the diff graph


          if (!canAdd || canRemove && addPath.newPos < removePath.newPos) {
            basePath = clonePath(removePath);
            self.pushComponent(basePath.components, undefined, true);
          } else {
            basePath = addPath; // No need to clone, we've pulled it from the list

            basePath.newPos++;
            self.pushComponent(basePath.components, true, undefined);
          }

          _oldPos = self.extractCommon(basePath, newString, oldString, diagonalPath); // If we have hit the end of both strings, then we are done

          if (basePath.newPos + 1 >= newLen && _oldPos + 1 >= oldLen) {
            return done(buildValues(self, basePath.components, newString, oldString, self.useLongestToken));
          } else {
            // Otherwise track this path as a potential candidate and continue.
            bestPath[diagonalPath] = basePath;
          }
        }

        editLength++;
      } // Performs the length of edit iteration. Is a bit fugly as this has to support the
      // sync and async mode which is never fun. Loops over execEditLength until a value
      // is produced.


      if (callback) {
        (function exec() {
          setTimeout(function () {
            // This should not happen, but we want to be safe.

            /* istanbul ignore next */
            if (editLength > maxEditLength) {
              return callback();
            }

            if (!execEditLength()) {
              exec();
            }
          }, 0);
        })();
      } else {
        while (editLength <= maxEditLength) {
          var ret = execEditLength();

          if (ret) {
            return ret;
          }
        }
      }
    },
    pushComponent: function pushComponent(components, added, removed) {
      var last = components[components.length - 1];

      if (last && last.added === added && last.removed === removed) {
        // We need to clone here as the component clone operation is just
        // as shallow array clone
        components[components.length - 1] = {
          count: last.count + 1,
          added: added,
          removed: removed
        };
      } else {
        components.push({
          count: 1,
          added: added,
          removed: removed
        });
      }
    },
    extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath) {
      var newLen = newString.length,
          oldLen = oldString.length,
          newPos = basePath.newPos,
          oldPos = newPos - diagonalPath,
          commonCount = 0;

      while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
        newPos++;
        oldPos++;
        commonCount++;
      }

      if (commonCount) {
        basePath.components.push({
          count: commonCount
        });
      }

      basePath.newPos = newPos;
      return oldPos;
    },
    equals: function equals(left, right) {
      if (this.options.comparator) {
        return this.options.comparator(left, right);
      } else {
        return left === right || this.options.ignoreCase && left.toLowerCase() === right.toLowerCase();
      }
    },
    removeEmpty: function removeEmpty(array) {
      var ret = [];

      for (var i = 0; i < array.length; i++) {
        if (array[i]) {
          ret.push(array[i]);
        }
      }

      return ret;
    },
    castInput: function castInput(value) {
      return value;
    },
    tokenize: function tokenize(value) {
      return value.split('');
    },
    join: function join(chars) {
      return chars.join('');
    }
  };

  function buildValues(diff, components, newString, oldString, useLongestToken) {
    var componentPos = 0,
        componentLen = components.length,
        newPos = 0,
        oldPos = 0;

    for (; componentPos < componentLen; componentPos++) {
      var component = components[componentPos];

      if (!component.removed) {
        if (!component.added && useLongestToken) {
          var value = newString.slice(newPos, newPos + component.count);
          value = value.map(function (value, i) {
            var oldValue = oldString[oldPos + i];
            return oldValue.length > value.length ? oldValue : value;
          });
          component.value = diff.join(value);
        } else {
          component.value = diff.join(newString.slice(newPos, newPos + component.count));
        }

        newPos += component.count; // Common case

        if (!component.added) {
          oldPos += component.count;
        }
      } else {
        component.value = diff.join(oldString.slice(oldPos, oldPos + component.count));
        oldPos += component.count; // Reverse add and remove so removes are output first to match common convention
        // The diffing algorithm is tied to add then remove output and this is the simplest
        // route to get the desired output with minimal overhead.

        if (componentPos && components[componentPos - 1].added) {
          var tmp = components[componentPos - 1];
          components[componentPos - 1] = components[componentPos];
          components[componentPos] = tmp;
        }
      }
    } // Special case handle for when one terminal is ignored (i.e. whitespace).
    // For this case we merge the terminal into the prior string and drop the change.
    // This is only available for string mode.


    var lastComponent = components[componentLen - 1];

    if (componentLen > 1 && typeof lastComponent.value === 'string' && (lastComponent.added || lastComponent.removed) && diff.equals('', lastComponent.value)) {
      components[componentLen - 2].value += lastComponent.value;
      components.pop();
    }

    return components;
  }

  function clonePath(path) {
    return {
      newPos: path.newPos,
      components: path.components.slice(0)
    };
  }

  var characterDiff = new Diff();
  function diffChars(oldStr, newStr, options) {
    return characterDiff.diff(oldStr, newStr, options);
  }

  function generateOptions(options, defaults) {
    if (typeof options === 'function') {
      defaults.callback = options;
    } else if (options) {
      for (var name in options) {
        /* istanbul ignore else */
        if (options.hasOwnProperty(name)) {
          defaults[name] = options[name];
        }
      }
    }

    return defaults;
  }

  //
  // Ranges and exceptions:
  // Latin-1 Supplement, 0080–00FF
  //  - U+00D7  × Multiplication sign
  //  - U+00F7  ÷ Division sign
  // Latin Extended-A, 0100–017F
  // Latin Extended-B, 0180–024F
  // IPA Extensions, 0250–02AF
  // Spacing Modifier Letters, 02B0–02FF
  //  - U+02C7  ˇ &#711;  Caron
  //  - U+02D8  ˘ &#728;  Breve
  //  - U+02D9  ˙ &#729;  Dot Above
  //  - U+02DA  ˚ &#730;  Ring Above
  //  - U+02DB  ˛ &#731;  Ogonek
  //  - U+02DC  ˜ &#732;  Small Tilde
  //  - U+02DD  ˝ &#733;  Double Acute Accent
  // Latin Extended Additional, 1E00–1EFF

  var extendedWordChars = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;
  var reWhitespace = /\S/;
  var wordDiff = new Diff();

  wordDiff.equals = function (left, right) {
    if (this.options.ignoreCase) {
      left = left.toLowerCase();
      right = right.toLowerCase();
    }

    return left === right || this.options.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right);
  };

  wordDiff.tokenize = function (value) {
    var tokens = value.split(/(\s+|[()[\]{}'"]|\b)/); // Join the boundary splits that we do not consider to be boundaries. This is primarily the extended Latin character set.

    for (var i = 0; i < tokens.length - 1; i++) {
      // If we have an empty string in the next field and we have only word chars before and after, merge
      if (!tokens[i + 1] && tokens[i + 2] && extendedWordChars.test(tokens[i]) && extendedWordChars.test(tokens[i + 2])) {
        tokens[i] += tokens[i + 2];
        tokens.splice(i + 1, 2);
        i--;
      }
    }

    return tokens;
  };

  function diffWords(oldStr, newStr, options) {
    options = generateOptions(options, {
      ignoreWhitespace: true
    });
    return wordDiff.diff(oldStr, newStr, options);
  }
  function diffWordsWithSpace(oldStr, newStr, options) {
    return wordDiff.diff(oldStr, newStr, options);
  }

  var lineDiff = new Diff();

  lineDiff.tokenize = function (value) {
    var retLines = [],
        linesAndNewlines = value.split(/(\n|\r\n)/); // Ignore the final empty token that occurs if the string ends with a new line

    if (!linesAndNewlines[linesAndNewlines.length - 1]) {
      linesAndNewlines.pop();
    } // Merge the content and line separators into single tokens


    for (var i = 0; i < linesAndNewlines.length; i++) {
      var line = linesAndNewlines[i];

      if (i % 2 && !this.options.newlineIsToken) {
        retLines[retLines.length - 1] += line;
      } else {
        if (this.options.ignoreWhitespace) {
          line = line.trim();
        }

        retLines.push(line);
      }
    }

    return retLines;
  };

  function diffLines(oldStr, newStr, callback) {
    return lineDiff.diff(oldStr, newStr, callback);
  }
  function diffTrimmedLines(oldStr, newStr, callback) {
    var options = generateOptions(callback, {
      ignoreWhitespace: true
    });
    return lineDiff.diff(oldStr, newStr, options);
  }

  var sentenceDiff = new Diff();

  sentenceDiff.tokenize = function (value) {
    return value.split(/(\S.+?[.!?])(?=\s+|$)/);
  };

  function diffSentences(oldStr, newStr, callback) {
    return sentenceDiff.diff(oldStr, newStr, callback);
  }

  var cssDiff = new Diff();

  cssDiff.tokenize = function (value) {
    return value.split(/([{}:;,]|\s+)/);
  };

  function diffCss(oldStr, newStr, callback) {
    return cssDiff.diff(oldStr, newStr, callback);
  }

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var objectPrototypeToString = Object.prototype.toString;
  var jsonDiff = new Diff(); // Discriminate between two lines of pretty-printed, serialized JSON where one of them has a
  // dangling comma and the other doesn't. Turns out including the dangling comma yields the nicest output:

  jsonDiff.useLongestToken = true;
  jsonDiff.tokenize = lineDiff.tokenize;

  jsonDiff.castInput = function (value) {
    var _this$options = this.options,
        undefinedReplacement = _this$options.undefinedReplacement,
        _this$options$stringi = _this$options.stringifyReplacer,
        stringifyReplacer = _this$options$stringi === void 0 ? function (k, v) {
      return typeof v === 'undefined' ? undefinedReplacement : v;
    } : _this$options$stringi;
    return typeof value === 'string' ? value : JSON.stringify(canonicalize(value, null, null, stringifyReplacer), stringifyReplacer, '  ');
  };

  jsonDiff.equals = function (left, right) {
    return Diff.prototype.equals.call(jsonDiff, left.replace(/,([\r\n])/g, '$1'), right.replace(/,([\r\n])/g, '$1'));
  };

  function diffJson(oldObj, newObj, options) {
    return jsonDiff.diff(oldObj, newObj, options);
  } // This function handles the presence of circular references by bailing out when encountering an
  // object that is already on the "stack" of items being processed. Accepts an optional replacer

  function canonicalize(obj, stack, replacementStack, replacer, key) {
    stack = stack || [];
    replacementStack = replacementStack || [];

    if (replacer) {
      obj = replacer(key, obj);
    }

    var i;

    for (i = 0; i < stack.length; i += 1) {
      if (stack[i] === obj) {
        return replacementStack[i];
      }
    }

    var canonicalizedObj;

    if ('[object Array]' === objectPrototypeToString.call(obj)) {
      stack.push(obj);
      canonicalizedObj = new Array(obj.length);
      replacementStack.push(canonicalizedObj);

      for (i = 0; i < obj.length; i += 1) {
        canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack, replacer, key);
      }

      stack.pop();
      replacementStack.pop();
      return canonicalizedObj;
    }

    if (obj && obj.toJSON) {
      obj = obj.toJSON();
    }

    if (_typeof(obj) === 'object' && obj !== null) {
      stack.push(obj);
      canonicalizedObj = {};
      replacementStack.push(canonicalizedObj);

      var sortedKeys = [],
          _key;

      for (_key in obj) {
        /* istanbul ignore else */
        if (obj.hasOwnProperty(_key)) {
          sortedKeys.push(_key);
        }
      }

      sortedKeys.sort();

      for (i = 0; i < sortedKeys.length; i += 1) {
        _key = sortedKeys[i];
        canonicalizedObj[_key] = canonicalize(obj[_key], stack, replacementStack, replacer, _key);
      }

      stack.pop();
      replacementStack.pop();
    } else {
      canonicalizedObj = obj;
    }

    return canonicalizedObj;
  }

  var arrayDiff = new Diff();

  arrayDiff.tokenize = function (value) {
    return value.slice();
  };

  arrayDiff.join = arrayDiff.removeEmpty = function (value) {
    return value;
  };

  function diffArrays(oldArr, newArr, callback) {
    return arrayDiff.diff(oldArr, newArr, callback);
  }

  function parsePatch(uniDiff) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var diffstr = uniDiff.split(/\r\n|[\n\v\f\r\x85]/),
        delimiters = uniDiff.match(/\r\n|[\n\v\f\r\x85]/g) || [],
        list = [],
        i = 0;

    function parseIndex() {
      var index = {};
      list.push(index); // Parse diff metadata

      while (i < diffstr.length) {
        var line = diffstr[i]; // File header found, end parsing diff metadata

        if (/^(\-\-\-|\+\+\+|@@)\s/.test(line)) {
          break;
        } // Diff index


        var header = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(line);

        if (header) {
          index.index = header[1];
        }

        i++;
      } // Parse file headers if they are defined. Unified diff requires them, but
      // there's no technical issues to have an isolated hunk without file header


      parseFileHeader(index);
      parseFileHeader(index); // Parse hunks

      index.hunks = [];

      while (i < diffstr.length) {
        var _line = diffstr[i];

        if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(_line)) {
          break;
        } else if (/^@@/.test(_line)) {
          index.hunks.push(parseHunk());
        } else if (_line && options.strict) {
          // Ignore unexpected content unless in strict mode
          throw new Error('Unknown line ' + (i + 1) + ' ' + JSON.stringify(_line));
        } else {
          i++;
        }
      }
    } // Parses the --- and +++ headers, if none are found, no lines
    // are consumed.


    function parseFileHeader(index) {
      var fileHeader = /^(---|\+\+\+)\s+(.*)$/.exec(diffstr[i]);

      if (fileHeader) {
        var keyPrefix = fileHeader[1] === '---' ? 'old' : 'new';
        var data = fileHeader[2].split('\t', 2);
        var fileName = data[0].replace(/\\\\/g, '\\');

        if (/^".*"$/.test(fileName)) {
          fileName = fileName.substr(1, fileName.length - 2);
        }

        index[keyPrefix + 'FileName'] = fileName;
        index[keyPrefix + 'Header'] = (data[1] || '').trim();
        i++;
      }
    } // Parses a hunk
    // This assumes that we are at the start of a hunk.


    function parseHunk() {
      var chunkHeaderIndex = i,
          chunkHeaderLine = diffstr[i++],
          chunkHeader = chunkHeaderLine.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);
      var hunk = {
        oldStart: +chunkHeader[1],
        oldLines: +chunkHeader[2] || 1,
        newStart: +chunkHeader[3],
        newLines: +chunkHeader[4] || 1,
        lines: [],
        linedelimiters: []
      };
      var addCount = 0,
          removeCount = 0;

      for (; i < diffstr.length; i++) {
        // Lines starting with '---' could be mistaken for the "remove line" operation
        // But they could be the header for the next file. Therefore prune such cases out.
        if (diffstr[i].indexOf('--- ') === 0 && i + 2 < diffstr.length && diffstr[i + 1].indexOf('+++ ') === 0 && diffstr[i + 2].indexOf('@@') === 0) {
          break;
        }

        var operation = diffstr[i].length == 0 && i != diffstr.length - 1 ? ' ' : diffstr[i][0];

        if (operation === '+' || operation === '-' || operation === ' ' || operation === '\\') {
          hunk.lines.push(diffstr[i]);
          hunk.linedelimiters.push(delimiters[i] || '\n');

          if (operation === '+') {
            addCount++;
          } else if (operation === '-') {
            removeCount++;
          } else if (operation === ' ') {
            addCount++;
            removeCount++;
          }
        } else {
          break;
        }
      } // Handle the empty block count case


      if (!addCount && hunk.newLines === 1) {
        hunk.newLines = 0;
      }

      if (!removeCount && hunk.oldLines === 1) {
        hunk.oldLines = 0;
      } // Perform optional sanity checking


      if (options.strict) {
        if (addCount !== hunk.newLines) {
          throw new Error('Added line count did not match for hunk at line ' + (chunkHeaderIndex + 1));
        }

        if (removeCount !== hunk.oldLines) {
          throw new Error('Removed line count did not match for hunk at line ' + (chunkHeaderIndex + 1));
        }
      }

      return hunk;
    }

    while (i < diffstr.length) {
      parseIndex();
    }

    return list;
  }

  // Iterator that traverses in the range of [min, max], stepping
  // by distance from a given start position. I.e. for [0, 4], with
  // start of 2, this will iterate 2, 3, 1, 4, 0.
  function distanceIterator (start, minLine, maxLine) {
    var wantForward = true,
        backwardExhausted = false,
        forwardExhausted = false,
        localOffset = 1;
    return function iterator() {
      if (wantForward && !forwardExhausted) {
        if (backwardExhausted) {
          localOffset++;
        } else {
          wantForward = false;
        } // Check if trying to fit beyond text length, and if not, check it fits
        // after offset location (or desired location on first iteration)


        if (start + localOffset <= maxLine) {
          return localOffset;
        }

        forwardExhausted = true;
      }

      if (!backwardExhausted) {
        if (!forwardExhausted) {
          wantForward = true;
        } // Check if trying to fit before text beginning, and if not, check it fits
        // before offset location


        if (minLine <= start - localOffset) {
          return -localOffset++;
        }

        backwardExhausted = true;
        return iterator();
      } // We tried to fit hunk before text beginning and beyond text length, then
      // hunk can't fit on the text. Return undefined

    };
  }

  function applyPatch(source, uniDiff) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (typeof uniDiff === 'string') {
      uniDiff = parsePatch(uniDiff);
    }

    if (Array.isArray(uniDiff)) {
      if (uniDiff.length > 1) {
        throw new Error('applyPatch only works with a single input.');
      }

      uniDiff = uniDiff[0];
    } // Apply the diff to the input


    var lines = source.split(/\r\n|[\n\v\f\r\x85]/),
        delimiters = source.match(/\r\n|[\n\v\f\r\x85]/g) || [],
        hunks = uniDiff.hunks,
        compareLine = options.compareLine || function (lineNumber, line, operation, patchContent) {
      return line === patchContent;
    },
        errorCount = 0,
        fuzzFactor = options.fuzzFactor || 0,
        minLine = 0,
        offset = 0,
        removeEOFNL,
        addEOFNL;
    /**
     * Checks if the hunk exactly fits on the provided location
     */


    function hunkFits(hunk, toPos) {
      for (var j = 0; j < hunk.lines.length; j++) {
        var line = hunk.lines[j],
            operation = line.length > 0 ? line[0] : ' ',
            content = line.length > 0 ? line.substr(1) : line;

        if (operation === ' ' || operation === '-') {
          // Context sanity check
          if (!compareLine(toPos + 1, lines[toPos], operation, content)) {
            errorCount++;

            if (errorCount > fuzzFactor) {
              return false;
            }
          }

          toPos++;
        }
      }

      return true;
    } // Search best fit offsets for each hunk based on the previous ones


    for (var i = 0; i < hunks.length; i++) {
      var hunk = hunks[i],
          maxLine = lines.length - hunk.oldLines,
          localOffset = 0,
          toPos = offset + hunk.oldStart - 1;
      var iterator = distanceIterator(toPos, minLine, maxLine);

      for (; localOffset !== undefined; localOffset = iterator()) {
        if (hunkFits(hunk, toPos + localOffset)) {
          hunk.offset = offset += localOffset;
          break;
        }
      }

      if (localOffset === undefined) {
        return false;
      } // Set lower text limit to end of the current hunk, so next ones don't try
      // to fit over already patched text


      minLine = hunk.offset + hunk.oldStart + hunk.oldLines;
    } // Apply patch hunks


    var diffOffset = 0;

    for (var _i = 0; _i < hunks.length; _i++) {
      var _hunk = hunks[_i],
          _toPos = _hunk.oldStart + _hunk.offset + diffOffset - 1;

      diffOffset += _hunk.newLines - _hunk.oldLines;

      if (_toPos < 0) {
        // Creating a new file
        _toPos = 0;
      }

      for (var j = 0; j < _hunk.lines.length; j++) {
        var line = _hunk.lines[j],
            operation = line.length > 0 ? line[0] : ' ',
            content = line.length > 0 ? line.substr(1) : line,
            delimiter = _hunk.linedelimiters[j];

        if (operation === ' ') {
          _toPos++;
        } else if (operation === '-') {
          lines.splice(_toPos, 1);
          delimiters.splice(_toPos, 1);
          /* istanbul ignore else */
        } else if (operation === '+') {
          lines.splice(_toPos, 0, content);
          delimiters.splice(_toPos, 0, delimiter);
          _toPos++;
        } else if (operation === '\\') {
          var previousOperation = _hunk.lines[j - 1] ? _hunk.lines[j - 1][0] : null;

          if (previousOperation === '+') {
            removeEOFNL = true;
          } else if (previousOperation === '-') {
            addEOFNL = true;
          }
        }
      }
    } // Handle EOFNL insertion/removal


    if (removeEOFNL) {
      while (!lines[lines.length - 1]) {
        lines.pop();
        delimiters.pop();
      }
    } else if (addEOFNL) {
      lines.push('');
      delimiters.push('\n');
    }

    for (var _k = 0; _k < lines.length - 1; _k++) {
      lines[_k] = lines[_k] + delimiters[_k];
    }

    return lines.join('');
  } // Wrapper that supports multiple file patches via callbacks.

  function applyPatches(uniDiff, options) {
    if (typeof uniDiff === 'string') {
      uniDiff = parsePatch(uniDiff);
    }

    var currentIndex = 0;

    function processIndex() {
      var index = uniDiff[currentIndex++];

      if (!index) {
        return options.complete();
      }

      options.loadFile(index, function (err, data) {
        if (err) {
          return options.complete(err);
        }

        var updatedContent = applyPatch(data, index, options);
        options.patched(index, updatedContent, function (err) {
          if (err) {
            return options.complete(err);
          }

          processIndex();
        });
      });
    }

    processIndex();
  }

  function structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
    if (!options) {
      options = {};
    }

    if (typeof options.context === 'undefined') {
      options.context = 4;
    }

    var diff = diffLines(oldStr, newStr, options);
    diff.push({
      value: '',
      lines: []
    }); // Append an empty value to make cleanup easier

    function contextLines(lines) {
      return lines.map(function (entry) {
        return ' ' + entry;
      });
    }

    var hunks = [];
    var oldRangeStart = 0,
        newRangeStart = 0,
        curRange = [],
        oldLine = 1,
        newLine = 1;

    var _loop = function _loop(i) {
      var current = diff[i],
          lines = current.lines || current.value.replace(/\n$/, '').split('\n');
      current.lines = lines;

      if (current.added || current.removed) {
        var _curRange;

        // If we have previous context, start with that
        if (!oldRangeStart) {
          var prev = diff[i - 1];
          oldRangeStart = oldLine;
          newRangeStart = newLine;

          if (prev) {
            curRange = options.context > 0 ? contextLines(prev.lines.slice(-options.context)) : [];
            oldRangeStart -= curRange.length;
            newRangeStart -= curRange.length;
          }
        } // Output our changes


        (_curRange = curRange).push.apply(_curRange, _toConsumableArray(lines.map(function (entry) {
          return (current.added ? '+' : '-') + entry;
        }))); // Track the updated file position


        if (current.added) {
          newLine += lines.length;
        } else {
          oldLine += lines.length;
        }
      } else {
        // Identical context lines. Track line changes
        if (oldRangeStart) {
          // Close out any changes that have been output (or join overlapping)
          if (lines.length <= options.context * 2 && i < diff.length - 2) {
            var _curRange2;

            // Overlapping
            (_curRange2 = curRange).push.apply(_curRange2, _toConsumableArray(contextLines(lines)));
          } else {
            var _curRange3;

            // end the range and output
            var contextSize = Math.min(lines.length, options.context);

            (_curRange3 = curRange).push.apply(_curRange3, _toConsumableArray(contextLines(lines.slice(0, contextSize))));

            var hunk = {
              oldStart: oldRangeStart,
              oldLines: oldLine - oldRangeStart + contextSize,
              newStart: newRangeStart,
              newLines: newLine - newRangeStart + contextSize,
              lines: curRange
            };

            if (i >= diff.length - 2 && lines.length <= options.context) {
              // EOF is inside this hunk
              var oldEOFNewline = /\n$/.test(oldStr);
              var newEOFNewline = /\n$/.test(newStr);
              var noNlBeforeAdds = lines.length == 0 && curRange.length > hunk.oldLines;

              if (!oldEOFNewline && noNlBeforeAdds) {
                // special case: old has no eol and no trailing context; no-nl can end up before adds
                curRange.splice(hunk.oldLines, 0, '\\ No newline at end of file');
              }

              if (!oldEOFNewline && !noNlBeforeAdds || !newEOFNewline) {
                curRange.push('\\ No newline at end of file');
              }
            }

            hunks.push(hunk);
            oldRangeStart = 0;
            newRangeStart = 0;
            curRange = [];
          }
        }

        oldLine += lines.length;
        newLine += lines.length;
      }
    };

    for (var i = 0; i < diff.length; i++) {
      _loop(i);
    }

    return {
      oldFileName: oldFileName,
      newFileName: newFileName,
      oldHeader: oldHeader,
      newHeader: newHeader,
      hunks: hunks
    };
  }
  function createTwoFilesPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
    var diff = structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options);
    var ret = [];

    if (oldFileName == newFileName) {
      ret.push('Index: ' + oldFileName);
    }

    ret.push('===================================================================');
    ret.push('--- ' + diff.oldFileName + (typeof diff.oldHeader === 'undefined' ? '' : '\t' + diff.oldHeader));
    ret.push('+++ ' + diff.newFileName + (typeof diff.newHeader === 'undefined' ? '' : '\t' + diff.newHeader));

    for (var i = 0; i < diff.hunks.length; i++) {
      var hunk = diff.hunks[i];
      ret.push('@@ -' + hunk.oldStart + ',' + hunk.oldLines + ' +' + hunk.newStart + ',' + hunk.newLines + ' @@');
      ret.push.apply(ret, hunk.lines);
    }

    return ret.join('\n') + '\n';
  }
  function createPatch(fileName, oldStr, newStr, oldHeader, newHeader, options) {
    return createTwoFilesPatch(fileName, fileName, oldStr, newStr, oldHeader, newHeader, options);
  }

  function arrayEqual(a, b) {
    if (a.length !== b.length) {
      return false;
    }

    return arrayStartsWith(a, b);
  }
  function arrayStartsWith(array, start) {
    if (start.length > array.length) {
      return false;
    }

    for (var i = 0; i < start.length; i++) {
      if (start[i] !== array[i]) {
        return false;
      }
    }

    return true;
  }

  function calcLineCount(hunk) {
    var _calcOldNewLineCount = calcOldNewLineCount(hunk.lines),
        oldLines = _calcOldNewLineCount.oldLines,
        newLines = _calcOldNewLineCount.newLines;

    if (oldLines !== undefined) {
      hunk.oldLines = oldLines;
    } else {
      delete hunk.oldLines;
    }

    if (newLines !== undefined) {
      hunk.newLines = newLines;
    } else {
      delete hunk.newLines;
    }
  }
  function merge(mine, theirs, base) {
    mine = loadPatch(mine, base);
    theirs = loadPatch(theirs, base);
    var ret = {}; // For index we just let it pass through as it doesn't have any necessary meaning.
    // Leaving sanity checks on this to the API consumer that may know more about the
    // meaning in their own context.

    if (mine.index || theirs.index) {
      ret.index = mine.index || theirs.index;
    }

    if (mine.newFileName || theirs.newFileName) {
      if (!fileNameChanged(mine)) {
        // No header or no change in ours, use theirs (and ours if theirs does not exist)
        ret.oldFileName = theirs.oldFileName || mine.oldFileName;
        ret.newFileName = theirs.newFileName || mine.newFileName;
        ret.oldHeader = theirs.oldHeader || mine.oldHeader;
        ret.newHeader = theirs.newHeader || mine.newHeader;
      } else if (!fileNameChanged(theirs)) {
        // No header or no change in theirs, use ours
        ret.oldFileName = mine.oldFileName;
        ret.newFileName = mine.newFileName;
        ret.oldHeader = mine.oldHeader;
        ret.newHeader = mine.newHeader;
      } else {
        // Both changed... figure it out
        ret.oldFileName = selectField(ret, mine.oldFileName, theirs.oldFileName);
        ret.newFileName = selectField(ret, mine.newFileName, theirs.newFileName);
        ret.oldHeader = selectField(ret, mine.oldHeader, theirs.oldHeader);
        ret.newHeader = selectField(ret, mine.newHeader, theirs.newHeader);
      }
    }

    ret.hunks = [];
    var mineIndex = 0,
        theirsIndex = 0,
        mineOffset = 0,
        theirsOffset = 0;

    while (mineIndex < mine.hunks.length || theirsIndex < theirs.hunks.length) {
      var mineCurrent = mine.hunks[mineIndex] || {
        oldStart: Infinity
      },
          theirsCurrent = theirs.hunks[theirsIndex] || {
        oldStart: Infinity
      };

      if (hunkBefore(mineCurrent, theirsCurrent)) {
        // This patch does not overlap with any of the others, yay.
        ret.hunks.push(cloneHunk(mineCurrent, mineOffset));
        mineIndex++;
        theirsOffset += mineCurrent.newLines - mineCurrent.oldLines;
      } else if (hunkBefore(theirsCurrent, mineCurrent)) {
        // This patch does not overlap with any of the others, yay.
        ret.hunks.push(cloneHunk(theirsCurrent, theirsOffset));
        theirsIndex++;
        mineOffset += theirsCurrent.newLines - theirsCurrent.oldLines;
      } else {
        // Overlap, merge as best we can
        var mergedHunk = {
          oldStart: Math.min(mineCurrent.oldStart, theirsCurrent.oldStart),
          oldLines: 0,
          newStart: Math.min(mineCurrent.newStart + mineOffset, theirsCurrent.oldStart + theirsOffset),
          newLines: 0,
          lines: []
        };
        mergeLines(mergedHunk, mineCurrent.oldStart, mineCurrent.lines, theirsCurrent.oldStart, theirsCurrent.lines);
        theirsIndex++;
        mineIndex++;
        ret.hunks.push(mergedHunk);
      }
    }

    return ret;
  }

  function loadPatch(param, base) {
    if (typeof param === 'string') {
      if (/^@@/m.test(param) || /^Index:/m.test(param)) {
        return parsePatch(param)[0];
      }

      if (!base) {
        throw new Error('Must provide a base reference or pass in a patch');
      }

      return structuredPatch(undefined, undefined, base, param);
    }

    return param;
  }

  function fileNameChanged(patch) {
    return patch.newFileName && patch.newFileName !== patch.oldFileName;
  }

  function selectField(index, mine, theirs) {
    if (mine === theirs) {
      return mine;
    } else {
      index.conflict = true;
      return {
        mine: mine,
        theirs: theirs
      };
    }
  }

  function hunkBefore(test, check) {
    return test.oldStart < check.oldStart && test.oldStart + test.oldLines < check.oldStart;
  }

  function cloneHunk(hunk, offset) {
    return {
      oldStart: hunk.oldStart,
      oldLines: hunk.oldLines,
      newStart: hunk.newStart + offset,
      newLines: hunk.newLines,
      lines: hunk.lines
    };
  }

  function mergeLines(hunk, mineOffset, mineLines, theirOffset, theirLines) {
    // This will generally result in a conflicted hunk, but there are cases where the context
    // is the only overlap where we can successfully merge the content here.
    var mine = {
      offset: mineOffset,
      lines: mineLines,
      index: 0
    },
        their = {
      offset: theirOffset,
      lines: theirLines,
      index: 0
    }; // Handle any leading content

    insertLeading(hunk, mine, their);
    insertLeading(hunk, their, mine); // Now in the overlap content. Scan through and select the best changes from each.

    while (mine.index < mine.lines.length && their.index < their.lines.length) {
      var mineCurrent = mine.lines[mine.index],
          theirCurrent = their.lines[their.index];

      if ((mineCurrent[0] === '-' || mineCurrent[0] === '+') && (theirCurrent[0] === '-' || theirCurrent[0] === '+')) {
        // Both modified ...
        mutualChange(hunk, mine, their);
      } else if (mineCurrent[0] === '+' && theirCurrent[0] === ' ') {
        var _hunk$lines;

        // Mine inserted
        (_hunk$lines = hunk.lines).push.apply(_hunk$lines, _toConsumableArray(collectChange(mine)));
      } else if (theirCurrent[0] === '+' && mineCurrent[0] === ' ') {
        var _hunk$lines2;

        // Theirs inserted
        (_hunk$lines2 = hunk.lines).push.apply(_hunk$lines2, _toConsumableArray(collectChange(their)));
      } else if (mineCurrent[0] === '-' && theirCurrent[0] === ' ') {
        // Mine removed or edited
        removal(hunk, mine, their);
      } else if (theirCurrent[0] === '-' && mineCurrent[0] === ' ') {
        // Their removed or edited
        removal(hunk, their, mine, true);
      } else if (mineCurrent === theirCurrent) {
        // Context identity
        hunk.lines.push(mineCurrent);
        mine.index++;
        their.index++;
      } else {
        // Context mismatch
        conflict(hunk, collectChange(mine), collectChange(their));
      }
    } // Now push anything that may be remaining


    insertTrailing(hunk, mine);
    insertTrailing(hunk, their);
    calcLineCount(hunk);
  }

  function mutualChange(hunk, mine, their) {
    var myChanges = collectChange(mine),
        theirChanges = collectChange(their);

    if (allRemoves(myChanges) && allRemoves(theirChanges)) {
      // Special case for remove changes that are supersets of one another
      if (arrayStartsWith(myChanges, theirChanges) && skipRemoveSuperset(their, myChanges, myChanges.length - theirChanges.length)) {
        var _hunk$lines3;

        (_hunk$lines3 = hunk.lines).push.apply(_hunk$lines3, _toConsumableArray(myChanges));

        return;
      } else if (arrayStartsWith(theirChanges, myChanges) && skipRemoveSuperset(mine, theirChanges, theirChanges.length - myChanges.length)) {
        var _hunk$lines4;

        (_hunk$lines4 = hunk.lines).push.apply(_hunk$lines4, _toConsumableArray(theirChanges));

        return;
      }
    } else if (arrayEqual(myChanges, theirChanges)) {
      var _hunk$lines5;

      (_hunk$lines5 = hunk.lines).push.apply(_hunk$lines5, _toConsumableArray(myChanges));

      return;
    }

    conflict(hunk, myChanges, theirChanges);
  }

  function removal(hunk, mine, their, swap) {
    var myChanges = collectChange(mine),
        theirChanges = collectContext(their, myChanges);

    if (theirChanges.merged) {
      var _hunk$lines6;

      (_hunk$lines6 = hunk.lines).push.apply(_hunk$lines6, _toConsumableArray(theirChanges.merged));
    } else {
      conflict(hunk, swap ? theirChanges : myChanges, swap ? myChanges : theirChanges);
    }
  }

  function conflict(hunk, mine, their) {
    hunk.conflict = true;
    hunk.lines.push({
      conflict: true,
      mine: mine,
      theirs: their
    });
  }

  function insertLeading(hunk, insert, their) {
    while (insert.offset < their.offset && insert.index < insert.lines.length) {
      var line = insert.lines[insert.index++];
      hunk.lines.push(line);
      insert.offset++;
    }
  }

  function insertTrailing(hunk, insert) {
    while (insert.index < insert.lines.length) {
      var line = insert.lines[insert.index++];
      hunk.lines.push(line);
    }
  }

  function collectChange(state) {
    var ret = [],
        operation = state.lines[state.index][0];

    while (state.index < state.lines.length) {
      var line = state.lines[state.index]; // Group additions that are immediately after subtractions and treat them as one "atomic" modify change.

      if (operation === '-' && line[0] === '+') {
        operation = '+';
      }

      if (operation === line[0]) {
        ret.push(line);
        state.index++;
      } else {
        break;
      }
    }

    return ret;
  }

  function collectContext(state, matchChanges) {
    var changes = [],
        merged = [],
        matchIndex = 0,
        contextChanges = false,
        conflicted = false;

    while (matchIndex < matchChanges.length && state.index < state.lines.length) {
      var change = state.lines[state.index],
          match = matchChanges[matchIndex]; // Once we've hit our add, then we are done

      if (match[0] === '+') {
        break;
      }

      contextChanges = contextChanges || change[0] !== ' ';
      merged.push(match);
      matchIndex++; // Consume any additions in the other block as a conflict to attempt
      // to pull in the remaining context after this

      if (change[0] === '+') {
        conflicted = true;

        while (change[0] === '+') {
          changes.push(change);
          change = state.lines[++state.index];
        }
      }

      if (match.substr(1) === change.substr(1)) {
        changes.push(change);
        state.index++;
      } else {
        conflicted = true;
      }
    }

    if ((matchChanges[matchIndex] || '')[0] === '+' && contextChanges) {
      conflicted = true;
    }

    if (conflicted) {
      return changes;
    }

    while (matchIndex < matchChanges.length) {
      merged.push(matchChanges[matchIndex++]);
    }

    return {
      merged: merged,
      changes: changes
    };
  }

  function allRemoves(changes) {
    return changes.reduce(function (prev, change) {
      return prev && change[0] === '-';
    }, true);
  }

  function skipRemoveSuperset(state, removeChanges, delta) {
    for (var i = 0; i < delta; i++) {
      var changeContent = removeChanges[removeChanges.length - delta + i].substr(1);

      if (state.lines[state.index + i] !== ' ' + changeContent) {
        return false;
      }
    }

    state.index += delta;
    return true;
  }

  function calcOldNewLineCount(lines) {
    var oldLines = 0;
    var newLines = 0;
    lines.forEach(function (line) {
      if (typeof line !== 'string') {
        var myCount = calcOldNewLineCount(line.mine);
        var theirCount = calcOldNewLineCount(line.theirs);

        if (oldLines !== undefined) {
          if (myCount.oldLines === theirCount.oldLines) {
            oldLines += myCount.oldLines;
          } else {
            oldLines = undefined;
          }
        }

        if (newLines !== undefined) {
          if (myCount.newLines === theirCount.newLines) {
            newLines += myCount.newLines;
          } else {
            newLines = undefined;
          }
        }
      } else {
        if (newLines !== undefined && (line[0] === '+' || line[0] === ' ')) {
          newLines++;
        }

        if (oldLines !== undefined && (line[0] === '-' || line[0] === ' ')) {
          oldLines++;
        }
      }
    });
    return {
      oldLines: oldLines,
      newLines: newLines
    };
  }

  // See: http://code.google.com/p/google-diff-match-patch/wiki/API
  function convertChangesToDMP(changes) {
    var ret = [],
        change,
        operation;

    for (var i = 0; i < changes.length; i++) {
      change = changes[i];

      if (change.added) {
        operation = 1;
      } else if (change.removed) {
        operation = -1;
      } else {
        operation = 0;
      }

      ret.push([operation, change.value]);
    }

    return ret;
  }

  function convertChangesToXML(changes) {
    var ret = [];

    for (var i = 0; i < changes.length; i++) {
      var change = changes[i];

      if (change.added) {
        ret.push('<ins>');
      } else if (change.removed) {
        ret.push('<del>');
      }

      ret.push(escapeHTML(change.value));

      if (change.added) {
        ret.push('</ins>');
      } else if (change.removed) {
        ret.push('</del>');
      }
    }

    return ret.join('');
  }

  function escapeHTML(s) {
    var n = s;
    n = n.replace(/&/g, '&amp;');
    n = n.replace(/</g, '&lt;');
    n = n.replace(/>/g, '&gt;');
    n = n.replace(/"/g, '&quot;');
    return n;
  }

  /* See LICENSE file for terms of use */

  exports.Diff = Diff;
  exports.diffChars = diffChars;
  exports.diffWords = diffWords;
  exports.diffWordsWithSpace = diffWordsWithSpace;
  exports.diffLines = diffLines;
  exports.diffTrimmedLines = diffTrimmedLines;
  exports.diffSentences = diffSentences;
  exports.diffCss = diffCss;
  exports.diffJson = diffJson;
  exports.diffArrays = diffArrays;
  exports.structuredPatch = structuredPatch;
  exports.createTwoFilesPatch = createTwoFilesPatch;
  exports.createPatch = createPatch;
  exports.applyPatch = applyPatch;
  exports.applyPatches = applyPatches;
  exports.parsePatch = parsePatch;
  exports.merge = merge;
  exports.convertChangesToDMP = convertChangesToDMP;
  exports.convertChangesToXML = convertChangesToXML;
  exports.canonicalize = canonicalize;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
