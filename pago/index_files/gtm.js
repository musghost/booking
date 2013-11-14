// Copyright 2012 Google Inc. All rights reserved.
// Container Version: 1
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){
var k=this,aa=null;/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var ba=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,ca=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},da=function(a){var b;if(!(b=!a)){var c;if(null==a)c=String(a);else{var d=ba.exec(Object.prototype.toString.call(Object(a)));c=d?d[1].toLowerCase():"object"}b="object"!=c||a.nodeType||a==a.window}if(b)return!1;try{if(a.constructor&&!ca(a,"constructor")&&!ca(a.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}for(var f in a);return void 0===
f||ca(a,f)};var ea=function(){},q=function(a){return"function"==typeof a},x=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},fa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ga=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},y=function(a){return Math.round(Number(a))||0},ha=function(a){var b=[];if(x(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},A=function(){this.prefix=
"gtm.";this.w={}};A.prototype.set=function(a,b){this.w[this.prefix+a]=b};A.prototype.get=function(a){return this.w[this.prefix+a]};A.prototype.contains=function(a){return void 0!==this.get(a)};
var ia=function(a,b,c){try{return a["1"](a,b||ea,c||ea)}catch(d){}return!1},ja=function(a,b){function c(b,c){a.contains(b)||a.set(b,[]);a.get(b).push(c)}for(var d=ga(b).split("&"),e=0;e<d.length;e++)if(d[e]){var f=d[e].indexOf("=");0>f?c(d[e],"1"):c(d[e].substring(0,f),d[e].substring(f+1))}},ka=function(a){var b=a?a.length:0;return 0<b?a[b-1]:""},la=function(a){for(var b=0;b<a.length;b++)a[b]()},ma=function(){var a=this;this.p=!1;this.K=[];this.J=[];this.Aa=function(){a.p||la(a.K);
a.p=!0};this.za=function(){a.p||la(a.J);a.p=!0}},na=function(){this.M=[];this.o=0};na.prototype.addListener=function(a){this.M.push(a)};var oa=function(a,b){if(!b.p){a.o++;var c=function(){0<a.o&&a.o--;0<a.o||la(a.M)};b.K.push(c);b.J.push(c)}},pa=(new Date).getTime();var B=window,D=document,qa=navigator,G=function(a,b){var c=B[a],d="var "+a+";";if(k.execScript)k.execScript(d,"JavaScript");else if(k.eval)if(null==aa&&(k.eval("var _et_ = 1;"),"undefined"!=typeof k._et_?(delete k._et_,aa=!0):aa=!1),aa)k.eval(d);else{var e=k.document,f=e.createElement("script");f.type="text/javascript";f.defer=!1;f.appendChild(e.createTextNode(d));e.body.appendChild(f);e.body.removeChild(f)}else throw Error("goog.globalEval not available");B[a]=void 0===c?b:c;return B[a]},H=function(a,
b,c){return("http:"==B.location.protocol?b:a)+c},ra=function(a){var b=D.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)},sa=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},J=function(a,b,c){var d=D.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;sa(d,b);c&&(d.onerror=c);ra(d)},ta=function(a,b){var c=D.createElement("iframe");c.height="0";c.width="0";c.style.display=
"none";c.style.visibility="hidden";ra(c);sa(c,b);void 0!==a&&(c.src=a);return c},K=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a},L=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},M=function(a){B.setTimeout(a,0)},ua=!1,va=[],wa=function(a){if(!(a&&"readystatechange"==a.type&&"interactive"!=D.readyState&&"complete"!=D.readyState||ua)){ua=!0;for(var b=0;b<va.length;b++)va[b]()}},
xa=0,ya=function(){if(!ua&&140>xa){xa++;try{D.documentElement.doScroll("left"),wa()}catch(a){B.setTimeout(ya,50)}}},za=!1,Aa=[],Ba=function(){if(!za){za=!0;for(var a=0;a<Aa.length;a++)Aa[a]()}};var Ca=new A,Da=new A,Ea=ea,N=[],Fa=!1,Ga=function(a){var b=!1;return function(){!b&&q(a)&&M(a);b=!0}},Ia=function(){for(var a=!1;!Fa&&0<N.length;){Fa=!0;var b;var c=N.shift(),d=void 0;for(d in c)if(c.hasOwnProperty(d)){var e=d,f=c[d];Ca.set(e,f);for(var g=Ha,h=f,n={},l=n,m=e.split("."),r=0;r<m.length-1;r++)l=l[m[r]]={};l[m[m.length-1]]=h;g(n,Da.w)}var p=c.event;if(p){var s=Ga(c.eventCallback),E=c.eventTimeout;E&&B.setTimeout(s,Number(E));b=Ea(p,s)}else b=!1;a=b||a;Fa=!1}return!a},O=function(a,b){if(2==
b){for(var c=Da.w,d=a.split("."),e=0;e<d.length;e++){if(void 0===c[d[e]])return;c=c[d[e]]}return c}return Ca.get(a)},Ha=function(a,b){for(var c in a)if(ca(a,c)){var d=a[c];x(d)?(x(b[c])||(b[c]=[]),Ha(d,b[c])):da(d)?(da(b[c])||(b[c]={}),Ha(d,b[c])):b[c]=d}};var Ja={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Ka={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],
nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},La=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Ma=function(){var a=O("gtm.whitelist"),b=a&&La(ha(a),Ja),c=O("gtm.blacklist")||O("tagTypeBlacklist"),d=c&&La(ha(c),Ka),e={};return function(f){var g=f&&f["1"];if(!g)return!0;if(void 0!==e[g.b])return e[g.b];var h=!0;if(a)e:{if(0>fa(b,g.b))if(g.c&&0<g.c.length)for(var n=0;n<g.c.length;n++){if(0>
fa(b,g.c[n])){h=!1;break e}}else{h=!1;break e}h=!0}var l=!1;if(c){var m;if(!(m=0<=fa(d,g.b)))e:{for(var r=g.c||[],p=new A,s=0;s<d.length;s++)p.set(d[s],!0);for(s=0;s<r.length;s++)if(p.get(r[s])){m=!0;break e}m=!1}l=m}return e[g.b]=!h||l}};var Na=null;var _e=function(){return Na};_e.b="e";_e.c=["google"];var _f=function(){return String(O("gtm.referrer")||D.referrer)};_f.b="f";_f.c=["google"];
var Oa=D.createElement("a"),Pa=function(a){var b=B.location,c=b.hash?b.href.replace(b.hash,""):b.href,d=O("gtm.url");d&&(Oa.href=c=String(d),b=Oa);var e=(b.protocol.replace(":","")||B.location.protocol.replace(":","")).toLowerCase();switch(a["0"]){case "protocol":c=e;break;case "host":c=(b.hostname||B.location.hostname).split(":")[0].toLowerCase();break;case "port":c=String(1*(b.hostname?b.port:B.location.port)||("http"==e?80:"https"==e?443:""));break;case "path":c="/"==b.pathname.substr(0,1)?b.pathname:"/"+b.pathname;
break;case "query":c=b.search.replace("?","");break;case "fragment":c=b.hash.replace("#","")}
return c},_u=Pa;_u.b="u";_u.c=["google"];var _eq=function(a){return String(a[""])==String(a[""])};_eq.b="eq";_eq.c=["google"];var P,Ua,Va,Wa,Xa=function(){return k.navigator?k.navigator.userAgent:null};Wa=Va=Ua=P=!1;var Ya;if(Ya=Xa()){var Za=k.navigator;P=0==Ya.lastIndexOf("Opera",0);Ua=!P&&(-1!=Ya.indexOf("MSIE")||-1!=Ya.indexOf("Trident"));Va=!P&&-1!=Ya.indexOf("WebKit");Wa=!P&&!Va&&!Ua&&"Gecko"==Za.product}var R=Ua,$a=Wa,cb=Va,db=function(){var a=k.document;return a?a.documentMode:void 0},eb;
e:{var fb="",gb;if(P&&k.opera)var hb=k.opera.version,fb="function"==typeof hb?hb():hb;else if($a?gb=/rv\:([^\);]+)(\)|;)/:R?gb=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:cb&&(gb=/WebKit\/(\S+)/),gb)var ib=gb.exec(Xa()),fb=ib?ib[1]:"";if(R){var jb=db();if(jb>parseFloat(fb)){eb=String(jb);break e}}eb=fb}
var kb=eb,lb={},S=function(a){var b;if(!(b=lb[a])){for(var c=0,d=String(kb).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",n=e[g]||"",l=RegExp("(\\d*)(\\D*)","g"),m=RegExp("(\\d*)(\\D*)","g");do{var r=l.exec(h)||["","",""],p=m.exec(n)||["","",""];if(0==r[0].length&&0==p[0].length)break;c=((0==r[1].length?0:parseInt(r[1],10))<(0==p[1].length?0:parseInt(p[1],10))?-1:(0==r[1].length?
0:parseInt(r[1],10))>(0==p[1].length?0:parseInt(p[1],10))?1:0)||((0==r[2].length)<(0==p[2].length)?-1:(0==r[2].length)>(0==p[2].length)?1:0)||(r[2]<p[2]?-1:r[2]>p[2]?1:0)}while(0==c)}b=lb[a]=0<=c}return b},mb=k.document,nb=mb&&R?db()||("CSS1Compat"==mb.compatMode?parseInt(kb,10):5):void 0;if($a||R){var ob;if(ob=R)ob=R&&9<=nb;ob||$a&&S("1.9.1")}R&&S("9");var tb=function(a,b){var c="";R&&!pb(a)&&(c='<script>document.domain="'+document.domain+'";\x3c/script>'+c);var d="<!DOCTYPE html><html><head><script>var inDapIF=true;\x3c/script>"+c+"</head><body>"+b+"</body></html>";if(qb)a.srcdoc=d;else if(rb){var e=a.contentWindow.document;e.open("text/html","replace");e.write(d);e.close()}else sb(a,d)},qb=cb&&"srcdoc"in document.createElement("iframe"),rb=$a||cb,sb=function(a,b){R&&S(7)&&!S(10)&&ub(b)&&(b=vb(b));var c=function(){a.contentWindow.goog_content=
b;a.src="javascript:window.goog_content"};R&&!pb(a)?wb(a,c):c()},pb=function(a){try{return Boolean(a.contentWindow.document)}catch(b){return!1}},xb=0,wb=function(a,b){var c="goog_rendering_callback"+xb++;window[c]=b;R&&S(6)&&!S(7)?a.src="javascript:'<script>window.onload = function() { document.write(\\'<script>(function() {document.domain = \""+document.domain+'";var continuation = window.parent.'+c+";window.parent."+c+" = null;continuation()})()<\\\\/script>\\');document.close();};\x3c/script>'":
a.src="javascript:'<script>(function() {document.domain = \""+document.domain+'";var continuation = window.parent.'+c+";window.parent."+c+" = null;continuation();})()\x3c/script>'"},ub=function(a){for(var b=0;b<a.length;++b)if(127<a.charCodeAt(b))return!0;return!1},vb=function(a){for(var b=unescape(encodeURIComponent(a)),c=Math.floor(b.length/2),d=[],e=0;e<c;++e)d[e]=String.fromCharCode(256*b.charCodeAt(2*e+1)+b.charCodeAt(2*e));1==b.length%2&&(d[c]=b.charAt(b.length-1));return d.join("")};/*
 Copyright (c) 2013 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var Fb=function(a,b,c,d){return function(e){e=e||B.event;var f=e.target||e.srcElement||{},g=!1;if("LINK_CLICK"==a){for(var h=f,n=0;h&&"a"!=String(h.tagName).toLowerCase()&&100>n;n++)h=h.parentElement;h&&"a"!=String(h.tagName).toLowerCase()&&(h=null);f=h;g=e.ctrlKey||e.shiftKey||null==e.which&&4==e.button||null!=e.which&&2==e.which}if(e.defaultPrevented||!1===e.returnValue||e.Ma&&e.Ma()){if(!c&&f){var l={simulateDefault:!1};T(a,f,l,d)}}else{var m=/(iPad|iPhone|iPod)/g.test(qa.userAgent);if(f){var l=
{},r=T(a,f,l,d);l.simulateDefault=!r&&b&&!g;if(l.simulateDefault){var p=Eb(f).toLowerCase();switch(p){case "_blank":m?(l.simulateDefault=!1,g=!0):(l.targetWindowName="gtm_autoEvent_"+(new Date).getTime(),l.targetWindow=B.open("",l.targetWindowName));break;case "":l.targetWindow=B.frames.self;break;case "_self":case "_parent":case "_top":l.targetWindow=B.frames[p.substring(1)];break;default:m&&!B.frames[p]?(l.simulateDefault=!1,g=!0):(B.frames[p]||(l.targetWindowName=p),l.targetWindow=B.frames[p]||
B.open("",p))}!g&&e.preventDefault&&e.preventDefault()}e.returnValue=r||!b||g;return e.returnValue}return!0}}},T=function(a,b,c,d){var e=d||2E3,f={"gtm.element":b,"gtm.elementClasses":b.className,"gtm.elementId":b["for"]||b.id,"gtm.elementTarget":b.formTarget||b.target||""};switch(a){case "LINK_CLICK":f.event="gtm.linkClick";f["gtm.elementUrl"]=b.href;f.eventTimeout=e;f.eventCallback=Gb(b,c);break;case "FORM_SUBMIT":f.event="gtm.formSubmit";f["gtm.elementUrl"]=b.action;c.jsFormSubmit?c.waitForTags&&
(f.eventTimeout=e,f.eventCallback=function(){D.gtmSubmitFormNow=!0;b.submit()}):(f.eventTimeout=e,f.eventCallback=Hb(b,c));break;case "CLICK":f.event="gtm.click";f["gtm.elementUrl"]=b.formAction||b.action||b.href||b.src||b.code||b.codebase||"";break;default:return!0}return B["dataLayer"].push(f)},Eb=function(a){var b=a.target;if(!b)switch(String(a.tagName).toLowerCase()){case "a":case "form":b="_self"}return b},Gb=function(a,b,c){return function(){b.simulateDefault&&(b.targetWindow?b.targetWindow.location.href=
a.href:(c=c||(new Date).getTime(),500>(new Date).getTime()-c&&B.setTimeout(Gb(a,b,c),25)))}},Hb=function(a,b,c){return function(){if(b.simulateDefault)if(b.targetWindow){var d;b.targetWindowName&&(d=a.target,a.target=b.targetWindowName);D.gtmSubmitFormNow=!0;a.submit();b.targetWindowName&&(a.target=d)}else c=c||(new Date).getTime(),500>(new Date).getTime()-c&&B.setTimeout(Hb(a,b,c),25)}},Ib=function(a,b,c,d){var e,f;switch(a){case "CLICK":if(D.gtmHasClickListenerTag)return;D.gtmHasClickListenerTag=
!0;e="click";f=function(a){T("CLICK",a.target||a.srcElement||{},{},d);return!0};break;case "LINK_CLICK":if(D.gtmHasLinkClickListenerTag)return;D.gtmHasLinkClickListenerTag=!0;e="click";f=Fb(a,b||!1,c||!1,d);break;case "FORM_SUBMIT":if(D.gtmHasFormSubmitListenerTag)return;D.gtmHasFormSubmitListenerTag=!0;e="submit";f=Fb(a,b||!1,c||!1,d);break;default:return}L(D,e,f,!1)};var Lb,Mb;
var Ub=function(a){return function(){}},Vb=function(a){return function(){}};var yc=function(){this.g=[]};yc.prototype.set=function(a,b){this.g.push([a,b]);return this};yc.prototype.v=function(a,b){for(var c={},d=0;d<this.g.length;d++){var e=W(this.g[d][0],a,b),f=W(this.g[d][1],a,b);c[e]=f}return c};var X=function(a){this.index=a};X.prototype.v=function(a,b){var c=zc[this.index];if(c&&!b(c)){var d=c["2"];if(a){if(a.get(d))return;a.set(d,!0)}c=W(c,a,b);a&&a.set(d,!1);return ia(c)}};
for(var _M=function(a){return new X(a)},Bc=function(a){this.v=function(b,c){for(var d=[],e=0;e<a.length;e++)d.push(W(Ac[a[e]],b,c));return d.join("")}},_T=function(a){return new Bc(arguments)},Cc=function(a){function b(b){for(var d=1;d<a.length;d++)if(a[d]==b)return!0;return!1}this.v=function(c,d){if(a[0]instanceof X&&b(8)&&b(16))return'google_tag_manager["GTM-PTTVTM"].macro('+
a[0].index+")";for(var e=String(W(a[0],c,d)),f=1;f<a.length;f++)e=V[a[f]](e);return e}},_E=function(a,b){return new Cc(arguments)},W=function(a,b,c){var d=a;if(a instanceof X||a instanceof yc||a instanceof Bc||a instanceof Cc)return a.v(b,c);if(x(a))for(var d=[],e=0;e<a.length;e++)d[e]=W(a[e],b,c);else if(a&&"object"==typeof a){var d={},f;for(f in a)a.hasOwnProperty(f)&&(d[f]=W(a[f],b,c))}return d},Dc=function(a,b){var c=b[a],d=c;if(c instanceof X||c instanceof Cc||c instanceof Bc)d=c;else if(x(c))for(var d=
[],e=0;e<c.length;e++)d[e]=Dc(c[e],b);else if("object"==typeof c){var d=new yc,f;for(f in c)c.hasOwnProperty(f)&&d.set(b[f],Dc(c[f],b))}return d},Gc=function(a,b){for(var c=b?b.split(","):[],d=0;d<c.length;d++){var e=c[d]=c[d].split(":");0==a&&(e[1]=Ac[e[1]]);if(1==a)for(var f=Ec(e[0]),e=c[d]={},g=0;g<f.length;g++){var h=Fc[f[g]];e[h[0]]=h[1]}if(2==a)for(g=0;4>g;g++)e[g]=Ec(e[g])}return c},Ec=function(a){var b=[];if(!a)return b;for(var c=0,d=0;d<a.length&&c<Hc;c+=6,d++){var e=a&&a.charCodeAt(d)||
65;if(65!=e){var f=0,f=65<e&&90>=e?e-65:97<=e&&122>=e?e-97+26:95==e?63:48<=e?e-48+52:62;1&f&&b.push(c);2&f&&b.push(c+1);4&f&&b.push(c+2);8&f&&b.push(c+3);16&f&&b.push(c+4);32&f&&b.push(c+5)}}return b},Hc=10,Ic=[_e,'event',_u,'url path','path',_f,'referrer','url','url hostname','host'],Jc=[],Kc=0;Kc<Ic.length;Kc++)Jc[Kc]=Dc(Kc,Ic);var Ac=Jc,Fc=Gc(0,"1:0,2:1,1:2,2:3,0:4,1:5,2:6,2:7,2:8,0:9"),zc=Gc(1,"D,c,gB,EC,EM"),Lc=Gc(1,""),Y=Gc(1,""),Mc=Gc(2,"");var Uc=function(){var a=[];return function(b,c){if(void 0===a[b]){var d=Lc[b]&&W(Lc[b],new A,c);a[b]=[d&&ia(d),d]}return a[b]}},Vc=function(a,b){for(var c=b[0],d=0;d<c.length;d++)if(!a.i(c[d],a.d)[0])return!1;for(var e=b[2],d=0;d<e.length;d++)if(a.i(e[d],a.d)[0])return!1;return!0},Wc=Ea=function(a,b){Na=a;O("tagTypeBlacklist");for(var c={name:a,Ba:b||ea,t:Ec(),u:Ec(),i:Uc(),d:Ma()},d=0;d<Mc.length;d++)if(Vc(c,Mc[d])){for(var e=c,f=Mc[d],g=f[1],h=0;h<g.length;h++)e.t[g[h]]=!0;for(var n=f[3],h=0;h<
n.length;h++)e.u[n[h]]=!0}var l=[];for(var m=0;m<Hc;m++)if(c.t[m]&&!c.u[m])if(c.d(Y[m])){}else{l[m]=W(Y[m],new A,c.d);}c.N=l;for(var r=new na,p=0;p<Hc;p++)if(c.t[p]&&!c.u[p]&&!c.d(Y[p])){var s=c.N[p],E=new ma;E.K.push(Ub(s));E.J.push(Vb(s));oa(r,E);ia(s,E.Aa,E.za)}r.addListener(c.Ba);0<r.o||la(r.M);Na=null;return 0<c.N.length};var $={set:function(a,b){var c={};c[a]=b;B["dataLayer"].push(c)},event:function(a){Wc(a)},macro:function(a){var b;if(b=zc[a]){var c=_M(a),d=Ma();b=W(c,new A,d)}return b},R:{push:function(a){for(var b=arguments,c=0;c<b.length;c++)try{if(q(b[c][0]))b[c][0]();else $[b[c][0]].apply($,[].slice.call(b[c],1))}catch(d){}}},Ka:function(){var a=B["gtm"];if(a){var b=a.a;x(b)&&$.R.push.apply($.R,b);a.a=$.R;va.push(function(){$.event("gtm.dom")});Aa.push(function(){$.event("gtm.load")})}},La:function(){var a=
B.google_tag_manager;a||(a=B.google_tag_manager={});a["GTM-PTTVTM"]||(a["GTM-PTTVTM"]=$)}};$.La();$.Ka();(function(){var a=G("dataLayer",[]),b=B.google_tag_manager;va.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Aa.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for(N.push.apply(N,b);300<this.length;)this.shift();return Ia()};N.push.apply(N,a.slice(0));M(Ia)})();
if("interactive"==D.readyState||"complete"==D.readyState)wa();else{L(D,"DOMContentLoaded",wa);L(D,"readystatechange",wa);if(D.createEventObject&&D.documentElement.doScroll){var Xc=!0;try{Xc=!B.frameElement}catch(Yc){}Xc&&ya()}L(B,"load",wa)}"complete"===D.readyState?Ba():L(B,"load",Ba);var _vs="res_ts:1376580236651000,srv_cl:56340027,ds:live,cv:1";
})()
