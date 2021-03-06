/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*!
 * jQuery JavaScript Library v1.4.4
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu Nov 11 19:04:53 2010 -0500
 */
(function(E,B){function ka(a,b,d){if(d===B&&a.nodeType===1){d=a.getAttribute("data-"+b);if(typeof d==="string"){try{d=d==="true"?true:d==="false"?false:d==="null"?null:!c.isNaN(d)?parseFloat(d):Ja.test(d)?c.parseJSON(d):d}catch(e){}c.data(a,b,d)}else d=B}return d}function U(){return false}function ca(){return true}function la(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function Ka(a){var b,d,e,f,h,l,k,o,x,r,A,C=[];f=[];h=c.data(this,this.nodeType?"events":"__events__");if(typeof h==="function")h=
h.events;if(!(a.liveFired===this||!h||!h.live||a.button&&a.type==="click")){if(a.namespace)A=RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)");a.liveFired=this;var J=h.live.slice(0);for(k=0;k<J.length;k++){h=J[k];h.origType.replace(X,"")===a.type?f.push(h.selector):J.splice(k--,1)}f=c(a.target).closest(f,a.currentTarget);o=0;for(x=f.length;o<x;o++){r=f[o];for(k=0;k<J.length;k++){h=J[k];if(r.selector===h.selector&&(!A||A.test(h.namespace))){l=r.elem;e=null;if(h.preType==="mouseenter"||
h.preType==="mouseleave"){a.type=h.preType;e=c(a.relatedTarget).closest(h.selector)[0]}if(!e||e!==l)C.push({elem:l,handleObj:h,level:r.level})}}}o=0;for(x=C.length;o<x;o++){f=C[o];if(d&&f.level>d)break;a.currentTarget=f.elem;a.data=f.handleObj.data;a.handleObj=f.handleObj;A=f.handleObj.origHandler.apply(f.elem,arguments);if(A===false||a.isPropagationStopped()){d=f.level;if(A===false)b=false;if(a.isImmediatePropagationStopped())break}}return b}}function Y(a,b){return(a&&a!=="*"?a+".":"")+b.replace(La,
"`").replace(Ma,"&")}function ma(a,b,d){if(c.isFunction(b))return c.grep(a,function(f,h){return!!b.call(f,h,f)===d});else if(b.nodeType)return c.grep(a,function(f){return f===b===d});else if(typeof b==="string"){var e=c.grep(a,function(f){return f.nodeType===1});if(Na.test(b))return c.filter(b,e,!d);else b=c.filter(b,e)}return c.grep(a,function(f){return c.inArray(f,b)>=0===d})}function na(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var e=c.data(a[d++]),f=c.data(this,
e);if(e=e&&e.events){delete f.handle;f.events={};for(var h in e)for(var l in e[h])c.event.add(this,h,e[h][l],e[h][l].data)}}})}function Oa(a,b){b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}function oa(a,b,d){var e=b==="width"?a.offsetWidth:a.offsetHeight;if(d==="border")return e;c.each(b==="width"?Pa:Qa,function(){d||(e-=parseFloat(c.css(a,"padding"+this))||0);if(d==="margin")e+=parseFloat(c.css(a,
"margin"+this))||0;else e-=parseFloat(c.css(a,"border"+this+"Width"))||0});return e}function da(a,b,d,e){if(c.isArray(b)&&b.length)c.each(b,function(f,h){d||Ra.test(a)?e(a,h):da(a+"["+(typeof h==="object"||c.isArray(h)?f:"")+"]",h,d,e)});else if(!d&&b!=null&&typeof b==="object")c.isEmptyObject(b)?e(a,""):c.each(b,function(f,h){da(a+"["+f+"]",h,d,e)});else e(a,b)}function S(a,b){var d={};c.each(pa.concat.apply([],pa.slice(0,b)),function(){d[this]=a});return d}function qa(a){if(!ea[a]){var b=c("<"+
a+">").appendTo("body"),d=b.css("display");b.remove();if(d==="none"||d==="")d="block";ea[a]=d}return ea[a]}function fa(a){return c.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var t=E.document,c=function(){function a(){if(!b.isReady){try{t.documentElement.doScroll("left")}catch(j){setTimeout(a,1);return}b.ready()}}var b=function(j,s){return new b.fn.init(j,s)},d=E.jQuery,e=E.$,f,h=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,l=/\S/,k=/^\s+/,o=/\s+$/,x=/\W/,r=/\d/,A=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,
C=/^[\],:{}\s]*$/,J=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,w=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,I=/(?:^|:|,)(?:\s*\[)+/g,L=/(webkit)[ \/]([\w.]+)/,g=/(opera)(?:.*version)?[ \/]([\w.]+)/,i=/(msie) ([\w.]+)/,n=/(mozilla)(?:.*? rv:([\w.]+))?/,m=navigator.userAgent,p=false,q=[],u,y=Object.prototype.toString,F=Object.prototype.hasOwnProperty,M=Array.prototype.push,N=Array.prototype.slice,O=String.prototype.trim,D=Array.prototype.indexOf,R={};b.fn=b.prototype={init:function(j,
s){var v,z,H;if(!j)return this;if(j.nodeType){this.context=this[0]=j;this.length=1;return this}if(j==="body"&&!s&&t.body){this.context=t;this[0]=t.body;this.selector="body";this.length=1;return this}if(typeof j==="string")if((v=h.exec(j))&&(v[1]||!s))if(v[1]){H=s?s.ownerDocument||s:t;if(z=A.exec(j))if(b.isPlainObject(s)){j=[t.createElement(z[1])];b.fn.attr.call(j,s,true)}else j=[H.createElement(z[1])];else{z=b.buildFragment([v[1]],[H]);j=(z.cacheable?z.fragment.cloneNode(true):z.fragment).childNodes}return b.merge(this,
j)}else{if((z=t.getElementById(v[2]))&&z.parentNode){if(z.id!==v[2])return f.find(j);this.length=1;this[0]=z}this.context=t;this.selector=j;return this}else if(!s&&!x.test(j)){this.selector=j;this.context=t;j=t.getElementsByTagName(j);return b.merge(this,j)}else return!s||s.jquery?(s||f).find(j):b(s).find(j);else if(b.isFunction(j))return f.ready(j);if(j.selector!==B){this.selector=j.selector;this.context=j.context}return b.makeArray(j,this)},selector:"",jquery:"1.4.4",length:0,size:function(){return this.length},
toArray:function(){return N.call(this,0)},get:function(j){return j==null?this.toArray():j<0?this.slice(j)[0]:this[j]},pushStack:function(j,s,v){var z=b();b.isArray(j)?M.apply(z,j):b.merge(z,j);z.prevObject=this;z.context=this.context;if(s==="find")z.selector=this.selector+(this.selector?" ":"")+v;else if(s)z.selector=this.selector+"."+s+"("+v+")";return z},each:function(j,s){return b.each(this,j,s)},ready:function(j){b.bindReady();if(b.isReady)j.call(t,b);else q&&q.push(j);return this},eq:function(j){return j===
-1?this.slice(j):this.slice(j,+j+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(N.apply(this,arguments),"slice",N.call(arguments).join(","))},map:function(j){return this.pushStack(b.map(this,function(s,v){return j.call(s,v,s)}))},end:function(){return this.prevObject||b(null)},push:M,sort:[].sort,splice:[].splice};b.fn.init.prototype=b.fn;b.extend=b.fn.extend=function(){var j,s,v,z,H,G=arguments[0]||{},K=1,Q=arguments.length,ga=false;
if(typeof G==="boolean"){ga=G;G=arguments[1]||{};K=2}if(typeof G!=="object"&&!b.isFunction(G))G={};if(Q===K){G=this;--K}for(;K<Q;K++)if((j=arguments[K])!=null)for(s in j){v=G[s];z=j[s];if(G!==z)if(ga&&z&&(b.isPlainObject(z)||(H=b.isArray(z)))){if(H){H=false;v=v&&b.isArray(v)?v:[]}else v=v&&b.isPlainObject(v)?v:{};G[s]=b.extend(ga,v,z)}else if(z!==B)G[s]=z}return G};b.extend({noConflict:function(j){E.$=e;if(j)E.jQuery=d;return b},isReady:false,readyWait:1,ready:function(j){j===true&&b.readyWait--;
if(!b.readyWait||j!==true&&!b.isReady){if(!t.body)return setTimeout(b.ready,1);b.isReady=true;if(!(j!==true&&--b.readyWait>0))if(q){var s=0,v=q;for(q=null;j=v[s++];)j.call(t,b);b.fn.trigger&&b(t).trigger("ready").unbind("ready")}}},bindReady:function(){if(!p){p=true;if(t.readyState==="complete")return setTimeout(b.ready,1);if(t.addEventListener){t.addEventListener("DOMContentLoaded",u,false);E.addEventListener("load",b.ready,false)}else if(t.attachEvent){t.attachEvent("onreadystatechange",u);E.attachEvent("onload",
b.ready);var j=false;try{j=E.frameElement==null}catch(s){}t.documentElement.doScroll&&j&&a()}}},isFunction:function(j){return b.type(j)==="function"},isArray:Array.isArray||function(j){return b.type(j)==="array"},isWindow:function(j){return j&&typeof j==="object"&&"setInterval"in j},isNaN:function(j){return j==null||!r.test(j)||isNaN(j)},type:function(j){return j==null?String(j):R[y.call(j)]||"object"},isPlainObject:function(j){if(!j||b.type(j)!=="object"||j.nodeType||b.isWindow(j))return false;if(j.constructor&&
!F.call(j,"constructor")&&!F.call(j.constructor.prototype,"isPrototypeOf"))return false;for(var s in j);return s===B||F.call(j,s)},isEmptyObject:function(j){for(var s in j)return false;return true},error:function(j){throw j;},parseJSON:function(j){if(typeof j!=="string"||!j)return null;j=b.trim(j);if(C.test(j.replace(J,"@").replace(w,"]").replace(I,"")))return E.JSON&&E.JSON.parse?E.JSON.parse(j):(new Function("return "+j))();else b.error("Invalid JSON: "+j)},noop:function(){},globalEval:function(j){if(j&&
l.test(j)){var s=t.getElementsByTagName("head")[0]||t.documentElement,v=t.createElement("script");v.type="text/javascript";if(b.support.scriptEval)v.appendChild(t.createTextNode(j));else v.text=j;s.insertBefore(v,s.firstChild);s.removeChild(v)}},nodeName:function(j,s){return j.nodeName&&j.nodeName.toUpperCase()===s.toUpperCase()},each:function(j,s,v){var z,H=0,G=j.length,K=G===B||b.isFunction(j);if(v)if(K)for(z in j){if(s.apply(j[z],v)===false)break}else for(;H<G;){if(s.apply(j[H++],v)===false)break}else if(K)for(z in j){if(s.call(j[z],
z,j[z])===false)break}else for(v=j[0];H<G&&s.call(v,H,v)!==false;v=j[++H]);return j},trim:O?function(j){return j==null?"":O.call(j)}:function(j){return j==null?"":j.toString().replace(k,"").replace(o,"")},makeArray:function(j,s){var v=s||[];if(j!=null){var z=b.type(j);j.length==null||z==="string"||z==="function"||z==="regexp"||b.isWindow(j)?M.call(v,j):b.merge(v,j)}return v},inArray:function(j,s){if(s.indexOf)return s.indexOf(j);for(var v=0,z=s.length;v<z;v++)if(s[v]===j)return v;return-1},merge:function(j,
s){var v=j.length,z=0;if(typeof s.length==="number")for(var H=s.length;z<H;z++)j[v++]=s[z];else for(;s[z]!==B;)j[v++]=s[z++];j.length=v;return j},grep:function(j,s,v){var z=[],H;v=!!v;for(var G=0,K=j.length;G<K;G++){H=!!s(j[G],G);v!==H&&z.push(j[G])}return z},map:function(j,s,v){for(var z=[],H,G=0,K=j.length;G<K;G++){H=s(j[G],G,v);if(H!=null)z[z.length]=H}return z.concat.apply([],z)},guid:1,proxy:function(j,s,v){if(arguments.length===2)if(typeof s==="string"){v=j;j=v[s];s=B}else if(s&&!b.isFunction(s)){v=
s;s=B}if(!s&&j)s=function(){return j.apply(v||this,arguments)};if(j)s.guid=j.guid=j.guid||s.guid||b.guid++;return s},access:function(j,s,v,z,H,G){var K=j.length;if(typeof s==="object"){for(var Q in s)b.access(j,Q,s[Q],z,H,v);return j}if(v!==B){z=!G&&z&&b.isFunction(v);for(Q=0;Q<K;Q++)H(j[Q],s,z?v.call(j[Q],Q,H(j[Q],s)):v,G);return j}return K?H(j[0],s):B},now:function(){return(new Date).getTime()},uaMatch:function(j){j=j.toLowerCase();j=L.exec(j)||g.exec(j)||i.exec(j)||j.indexOf("compatible")<0&&n.exec(j)||
[];return{browser:j[1]||"",version:j[2]||"0"}},browser:{}});b.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(j,s){R["[object "+s+"]"]=s.toLowerCase()});m=b.uaMatch(m);if(m.browser){b.browser[m.browser]=true;b.browser.version=m.version}if(b.browser.webkit)b.browser.safari=true;if(D)b.inArray=function(j,s){return D.call(s,j)};if(!/\s/.test("\u00a0")){k=/^[\s\xA0]+/;o=/[\s\xA0]+$/}f=b(t);if(t.addEventListener)u=function(){t.removeEventListener("DOMContentLoaded",u,
false);b.ready()};else if(t.attachEvent)u=function(){if(t.readyState==="complete"){t.detachEvent("onreadystatechange",u);b.ready()}};return E.jQuery=E.$=b}();(function(){c.support={};var a=t.documentElement,b=t.createElement("script"),d=t.createElement("div"),e="script"+c.now();d.style.display="none";d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var f=d.getElementsByTagName("*"),h=d.getElementsByTagName("a")[0],l=t.createElement("select"),
k=l.appendChild(t.createElement("option"));if(!(!f||!f.length||!h)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(h.getAttribute("style")),hrefNormalized:h.getAttribute("href")==="/a",opacity:/^0.55$/.test(h.style.opacity),cssFloat:!!h.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:k.selected,deleteExpando:true,optDisabled:false,checkClone:false,
scriptEval:false,noCloneEvent:true,boxModel:null,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableHiddenOffsets:true};l.disabled=true;c.support.optDisabled=!k.disabled;b.type="text/javascript";try{b.appendChild(t.createTextNode("window."+e+"=1;"))}catch(o){}a.insertBefore(b,a.firstChild);if(E[e]){c.support.scriptEval=true;delete E[e]}try{delete b.test}catch(x){c.support.deleteExpando=false}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function r(){c.support.noCloneEvent=
false;d.detachEvent("onclick",r)});d.cloneNode(true).fireEvent("onclick")}d=t.createElement("div");d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";a=t.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var r=t.createElement("div");r.style.width=r.style.paddingLeft="1px";t.body.appendChild(r);c.boxModel=c.support.boxModel=r.offsetWidth===2;if("zoom"in r.style){r.style.display="inline";r.style.zoom=
1;c.support.inlineBlockNeedsLayout=r.offsetWidth===2;r.style.display="";r.innerHTML="<div style='width:4px;'></div>";c.support.shrinkWrapBlocks=r.offsetWidth!==2}r.innerHTML="<table><tr><td style='padding:0;display:none'></td><td>t</td></tr></table>";var A=r.getElementsByTagName("td");c.support.reliableHiddenOffsets=A[0].offsetHeight===0;A[0].style.display="";A[1].style.display="none";c.support.reliableHiddenOffsets=c.support.reliableHiddenOffsets&&A[0].offsetHeight===0;r.innerHTML="";t.body.removeChild(r).style.display=
"none"});a=function(r){var A=t.createElement("div");r="on"+r;var C=r in A;if(!C){A.setAttribute(r,"return;");C=typeof A[r]==="function"}return C};c.support.submitBubbles=a("submit");c.support.changeBubbles=a("change");a=b=d=f=h=null}})();var ra={},Ja=/^(?:\{.*\}|\[.*\])$/;c.extend({cache:{},uuid:0,expando:"jQuery"+c.now(),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},data:function(a,b,d){if(c.acceptData(a)){a=a==E?ra:a;var e=a.nodeType,f=e?a[c.expando]:null,h=
c.cache;if(!(e&&!f&&typeof b==="string"&&d===B)){if(e)f||(a[c.expando]=f=++c.uuid);else h=a;if(typeof b==="object")if(e)h[f]=c.extend(h[f],b);else c.extend(h,b);else if(e&&!h[f])h[f]={};a=e?h[f]:h;if(d!==B)a[b]=d;return typeof b==="string"?a[b]:a}}},removeData:function(a,b){if(c.acceptData(a)){a=a==E?ra:a;var d=a.nodeType,e=d?a[c.expando]:a,f=c.cache,h=d?f[e]:e;if(b){if(h){delete h[b];d&&c.isEmptyObject(h)&&c.removeData(a)}}else if(d&&c.support.deleteExpando)delete a[c.expando];else if(a.removeAttribute)a.removeAttribute(c.expando);
else if(d)delete f[e];else for(var l in a)delete a[l]}},acceptData:function(a){if(a.nodeName){var b=c.noData[a.nodeName.toLowerCase()];if(b)return!(b===true||a.getAttribute("classid")!==b)}return true}});c.fn.extend({data:function(a,b){var d=null;if(typeof a==="undefined"){if(this.length){var e=this[0].attributes,f;d=c.data(this[0]);for(var h=0,l=e.length;h<l;h++){f=e[h].name;if(f.indexOf("data-")===0){f=f.substr(5);ka(this[0],f,d[f])}}}return d}else if(typeof a==="object")return this.each(function(){c.data(this,
a)});var k=a.split(".");k[1]=k[1]?"."+k[1]:"";if(b===B){d=this.triggerHandler("getData"+k[1]+"!",[k[0]]);if(d===B&&this.length){d=c.data(this[0],a);d=ka(this[0],a,d)}return d===B&&k[1]?this.data(k[0]):d}else return this.each(function(){var o=c(this),x=[k[0],b];o.triggerHandler("setData"+k[1]+"!",x);c.data(this,a,b);o.triggerHandler("changeData"+k[1]+"!",x)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var e=
c.data(a,b);if(!d)return e||[];if(!e||c.isArray(d))e=c.data(a,b,c.makeArray(d));else e.push(d);return e}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),e=d.shift();if(e==="inprogress")e=d.shift();if(e){b==="fx"&&d.unshift("inprogress");e.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}if(b===B)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,
a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var sa=/[\n\t]/g,ha=/\s+/,Sa=/\r/g,Ta=/^(?:href|src|style)$/,Ua=/^(?:button|input)$/i,Va=/^(?:button|input|object|select|textarea)$/i,Wa=/^a(?:rea)?$/i,ta=/^(?:radio|checkbox)$/i;c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",
colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};c.fn.extend({attr:function(a,b){return c.access(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,"");this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(x){var r=c(this);r.addClass(a.call(this,x,r.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(ha),d=0,e=this.length;d<e;d++){var f=this[d];if(f.nodeType===
1)if(f.className){for(var h=" "+f.className+" ",l=f.className,k=0,o=b.length;k<o;k++)if(h.indexOf(" "+b[k]+" ")<0)l+=" "+b[k];f.className=c.trim(l)}else f.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(o){var x=c(this);x.removeClass(a.call(this,o,x.attr("class")))});if(a&&typeof a==="string"||a===B)for(var b=(a||"").split(ha),d=0,e=this.length;d<e;d++){var f=this[d];if(f.nodeType===1&&f.className)if(a){for(var h=(" "+f.className+" ").replace(sa," "),
l=0,k=b.length;l<k;l++)h=h.replace(" "+b[l]+" "," ");f.className=c.trim(h)}else f.className=""}return this},toggleClass:function(a,b){var d=typeof a,e=typeof b==="boolean";if(c.isFunction(a))return this.each(function(f){var h=c(this);h.toggleClass(a.call(this,f,h.attr("class"),b),b)});return this.each(function(){if(d==="string")for(var f,h=0,l=c(this),k=b,o=a.split(ha);f=o[h++];){k=e?k:!l.hasClass(f);l[k?"addClass":"removeClass"](f)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,
"__className__",this.className);this.className=this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){a=" "+a+" ";for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(sa," ").indexOf(a)>-1)return true;return false},val:function(a){if(!arguments.length){var b=this[0];if(b){if(c.nodeName(b,"option")){var d=b.attributes.value;return!d||d.specified?b.value:b.text}if(c.nodeName(b,"select")){var e=b.selectedIndex;d=[];var f=b.options;b=b.type==="select-one";
if(e<0)return null;var h=b?e:0;for(e=b?e+1:f.length;h<e;h++){var l=f[h];if(l.selected&&(c.support.optDisabled?!l.disabled:l.getAttribute("disabled")===null)&&(!l.parentNode.disabled||!c.nodeName(l.parentNode,"optgroup"))){a=c(l).val();if(b)return a;d.push(a)}}return d}if(ta.test(b.type)&&!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(Sa,"")}return B}var k=c.isFunction(a);return this.each(function(o){var x=c(this),r=a;if(this.nodeType===1){if(k)r=
a.call(this,o,x.val());if(r==null)r="";else if(typeof r==="number")r+="";else if(c.isArray(r))r=c.map(r,function(C){return C==null?"":C+""});if(c.isArray(r)&&ta.test(this.type))this.checked=c.inArray(x.val(),r)>=0;else if(c.nodeName(this,"select")){var A=c.makeArray(r);c("option",this).each(function(){this.selected=c.inArray(c(this).val(),A)>=0});if(!A.length)this.selectedIndex=-1}else this.value=r}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},
attr:function(a,b,d,e){if(!a||a.nodeType===3||a.nodeType===8)return B;if(e&&b in c.attrFn)return c(a)[b](d);e=a.nodeType!==1||!c.isXMLDoc(a);var f=d!==B;b=e&&c.props[b]||b;var h=Ta.test(b);if((b in a||a[b]!==B)&&e&&!h){if(f){b==="type"&&Ua.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");if(d===null)a.nodeType===1&&a.removeAttribute(b);else a[b]=d}if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&
b.specified?b.value:Va.test(a.nodeName)||Wa.test(a.nodeName)&&a.href?0:B;return a[b]}if(!c.support.style&&e&&b==="style"){if(f)a.style.cssText=""+d;return a.style.cssText}f&&a.setAttribute(b,""+d);if(!a.attributes[b]&&a.hasAttribute&&!a.hasAttribute(b))return B;a=!c.support.hrefNormalized&&e&&h?a.getAttribute(b,2):a.getAttribute(b);return a===null?B:a}});var X=/\.(.*)$/,ia=/^(?:textarea|input|select)$/i,La=/\./g,Ma=/ /g,Xa=/[^\w\s.|`]/g,Ya=function(a){return a.replace(Xa,"\\$&")},ua={focusin:0,focusout:0};
c.event={add:function(a,b,d,e){if(!(a.nodeType===3||a.nodeType===8)){if(c.isWindow(a)&&a!==E&&!a.frameElement)a=E;if(d===false)d=U;else if(!d)return;var f,h;if(d.handler){f=d;d=f.handler}if(!d.guid)d.guid=c.guid++;if(h=c.data(a)){var l=a.nodeType?"events":"__events__",k=h[l],o=h.handle;if(typeof k==="function"){o=k.handle;k=k.events}else if(!k){a.nodeType||(h[l]=h=function(){});h.events=k={}}if(!o)h.handle=o=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(o.elem,
arguments):B};o.elem=a;b=b.split(" ");for(var x=0,r;l=b[x++];){h=f?c.extend({},f):{handler:d,data:e};if(l.indexOf(".")>-1){r=l.split(".");l=r.shift();h.namespace=r.slice(0).sort().join(".")}else{r=[];h.namespace=""}h.type=l;if(!h.guid)h.guid=d.guid;var A=k[l],C=c.event.special[l]||{};if(!A){A=k[l]=[];if(!C.setup||C.setup.call(a,e,r,o)===false)if(a.addEventListener)a.addEventListener(l,o,false);else a.attachEvent&&a.attachEvent("on"+l,o)}if(C.add){C.add.call(a,h);if(!h.handler.guid)h.handler.guid=
d.guid}A.push(h);c.event.global[l]=true}a=null}}},global:{},remove:function(a,b,d,e){if(!(a.nodeType===3||a.nodeType===8)){if(d===false)d=U;var f,h,l=0,k,o,x,r,A,C,J=a.nodeType?"events":"__events__",w=c.data(a),I=w&&w[J];if(w&&I){if(typeof I==="function"){w=I;I=I.events}if(b&&b.type){d=b.handler;b=b.type}if(!b||typeof b==="string"&&b.charAt(0)==="."){b=b||"";for(f in I)c.event.remove(a,f+b)}else{for(b=b.split(" ");f=b[l++];){r=f;k=f.indexOf(".")<0;o=[];if(!k){o=f.split(".");f=o.shift();x=RegExp("(^|\\.)"+
c.map(o.slice(0).sort(),Ya).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(A=I[f])if(d){r=c.event.special[f]||{};for(h=e||0;h<A.length;h++){C=A[h];if(d.guid===C.guid){if(k||x.test(C.namespace)){e==null&&A.splice(h--,1);r.remove&&r.remove.call(a,C)}if(e!=null)break}}if(A.length===0||e!=null&&A.length===1){if(!r.teardown||r.teardown.call(a,o)===false)c.removeEvent(a,f,w.handle);delete I[f]}}else for(h=0;h<A.length;h++){C=A[h];if(k||x.test(C.namespace)){c.event.remove(a,r,C.handler,h);A.splice(h--,1)}}}if(c.isEmptyObject(I)){if(b=
w.handle)b.elem=null;delete w.events;delete w.handle;if(typeof w==="function")c.removeData(a,J);else c.isEmptyObject(w)&&c.removeData(a)}}}}},trigger:function(a,b,d,e){var f=a.type||a;if(!e){a=typeof a==="object"?a[c.expando]?a:c.extend(c.Event(f),a):c.Event(f);if(f.indexOf("!")>=0){a.type=f=f.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[f]&&c.each(c.cache,function(){this.events&&this.events[f]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===
8)return B;a.result=B;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(e=d.nodeType?c.data(d,"handle"):(c.data(d,"__events__")||{}).handle)&&e.apply(d,b);e=d.parentNode||d.ownerDocument;try{if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()]))if(d["on"+f]&&d["on"+f].apply(d,b)===false){a.result=false;a.preventDefault()}}catch(h){}if(!a.isPropagationStopped()&&e)c.event.trigger(a,b,e,true);else if(!a.isDefaultPrevented()){var l;e=a.target;var k=f.replace(X,""),o=c.nodeName(e,"a")&&k===
"click",x=c.event.special[k]||{};if((!x._default||x._default.call(d,a)===false)&&!o&&!(e&&e.nodeName&&c.noData[e.nodeName.toLowerCase()])){try{if(e[k]){if(l=e["on"+k])e["on"+k]=null;c.event.triggered=true;e[k]()}}catch(r){}if(l)e["on"+k]=l;c.event.triggered=false}}},handle:function(a){var b,d,e,f;d=[];var h=c.makeArray(arguments);a=h[0]=c.event.fix(a||E.event);a.currentTarget=this;b=a.type.indexOf(".")<0&&!a.exclusive;if(!b){e=a.type.split(".");a.type=e.shift();d=e.slice(0).sort();e=RegExp("(^|\\.)"+
d.join("\\.(?:.*\\.)?")+"(\\.|$)")}a.namespace=a.namespace||d.join(".");f=c.data(this,this.nodeType?"events":"__events__");if(typeof f==="function")f=f.events;d=(f||{})[a.type];if(f&&d){d=d.slice(0);f=0;for(var l=d.length;f<l;f++){var k=d[f];if(b||e.test(k.namespace)){a.handler=k.handler;a.data=k.data;a.handleObj=k;k=k.handler.apply(this,h);if(k!==B){a.result=k;if(k===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
fix:function(a){if(a[c.expando])return a;var b=a;a=c.Event(b);for(var d=this.props.length,e;d;){e=this.props[--d];a[e]=b[e]}if(!a.target)a.target=a.srcElement||t;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=t.documentElement;d=t.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||
d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(a.which==null&&(a.charCode!=null||a.keyCode!=null))a.which=a.charCode!=null?a.charCode:a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==B)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,Y(a.origType,a.selector),c.extend({},a,{handler:Ka,guid:a.handler.guid}))},remove:function(a){c.event.remove(this,
Y(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,d){if(c.isWindow(this))this.onbeforeunload=d},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};c.removeEvent=t.removeEventListener?function(a,b,d){a.removeEventListener&&a.removeEventListener(b,d,false)}:function(a,b,d){a.detachEvent&&a.detachEvent("on"+b,d)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=a;this.type=a.type}else this.type=a;this.timeStamp=
c.now();this[c.expando]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=ca;var a=this.originalEvent;if(a)if(a.preventDefault)a.preventDefault();else a.returnValue=false},stopPropagation:function(){this.isPropagationStopped=ca;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=ca;this.stopPropagation()},isDefaultPrevented:U,isPropagationStopped:U,isImmediatePropagationStopped:U};
var va=function(a){var b=a.relatedTarget;try{for(;b&&b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},wa=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?wa:va,a)},teardown:function(d){c.event.remove(this,b,d&&d.selector?wa:va)}}});if(!c.support.submitBubbles)c.event.special.submit={setup:function(){if(this.nodeName.toLowerCase()!==
"form"){c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="submit"||d==="image")&&c(b).closest("form").length){a.liveFired=B;return la("submit",this,arguments)}});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13){a.liveFired=B;return la("submit",this,arguments)}})}else return false},teardown:function(){c.event.remove(this,".specialSubmit")}};if(!c.support.changeBubbles){var V,
xa=function(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(e){return e.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d},Z=function(a,b){var d=a.target,e,f;if(!(!ia.test(d.nodeName)||d.readOnly)){e=c.data(d,"_change_data");f=xa(d);if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",f);if(!(e===B||f===e))if(e!=null||f){a.type="change";a.liveFired=
B;return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:Z,beforedeactivate:Z,click:function(a){var b=a.target,d=b.type;if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return Z.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return Z.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,"_change_data",xa(a))}},setup:function(){if(this.type===
"file")return false;for(var a in V)c.event.add(this,a+".specialChange",V[a]);return ia.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return ia.test(this.nodeName)}};V=c.event.special.change.filters;V.focus=V.beforeactivate}t.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(e){e=c.event.fix(e);e.type=b;return c.event.trigger(e,null,e.target)}c.event.special[b]={setup:function(){ua[b]++===0&&t.addEventListener(a,d,true)},teardown:function(){--ua[b]===
0&&t.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(d,e,f){if(typeof d==="object"){for(var h in d)this[b](h,e,d[h],f);return this}if(c.isFunction(e)||e===false){f=e;e=B}var l=b==="one"?c.proxy(f,function(o){c(this).unbind(o,l);return f.apply(this,arguments)}):f;if(d==="unload"&&b!=="one")this.one(d,e,f);else{h=0;for(var k=this.length;h<k;h++)c.event.add(this[h],d,l,e)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&!a.preventDefault)for(var d in a)this.unbind(d,
a[d]);else{d=0;for(var e=this.length;d<e;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,d,e){return this.live(b,d,e,a)},undelegate:function(a,b,d){return arguments.length===0?this.unbind("live"):this.die(b,null,d,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){var d=c.Event(a);d.preventDefault();d.stopPropagation();c.event.trigger(d,b,this[0]);return d.result}},toggle:function(a){for(var b=arguments,d=
1;d<b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(e){var f=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,f+1);e.preventDefault();return b[f].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var ya={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};c.each(["live","die"],function(a,b){c.fn[b]=function(d,e,f,h){var l,k=0,o,x,r=h||this.selector;h=h?this:c(this.context);if(typeof d===
"object"&&!d.preventDefault){for(l in d)h[b](l,e,d[l],r);return this}if(c.isFunction(e)){f=e;e=B}for(d=(d||"").split(" ");(l=d[k++])!=null;){o=X.exec(l);x="";if(o){x=o[0];l=l.replace(X,"")}if(l==="hover")d.push("mouseenter"+x,"mouseleave"+x);else{o=l;if(l==="focus"||l==="blur"){d.push(ya[l]+x);l+=x}else l=(ya[l]||l)+x;if(b==="live"){x=0;for(var A=h.length;x<A;x++)c.event.add(h[x],"live."+Y(l,r),{data:e,selector:r,handler:f,origType:l,origHandler:f,preType:o})}else h.unbind("live."+Y(l,r),f)}}return this}});
c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){c.fn[b]=function(d,e){if(e==null){e=d;d=null}return arguments.length>0?this.bind(b,d,e):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});E.attachEvent&&!E.addEventListener&&c(E).bind("unload",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});
(function(){function a(g,i,n,m,p,q){p=0;for(var u=m.length;p<u;p++){var y=m[p];if(y){var F=false;for(y=y[g];y;){if(y.sizcache===n){F=m[y.sizset];break}if(y.nodeType===1&&!q){y.sizcache=n;y.sizset=p}if(y.nodeName.toLowerCase()===i){F=y;break}y=y[g]}m[p]=F}}}function b(g,i,n,m,p,q){p=0;for(var u=m.length;p<u;p++){var y=m[p];if(y){var F=false;for(y=y[g];y;){if(y.sizcache===n){F=m[y.sizset];break}if(y.nodeType===1){if(!q){y.sizcache=n;y.sizset=p}if(typeof i!=="string"){if(y===i){F=true;break}}else if(k.filter(i,
[y]).length>0){F=y;break}}y=y[g]}m[p]=F}}}var d=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e=0,f=Object.prototype.toString,h=false,l=true;[0,0].sort(function(){l=false;return 0});var k=function(g,i,n,m){n=n||[];var p=i=i||t;if(i.nodeType!==1&&i.nodeType!==9)return[];if(!g||typeof g!=="string")return n;var q,u,y,F,M,N=true,O=k.isXML(i),D=[],R=g;do{d.exec("");if(q=d.exec(R)){R=q[3];D.push(q[1]);if(q[2]){F=q[3];
break}}}while(q);if(D.length>1&&x.exec(g))if(D.length===2&&o.relative[D[0]])u=L(D[0]+D[1],i);else for(u=o.relative[D[0]]?[i]:k(D.shift(),i);D.length;){g=D.shift();if(o.relative[g])g+=D.shift();u=L(g,u)}else{if(!m&&D.length>1&&i.nodeType===9&&!O&&o.match.ID.test(D[0])&&!o.match.ID.test(D[D.length-1])){q=k.find(D.shift(),i,O);i=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]}if(i){q=m?{expr:D.pop(),set:C(m)}:k.find(D.pop(),D.length===1&&(D[0]==="~"||D[0]==="+")&&i.parentNode?i.parentNode:i,O);u=q.expr?k.filter(q.expr,
q.set):q.set;if(D.length>0)y=C(u);else N=false;for(;D.length;){q=M=D.pop();if(o.relative[M])q=D.pop();else M="";if(q==null)q=i;o.relative[M](y,q,O)}}else y=[]}y||(y=u);y||k.error(M||g);if(f.call(y)==="[object Array]")if(N)if(i&&i.nodeType===1)for(g=0;y[g]!=null;g++){if(y[g]&&(y[g]===true||y[g].nodeType===1&&k.contains(i,y[g])))n.push(u[g])}else for(g=0;y[g]!=null;g++)y[g]&&y[g].nodeType===1&&n.push(u[g]);else n.push.apply(n,y);else C(y,n);if(F){k(F,p,n,m);k.uniqueSort(n)}return n};k.uniqueSort=function(g){if(w){h=
l;g.sort(w);if(h)for(var i=1;i<g.length;i++)g[i]===g[i-1]&&g.splice(i--,1)}return g};k.matches=function(g,i){return k(g,null,null,i)};k.matchesSelector=function(g,i){return k(i,null,null,[g]).length>0};k.find=function(g,i,n){var m;if(!g)return[];for(var p=0,q=o.order.length;p<q;p++){var u,y=o.order[p];if(u=o.leftMatch[y].exec(g)){var F=u[1];u.splice(1,1);if(F.substr(F.length-1)!=="\\"){u[1]=(u[1]||"").replace(/\\/g,"");m=o.find[y](u,i,n);if(m!=null){g=g.replace(o.match[y],"");break}}}}m||(m=i.getElementsByTagName("*"));
return{set:m,expr:g}};k.filter=function(g,i,n,m){for(var p,q,u=g,y=[],F=i,M=i&&i[0]&&k.isXML(i[0]);g&&i.length;){for(var N in o.filter)if((p=o.leftMatch[N].exec(g))!=null&&p[2]){var O,D,R=o.filter[N];D=p[1];q=false;p.splice(1,1);if(D.substr(D.length-1)!=="\\"){if(F===y)y=[];if(o.preFilter[N])if(p=o.preFilter[N](p,F,n,y,m,M)){if(p===true)continue}else q=O=true;if(p)for(var j=0;(D=F[j])!=null;j++)if(D){O=R(D,p,j,F);var s=m^!!O;if(n&&O!=null)if(s)q=true;else F[j]=false;else if(s){y.push(D);q=true}}if(O!==
B){n||(F=y);g=g.replace(o.match[N],"");if(!q)return[];break}}}if(g===u)if(q==null)k.error(g);else break;u=g}return F};k.error=function(g){throw"Syntax error, unrecognized expression: "+g;};var o=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,
POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){return g.getAttribute("href")}},relative:{"+":function(g,i){var n=typeof i==="string",m=n&&!/\W/.test(i);n=n&&!m;if(m)i=i.toLowerCase();m=0;for(var p=g.length,q;m<p;m++)if(q=g[m]){for(;(q=q.previousSibling)&&q.nodeType!==1;);g[m]=n||q&&q.nodeName.toLowerCase()===
i?q||false:q===i}n&&k.filter(i,g,true)},">":function(g,i){var n,m=typeof i==="string",p=0,q=g.length;if(m&&!/\W/.test(i))for(i=i.toLowerCase();p<q;p++){if(n=g[p]){n=n.parentNode;g[p]=n.nodeName.toLowerCase()===i?n:false}}else{for(;p<q;p++)if(n=g[p])g[p]=m?n.parentNode:n.parentNode===i;m&&k.filter(i,g,true)}},"":function(g,i,n){var m,p=e++,q=b;if(typeof i==="string"&&!/\W/.test(i)){m=i=i.toLowerCase();q=a}q("parentNode",i,p,g,m,n)},"~":function(g,i,n){var m,p=e++,q=b;if(typeof i==="string"&&!/\W/.test(i)){m=
i=i.toLowerCase();q=a}q("previousSibling",i,p,g,m,n)}},find:{ID:function(g,i,n){if(typeof i.getElementById!=="undefined"&&!n)return(g=i.getElementById(g[1]))&&g.parentNode?[g]:[]},NAME:function(g,i){if(typeof i.getElementsByName!=="undefined"){for(var n=[],m=i.getElementsByName(g[1]),p=0,q=m.length;p<q;p++)m[p].getAttribute("name")===g[1]&&n.push(m[p]);return n.length===0?null:n}},TAG:function(g,i){return i.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,i,n,m,p,q){g=" "+g[1].replace(/\\/g,
"")+" ";if(q)return g;q=0;for(var u;(u=i[q])!=null;q++)if(u)if(p^(u.className&&(" "+u.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))n||m.push(u);else if(n)i[q]=false;return false},ID:function(g){return g[1].replace(/\\/g,"")},TAG:function(g){return g[1].toLowerCase()},CHILD:function(g){if(g[1]==="nth"){var i=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);g[2]=i[1]+(i[2]||1)-0;g[3]=i[3]-0}g[0]=e++;return g},ATTR:function(g,i,n,
m,p,q){i=g[1].replace(/\\/g,"");if(!q&&o.attrMap[i])g[1]=o.attrMap[i];if(g[2]==="~=")g[4]=" "+g[4]+" ";return g},PSEUDO:function(g,i,n,m,p){if(g[1]==="not")if((d.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=k(g[3],null,null,i);else{g=k.filter(g[3],i,n,true^p);n||m.push.apply(m,g);return false}else if(o.match.POS.test(g[0])||o.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&&g.type!=="hidden"},disabled:function(g){return g.disabled===
true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,i,n){return!!k(n[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},text:function(g){return"text"===g.type},radio:function(g){return"radio"===g.type},checkbox:function(g){return"checkbox"===g.type},file:function(g){return"file"===g.type},password:function(g){return"password"===g.type},submit:function(g){return"submit"===
g.type},image:function(g){return"image"===g.type},reset:function(g){return"reset"===g.type},button:function(g){return"button"===g.type||g.nodeName.toLowerCase()==="button"},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},setFilters:{first:function(g,i){return i===0},last:function(g,i,n,m){return i===m.length-1},even:function(g,i){return i%2===0},odd:function(g,i){return i%2===1},lt:function(g,i,n){return i<n[3]-0},gt:function(g,i,n){return i>n[3]-0},nth:function(g,i,n){return n[3]-
0===i},eq:function(g,i,n){return n[3]-0===i}},filter:{PSEUDO:function(g,i,n,m){var p=i[1],q=o.filters[p];if(q)return q(g,n,i,m);else if(p==="contains")return(g.textContent||g.innerText||k.getText([g])||"").indexOf(i[3])>=0;else if(p==="not"){i=i[3];n=0;for(m=i.length;n<m;n++)if(i[n]===g)return false;return true}else k.error("Syntax error, unrecognized expression: "+p)},CHILD:function(g,i){var n=i[1],m=g;switch(n){case "only":case "first":for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(n===
"first")return true;m=g;case "last":for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case "nth":n=i[2];var p=i[3];if(n===1&&p===0)return true;var q=i[0],u=g.parentNode;if(u&&(u.sizcache!==q||!g.nodeIndex)){var y=0;for(m=u.firstChild;m;m=m.nextSibling)if(m.nodeType===1)m.nodeIndex=++y;u.sizcache=q}m=g.nodeIndex-p;return n===0?m===0:m%n===0&&m/n>=0}},ID:function(g,i){return g.nodeType===1&&g.getAttribute("id")===i},TAG:function(g,i){return i==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===
i},CLASS:function(g,i){return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(i)>-1},ATTR:function(g,i){var n=i[1];n=o.attrHandle[n]?o.attrHandle[n](g):g[n]!=null?g[n]:g.getAttribute(n);var m=n+"",p=i[2],q=i[4];return n==null?p==="!=":p==="="?m===q:p==="*="?m.indexOf(q)>=0:p==="~="?(" "+m+" ").indexOf(q)>=0:!q?m&&n!==false:p==="!="?m!==q:p==="^="?m.indexOf(q)===0:p==="$="?m.substr(m.length-q.length)===q:p==="|="?m===q||m.substr(0,q.length+1)===q+"-":false},POS:function(g,i,n,m){var p=o.setFilters[i[2]];
if(p)return p(g,n,i,m)}}},x=o.match.POS,r=function(g,i){return"\\"+(i-0+1)},A;for(A in o.match){o.match[A]=RegExp(o.match[A].source+/(?![^\[]*\])(?![^\(]*\))/.source);o.leftMatch[A]=RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[A].source.replace(/\\(\d+)/g,r))}var C=function(g,i){g=Array.prototype.slice.call(g,0);if(i){i.push.apply(i,g);return i}return g};try{Array.prototype.slice.call(t.documentElement.childNodes,0)}catch(J){C=function(g,i){var n=0,m=i||[];if(f.call(g)==="[object Array]")Array.prototype.push.apply(m,
g);else if(typeof g.length==="number")for(var p=g.length;n<p;n++)m.push(g[n]);else for(;g[n];n++)m.push(g[n]);return m}}var w,I;if(t.documentElement.compareDocumentPosition)w=function(g,i){if(g===i){h=true;return 0}if(!g.compareDocumentPosition||!i.compareDocumentPosition)return g.compareDocumentPosition?-1:1;return g.compareDocumentPosition(i)&4?-1:1};else{w=function(g,i){var n,m,p=[],q=[];n=g.parentNode;m=i.parentNode;var u=n;if(g===i){h=true;return 0}else if(n===m)return I(g,i);else if(n){if(!m)return 1}else return-1;
for(;u;){p.unshift(u);u=u.parentNode}for(u=m;u;){q.unshift(u);u=u.parentNode}n=p.length;m=q.length;for(u=0;u<n&&u<m;u++)if(p[u]!==q[u])return I(p[u],q[u]);return u===n?I(g,q[u],-1):I(p[u],i,1)};I=function(g,i,n){if(g===i)return n;for(g=g.nextSibling;g;){if(g===i)return-1;g=g.nextSibling}return 1}}k.getText=function(g){for(var i="",n,m=0;g[m];m++){n=g[m];if(n.nodeType===3||n.nodeType===4)i+=n.nodeValue;else if(n.nodeType!==8)i+=k.getText(n.childNodes)}return i};(function(){var g=t.createElement("div"),
i="script"+(new Date).getTime(),n=t.documentElement;g.innerHTML="<a name='"+i+"'/>";n.insertBefore(g,n.firstChild);if(t.getElementById(i)){o.find.ID=function(m,p,q){if(typeof p.getElementById!=="undefined"&&!q)return(p=p.getElementById(m[1]))?p.id===m[1]||typeof p.getAttributeNode!=="undefined"&&p.getAttributeNode("id").nodeValue===m[1]?[p]:B:[]};o.filter.ID=function(m,p){var q=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&q&&q.nodeValue===p}}n.removeChild(g);
n=g=null})();(function(){var g=t.createElement("div");g.appendChild(t.createComment(""));if(g.getElementsByTagName("*").length>0)o.find.TAG=function(i,n){var m=n.getElementsByTagName(i[1]);if(i[1]==="*"){for(var p=[],q=0;m[q];q++)m[q].nodeType===1&&p.push(m[q]);m=p}return m};g.innerHTML="<a href='#'></a>";if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")o.attrHandle.href=function(i){return i.getAttribute("href",2)};g=null})();t.querySelectorAll&&
function(){var g=k,i=t.createElement("div");i.innerHTML="<p class='TEST'></p>";if(!(i.querySelectorAll&&i.querySelectorAll(".TEST").length===0)){k=function(m,p,q,u){p=p||t;m=m.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!u&&!k.isXML(p))if(p.nodeType===9)try{return C(p.querySelectorAll(m),q)}catch(y){}else if(p.nodeType===1&&p.nodeName.toLowerCase()!=="object"){var F=p.getAttribute("id"),M=F||"__sizzle__";F||p.setAttribute("id",M);try{return C(p.querySelectorAll("#"+M+" "+m),q)}catch(N){}finally{F||
p.removeAttribute("id")}}return g(m,p,q,u)};for(var n in g)k[n]=g[n];i=null}}();(function(){var g=t.documentElement,i=g.matchesSelector||g.mozMatchesSelector||g.webkitMatchesSelector||g.msMatchesSelector,n=false;try{i.call(t.documentElement,"[test!='']:sizzle")}catch(m){n=true}if(i)k.matchesSelector=function(p,q){q=q.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(p))try{if(n||!o.match.PSEUDO.test(q)&&!/!=/.test(q))return i.call(p,q)}catch(u){}return k(q,null,null,[p]).length>0}})();(function(){var g=
t.createElement("div");g.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){g.lastChild.className="e";if(g.getElementsByClassName("e").length!==1){o.order.splice(1,0,"CLASS");o.find.CLASS=function(i,n,m){if(typeof n.getElementsByClassName!=="undefined"&&!m)return n.getElementsByClassName(i[1])};g=null}}})();k.contains=t.documentElement.contains?function(g,i){return g!==i&&(g.contains?g.contains(i):true)}:t.documentElement.compareDocumentPosition?
function(g,i){return!!(g.compareDocumentPosition(i)&16)}:function(){return false};k.isXML=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false};var L=function(g,i){for(var n,m=[],p="",q=i.nodeType?[i]:i;n=o.match.PSEUDO.exec(g);){p+=n[0];g=g.replace(o.match.PSEUDO,"")}g=o.relative[g]?g+"*":g;n=0;for(var u=q.length;n<u;n++)k(g,q[n],m);return k.filter(p,m)};c.find=k;c.expr=k.selectors;c.expr[":"]=c.expr.filters;c.unique=k.uniqueSort;c.text=k.getText;c.isXMLDoc=k.isXML;
c.contains=k.contains})();var Za=/Until$/,$a=/^(?:parents|prevUntil|prevAll)/,ab=/,/,Na=/^.[^:#\[\.,]*$/,bb=Array.prototype.slice,cb=c.expr.match.POS;c.fn.extend({find:function(a){for(var b=this.pushStack("","find",a),d=0,e=0,f=this.length;e<f;e++){d=b.length;c.find(a,this[e],b);if(e>0)for(var h=d;h<b.length;h++)for(var l=0;l<d;l++)if(b[l]===b[h]){b.splice(h--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,e=b.length;d<e;d++)if(c.contains(this,b[d]))return true})},
not:function(a){return this.pushStack(ma(this,a,false),"not",a)},filter:function(a){return this.pushStack(ma(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,b){var d=[],e,f,h=this[0];if(c.isArray(a)){var l,k={},o=1;if(h&&a.length){e=0;for(f=a.length;e<f;e++){l=a[e];k[l]||(k[l]=c.expr.match.POS.test(l)?c(l,b||this.context):l)}for(;h&&h.ownerDocument&&h!==b;){for(l in k){e=k[l];if(e.jquery?e.index(h)>-1:c(h).is(e))d.push({selector:l,elem:h,level:o})}h=
h.parentNode;o++}}return d}l=cb.test(a)?c(a,b||this.context):null;e=0;for(f=this.length;e<f;e++)for(h=this[e];h;)if(l?l.index(h)>-1:c.find.matchesSelector(h,a)){d.push(h);break}else{h=h.parentNode;if(!h||!h.ownerDocument||h===b)break}d=d.length>1?c.unique(d):d;return this.pushStack(d,"closest",a)},index:function(a){if(!a||typeof a==="string")return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var d=typeof a==="string"?c(a,b||this.context):
c.makeArray(a),e=c.merge(this.get(),d);return this.pushStack(!d[0]||!d[0].parentNode||d[0].parentNode.nodeType===11||!e[0]||!e[0].parentNode||e[0].parentNode.nodeType===11?e:c.unique(e))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,
2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,
b){c.fn[a]=function(d,e){var f=c.map(this,b,d);Za.test(a)||(e=d);if(e&&typeof e==="string")f=c.filter(e,f);f=this.length>1?c.unique(f):f;if((this.length>1||ab.test(e))&&$a.test(a))f=f.reverse();return this.pushStack(f,a,bb.call(arguments).join(","))}});c.extend({filter:function(a,b,d){if(d)a=":not("+a+")";return b.length===1?c.find.matchesSelector(b[0],a)?[b[0]]:[]:c.find.matches(a,b)},dir:function(a,b,d){var e=[];for(a=a[b];a&&a.nodeType!==9&&(d===B||a.nodeType!==1||!c(a).is(d));){a.nodeType===1&&
e.push(a);a=a[b]}return e},nth:function(a,b,d){b=b||1;for(var e=0;a;a=a[d])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);return d}});var za=/ jQuery\d+="(?:\d+|null)"/g,$=/^\s+/,Aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Ba=/<([\w:]+)/,db=/<tbody/i,eb=/<|&#?\w+;/,Ca=/<(?:script|object|embed|option|style)/i,Da=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/\=([^="'>\s]+\/)>/g,P={option:[1,
"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};P.optgroup=P.option;P.tbody=P.tfoot=P.colgroup=P.caption=P.thead;P.th=P.td;if(!c.support.htmlSerialize)P._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=
c(this);d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==B)return this.empty().append((this[0]&&this[0].ownerDocument||t).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},
wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},
prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,
this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,e;(e=this[d])!=null;d++)if(!a||c.filter(a,[e]).length){if(!b&&e.nodeType===1){c.cleanData(e.getElementsByTagName("*"));c.cleanData([e])}e.parentNode&&e.parentNode.removeChild(e)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);
return this},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var d=this.outerHTML,e=this.ownerDocument;if(!d){d=e.createElement("div");d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(za,"").replace(fb,'="$1">').replace($,"")],e)[0]}else return this.cloneNode(true)});if(a===true){na(this,b);na(this.find("*"),b.find("*"))}return b},html:function(a){if(a===B)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(za,""):null;
else if(typeof a==="string"&&!Ca.test(a)&&(c.support.leadingWhitespace||!$.test(a))&&!P[(Ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Aa,"<$1></$2>");try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(e){this.empty().append(a)}}else c.isFunction(a)?this.each(function(f){var h=c(this);h.html(a.call(this,f,h.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=
c(this),e=d.html();d.replaceWith(a.call(this,b,e))});if(typeof a!=="string")a=c(a).detach();return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){var e,f,h,l=a[0],k=[];if(!c.support.checkClone&&arguments.length===3&&typeof l==="string"&&Da.test(l))return this.each(function(){c(this).domManip(a,
b,d,true)});if(c.isFunction(l))return this.each(function(x){var r=c(this);a[0]=l.call(this,x,b?r.html():B);r.domManip(a,b,d)});if(this[0]){e=l&&l.parentNode;e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:c.buildFragment(a,this,k);h=e.fragment;if(f=h.childNodes.length===1?h=h.firstChild:h.firstChild){b=b&&c.nodeName(f,"tr");f=0;for(var o=this.length;f<o;f++)d.call(b?c.nodeName(this[f],"table")?this[f].getElementsByTagName("tbody")[0]||this[f].appendChild(this[f].ownerDocument.createElement("tbody")):
this[f]:this[f],f>0||e.cacheable||this.length>1?h.cloneNode(true):h)}k.length&&c.each(k,Oa)}return this}});c.buildFragment=function(a,b,d){var e,f,h;b=b&&b[0]?b[0].ownerDocument||b[0]:t;if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===t&&!Ca.test(a[0])&&(c.support.checkClone||!Da.test(a[0]))){f=true;if(h=c.fragments[a[0]])if(h!==1)e=h}if(!e){e=b.createDocumentFragment();c.clean(a,b,e,d)}if(f)c.fragments[a[0]]=h?e:1;return{fragment:e,cacheable:f}};c.fragments={};c.each({appendTo:"append",
prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var e=[];d=c(d);var f=this.length===1&&this[0].parentNode;if(f&&f.nodeType===11&&f.childNodes.length===1&&d.length===1){d[b](this[0]);return this}else{f=0;for(var h=d.length;f<h;f++){var l=(f>0?this.clone(true):this).get();c(d[f])[b](l);e=e.concat(l)}return this.pushStack(e,a,d.selector)}}});c.extend({clean:function(a,b,d,e){b=b||t;if(typeof b.createElement==="undefined")b=b.ownerDocument||
b[0]&&b[0].ownerDocument||t;for(var f=[],h=0,l;(l=a[h])!=null;h++){if(typeof l==="number")l+="";if(l){if(typeof l==="string"&&!eb.test(l))l=b.createTextNode(l);else if(typeof l==="string"){l=l.replace(Aa,"<$1></$2>");var k=(Ba.exec(l)||["",""])[1].toLowerCase(),o=P[k]||P._default,x=o[0],r=b.createElement("div");for(r.innerHTML=o[1]+l+o[2];x--;)r=r.lastChild;if(!c.support.tbody){x=db.test(l);k=k==="table"&&!x?r.firstChild&&r.firstChild.childNodes:o[1]==="<table>"&&!x?r.childNodes:[];for(o=k.length-
1;o>=0;--o)c.nodeName(k[o],"tbody")&&!k[o].childNodes.length&&k[o].parentNode.removeChild(k[o])}!c.support.leadingWhitespace&&$.test(l)&&r.insertBefore(b.createTextNode($.exec(l)[0]),r.firstChild);l=r.childNodes}if(l.nodeType)f.push(l);else f=c.merge(f,l)}}if(d)for(h=0;f[h];h++)if(e&&c.nodeName(f[h],"script")&&(!f[h].type||f[h].type.toLowerCase()==="text/javascript"))e.push(f[h].parentNode?f[h].parentNode.removeChild(f[h]):f[h]);else{f[h].nodeType===1&&f.splice.apply(f,[h+1,0].concat(c.makeArray(f[h].getElementsByTagName("script"))));
d.appendChild(f[h])}return f},cleanData:function(a){for(var b,d,e=c.cache,f=c.event.special,h=c.support.deleteExpando,l=0,k;(k=a[l])!=null;l++)if(!(k.nodeName&&c.noData[k.nodeName.toLowerCase()]))if(d=k[c.expando]){if((b=e[d])&&b.events)for(var o in b.events)f[o]?c.event.remove(k,o):c.removeEvent(k,o,b.handle);if(h)delete k[c.expando];else k.removeAttribute&&k.removeAttribute(c.expando);delete e[d]}}});var Ea=/alpha\([^)]*\)/i,gb=/opacity=([^)]*)/,hb=/-([a-z])/ig,ib=/([A-Z])/g,Fa=/^-?\d+(?:px)?$/i,
jb=/^-?\d/,kb={position:"absolute",visibility:"hidden",display:"block"},Pa=["Left","Right"],Qa=["Top","Bottom"],W,Ga,aa,lb=function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){if(arguments.length===2&&b===B)return this;return c.access(this,a,b,true,function(d,e,f){return f!==B?c.style(d,e,f):c.css(d,e)})};c.extend({cssHooks:{opacity:{get:function(a,b){if(b){var d=W(a,"opacity","opacity");return d===""?"1":d}else return a.style.opacity}}},cssNumber:{zIndex:true,fontWeight:true,opacity:true,
zoom:true,lineHeight:true},cssProps:{"float":c.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,d,e){if(!(!a||a.nodeType===3||a.nodeType===8||!a.style)){var f,h=c.camelCase(b),l=a.style,k=c.cssHooks[h];b=c.cssProps[h]||h;if(d!==B){if(!(typeof d==="number"&&isNaN(d)||d==null)){if(typeof d==="number"&&!c.cssNumber[h])d+="px";if(!k||!("set"in k)||(d=k.set(a,d))!==B)try{l[b]=d}catch(o){}}}else{if(k&&"get"in k&&(f=k.get(a,false,e))!==B)return f;return l[b]}}},css:function(a,b,d){var e,f=c.camelCase(b),
h=c.cssHooks[f];b=c.cssProps[f]||f;if(h&&"get"in h&&(e=h.get(a,true,d))!==B)return e;else if(W)return W(a,b,f)},swap:function(a,b,d){var e={},f;for(f in b){e[f]=a.style[f];a.style[f]=b[f]}d.call(a);for(f in b)a.style[f]=e[f]},camelCase:function(a){return a.replace(hb,lb)}});c.curCSS=c.css;c.each(["height","width"],function(a,b){c.cssHooks[b]={get:function(d,e,f){var h;if(e){if(d.offsetWidth!==0)h=oa(d,b,f);else c.swap(d,kb,function(){h=oa(d,b,f)});if(h<=0){h=W(d,b,b);if(h==="0px"&&aa)h=aa(d,b,b);
if(h!=null)return h===""||h==="auto"?"0px":h}if(h<0||h==null){h=d.style[b];return h===""||h==="auto"?"0px":h}return typeof h==="string"?h:h+"px"}},set:function(d,e){if(Fa.test(e)){e=parseFloat(e);if(e>=0)return e+"px"}else return e}}});if(!c.support.opacity)c.cssHooks.opacity={get:function(a,b){return gb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var d=a.style;d.zoom=1;var e=c.isNaN(b)?"":"alpha(opacity="+b*100+")",f=
d.filter||"";d.filter=Ea.test(f)?f.replace(Ea,e):d.filter+" "+e}};if(t.defaultView&&t.defaultView.getComputedStyle)Ga=function(a,b,d){var e;d=d.replace(ib,"-$1").toLowerCase();if(!(b=a.ownerDocument.defaultView))return B;if(b=b.getComputedStyle(a,null)){e=b.getPropertyValue(d);if(e===""&&!c.contains(a.ownerDocument.documentElement,a))e=c.style(a,d)}return e};if(t.documentElement.currentStyle)aa=function(a,b){var d,e,f=a.currentStyle&&a.currentStyle[b],h=a.style;if(!Fa.test(f)&&jb.test(f)){d=h.left;
e=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;h.left=b==="fontSize"?"1em":f||0;f=h.pixelLeft+"px";h.left=d;a.runtimeStyle.left=e}return f===""?"auto":f};W=Ga||aa;if(c.expr&&c.expr.filters){c.expr.filters.hidden=function(a){var b=a.offsetHeight;return a.offsetWidth===0&&b===0||!c.support.reliableHiddenOffsets&&(a.style.display||c.css(a,"display"))==="none"};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var mb=c.now(),nb=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
ob=/^(?:select|textarea)/i,pb=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,qb=/^(?:GET|HEAD)$/,Ra=/\[\]$/,T=/\=\?(&|$)/,ja=/\?/,rb=/([?&])_=[^&]*/,sb=/^(\w+:)?\/\/([^\/?#]+)/,tb=/%20/g,ub=/#.*$/,Ha=c.fn.load;c.fn.extend({load:function(a,b,d){if(typeof a!=="string"&&Ha)return Ha.apply(this,arguments);else if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var f=a.slice(e,a.length);a=a.slice(0,e)}e="GET";if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b===
"object"){b=c.param(b,c.ajaxSettings.traditional);e="POST"}var h=this;c.ajax({url:a,type:e,dataType:"html",data:b,complete:function(l,k){if(k==="success"||k==="notmodified")h.html(f?c("<div>").append(l.responseText.replace(nb,"")).find(f):l.responseText);d&&h.each(d,[l.responseText,k,l])}});return this},serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&
!this.disabled&&(this.checked||ob.test(this.nodeName)||pb.test(this.type))}).map(function(a,b){var d=c(this).val();return d==null?null:c.isArray(d)?c.map(d,function(e){return{name:b.name,value:e}}):{name:b.name,value:d}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,e){if(c.isFunction(b)){e=e||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:e})},
getScript:function(a,b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,e){if(c.isFunction(b)){e=e||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:e})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return new E.XMLHttpRequest},accepts:{xml:"application/xml, text/xml",html:"text/html",
script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},ajax:function(a){var b=c.extend(true,{},c.ajaxSettings,a),d,e,f,h=b.type.toUpperCase(),l=qb.test(h);b.url=b.url.replace(ub,"");b.context=a&&a.context!=null?a.context:b;if(b.data&&b.processData&&typeof b.data!=="string")b.data=c.param(b.data,b.traditional);if(b.dataType==="jsonp"){if(h==="GET")T.test(b.url)||(b.url+=(ja.test(b.url)?"&":"?")+(b.jsonp||"callback")+"=?");else if(!b.data||
!T.test(b.data))b.data=(b.data?b.data+"&":"")+(b.jsonp||"callback")+"=?";b.dataType="json"}if(b.dataType==="json"&&(b.data&&T.test(b.data)||T.test(b.url))){d=b.jsonpCallback||"jsonp"+mb++;if(b.data)b.data=(b.data+"").replace(T,"="+d+"$1");b.url=b.url.replace(T,"="+d+"$1");b.dataType="script";var k=E[d];E[d]=function(m){if(c.isFunction(k))k(m);else{E[d]=B;try{delete E[d]}catch(p){}}f=m;c.handleSuccess(b,w,e,f);c.handleComplete(b,w,e,f);r&&r.removeChild(A)}}if(b.dataType==="script"&&b.cache===null)b.cache=
false;if(b.cache===false&&l){var o=c.now(),x=b.url.replace(rb,"$1_="+o);b.url=x+(x===b.url?(ja.test(b.url)?"&":"?")+"_="+o:"")}if(b.data&&l)b.url+=(ja.test(b.url)?"&":"?")+b.data;b.global&&c.active++===0&&c.event.trigger("ajaxStart");o=(o=sb.exec(b.url))&&(o[1]&&o[1].toLowerCase()!==location.protocol||o[2].toLowerCase()!==location.host);if(b.dataType==="script"&&h==="GET"&&o){var r=t.getElementsByTagName("head")[0]||t.documentElement,A=t.createElement("script");if(b.scriptCharset)A.charset=b.scriptCharset;
A.src=b.url;if(!d){var C=false;A.onload=A.onreadystatechange=function(){if(!C&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){C=true;c.handleSuccess(b,w,e,f);c.handleComplete(b,w,e,f);A.onload=A.onreadystatechange=null;r&&A.parentNode&&r.removeChild(A)}}}r.insertBefore(A,r.firstChild);return B}var J=false,w=b.xhr();if(w){b.username?w.open(h,b.url,b.async,b.username,b.password):w.open(h,b.url,b.async);try{if(b.data!=null&&!l||a&&a.contentType)w.setRequestHeader("Content-Type",
b.contentType);if(b.ifModified){c.lastModified[b.url]&&w.setRequestHeader("If-Modified-Since",c.lastModified[b.url]);c.etag[b.url]&&w.setRequestHeader("If-None-Match",c.etag[b.url])}o||w.setRequestHeader("X-Requested-With","XMLHttpRequest");w.setRequestHeader("Accept",b.dataType&&b.accepts[b.dataType]?b.accepts[b.dataType]+", */*; q=0.01":b.accepts._default)}catch(I){}if(b.beforeSend&&b.beforeSend.call(b.context,w,b)===false){b.global&&c.active--===1&&c.event.trigger("ajaxStop");w.abort();return false}b.global&&
c.triggerGlobal(b,"ajaxSend",[w,b]);var L=w.onreadystatechange=function(m){if(!w||w.readyState===0||m==="abort"){J||c.handleComplete(b,w,e,f);J=true;if(w)w.onreadystatechange=c.noop}else if(!J&&w&&(w.readyState===4||m==="timeout")){J=true;w.onreadystatechange=c.noop;e=m==="timeout"?"timeout":!c.httpSuccess(w)?"error":b.ifModified&&c.httpNotModified(w,b.url)?"notmodified":"success";var p;if(e==="success")try{f=c.httpData(w,b.dataType,b)}catch(q){e="parsererror";p=q}if(e==="success"||e==="notmodified")d||
c.handleSuccess(b,w,e,f);else c.handleError(b,w,e,p);d||c.handleComplete(b,w,e,f);m==="timeout"&&w.abort();if(b.async)w=null}};try{var g=w.abort;w.abort=function(){w&&Function.prototype.call.call(g,w);L("abort")}}catch(i){}b.async&&b.timeout>0&&setTimeout(function(){w&&!J&&L("timeout")},b.timeout);try{w.send(l||b.data==null?null:b.data)}catch(n){c.handleError(b,w,null,n);c.handleComplete(b,w,e,f)}b.async||L();return w}},param:function(a,b){var d=[],e=function(h,l){l=c.isFunction(l)?l():l;d[d.length]=
encodeURIComponent(h)+"="+encodeURIComponent(l)};if(b===B)b=c.ajaxSettings.traditional;if(c.isArray(a)||a.jquery)c.each(a,function(){e(this.name,this.value)});else for(var f in a)da(f,a[f],b,e);return d.join("&").replace(tb,"+")}});c.extend({active:0,lastModified:{},etag:{},handleError:function(a,b,d,e){a.error&&a.error.call(a.context,b,d,e);a.global&&c.triggerGlobal(a,"ajaxError",[b,a,e])},handleSuccess:function(a,b,d,e){a.success&&a.success.call(a.context,e,d,b);a.global&&c.triggerGlobal(a,"ajaxSuccess",
[b,a])},handleComplete:function(a,b,d){a.complete&&a.complete.call(a.context,b,d);a.global&&c.triggerGlobal(a,"ajaxComplete",[b,a]);a.global&&c.active--===1&&c.event.trigger("ajaxStop")},triggerGlobal:function(a,b,d){(a.context&&a.context.url==null?c(a.context):c.event).trigger(b,d)},httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===1223}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),
e=a.getResponseHeader("Etag");if(d)c.lastModified[b]=d;if(e)c.etag[b]=e;return a.status===304},httpData:function(a,b,d){var e=a.getResponseHeader("content-type")||"",f=b==="xml"||!b&&e.indexOf("xml")>=0;a=f?a.responseXML:a.responseText;f&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");if(d&&d.dataFilter)a=d.dataFilter(a,b);if(typeof a==="string")if(b==="json"||!b&&e.indexOf("json")>=0)a=c.parseJSON(a);else if(b==="script"||!b&&e.indexOf("javascript")>=0)c.globalEval(a);return a}});
if(E.ActiveXObject)c.ajaxSettings.xhr=function(){if(E.location.protocol!=="file:")try{return new E.XMLHttpRequest}catch(a){}try{return new E.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}};c.support.ajax=!!c.ajaxSettings.xhr();var ea={},vb=/^(?:toggle|show|hide)$/,wb=/^([+\-]=)?([\d+.\-]+)(.*)$/,ba,pa=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b,d){if(a||a===0)return this.animate(S("show",
3),a,b,d);else{d=0;for(var e=this.length;d<e;d++){a=this[d];b=a.style.display;if(!c.data(a,"olddisplay")&&b==="none")b=a.style.display="";b===""&&c.css(a,"display")==="none"&&c.data(a,"olddisplay",qa(a.nodeName))}for(d=0;d<e;d++){a=this[d];b=a.style.display;if(b===""||b==="none")a.style.display=c.data(a,"olddisplay")||""}return this}},hide:function(a,b,d){if(a||a===0)return this.animate(S("hide",3),a,b,d);else{a=0;for(b=this.length;a<b;a++){d=c.css(this[a],"display");d!=="none"&&c.data(this[a],"olddisplay",
d)}for(a=0;a<b;a++)this[a].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b,d){var e=typeof a==="boolean";if(c.isFunction(a)&&c.isFunction(b))this._toggle.apply(this,arguments);else a==null||e?this.each(function(){var f=e?a:c(this).is(":hidden");c(this)[f?"show":"hide"]()}):this.animate(S("toggle",3),a,b,d);return this},fadeTo:function(a,b,d,e){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d,e)},animate:function(a,b,d,e){var f=c.speed(b,
d,e);if(c.isEmptyObject(a))return this.each(f.complete);return this[f.queue===false?"each":"queue"](function(){var h=c.extend({},f),l,k=this.nodeType===1,o=k&&c(this).is(":hidden"),x=this;for(l in a){var r=c.camelCase(l);if(l!==r){a[r]=a[l];delete a[l];l=r}if(a[l]==="hide"&&o||a[l]==="show"&&!o)return h.complete.call(this);if(k&&(l==="height"||l==="width")){h.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(c.css(this,"display")==="inline"&&c.css(this,"float")==="none")if(c.support.inlineBlockNeedsLayout)if(qa(this.nodeName)===
"inline")this.style.display="inline-block";else{this.style.display="inline";this.style.zoom=1}else this.style.display="inline-block"}if(c.isArray(a[l])){(h.specialEasing=h.specialEasing||{})[l]=a[l][1];a[l]=a[l][0]}}if(h.overflow!=null)this.style.overflow="hidden";h.curAnim=c.extend({},a);c.each(a,function(A,C){var J=new c.fx(x,h,A);if(vb.test(C))J[C==="toggle"?o?"show":"hide":C](a);else{var w=wb.exec(C),I=J.cur()||0;if(w){var L=parseFloat(w[2]),g=w[3]||"px";if(g!=="px"){c.style(x,A,(L||1)+g);I=(L||
1)/J.cur()*I;c.style(x,A,I+g)}if(w[1])L=(w[1]==="-="?-1:1)*L+I;J.custom(I,L,g)}else J.custom(I,C,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);this.each(function(){for(var e=d.length-1;e>=0;e--)if(d[e].elem===this){b&&d[e](true);d.splice(e,1)}});b||this.dequeue();return this}});c.each({slideDown:S("show",1),slideUp:S("hide",1),slideToggle:S("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){c.fn[a]=function(d,e,f){return this.animate(b,
d,e,f)}});c.extend({speed:function(a,b,d){var e=a&&typeof a==="object"?c.extend({},a):{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};e.duration=c.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in c.fx.speeds?c.fx.speeds[e.duration]:c.fx.speeds._default;e.old=e.complete;e.complete=function(){e.queue!==false&&c(this).dequeue();c.isFunction(e.old)&&e.old.call(this)};return e},easing:{linear:function(a,b,d,e){return d+e*a},swing:function(a,b,d,e){return(-Math.cos(a*
Math.PI)/2+0.5)*e+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||c.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a=parseFloat(c.css(this.elem,this.prop));return a&&a>-1E4?a:0},custom:function(a,b,d){function e(l){return f.step(l)}
var f=this,h=c.fx;this.startTime=c.now();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;this.pos=this.state=0;e.elem=this.elem;if(e()&&c.timers.push(e)&&!ba)ba=setInterval(h.tick,h.interval)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;
this.custom(this.cur(),0)},step:function(a){var b=c.now(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var e in this.options.curAnim)if(this.options.curAnim[e]!==true)d=false;if(d){if(this.options.overflow!=null&&!c.support.shrinkWrapBlocks){var f=this.elem,h=this.options;c.each(["","X","Y"],function(k,o){f.style["overflow"+o]=h.overflow[k]})}this.options.hide&&c(this.elem).hide();if(this.options.hide||
this.options.show)for(var l in this.options.curAnim)c.style(this.elem,l,this.options.orig[l]);this.options.complete.call(this.elem)}return false}else{a=b-this.startTime;this.state=a/this.options.duration;b=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||b](this.state,a,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=
c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||c.fx.stop()},interval:13,stop:function(){clearInterval(ba);ba=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===
b.elem}).length};var xb=/^t(?:able|d|h)$/i,Ia=/^(?:body|html)$/i;c.fn.offset="getBoundingClientRect"in t.documentElement?function(a){var b=this[0],d;if(a)return this.each(function(l){c.offset.setOffset(this,a,l)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);try{d=b.getBoundingClientRect()}catch(e){}var f=b.ownerDocument,h=f.documentElement;if(!d||!c.contains(h,b))return d||{top:0,left:0};b=f.body;f=fa(f);return{top:d.top+(f.pageYOffset||c.support.boxModel&&
h.scrollTop||b.scrollTop)-(h.clientTop||b.clientTop||0),left:d.left+(f.pageXOffset||c.support.boxModel&&h.scrollLeft||b.scrollLeft)-(h.clientLeft||b.clientLeft||0)}}:function(a){var b=this[0];if(a)return this.each(function(x){c.offset.setOffset(this,a,x)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d,e=b.offsetParent,f=b.ownerDocument,h=f.documentElement,l=f.body;d=(f=f.defaultView)?f.getComputedStyle(b,null):b.currentStyle;
for(var k=b.offsetTop,o=b.offsetLeft;(b=b.parentNode)&&b!==l&&b!==h;){if(c.offset.supportsFixedPosition&&d.position==="fixed")break;d=f?f.getComputedStyle(b,null):b.currentStyle;k-=b.scrollTop;o-=b.scrollLeft;if(b===e){k+=b.offsetTop;o+=b.offsetLeft;if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&xb.test(b.nodeName))){k+=parseFloat(d.borderTopWidth)||0;o+=parseFloat(d.borderLeftWidth)||0}e=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"){k+=
parseFloat(d.borderTopWidth)||0;o+=parseFloat(d.borderLeftWidth)||0}d=d}if(d.position==="relative"||d.position==="static"){k+=l.offsetTop;o+=l.offsetLeft}if(c.offset.supportsFixedPosition&&d.position==="fixed"){k+=Math.max(h.scrollTop,l.scrollTop);o+=Math.max(h.scrollLeft,l.scrollLeft)}return{top:k,left:o}};c.offset={initialize:function(){var a=t.body,b=t.createElement("div"),d,e,f,h=parseFloat(c.css(a,"marginTop"))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",
height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";a.insertBefore(b,a.firstChild);d=b.firstChild;e=d.firstChild;f=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=e.offsetTop!==5;this.doesAddBorderForTableAndCells=
f.offsetTop===5;e.style.position="fixed";e.style.top="20px";this.supportsFixedPosition=e.offsetTop===20||e.offsetTop===15;e.style.position=e.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=e.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==h;a.removeChild(b);c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.css(a,
"marginTop"))||0;d+=parseFloat(c.css(a,"marginLeft"))||0}return{top:b,left:d}},setOffset:function(a,b,d){var e=c.css(a,"position");if(e==="static")a.style.position="relative";var f=c(a),h=f.offset(),l=c.css(a,"top"),k=c.css(a,"left"),o=e==="absolute"&&c.inArray("auto",[l,k])>-1;e={};var x={};if(o)x=f.position();l=o?x.top:parseInt(l,10)||0;k=o?x.left:parseInt(k,10)||0;if(c.isFunction(b))b=b.call(a,d,h);if(b.top!=null)e.top=b.top-h.top+l;if(b.left!=null)e.left=b.left-h.left+k;"using"in b?b.using.call(a,
e):f.css(e)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),e=Ia.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.css(a,"marginTop"))||0;d.left-=parseFloat(c.css(a,"marginLeft"))||0;e.top+=parseFloat(c.css(b[0],"borderTopWidth"))||0;e.left+=parseFloat(c.css(b[0],"borderLeftWidth"))||0;return{top:d.top-e.top,left:d.left-e.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||t.body;a&&!Ia.test(a.nodeName)&&
c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(e){var f=this[0],h;if(!f)return null;if(e!==B)return this.each(function(){if(h=fa(this))h.scrollTo(!a?e:c(h).scrollLeft(),a?e:c(h).scrollTop());else this[d]=e});else return(h=fa(f))?"pageXOffset"in h?h[a?"pageYOffset":"pageXOffset"]:c.support.boxModel&&h.document.documentElement[d]||h.document.body[d]:f[d]}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();
c.fn["inner"+b]=function(){return this[0]?parseFloat(c.css(this[0],d,"padding")):null};c.fn["outer"+b]=function(e){return this[0]?parseFloat(c.css(this[0],d,e?"margin":"border")):null};c.fn[d]=function(e){var f=this[0];if(!f)return e==null?null:this;if(c.isFunction(e))return this.each(function(l){var k=c(this);k[d](e.call(this,l,k[d]()))});if(c.isWindow(f))return f.document.compatMode==="CSS1Compat"&&f.document.documentElement["client"+b]||f.document.body["client"+b];else if(f.nodeType===9)return Math.max(f.documentElement["client"+
b],f.body["scroll"+b],f.documentElement["scroll"+b],f.body["offset"+b],f.documentElement["offset"+b]);else if(e===B){f=c.css(f,d);var h=parseFloat(f);return c.isNaN(h)?f:h}else return this.css(d,typeof e==="string"?e:e+"px")}})})(window);

/* extras AM */

	jQuery(document).ready(function() {
                jQuery(".businessProfile").each( function(){

                    if(jQuery(this).children(":first").attr("for") == "Passenger Information" ){
                    jQuery(this).children().each( function (){
                        if(jQuery.trim(jQuery(this).attr("for")) == "Passenger Information" ){
                            jQuery(this).addClass("leftField");
                            jQuery("input",this).css("margin-left","0px");
                            var pInfo = jQuery.trim(jQuery(this).html());
                            pInfo = pInfo.replace("Passenger Information:","<span class=\"paxp_FFNumID\">Passenger Information:</span>");
                            jQuery(this).html(pInfo);
                        }
                        if(jQuery.trim(jQuery(this).attr("for")) == "State" ){
                            jQuery(this).addClass("leftField");
                        }
                        if(jQuery.trim(jQuery(this).attr("for")) == "frequentflyernumber" ){
                            var contenido = jQuery.trim(jQuery(this).children(":first").html());
                            jQuery(this).before("<div class=\"twoFields leftField paxp_FF\">" + contenido + "</div>");
                            jQuery(this).remove();
                        }
                    });
                    }
                });

		var idiomaAM = jQuery("#Language option:selected").attr('value');
		var caso_especial = false;

		if(idiomaAM == undefined){
			var idiomaAM = jQuery("#language option:selected").attr('value');
		}

                var idiomaType =  idiomaAM == 'en' ? 'en' : 'es' ;
                var select_from;
                var select_to;
                var es_us = jQuery("#footer_menu a").first().attr("href").split("/")[3] === "es-us";

                 if(jQuery('.depCity:first').length > 0){
                   select_from = jQuery('.depCity:first option:selected').val();
                   select_to = jQuery('.depCity:last option:selected').val();
                 } else {
                    var cities_text = $(".segDetails:first").text();
                    var inicia = cities_text.indexOf("(",0);
                    var termina = cities_text.lastIndexOf(")",cities_text.length);
                    select_from = cities_text.substring(inicia+1,inicia+4);
                    select_to = cities_text.substring(termina-3,termina);
                 }


                    var destino_norte_america = (select_to == 'ATL') ||
                                               (select_to == 'BRO') ||
                                               (select_to == 'DEN') ||
                                               (select_to == 'FAT') ||
                                               (select_to == 'IAD') ||
                                               (select_to == 'IAH') ||
                                               (select_to == 'JFK') ||
                                               (select_to == 'LAS') ||
                                               (select_to == 'LAX') ||
                                               (select_to == 'MCO') ||
                                               (select_to == 'MIA') ||
                                               (select_to == 'ONT') ||
                                               (select_to == 'ORD') ||
                                               (select_to == 'PHX') ||
                                               (select_to == 'SAT') ||
                                               (select_to == 'SEA') ||
                                               (select_to == 'SFO') ||
                                               (select_to == 'SMF') ||
                                               (select_to == 'YUL');

                   var origen_norte_america = (select_from == 'ATL') ||
                                               (select_from == 'BRO') ||
                                               (select_from == 'DEN') ||
                                               (select_from == 'FAT') ||
                                               (select_from == 'IAD') ||
                                               (select_from == 'IAH') ||
                                               (select_from == 'JFK') ||
                                               (select_from == 'LAS') ||
                                               (select_from == 'LAX') ||
                                               (select_from == 'MCO') ||
                                               (select_from == 'MIA') ||
                                               (select_from == 'ONT') ||
                                               (select_from == 'ORD') ||
                                               (select_from == 'PHX') ||
                                               (select_from == 'SAT') ||
                                               (select_from == 'SEA') ||
                                               (select_from == 'SFO') ||
                                               (select_from == 'SMF') ||
                                               (select_from == 'YUL');


                var destino_nacional =  (select_to == 'ACA') ||
					(select_to == 'AGU') ||
					(select_to == 'BJX') ||
					(select_to == 'CEN') ||
					(select_to == 'CJS') ||
					(select_to == 'CME') ||
					(select_to == 'CPE') ||
					(select_to == 'CUL') ||
					(select_to == 'CUN') ||
					(select_to == 'CUU') ||
					(select_to == 'HUX') ||
					(select_to == 'CVM') ||
					(select_to == 'CZM') ||
					(select_to == 'DGO') ||
					(select_to == 'GDL') ||
					(select_to == 'HMO') ||
					(select_to == 'LAP') ||
					(select_to == 'MAM') ||
					(select_to == 'MEX') ||
					(select_to == 'MID') ||
					(select_to == 'MLM') ||
					(select_to == 'MTT') ||
					(select_to == 'MTY') ||
					(select_to == 'MZT') ||
					(select_to == 'MXL') ||
					(select_to == 'NLD') ||
					(select_to == 'OAX') ||
					(select_to == 'PAZ') ||
					(select_to == 'PVR') ||
					(select_to == 'QRO') ||
					(select_to == 'REX') ||
					(select_to == 'SJD') ||
					(select_to == 'SLP') ||
					(select_to == 'TAM') ||
					(select_to == 'TAP') ||
					(select_to == 'TGZ') ||
					(select_to == 'TIJ') ||
          (select_to == 'TLC') ||
					(select_to == 'TRC') ||
					(select_to == 'VER') ||
					(select_to == 'VSA') ||
					(select_to == 'ZIH') ||
					(select_to == 'ZCL') ||
                                        (select_to == 'PBC') ||
                                        (select_to == 'SLW') ||
                                        (select_to == 'ZLO') ||
                                        (select_to == 'CTM');

                var origen_nacional =   (select_from == 'ACA') ||
					(select_from == 'AGU') ||
					(select_from == 'BJX') ||
					(select_from == 'CEN') ||
					(select_from == 'CJS') ||
					(select_from == 'CME') ||
					(select_from == 'CPE') ||
					(select_from == 'CUL') ||
					(select_from == 'CUN') ||
					(select_from == 'CUU') ||
					(select_from == 'HUX') ||
					(select_from == 'LMM') ||
					(select_from == 'DGO') ||
					(select_from == 'GDL') ||
					(select_from == 'HMO') ||
					(select_from == 'LAP') ||
					(select_from == 'MAM') ||
					(select_from == 'MEX') ||
					(select_from == 'MID') ||
					(select_from == 'MLM') ||
					(select_from == 'MTT') ||
					(select_from == 'MTY') ||
					(select_from == 'MZT') ||
					(select_from == 'MXL') ||
					(select_from == 'NLD') ||
					(select_from == 'OAX') ||
					(select_from == 'PAZ') ||
					(select_from == 'PVR') ||
					(select_from == 'QRO') ||
					(select_from == 'REX') ||
					(select_from == 'SJD') ||
					(select_from == 'SLP') ||
					(select_from == 'TAM') ||
					(select_from == 'TAP') ||
					(select_from == 'TGZ') ||
					(select_from == 'TIJ') ||
          (select_from == 'TLC') ||
					(select_from == 'TRC') ||
					(select_from == 'VER') ||
					(select_from == 'VSA') ||
					(select_from == 'ZIH') ||
					(select_from == 'ZCL') ||
                                        (select_from == 'PBC') ||
                                        (select_from == 'SLW') ||
                                        (select_from == 'ZLO') ||
                                        (select_from == 'CTM');

		/* imagen calendario */
			//jQuery(".calendar_icon").replaceWith('<img src="https://s3.amazonaws.com/aeromexico/icon_calendar.png" class="vertical calendar_icon">')

		/*
		$(this).css('display', 'none');
		*/
		var isSSR = jQuery('#pb5').hasClass('selected');
		if (idiomaType == 'es'){
      jQuery("#progressBar").replaceWith('<div id="steps-image" style="display:block; width:510px; height:85px; margin:0 auto 10px auto; background:url(https://s3.amazonaws.com/aeromexico/steps_sprite_mx_6.png);"></div>')
    } else {
      jQuery("#progressBar").replaceWith('<div id="steps-image" style="display:block; width:600px; height:85px; margin:0 auto 10px auto; background:url(https://s3.amazonaws.com/aeromexico/steps_sprite_us_6.png);"></div>')
    }


		/* Welcome */
			if( jQuery('#main-Page').hasClass('userHomePage') ){
				//alert('Welcome');
				jQuery('.singleLine').css('background', 'url(https://s3.amazonaws.com/aeromexico/welcome.jpg) no-repeat').css('width', '700px').css('height', '443px')
			}
		/* Paso 1 requestAir */
			if( jQuery('#main-Page').hasClass('requestAir') ){
				jQuery('#steps-image').css('background-position:0 0;')
			}
		/* Paso 2 airAvailNon */

      jQuery(".bfmTbl").css("margin-top","0");

      if( jQuery('#main-Page').hasClass('semiFlexOutbound') || jQuery('#main-Page').hasClass('semiFlexInbound') || jQuery('#main-Page').hasClass('airAvailMulti') ){
        jQuery('#steps-image').css('background-position', '0 -85px');
      }

			if( jQuery('#main-Page').hasClass('airAvailNon') ){
				jQuery("body").addClass("step-2");



				/*Begin:Error AIRCRAFTNAMES */
				jQuery(".matrix_flight_equip").each(function(a){
				    if("AIRCRAFTNAMES:788" === jQuery.trim(jQuery(this).html())) jQuery(this).html("Boeing 787");
				    if("Boeing 787-8" === jQuery.trim(jQuery(this).html())) jQuery(this).html("Boeing 787");
				});
				/*End:Error AIRCRAFTNAMES */
				jQuery('#steps-image').css('background-position', '0 -85px');

				var bodyHeight = jQuery(document).height();
				var local;

				if (idiomaType == 'es'){
					popupMessage = "<p><strong>Beneficios:</strong></p><ul><li>1 pza de 23 Kg de equipaje documentado y 10Kg de equipaje de mano en vuelos internacionales.</li><li>1 pza de 25 Kg de equipaje documentado y 10Kg de equipaje de mano en vuelos nacionales.</li><li>2a pza de equipaje con precio preferencial.</li><li>Mayor espacio entre asientos.</li></ul><div class='pci'></div>";
					if( origen_nacional  &&  destino_nacional ){
						// Mexico
                                                local = true;
                                    if(!es_us){
										jQuery('body').append(
                                                '<style>'+
                                                    '#tableInfo{position:absolute; top:10px; left:50%; margin-left:-350px; width:700px;}'+
                                                    ' .containerTableInfo{ '+
                                                    'background:url(https://s3.amazonaws.com/aeromexico/bg_modal_table.png);'+
                                                    ' width:100%; height:'+ bodyHeight +'px ; '+
                                                    'position:absolute; top:0; left:0; display:none;}</style>'+
                                                    '<div class="containerTableInfo" >'+
                                                    '<div id="tableInfo"><img src="https://s3.amazonaws.com/aeromexico/modal_cerrar.png" class="table-info-close" style="margin-left:auto; display:block; cursor:pointer; margin-bottom:10px;" />'+
                                                    '<table cellspacing="0" cellpadding="0" style="width: 700px; background:#FFFFFF; " id=""><tbody><tr><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 105px;"><div style="color: rgb(128, 128, 128); padding: 10px 4px; font-family: Arial; font-weight: bold; font-size: 10pt; line-height: 10.8pt; background-color: rgb(255, 255, 255); text-align: center; text-transform: uppercase; border-left: 1px solid rgb(211, 211, 211); border-top: 1px solid rgb(211, 211, 211);">FAMILIA<br>CLASE DE RESERVACION</div></th><td style="color: rgb(133, 125, 134); font-size: 10px; vertical-align:top;" colspan="5"><table width="100%" cellspacing="0" cellpadding="0" border="0"><tbody><tr><td style="color: rgb(133, 125, 134); font-size: 10px; background-color: rgb(6, 78, 1); min-height: 50px; width: 116px; vertical-align: middle; border-top: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211); border-left: 1px solid rgb(211, 211, 211);"><div style="color: rgb(255, 255, 255); padding: 10px 4px; font-family: Arial; text-align: center; font-weight: bold; font-size: 10pt; line-height: 10pt;">ECON&Oacute;MICA</div></td><td style="color: rgb(133, 125, 134); font-size: 10px; background-color: rgb(142, 142, 0); min-height: 50px; width: 118px; vertical-align: middle; border-top: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211); border-left: 1px solid rgb(211, 211, 211);"><div style="color: rgb(255, 255, 255); padding: 10px 4px; font-family: Arial; text-align: center; font-weight: bold; font-size: 10pt; line-height: 10pt;">ESPECIAL</div></td><td style="color: rgb(133, 125, 134); font-size: 10px; background-color: rgb(254, 163, 0); min-height: 50px; width: 118px; vertical-align: middle; border-top: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211); border-left: 1px solid rgb(211, 211, 211);"><div style="color: rgb(255, 255, 255); padding: 10px 4px; font-family: Arial; text-align: center; font-weight: bold; font-size: 10pt; line-height: 10pt;">AM PLUS</div></td><td style="color: rgb(133, 125, 134); font-size: 10px; background-color: rgb(172, 42, 0); min-height: 50px; width: 119px; vertical-align: middle; border-top: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211); border-left: 1px solid rgb(211, 211, 211);"><div style="color: rgb(255, 255, 255); padding: 10px 4px; font-family: Arial; text-align: center; font-weight: bold; font-size: 10pt; line-height: 10pt;">PREMIER</div></td><td style="color: rgb(133, 125, 134); font-size: 10px; background-color: rgb(111, 1, 54); min-height: 50px; width: 118px; vertical-align: middle; border: 1px solid rgb(211, 211, 211);"><div style="color: rgb(255, 255, 255); padding: 10px 4px; font-family: Arial; text-align: center; font-weight: bold; font-size: 10pt; line-height: 10pt;">PREMIER PLUS</div></td></tr><tr height="14.5px" bgcolor="white" align="center"><td style="color: rgb(0, 0, 0); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">E,N,R,V,W<br>&nbsp; </td><td style="color: rgb(0, 0, 0); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">K,H,L,Q,T<br>&nbsp; </td><td style="color: rgb(0, 0, 0); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Y,B,M,U<br>&nbsp; </td><td style="color: rgb(0, 0, 0); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">C,D<br>&nbsp; </td><td style="color: rgb(0, 0, 0); font-size: 10px; border-right: 1px solid rgb(211, 211, 211); border-left: 1px solid rgb(211, 211, 211);">J <br>&nbsp; </td></tr></tbody></table></td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(229, 229, 229); font-size: 10px; color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">CAMBIOS DE FECHA Y/O VUELO</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Cargo de 754 MXN.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Cargo de 453 MXN.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Sin cargo.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Cargo de 638 MXN.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255); border-right: 1px solid rgb(211, 211, 211);">Sin cargo.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(255, 255, 255); color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">REEMBOLSOS</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">E/N: Cargo de 754 MXN.<br>R/V/W: No reembolsable.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Cargo de 673 MXN.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Sin cargo.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Cargo de 638 MXN.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-right: 1px solid rgb(211, 211, 211);">Sin cargo.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(229, 229, 229); font-size: 10px; color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">REEXPEDICIONES</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Cargo de 754 MXN.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Cargo de 453 MXN.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Sin cargo.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Cargo de 638 MXN.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255); border-right: 1px solid rgb(211, 211, 211);">Sin cargo.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(255, 255, 255); color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; width: 104px; border-left: 1px solid rgb(211, 211, 211);">DESCUENTO A MENORES (de 2 A 11 años)</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Sin descuento.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">10% de descuento sobre la tarifa de adulto.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">15% de descuento sobre la tarifa de adulto.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">15% de descuento sobre la tarifa de adulto.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-right: 1px solid rgb(211, 211, 211);">15% de descuento sobre la tarifa de adulto.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(229, 229, 229); font-size: 10px; color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">OTROS DESCUENTOS</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Sin descuento.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">15% de descuento para adultos de la tercera edad.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">15% de descuento para adultos de la tercera edad.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Sin descuento.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255); border-right: 1px solid rgb(211, 211, 211);">15% de descuento para adultos de la tercera edad.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(255, 255, 255); color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">ESTANCIAS MAX/MIN</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Podr&aacute; aplicar.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">No aplica.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">No aplica.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">No aplica.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-right: 1px solid rgb(211, 211, 211);">No aplica.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(229, 229, 229); font-size: 10px; color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">ESCALAS</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">No se permiten</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Ilimitadas.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Ilimitadas.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Ilimitadas.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255); border-right: 1px solid rgb(211, 211, 211);">Ilimitadas.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(255, 255, 255); color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">ACUMULACI&Oacute;N DE KILOMETROS</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">50% bono acumulaci&oacute;n kil&oacute;metros excepto "E" que es el 100%<br></td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">125% bono acumulaci&oacute;n kil&oacute;metros.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">150% bono acumulaci&oacute;n kil&oacute;metros.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">150% bono acumulaci&oacute;n kil&oacute;metros.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-right: 1px solid rgb(211, 211, 211);">200% bono acumulaci&oacute;n kil&oacute;metros.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(229, 229, 229); font-size: 10px; color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">FRANQUICIA DE EQUIPAJE</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">1 pieza de 25kg documentada + 1 pieza de 10kg en mano.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">1 pieza de 25kg documentada + 1 pieza de 10kg en mano.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">1 pieza de 25kg documentada + 1 pieza de 10kg en mano.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">2 piezas de 30kg total documentadas + 1 pieza de 10kg en mano.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255); border-right: 1px solid rgb(211, 211, 211);">2 piezas de 30kg total documentadas + 1 pieza de 10kg en mano.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(255, 255, 255); color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; width: 104px; border-left: 1px solid rgb(211, 211, 211);">PREASIGNACI&Oacute;N DE ASIENTOS (sujeto a disponibilidad)</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">No se permite.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Permitida.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Permitida.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Permitida.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-right: 1px solid rgb(211, 211, 211);">Permitida.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(229, 229, 229); color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">RESERVACI&Oacute;N</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Podr&aacute; aplicar la compra anticipada</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Con reservaci&oacute;n previa</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Con reservaci&oacute;n previa</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Con reservaci&oacute;n previa</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255); border-right: 1px solid rgb(211, 211, 211);">Con reservaci&oacute;n previa</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(255, 255, 255); font-size: 10px; color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">BOLETAJE</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">24 Hrs. despu&eacute;s de hecha la reservaci&oacute;n.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">72 Hrs. despu&eacute;s de hecha la reservaci&oacute;n</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">7 d&iacute;as despu&eacute;s de hecha la reservaci&oacute;n.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">72 hrs. despu&eacute;s de hecha la reservaci&oacute;n.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-right: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">10 d&iacute;as despu&eacute;s de hecha la reservaci&oacute;n.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(255, 255, 255); font-size: 10px; color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; width: 104px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">AM Plus (Disponible en vuelos operados por B737-800 y B737-700, sujeto a disponibilidad. Documentaci&oacute;n en mostradores Premier.)</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">Cargo de 290MXN.<br></td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">Cargo de 290MXN.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">Sin cargos.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">No aplica.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-right: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">No aplica.</td></tr><tr><td style="color: rgb(133, 125, 134); font-size: 10px;" colspan="6"><table width="100%" height="20px" cellspacing="0" cellpadding="0" border="0"><tbody></tbody></table></td></tr></tbody></table></div></div>'
                                            );
									} else {
										jQuery('body').append(
                                                '<style>'+
                                                    '#tableInfo{position:absolute; top:10px; left:50%; margin-left:-350px; width:700px;}'+
                                                    ' .containerTableInfo{ '+
                                                    'background:url(https://s3.amazonaws.com/aeromexico/bg_modal_table.png);'+
                                                    ' width:100%; height:'+ bodyHeight +'px ; '+
                                                    'position:absolute; top:0; left:0; display:none;}</style>'+
                                                    '<div class="containerTableInfo" >'+
                                                    '<div id="tableInfo"><img src="https://s3.amazonaws.com/aeromexico/modal_cerrar.png" class="table-info-close" style="margin-left:auto; display:block; cursor:pointer; margin-bottom:10px;" />'+
                                                    '<table cellspacing="0" cellpadding="0" style="width: 700px; background:#FFFFFF; " id=""><tbody><tr><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 105px;"><div style="color: rgb(128, 128, 128); padding: 10px 4px; font-family: Arial; font-weight: bold; font-size: 10pt; line-height: 10.8pt; background-color: rgb(255, 255, 255); text-align: center; text-transform: uppercase; border-left: 1px solid rgb(211, 211, 211); border-top: 1px solid rgb(211, 211, 211);">FAMILIA<br>CLASE DE RESERVACION</div></th><td style="color: rgb(133, 125, 134); font-size: 10px; vertical-align:top;" colspan="5"><table width="100%" cellspacing="0" cellpadding="0" border="0"><tbody><tr><td style="color: rgb(133, 125, 134); font-size: 10px; background-color: rgb(6, 78, 1); min-height: 50px; width: 116px; vertical-align: middle; border-top: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211); border-left: 1px solid rgb(211, 211, 211);"><div style="color: rgb(255, 255, 255); padding: 10px 4px; font-family: Arial; text-align: center; font-weight: bold; font-size: 10pt; line-height: 10pt;">ECON&Oacute;MICA</div></td><td style="color: rgb(133, 125, 134); font-size: 10px; background-color: rgb(142, 142, 0); min-height: 50px; width: 118px; vertical-align: middle; border-top: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211); border-left: 1px solid rgb(211, 211, 211);"><div style="color: rgb(255, 255, 255); padding: 10px 4px; font-family: Arial; text-align: center; font-weight: bold; font-size: 10pt; line-height: 10pt;">ESPECIAL</div></td><td style="color: rgb(133, 125, 134); font-size: 10px; background-color: rgb(254, 163, 0); min-height: 50px; width: 118px; vertical-align: middle; border-top: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211); border-left: 1px solid rgb(211, 211, 211);"><div style="color: rgb(255, 255, 255); padding: 10px 4px; font-family: Arial; text-align: center; font-weight: bold; font-size: 10pt; line-height: 10pt;">AM PLUS</div></td><td style="color: rgb(133, 125, 134); font-size: 10px; background-color: rgb(172, 42, 0); min-height: 50px; width: 119px; vertical-align: middle; border-top: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211); border-left: 1px solid rgb(211, 211, 211);"><div style="color: rgb(255, 255, 255); padding: 10px 4px; font-family: Arial; text-align: center; font-weight: bold; font-size: 10pt; line-height: 10pt;">PREMIER</div></td><td style="color: rgb(133, 125, 134); font-size: 10px; background-color: rgb(111, 1, 54); min-height: 50px; width: 118px; vertical-align: middle; border: 1px solid rgb(211, 211, 211);"><div style="color: rgb(255, 255, 255); padding: 10px 4px; font-family: Arial; text-align: center; font-weight: bold; font-size: 10pt; line-height: 10pt;">PREMIER PLUS</div></td></tr><tr height="14.5px" bgcolor="white" align="center"><td style="color: rgb(0, 0, 0); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">E,N,R,V,W<br>&nbsp; </td><td style="color: rgb(0, 0, 0); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">K,H,L,Q,T<br>&nbsp; </td><td style="color: rgb(0, 0, 0); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Y,B,M,U<br>&nbsp; </td><td style="color: rgb(0, 0, 0); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">C,D<br>&nbsp; </td><td style="color: rgb(0, 0, 0); font-size: 10px; border-right: 1px solid rgb(211, 211, 211); border-left: 1px solid rgb(211, 211, 211);">J <br>&nbsp; </td></tr></tbody></table></td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(229, 229, 229); font-size: 10px; color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">CAMBIOS DE FECHA Y/O VUELO</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Cargo de 754 MXN.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Cargo de 453 MXN.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Sin cargo.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Cargo de 638 MXN.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255); border-right: 1px solid rgb(211, 211, 211);">Sin cargo.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(255, 255, 255); color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">REEMBOLSOS</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">E/N: Cargo de 754 MXN.<br>R/V/W: No reembolsable.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Cargo de 673 MXN.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Sin cargo.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Cargo de 638 MXN.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-right: 1px solid rgb(211, 211, 211);">Sin cargo.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(229, 229, 229); font-size: 10px; color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">REEXPEDICIONES</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Cargo de 754 MXN.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Cargo de 453 MXN.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Sin cargo.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Cargo de 638 MXN.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255); border-right: 1px solid rgb(211, 211, 211);">Sin cargo.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(255, 255, 255); color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; width: 104px; border-left: 1px solid rgb(211, 211, 211);">DESCUENTO A MENORES (de 2 A 11 años)</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Sin descuento.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">10% de descuento sobre la tarifa de adulto.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">15% de descuento sobre la tarifa de adulto.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">15% de descuento sobre la tarifa de adulto.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-right: 1px solid rgb(211, 211, 211);">15% de descuento sobre la tarifa de adulto.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(229, 229, 229); font-size: 10px; color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">OTROS DESCUENTOS</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Sin descuento.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">15% de descuento para adultos de la tercera edad.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">15% de descuento para adultos de la tercera edad.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Sin descuento.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255); border-right: 1px solid rgb(211, 211, 211);">15% de descuento para adultos de la tercera edad.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(255, 255, 255); color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">ESTANCIAS MAX/MIN</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Podr&aacute; aplicar.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">No aplica.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">No aplica.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">No aplica.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-right: 1px solid rgb(211, 211, 211);">No aplica.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(229, 229, 229); font-size: 10px; color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">ESCALAS</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">No se permiten</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Ilimitadas.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Ilimitadas.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Ilimitadas.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255); border-right: 1px solid rgb(211, 211, 211);">Ilimitadas.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(255, 255, 255); color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">ACUMULACI&Oacute;N DE KILOMETROS</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">50% bono acumulaci&oacute;n kil&oacute;metros excepto "E" que es el 100%<br></td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">125% bono acumulaci&oacute;n kil&oacute;metros.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">150% bono acumulaci&oacute;n kil&oacute;metros.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">150% bono acumulaci&oacute;n kil&oacute;metros.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-right: 1px solid rgb(211, 211, 211);">200% bono acumulaci&oacute;n kil&oacute;metros.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(229, 229, 229); font-size: 10px; color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">FRANQUICIA DE EQUIPAJE</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">1 pieza de 25kg documentada + 1 pieza de 10kg en mano.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">1 pieza de 25kg documentada + 1 pieza de 10kg en mano.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">1 pieza de 25kg documentada + 1 pieza de 10kg en mano.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">2 piezas de 30kg total documentadas + 1 pieza de 10kg en mano.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255); border-right: 1px solid rgb(211, 211, 211);">2 piezas de 30kg total documentadas + 1 pieza de 10kg en mano.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(255, 255, 255); color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; width: 104px; border-left: 1px solid rgb(211, 211, 211);">PREASIGNACI&Oacute;N DE ASIENTOS (sujeto a disponibilidad)</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">No se permite.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Permitida.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Permitida.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Permitida.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-right: 1px solid rgb(211, 211, 211);">Permitida.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(229, 229, 229); color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">RESERVACI&Oacute;N</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Podr&aacute; aplicar la compra anticipada</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Con reservaci&oacute;n previa</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Con reservaci&oacute;n previa</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Con reservaci&oacute;n previa</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255); border-right: 1px solid rgb(211, 211, 211);">Con reservaci&oacute;n previa</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(255, 255, 255); font-size: 10px; color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">BOLETAJE</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">24 Hrs. despu&eacute;s de hecha la reservaci&oacute;n.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">72 Hrs. despu&eacute;s de hecha la reservaci&oacute;n</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">7 d&iacute;as despu&eacute;s de hecha la reservaci&oacute;n.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">72 hrs. despu&eacute;s de hecha la reservaci&oacute;n.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-right: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">10 d&iacute;as despu&eacute;s de hecha la reservaci&oacute;n.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(255, 255, 255); font-size: 10px; color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; width: 104px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">AM Plus (Disponible en vuelos operados por B737-800 y B737-700, sujeto a disponibilidad. Documentaci&oacute;n en mostradores Premier.)</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">Cargo de 290MXN.<br></td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">Cargo de 290MXN.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">Sin cargos.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">No aplica.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-right: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">No aplica.</td></tr><tr><td style="color: rgb(133, 125, 134); font-size: 10px;" colspan="6"><table width="100%" height="20px" cellspacing="0" cellpadding="0" border="0"><tbody></tbody></table></td></tr></tbody></table></div></div>'
                                            );
									}
					} else {
                                            //Internacional
                                            local = false;
                                        if(!es_us){
											jQuery('body').append(
                                                '<style>'+
                                                    '#tableInfo{'+
                                                    'position:absolute; top:10px; left:50%; margin-left:-350px; width:700px;}'+
                                                    ' .containerTableInfo{ '+
                                                    'background:url(https://s3.amazonaws.com/aeromexico/bg_modal_table.png); '+
                                                    'width:100%; height:'+ bodyHeight +'px ; '+
                                                    'position:absolute; top:0; left:0; display:none;}'+
                                                    '</style>'+
                                                    '<div class="containerTableInfo" ><div id="tableInfo">'+
                                                    '<img src="https://s3.amazonaws.com/aeromexico/modal_cerrar.png" class="table-info-close" style="margin-left:auto; display:block; cursor:pointer; margin-bottom:10px;" />'+
                                                    '<table cellspacing="0" cellpadding="0" style="width: 700px; background:#FFFFFF; " id=""><tbody><tr><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 105px;"><div style="color: rgb(128, 128, 128); padding: 10px 4px; font-family: Arial; font-weight: bold; font-size: 10pt; line-height: 10.8pt; background-color: rgb(255, 255, 255); text-align: center; text-transform: uppercase; border-left: 1px solid rgb(211, 211, 211); border-top: 1px solid rgb(211, 211, 211);">FAMILIA<br>CLASE DE RESERVACION</div></th><td style="color: rgb(133, 125, 134); font-size: 10px; vertical-align:top;" colspan="5"><table width="100%" cellspacing="0" cellpadding="0" border="0"><tbody><tr><td style="color: rgb(133, 125, 134); font-size: 10px; background-color: rgb(6, 78, 1); min-height: 50px; width: 116px; vertical-align: middle; border-top: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211); border-left: 1px solid rgb(211, 211, 211);"><div style="color: rgb(255, 255, 255); padding: 10px 4px; font-family: Arial; text-align: center; font-weight: bold; font-size: 10pt; line-height: 10pt;">ECON&Oacute;MICA</div></td><td style="color: rgb(133, 125, 134); font-size: 10px; background-color: rgb(142, 142, 0); min-height: 50px; width: 118px; vertical-align: middle; border-top: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211); border-left: 1px solid rgb(211, 211, 211);"><div style="color: rgb(255, 255, 255); padding: 10px 4px; font-family: Arial; text-align: center; font-weight: bold; font-size: 10pt; line-height: 10pt;">ESPECIAL</div></td><td style="color: rgb(133, 125, 134); font-size: 10px; background-color: rgb(254, 163, 0); min-height: 50px; width: 118px; vertical-align: middle; border-top: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211); border-left: 1px solid rgb(211, 211, 211);"><div style="color: rgb(255, 255, 255); padding: 10px 4px; font-family: Arial; text-align: center; font-weight: bold; font-size: 10pt; line-height: 10pt;">AM PLUS</div></td><td style="color: rgb(133, 125, 134); font-size: 10px; background-color: rgb(172, 42, 0); min-height: 50px; width: 119px; vertical-align: middle; border-top: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211); border-left: 1px solid rgb(211, 211, 211);"><div style="color: rgb(255, 255, 255); padding: 10px 4px; font-family: Arial; text-align: center; font-weight: bold; font-size: 10pt; line-height: 10pt;">PREMIER</div></td><td style="color: rgb(133, 125, 134); font-size: 10px; background-color: rgb(111, 1, 54); min-height: 50px; width: 118px; vertical-align: middle; border: 1px solid rgb(211, 211, 211);"><div style="color: rgb(255, 255, 255); padding: 10px 4px; font-family: Arial; text-align: center; font-weight: bold; font-size: 10pt; line-height: 10pt;">PREMIER PLUS</div></td></tr><tr height="14.5px" bgcolor="white" align="center"><td style="color: rgb(0, 0, 0); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">E,N,R,V,W<br>&nbsp; </td><td style="color: rgb(0, 0, 0); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">K,H,L,Q,T<br>&nbsp; </td><td style="color: rgb(0, 0, 0); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Y,B,M,U<br>&nbsp; </td><td style="color: rgb(0, 0, 0); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">C,D,I*<br>&nbsp; </td><td style="color: rgb(0, 0, 0); font-size: 10px; border-right: 1px solid rgb(211, 211, 211); border-left: 1px solid rgb(211, 211, 211);">J <br>&nbsp; </td></tr></tbody></table></td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(229, 229, 229); font-size: 10px; color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">CAMBIOS DE FECHA Y/O VUELO</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Cargo de 232 USD.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Cargo de 174 USD.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Sin cargos.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Cargo de 174 USD.<br><br>ASIA cargo de 232 USD.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255); border-right: 1px solid rgb(211, 211, 211);">Sin cargos.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(255, 255, 255); color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">REEMBOLSOS</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Cargo de 232 USD.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Cargo de 174 USD.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Sin cargos.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Cargo de 174 USD.<br><br>ASIA cargo de 232 USD.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-right: 1px solid rgb(211, 211, 211);">Sin cargos.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(229, 229, 229); font-size: 10px; color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">REEXPEDICIONES</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Cargo de 232 USD.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Cargo de 174 USD.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Sin cargos.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Cargo de 174 USD.<br><br>ASIA cargo de 232 USD.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255); border-right: 1px solid rgb(211, 211, 211);">Sin cargos.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(255, 255, 255); color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; width: 104px; border-left: 1px solid rgb(211, 211, 211);">DESCUENTO A MENORES (de 2 a 11 años)</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">EE.UU. No aplican descuentos.<br><br>EUROPA y ASIA 25% de descuento sobre tarifas R y V de adulto.<br><br>CENTRO y SUDAMERICA 33% de descuento sobre la tarifa R y V de adulto.<br><br>(No aplica descuento para las tarifas E y N en ning&uacute;n mercado).</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">EE.UU. No aplican descuentos.<br><br>EUROPA y ASIA 25% de descuento sobre la tarifa de adulto.<br><br>CENTRO y SUDAMERICA 33% de descuento sobre la tarifa de adulto.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">EE.UU. No aplican descuentos.<br><br>EUROPA, y ASIA 30% de descuento sobre la tarifa de adulto.<br><br>CENTRO y SUDAMERICA 35% de descuento sobre la tarifa de adulto.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">EE.UU. No aplican descuentos.<br><br>EUROPA y ASIA 25% de descuento sobre la tarifa de adulto.<br><br>CENTRO y SUDAMERICA 33% de descuento sobre la tarifa de adulto.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-right: 1px solid rgb(211, 211, 211);">EE.UU. No aplican descuentos.<br><br>EUROPA, y ASIA 30% de descuento sobre la tarifa de adulto.<br><br>CENTRO y SUDAMERICA 35% de descuento sobre la tarifa de adulto.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(229, 229, 229); font-size: 10px; color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">OTROS DESCUENTOS</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Sin descuento.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">15% de descuento para adultos de la tercera edad.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">15% de descuento para adultos de la tercera edad.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Sin descuento</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255); border-right: 1px solid rgb(211, 211, 211);">15% de descuento para adultos de la tercera edad.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(255, 255, 255); color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">ESTANCIA MIN/MAX</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Siempre aplica.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Podr&aacute; aplicar.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Podr&aacute; aplicar.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Podr&aacute; aplicar.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-right: 1px solid rgb(211, 211, 211);">No aplica.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(229, 229, 229); font-size: 10px; color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">ESCALAS</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">No se permiten.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Se permiten con un cargo de 58 USD por escala.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Ilimitadas.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Clase A: se permiten con un cargo de 58 USD por escala.<br><br>Clase D: no se permiten.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255); border-right: 1px solid rgb(211, 211, 211);">Ilimitadas.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(255, 255, 255); color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">ACUMULACI&Oacute;N DE KIL&Oacute;METROS</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">50% bono acumulaci&oacute;n kil&oacute;metros excepto "E" que es el 100%.<br></td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">125% bono acumulaci&oacute;n kil&oacute;metros.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">150% bono acumulaci&oacute;n kil&oacute;metros.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">150% bono acumulaci&oacute;n kil&oacute;metros.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-right: 1px solid rgb(211, 211, 211);">200% bono acumulaci&oacute;n kil&oacute;metros.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(229, 229, 229); font-size: 10px; color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">FRANQUICIA DE EQUIPAJE</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">EE.UU.: 1 pieza de 23 kg.<br>SUDAM&Eacute;RICA y ASIA: 2 piezas de 32 kg total (ex LIMA).<br>EUROPA, LIMA y CENTROAM&Eacute;RICA: 2 piezas de 23 kg total.  </td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">EE.UU.: 1 pieza de 23 kg.<br>SUDAM&Eacute;RICA y ASIA: 2 piezas de 32 kg total (ex LIMA).<br>EUROPA, LIMA y CENTROAM&Eacute;RICA: 2 piezas de 23 kg total.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">EE.UU.: 2 piezas de 23 kg.<br>SUDAM&Eacute;RICA y ASIA: 3 piezas de 32 kg total (ex LIMA).<br>EUROPA, LIMA y CENTROAM&Eacute;RICA: 3 piezas de 23 kg total.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">EE.UU., EUROPA y CENTROAM&Eacute;RICA: 2 piezas de 32 kg total.<br>SUDAM&Eacute;RICA y ASIA: 3 piezas de 32 kg total.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255); border-right: 1px solid rgb(211, 211, 211);">EE.UU., EUROPA y CENTROAM&Eacute;RICA: 2 piezas de 32 kg total.<br>SUDAM&Eacute;RICA y ASIA: 3 piezas de 32 kg total.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(255, 255, 255); color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">RESERVACI&Oacute;N</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Podr&aacute; aplicar la compra anticipada.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Podr&aacute; aplicar la compra anticipada.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Con reservaci&oacute;n previa.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Con reservaci&oacute;n previa.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255); border-right: 1px solid rgb(211, 211, 211);">Con reservaci&oacute;n previa.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(229, 229, 229); font-size: 10px; color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">BOLETAJE</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">24 horas despu&eacute;s de haber realizado la reservaci&oacute;n.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">Asia / Europa: Con base en el tiempo limite, o bien 72 horas despu&eacute;s de haber realizado la reservaci&oacute;n.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">Asia / Europa: Con base en el tiempo limite, Sudam&eacute;rica: 10 d&iacute;as de haber realizado la reservaci&oacute;n, o bien 7 d&iacute;as despu&eacute;s.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">Asia / Europa: Con base en el tiempo limite, o bien 72 horas despu&eacute;s de haber realizado la reservaci&oacute;n.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-right: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">Asia / Europa: Con base en el tiempo limite, o bien 10 d&iacute;as despu&eacute;s de haber realizado la reservaci&oacute;n.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(255, 255, 255); font-size: 10px; color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; width: 104px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">AM Plus (Disponible en vuelos operados por B737-800 y B737-700, sujeto a disponibilidad. Documentaci&oacute;n en mostradores Premier.)</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">Cargo de 46USD.<br></td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">Cargo de 46USD.<br></td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">Sin cargos.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">No aplica.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-right: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">No aplica.</td></tr><tr><td style="color: rgb(133, 125, 134); font-size: 10px;" colspan="6"><table width="100%" height="20px" cellspacing="0" cellpadding="0" border="0"><tbody><tr><td style="color: rgb(0, 0, 0); font-size: 11px; vertical-align: middle;"><i>*S&oacute;lo aplica para Sudam&eacute;rica, Asia y Europa.</i></td></tr></tbody></table></td></tr></tbody></table>' +
                                                    '</div></div>');
										} else{
											jQuery('body').append(
                                                '<style>'+
                                                    '#tableInfo{'+
                                                    'position:absolute; top:10px; left:50%; margin-left:-350px; width:700px;}'+
                                                    ' .containerTableInfo{ '+
                                                    'background:url(https://s3.amazonaws.com/aeromexico/bg_modal_table.png); '+
                                                    'width:100%; height:'+ bodyHeight +'px ; '+
                                                    'position:absolute; top:0; left:0; display:none;}'+
                                                    '</style>'+
                                                    '<div class="containerTableInfo" ><div id="tableInfo">'+
                                                    '<img src="https://s3.amazonaws.com/aeromexico/modal_cerrar.png" class="table-info-close" style="margin-left:auto; display:block; cursor:pointer; margin-bottom:10px;" />'+
                                                    '<table cellspacing="0" cellpadding="0" style="width: 700px; background:#FFFFFF; " id=""><tbody><tr><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 105px;"><div style="color: rgb(128, 128, 128); padding: 10px 4px; font-family: Arial; font-weight: bold; font-size: 10pt; line-height: 10.8pt; background-color: rgb(255, 255, 255); text-align: center; text-transform: uppercase; border-left: 1px solid rgb(211, 211, 211); border-top: 1px solid rgb(211, 211, 211);">FAMILIA<br>CLASE DE RESERVACION</div></th><td colspan="5" style="color: rgb(133, 125, 134); font-size: 10px; vertical-align:top;"><table width="100%" cellspacing="0" cellpadding="0" border="0"><tbody><tr><td style="color: rgb(133, 125, 134); font-size: 10px; background-color: rgb(6, 78, 1); min-height: 50px; width: 116px; vertical-align: middle; border-top: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211); border-left: 1px solid rgb(211, 211, 211);"><div style="color: rgb(255, 255, 255); padding: 10px 4px; font-family: Arial; text-align: center; font-weight: bold; font-size: 10pt; line-height: 10pt;">ECON&Oacute;MICA</div></td><td style="color: rgb(133, 125, 134); font-size: 10px; background-color: rgb(142, 142, 0); min-height: 50px; width: 118px; vertical-align: middle; border-top: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211); border-left: 1px solid rgb(211, 211, 211);"><div style="color: rgb(255, 255, 255); padding: 10px 4px; font-family: Arial; text-align: center; font-weight: bold; font-size: 10pt; line-height: 10pt;">ESPECIAL</div></td><td style="color: rgb(133, 125, 134); font-size: 10px; background-color: rgb(254, 163, 0); min-height: 50px; width: 118px; vertical-align: middle; border-top: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211); border-left: 1px solid rgb(211, 211, 211);"><div style="color: rgb(255, 255, 255); padding: 10px 4px; font-family: Arial; text-align: center; font-weight: bold; font-size: 10pt; line-height: 10pt;">AM PLUS</div></td><td style="color: rgb(133, 125, 134); font-size: 10px; background-color: rgb(172, 42, 0); min-height: 50px; width: 119px; vertical-align: middle; border-top: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211); border-left: 1px solid rgb(211, 211, 211);"><div style="color: rgb(255, 255, 255); padding: 10px 4px; font-family: Arial; text-align: center; font-weight: bold; font-size: 10pt; line-height: 10pt;">PREMIER</div></td><td style="color: rgb(133, 125, 134); font-size: 10px; background-color: rgb(111, 1, 54); min-height: 50px; width: 118px; vertical-align: middle; border: 1px solid rgb(211, 211, 211);"><div style="color: rgb(255, 255, 255); padding: 10px 4px; font-family: Arial; text-align: center; font-weight: bold; font-size: 10pt; line-height: 10pt;">PREMIER PLUS</div></td></tr><tr height="14.5px" bgcolor="white" align="center"><td style="color: rgb(0, 0, 0); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">E,N,R,V,W<br>&nbsp; </td><td style="color: rgb(0, 0, 0); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">K,H,L,Q,T<br>&nbsp; </td><td style="color: rgb(0, 0, 0); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Y,B,M,U<br>&nbsp; </td><td style="color: rgb(0, 0, 0); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">C,D,I*<br>&nbsp; </td><td style="color: rgb(0, 0, 0); font-size: 10px; border-right: 1px solid rgb(211, 211, 211); border-left: 1px solid rgb(211, 211, 211);">J <br>&nbsp; </td></tr></tbody></table></td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(229, 229, 229); font-size: 10px; color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">CAMBIOS DE FECHA Y/O VUELO</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Cargo de 200 USD.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Cargo de 150 USD.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Sin cargos.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Cargo de 150 USD.<br><br>ASIA cargo de 200 USD.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255); border-right: 1px solid rgb(211, 211, 211);">Sin cargos.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(255, 255, 255); color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">REEMBOLSOS</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Cargo de 200 USD.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Cargo de 150 USD.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Sin cargos.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Cargo de 150 USD.<br><br>ASIA cargo de 200 USD.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-right: 1px solid rgb(211, 211, 211);">Sin cargos.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(229, 229, 229); font-size: 10px; color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">REEXPEDICIONES</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Cargo de 200 USD.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Cargo de 150 USD.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Sin cargos.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Cargo de 150 USD.<br><br>ASIA cargo de 200 USD.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255); border-right: 1px solid rgb(211, 211, 211);">Sin cargos.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(255, 255, 255); color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; width: 104px; border-left: 1px solid rgb(211, 211, 211);">DESCUENTO A MENORES (de 2 a 11 años)</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">EE.UU. no aplican descuentos.<br>EUROPA y ASIA 25% de descuento sobre tarifas R y V de adulto.<br>CENTRO y SUDAM&Eacute;RCIA 33% de descuento sobre la tarifa R y V de adulto.<br>(No aplica descuento para las tarifas E y N en ning&uacute;n mercado)<br></td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">EE.UU. No aplican descuentos.<br><br>EUROPA y ASIA 25% de descuento sobre la tarifa de adulto.<br><br>CENTRO y SUDAMERICA 33% de descuento sobre la tarifa de adulto.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">EE.UU. No aplican descuentos.<br><br>EUROPA, y ASIA 30% de descuento sobre la tarifa de adulto.<br><br>CENTRO y SUDAMERICA 35% de descuento sobre la tarifa de adulto.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">EE.UU. No aplican descuentos.<br><br>EUROPA y ASIA 25% de descuento sobre la tarifa de adulto.<br><br>CENTRO y SUDAMERICA 33% de descuento sobre la tarifa de adulto.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-right: 1px solid rgb(211, 211, 211);">EE.UU. No aplican descuentos.<br><br>EUROPA, y ASIA 30% de descuento sobre la tarifa de adulto.<br><br>CENTRO y SUDAMERICA 35% de descuento sobre la tarifa de adulto.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(229, 229, 229); color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; width: 104px; border-left: 1px solid rgb(211, 211, 211);">TARIFA/DESCUENTOS A INFANTES (MENORES DE 2 AÑOS DE EDAD)</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Sin asiento: EE.UU. Cargo de 30 USD viaje sencillo.<br>CENTRO, SUDAMERICA, EUROPA y ASIA 10% de descuento sobre la tarifa de adulto.<br>Si el infante necesita asiento aplica la condici&oacute;n de DESCUENTO A MENORES.<br></td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Sin asiento: EE.UU. cargo de 30 USD viaje sencillo. CENTRO, SUDAM&Eacute;RICA, EUROPA y ASIA 10% de descuento sobre la tarifa de adulto.<br>Si el infante necesita asiento  aplica la a condici&oacute;n de DESCUENTO A MENORES.<br></td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Sin asiento: no aplican cargos.<br>Si el infante necesita asiento aplica la condici&oacute;n de DESCUENTO A MENORES.<br></td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Sin asiento: EE.UU. cargo de 30 USD viaje sencillo. CENTRO, SUDAM&Eacute;RICA, EUROPA y ASIA 10% de descuento sobre la tarifa de adulto.<br>Si el infante necesita asiento  aplica la a condici&oacute;n de DESCUENTO A MENORES.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-right: 1px solid rgb(211, 211, 211);">Sin asiento: no aplican cargos.<br>Si el infante necesita asiento aplica la condici&oacute;n de DESCUENTO A MENORES.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(255, 255, 255); font-size: 10px; color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">OTROS DESCUENTOS</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Sin descuento.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">15% de descuento para adultos de la tercera edad.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">15% de descuento para adultos de la tercera edad.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Sin descuento</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255); border-right: 1px solid rgb(211, 211, 211);">15% de descuento para adultos de la tercera edad.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(229, 229, 229); color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">ESTANCIA MIN/MAX</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Siempre aplica.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Podr&aacute; aplicar.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Podr&aacute; aplicar.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">Podr&aacute; aplicar.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-right: 1px solid rgb(211, 211, 211);">No aplica.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(255, 255, 255); font-size: 10px; color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">ESCALAS</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">No se permiten.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Se permiten con un cargo de 50 USD por escala.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Ilimitadas.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Clase A: se permiten con un cargo de 50 USD por escala.<br><br>Clase D/I: no se permiten.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255); border-right: 1px solid rgb(211, 211, 211);">Ilimitadas.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(229, 229, 229); color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">ACUMULACI&Oacute;N DE KIL&Oacute;METROS</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">50% bono acumulaci&oacute;n kil&oacute;metros excepto E que es el 100%.<br></td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">125% bono acumulaci&oacute;n kil&oacute;metros.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">150% bono acumulaci&oacute;n kil&oacute;metros.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211);">150% bono acumulaci&oacute;n kil&oacute;metros.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-right: 1px solid rgb(211, 211, 211);">200% bono acumulaci&oacute;n kil&oacute;metros.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(255, 255, 255); font-size: 10px; color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">FRANQUICIA DE EQUIPAJE</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">EE.UU.: 1 pieza de 23 kg.<br>SUDAM&Eacute;RICA y ASIA: 2 piezas de 32 kg total (ex LIMA).<br>EUROPA, LIMA y CENTROAM&Eacute;RICA: 2 piezas de 23 kg total.<br></td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">EE.UU.: 1 pieza de 23 kg.<br>SUDAM&Eacute;RICA y ASIA: 2 piezas  de 32 kg total (ex LIMA).<br>EUROPA, LIMA y CENTROAM&Eacute;RICA: 2 piezas de 23 kg total.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">EE.UU. : 2 piezas de 23kg total.<br>SUDAM&Eacute;RICA y ASIA: 3 piezas de 32 kg total (ex LIMA).<br>EUROPA: 2 piezas de 32 kg total.<br>LIMA y CENTROAM&Eacute;RICA: 3 piezas de 23 kg total.<br></td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">EE.UU., EUROPA y CENTROAM&Eacute;RICA: 2 piezas de 32 kg total.<br>SUDAM&Eacute;RICA y ASIA: 3 piezas de 32 kg total.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255); border-right: 1px solid rgb(211, 211, 211);">EE.UU., EUROPA y CENTROAM&Eacute;RICA: 2 piezas de 32 kg total.<br>SUDAM&Eacute;RICA y ASIA: 3 piezas de 32 kg total.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(229, 229, 229); color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211);">RESERVACI&Oacute;N</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Podr&aacute; aplicar la compra anticipada.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Podr&aacute; aplicar la compra anticipada.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Con reservaci&oacute;n previa.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255);">Con reservaci&oacute;n previa.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(255, 255, 255); border-right: 1px solid rgb(211, 211, 211);">Con reservaci&oacute;n previa.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(255, 255, 255); font-size: 10px; color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; width: 104px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">BOLETAJE</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">24 horas despu&eacute;s de haber realizado la reservaci&oacute;n.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">Asia / Europa: Con base en el tiempo limite, o bien 72 horas despu&eacute;s de haber realizado la reservaci&oacute;n.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">Asia / Europa: Con base en el tiempo limite, Sudam&eacute;rica: 10 d&iacute;as de haber realizado la reservaci&oacute;n, o bien 7 d&iacute;as despu&eacute;s.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">Asia / Europa: Con base en el tiempo limite, o bien 72 horas despu&eacute;s de haber realizado la reservaci&oacute;n.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-right: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">Asia / Europa: Con base en el tiempo limite, o bien 10 d&iacute;as despu&eacute;s de haber realizado la reservaci&oacute;n.</td></tr><tr align="center" style="text-align: center; min-height: 25px; background-color: rgb(229, 229, 229); font-size: 10px; color: rgb(133, 125, 134);"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; width: 104px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">AM Plus (Disponible en vuelos operados por B737-800 y B737-700, sujeto a disponibilidad. Documentaci&oacute;n en mostradores Premier.)</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">Cargo de 40 USD.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">Cargo de 40 USD<br></td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">Sin cargos.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">No aplica.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-right: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">No aplica.</td></tr><tr><td colspan="6" style="color: rgb(133, 125, 134); font-size: 10px;"><table width="100%" height="20px" cellspacing="0" cellpadding="0" border="0"><tbody><tr><td style="color: rgb(0, 0, 0); font-size: 11px; vertical-align: middle;"><i>*S&oacute;lo aplica para Sudam&eacute;rica, Asia y Europa</i></td></tr></tbody></table></td></tr></tbody></table>' +
                                                    '</div></div>');
										}
					}
				} else {
					//English
					popupMessage = "<p><strong>Benefits:</strong></p><ul><li>One 23kg checked luggage piece and one 10kg carry-on bag on international flights.</li><li>One 25kg checked luggage piece and one 10kg carry-on bag on domestic flights.</li><li>A second piece of luggage with a special price.</li><li>Bigger space between seats.</li></ul><div class='pci'></div>";
					if( ( origen_nacional ) && ( destino_nacional ) ){
						// Mexico
                                                local = true;
						jQuery('body').append(
                                                '<style>'+
                                                    '#tableInfo{position:absolute; top:10px; left:50%; margin-left:-350px; width:700px;}'+
                                                    ' .containerTableInfo{ background:url(https://s3.amazonaws.com/aeromexico/bg_modal_table.png);'+
                                                    ' width:100%; height:'+ bodyHeight +'px ;'+
                                                    ' position:absolute; top:0; left:0; display:none;}'+
                                                    '</style><div class="containerTableInfo" >'+
                                                    '<div id="tableInfo">'+
                                                    '<img src="https://s3.amazonaws.com/aeromexico/modal_cerrar.png" class="table-info-close" style="margin-left:auto; display:block; cursor:pointer; margin-bottom:10px;" />'+
                                                    '<style>'+
                                                    'table.fareFamilySummary { width: 100%; margin:auto; background:#FFFFFF;} '+
                                                    'table.fareFamilySummary th { '+
                                                    'font-weight: bold; '+
                                                    'font-size: 11px; '+
                                                    'color: #808080; '+
                                                    'text-align: center; '+
                                                    'text-transform: uppercase; '+
                                                    'width: 15%} '+
                                                    'tr.fareFamilySummaryHeader '+
                                                    'td.BargainHeader {'+
                                                    'background-color: #064E01;'+
                                                    '   height: 50px;  '+
                                                    'width: 19.8%;}'+
                                                    'tr.fareFamilySummaryHeader '+
                                                    'td.SpecialHeader {   '+
                                                    'background-color: #8E8E00;   '+
                                                    'height: 50px;  width: 20%;} '+
                                                    'tr.fareFamilySummaryHeader '+
                                                    'td.AMPlusHeader {   '+
                                                    'background-color: #FEA300;   '+
                                                    'height: 50px;  width: 20%;}'+
                                                    'tr.fareFamilySummaryHeader '+
                                                    'td.PremierHeader {   background-color: #AC2A00;  '+
                                                    ' height: 50px;  '+
                                                    'width: 20%;}'+
                                                    'tr.fareFamilySummaryHeader '+
                                                    'td.PremierPlusHeader {   background-color: #6F0136;   '+
                                                    'height: 50px;  width: 20%;}'+
                                                    'tr.fareFamilySummaryHeader td.productHeader {  '+
                                                    'vertical-align: middle;  '+
                                                    'border-top: 1px solid #D3D3D3;  '+
                                                    'border-bottom: 1px solid;  '+
                                                    'border-bottom-color: #D3D3D3;  '+
                                                    'border-left: 1px solid;  '+
                                                    'border-left-color: #D3D3D3;}'+
                                                    'tr.fareFamilySummaryHeader td div {  font-family: Arial;  '+
                                                    'text-align: center;   '+
                                                    'font-weight: bold;   '+
                                                    'font-size: 10pt;   '+
                                                    'line-height: 10pt;  '+
                                                    'color: #FFFFFF}'+
                                                    'table.fareFamilySummary th div {  font-family: Arial;   '+
                                                    'font-weight: bold;   '+
                                                    'font-size: 10pt;   '+
                                                    'line-height: 10.8pt;  }'+
                                                    'table.fareFamilySummary tr td{	color: #857D86;		'+
                                                    'font-size: 10px;}'+
                                                    'table.fareFamilySummary tr.rowFeature0 { 	text-align: center;	'+
                                                    'height: 25px;	'+
                                                    'background-color: #FFFFFF;	'+
                                                    'color: #857D86;}'+
                                                    'table.fareFamilySummary tr.rowFeature1 { 	text-align: center;	'+
                                                    'height: 25px;	background-color: #E5E5E5;	'+
                                                    'font-size: 10px;	'+
                                                    'color: #857D86;}'+
                                                    'table.fareFamilySummary td.leftBorder0 {	border-left: 1px solid #D3D3D3;}'+
                                                    'table.fareFamilySummary td.leftBorder1 {	border-left: 1px solid #FFFFFF;}'+
                                                    'table.fareFamilySummary td.rightBorder { 	border-right: 1px solid #D3D3D3;}'+
                                                    'table.fareFamilySummary th.leftBorder {	border-left: 1px solid #D3D3D3;}'+
                                                    'table.fareFamilySummary th.bottomBorder {	border-bottom: 1px solid #D3D3D3;}'+
                                                    'table.fareFamilySummary td.topBorder0 {	border-top: 1px solid #D3D3D3;}'+
                                                    'table.fareFamilySummary td.topBorder1 {	border-top: 1px solid #FFFFFF;}'+
                                                    'table.fareFamilySummary td.bottomBorder {	border-bottom: 1px solid #D3D3D3;}'+
                                                    '</style><table cellspacing="0" cellpadding="0" class="fareFamilySummary">	<tbody><tr><th><div style="background-color: rgb(255, 255, 255); color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; border-left: 1px solid rgb(211, 211, 211); border-top: 1px solid rgb(211, 211, 211);" id="roundedheader">FAMILY<br>RESERVATION CLASS</div></th><td colspan="5"><table width="100%" cellspacing="0" cellpadding="0" border="0"><tbody><tr class="fareFamilySummaryHeader"><td class="productHeader BargainHeader "><div>BARGAIN</div></td><td class="productHeader SpecialHeader "><div>SPECIAL</div></td><td class="productHeader AMPlusHeader "><div>AM PLUS</div></td><td class="productHeader PremierHeader "><div>PREMIER</div></td><td class="productHeader PremierPlusHeader rightBorder"><div>PREMIER PLUS</div></td></tr><tr height="14.5px" bgcolor="white" align="center"><td style="color: rgb(0, 0, 0); border-left: 1px solid rgb(211, 211, 211);" class="">E,N,R,V,W</td><td style="color: rgb(0, 0, 0); border-left: 1px solid rgb(211, 211, 211);" class="">K,H,L,Q,T</td><td style="color: rgb(0, 0, 0); border-left: 1px solid rgb(211, 211, 211);" class="">Y,B,M,U</td><td style="color: rgb(0, 0, 0); border-left: 1px solid rgb(211, 211, 211);" class="">C,D</td><td style="color: rgb(0, 0, 0); border-left: 1px solid rgb(211, 211, 211);" class="rightBorder">J</td></tr></tbody></table></td></tr><tr align="center" class="rowFeature1"><th class="leftBorder ">Date/Flight Changes</th><td width="17%" class="BargainCell leftBorder1  ">Charge of 754 MXN.</td><td width="17%" class="SpecialCell leftBorder1  ">Charge of 453 MXN.</td><td width="17%" class="AMPlusCell leftBorder1  ">No charges.</td><td width="17%" class="PremierCell leftBorder1  ">Charge of 638 MXN.</td><td width="17%" class="PremierPlusCell leftBorder1 rightBorder ">No charges.</td></tr><tr align="center" class="rowFeature0"><th class="leftBorder ">Reimbursements</th><td width="17%" class="BargainCell leftBorder0  ">E/N: 754 MXN charges.<br>R/V/W: Non refundable.</td><td width="17%" class="SpecialCell leftBorder0  ">Charge of 673 MXN.</td><td width="17%" class="AMPlusCell leftBorder0  ">No charges.</td><td width="17%" class="PremierCell leftBorder0  ">Charge of 638 MXN.</td><td width="17%" class="PremierPlusCell leftBorder0 rightBorder ">No charges.</td></tr><tr align="center" class="rowFeature1"><th class="leftBorder ">REISSUES</th><td width="17%" class="BargainCell leftBorder1  ">Charge of 754 MXN.</td><td width="17%" class="SpecialCell leftBorder1  ">Charge of 453 MXN.</td><td width="17%" class="AMPlusCell leftBorder1  ">No charges.</td><td width="17%" class="PremierCell leftBorder1  ">Charge of 638 MXN.</td><td width="17%" class="PremierPlusCell leftBorder1 rightBorder ">No charges.</td></tr><tr align="center" class="rowFeature0"><th style="text-transform:none;" class="leftBorder ">CHILDREN DISCOUNT (2 - 11 years old)</th><td width="17%" class="BargainCell leftBorder0  ">No discount.</td><td width="17%" class="SpecialCell leftBorder0  ">10% discount of adult fare.</td><td width="17%" class="AMPlusCell leftBorder0  ">15% discount of adult fare.</td><td width="17%" class="PremierCell leftBorder0  ">15% discount of adult fare.</td><td width="17%" class="PremierPlusCell leftBorder0 rightBorder ">15% discount of adult fare.</td></tr><tr align="center" class="rowFeature1"><th class="leftBorder ">OTHER DISCOUNTS</th><td width="17%" class="BargainCell leftBorder0  ">No discount.</td><td width="17%" class="SpecialCell leftBorder0  ">15% for senior citizens</td><td width="17%" class="AMPlusCell leftBorder0  ">15% for senior citizens</td><td width="17%" class="PremierCell leftBorder0  ">No discount</td><td width="17%" class="PremierPlusCell leftBorder0 rightBorder ">15% for senior citizens</td></tr><tr align="center" class="rowFeature0"><th class="leftBorder ">Min/Max stay</th><td width="17%" class="BargainCell leftBorder1  ">May apply.</td><td width="17%" class="SpecialCell leftBorder1  ">Not applicable.</td><td width="17%" class="AMPlusCell leftBorder1  ">Not applicable.</td><td width="17%" class="PremierCell leftBorder1  ">Not applicable.</td><td width="17%" class="PremierPlusCell leftBorder1 rightBorder ">Not applicable.</td></tr><tr align="center" class="rowFeature1"><th class="leftBorder ">Stopovers</th><td width="17%" class="BargainCell leftBorder0  ">Not applicable.</td><td width="17%" class="SpecialCell leftBorder0  ">Unlimited.</td><td width="17%" class="AMPlusCell leftBorder0  ">Unlimited.</td><td width="17%" class="PremierCell leftBorder0  ">Unlimited.</td><td width="17%" class="PremierPlusCell leftBorder0 rightBorder ">Unlimited.</td></tr><tr align="center" class="rowFeature0"><th class="leftBorder ">MILES/KILOMETERS ACCRUAL</th><td width="17%" class="BargainCell leftBorder1  ">50% kilometers accrual bonus, except E 100% kilometers accrual bonus.</td><td width="17%" class="SpecialCell leftBorder1  ">125% kilometers accrual bonus.</td><td width="17%" class="AMPlusCell leftBorder1  ">150% kilometers accrual bonus.</td><td width="17%" class="PremierCell leftBorder1  ">150% kilometers accrual bonus.</td><td width="17%" class="PremierPlusCell leftBorder1 rightBorder ">200% kilometers accrual bonus.</td></tr><tr align="center" class="rowFeature1"><th class="leftBorder ">Free Baggage Allowance</th><td width="17%" class="BargainCell leftBorder0  ">1 checked piece 25 kg + 1 carry on piece 10 kg.</td><td width="17%" class="SpecialCell leftBorder0  ">1 checked piece 25 kg + 1 carry on piece 10 kg.</td><td width="17%" class="AMPlusCell leftBorder0  ">1 checked piece 25 kg + 1 carry on piece 10 kg.</td><td width="17%" class="PremierCell leftBorder0  ">2 checked pieces 30 kg total + 1 carry on piece 10 kg.</td><td width="17%" class="PremierPlusCell leftBorder0 rightBorder ">2 checked pieces 30 kg total + 1 carry on piece 10 kg.</td></tr><tr align="center" class="rowFeature0"><th style="text-transform:none;" class="leftBorder ">ADVANCED SEAT ASSIGNMENT(subject to availability)</th><td width="17%" class="BargainCell leftBorder1  ">Not allowed.</td><td width="17%" class="SpecialCell leftBorder1  ">Allowed.</td><td width="17%" class="AMPlusCell leftBorder1  ">Allowed.</td><td width="17%" class="PremierCell leftBorder1  ">Allowed.</td><td width="17%" class="PremierPlusCell leftBorder1 rightBorder ">Allowed.</td></tr><tr align="center" class="rowFeature1"><th class="leftBorder ">RESERVATION</th><td width="17%" class="BargainCell leftBorder1  ">May apply advanced purchase.</td><td width="17%" class="SpecialCell leftBorder1  ">With previous reservation.</td><td width="17%" class="AMPlusCell leftBorder1  ">With previous reservation.</td><td width="17%" class="PremierCell leftBorder1  ">With previous reservation.</td><td width="17%" class="PremierPlusCell leftBorder1 rightBorder ">With previous reservation.</td></tr><tr align="center" class="rowFeature0"><th class="leftBorder bottomBorder">Ticketing</th><td width="17%" class="BargainCell leftBorder0  bottomBorder">24 hours after reservation has made.</td><td width="17%" class="SpecialCell leftBorder0  bottomBorder">72 hours after reservation has made.</td><td width="17%" class="AMPlusCell leftBorder0  bottomBorder">7 days after reservation has made.</td><td width="17%" class="PremierCell leftBorder0  bottomBorder">72 hours after reservation has made.</td><td width="17%" class="PremierPlusCell leftBorder0 rightBorder bottomBorder">10 days after reservation has made.</td></tr><tr align="center" class="rowFeature1"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; width: 104px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211); text-transform:none;">AM Plus (Available on flights operated by B737-800 and B737-700, seats subject to availability. Premier documentation counters.)</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">Charge of 290MXN<br></td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">Charge of 290MXN<br></td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">Free of charge.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">Not applicable.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-right: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">Not applicable.</td></tr><tr><td colspan="6"></td></tr>	   </tbody></table>' +
                                                    '</div></div>'
                                                    );
					} else {
                                            //Internacional
                                            local = false;
						jQuery('body').append(
                                                '<style>'+
                                                    '#tableInfo{position:absolute; top:10px; left:50%; margin-left:-350px; width:700px;}'+
                                                    ' .containerTableInfo{ '+
                                                    'background:url(https://s3.amazonaws.com/aeromexico/bg_modal_table.png); '+
                                                    'width:100%; height:'+ bodyHeight +'px ; '+
                                                    'position:absolute; top:0; left:0; display:none;}</style>'+
                                                    '<div class="containerTableInfo" >'+
                                                    '<div id="tableInfo">'+
                                                    '<img src="https://s3.amazonaws.com/aeromexico/modal_cerrar.png" class="table-info-close" style="margin-left:auto; display:block; cursor:pointer; margin-bottom:10px;" />'+
                                                    '<style>table.fareFamilySummary { width: 100%; margin:auto; background:#FFFFFF;}'+
                                                    'table.fareFamilySummary th {'+
                                                    'font-weight: bold;'+
                                                    'font-size: 11px;'+
                                                    'color: #808080;'+
                                                    'text-align: center;'+
                                                    'text-transform: uppercase;'+
                                                    'width: 15%}'+
                                                    'tr.fareFamilySummaryHeader td.BargainHeader {  '+
                                                    'background-color: #064E01;   '+
                                                    'height: 50px;  '+
                                                    'width: 19.8%;}'+
                                                    'tr.fareFamilySummaryHeader td.SpecialHeader {   '+
                                                    'background-color: #8E8E00;   '+
                                                    'height: 50px;'+
                                                    'width: 20%;}'+
                                                    'tr.fareFamilySummaryHeader td.AMPlusHeader {  '+
                                                    ' background-color: #FEA300;  '+
                                                    'height: 50px;  width: 20%;}'+
                                                    'tr.fareFamilySummaryHeader td.PremierHeader { '+
                                                    'background-color: #AC2A00; '+
                                                    'height: 50px;  width: 20%;}'+
                                                    'tr.fareFamilySummaryHeader td.PremierPlusHeader {  '+
                                                    'background-color: #6F0136;   '+'height: 50px;  '+
                                                    'width: 20%;}'+
                                                    'tr.fareFamilySummaryHeader td.productHeader {  '+
                                                    'vertical-align: middle;  '+
                                                    'border-top: 1px solid #D3D3D3;  '+
                                                    'border-bottom: 1px solid;  '+
                                                    'border-bottom-color: #D3D3D3;  '+
                                                    'border-left: 1px solid;  '+
                                                    'border-left-color: #D3D3D3;}'+
                                                    'tr.fareFamilySummaryHeader td div {  '+
                                                    'font-family: Arial;  text-align: center; '+
                                                    'font-weight: bold;   '+
                                                    'font-size: 10pt;   '+'line-height: 10pt;  '+'color: #FFFFFF}'+
                                                    'table.fareFamilySummary th div {  '+
                                                    'font-family: Arial;   '+
                                                    'font-weight: bold;   '+'font-size: 10pt;   '+'line-height: 10.8pt;  }'+
                                                    'table.fareFamilySummary tr td{	'+
                                                    'color: #857D86;		'+
                                                    'font-size: 10px;}table.fareFamilySummary tr.rowFeature0 { 	'+
                                                    'text-align: center;	'+
                                                    'height: 25px;	'+
                                                    'background-color: #FFFFFF;	'+
                                                    'color: #857D86;}'+
                                                    'table.fareFamilySummary tr.rowFeature1 { 	'+
                                                    'text-align: center;	'+
                                                    'height: 25px;	'+
                                                    'background-color: #E5E5E5;	'+
                                                    'font-size: 10px;	'+
                                                    'color: #857D86;}'+
                                                    'table.fareFamilySummary td.leftBorder0 {	'+
                                                    'border-left: 1px solid #D3D3D3} '+
                                                    ' table.fareFamilySummary td.leftBorder1 {	border-left: 1px solid #FFFFFF;}'+
                                                    'table.fareFamilySummary td.rightBorder { 	border-right: 1px solid #D3D3D3;}'+
                                                    'table.fareFamilySummary th.leftBorder {	border-left: 1px solid #D3D3D3;}'+
                                                    'table.fareFamilySummary th.bottomBorder {	border-bottom: 1px solid #D3D3D3;}'+
                                                    'table.fareFamilySummary td.topBorder0 {	border-top: 1px solid #D3D3D3;}'+
                                                    'table.fareFamilySummary td.topBorder1 {	border-top: 1px solid #FFFFFF;}'+
                                                    'table.fareFamilySummary td.bottomBorder {	border-bottom: 1px solid #D3D3D3;}'+
                                                    '</style>'+
                                                    '<table cellspacing="0" cellpadding="0" class="fareFamilySummary">	<tbody><tr><th><div id="roundedheader" style="background-color: rgb(255, 255, 255); color: rgb(128, 128, 128); text-align: center; text-transform: uppercase; border-left: 1px solid rgb(211, 211, 211); border-top: 1px solid rgb(211, 211, 211);">FAMILY<br>RESERVATION CLASS</div></th><td colspan="5"><table width="100%" cellspacing="0" cellpadding="0" border="0"><tbody><tr class="fareFamilySummaryHeader"><td class="productHeader BargainHeader "><div>BARGAIN</div></td><td class="productHeader SpecialHeader "><div>SPECIAL</div></td><td class="productHeader AMPlusHeader "><div>AM PLUS</div></td><td class="productHeader PremierHeader "><div>PREMIER</div></td><td class="productHeader PremierPlusHeader rightBorder"><div>PREMIER PLUS</div></td></tr><tr height="14.5px" bgcolor="white" align="center"><td class="" style="color: rgb(0, 0, 0); border-left: 1px solid rgb(211, 211, 211);">E,N,R,V,W</td><td class="" style="color: rgb(0, 0, 0); border-left: 1px solid rgb(211, 211, 211);">K,H,L,Q,T</td><td class="" style="color: rgb(0, 0, 0); border-left: 1px solid rgb(211, 211, 211);">Y,B,M,U</td><td class="" style="color: rgb(0, 0, 0); border-left: 1px solid rgb(211, 211, 211);">C,D,I*</td><td class="rightBorder" style="color: rgb(0, 0, 0); border-left: 1px solid rgb(211, 211, 211);">J</td></tr></tbody></table></td></tr><tr align="center" class="rowFeature1"><th class="leftBorder ">CHANGES DATE/FLIGHT</th><td width="17%" class="BargainCell leftBorder1  ">Charge of USD 200.</td><td width="17%" class="SpecialCell leftBorder1  ">Charge of USD 150.</td><td width="17%" class="AMPlusCell leftBorder1  ">No charges.</td><td width="17%" class="PremierCell leftBorder1  ">Charge of USD 150<br><br>ASIA charge of USD 200</td><td width="17%" class="PremierPlusCell leftBorder1 rightBorder ">No charges.</td></tr><tr align="center" class="rowFeature0"><th class="leftBorder ">REIMBURSEMENTS</th><td width="17%" class="BargainCell leftBorder0  ">Charge of USD 200.</td><td width="17%" class="SpecialCell leftBorder0  ">Charge of USD 150.</td><td width="17%" class="AMPlusCell leftBorder0  ">No charges.</td><td width="17%" class="PremierCell leftBorder0  ">Charge of USD 150<br><br>ASIA charge of USD 200</td><td width="17%" class="PremierPlusCell leftBorder0 rightBorder ">No charges.</td></tr><tr align="center" class="rowFeature1"><th class="leftBorder ">REISSUES</th><td width="17%" class="BargainCell leftBorder1  ">Charge of USD 200.</td><td width="17%" class="SpecialCell leftBorder1  ">Charge of USD 150.</td><td width="17%" class="AMPlusCell leftBorder1  ">No charges.</td><td width="17%" class="PremierCell leftBorder1  ">Charge of USD 150<br><br>ASIA charge of USD 200</td><td width="17%" class="PremierPlusCell leftBorder1 rightBorder ">No charges.</td></tr><tr align="center" class="rowFeature0"><th class="leftBorder " style="text-transform:none">CHILDREN DISCOUNTS (2 - 11 years old)</th><td width="17%" class="BargainCell leftBorder0  ">USA does not apply discount.<br>EUROPE &amp; ASIA 25% discount of  adult fare only in R and V fares.<br>CENTRAL &amp; SOUTH AMERICA 33% discount of adult fare only in R and V fares.<br>(No discount in R, V &amp; W fares across all markets).</td><td width="17%" class="SpecialCell leftBorder0  ">USA does not apply discount.<br><br>EUROPE &amp; ASIA 25% discount of  adult fare.<br><br>CENTRAL &amp; SOUTH AMERICA 33% discount of adult fare.</td><td width="17%" class="AMPlusCell leftBorder0  ">USA does not apply discount.<br><br>EUROPE, &amp; ASIA 30% discount of  adult fare.<br><br>CENTRAL &amp; SOUTH AMERICA  35% discount of adult fare.</td><td width="17%" class="PremierCell leftBorder0  ">USA does not apply discount<br><br>EUROPE &amp; ASIA 25% discount of  adult fare.<br><br>CENTRAL &amp; SOUTH AMERICA 33% discount of adult fare.</td><td width="17%" class="PremierPlusCell leftBorder0 rightBorder ">USA does not apply discount<br><br>EUROPE, &amp; ASIA 30% discount of  adult fare<br><br>CENTRAL &amp; SOUTH AMERICA  35% discount of adult fare</td></tr><tr align="center" class="rowFeature1"><th class="leftBorder ">OTHER DISCOUNTS</th><td width="17%" class="BargainCell leftBorder0  ">No discount.</td><td width="17%" class="SpecialCell leftBorder0  ">15% discount for senior citizens.</td><td width="17%" class="AMPlusCell leftBorder0  ">15% discount for senior citizens.</td><td width="17%" class="PremierCell leftBorder0  ">No discount.</td><td width="17%" class="PremierPlusCell leftBorder0 rightBorder ">15% discount for senior citizens.</td></tr><tr align="center" class="rowFeature0"><th class="leftBorder ">MIN/MAX STAYS</th><td width="17%" class="BargainCell leftBorder1  ">Always apply.</td><td width="17%" class="SpecialCell leftBorder1  ">May apply.</td><td width="17%" class="AMPlusCell leftBorder1  ">May apply.</td><td width="17%" class="PremierCell leftBorder1  ">May apply.</td><td width="17%" class="PremierPlusCell leftBorder1 rightBorder ">Not applicable.</td></tr><tr align="center" class="rowFeature1"><th class="leftBorder ">Stopovers</th><td width="17%" class="BargainCell leftBorder0  ">Not permitted.</td><td width="17%" class="SpecialCell leftBorder0  ">Allowed with charges of USD 58 each stopover.</td><td width="17%" class="AMPlusCell leftBorder0  ">Unlimited.</td><td width="17%" class="PremierCell leftBorder0  ">A class: Allowed with charges USD 58 each stopover<br><br>D class: Not permitted</td><td width="17%" class="PremierPlusCell leftBorder0 rightBorder ">Unlimited.</td></tr><tr align="center" class="rowFeature0"><th class="leftBorder ">KILOMETERS ACCRUAL </th><td width="17%" class="BargainCell leftBorder1  ">50% kilometers accrual bonus, except for E 100% kilometers accrual bonus.<br></td><td width="17%" class="SpecialCell leftBorder1  ">125% kilometers accrual bonus.</td><td width="17%" class="AMPlusCell leftBorder1  ">150% kilometers accrual bonus.</td><td width="17%" class="PremierCell leftBorder1  ">150% kilometers accrual bonus.</td><td width="17%" class="PremierPlusCell leftBorder1 rightBorder ">200% kilometers accrual bonus.</td></tr><tr align="center" class="rowFeature1"><th class="leftBorder ">Free Baggage Allowance</th><td width="17%" class="BargainCell leftBorder0  ">USA: 1 piece 23 kg,<br>SOUTH AMERICA &amp; ASIA: 2 pieces 32 kg total (ex LIMA).<br>EUROPE, LIMA &amp; CENTRAL AMERICA: 2 pieces 23 kg total.</td><td width="17%" class="SpecialCell leftBorder0  ">USA: 1 piece 23 kg,<br>SOUTH AMERICA &amp; ASIA: 2 pieces 32 kg total (ex LIMA).<br>EUROPE, LIMA &amp; CENTRAL AMERICA: 2 pieces 23 kg total</td><td width="17%" class="AMPlusCell leftBorder0  ">USA: 2 pieces 23kg total.<br>SOUTH AMERICA &amp; ASIA: 3 pieces 32 kg total (ex LIMA).<br>EUROPE: 2 pieces 32 kg total.<br>LIMA &amp; CENTRAL AMERICA: 3 pieces 23 kg total.</td><td width="17%" class="PremierCell leftBorder0  ">USA, EUROPE &amp; CENTRAL AMERICA: 2 pieces 32 kg total.<br>SOUTH AMERICA &amp; ASIA: 3 pieces 32 kg total.</td><td width="17%" class="PremierPlusCell leftBorder0 rightBorder ">USA, EUROPE &amp; CENTRAL AMERICA: 2 pieces 32 kg total.<br>SOUTH AMERICA &amp; ASIA: 3 pieces 32 kg total.</td></tr><tr align="center" class="rowFeature0"><th class="leftBorder ">RESERVATION</th><td width="17%" class="BargainCell leftBorder1  ">May apply advanced purchase.</td><td width="17%" class="SpecialCell leftBorder1  ">May apply advanced purchase.</td><td width="17%" class="AMPlusCell leftBorder1  ">With previous reservation.</td><td width="17%" class="PremierCell leftBorder1  ">May apply advanced purchase.</td><td width="17%" class="PremierPlusCell leftBorder1 rightBorder ">With previous reservation.</td></tr><tr align="center" class="rowFeature1"><th class="leftBorder bottomBorder">Ticketing</th><td width="17%" class="BargainCell leftBorder0  bottomBorder">24 hours after reservation has been made.</td><td width="17%" class="SpecialCell leftBorder0  bottomBorder">Asia / Europe: According to time limit, else 72 hours after reservation has been made.</td><td width="17%" class="AMPlusCell leftBorder0  bottomBorder">ASIA/EUROPE: according to time limit. SOUTH AMERICA: 10 days after reservation has been made, else 7 days.</td><td width="17%" class="PremierCell leftBorder0  bottomBorder">Asia / Europe: According to time limit, else 72 hours after reservation has been made.</td><td width="17%" class="PremierPlusCell leftBorder0 rightBorder bottomBorder">Asia/Europe: According to time limit, else 10 days after reservation has been made.</td></tr><tr align="center" class="rowFeature0"><th style="font-weight: bold; font-size: 11px; color: rgb(128, 128, 128); text-align: center; width: 104px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211); text-transform:none;">AM Plus (Available on flights operated by B737-800 and B737-700, seats subject to availability. Premier documentation counters.)</th><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">Charge of 40 USD.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">Charge of 40 USD<br></td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">Free of charge.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">Not applicable.</td><td width="17%" style="color: rgb(133, 125, 134); font-size: 10px; border-left: 1px solid rgb(211, 211, 211); border-right: 1px solid rgb(211, 211, 211); border-bottom: 1px solid rgb(211, 211, 211);">Not applicable.</td></tr><tr><td colspan="6"><table width="100%" height="20px" cellspacing="0" cellpadding="0" border="0"><tbody><tr><td style="font-size: 11px; vertical-align: middle; color: rgb(0, 0, 0);"><i>*Only applies for Southamerica, Asia and Europe.</i></td></tr></tbody></table></td></tr></tbody></table></div></div>'
                                            );
					}
				}


				/* Promo code*/
				jQuery(".matrix_airline_code").each(function(a){
					var rawCode = jQuery(this).html(),
						code = rawCode.split(";")[1],
						tr = $(this).parent().parent().parent().parent(),
						top = $(this).parent().parent().parent().parent().offset().top - 340,
						span = $(this).parent().prev().find(".highlight").first();
					code = parseInt(code);
					tr.attr("data-top", top);
					if(code >= 770 && code <= 790){
						tr.removeClass("even");
						tr.addClass("promo-bg");
						span.html("Aerom&eacute;xico Contigo");
					}
				});
				jQuery(".promo-bg").mouseover(function(){
					var div = jQuery("<div class='popup-bg'>"),
						cont = jQuery("<div class='position:relative'>"),
						topCoord = $(this).attr("data-top");
					cont.append(popupMessage);
					div.append(cont);
					div.css({
						"top": topCoord + "px"
					});
					jQuery("#pageContent").append(div);
				});
				jQuery(".promo-bg").mouseout(function(){
					jQuery(".popup-bg").remove();
				});
				/* Promo code end*/


				jQuery(".containerTableInfo").css("z-index", "9999");
				jQuery('.brandInfoLink br').remove();

                                var text_content;
                                var popUpBG = '\'https://s3.amazonaws.com/aeromexico/pop-up.png\'';

				if (idiomaType == 'es'){

                                        text_content = '<div style="position:relative;">'+
                                            '<div class="info-table" style="display:none; position:absolute; top:8px; left:-65px; width:200px;z-index: 10;">'+
                                            '<div style="background: url('+popUpBG+') no-repeat; width: 208px; height: 20px; display: block"></div>'+
                                            '<div style="background: url('+popUpBG+') no-repeat 0 -25px; width: 194px; display: block; padding: 0 7px; text-align: center">'+
                                            '<span style="font-size: 16px;">Econ&oacute;mica</span>'+

                                            '<div><ul style="text-align: left; padding: 10px;">';

                                            if(local){
                                                text_content += '<li>Cambios de fecha y/o vuelo, cargo de 754 MXN</li>';
                                            } else {
                                            	if(es_us)
                                            		text_content += '<li>Cambios de fecha y/o vuelo, cargo de 200 USD</li>';
                                            	else
                                            		text_content += '<li>Cambios de fecha y/o vuelo, cargo de 232 USD</li>';
                                            }

                                            text_content += '<li>';
                                            if(local){
                                            	text_content += '<li>&iquest;No puedes viajar? Reembolsa tu boleto con cargo. R/V/W: No reembolsable';
                                            } else{
                                            	text_content += '<li>&iquest;No puedes viajar? Reembolsa tu boleto con cargo.';
                                            }
                                            text_content += '</li>'+
                                            '<li>&iquest;Cambias de destino o clase? Reexpide tu boleto con cargo.</li>'+
                                            //'<li>75% bono de acumulaci&oacute;n de kil&oacute;metros.</li>'+
                                            '<li>50% bono de acumulaci&oacute;n de kil&oacute;metros en clase "N, R, V, W".</li>'+
                                            '<li>100% bono de acumulaci&oacute;n de kil&oacute;metros en clase "E".</li>'+
                                            '</ul><a href="#" style="padding:10px;" class="table-info">Da click para detalles completos</a>'+
                                            '</div></div>'+
                                            '<div style="background: url('+popUpBG+') no-repeat 0 -480px; width: 208px; height: 20px; display: block; margin: 0; padding: 0"></div>'+
                                            '</div></div>';

					jQuery('.bfm_fareHdr1').append(text_content);
				} else {

                                        text_content = '<div style="position:relative;">'+
                                            '<div class="info-table" style="display:none; position:absolute; top:8px; left:-65px; width:200px;z-index: 10;">'+
                                            '<div style="background: url('+popUpBG+') no-repeat; width: 208px; height: 20px; display: block"></div>'+
                                            '<div style="background: url('+popUpBG+') no-repeat 0 -25px; width: 194px; display: block; padding: 0 7px; text-align: center">'+
                                            '<span style="font-size: 16px;">Bargain</span>'+

											'<div><ul style="text-align: left; padding: 10px;">';

                                            if(local){
                                                text_content += '<li>Changes date/flight Charge of 754 MXN</li>';
                                            } else {
                                                text_content += '<li>Changes date/flight Charge of USD 200</li>';
                                            }



                                            text_content += '<li>'+
                                            'Unable to fly? Refunds allowed with charges. Refunds not permitted on W,P and I class.'+
                                            '</li>'+
                                            '<li>'+
                                            'Destination or class changes? Reissue ticket with charges.</li>'+
                                            '<li>50% kilometers accrual bonus in class "N, R, V, W"</li>'+
                                            '<li>100% kilometers accrual bonus in class "E"</li>'+
                                            '</ul><a href="#" style="padding:10px;" class="table-info">Click here for full details</a>'+
                                            '</div></div>'+
                                            '<div style="background: url('+popUpBG+') no-repeat 0 -480px; width: 208px; height: 20px; display: block; margin: 0; padding: 0"></div>'+
                                            '</div></div>';

					jQuery('.bfm_fareHdr1').append(text_content);
				}
				jQuery('.bfm_fareHdr1').hover(
					function() {jQuery('.info-table', this).fadeIn("fast");},
					function() {jQuery('.info-table', this).fadeOut("fast");}
				);


				if (idiomaType == 'es'){
                                        text_content = '<div style="position:relative;">'+
                                            '<div class="info-table" style="display:none; position:absolute; top:8px; left:-65px; width:200px;z-index: 10;">'+
                                            '<div style="background: url('+popUpBG+') no-repeat; width: 208px; height: 20px; display: block"></div>'+
                                            '<div style="background: url('+popUpBG+') no-repeat 0 -25px; width: 194px; display: block; padding: 0 7px; text-align: center">'+
                                            '<span style="font-size: 16px;">Especial</span>'+

                                            '<div><ul style="text-align: left; padding: 10px;">';

                                            if(local){
                                                text_content += '<li>Cambios de fecha y/o vuelo, cargo de 453 MXN</li>';
                                            } else {
                                                if(es_us){
                                                	text_content += '<li>Cambios de fecha y/o vuelo, cargo de 150 USD</li>';
                                                } else{
                                                	text_content += '<li>Cambios de fecha y/o vuelo, cargo de 174 USD</li>';
                                                }
                                            }

                                            text_content +=

                                            '<li>'+
                                            '&iquest;No puedes viajar? Reembolsa tu boleto con cargo.'+
                                            '</li>'+
                                            '<li>'+
                                            '&iquest;Cambias de destino o clase? Reexpide tu boleto con cargo.'+
                                            '</li>'+
                                            '<li>'+
                                            '125% bono de acumulaci&oacute;n de kil&oacute;metros.'+
                                            '</li>'+

                                            '</ul><a href="#" style="padding:10px;" class="table-info">Da click para detalles completos</a>'+

                                            '</div></div>'+
                                            '<div style="background: url('+popUpBG+') no-repeat 0 -480px; width: 208px; height: 20px; display: block; margin: 0; padding: 0"></div>'+
                                            '</div></div>';

					jQuery('.bfm_fareHdr2').append(text_content);
				} else {


                                        text_content = '<div style="position:relative;">'+
                                            '<div class="info-table" style="display:none; position:absolute; top:8px; left:-65px; width:200px;z-index: 10;">'+
                                            '<div style="background: url('+popUpBG+') no-repeat; width: 208px; height: 20px; display: block"></div>'+
                                            '<div style="background: url('+popUpBG+') no-repeat 0 -25px; width: 194px; display: block; padding: 0 7px; text-align: center">'+
                                            '<span style="font-size: 16px;">Special</span>'+

                                            '<div><ul style="text-align: left; padding: 10px;">';

                                            if(local){
                                                text_content += '<li>Changes date/flight Charge of 453 MXN</li>';
                                            } else {
                                                text_content += '<li>Changes date/flight Charge of USD 150</li>';
                                            }


                                            text_content += '<li>'+
                                            'Unable to fly? Refunds allowed with charges.'+
                                            '</li>'+
                                            '<li>'+
                                            'Destination or class changes? Reissue ticket with charges.'+
                                            '</li>'+
                                            '<li>'+
                                            '125% kilometers accrual bonus.'+'</li>'+
                                            '</ul><a href="#" style="padding:10px;" class="table-info">Click here for full details</a>'+

                                            '</div></div>'+
                                            '<div style="background: url('+popUpBG+') no-repeat 0 -480px; width: 208px; height: 20px; display: block; margin: 0; padding: 0"></div>'+
                                            '</div></div>';

					jQuery('.bfm_fareHdr2').append(text_content);
				}
				jQuery('.bfm_fareHdr2').hover(
					function() {jQuery('.info-table', this).fadeIn("fast");},
					function() {jQuery('.info-table', this).fadeOut("fast");}
				);


				if (idiomaType == 'es'){

                                        text_content = '<div style="position:relative;">'+
                                            '<div class="info-table" style="display:none; position:absolute; top:8px; left:-65px; width:200px;z-index: 10;">'+
                                            '<div style="background: url('+popUpBG+') no-repeat; width: 208px; height: 20px; display: block"></div>'+
                                            '<div style="background: url('+popUpBG+') no-repeat 0 -25px; width: 194px; display: block; padding: 0 7px; text-align: center">'+
                                            '<span style="font-size: 16px;">AM Plus</span>'+

                                            '<div><ul style="text-align: left; padding: 10px;">';

                                            if(local){
                                                text_content += '<li>Cambios de fecha y/o vuelo, sin cargo</li>';
                                            } else {
                                                text_content += '<li>Cambios de fecha y/o vuelo, sin cargo</li>';
                                            }

                                            text_content +=

                                            '<li>&iquest;No puedes viajar? Reembolsa tu boleto sin cargo.</li>'+
                                            '<li>No te preocupes de los cambios de destino o clase, reexpide tu boleto sin cargo.</li>'+
                                            '<li>150% bono de acumulaci&oacute;n de kil&oacute;metros.</li>'+
                                            '<li>Asiento AM Plus, m&aacute;s espacio entre asientos y mayor reclinaci&oacute;n*</li>' +
                                            '<li>Documentaci&oacute;n en mostradores Premier**</li>' + 
                                            '<li>Prioridad al abordar**</li>' +
                                            '<li>*Asiento sujeto a disponibilidad<br>*Disponible &Uacute;nicamente en vuelos operados por B737-700 y B737-800<br>**Beneficios sujetos a disponibilidad de asiento AM Plus</li>'+
                                            '</ul><a href="#" style="padding:10px;" class="table-info">Da click para detalles completos</a>'+

                                            '</div></div>'+
                                            '<div style="background: url('+popUpBG+') no-repeat 0 -480px; width: 208px; height: 20px; display: block; margin: 0; padding: 0"></div>'+
                                            '</div></div>';

					jQuery('.bfm_fareHdr3').append(text_content);
				} else {

                                        text_content = '<div style="position:relative;">'+
                                            '<div class="info-table" style="display:none; position:absolute; top:8px; left:-65px; width:200px;z-index: 10;">'+
                                            '<div style="background: url('+popUpBG+') no-repeat; width: 208px; height: 20px; display: block"></div>'+
                                            '<div style="background: url('+popUpBG+') no-repeat 0 -25px; width: 194px; display: block; padding: 0 7px; text-align: center">'+
                                            '<span style="font-size: 16px;">AM Plus</span>'+
											'<div><ul style="text-align: left; padding: 10px;">';

                                            if(local){
                                                text_content += '<li>Changes date/flight No charges</li>';
                                            } else {
                                                text_content += '<li>Changes date/flight No charges</li>';
                                            }

                                            text_content +=
                                            '<li>Unable to fly? Refund with no charge.</li>'+
                                            '<li>No worry about destinations or class change; reissue your ticket with no charge.</li>'+
                                            '<li>150% kilometers accrual bonus.</li>'+
                                            '<li>AM Plus seat, more legroom and more recline *</li>' +
                                            '<li>Premier Documentation counters **</li>' +
                                            '<li>Priority Boarding **</li>' +
                                            '<li>* Seats subject to availability<br>* Available only on flights operated by B737-700 and B737-800<br>** Benefits subject to availability of AM Plus seats.</li>' +
                                            '</ul><a href="#" style="padding:10px;" class="table-info">Click here for full details</a>'+

                                            '</div></div>'+
                                            '<div style="background: url('+popUpBG+') no-repeat 0 -480px; width: 208px; height: 20px; display: block; margin: 0; padding: 0"></div>'+
                                            '</div></div>';

					jQuery('.bfm_fareHdr3').append(text_content);
				}
				jQuery('.bfm_fareHdr3').hover(
					function() {jQuery('.info-table', this).fadeIn("fast");},
					function() {jQuery('.info-table', this).fadeOut("fast");}
				);


				if (idiomaType == 'es'){

										text_content = '<div style="position:relative;">'+
											'<div class="info-table" style="display:none; position:absolute; top:8px; left:-65px; width:200px;z-index: 10;">'+
                                            '<div style="background: url('+popUpBG+') no-repeat; width: 208px; height: 20px; display: block"></div>'+
                                            '<div style="background: url('+popUpBG+') no-repeat 0 -25px; width: 194px; display: block; padding: 0 7px; text-align: center">'+
                                            '<span style="font-size: 16px;">Premier</span>'+
											'<div><ul style="text-align: left; padding: 10px;">';

                                            if(local){
                                                text_content += '<li>Cambios de fecha y/o vuelo, cargo de 638 MXN</li>';
                                            } else {
                                                text_content += '<li>Cambios de fecha y/o vuelo, cargo de 174 USD</li>';
                                            }
                                            text_content +=

                                            '<li>&iquest;No puedes viajar? Reembolsa tu boleto con cargo.</li>'+
                                            '<li>&iquest;Cambias de destino o clase? Reexpide tu boleto con cargo</li>'+
                                            '<li>150% bono de acumulaci&oacute;n de kil&oacute;metros</li>'+
                                            '</ul><a href="#" style="padding:10px;" class="table-info">Da click para detalles completos</a>'+
                                            '</div></div>'+
                                            '<div style="background: url('+popUpBG+') no-repeat 0 -480px; width: 208px; height: 20px; display: block; margin: 0; padding: 0"></div>'+
                                            '</div>';

					jQuery('.bfm_fareHdr4').append(text_content);

				} else {
                                        text_content = '<div style="position:relative;">'+
                                            '<div class="info-table" style="display:none; position:absolute; top:8px; left:-65px; width:200px;z-index: 10;">'+
                                            '<div style="background: url('+popUpBG+') no-repeat; width: 208px; height: 20px; display: block"></div>'+
                                            '<div style="background: url('+popUpBG+') no-repeat 0 -25px; width: 194px; display: block; padding: 0 7px; text-align: center">'+
                                            '<span style="font-size: 16px;">Premier</span>'+
											'<div><ul style="text-align: left; padding: 10px;">';

                                            if(local){
                                                text_content += '<li>Changes date/flight Charge of 638 MXN</li>';
                                            } else {
                                                text_content += '<li>Changes date/flight Charge of USD 150</li>';
                                            }

                                            text_content +=
                                            '<li>Unable to fly? Refunds allowed with charges.</li>'+
                                            '<li>Destination or class changes? Reissue ticket with charges.</li>'+
                                            '<li>150% kilometers accrual bonus.</li>'+
                                            '</ul><a href="#" style="padding:10px;" class="table-info">Click here for full details</a>'+
                                            '</div></div>'+
                                            '<div style="background: url('+popUpBG+') no-repeat 0 -480px; width: 208px; height: 20px; display: block; margin: 0; padding: 0"></div>'+
                                            '</div></div>';

					jQuery('.bfm_fareHdr4').append(text_content);
				}
				jQuery('.bfm_fareHdr4').hover(
					function() {jQuery('.info-table', this).fadeIn("fast");},
					function() {jQuery('.info-table', this).fadeOut("fast");}
				);


				if (idiomaType == 'es'){
                                        text_content = '<div style="position:relative;">'+
                                            '<div class="info-table" style="display:none; position:absolute; top:8px; left:-65px; width:200px;z-index: 10;">'+
                                            '<div style="background: url('+popUpBG+') no-repeat; width: 208px; height: 20px; display: block"></div>'+
                                            '<div style="background: url('+popUpBG+') no-repeat 0 -25px; width: 194px; display: block; padding: 0 7px; text-align: center">'+
                                            '<span style="font-size: 16px;">Premier Plus</span>'+
											'<div><ul style="text-align: left; padding: 10px;">';

                                            if(local){
                                                text_content += '<li>Cambios de fecha y/o vuelo, sin cargo</li>';
                                            } else {
                                                text_content += '<li>Cambios de fecha y/o vuelo, sin argos</li>';
                                            }
                                            text_content +=
                                            '<li>&iquest;No puedes viajar? Reembolsa tu boleto sin cargo.</li>'+
                                            '<li>No te preocupes de los cambios de destino o clase, reexpide tu boleto sin cargo.</li>'+
                                            '<li>200% bono de acumulaci&oacute;n de kil&oacute;metros.</li>'+
                                            '</ul><a href="#" style="padding:10px;" class="table-info">Da click para detalles completos</a>'+
                                            '</div></div>'+
                                            '<div style="background: url('+popUpBG+') no-repeat 0 -480px; width: 208px; height: 20px; display: block; margin: 0; padding: 0"></div>'+
                                            '</div></div>';

					jQuery('.bfm_fareHdr5').append(text_content);
				} else {
                                        text_content = '<div style="position:relative;">'+
                                            '<div class="info-table" style="display:none; position:absolute; top:8px; left:-65px; width:200px;z-index: 10;">'+
                                            '<div style="background: url('+popUpBG+') no-repeat; width: 208px; height: 20px; display: block"></div>'+
                                            '<div style="background: url('+popUpBG+') no-repeat 0 -25px; width: 194px; display: block; padding: 0 7px; text-align: center">'+
                                            '<span style="font-size: 16px;">Premier Plus</span>'+
											'<div><ul style="text-align: left; padding: 10px;">';
                                            if(local){
                                                text_content += '<li>Changes date/flight No charges</li>';
                                            } else {
                                                text_content += '<li>Changes date/flight No charges</li>';
                                            }

                                            text_content +=
                                            '<li>Unable to fly? Refund with no charge.</li>'+
                                            '<li>No worry about destinations or class change; reissue your ticket with no charge.</li>'+
                                            '<li>200% kilometers accrual bonus.</li>'+
                                            '</ul><a href="#" style="padding:10px;" class="table-info">Click here for full details</a>'+
                                            '</div></div>'+
                                            '<div style="background: url('+popUpBG+') no-repeat 0 -480px; width: 208px; height: 20px; display: block; margin: 0; padding: 0"></div>'+
                                            '</div></div>';

					jQuery('.bfm_fareHdr5').append(text_content);
				}
				jQuery('.bfm_fareHdr5').hover(
					function() {jQuery('.info-table', this).fadeIn("fast");},
					function() {jQuery('.info-table', this).fadeOut("fast");}
				);

				jQuery('.table-info').click(
					function() {jQuery('.containerTableInfo').fadeIn("fast");}
				);

				jQuery('.table-info-close').click(
					function() {jQuery('.containerTableInfo').fadeOut("fast");}
				);
				/*var getInputChecked= jQuery('.matrix_cal_body input', this).attr('checked')
					jQuery(this).css("background-color","#000000");*/
			}

		/* Paso 3 resItinReview */

			if( jQuery('#main-Page').hasClass('resItinReview') ){
				//alert('Paso 3');
				jQuery('.itinReviewFltHeader:first').css('display', 'none');
				jQuery('#steps-image').css('background-position', '0 -170px');
			}

                        jQuery('.pmt_paid_cl03').css({"font-size":"14px"});

		/* Paso 4 resItinDetailPAX */

			if( jQuery('#main-Page').hasClass('resItinDetailPAX') ){
				jQuery('#steps-image').css('background-position', '0 -170px')

                                if(idiomaType=="en"){
                                    jQuery("#Cont_Button").hide();
                                }
			}



		/* Paso 5 y elegir asientos viewSeatMap */

			if( jQuery('#main-Page').hasClass('viewSeatMap') && isSSR != null ){
				//alert('Paso 5');


				(function(){
					$("#currentSegmentPassengerList img").each(function(){
						$(this).attr("src", "https://s3.amazonaws.com/aeromexico/ancillaries/remove_icon.png");
					});
					var text1 = $("#seatSelection").children().eq(0),
						text2 = $("#seatSelection").children().eq(1),
						text3 = "";

					text3 = text2.html();
					text2.html(text1.html());
					text1.html(text3);

					var seatLabel = "Seat:";
					if(idiomaType == "es"){
						seatLabel = "Asiento:";
					}

					/* Cambio de íconos SeatMap */
					var iconsMap = {
						"v_avail.gif": "icon_available",
						"upperDeck.gif": "icon_availupper",
						"v_assigned.gif": "icon_unavailable",
						"v_exitleft.gif": "icon_exitleft",
						"v_exitleftwing.gif": "icon_exitleft",
						"v_exitright.gif": "icon_exitleft",
						"v_limited.gif": "icon_limited",
						"v_wallleft.gif": "icon_wallleft",
						"v_wallright.gif": "icon_wallleft",
						"v_lavatory.gif": "icon_lavatory",
						"v_wallleftwing.gif": "icon_wallleftwing",
						"v_wallrightwing.gif": "icon_wallleftwing",
						"v_galley.gif": "icon_galley",
						"v_bulkhead.gif": "icon_planebulkhead",
						"v_closet.gif": "icon_closet"
					},
						imgMap = [],
						imgChangeMap = {
							"v_avail.gif": "new_v_avail.png",
							"upperDeck.gif": "new_upperDeck.png",
							"v_assigned.gif": "new_v_assigned.png",
							"v_exitleft.gif": "new_v_exitleft.png",
							"v_exitrightwing.gif": "new_v_exitright.png",
							"v_exitleftwing.gif": "new_v_exitleft.png",
							"v_exitright.gif": "new_v_exitright.png",
							"v_limited.gif": "new_v_limited.png",
							"v_wallleft.gif": "new_v_wallleft.png",
							"v_wallright.gif": "new_v_wallright.png",
							"v_lavatory.gif": "new_v_lavatory.png",
							"v_wallleftwing.gif": "new_v_wallleftwing.png",
							"v_wallrightwing.gif": "new_v_wallrightwing.png",
							"v_galley.gif": "new_v_galley.png",
							"v_bulkhead.gif": "new_v_bulkhead.png",
							"v_closet.gif": "new_v_closet.png"
						},
						base = "https://s3.amazonaws.com/aeromexico/ancillaries/";


					jQuery("#seatMapTable td img").each(function(){
						var img = jQuery(this),
							flag = 0;
						jQuery.each(imgMap, function(a,b){
							var src = img.attr("src").split("/");
							if(iconsMap[src[src.length-1]] === b)
								flag++;
						});
						if(flag == 0){
							var src = img.attr("src").split("/"),
								item = iconsMap[src[src.length-1]];
							if(typeof item !== "undefined") imgMap.push(item);
						}
					});
					var divMap = jQuery("#seatMapLegend > div"),
						divMapLen = divMap.length;
					divMap.each(function(){
						var div = $(this).find("div").first(),
							flag = 0;
						jQuery.each(imgMap, function(a, b){
							if(div.hasClass(b)) flag++;
						});
						if(flag === 0) $(this).remove();
					});
					divMap.each(function(a){
						if(a === divMapLen - 1) return;
						$(this).removeClass("odd even")
						if(a + 2 % 2 == 0)
							$(this).addClass("even");
						else
							$(this).addClass("odd");
					});

					jQuery("#seatMapTable td").each(function(){
						var availability,
							availabilityLabel = "Available";
						if($(this).hasClass("unavailable")){
							availability = false;
							availabilityLabel = "Unavailable";
						} else availability = true;

						if(idiomaType == 'es' && availability) availabilityLabel = "Disponible";
						else if(idiomaType == 'es' && !availability) availabilityLabel = "No disponible";


						$(this).mouseover(function(a){
							if($(this).hasClass("available") || $(this).hasClass("unavailable") || $(this).hasClass("limited")){
								var img = $(this).find("img"),
									div = $("<div class='seatmap-advice'>"),
									content = $("<div class='seat-map-advice-content'>"),
									row = img.attr("id");
									row = row.split("_");
									row = row[row.length - 1];
									content.html("<p>" + seatLabel + " " + row + "<br>" + availabilityLabel +"</p>");
									div.append(content);
								img.after(div);
							}
						});
						$(this).mouseout(function(a){
							$(this).find(".seatmap-advice").remove();
						});
					});


					jQuery("#seatMapTable td img").each(function(){
						var src = $(this).attr("src").split("/"),
							img = $(this);
						src = src[src.length - 1];

						if(src === "v_empty.gif") img.parent().addClass("aisle");

						var newImage = imgChangeMap[src];
						if(typeof newImage !== "undefined"){
							img.attr("src", base + newImage);
						}
						
					});

					jQuery("#seatMapLegend img").each(function(){
						var src = $(this).attr("src").split("/"),
							img = $(this);
						src = src[src.length - 1];

						var newImage = imgChangeMap[src];
						if(typeof newImage !== "undefined"){
							img.attr("src", base + newImage);
						}
						
					});
				})();



				jQuery('#steps-image').css('background-position', '0 -255px')


				/* SSR */

				var getTabSSR = jQuery('.tabView').attr('id');

				/*var countCheckBox = jQuery('.ssrcontentleft').length;*/
				var getCheckBox = jQuery('.ssrcontentleft').html();

				var getButtonsSSR = jQuery('.button:last').html();
				var infoSSR = jQuery(".segDetails").html();

				infoSSR = new String(jQuery.trim( jQuery('.segDetails').html() ));
				infoSSR = infoSSR.replace(/([ \n\t]{1,})/g ," ");
				//alert(infoSSR);

				jQuery('.segDetails').replaceWith('<p class="ssr-info segDetails">' + infoSSR + '</p>');

				if (getCheckBox == null){
					var getCheckBox = '';
				}


                                var primero = true; //Primer usuario
                                var muestra_seguro_codigo = true; //Si codigo > 3999 no mostrar seguro
                                var primera_pestana = jQuery('.tabView li:first').text() == jQuery('.tabView li#current').text();

                                jQuery('.tabView li').each(function(index) {
                                            var tabViewText = jQuery(this).text();
                                            var tabViewNumber = tabViewText.replace('AM #',' ');
                                            if(parseInt(tabViewNumber) > 3999){
						 muestra_seguro_codigo = false;
                                                 return false;
                                            }
                                        });

				jQuery('.roundedBox:first').remove();
				var id;
				jQuery('.roundedBox').each(function(index) {

					id = index;
					getPassenger = jQuery('.leftContent', this).text();

					jQuery('.rtop', this).before('<div class="get-passenger">' + getPassenger + '</div>');

					jQuery('.leftContent', this).remove();
					jQuery('.rightContent', this).before('<div class="leftContent"><span class="icon-es-items"></span></div>');

					jQuery('p', this).remove();

                                        if(primero){
                                            jQuery('.rightContent div:first', this).before( idiomaType == "es" ?
                                            '<h3 class="title">Pago anticipado de exceso de equipaje</h3>\n\
                                            <div class="grid_icons">\n\
                                            <span class="icon-es-watch"></span>\n\
                                            </div>\n\
                                            <div class="grid_desc">\n\
                                           <h4 class="subtitle">Evita contratiempos en el aeropuerto, ahora puedes pagar de manera anticipada el Exceso de Equipaje.</h4>\n\
                                            <div>Conoce la pol&iacute;­tica de equipaje <a href="http://www.aeromexico.com/mx/SobreTuVuelo/AntesDeComprar/ReglamentosYPoliticas/politicas-equipaje.html" target="_blank">aqu&iacute;</a>\n\
                                            <h4 class="subtitle">Indica cu&aacute;ntas piezas extras pagar&aacute;s:</h4></div></div><div class="clear"></div>'
                                            :
                                            '<h3 class="title">Excess baggage prepayment </h3>\n\
                                            <div class="grid_icons">\n\
                                            <span class="icon-es-watch"></span>\n\
                                            </div>\n\
                                            <div class="grid_desc">\n\
                                           <h4 class="subtitle">Avoid mishaps at airport, now you can pay in advance the excess baggage.</h4>\n\
                                            <div>Read the baggage policy <a href="http://www.aeromexico.com/us/TravelInformation/BeforeYouPurchase/RegulationsAndPolicies/baggagePolicy.html" target="_blank">here</a>\n\
                                            <h4 class="subtitle">Point to how many extra pieces you want to pay:</h4></div></div><div class="clear"></div>'
                                        );
                                        } else {
                                            jQuery('.rightContent div:first', this).before('<h3 class="title">Pago anticipado de exceso de equipaje</h3>');
                                        }

					jQuery('.rightContent div:last', this).append('<a href="http://www.aeromexicocontigo.com/aerocontigo.html" target="_blank">Conoce m&aacute;s</a>');



                                        var vuelo_sencillo = !(jQuery('.tabView').find("ul li").size() > 1);

                                        var getSafetyInput = "";
                                        var equipDeport = "";
                                        var discountKMSE = "";
                                        var discountPTBE = "";
                                        var animalInHold = "";

                                        jQuery('.rightContent',this).each(function(){
                                            jQuery("div",this).each(function(){
                                                /*SEGURO*/
                                                if ( (jQuery(this).attr('class') == "ssrcontentright" &&
                                                (jQuery("input", this).val() == "TIDO" || jQuery("input",this).val() == "TIIN" || jQuery("input",this).val() == "TIIR" || jQuery("input",this).val() == "TIDR" ))
                                                || (jQuery(this).attr('class') == "ssrcontentleft" &&
                                                (jQuery("input",this).val() == "TIDO" || jQuery("input",this).val() == "TIIN" || jQuery("input",this).val() == "TIIR" || jQuery("input",this).val() == "TIDR" )) ) {

                                                if(muestra_seguro_codigo){
                                                    getSafetyInput +=  jQuery(this).html();
                                                }
                                                    jQuery(this).remove();
                                                }
                                                /*TERMINA SEGURO*/
                                                /*EQUIPO DEPORTIVO*/
                                                    if (((jQuery(this).attr('class') == "ssrcontentright" &&
                                                    (jQuery("input", this).val() == "XWIC" ))
                                                    || (jQuery(this).attr('class') == "ssrcontentleft" &&
                                                    (jQuery("input",this).val() == "XWIC" )))  ) {
                                                        if(vuelo_sencillo){
                                                            equipDeport += '<div class="ssrcontentleft">' + jQuery(this).html() + '</div>';
                                                        }
                                                        $(this).remove();
                                                    }
                                                if ( ((jQuery(this).attr('class') == "ssrcontentright" &&
                                                (jQuery("input", this).val() == "XSUC" ))
                                                || (jQuery(this).attr('class') == "ssrcontentleft" &&
                                                (jQuery("input",this).val() == "XSUC" ))) ) {
                                                    if(vuelo_sencillo){
                                                        equipDeport += '<div class="ssrcontentleft">' + jQuery(this).html() + '</div>';
                                                    }
                                                    $(this).remove();
                                                }

                                                if (((jQuery(this).attr('class') == "ssrcontentright" &&
                                                (jQuery("input", this).val() == "XDIC" ))
                                                || (jQuery(this).attr('class') == "ssrcontentleft" &&
                                                (jQuery("input",this).val() == "XDIC" ))) ) {
                                                    if(vuelo_sencillo){
                                                        equipDeport += '<div class="ssrcontentleft">' + jQuery(this).html() + '</div>';
                                                    }
                                                    $(this).remove();
                                                }

                                                if (((jQuery(this).attr('class') == "ssrcontentright" &&
                                                (jQuery("input", this).val() == "XHUC" ))
                                                || (jQuery(this).attr('class') == "ssrcontentleft" &&
                                                (jQuery("input",this).val() == "XHUC" ))) ) {
                                                    if(vuelo_sencillo && idiomaType == "es"){
                                                        equipDeport += '<div class="ssrcontentleft">' + jQuery(this).html() + '</div>';
                                                    }
                                                    $(this).remove();
                                                }
                                                if (  ((jQuery(this).attr('class') == "ssrcontentright" &&
                                                (jQuery("input", this).val() == "XFIC" ))
                                                || (jQuery(this).attr('class') == "ssrcontentleft" &&
                                                (jQuery("input",this).val() == "XFIC" ))) ) {
                                                    if(vuelo_sencillo){
                                                        equipDeport += '<div class="ssrcontentleft">' + jQuery(this).html() + '</div>';
                                                    }
                                                    $(this).remove();
                                                }
                                                if ( ( (jQuery(this).attr('class') == "ssrcontentright" &&
                                                (jQuery("input", this).val() == "XGOC" ))
                                                || (jQuery(this).attr('class') == "ssrcontentleft" &&
                                                (jQuery("input",this).val() == "XGOC" ))) ) {
                                                    if(vuelo_sencillo){
                                                        equipDeport += '<div class="ssrcontentleft">' + jQuery(this).html() + '</div>';
                                                    }
                                                    $(this).remove();
                                                }
                                                if (((jQuery(this).attr('class') == "ssrcontentright" &&
                                                (jQuery("input", this).val() == "XSKC" ))
                                                || (jQuery(this).attr('class') == "ssrcontentleft" &&
                                                (jQuery("input",this).val() == "XSKC" ))) ) {
                                                    if(vuelo_sencillo){
                                                        equipDeport += '<div class="ssrcontentleft">' + jQuery(this).html() + '</div>';
                                                    }
                                                    $(this).remove();
                                                }
                                                if (((jQuery(this).attr('class') == "ssrcontentright" &&
                                                (jQuery("input", this).val() == "XBBC" ))
                                                || (jQuery(this).attr('class') == "ssrcontentleft" &&
                                                (jQuery("input",this).val() == "XBBC" ))) ) {
                                                    if(vuelo_sencillo && idiomaType == "es"){
                                                        equipDeport += '<div class="ssrcontentleft">' + jQuery(this).html() + '</div>';
                                                    }
                                                    $(this).remove();
                                                }
                                                /*TERMINA EQUIPO DEPORTIVO*/
                                                /*Aerom&eacute;xico Discount Pass*/
                                                if (((jQuery(this).attr('class') == "ssrcontentright" &&
                                                (jQuery("input", this).val() == "PTBE" ))
                                                || (jQuery(this).attr('class') == "ssrcontentleft" &&
                                                (jQuery("input",this).val() == "PTBE" ))) ) {

                                                if( primera_pestana && idiomaType == "es" && (!origen_norte_america || !destino_norte_america) ){
                                                    discountPTBE += '<div class="ssrcontentleft">' + jQuery(this).html() +'<a href="http://www.aeromexico.com/mx/productos/aeromexico-discount-pass.html" target="_blank">Conoce m&aacute;s</a>' + '</div>';
                                                }
                                                    $(this).remove();
                                                }
                                                if (((jQuery(this).attr('class') == "ssrcontentright" &&
                                                (jQuery("input", this).val() == "KMSE" ))
                                                || (jQuery(this).attr('class') == "ssrcontentleft" &&
                                                (jQuery("input",this).val() == "KMSE" ))) ) {
                                                    if(primera_pestana &&  (origen_norte_america || destino_norte_america || select_from == "MEX" || select_to == "MEX")){
                                                        discountKMSE += '<div class="ssrcontentleft">' + jQuery(this).html()+( idiomaType == "es" ? '<a href="http://www.aeromexico.com/mx/productos/aeromexico-discount-pass.html" target="_blank" >Conoce m&aacute;s</a>' : '<a href="http://www.aeromexico.com/us/promotions/fare-sales-and-special-offers/aeromexico-discount-pass.html" target="_blank">Visit</a>') + '</div>';
                                                    }
                                                    $(this).remove();
                                                }
                                                /*TERMINA Aerom&eacute;xico Discount Pass*/
                                                /*ANIMAL IN HOLD*/

                                                if(idiomaType=="en"){
                                                    if (((jQuery(this).attr('class') == "ssrcontentright" &&
                                                    (jQuery("input", this).val() == "XAUS" ))
                                                    || (jQuery(this).attr('class') == "ssrcontentleft" &&
                                                    (jQuery("input",this).val() == "XAUS" ))) ) {
                                                        if(vuelo_sencillo){
                                                            animalInHold += '<div class="ssrcontentleft">' + jQuery(this).html() + '</div>';
                                                        }
                                                        $(this).remove();
                                                    }
                                                    if (((jQuery(this).attr('class') == "ssrcontentright" &&
                                                    (jQuery("input", this).val() == "XAUC" ))
                                                    || (jQuery(this).attr('class') == "ssrcontentleft" &&
                                                    (jQuery("input",this).val() == "XAUC" ))) ) {
                                                        if(vuelo_sencillo){
                                                            animalInHold += '<div class="ssrcontentleft">' + jQuery(this).html() + '</div>';
                                                        }
                                                        $(this).remove();
                                                    }
                                                    if (((jQuery(this).attr('class') == "ssrcontentright" &&
                                                    (jQuery("input", this).val() == "XAUW" ))
                                                    || (jQuery(this).attr('class') == "ssrcontentleft" &&
                                                    (jQuery("input",this).val() == "XAUW" ))) ) {
                                                        if(vuelo_sencillo){
                                                            animalInHold += '<div class="ssrcontentleft">' + jQuery(this).html() + '</div>';
                                                        }
                                                        $(this).remove();
                                                    }
                                                    if (((jQuery(this).attr('class') == "ssrcontentright" &&
                                                    (jQuery("input", this).val() == "XAUB" ))
                                                    || (jQuery(this).attr('class') == "ssrcontentleft" &&
                                                    (jQuery("input",this).val() == "XAUB" ))) ) {
                                                        if(vuelo_sencillo){
                                                            animalInHold += '<div class="ssrcontentleft">' + jQuery(this).html() + '</div>';
                                                        }
                                                        $(this).remove();
                                                    }
                                                }

                                                /*TERMINA ANIMAL IN HOLD*/
                                            });
                                        });
                                        getSafetyInput += getSafetyInput != "" ? " <a href='http://www.aeromexicocontigo.com' target='_blank'>Conoce m&aacute;s</a>" : "";

                                        jQuery("input[type='button']").each( function(){
                                            if(jQuery(this).val() == "Pagar" || jQuery(this).val() == "Continuar" ){
                                                jQuery(this).addClass("newSearch");
                                            }
                                        });
                                        //Animal in Hold
                                        if(animalInHold!=""){
                                             if(primero){
                                                var contigoHtml = '<div class="leftContent">\n\
                                                                        <span class="icon-es-animal"></span>\n\
                                                                   </div>\n\
                                                                   <div class="rightContent">\n\
                                                                   <h3 class="title">Animal Hold</h3>\n\\n\
                                                                    <div class="grid_desc">\n\
                                                                   </div>\n\
                                                                   <div class="clear"></div>' + animalInHold + '</div><div class="clear"></div>';
                                             } else {
                                                var contigoHtml = '<div class="leftContent"><span class="icon-es-animal"></span></div><div class="rightContent"><h3 class="title">Animal Hold</h3> ' + animalInHold + '</div><div class="clear"></div>';
                                             }
                                                jQuery('.rightContent:last', this).after('<div class="clear"></div>' + contigoHtml);
                                        }
                                        //Equipo deportivo
                                        if(equipDeport!=""){
                                             if(primero){

                                                 if(idiomaType=="es"){
                                                    var contigoHtml = '<div class="leftContent">\n\
                                                                        <span class="icon-es-deportivo"></span>\n\
                                                                   </div>\n\
                                                                   <div class="rightContent">\n\
                                                                   <h3 class="title">Equipo Deportivo</h3>\n\
                                                                   <div class="grid_desc"><div>Ahora te ofrecemos llevar contigo tu equipo deportivo. Disponible para: </div>\n\
                                                                   </div>\n\
                                                                   <div class="clear"></div>' + equipDeport + '</div><div class="clear"></div>';
                                                 } else {
                                                     var contigoHtml = '<div class="leftContent">\n\
                                                                        <span class="icon-es-deportivo"></span>\n\
                                                                   </div>\n\
                                                                   <div class="rightContent">\n\
                                                                   <h3 class="title">Sports Equipment</h3>\n\
                                                                   <div class="grid_desc"><div>We offer you the possibility to carry your sports equipment, available with:  </div>\n\
                                                                   </div>\n\
                                                                   <div class="clear"></div>' + equipDeport + '</div><div class="clear"></div>';
                                                 }

                                             } else {
                                                var contigoHtml = '<div class="leftContent"><span class="icon-es-deportivo"></span></div><div class="rightContent"><h3 class="title">Equipos deportivos</h3> ' + equipDeport + '</div><div class="clear"></div>';
                                             }
                                                jQuery('.rightContent:last', this).after('<div class="clear"></div>' + contigoHtml);
                                        }
                                        //Aerom&eacute;xico Discount Pass
                                        if(discountPTBE!=""){
                                             if(primero){

                                                var contigoHtml = '<div class="leftContent">\n\
                                                                        <span class="icon-es-pass"></span>\n\
                                                                   </div>\n\
                                                                   <div class="rightContent">\n\
                                                                   <h3 class="title">Descuentos en M&eacute;xico</h3>\n\
                                                                   <div class="grid_desc"><div>Disfruta de grandes descuentos en conciertos, cines, restaurantes, hoteles y m&aacute;s con las mejores marcas del mercado. Adem&aacute;s aprovecha el beneficio exclusivo de ganar 2 pases gratis para espect&aacute;culos y obras de teatro y acceso al cine VIP 2x1.</div>\n\
                                                                   </div>\n\
                                                                   <div class="clear"></div>' + discountPTBE  + '</div><div class="clear"></div>';

                                             } else {
                                                var contigoHtml = '<div class="leftContent"><span class="icon-es-pass"></span></div><div class="rightContent"><h3 class="title">Descuentos en M&eacute;xico</h3> ' + discountPTBE + '</div><div class="clear"></div>';
                                             }

                                                jQuery('.rightContent:last', this).after('<div class="clear"></div>' + contigoHtml);
                                                if(idiomaType=="es"){
                                                    jQuery('.rightContent:last', this).find(':checkbox').attr("checked","checked");
                                                }
                                        }
                                        if(discountKMSE!=""){
                                             if(primero){
                                                 if(idiomaType=="es"){
                                                    var contigoHtml = '<div class="leftContent">\n\
                                                                        <span class="icon-es-pass"></span>\n\
                                                                   </div>\n\
                                                                   <div class="rightContent">\n\
                                                                   <h3 class="title">Descuentos en Estados Unidos & Canad&aacute;</h3>\n\
                                                                   <div class="grid_desc"><div>Ahorra durante tu viaje en los Estados Unidos y Canad&aacute;, con miles de descuentos exclusivos en restaurantes, compras, hoteles, entretenimiento, atracciones, Alquiler de coches, campos de golf, eventos culturales y deportivos, tiendas de comestibles y mucho m&aacute;s.</div>\n\
                                                                   </div>\n\
                                                                   <div class="clear"></div>' + discountKMSE  + '</div><div class="clear"></div>';
                                                 } else {
                                                     var contigoHtml = '<div class="leftContent">\n\
                                                                        <span class="icon-es-pass"></span>\n\
                                                                   </div>\n\
                                                                   <div class="rightContent">\n\
                                                                   <h3 class="title">Discounts in the U.S. & Canada</h3>\n\
                                                                   <div class="grid_desc"><div>Save while you travel in the United States and Canada with thousands of exclusive discounts on Dining, Shopping, Hotels, Entertainment, Attractions, Car Rentals, Golf Courses, Cultural and Sports Events, Groceries and more.</div>\n\
                                                                   </div>\n\
                                                                   <div class="clear"></div>' + discountKMSE  + '</div><div class="clear"></div>';
                                                 }
                                             } else {
                                                 if(idiomaType=="es"){
                                                    var contigoHtml = '<div class="leftContent"><span class="icon-es-pass"></span></div><div class="rightContent"><h3 class="title">Descuentos en Estados Unidos & Canad&aacute;</h3> ' + discountKMSE + '</div><div class="clear"></div>';
                                                 } else {
                                                     var contigoHtml = '<div class="leftContent"><span class="icon-es-pass"></span></div><div class="rightContent"><h3 class="title">Discounts in the U.S. & Canada</h3> ' + discountKMSE + '</div><div class="clear"></div>';
                                                 }
                                             }

                                                jQuery('.rightContent:last', this).after('<div class="clear"></div>' + contigoHtml);

                                                jQuery('.rightContent:last', this).find(':checkbox').attr("checked",false);

                                        }
                                        //Seguro
                                        if(getSafetyInput!=""){
                                             if(primero){
                                                var contigoHtml = '<div class="leftContent">\n\
                                                                        <span class="icon-es-contigo"></span>\n\
                                                                   </div>\n\
                                                                   <div class="rightContent">\n\
                                                                   <h3 class="title">Beneficio en tierra, aire y durante tu estancia</h3>\n\
                                                                   <div class="grid_icons">\n\
                                                                   <span class="icon-es-time"></span>\n\
                                                                   <span class="icon-es-medic"></span> <span class="icon-es-pack">\n\
                                                                   </span> <span class="icon-es-hammer"></span>\n\
                                                                   </div> \n\
                                                                   <div class="grid_desc"><h4 class="subtitle">Aerom&eacute;xico est&aacute; contigo en todo tu viaje, ya que te protege</h4>\n\
                                                                   <div>\n\12 horas antes de salida del vuelo, duante tu estancia y,</div>\n\
                                                                   <div>12 horas despu&eacute;s del regreso a casa</div>\n\
                                                                   <h4 class="subtitle">Cuentas con diferentes beneficios y coberturas, algunas de &eacute;stas son:</h4>\n\
                                                                   <div>Gastos m&eacute;dicos</div>\n\
                                                                   <div>Muerte accidental</div>\n\
                                                                   <div>P&eacute;rdida de equipaje</div>\n\
                                                                   <div>Demora de equipaje</div>\n\
                                                                   <div>Servicios de Asistencia m&eacute;dica, legal y en viajes.</div><div class="clear"></div>\n\
                                                                   </div>\n\
                                                                   <div class="clear"></div>' + getSafetyInput + '</div><div class="clear"></div>';

                                             } else {
                                                var contigoHtml = '<div class="leftContent"><span class="icon-es-contigo"></span></div><div class="rightContent"><h3 class="title">Beneficio en tierra, aire y durante tu estancia</h3> ' + getSafetyInput + '</div><div class="clear"></div>';
                                             }
                                                jQuery('.rightContent:last', this).after('<div class="clear"></div>' + contigoHtml);
                                        }


                                        if(primero) primero = !primero;


					if( jQuery('.tabView').length > 1 ){
						jQuery('.leftContent:first', this).hide();
						jQuery('.rightContent:first', this).hide();
					} else {
                                            if( (jQuery("#Pax1_XBPI").length > 0 || jQuery("#Pax1_XBPM").length > 0 || jQuery("#Pax1_XBPU").length > 0 || jQuery("#Pax1_XBPB").length > 0) ){
						jQuery('.leftContent:first', this).show();
						jQuery('.rightContent:first', this).show();
                                                caso_especial = true;
                                            } else {
                                                jQuery('.leftContent:first', this).hide();
						jQuery('.rightContent:first', this).hide();
                                            }
                                        }

					if( jQuery('.tabView li').length > 1 ){
						jQuery('.leftContent:first', this).hide();
						jQuery('.rightContent:first', this).hide();
					}else {
                                            if(jQuery('.leftContent').length > 1){
                                                if( (jQuery("#Pax1_TIDR").length > 0 || jQuery("#Pax1_TIDO").length > 0 || jQuery("#Pax1_TIIN").length > 0 || jQuery("#Pax1_TIIR").length > 0) ){
                                                    jQuery('.leftContent:last', this).show();
                                                     jQuery('.rightContent:last', this).show();
                                                     caso_especial = true;
                                                } else {
                                                    jQuery('.leftContent:last', this).hide();
                                                    jQuery('.rightContent:last', this).hide();
                                                }
                                            }
                                        }

					if( jQuery('.tabView li').length == 1 ){
						jQuery('.icon-es-items').parent().parent().children().show();
					}

					if( jQuery('.tabView li').length > 1 ){
                                            jQuery('.icon-es-items').parent().parent().children().each(function(index){
                                                if(jQuery("input", this).val() == "XBPM" || jQuery("input",this).val() == "XBPI" || jQuery("input",this).val() == "XBPU" || jQuery("input",this).val() == "XBPB" ){
                                                    jQuery(this).hide();
                                                }
                                            });
                                            //jQuery('.icon-es-items').parent().parent().children().hide();
					}
				});

				jQuery('.button:first').css({'padding': '0'});

				jQuery('#ssr-content').append('<style>#ssr-content{background:#FFFFFF;} .leftContent, .rightContent{margin-bottom:20px; padding-bottom:0;} .title{color:#004990; margin-bottom:10px;} .subtitle{color:#004990; font-size:14px; font-weight:normal;} .get-passenger{font-size:16px; text-transform:uppercase; font-weight:bold;} .grid_icons{float:left; display:block; width:35px; margin-bottom:10px;} .segDetails{font-size:15px;} .roundedBoxContent div .ssrcontentleft{float:none; width:auto; margin-left:0;} .grid_desc{font-size:14px; color:#4B4B4B; width:395px; display:block; float:left; margin-left:10px; margin-bottom:10px;} .roundedBoxContent div .ssrcontentleft input, .roundedBoxContent div span.ssrcontentright input{margin-left:0 !important; margin-right:0 !important;} .tabView li#current{background-color:#FFFFFF !important;}	.button .newSearch{background-image: url(https://s3.amazonaws.com/aeromexico/bg_boton_gray.png); display:block }	#ssr-content{background:#FFFFFF;}	.tabView h2{padding-left:10px; font-size:12px; font-weight:bold;} .icon-es-contigo, .icon-es-items, .icon-es-time, .icon-es-medic, .icon-es-pack, .icon-es-hammer, .icon-es-watch{background:url(https://s3.amazonaws.com/aeromexico/icons_ssr.png); display:block;}		.icon-es-contigo{background-position:0 0; width:109px; height:63px; margin-top: 20px;} .icon-es-items{background-position:0 -84px; width:109px; height:77px; margin-top: 20px;}	.icon-es-time{background-position:0 -63px; width:35px; height:21px; margin-top: 35px; margin-left:auto;} .icon-es-watch{background-position:0 -160px; width:19px; height:23px; margin-top: 5px; margin-left:auto;}	.icon-es-medic{background-position:-35px -63px; width:25px; height:21px; margin-top: 35px; margin-left:auto;}	.icon-es-pack{background-position:-60px -63px; width:22px; height:16px; margin-top: 10px; margin-left:auto;}   	.icon-es-hammer{background-position:-82px -63px; width:25px; height:17px; margin-top: 10px; margin-left:auto; }'+
                                    '.icon-es-animal{ background: url(https://s3.amazonaws.com/aeromexico/servicios_animales.png) no-repeat scroll 9px -8px transparent; width:200px; height:50px; margin-top: 10px; margin-left:auto; display:block; }'+
                                    '.icon-es-pass{background: url(https://s3.amazonaws.com/aeromexico/servicios_pass.png)          no-repeat scroll 9px -8px transparent; width:200px; height:50px; margin-top: 10px; margin-left:auto; display:block;}'+
                                    '.icon-es-deportivo{background: url(https://s3.amazonaws.com/aeromexico/servicios_deportes.png) no-repeat scroll 9px -4px transparent; width:200px; height:90px; margin-top: 10px; margin-left:auto; display:block;} '+
                                    '</style>');

				var ssrCode_2 = ssrCode[0];

				var getSsrCode = jQuery("#ssr-content script:contains('ssrCode')").html();


                                if(idiomaType=="es"){
                                    jQuery('.button:last input:last').addClass('newSearch');
                                } else{

                                    jQuery('.button:last input').each(function(){
                                        if(jQuery(this).val()=="Pay SSR Selection" || jQuery(this).val()=="Continue"){
                                            jQuery(this).val("Purchase");
                                            jQuery(this).css('background' , 'url("https://s3.amazonaws.com/aeromexico/bg_boton_orange.png")');
                                        }
                                    });
                                }

				function getUrlVars() {
					var vars = {};
					var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
                                            vars[key] = value;
					});
					return vars;
				}

				var first = getUrlVars()["posid"];
				var second = getUrlVars()["sid"];
				var k = getUrlVars()["k"];

				if (
				( (
				(jQuery('.ssr-info:contains("(ACA) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(AGU) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(BJX) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(CEN) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(CJS) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(CME) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(CPE) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(CUL) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(CUN) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(CUU) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(HUX) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(CVM) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(CZM) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(DGO) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(GDL) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(HMO) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(LAP) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(MAM) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(MEX) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(MID) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(MLM) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(MTT) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(MTY) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(MZT) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(MXL) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(NLD) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(OAX) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(PAZ) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(PVR) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(QRO) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(REX) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(SJD) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(SLP) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(TAM) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(TAP) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(TGZ) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(TIJ) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(TRC) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(VER) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(VSA) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(ZIH) A ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(ZCL) A ")').length > 0)
				|| (jQuery('.ssr-info:contains("(ACA) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(AGU) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(BJX) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(CEN) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(CCS) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(CLQ) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(CJS) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(CME) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(CPE) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(CUL) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(CUN) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(CUU) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(HUX) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(CVM) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(CZM) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(DGO) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(GDL) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(HMO) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(LAP) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(MAM) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(MEX) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(MID) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(MLM) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(MTT) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(MTY) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(MZT) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(MXL) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(NLD) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(OAX) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(PAZ) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(PVR) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(QRO) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(REX) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(SJD) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(SLP) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(TAM) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(TAP) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(TGZ) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(TIJ) To ")').length > 0 )
        || (jQuery('.ssr-info:contains("(TLC) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(TRC) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(VER) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(VSA) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(ZIH) To ")').length > 0 )
				|| (jQuery('.ssr-info:contains("(ZCL) To ")').length > 0)
				)
				|| (k == 1) ) && (k != 2)
				) {
					jQuery('form').get(0).setAttribute('action', '/meridia?posid='+first+'&sid='+second+'&k=1&');
					jQuery(".button input:first").css('display', 'block');
					//jQuery(".button input:last").css('display', 'none');
					jQuery(".button:first input").css('display', 'none');

				} else {
					jQuery('form').get(0).setAttribute('action', '/meridia?posid='+first+'&sid='+second+'&k=2&');
					jQuery(".button:first input").css('display', 'none');
					jQuery(".button input:last").css('display', 'block');
					jQuery('.gridssr1_1').remove();
					jQuery('.gridssr1_2').remove();
					jQuery('.footer-ssr-content').remove();

                                        if(!caso_especial){
                                           // jQuery('.roundedBoxContent').hide();
                                        }
				}




			} else if ( jQuery('#main-Page').hasClass('viewSeatMap') ) {
				//alert('Paso asientos');
			}

		/* Paso 6 resItinDetailPayment */

			if( jQuery('#main-Page').hasClass('resItinDetailPayment') ){
				//alert('Paso 6');

				/*Error Begin:AIRCRAFTNAMES:788 */
				$(".aircraft").each(function(a){
				    var newName = jQuery(this).html().replace("Boeing 787-8", "Boeing 787");
				    jQuery(this).html(newName);
				    newName = jQuery(this).html().replace("AIRCRAFTNAMES:788", "Boeing 787");
				    jQuery(this).html(newName);
				});
				/*Error End:AIRCRAFTNAMES:788 */
				jQuery('#steps-image').css('background-position', '0 -340px');
				(function(){  ////Ocultar el icono de Paypal en el paso de pago si el vuelo seleccionado es en menos de 24 horas 
			      var fecha = jQuery(".flightOptions .flight .column.flightFive p").first().html(),
			      	hora = jQuery(".flightOptions .flight .column.two p").eq(1).html();
			        fecha_split = fecha.split(","),
			        dia_split = fecha_split[1].split(" "),
			        day = dia_split[2],
			        month = fecha_split[0],
			        date_array = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre", "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"],
			        fecha = new Date(),
			        current_month = c_month = fecha.getMonth(),
			        month_pos = 0,								        
					year = fecha.getFullYear();		
					
			        hora = hora.replace(new RegExp("\t|\n|\r", "g"),"").replace(/^\s+|\s+$/g, '');
			        horas = hora.split(" ");
			      var ampm = horas[1],
			      	horasAmpm = horas[0];
			      var horaF = horas[0].split(":"), horaSalida = parseInt(horaF[0], 10), minutoSalida = horaF[1];
			      if(ampm == "PM")
			      	horaSalida += 12;

			        month = month.replace(new RegExp("\t|\n|\r", "g"),"").toLowerCase();

			      for(;date_array[month_pos] != month && month_pos < date_array.length ; month_pos++);

			      if(month_pos > 12) month_pos -= 12;

			      if(c_month > month_pos)
			        year = year + 1;

					
			      //JM 03Jun2013
				  var fechaAhora  = new Date();
				  var fecha24Hrs  = new Date();
				  var fecha72Hrs  = new Date();
				  
				  fecha24Hrs.setDate(fechaAhora.getDate() + 1);
				  fecha72Hrs.setDate(fechaAhora.getDate() + 3);				  
				  fechaVuelo = new Date(year, month_pos, day, horaSalida, minutoSalida, 0);
				  
				  //Si la fecha72Hrs es mayor a la fecha de vuelo deshabilitmos checkbox PayPal
				  if(fecha72Hrs > fechaVuelo){
					 //jQuery("#PP_CheckBoxHeader").find("input[type='checkbox']").attr("disabled", "disabled");
					 //jQuery("#PPDC_CheckBoxHeader").find("input[type='checkbox']").attr("disabled", "disabled");
					 					 
					 document.getElementById('PPPaymentChecked').setAttribute("style", "visibility : hidden;");
					 document.getElementById('PPDCPaymentChecked').setAttribute("style", "visibility : hidden;");
					 jQuery("#PP_CheckBoxHeader").find("input[type='checkbox']").attr("disabled", true);
					 jQuery("#PPDC_CheckBoxHeader").find("input[type='checkbox']").attr("disabled", true);
				  }
				  
				  //Si la fecha24Hrs es mayor a la fecha de vuelo deshabilitmos checkbox Pago Referenciado
				  if(fecha24Hrs > fechaVuelo){
					 //jQuery("#thirdPartySection").find("input[type='checkbox']").attr("disabled", "disabled");
					 
					 document.getElementById('remotePaymentChecked').setAttribute("style", "visibility : hidden;");
					 jQuery("#thirdPartySection").find("input[type='checkbox']").attr("disabled", true);
				  }
					
			    })();
			}

		/* Paso 7 pnrReview */

			if( jQuery('#main-Page').hasClass('pnrReview') ){
				//alert('Paso 7');
				jQuery('#steps-image').css('background-position', '0 -425px');
				jQuery(".remotePaymentReferenceProviders").eq(1).html("Banamex, Bancomer, Santander, Soriana, Telecomm, HSBC");

				/*Error Begin:AIRCRAFTNAMES*/
				jQuery(".aircraft").each(function(a){
					var newName = jQuery(this).html().replace("Boeing 787-8", "Boeing 787");
				    jQuery(this).html(newName);
				    newName = jQuery(this).html().replace("AIRCRAFTNAMES:788", "Boeing 787");
				    jQuery(this).html(newName);

				});
				/*Error End:AIRCRAFTNAMES*/
			}

	});


/* TaxiWeb*/
function popup(url, name, w, h) {
if ( !w>0 ) {
w = screen.availWidth;
}
if ( !h>0 ) {
h = screen.availHeight;
}
window.open(url, name, 'toolbar=0,scrollbars=1,location=0,statusbar=1,menubar=0,resizable=1,width='+w+',height='+h);
}