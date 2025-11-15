(function(){const z=document.createElement("link").relList;if(z&&z.supports&&z.supports("modulepreload"))return;for(const M of document.querySelectorAll('link[rel="modulepreload"]'))ge(M);new MutationObserver(M=>{for(const Q of M)if(Q.type==="childList")for(const ce of Q.addedNodes)ce.tagName==="LINK"&&ce.rel==="modulepreload"&&ge(ce)}).observe(document,{childList:!0,subtree:!0});function f(M){const Q={};return M.integrity&&(Q.integrity=M.integrity),M.referrerPolicy&&(Q.referrerPolicy=M.referrerPolicy),M.crossOrigin==="use-credentials"?Q.credentials="include":M.crossOrigin==="anonymous"?Q.credentials="omit":Q.credentials="same-origin",Q}function ge(M){if(M.ep)return;M.ep=!0;const Q=f(M);fetch(M.href,Q)}})();var bo={exports:{}},gr={},Eo={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bu;function Td(){if(bu)return L;bu=1;var D=Symbol.for("react.element"),z=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),ge=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),Q=Symbol.for("react.provider"),ce=Symbol.for("react.context"),de=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),Ee=Symbol.for("react.memo"),ve=Symbol.for("react.lazy"),ee=Symbol.iterator;function G(c){return c===null||typeof c!="object"?null:(c=ee&&c[ee]||c["@@iterator"],typeof c=="function"?c:null)}var We={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ve=Object.assign,K={};function V(c,y,O){this.props=c,this.context=y,this.refs=K,this.updater=O||We}V.prototype.isReactComponent={},V.prototype.setState=function(c,y){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,y,"setState")},V.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function yt(){}yt.prototype=V.prototype;function lt(c,y,O){this.props=c,this.context=y,this.refs=K,this.updater=O||We}var Xe=lt.prototype=new yt;Xe.constructor=lt,Ve(Xe,V.prototype),Xe.isPureReactComponent=!0;var Se=Array.isArray,Ze=Object.prototype.hasOwnProperty,Ce={current:null},Te={key:!0,ref:!0,__self:!0,__source:!0};function He(c,y,O){var N,R={},F=null,H=null;if(y!=null)for(N in y.ref!==void 0&&(H=y.ref),y.key!==void 0&&(F=""+y.key),y)Ze.call(y,N)&&!Te.hasOwnProperty(N)&&(R[N]=y[N]);var B=arguments.length-2;if(B===1)R.children=O;else if(1<B){for(var X=Array(B),Fe=0;Fe<B;Fe++)X[Fe]=arguments[Fe+2];R.children=X}if(c&&c.defaultProps)for(N in B=c.defaultProps,B)R[N]===void 0&&(R[N]=B[N]);return{$$typeof:D,type:c,key:F,ref:H,props:R,_owner:Ce.current}}function At(c,y){return{$$typeof:D,type:c.type,key:y,ref:c.ref,props:c.props,_owner:c._owner}}function gt(c){return typeof c=="object"&&c!==null&&c.$$typeof===D}function qt(c){var y={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(O){return y[O]})}var ut=/\/+/g;function Re(c,y){return typeof c=="object"&&c!==null&&c.key!=null?qt(""+c.key):y.toString(36)}function et(c,y,O,N,R){var F=typeof c;(F==="undefined"||F==="boolean")&&(c=null);var H=!1;if(c===null)H=!0;else switch(F){case"string":case"number":H=!0;break;case"object":switch(c.$$typeof){case D:case z:H=!0}}if(H)return H=c,R=R(H),c=N===""?"."+Re(H,0):N,Se(R)?(O="",c!=null&&(O=c.replace(ut,"$&/")+"/"),et(R,y,O,"",function(Fe){return Fe})):R!=null&&(gt(R)&&(R=At(R,O+(!R.key||H&&H.key===R.key?"":(""+R.key).replace(ut,"$&/")+"/")+c)),y.push(R)),1;if(H=0,N=N===""?".":N+":",Se(c))for(var B=0;B<c.length;B++){F=c[B];var X=N+Re(F,B);H+=et(F,y,O,X,R)}else if(X=G(c),typeof X=="function")for(c=X.call(c),B=0;!(F=c.next()).done;)F=F.value,X=N+Re(F,B++),H+=et(F,y,O,X,R);else if(F==="object")throw y=String(c),Error("Objects are not valid as a React child (found: "+(y==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":y)+"). If you meant to render a collection of children, use an array instead.");return H}function ct(c,y,O){if(c==null)return c;var N=[],R=0;return et(c,N,"","",function(F){return y.call(O,F,R++)}),N}function je(c){if(c._status===-1){var y=c._result;y=y(),y.then(function(O){(c._status===0||c._status===-1)&&(c._status=1,c._result=O)},function(O){(c._status===0||c._status===-1)&&(c._status=2,c._result=O)}),c._status===-1&&(c._status=0,c._result=y)}if(c._status===1)return c._result.default;throw c._result}var re={current:null},w={transition:null},T={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:w,ReactCurrentOwner:Ce};function b(){throw Error("act(...) is not supported in production builds of React.")}return L.Children={map:ct,forEach:function(c,y,O){ct(c,function(){y.apply(this,arguments)},O)},count:function(c){var y=0;return ct(c,function(){y++}),y},toArray:function(c){return ct(c,function(y){return y})||[]},only:function(c){if(!gt(c))throw Error("React.Children.only expected to receive a single React element child.");return c}},L.Component=V,L.Fragment=f,L.Profiler=M,L.PureComponent=lt,L.StrictMode=ge,L.Suspense=W,L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,L.act=b,L.cloneElement=function(c,y,O){if(c==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+c+".");var N=Ve({},c.props),R=c.key,F=c.ref,H=c._owner;if(y!=null){if(y.ref!==void 0&&(F=y.ref,H=Ce.current),y.key!==void 0&&(R=""+y.key),c.type&&c.type.defaultProps)var B=c.type.defaultProps;for(X in y)Ze.call(y,X)&&!Te.hasOwnProperty(X)&&(N[X]=y[X]===void 0&&B!==void 0?B[X]:y[X])}var X=arguments.length-2;if(X===1)N.children=O;else if(1<X){B=Array(X);for(var Fe=0;Fe<X;Fe++)B[Fe]=arguments[Fe+2];N.children=B}return{$$typeof:D,type:c.type,key:R,ref:F,props:N,_owner:H}},L.createContext=function(c){return c={$$typeof:ce,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},c.Provider={$$typeof:Q,_context:c},c.Consumer=c},L.createElement=He,L.createFactory=function(c){var y=He.bind(null,c);return y.type=c,y},L.createRef=function(){return{current:null}},L.forwardRef=function(c){return{$$typeof:de,render:c}},L.isValidElement=gt,L.lazy=function(c){return{$$typeof:ve,_payload:{_status:-1,_result:c},_init:je}},L.memo=function(c,y){return{$$typeof:Ee,type:c,compare:y===void 0?null:y}},L.startTransition=function(c){var y=w.transition;w.transition={};try{c()}finally{w.transition=y}},L.unstable_act=b,L.useCallback=function(c,y){return re.current.useCallback(c,y)},L.useContext=function(c){return re.current.useContext(c)},L.useDebugValue=function(){},L.useDeferredValue=function(c){return re.current.useDeferredValue(c)},L.useEffect=function(c,y){return re.current.useEffect(c,y)},L.useId=function(){return re.current.useId()},L.useImperativeHandle=function(c,y,O){return re.current.useImperativeHandle(c,y,O)},L.useInsertionEffect=function(c,y){return re.current.useInsertionEffect(c,y)},L.useLayoutEffect=function(c,y){return re.current.useLayoutEffect(c,y)},L.useMemo=function(c,y){return re.current.useMemo(c,y)},L.useReducer=function(c,y,O){return re.current.useReducer(c,y,O)},L.useRef=function(c){return re.current.useRef(c)},L.useState=function(c){return re.current.useState(c)},L.useSyncExternalStore=function(c,y,O){return re.current.useSyncExternalStore(c,y,O)},L.useTransition=function(){return re.current.useTransition()},L.version="18.3.1",L}var Eu;function Po(){return Eu||(Eu=1,Eo.exports=Td()),Eo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cu;function jd(){if(Cu)return gr;Cu=1;var D=Po(),z=Symbol.for("react.element"),f=Symbol.for("react.fragment"),ge=Object.prototype.hasOwnProperty,M=D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Q={key:!0,ref:!0,__self:!0,__source:!0};function ce(de,W,Ee){var ve,ee={},G=null,We=null;Ee!==void 0&&(G=""+Ee),W.key!==void 0&&(G=""+W.key),W.ref!==void 0&&(We=W.ref);for(ve in W)ge.call(W,ve)&&!Q.hasOwnProperty(ve)&&(ee[ve]=W[ve]);if(de&&de.defaultProps)for(ve in W=de.defaultProps,W)ee[ve]===void 0&&(ee[ve]=W[ve]);return{$$typeof:z,type:de,key:G,ref:We,props:ee,_owner:M.current}}return gr.Fragment=f,gr.jsx=ce,gr.jsxs=ce,gr}var Au;function Dd(){return Au||(Au=1,bo.exports=jd()),bo.exports}var Pe=Dd(),Mu=Po(),Pa={},Co={exports:{}},_e={},Ao={exports:{}},Io={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iu;function Md(){return Iu||(Iu=1,(function(D){function z(w,T){var b=w.length;w.push(T);e:for(;0<b;){var c=b-1>>>1,y=w[c];if(0<M(y,T))w[c]=T,w[b]=y,b=c;else break e}}function f(w){return w.length===0?null:w[0]}function ge(w){if(w.length===0)return null;var T=w[0],b=w.pop();if(b!==T){w[0]=b;e:for(var c=0,y=w.length,O=y>>>1;c<O;){var N=2*(c+1)-1,R=w[N],F=N+1,H=w[F];if(0>M(R,b))F<y&&0>M(H,R)?(w[c]=H,w[F]=b,c=F):(w[c]=R,w[N]=b,c=N);else if(F<y&&0>M(H,b))w[c]=H,w[F]=b,c=F;else break e}}return T}function M(w,T){var b=w.sortIndex-T.sortIndex;return b!==0?b:w.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var Q=performance;D.unstable_now=function(){return Q.now()}}else{var ce=Date,de=ce.now();D.unstable_now=function(){return ce.now()-de}}var W=[],Ee=[],ve=1,ee=null,G=3,We=!1,Ve=!1,K=!1,V=typeof setTimeout=="function"?setTimeout:null,yt=typeof clearTimeout=="function"?clearTimeout:null,lt=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Xe(w){for(var T=f(Ee);T!==null;){if(T.callback===null)ge(Ee);else if(T.startTime<=w)ge(Ee),T.sortIndex=T.expirationTime,z(W,T);else break;T=f(Ee)}}function Se(w){if(K=!1,Xe(w),!Ve)if(f(W)!==null)Ve=!0,je(Ze);else{var T=f(Ee);T!==null&&re(Se,T.startTime-w)}}function Ze(w,T){Ve=!1,K&&(K=!1,yt(He),He=-1),We=!0;var b=G;try{for(Xe(T),ee=f(W);ee!==null&&(!(ee.expirationTime>T)||w&&!qt());){var c=ee.callback;if(typeof c=="function"){ee.callback=null,G=ee.priorityLevel;var y=c(ee.expirationTime<=T);T=D.unstable_now(),typeof y=="function"?ee.callback=y:ee===f(W)&&ge(W),Xe(T)}else ge(W);ee=f(W)}if(ee!==null)var O=!0;else{var N=f(Ee);N!==null&&re(Se,N.startTime-T),O=!1}return O}finally{ee=null,G=b,We=!1}}var Ce=!1,Te=null,He=-1,At=5,gt=-1;function qt(){return!(D.unstable_now()-gt<At)}function ut(){if(Te!==null){var w=D.unstable_now();gt=w;var T=!0;try{T=Te(!0,w)}finally{T?Re():(Ce=!1,Te=null)}}else Ce=!1}var Re;if(typeof lt=="function")Re=function(){lt(ut)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,ct=et.port2;et.port1.onmessage=ut,Re=function(){ct.postMessage(null)}}else Re=function(){V(ut,0)};function je(w){Te=w,Ce||(Ce=!0,Re())}function re(w,T){He=V(function(){w(D.unstable_now())},T)}D.unstable_IdlePriority=5,D.unstable_ImmediatePriority=1,D.unstable_LowPriority=4,D.unstable_NormalPriority=3,D.unstable_Profiling=null,D.unstable_UserBlockingPriority=2,D.unstable_cancelCallback=function(w){w.callback=null},D.unstable_continueExecution=function(){Ve||We||(Ve=!0,je(Ze))},D.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):At=0<w?Math.floor(1e3/w):5},D.unstable_getCurrentPriorityLevel=function(){return G},D.unstable_getFirstCallbackNode=function(){return f(W)},D.unstable_next=function(w){switch(G){case 1:case 2:case 3:var T=3;break;default:T=G}var b=G;G=T;try{return w()}finally{G=b}},D.unstable_pauseExecution=function(){},D.unstable_requestPaint=function(){},D.unstable_runWithPriority=function(w,T){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var b=G;G=w;try{return T()}finally{G=b}},D.unstable_scheduleCallback=function(w,T,b){var c=D.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?c+b:c):b=c,w){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=b+y,w={id:ve++,callback:T,priorityLevel:w,startTime:b,expirationTime:y,sortIndex:-1},b>c?(w.sortIndex=b,z(Ee,w),f(W)===null&&w===f(Ee)&&(K?(yt(He),He=-1):K=!0,re(Se,b-c))):(w.sortIndex=y,z(W,w),Ve||We||(Ve=!0,je(Ze))),w},D.unstable_shouldYield=qt,D.unstable_wrapCallback=function(w){var T=G;return function(){var b=G;G=T;try{return w.apply(this,arguments)}finally{G=b}}}})(Io)),Io}var Pu;function Od(){return Pu||(Pu=1,Ao.exports=Md()),Ao.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tu;function Ld(){if(Tu)return _e;Tu=1;var D=Po(),z=Od();function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ge=new Set,M={};function Q(e,t){ce(e,t),ce(e+"Capture",t)}function ce(e,t){for(M[e]=t,e=0;e<t.length;e++)ge.add(t[e])}var de=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),W=Object.prototype.hasOwnProperty,Ee=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ve={},ee={};function G(e){return W.call(ee,e)?!0:W.call(ve,e)?!1:Ee.test(e)?ee[e]=!0:(ve[e]=!0,!1)}function We(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ve(e,t,n,r){if(t===null||typeof t>"u"||We(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function K(e,t,n,r,a,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){V[e]=new K(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];V[t]=new K(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){V[e]=new K(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){V[e]=new K(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){V[e]=new K(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){V[e]=new K(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){V[e]=new K(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){V[e]=new K(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){V[e]=new K(e,5,!1,e.toLowerCase(),null,!1,!1)});var yt=/[\-:]([a-z])/g;function lt(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yt,lt);V[t]=new K(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yt,lt);V[t]=new K(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yt,lt);V[t]=new K(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){V[e]=new K(e,1,!1,e.toLowerCase(),null,!1,!1)}),V.xlinkHref=new K("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){V[e]=new K(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xe(e,t,n,r){var a=V.hasOwnProperty(t)?V[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ve(t,n,a,r)&&(n=null),r||a===null?G(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Se=D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ze=Symbol.for("react.element"),Ce=Symbol.for("react.portal"),Te=Symbol.for("react.fragment"),He=Symbol.for("react.strict_mode"),At=Symbol.for("react.profiler"),gt=Symbol.for("react.provider"),qt=Symbol.for("react.context"),ut=Symbol.for("react.forward_ref"),Re=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),ct=Symbol.for("react.memo"),je=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),w=Symbol.iterator;function T(e){return e===null||typeof e!="object"?null:(e=w&&e[w]||e["@@iterator"],typeof e=="function"?e:null)}var b=Object.assign,c;function y(e){if(c===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);c=t&&t[1]||""}return`
`+c+e}var O=!1;function N(e,t){if(!e||O)return"";O=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(m){var r=m}Reflect.construct(e,[],t)}else{try{t.call()}catch(m){r=m}e.call(t.prototype)}else{try{throw Error()}catch(m){r=m}e()}}catch(m){if(m&&r&&typeof m.stack=="string"){for(var a=m.stack.split(`
`),i=r.stack.split(`
`),o=a.length-1,s=i.length-1;1<=o&&0<=s&&a[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(a[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||a[o]!==i[s]){var l=`
`+a[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{O=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?y(e):""}function R(e){switch(e.tag){case 5:return y(e.type);case 16:return y("Lazy");case 13:return y("Suspense");case 19:return y("SuspenseList");case 0:case 2:case 15:return e=N(e.type,!1),e;case 11:return e=N(e.type.render,!1),e;case 1:return e=N(e.type,!0),e;default:return""}}function F(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Te:return"Fragment";case Ce:return"Portal";case At:return"Profiler";case He:return"StrictMode";case Re:return"Suspense";case et:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qt:return(e.displayName||"Context")+".Consumer";case gt:return(e._context.displayName||"Context")+".Provider";case ut:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ct:return t=e.displayName||null,t!==null?t:F(e.type)||"Memo";case je:t=e._payload,e=e._init;try{return F(e(t))}catch{}}return null}function H(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return F(t);case 8:return t===He?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function B(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function X(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fe(e){var t=X(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vr(e){e._valueTracker||(e._valueTracker=Fe(e))}function To(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=X(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Sr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ta(e,t){var n=t.checked;return b({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function jo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=B(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Do(e,t){t=t.checked,t!=null&&Xe(e,"checked",t,!1)}function ja(e,t){Do(e,t);var n=B(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Da(e,t.type,n):t.hasOwnProperty("defaultValue")&&Da(e,t.type,B(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Mo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Da(e,t,n){(t!=="number"||Sr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mn=Array.isArray;function sn(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+B(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Ma(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(f(91));return b({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Oo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(f(92));if(Mn(n)){if(1<n.length)throw Error(f(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:B(n)}}function Lo(e,t){var n=B(t.value),r=B(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function No(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function _o(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?_o(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wr,Ro=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wr=wr||document.createElement("div"),wr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function On(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ln={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ou=["Webkit","ms","Moz","O"];Object.keys(Ln).forEach(function(e){Ou.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ln[t]=Ln[e]})});function Fo(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ln.hasOwnProperty(e)&&Ln[e]?(""+t).trim():t+"px"}function Jo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=Fo(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var Lu=b({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function La(e,t){if(t){if(Lu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(f(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(f(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(f(61))}if(t.style!=null&&typeof t.style!="object")throw Error(f(62))}}function Na(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _a=null;function Ra(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fa=null,ln=null,un=null;function zo(e){if(e=nr(e)){if(typeof Fa!="function")throw Error(f(280));var t=e.stateNode;t&&(t=Wr(t),Fa(e.stateNode,e.type,t))}}function Bo(e){ln?un?un.push(e):un=[e]:ln=e}function Uo(){if(ln){var e=ln,t=un;if(un=ln=null,zo(e),t)for(e=0;e<t.length;e++)zo(t[e])}}function Wo(e,t){return e(t)}function Vo(){}var Ja=!1;function Ho(e,t,n){if(Ja)return e(t,n);Ja=!0;try{return Wo(e,t,n)}finally{Ja=!1,(ln!==null||un!==null)&&(Vo(),Uo())}}function Nn(e,t){var n=e.stateNode;if(n===null)return null;var r=Wr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(f(231,t,typeof n));return n}var za=!1;if(de)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){za=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{za=!1}function Nu(e,t,n,r,a,i,o,s,l){var m=Array.prototype.slice.call(arguments,3);try{t.apply(n,m)}catch(g){this.onError(g)}}var Rn=!1,xr=null,kr=!1,Ba=null,_u={onError:function(e){Rn=!0,xr=e}};function Ru(e,t,n,r,a,i,o,s,l){Rn=!1,xr=null,Nu.apply(_u,arguments)}function Fu(e,t,n,r,a,i,o,s,l){if(Ru.apply(this,arguments),Rn){if(Rn){var m=xr;Rn=!1,xr=null}else throw Error(f(198));kr||(kr=!0,Ba=m)}}function Qt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qo(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qo(e){if(Qt(e)!==e)throw Error(f(188))}function Ju(e){var t=e.alternate;if(!t){if(t=Qt(e),t===null)throw Error(f(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return Qo(a),e;if(i===r)return Qo(a),t;i=i.sibling}throw Error(f(188))}if(n.return!==r.return)n=a,r=i;else{for(var o=!1,s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o)throw Error(f(189))}}if(n.alternate!==r)throw Error(f(190))}if(n.tag!==3)throw Error(f(188));return n.stateNode.current===n?e:t}function Yo(e){return e=Ju(e),e!==null?$o(e):null}function $o(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=$o(e);if(t!==null)return t;e=e.sibling}return null}var Go=z.unstable_scheduleCallback,Ko=z.unstable_cancelCallback,zu=z.unstable_shouldYield,Bu=z.unstable_requestPaint,ie=z.unstable_now,Uu=z.unstable_getCurrentPriorityLevel,Ua=z.unstable_ImmediatePriority,Xo=z.unstable_UserBlockingPriority,br=z.unstable_NormalPriority,Wu=z.unstable_LowPriority,Zo=z.unstable_IdlePriority,Er=null,dt=null;function Vu(e){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Er,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:Qu,Hu=Math.log,qu=Math.LN2;function Qu(e){return e>>>=0,e===0?32:31-(Hu(e)/qu|0)|0}var Cr=64,Ar=4194304;function Fn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ir(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~a;s!==0?r=Fn(s):(i&=o,i!==0&&(r=Fn(i)))}else o=n&~a,o!==0?r=Fn(o):i!==0&&(r=Fn(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&a)===0&&(a=r&-r,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tt(t),a=1<<n,r|=e[n],t&=~a;return r}function Yu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $u(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-tt(i),s=1<<o,l=a[o];l===-1?((s&n)===0||(s&r)!==0)&&(a[o]=Yu(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}function Wa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function es(){var e=Cr;return Cr<<=1,(Cr&4194240)===0&&(Cr=64),e}function Va(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Jn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=n}function Gu(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-tt(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}function Ha(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var U=0;function ts(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ns,qa,rs,as,is,Qa=!1,Pr=[],It=null,Pt=null,Tt=null,zn=new Map,Bn=new Map,jt=[],Ku="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function os(e,t){switch(e){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bn.delete(t.pointerId)}}function Un(e,t,n,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=nr(t),t!==null&&qa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Xu(e,t,n,r,a){switch(t){case"focusin":return It=Un(It,e,t,n,r,a),!0;case"dragenter":return Pt=Un(Pt,e,t,n,r,a),!0;case"mouseover":return Tt=Un(Tt,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return zn.set(i,Un(zn.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Bn.set(i,Un(Bn.get(i)||null,e,t,n,r,a)),!0}return!1}function ss(e){var t=Yt(e.target);if(t!==null){var n=Qt(t);if(n!==null){if(t=n.tag,t===13){if(t=qo(n),t!==null){e.blockedOn=t,is(e.priority,function(){rs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$a(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);_a=r,n.target.dispatchEvent(r),_a=null}else return t=nr(n),t!==null&&qa(t),e.blockedOn=n,!1;t.shift()}return!0}function ls(e,t,n){Tr(e)&&n.delete(t)}function Zu(){Qa=!1,It!==null&&Tr(It)&&(It=null),Pt!==null&&Tr(Pt)&&(Pt=null),Tt!==null&&Tr(Tt)&&(Tt=null),zn.forEach(ls),Bn.forEach(ls)}function Wn(e,t){e.blockedOn===t&&(e.blockedOn=null,Qa||(Qa=!0,z.unstable_scheduleCallback(z.unstable_NormalPriority,Zu)))}function Vn(e){function t(a){return Wn(a,e)}if(0<Pr.length){Wn(Pr[0],e);for(var n=1;n<Pr.length;n++){var r=Pr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(It!==null&&Wn(It,e),Pt!==null&&Wn(Pt,e),Tt!==null&&Wn(Tt,e),zn.forEach(t),Bn.forEach(t),n=0;n<jt.length;n++)r=jt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<jt.length&&(n=jt[0],n.blockedOn===null);)ss(n),n.blockedOn===null&&jt.shift()}var cn=Se.ReactCurrentBatchConfig,jr=!0;function ec(e,t,n,r){var a=U,i=cn.transition;cn.transition=null;try{U=1,Ya(e,t,n,r)}finally{U=a,cn.transition=i}}function tc(e,t,n,r){var a=U,i=cn.transition;cn.transition=null;try{U=4,Ya(e,t,n,r)}finally{U=a,cn.transition=i}}function Ya(e,t,n,r){if(jr){var a=$a(e,t,n,r);if(a===null)pi(e,t,r,Dr,n),os(e,r);else if(Xu(a,e,t,n,r))r.stopPropagation();else if(os(e,r),t&4&&-1<Ku.indexOf(e)){for(;a!==null;){var i=nr(a);if(i!==null&&ns(i),i=$a(e,t,n,r),i===null&&pi(e,t,r,Dr,n),i===a)break;a=i}a!==null&&r.stopPropagation()}else pi(e,t,r,null,n)}}var Dr=null;function $a(e,t,n,r){if(Dr=null,e=Ra(r),e=Yt(e),e!==null)if(t=Qt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qo(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Dr=e,null}function us(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Uu()){case Ua:return 1;case Xo:return 4;case br:case Wu:return 16;case Zo:return 536870912;default:return 16}default:return 16}}var Dt=null,Ga=null,Mr=null;function cs(){if(Mr)return Mr;var e,t=Ga,n=t.length,r,a="value"in Dt?Dt.value:Dt.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===a[i-r];r++);return Mr=a.slice(e,1<r?1-r:void 0)}function Or(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Lr(){return!0}function ds(){return!1}function Je(e){function t(n,r,a,i,o){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Lr:ds,this.isPropagationStopped=ds,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Lr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Lr)},persist:function(){},isPersistent:Lr}),t}var dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ka=Je(dn),Hn=b({},dn,{view:0,detail:0}),nc=Je(Hn),Xa,Za,qn,Nr=b({},Hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ti,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qn&&(qn&&e.type==="mousemove"?(Xa=e.screenX-qn.screenX,Za=e.screenY-qn.screenY):Za=Xa=0,qn=e),Xa)},movementY:function(e){return"movementY"in e?e.movementY:Za}}),ps=Je(Nr),rc=b({},Nr,{dataTransfer:0}),ac=Je(rc),ic=b({},Hn,{relatedTarget:0}),ei=Je(ic),oc=b({},dn,{animationName:0,elapsedTime:0,pseudoElement:0}),sc=Je(oc),lc=b({},dn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uc=Je(lc),cc=b({},dn,{data:0}),ms=Je(cc),dc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mc[e])?!!t[e]:!1}function ti(){return fc}var hc=b({},Hn,{key:function(e){if(e.key){var t=dc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Or(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ti,charCode:function(e){return e.type==="keypress"?Or(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Or(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yc=Je(hc),gc=b({},Nr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fs=Je(gc),vc=b({},Hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ti}),Sc=Je(vc),wc=b({},dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),xc=Je(wc),kc=b({},Nr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bc=Je(kc),Ec=[9,13,27,32],ni=de&&"CompositionEvent"in window,Qn=null;de&&"documentMode"in document&&(Qn=document.documentMode);var Cc=de&&"TextEvent"in window&&!Qn,hs=de&&(!ni||Qn&&8<Qn&&11>=Qn),ys=" ",gs=!1;function vs(e,t){switch(e){case"keyup":return Ec.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ss(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pn=!1;function Ac(e,t){switch(e){case"compositionend":return Ss(t);case"keypress":return t.which!==32?null:(gs=!0,ys);case"textInput":return e=t.data,e===ys&&gs?null:e;default:return null}}function Ic(e,t){if(pn)return e==="compositionend"||!ni&&vs(e,t)?(e=cs(),Mr=Ga=Dt=null,pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hs&&t.locale!=="ko"?null:t.data;default:return null}}var Pc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ws(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Pc[e.type]:t==="textarea"}function xs(e,t,n,r){Bo(r),t=zr(t,"onChange"),0<t.length&&(n=new Ka("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yn=null,$n=null;function Tc(e){Js(e,0)}function _r(e){var t=gn(e);if(To(t))return e}function jc(e,t){if(e==="change")return t}var ks=!1;if(de){var ri;if(de){var ai="oninput"in document;if(!ai){var bs=document.createElement("div");bs.setAttribute("oninput","return;"),ai=typeof bs.oninput=="function"}ri=ai}else ri=!1;ks=ri&&(!document.documentMode||9<document.documentMode)}function Es(){Yn&&(Yn.detachEvent("onpropertychange",Cs),$n=Yn=null)}function Cs(e){if(e.propertyName==="value"&&_r($n)){var t=[];xs(t,$n,e,Ra(e)),Ho(Tc,t)}}function Dc(e,t,n){e==="focusin"?(Es(),Yn=t,$n=n,Yn.attachEvent("onpropertychange",Cs)):e==="focusout"&&Es()}function Mc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _r($n)}function Oc(e,t){if(e==="click")return _r(t)}function Lc(e,t){if(e==="input"||e==="change")return _r(t)}function Nc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:Nc;function Gn(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!W.call(t,a)||!nt(e[a],t[a]))return!1}return!0}function As(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Is(e,t){var n=As(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=As(n)}}function Ps(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ps(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ts(){for(var e=window,t=Sr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Sr(e.document)}return t}function ii(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _c(e){var t=Ts(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ps(n.ownerDocument.documentElement,n)){if(r!==null&&ii(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=Is(n,i);var o=Is(n,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Rc=de&&"documentMode"in document&&11>=document.documentMode,mn=null,oi=null,Kn=null,si=!1;function js(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;si||mn==null||mn!==Sr(r)||(r=mn,"selectionStart"in r&&ii(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kn&&Gn(Kn,r)||(Kn=r,r=zr(oi,"onSelect"),0<r.length&&(t=new Ka("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mn)))}function Rr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fn={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionend:Rr("Transition","TransitionEnd")},li={},Ds={};de&&(Ds=document.createElement("div").style,"AnimationEvent"in window||(delete fn.animationend.animation,delete fn.animationiteration.animation,delete fn.animationstart.animation),"TransitionEvent"in window||delete fn.transitionend.transition);function Fr(e){if(li[e])return li[e];if(!fn[e])return e;var t=fn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ds)return li[e]=t[n];return e}var Ms=Fr("animationend"),Os=Fr("animationiteration"),Ls=Fr("animationstart"),Ns=Fr("transitionend"),_s=new Map,Rs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mt(e,t){_s.set(e,t),Q(t,[e])}for(var ui=0;ui<Rs.length;ui++){var ci=Rs[ui],Fc=ci.toLowerCase(),Jc=ci[0].toUpperCase()+ci.slice(1);Mt(Fc,"on"+Jc)}Mt(Ms,"onAnimationEnd"),Mt(Os,"onAnimationIteration"),Mt(Ls,"onAnimationStart"),Mt("dblclick","onDoubleClick"),Mt("focusin","onFocus"),Mt("focusout","onBlur"),Mt(Ns,"onTransitionEnd"),ce("onMouseEnter",["mouseout","mouseover"]),ce("onMouseLeave",["mouseout","mouseover"]),ce("onPointerEnter",["pointerout","pointerover"]),ce("onPointerLeave",["pointerout","pointerover"]),Q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Q("onBeforeInput",["compositionend","keypress","textInput","paste"]),Q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zc=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xn));function Fs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Fu(r,t,void 0,e),e.currentTarget=null}function Js(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,m=s.currentTarget;if(s=s.listener,l!==i&&a.isPropagationStopped())break e;Fs(a,s,m),i=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,m=s.currentTarget,s=s.listener,l!==i&&a.isPropagationStopped())break e;Fs(a,s,m),i=l}}}if(kr)throw e=Ba,kr=!1,Ba=null,e}function Y(e,t){var n=t[vi];n===void 0&&(n=t[vi]=new Set);var r=e+"__bubble";n.has(r)||(zs(t,e,2,!1),n.add(r))}function di(e,t,n){var r=0;t&&(r|=4),zs(n,e,r,t)}var Jr="_reactListening"+Math.random().toString(36).slice(2);function Zn(e){if(!e[Jr]){e[Jr]=!0,ge.forEach(function(n){n!=="selectionchange"&&(zc.has(n)||di(n,!1,e),di(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Jr]||(t[Jr]=!0,di("selectionchange",!1,t))}}function zs(e,t,n,r){switch(us(t)){case 1:var a=ec;break;case 4:a=tc;break;default:a=Ya}n=a.bind(null,t,n,e),a=void 0,!za||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function pi(e,t,n,r,a){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===a||l.nodeType===8&&l.parentNode===a))return;o=o.return}for(;s!==null;){if(o=Yt(s),o===null)return;if(l=o.tag,l===5||l===6){r=i=o;continue e}s=s.parentNode}}r=r.return}Ho(function(){var m=i,g=Ra(n),v=[];e:{var h=_s.get(e);if(h!==void 0){var x=Ka,E=e;switch(e){case"keypress":if(Or(n)===0)break e;case"keydown":case"keyup":x=yc;break;case"focusin":E="focus",x=ei;break;case"focusout":E="blur",x=ei;break;case"beforeblur":case"afterblur":x=ei;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=ps;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=ac;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Sc;break;case Ms:case Os:case Ls:x=sc;break;case Ns:x=xc;break;case"scroll":x=nc;break;case"wheel":x=bc;break;case"copy":case"cut":case"paste":x=uc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=fs}var C=(t&4)!==0,oe=!C&&e==="scroll",d=C?h!==null?h+"Capture":null:h;C=[];for(var u=m,p;u!==null;){p=u;var S=p.stateNode;if(p.tag===5&&S!==null&&(p=S,d!==null&&(S=Nn(u,d),S!=null&&C.push(er(u,S,p)))),oe)break;u=u.return}0<C.length&&(h=new x(h,E,null,n,g),v.push({event:h,listeners:C}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&n!==_a&&(E=n.relatedTarget||n.fromElement)&&(Yt(E)||E[vt]))break e;if((x||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,x?(E=n.relatedTarget||n.toElement,x=m,E=E?Yt(E):null,E!==null&&(oe=Qt(E),E!==oe||E.tag!==5&&E.tag!==6)&&(E=null)):(x=null,E=m),x!==E)){if(C=ps,S="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(C=fs,S="onPointerLeave",d="onPointerEnter",u="pointer"),oe=x==null?h:gn(x),p=E==null?h:gn(E),h=new C(S,u+"leave",x,n,g),h.target=oe,h.relatedTarget=p,S=null,Yt(g)===m&&(C=new C(d,u+"enter",E,n,g),C.target=p,C.relatedTarget=oe,S=C),oe=S,x&&E)t:{for(C=x,d=E,u=0,p=C;p;p=hn(p))u++;for(p=0,S=d;S;S=hn(S))p++;for(;0<u-p;)C=hn(C),u--;for(;0<p-u;)d=hn(d),p--;for(;u--;){if(C===d||d!==null&&C===d.alternate)break t;C=hn(C),d=hn(d)}C=null}else C=null;x!==null&&Bs(v,h,x,C,!1),E!==null&&oe!==null&&Bs(v,oe,E,C,!0)}}e:{if(h=m?gn(m):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var A=jc;else if(ws(h))if(ks)A=Lc;else{A=Mc;var I=Dc}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=Oc);if(A&&(A=A(e,m))){xs(v,A,n,g);break e}I&&I(e,h,m),e==="focusout"&&(I=h._wrapperState)&&I.controlled&&h.type==="number"&&Da(h,"number",h.value)}switch(I=m?gn(m):window,e){case"focusin":(ws(I)||I.contentEditable==="true")&&(mn=I,oi=m,Kn=null);break;case"focusout":Kn=oi=mn=null;break;case"mousedown":si=!0;break;case"contextmenu":case"mouseup":case"dragend":si=!1,js(v,n,g);break;case"selectionchange":if(Rc)break;case"keydown":case"keyup":js(v,n,g)}var P;if(ni)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else pn?vs(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(hs&&n.locale!=="ko"&&(pn||j!=="onCompositionStart"?j==="onCompositionEnd"&&pn&&(P=cs()):(Dt=g,Ga="value"in Dt?Dt.value:Dt.textContent,pn=!0)),I=zr(m,j),0<I.length&&(j=new ms(j,e,null,n,g),v.push({event:j,listeners:I}),P?j.data=P:(P=Ss(n),P!==null&&(j.data=P)))),(P=Cc?Ac(e,n):Ic(e,n))&&(m=zr(m,"onBeforeInput"),0<m.length&&(g=new ms("onBeforeInput","beforeinput",null,n,g),v.push({event:g,listeners:m}),g.data=P))}Js(v,t)})}function er(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zr(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Nn(e,n),i!=null&&r.unshift(er(e,i,a)),i=Nn(e,t),i!=null&&r.push(er(e,i,a))),e=e.return}return r}function hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bs(e,t,n,r,a){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,m=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&m!==null&&(s=m,a?(l=Nn(n,i),l!=null&&o.unshift(er(n,l,s))):a||(l=Nn(n,i),l!=null&&o.push(er(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Bc=/\r\n?/g,Uc=/\u0000|\uFFFD/g;function Us(e){return(typeof e=="string"?e:""+e).replace(Bc,`
`).replace(Uc,"")}function Br(e,t,n){if(t=Us(t),Us(e)!==t&&n)throw Error(f(425))}function Ur(){}var mi=null,fi=null;function hi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yi=typeof setTimeout=="function"?setTimeout:void 0,Wc=typeof clearTimeout=="function"?clearTimeout:void 0,Ws=typeof Promise=="function"?Promise:void 0,Vc=typeof queueMicrotask=="function"?queueMicrotask:typeof Ws<"u"?function(e){return Ws.resolve(null).then(e).catch(Hc)}:yi;function Hc(e){setTimeout(function(){throw e})}function gi(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Vn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Vn(t)}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Vs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yn=Math.random().toString(36).slice(2),pt="__reactFiber$"+yn,tr="__reactProps$"+yn,vt="__reactContainer$"+yn,vi="__reactEvents$"+yn,qc="__reactListeners$"+yn,Qc="__reactHandles$"+yn;function Yt(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Vs(e);e!==null;){if(n=e[pt])return n;e=Vs(e)}return t}e=n,n=e.parentNode}return null}function nr(e){return e=e[pt]||e[vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(f(33))}function Wr(e){return e[tr]||null}var Si=[],vn=-1;function Lt(e){return{current:e}}function $(e){0>vn||(e.current=Si[vn],Si[vn]=null,vn--)}function q(e,t){vn++,Si[vn]=e.current,e.current=t}var Nt={},we=Lt(Nt),De=Lt(!1),$t=Nt;function Sn(e,t){var n=e.type.contextTypes;if(!n)return Nt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Me(e){return e=e.childContextTypes,e!=null}function Vr(){$(De),$(we)}function Hs(e,t,n){if(we.current!==Nt)throw Error(f(168));q(we,t),q(De,n)}function qs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(f(108,H(e)||"Unknown",a));return b({},n,r)}function Hr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nt,$t=we.current,q(we,e),q(De,De.current),!0}function Qs(e,t,n){var r=e.stateNode;if(!r)throw Error(f(169));n?(e=qs(e,t,$t),r.__reactInternalMemoizedMergedChildContext=e,$(De),$(we),q(we,e)):$(De),q(De,n)}var St=null,qr=!1,wi=!1;function Ys(e){St===null?St=[e]:St.push(e)}function Yc(e){qr=!0,Ys(e)}function _t(){if(!wi&&St!==null){wi=!0;var e=0,t=U;try{var n=St;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}St=null,qr=!1}catch(a){throw St!==null&&(St=St.slice(e+1)),Go(Ua,_t),a}finally{U=t,wi=!1}}return null}var wn=[],xn=0,Qr=null,Yr=0,qe=[],Qe=0,Gt=null,wt=1,xt="";function Kt(e,t){wn[xn++]=Yr,wn[xn++]=Qr,Qr=e,Yr=t}function $s(e,t,n){qe[Qe++]=wt,qe[Qe++]=xt,qe[Qe++]=Gt,Gt=e;var r=wt;e=xt;var a=32-tt(r)-1;r&=~(1<<a),n+=1;var i=32-tt(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,wt=1<<32-tt(t)+a|n<<a|r,xt=i+e}else wt=1<<i|n<<a|r,xt=e}function xi(e){e.return!==null&&(Kt(e,1),$s(e,1,0))}function ki(e){for(;e===Qr;)Qr=wn[--xn],wn[xn]=null,Yr=wn[--xn],wn[xn]=null;for(;e===Gt;)Gt=qe[--Qe],qe[Qe]=null,xt=qe[--Qe],qe[Qe]=null,wt=qe[--Qe],qe[Qe]=null}var ze=null,Be=null,Z=!1,rt=null;function Gs(e,t){var n=Ke(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ks(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Be=Ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Gt!==null?{id:wt,overflow:xt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ke(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,Be=null,!0):!1;default:return!1}}function bi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ei(e){if(Z){var t=Be;if(t){var n=t;if(!Ks(e,t)){if(bi(e))throw Error(f(418));t=Ot(n.nextSibling);var r=ze;t&&Ks(e,t)?Gs(r,n):(e.flags=e.flags&-4097|2,Z=!1,ze=e)}}else{if(bi(e))throw Error(f(418));e.flags=e.flags&-4097|2,Z=!1,ze=e}}}function Xs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function $r(e){if(e!==ze)return!1;if(!Z)return Xs(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hi(e.type,e.memoizedProps)),t&&(t=Be)){if(bi(e))throw Zs(),Error(f(418));for(;t;)Gs(e,t),t=Ot(t.nextSibling)}if(Xs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Be=Ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Be=null}}else Be=ze?Ot(e.stateNode.nextSibling):null;return!0}function Zs(){for(var e=Be;e;)e=Ot(e.nextSibling)}function kn(){Be=ze=null,Z=!1}function Ci(e){rt===null?rt=[e]:rt.push(e)}var $c=Se.ReactCurrentBatchConfig;function rr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(f(309));var r=n.stateNode}if(!r)throw Error(f(147,e));var a=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=a.refs;o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(f(284));if(!n._owner)throw Error(f(290,e))}return e}function Gr(e,t){throw e=Object.prototype.toString.call(t),Error(f(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function el(e){var t=e._init;return t(e._payload)}function tl(e){function t(d,u){if(e){var p=d.deletions;p===null?(d.deletions=[u],d.flags|=16):p.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function a(d,u){return d=Vt(d,u),d.index=0,d.sibling=null,d}function i(d,u,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<u?(d.flags|=2,u):p):(d.flags|=2,u)):(d.flags|=1048576,u)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,u,p,S){return u===null||u.tag!==6?(u=go(p,d.mode,S),u.return=d,u):(u=a(u,p),u.return=d,u)}function l(d,u,p,S){var A=p.type;return A===Te?g(d,u,p.props.children,S,p.key):u!==null&&(u.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===je&&el(A)===u.type)?(S=a(u,p.props),S.ref=rr(d,u,p),S.return=d,S):(S=wa(p.type,p.key,p.props,null,d.mode,S),S.ref=rr(d,u,p),S.return=d,S)}function m(d,u,p,S){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=vo(p,d.mode,S),u.return=d,u):(u=a(u,p.children||[]),u.return=d,u)}function g(d,u,p,S,A){return u===null||u.tag!==7?(u=on(p,d.mode,S,A),u.return=d,u):(u=a(u,p),u.return=d,u)}function v(d,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=go(""+u,d.mode,p),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Ze:return p=wa(u.type,u.key,u.props,null,d.mode,p),p.ref=rr(d,null,u),p.return=d,p;case Ce:return u=vo(u,d.mode,p),u.return=d,u;case je:var S=u._init;return v(d,S(u._payload),p)}if(Mn(u)||T(u))return u=on(u,d.mode,p,null),u.return=d,u;Gr(d,u)}return null}function h(d,u,p,S){var A=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return A!==null?null:s(d,u,""+p,S);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ze:return p.key===A?l(d,u,p,S):null;case Ce:return p.key===A?m(d,u,p,S):null;case je:return A=p._init,h(d,u,A(p._payload),S)}if(Mn(p)||T(p))return A!==null?null:g(d,u,p,S,null);Gr(d,p)}return null}function x(d,u,p,S,A){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(p)||null,s(u,d,""+S,A);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ze:return d=d.get(S.key===null?p:S.key)||null,l(u,d,S,A);case Ce:return d=d.get(S.key===null?p:S.key)||null,m(u,d,S,A);case je:var I=S._init;return x(d,u,p,I(S._payload),A)}if(Mn(S)||T(S))return d=d.get(p)||null,g(u,d,S,A,null);Gr(u,S)}return null}function E(d,u,p,S){for(var A=null,I=null,P=u,j=u=0,fe=null;P!==null&&j<p.length;j++){P.index>j?(fe=P,P=null):fe=P.sibling;var J=h(d,P,p[j],S);if(J===null){P===null&&(P=fe);break}e&&P&&J.alternate===null&&t(d,P),u=i(J,u,j),I===null?A=J:I.sibling=J,I=J,P=fe}if(j===p.length)return n(d,P),Z&&Kt(d,j),A;if(P===null){for(;j<p.length;j++)P=v(d,p[j],S),P!==null&&(u=i(P,u,j),I===null?A=P:I.sibling=P,I=P);return Z&&Kt(d,j),A}for(P=r(d,P);j<p.length;j++)fe=x(P,d,j,p[j],S),fe!==null&&(e&&fe.alternate!==null&&P.delete(fe.key===null?j:fe.key),u=i(fe,u,j),I===null?A=fe:I.sibling=fe,I=fe);return e&&P.forEach(function(Ht){return t(d,Ht)}),Z&&Kt(d,j),A}function C(d,u,p,S){var A=T(p);if(typeof A!="function")throw Error(f(150));if(p=A.call(p),p==null)throw Error(f(151));for(var I=A=null,P=u,j=u=0,fe=null,J=p.next();P!==null&&!J.done;j++,J=p.next()){P.index>j?(fe=P,P=null):fe=P.sibling;var Ht=h(d,P,J.value,S);if(Ht===null){P===null&&(P=fe);break}e&&P&&Ht.alternate===null&&t(d,P),u=i(Ht,u,j),I===null?A=Ht:I.sibling=Ht,I=Ht,P=fe}if(J.done)return n(d,P),Z&&Kt(d,j),A;if(P===null){for(;!J.done;j++,J=p.next())J=v(d,J.value,S),J!==null&&(u=i(J,u,j),I===null?A=J:I.sibling=J,I=J);return Z&&Kt(d,j),A}for(P=r(d,P);!J.done;j++,J=p.next())J=x(P,d,j,J.value,S),J!==null&&(e&&J.alternate!==null&&P.delete(J.key===null?j:J.key),u=i(J,u,j),I===null?A=J:I.sibling=J,I=J);return e&&P.forEach(function(Pd){return t(d,Pd)}),Z&&Kt(d,j),A}function oe(d,u,p,S){if(typeof p=="object"&&p!==null&&p.type===Te&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Ze:e:{for(var A=p.key,I=u;I!==null;){if(I.key===A){if(A=p.type,A===Te){if(I.tag===7){n(d,I.sibling),u=a(I,p.props.children),u.return=d,d=u;break e}}else if(I.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===je&&el(A)===I.type){n(d,I.sibling),u=a(I,p.props),u.ref=rr(d,I,p),u.return=d,d=u;break e}n(d,I);break}else t(d,I);I=I.sibling}p.type===Te?(u=on(p.props.children,d.mode,S,p.key),u.return=d,d=u):(S=wa(p.type,p.key,p.props,null,d.mode,S),S.ref=rr(d,u,p),S.return=d,d=S)}return o(d);case Ce:e:{for(I=p.key;u!==null;){if(u.key===I)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(d,u.sibling),u=a(u,p.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=vo(p,d.mode,S),u.return=d,d=u}return o(d);case je:return I=p._init,oe(d,u,I(p._payload),S)}if(Mn(p))return E(d,u,p,S);if(T(p))return C(d,u,p,S);Gr(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(d,u.sibling),u=a(u,p),u.return=d,d=u):(n(d,u),u=go(p,d.mode,S),u.return=d,d=u),o(d)):n(d,u)}return oe}var bn=tl(!0),nl=tl(!1),Kr=Lt(null),Xr=null,En=null,Ai=null;function Ii(){Ai=En=Xr=null}function Pi(e){var t=Kr.current;$(Kr),e._currentValue=t}function Ti(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Cn(e,t){Xr=e,Ai=En=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Oe=!0),e.firstContext=null)}function Ye(e){var t=e._currentValue;if(Ai!==e)if(e={context:e,memoizedValue:t,next:null},En===null){if(Xr===null)throw Error(f(308));En=e,Xr.dependencies={lanes:0,firstContext:e}}else En=En.next=e;return t}var Xt=null;function ji(e){Xt===null?Xt=[e]:Xt.push(e)}function rl(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,ji(t)):(n.next=a.next,a.next=n),t.interleaved=n,kt(e,r)}function kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Rt=!1;function Di(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function al(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(_&2)!==0){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,kt(e,n)}return a=r.interleaved,a===null?(t.next=t,ji(r)):(t.next=a.next,a.next=t),r.interleaved=t,kt(e,n)}function Zr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ha(e,n)}}function il(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ea(e,t,n,r){var a=e.updateQueue;Rt=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var l=s,m=l.next;l.next=null,o===null?i=m:o.next=m,o=l;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==o&&(s===null?g.firstBaseUpdate=m:s.next=m,g.lastBaseUpdate=l))}if(i!==null){var v=a.baseState;o=0,g=m=l=null,s=i;do{var h=s.lane,x=s.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var E=e,C=s;switch(h=t,x=n,C.tag){case 1:if(E=C.payload,typeof E=="function"){v=E.call(x,v,h);break e}v=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=C.payload,h=typeof E=="function"?E.call(x,v,h):E,h==null)break e;v=b({},v,h);break e;case 2:Rt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=a.effects,h===null?a.effects=[s]:h.push(s))}else x={eventTime:x,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(m=g=x,l=v):g=g.next=x,o|=h;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;h=s,s=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(!0);if(g===null&&(l=v),a.baseState=l,a.firstBaseUpdate=m,a.lastBaseUpdate=g,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);tn|=o,e.lanes=o,e.memoizedState=v}}function ol(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(f(191,a));a.call(r)}}}var ar={},mt=Lt(ar),ir=Lt(ar),or=Lt(ar);function Zt(e){if(e===ar)throw Error(f(174));return e}function Mi(e,t){switch(q(or,t),q(ir,e),q(mt,ar),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Oa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Oa(t,e)}$(mt),q(mt,t)}function An(){$(mt),$(ir),$(or)}function sl(e){Zt(or.current);var t=Zt(mt.current),n=Oa(t,e.type);t!==n&&(q(ir,e),q(mt,n))}function Oi(e){ir.current===e&&($(mt),$(ir))}var te=Lt(0);function ta(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Li=[];function Ni(){for(var e=0;e<Li.length;e++)Li[e]._workInProgressVersionPrimary=null;Li.length=0}var na=Se.ReactCurrentDispatcher,_i=Se.ReactCurrentBatchConfig,en=0,ne=null,le=null,pe=null,ra=!1,sr=!1,lr=0,Gc=0;function xe(){throw Error(f(321))}function Ri(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function Fi(e,t,n,r,a,i){if(en=i,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,na.current=e===null||e.memoizedState===null?ed:td,e=n(r,a),sr){i=0;do{if(sr=!1,lr=0,25<=i)throw Error(f(301));i+=1,pe=le=null,t.updateQueue=null,na.current=nd,e=n(r,a)}while(sr)}if(na.current=oa,t=le!==null&&le.next!==null,en=0,pe=le=ne=null,ra=!1,t)throw Error(f(300));return e}function Ji(){var e=lr!==0;return lr=0,e}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?ne.memoizedState=pe=e:pe=pe.next=e,pe}function $e(){if(le===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=pe===null?ne.memoizedState:pe.next;if(t!==null)pe=t,le=e;else{if(e===null)throw Error(f(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},pe===null?ne.memoizedState=pe=e:pe=pe.next=e}return pe}function ur(e,t){return typeof t=="function"?t(e):t}function zi(e){var t=$e(),n=t.queue;if(n===null)throw Error(f(311));n.lastRenderedReducer=e;var r=le,a=r.baseQueue,i=n.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}r.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,r=r.baseState;var s=o=null,l=null,m=i;do{var g=m.lane;if((en&g)===g)l!==null&&(l=l.next={lane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),r=m.hasEagerState?m.eagerState:e(r,m.action);else{var v={lane:g,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null};l===null?(s=l=v,o=r):l=l.next=v,ne.lanes|=g,tn|=g}m=m.next}while(m!==null&&m!==i);l===null?o=r:l.next=s,nt(r,t.memoizedState)||(Oe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do i=a.lane,ne.lanes|=i,tn|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bi(e){var t=$e(),n=t.queue;if(n===null)throw Error(f(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);nt(i,t.memoizedState)||(Oe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ll(){}function ul(e,t){var n=ne,r=$e(),a=t(),i=!nt(r.memoizedState,a);if(i&&(r.memoizedState=a,Oe=!0),r=r.queue,Ui(pl.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,cr(9,dl.bind(null,n,r,a,t),void 0,null),me===null)throw Error(f(349));(en&30)!==0||cl(n,t,a)}return a}function cl(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function dl(e,t,n,r){t.value=n,t.getSnapshot=r,ml(t)&&fl(e)}function pl(e,t,n){return n(function(){ml(t)&&fl(e)})}function ml(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function fl(e){var t=kt(e,1);t!==null&&st(t,e,1,-1)}function hl(e){var t=ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ur,lastRenderedState:e},t.queue=e,e=e.dispatch=Zc.bind(null,ne,e),[t.memoizedState,e]}function cr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function yl(){return $e().memoizedState}function aa(e,t,n,r){var a=ft();ne.flags|=e,a.memoizedState=cr(1|t,n,void 0,r===void 0?null:r)}function ia(e,t,n,r){var a=$e();r=r===void 0?null:r;var i=void 0;if(le!==null){var o=le.memoizedState;if(i=o.destroy,r!==null&&Ri(r,o.deps)){a.memoizedState=cr(t,n,i,r);return}}ne.flags|=e,a.memoizedState=cr(1|t,n,i,r)}function gl(e,t){return aa(8390656,8,e,t)}function Ui(e,t){return ia(2048,8,e,t)}function vl(e,t){return ia(4,2,e,t)}function Sl(e,t){return ia(4,4,e,t)}function wl(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xl(e,t,n){return n=n!=null?n.concat([e]):null,ia(4,4,wl.bind(null,t,e),n)}function Wi(){}function kl(e,t){var n=$e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ri(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bl(e,t){var n=$e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ri(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function El(e,t,n){return(en&21)===0?(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=n):(nt(n,t)||(n=es(),ne.lanes|=n,tn|=n,e.baseState=!0),t)}function Kc(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=_i.transition;_i.transition={};try{e(!1),t()}finally{U=n,_i.transition=r}}function Cl(){return $e().memoizedState}function Xc(e,t,n){var r=Ut(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Al(e))Il(t,n);else if(n=rl(e,t,n,r),n!==null){var a=Ie();st(n,e,r,a),Pl(n,t,r)}}function Zc(e,t,n){var r=Ut(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Al(e))Il(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(a.hasEagerState=!0,a.eagerState=s,nt(s,o)){var l=t.interleaved;l===null?(a.next=a,ji(t)):(a.next=l.next,l.next=a),t.interleaved=a;return}}catch{}finally{}n=rl(e,t,a,r),n!==null&&(a=Ie(),st(n,e,r,a),Pl(n,t,r))}}function Al(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function Il(e,t){sr=ra=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pl(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ha(e,n)}}var oa={readContext:Ye,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},ed={readContext:Ye,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:gl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,aa(4194308,4,wl.bind(null,t,e),n)},useLayoutEffect:function(e,t){return aa(4194308,4,e,t)},useInsertionEffect:function(e,t){return aa(4,2,e,t)},useMemo:function(e,t){var n=ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Xc.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:hl,useDebugValue:Wi,useDeferredValue:function(e){return ft().memoizedState=e},useTransition:function(){var e=hl(!1),t=e[0];return e=Kc.bind(null,e[1]),ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,a=ft();if(Z){if(n===void 0)throw Error(f(407));n=n()}else{if(n=t(),me===null)throw Error(f(349));(en&30)!==0||cl(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,gl(pl.bind(null,r,i,e),[e]),r.flags|=2048,cr(9,dl.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ft(),t=me.identifierPrefix;if(Z){var n=xt,r=wt;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=lr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Gc++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},td={readContext:Ye,useCallback:kl,useContext:Ye,useEffect:Ui,useImperativeHandle:xl,useInsertionEffect:vl,useLayoutEffect:Sl,useMemo:bl,useReducer:zi,useRef:yl,useState:function(){return zi(ur)},useDebugValue:Wi,useDeferredValue:function(e){var t=$e();return El(t,le.memoizedState,e)},useTransition:function(){var e=zi(ur)[0],t=$e().memoizedState;return[e,t]},useMutableSource:ll,useSyncExternalStore:ul,useId:Cl,unstable_isNewReconciler:!1},nd={readContext:Ye,useCallback:kl,useContext:Ye,useEffect:Ui,useImperativeHandle:xl,useInsertionEffect:vl,useLayoutEffect:Sl,useMemo:bl,useReducer:Bi,useRef:yl,useState:function(){return Bi(ur)},useDebugValue:Wi,useDeferredValue:function(e){var t=$e();return le===null?t.memoizedState=e:El(t,le.memoizedState,e)},useTransition:function(){var e=Bi(ur)[0],t=$e().memoizedState;return[e,t]},useMutableSource:ll,useSyncExternalStore:ul,useId:Cl,unstable_isNewReconciler:!1};function at(e,t){if(e&&e.defaultProps){t=b({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Vi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:b({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var sa={isMounted:function(e){return(e=e._reactInternals)?Qt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ie(),a=Ut(e),i=bt(r,a);i.payload=t,n!=null&&(i.callback=n),t=Ft(e,i,a),t!==null&&(st(t,e,a,r),Zr(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ie(),a=Ut(e),i=bt(r,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ft(e,i,a),t!==null&&(st(t,e,a,r),Zr(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ie(),r=Ut(e),a=bt(n,r);a.tag=2,t!=null&&(a.callback=t),t=Ft(e,a,r),t!==null&&(st(t,e,r,n),Zr(t,e,r))}};function Tl(e,t,n,r,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Gn(n,r)||!Gn(a,i):!0}function jl(e,t,n){var r=!1,a=Nt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ye(i):(a=Me(t)?$t:we.current,r=t.contextTypes,i=(r=r!=null)?Sn(e,a):Nt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=sa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function Dl(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&sa.enqueueReplaceState(t,t.state,null)}function Hi(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Di(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=Ye(i):(i=Me(t)?$t:we.current,a.context=Sn(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Vi(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&sa.enqueueReplaceState(a,a.state,null),ea(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function In(e,t){try{var n="",r=t;do n+=R(r),r=r.return;while(r);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function qi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Qi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var rd=typeof WeakMap=="function"?WeakMap:Map;function Ml(e,t,n){n=bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){fa||(fa=!0,lo=r),Qi(e,t)},n}function Ol(e,t,n){n=bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){Qi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Qi(e,t),typeof r!="function"&&(zt===null?zt=new Set([this]):zt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ll(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new rd;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=gd.bind(null,e,t,n),t.then(e,e))}function Nl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _l(e,t,n,r,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=bt(-1,1),t.tag=2,Ft(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var ad=Se.ReactCurrentOwner,Oe=!1;function Ae(e,t,n,r){t.child=e===null?nl(t,null,n,r):bn(t,e.child,n,r)}function Rl(e,t,n,r,a){n=n.render;var i=t.ref;return Cn(t,a),r=Fi(e,t,n,r,i,a),n=Ji(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Et(e,t,a)):(Z&&n&&xi(t),t.flags|=1,Ae(e,t,r,a),t.child)}function Fl(e,t,n,r,a){if(e===null){var i=n.type;return typeof i=="function"&&!yo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Jl(e,t,i,r,a)):(e=wa(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&a)===0){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Gn,n(o,r)&&e.ref===t.ref)return Et(e,t,a)}return t.flags|=1,e=Vt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Jl(e,t,n,r,a){if(e!==null){var i=e.memoizedProps;if(Gn(i,r)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=r=i,(e.lanes&a)!==0)(e.flags&131072)!==0&&(Oe=!0);else return t.lanes=e.lanes,Et(e,t,a)}return Yi(e,t,n,r,a)}function zl(e,t,n){var r=t.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(Tn,Ue),Ue|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(Tn,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,q(Tn,Ue),Ue|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,q(Tn,Ue),Ue|=r;return Ae(e,t,a,n),t.child}function Bl(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Yi(e,t,n,r,a){var i=Me(n)?$t:we.current;return i=Sn(t,i),Cn(t,a),n=Fi(e,t,n,r,i,a),r=Ji(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Et(e,t,a)):(Z&&r&&xi(t),t.flags|=1,Ae(e,t,n,a),t.child)}function Ul(e,t,n,r,a){if(Me(n)){var i=!0;Hr(t)}else i=!1;if(Cn(t,a),t.stateNode===null)ua(e,t),jl(t,n,r),Hi(t,n,r,a),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,m=n.contextType;typeof m=="object"&&m!==null?m=Ye(m):(m=Me(n)?$t:we.current,m=Sn(t,m));var g=n.getDerivedStateFromProps,v=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";v||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==m)&&Dl(t,o,r,m),Rt=!1;var h=t.memoizedState;o.state=h,ea(t,r,o,a),l=t.memoizedState,s!==r||h!==l||De.current||Rt?(typeof g=="function"&&(Vi(t,n,g,r),l=t.memoizedState),(s=Rt||Tl(t,n,s,r,h,l,m))?(v||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=m,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,al(e,t),s=t.memoizedProps,m=t.type===t.elementType?s:at(t.type,s),o.props=m,v=t.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ye(l):(l=Me(n)?$t:we.current,l=Sn(t,l));var x=n.getDerivedStateFromProps;(g=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==v||h!==l)&&Dl(t,o,r,l),Rt=!1,h=t.memoizedState,o.state=h,ea(t,r,o,a);var E=t.memoizedState;s!==v||h!==E||De.current||Rt?(typeof x=="function"&&(Vi(t,n,x,r),E=t.memoizedState),(m=Rt||Tl(t,n,m,r,h,E,l)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=E),o.props=r,o.state=E,o.context=l,r=m):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return $i(e,t,n,r,i,a)}function $i(e,t,n,r,a,i){Bl(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return a&&Qs(t,n,!1),Et(e,t,i);r=t.stateNode,ad.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=bn(t,e.child,null,i),t.child=bn(t,null,s,i)):Ae(e,t,s,i),t.memoizedState=r.state,a&&Qs(t,n,!0),t.child}function Wl(e){var t=e.stateNode;t.pendingContext?Hs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Hs(e,t.context,!1),Mi(e,t.containerInfo)}function Vl(e,t,n,r,a){return kn(),Ci(a),t.flags|=256,Ae(e,t,n,r),t.child}var Gi={dehydrated:null,treeContext:null,retryLane:0};function Ki(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hl(e,t,n){var r=t.pendingProps,a=te.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),q(te,a&1),e===null)return Ei(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=o):i=xa(o,r,0,null),e=on(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ki(n),t.memoizedState=Gi,e):Xi(t,o));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return id(e,t,o,r,s,a,n);if(i){i=r.fallback,o=t.mode,a=e.child,s=a.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Vt(a,l),r.subtreeFlags=a.subtreeFlags&14680064),s!==null?i=Vt(s,i):(i=on(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Ki(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Gi,r}return i=e.child,e=i.sibling,r=Vt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xi(e,t){return t=xa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function la(e,t,n,r){return r!==null&&Ci(r),bn(t,e.child,null,n),e=Xi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function id(e,t,n,r,a,i,o){if(n)return t.flags&256?(t.flags&=-257,r=qi(Error(f(422))),la(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=xa({mode:"visible",children:r.children},a,0,null),i=on(i,a,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&bn(t,e.child,null,o),t.child.memoizedState=Ki(o),t.memoizedState=Gi,i);if((t.mode&1)===0)return la(e,t,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(f(419)),r=qi(i,r,void 0),la(e,t,o,r)}if(s=(o&e.childLanes)!==0,Oe||s){if(r=me,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(r.suspendedLanes|o))!==0?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,kt(e,a),st(r,e,a,-1))}return ho(),r=qi(Error(f(421))),la(e,t,o,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=vd.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,Be=Ot(a.nextSibling),ze=t,Z=!0,rt=null,e!==null&&(qe[Qe++]=wt,qe[Qe++]=xt,qe[Qe++]=Gt,wt=e.id,xt=e.overflow,Gt=t),t=Xi(t,r.children),t.flags|=4096,t)}function ql(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ti(e.return,t,n)}function Zi(e,t,n,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function Ql(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(Ae(e,t,r.children,n),r=te.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ql(e,n,t);else if(e.tag===19)ql(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(te,r),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&ta(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Zi(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ta(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Zi(t,!0,n,null,i);break;case"together":Zi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ua(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(f(153));if(t.child!==null){for(e=t.child,n=Vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function od(e,t,n){switch(t.tag){case 3:Wl(t),kn();break;case 5:sl(t);break;case 1:Me(t.type)&&Hr(t);break;case 4:Mi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;q(Kr,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(q(te,te.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Hl(e,t,n):(q(te,te.current&1),e=Et(e,t,n),e!==null?e.sibling:null);q(te,te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Ql(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),q(te,te.current),r)break;return null;case 22:case 23:return t.lanes=0,zl(e,t,n)}return Et(e,t,n)}var Yl,eo,$l,Gl;Yl=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},eo=function(){},$l=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Zt(mt.current);var i=null;switch(n){case"input":a=Ta(e,a),r=Ta(e,r),i=[];break;case"select":a=b({},a,{value:void 0}),r=b({},r,{value:void 0}),i=[];break;case"textarea":a=Ma(e,a),r=Ma(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ur)}La(n,r);var o;n=null;for(m in a)if(!r.hasOwnProperty(m)&&a.hasOwnProperty(m)&&a[m]!=null)if(m==="style"){var s=a[m];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else m!=="dangerouslySetInnerHTML"&&m!=="children"&&m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(M.hasOwnProperty(m)?i||(i=[]):(i=i||[]).push(m,null));for(m in r){var l=r[m];if(s=a!=null?a[m]:void 0,r.hasOwnProperty(m)&&l!==s&&(l!=null||s!=null))if(m==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(i||(i=[]),i.push(m,n)),n=l;else m==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(m,l)):m==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(m,""+l):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&(M.hasOwnProperty(m)?(l!=null&&m==="onScroll"&&Y("scroll",e),i||s===l||(i=[])):(i=i||[]).push(m,l))}n&&(i=i||[]).push("style",n);var m=i;(t.updateQueue=m)&&(t.flags|=4)}},Gl=function(e,t,n,r){n!==r&&(t.flags|=4)};function dr(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sd(e,t,n){var r=t.pendingProps;switch(ki(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(t),null;case 1:return Me(t.type)&&Vr(),ke(t),null;case 3:return r=t.stateNode,An(),$(De),$(we),Ni(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&($r(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,rt!==null&&(po(rt),rt=null))),eo(e,t),ke(t),null;case 5:Oi(t);var a=Zt(or.current);if(n=t.type,e!==null&&t.stateNode!=null)$l(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(f(166));return ke(t),null}if(e=Zt(mt.current),$r(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[pt]=t,r[tr]=i,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(a=0;a<Xn.length;a++)Y(Xn[a],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":jo(r,i),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Y("invalid",r);break;case"textarea":Oo(r,i),Y("invalid",r)}La(n,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Br(r.textContent,s,e),a=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Br(r.textContent,s,e),a=["children",""+s]):M.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&Y("scroll",r)}switch(n){case"input":vr(r),Mo(r,i,!0);break;case"textarea":vr(r),No(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ur)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_o(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[pt]=t,e[tr]=r,Yl(e,t,!1,!1),t.stateNode=e;e:{switch(o=Na(n,r),n){case"dialog":Y("cancel",e),Y("close",e),a=r;break;case"iframe":case"object":case"embed":Y("load",e),a=r;break;case"video":case"audio":for(a=0;a<Xn.length;a++)Y(Xn[a],e);a=r;break;case"source":Y("error",e),a=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),a=r;break;case"details":Y("toggle",e),a=r;break;case"input":jo(e,r),a=Ta(e,r),Y("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=b({},r,{value:void 0}),Y("invalid",e);break;case"textarea":Oo(e,r),a=Ma(e,r),Y("invalid",e);break;default:a=r}La(n,a),s=a;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?Jo(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ro(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&On(e,l):typeof l=="number"&&On(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(M.hasOwnProperty(i)?l!=null&&i==="onScroll"&&Y("scroll",e):l!=null&&Xe(e,i,l,o))}switch(n){case"input":vr(e),Mo(e,r,!1);break;case"textarea":vr(e),No(e);break;case"option":r.value!=null&&e.setAttribute("value",""+B(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?sn(e,!!r.multiple,i,!1):r.defaultValue!=null&&sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ur)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ke(t),null;case 6:if(e&&t.stateNode!=null)Gl(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(f(166));if(n=Zt(or.current),Zt(mt.current),$r(t)){if(r=t.stateNode,n=t.memoizedProps,r[pt]=t,(i=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:Br(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Br(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=t,t.stateNode=r}return ke(t),null;case 13:if($(te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Be!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Zs(),kn(),t.flags|=98560,i=!1;else if(i=$r(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(f(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(f(317));i[pt]=t}else kn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ke(t),i=!1}else rt!==null&&(po(rt),rt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(te.current&1)!==0?ue===0&&(ue=3):ho())),t.updateQueue!==null&&(t.flags|=4),ke(t),null);case 4:return An(),eo(e,t),e===null&&Zn(t.stateNode.containerInfo),ke(t),null;case 10:return Pi(t.type._context),ke(t),null;case 17:return Me(t.type)&&Vr(),ke(t),null;case 19:if($(te),i=t.memoizedState,i===null)return ke(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)dr(i,!1);else{if(ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=ta(e),o!==null){for(t.flags|=128,dr(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return q(te,te.current&1|2),t.child}e=e.sibling}i.tail!==null&&ie()>jn&&(t.flags|=128,r=!0,dr(i,!1),t.lanes=4194304)}else{if(!r)if(e=ta(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),dr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Z)return ke(t),null}else 2*ie()-i.renderingStartTime>jn&&n!==1073741824&&(t.flags|=128,r=!0,dr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ie(),t.sibling=null,n=te.current,q(te,r?n&1|2:n&1),t):(ke(t),null);case 22:case 23:return fo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ue&1073741824)!==0&&(ke(t),t.subtreeFlags&6&&(t.flags|=8192)):ke(t),null;case 24:return null;case 25:return null}throw Error(f(156,t.tag))}function ld(e,t){switch(ki(t),t.tag){case 1:return Me(t.type)&&Vr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return An(),$(De),$(we),Ni(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Oi(t),null;case 13:if($(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(f(340));kn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(te),null;case 4:return An(),null;case 10:return Pi(t.type._context),null;case 22:case 23:return fo(),null;case 24:return null;default:return null}}var ca=!1,be=!1,ud=typeof WeakSet=="function"?WeakSet:Set,k=null;function Pn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(e,t,r)}else n.current=null}function to(e,t,n){try{n()}catch(r){ae(e,t,r)}}var Kl=!1;function cd(e,t){if(mi=jr,e=Ts(),ii(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,m=0,g=0,v=e,h=null;t:for(;;){for(var x;v!==n||a!==0&&v.nodeType!==3||(s=o+a),v!==i||r!==0&&v.nodeType!==3||(l=o+r),v.nodeType===3&&(o+=v.nodeValue.length),(x=v.firstChild)!==null;)h=v,v=x;for(;;){if(v===e)break t;if(h===n&&++m===a&&(s=o),h===i&&++g===r&&(l=o),(x=v.nextSibling)!==null)break;v=h,h=v.parentNode}v=x}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(fi={focusedElem:e,selectionRange:n},jr=!1,k=t;k!==null;)if(t=k,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,k=e;else for(;k!==null;){t=k;try{var E=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var C=E.memoizedProps,oe=E.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?C:at(t.type,C),oe);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(f(163))}}catch(S){ae(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,k=e;break}k=t.return}return E=Kl,Kl=!1,E}function pr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&to(t,n,i)}a=a.next}while(a!==r)}}function da(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function no(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Xl(e){var t=e.alternate;t!==null&&(e.alternate=null,Xl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[tr],delete t[vi],delete t[qc],delete t[Qc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Zl(e){return e.tag===5||e.tag===3||e.tag===4}function eu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ro(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ur));else if(r!==4&&(e=e.child,e!==null))for(ro(e,t,n),e=e.sibling;e!==null;)ro(e,t,n),e=e.sibling}function ao(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ao(e,t,n),e=e.sibling;e!==null;)ao(e,t,n),e=e.sibling}var he=null,it=!1;function Jt(e,t,n){for(n=n.child;n!==null;)tu(e,t,n),n=n.sibling}function tu(e,t,n){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Er,n)}catch{}switch(n.tag){case 5:be||Pn(n,t);case 6:var r=he,a=it;he=null,Jt(e,t,n),he=r,it=a,he!==null&&(it?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(it?(e=he,n=n.stateNode,e.nodeType===8?gi(e.parentNode,n):e.nodeType===1&&gi(e,n),Vn(e)):gi(he,n.stateNode));break;case 4:r=he,a=it,he=n.stateNode.containerInfo,it=!0,Jt(e,t,n),he=r,it=a;break;case 0:case 11:case 14:case 15:if(!be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&((i&2)!==0||(i&4)!==0)&&to(n,t,o),a=a.next}while(a!==r)}Jt(e,t,n);break;case 1:if(!be&&(Pn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ae(n,t,s)}Jt(e,t,n);break;case 21:Jt(e,t,n);break;case 22:n.mode&1?(be=(r=be)||n.memoizedState!==null,Jt(e,t,n),be=r):Jt(e,t,n);break;default:Jt(e,t,n)}}function nu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ud),t.forEach(function(r){var a=Sd.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:he=s.stateNode,it=!1;break e;case 3:he=s.stateNode.containerInfo,it=!0;break e;case 4:he=s.stateNode.containerInfo,it=!0;break e}s=s.return}if(he===null)throw Error(f(160));tu(i,o,a),he=null,it=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(m){ae(a,t,m)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ru(t,e),t=t.sibling}function ru(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ot(t,e),ht(e),r&4){try{pr(3,e,e.return),da(3,e)}catch(C){ae(e,e.return,C)}try{pr(5,e,e.return)}catch(C){ae(e,e.return,C)}}break;case 1:ot(t,e),ht(e),r&512&&n!==null&&Pn(n,n.return);break;case 5:if(ot(t,e),ht(e),r&512&&n!==null&&Pn(n,n.return),e.flags&32){var a=e.stateNode;try{On(a,"")}catch(C){ae(e,e.return,C)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Do(a,i),Na(s,o);var m=Na(s,i);for(o=0;o<l.length;o+=2){var g=l[o],v=l[o+1];g==="style"?Jo(a,v):g==="dangerouslySetInnerHTML"?Ro(a,v):g==="children"?On(a,v):Xe(a,g,v,m)}switch(s){case"input":ja(a,i);break;case"textarea":Lo(a,i);break;case"select":var h=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?sn(a,!!i.multiple,x,!1):h!==!!i.multiple&&(i.defaultValue!=null?sn(a,!!i.multiple,i.defaultValue,!0):sn(a,!!i.multiple,i.multiple?[]:"",!1))}a[tr]=i}catch(C){ae(e,e.return,C)}}break;case 6:if(ot(t,e),ht(e),r&4){if(e.stateNode===null)throw Error(f(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(C){ae(e,e.return,C)}}break;case 3:if(ot(t,e),ht(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vn(t.containerInfo)}catch(C){ae(e,e.return,C)}break;case 4:ot(t,e),ht(e);break;case 13:ot(t,e),ht(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(so=ie())),r&4&&nu(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(be=(m=be)||g,ot(t,e),be=m):ot(t,e),ht(e),r&8192){if(m=e.memoizedState!==null,(e.stateNode.isHidden=m)&&!g&&(e.mode&1)!==0)for(k=e,g=e.child;g!==null;){for(v=k=g;k!==null;){switch(h=k,x=h.child,h.tag){case 0:case 11:case 14:case 15:pr(4,h,h.return);break;case 1:Pn(h,h.return);var E=h.stateNode;if(typeof E.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,E.props=t.memoizedProps,E.state=t.memoizedState,E.componentWillUnmount()}catch(C){ae(r,n,C)}}break;case 5:Pn(h,h.return);break;case 22:if(h.memoizedState!==null){ou(v);continue}}x!==null?(x.return=h,k=x):ou(v)}g=g.sibling}e:for(g=null,v=e;;){if(v.tag===5){if(g===null){g=v;try{a=v.stateNode,m?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=v.stateNode,l=v.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Fo("display",o))}catch(C){ae(e,e.return,C)}}}else if(v.tag===6){if(g===null)try{v.stateNode.nodeValue=m?"":v.memoizedProps}catch(C){ae(e,e.return,C)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;g===v&&(g=null),v=v.return}g===v&&(g=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:ot(t,e),ht(e),r&4&&nu(e);break;case 21:break;default:ot(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Zl(n)){var r=n;break e}n=n.return}throw Error(f(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(On(a,""),r.flags&=-33);var i=eu(e);ao(e,i,a);break;case 3:case 4:var o=r.stateNode.containerInfo,s=eu(e);ro(e,s,o);break;default:throw Error(f(161))}}catch(l){ae(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dd(e,t,n){k=e,au(e)}function au(e,t,n){for(var r=(e.mode&1)!==0;k!==null;){var a=k,i=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||ca;if(!o){var s=a.alternate,l=s!==null&&s.memoizedState!==null||be;s=ca;var m=be;if(ca=o,(be=l)&&!m)for(k=a;k!==null;)o=k,l=o.child,o.tag===22&&o.memoizedState!==null?su(a):l!==null?(l.return=o,k=l):su(a);for(;i!==null;)k=i,au(i),i=i.sibling;k=a,ca=s,be=m}iu(e)}else(a.subtreeFlags&8772)!==0&&i!==null?(i.return=a,k=i):iu(e)}}function iu(e){for(;k!==null;){var t=k;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:be||da(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!be)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:at(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ol(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ol(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var m=t.alternate;if(m!==null){var g=m.memoizedState;if(g!==null){var v=g.dehydrated;v!==null&&Vn(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(f(163))}be||t.flags&512&&no(t)}catch(h){ae(t,t.return,h)}}if(t===e){k=null;break}if(n=t.sibling,n!==null){n.return=t.return,k=n;break}k=t.return}}function ou(e){for(;k!==null;){var t=k;if(t===e){k=null;break}var n=t.sibling;if(n!==null){n.return=t.return,k=n;break}k=t.return}}function su(e){for(;k!==null;){var t=k;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{da(4,t)}catch(l){ae(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(l){ae(t,a,l)}}var i=t.return;try{no(t)}catch(l){ae(t,i,l)}break;case 5:var o=t.return;try{no(t)}catch(l){ae(t,o,l)}}}catch(l){ae(t,t.return,l)}if(t===e){k=null;break}var s=t.sibling;if(s!==null){s.return=t.return,k=s;break}k=t.return}}var pd=Math.ceil,pa=Se.ReactCurrentDispatcher,io=Se.ReactCurrentOwner,Ge=Se.ReactCurrentBatchConfig,_=0,me=null,se=null,ye=0,Ue=0,Tn=Lt(0),ue=0,mr=null,tn=0,ma=0,oo=0,fr=null,Le=null,so=0,jn=1/0,Ct=null,fa=!1,lo=null,zt=null,ha=!1,Bt=null,ya=0,hr=0,uo=null,ga=-1,va=0;function Ie(){return(_&6)!==0?ie():ga!==-1?ga:ga=ie()}function Ut(e){return(e.mode&1)===0?1:(_&2)!==0&&ye!==0?ye&-ye:$c.transition!==null?(va===0&&(va=es()),va):(e=U,e!==0||(e=window.event,e=e===void 0?16:us(e.type)),e)}function st(e,t,n,r){if(50<hr)throw hr=0,uo=null,Error(f(185));Jn(e,n,r),((_&2)===0||e!==me)&&(e===me&&((_&2)===0&&(ma|=n),ue===4&&Wt(e,ye)),Ne(e,r),n===1&&_===0&&(t.mode&1)===0&&(jn=ie()+500,qr&&_t()))}function Ne(e,t){var n=e.callbackNode;$u(e,t);var r=Ir(e,e===me?ye:0);if(r===0)n!==null&&Ko(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ko(n),t===1)e.tag===0?Yc(uu.bind(null,e)):Ys(uu.bind(null,e)),Vc(function(){(_&6)===0&&_t()}),n=null;else{switch(ts(r)){case 1:n=Ua;break;case 4:n=Xo;break;case 16:n=br;break;case 536870912:n=Zo;break;default:n=br}n=gu(n,lu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function lu(e,t){if(ga=-1,va=0,(_&6)!==0)throw Error(f(327));var n=e.callbackNode;if(Dn()&&e.callbackNode!==n)return null;var r=Ir(e,e===me?ye:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Sa(e,r);else{t=r;var a=_;_|=2;var i=du();(me!==e||ye!==t)&&(Ct=null,jn=ie()+500,rn(e,t));do try{hd();break}catch(s){cu(e,s)}while(!0);Ii(),pa.current=i,_=a,se!==null?t=0:(me=null,ye=0,t=ue)}if(t!==0){if(t===2&&(a=Wa(e),a!==0&&(r=a,t=co(e,a))),t===1)throw n=mr,rn(e,0),Wt(e,r),Ne(e,ie()),n;if(t===6)Wt(e,r);else{if(a=e.current.alternate,(r&30)===0&&!md(a)&&(t=Sa(e,r),t===2&&(i=Wa(e),i!==0&&(r=i,t=co(e,i))),t===1))throw n=mr,rn(e,0),Wt(e,r),Ne(e,ie()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(f(345));case 2:an(e,Le,Ct);break;case 3:if(Wt(e,r),(r&130023424)===r&&(t=so+500-ie(),10<t)){if(Ir(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Ie(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=yi(an.bind(null,e,Le,Ct),t);break}an(e,Le,Ct);break;case 4:if(Wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var o=31-tt(r);i=1<<o,o=t[o],o>a&&(a=o),r&=~i}if(r=a,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pd(r/1960))-r,10<r){e.timeoutHandle=yi(an.bind(null,e,Le,Ct),r);break}an(e,Le,Ct);break;case 5:an(e,Le,Ct);break;default:throw Error(f(329))}}}return Ne(e,ie()),e.callbackNode===n?lu.bind(null,e):null}function co(e,t){var n=fr;return e.current.memoizedState.isDehydrated&&(rn(e,t).flags|=256),e=Sa(e,t),e!==2&&(t=Le,Le=n,t!==null&&po(t)),e}function po(e){Le===null?Le=e:Le.push.apply(Le,e)}function md(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!nt(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wt(e,t){for(t&=~oo,t&=~ma,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tt(t),r=1<<n;e[n]=-1,t&=~r}}function uu(e){if((_&6)!==0)throw Error(f(327));Dn();var t=Ir(e,0);if((t&1)===0)return Ne(e,ie()),null;var n=Sa(e,t);if(e.tag!==0&&n===2){var r=Wa(e);r!==0&&(t=r,n=co(e,r))}if(n===1)throw n=mr,rn(e,0),Wt(e,t),Ne(e,ie()),n;if(n===6)throw Error(f(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,an(e,Le,Ct),Ne(e,ie()),null}function mo(e,t){var n=_;_|=1;try{return e(t)}finally{_=n,_===0&&(jn=ie()+500,qr&&_t())}}function nn(e){Bt!==null&&Bt.tag===0&&(_&6)===0&&Dn();var t=_;_|=1;var n=Ge.transition,r=U;try{if(Ge.transition=null,U=1,e)return e()}finally{U=r,Ge.transition=n,_=t,(_&6)===0&&_t()}}function fo(){Ue=Tn.current,$(Tn)}function rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Wc(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(ki(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vr();break;case 3:An(),$(De),$(we),Ni();break;case 5:Oi(r);break;case 4:An();break;case 13:$(te);break;case 19:$(te);break;case 10:Pi(r.type._context);break;case 22:case 23:fo()}n=n.return}if(me=e,se=e=Vt(e.current,null),ye=Ue=t,ue=0,mr=null,oo=ma=tn=0,Le=fr=null,Xt!==null){for(t=0;t<Xt.length;t++)if(n=Xt[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=a,r.next=o}n.pending=r}Xt=null}return e}function cu(e,t){do{var n=se;try{if(Ii(),na.current=oa,ra){for(var r=ne.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}ra=!1}if(en=0,pe=le=ne=null,sr=!1,lr=0,io.current=null,n===null||n.return===null){ue=1,mr=t,se=null;break}e:{var i=e,o=n.return,s=n,l=t;if(t=ye,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var m=l,g=s,v=g.tag;if((g.mode&1)===0&&(v===0||v===11||v===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var x=Nl(o);if(x!==null){x.flags&=-257,_l(x,o,s,i,t),x.mode&1&&Ll(i,m,t),t=x,l=m;var E=t.updateQueue;if(E===null){var C=new Set;C.add(l),t.updateQueue=C}else E.add(l);break e}else{if((t&1)===0){Ll(i,m,t),ho();break e}l=Error(f(426))}}else if(Z&&s.mode&1){var oe=Nl(o);if(oe!==null){(oe.flags&65536)===0&&(oe.flags|=256),_l(oe,o,s,i,t),Ci(In(l,s));break e}}i=l=In(l,s),ue!==4&&(ue=2),fr===null?fr=[i]:fr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=Ml(i,l,t);il(i,d);break e;case 1:s=l;var u=i.type,p=i.stateNode;if((i.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(zt===null||!zt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=Ol(i,s,t);il(i,S);break e}}i=i.return}while(i!==null)}mu(n)}catch(A){t=A,se===n&&n!==null&&(se=n=n.return);continue}break}while(!0)}function du(){var e=pa.current;return pa.current=oa,e===null?oa:e}function ho(){(ue===0||ue===3||ue===2)&&(ue=4),me===null||(tn&268435455)===0&&(ma&268435455)===0||Wt(me,ye)}function Sa(e,t){var n=_;_|=2;var r=du();(me!==e||ye!==t)&&(Ct=null,rn(e,t));do try{fd();break}catch(a){cu(e,a)}while(!0);if(Ii(),_=n,pa.current=r,se!==null)throw Error(f(261));return me=null,ye=0,ue}function fd(){for(;se!==null;)pu(se)}function hd(){for(;se!==null&&!zu();)pu(se)}function pu(e){var t=yu(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?mu(e):se=t,io.current=null}function mu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=sd(n,t,Ue),n!==null){se=n;return}}else{if(n=ld(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,se=null;return}}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);ue===0&&(ue=5)}function an(e,t,n){var r=U,a=Ge.transition;try{Ge.transition=null,U=1,yd(e,t,n,r)}finally{Ge.transition=a,U=r}return null}function yd(e,t,n,r){do Dn();while(Bt!==null);if((_&6)!==0)throw Error(f(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(f(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Gu(e,i),e===me&&(se=me=null,ye=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ha||(ha=!0,gu(br,function(){return Dn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=Ge.transition,Ge.transition=null;var o=U;U=1;var s=_;_|=4,io.current=null,cd(e,n),ru(n,e),_c(fi),jr=!!mi,fi=mi=null,e.current=n,dd(n),Bu(),_=s,U=o,Ge.transition=i}else e.current=n;if(ha&&(ha=!1,Bt=e,ya=a),i=e.pendingLanes,i===0&&(zt=null),Vu(n.stateNode),Ne(e,ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(fa)throw fa=!1,e=lo,lo=null,e;return(ya&1)!==0&&e.tag!==0&&Dn(),i=e.pendingLanes,(i&1)!==0?e===uo?hr++:(hr=0,uo=e):hr=0,_t(),null}function Dn(){if(Bt!==null){var e=ts(ya),t=Ge.transition,n=U;try{if(Ge.transition=null,U=16>e?16:e,Bt===null)var r=!1;else{if(e=Bt,Bt=null,ya=0,(_&6)!==0)throw Error(f(331));var a=_;for(_|=4,k=e.current;k!==null;){var i=k,o=i.child;if((k.flags&16)!==0){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var m=s[l];for(k=m;k!==null;){var g=k;switch(g.tag){case 0:case 11:case 15:pr(8,g,i)}var v=g.child;if(v!==null)v.return=g,k=v;else for(;k!==null;){g=k;var h=g.sibling,x=g.return;if(Xl(g),g===m){k=null;break}if(h!==null){h.return=x,k=h;break}k=x}}}var E=i.alternate;if(E!==null){var C=E.child;if(C!==null){E.child=null;do{var oe=C.sibling;C.sibling=null,C=oe}while(C!==null)}}k=i}}if((i.subtreeFlags&2064)!==0&&o!==null)o.return=i,k=o;else e:for(;k!==null;){if(i=k,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:pr(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,k=d;break e}k=i.return}}var u=e.current;for(k=u;k!==null;){o=k;var p=o.child;if((o.subtreeFlags&2064)!==0&&p!==null)p.return=o,k=p;else e:for(o=u;k!==null;){if(s=k,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:da(9,s)}}catch(A){ae(s,s.return,A)}if(s===o){k=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,k=S;break e}k=s.return}}if(_=a,_t(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Er,e)}catch{}r=!0}return r}finally{U=n,Ge.transition=t}}return!1}function fu(e,t,n){t=In(n,t),t=Ml(e,t,1),e=Ft(e,t,1),t=Ie(),e!==null&&(Jn(e,1,t),Ne(e,t))}function ae(e,t,n){if(e.tag===3)fu(e,e,n);else for(;t!==null;){if(t.tag===3){fu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zt===null||!zt.has(r))){e=In(n,e),e=Ol(t,e,1),t=Ft(t,e,1),e=Ie(),t!==null&&(Jn(t,1,e),Ne(t,e));break}}t=t.return}}function gd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ie(),e.pingedLanes|=e.suspendedLanes&n,me===e&&(ye&n)===n&&(ue===4||ue===3&&(ye&130023424)===ye&&500>ie()-so?rn(e,0):oo|=n),Ne(e,t)}function hu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ar,Ar<<=1,(Ar&130023424)===0&&(Ar=4194304)));var n=Ie();e=kt(e,t),e!==null&&(Jn(e,t,n),Ne(e,n))}function vd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hu(e,n)}function Sd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(f(314))}r!==null&&r.delete(t),hu(e,n)}var yu;yu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)Oe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Oe=!1,od(e,t,n);Oe=(e.flags&131072)!==0}else Oe=!1,Z&&(t.flags&1048576)!==0&&$s(t,Yr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ua(e,t),e=t.pendingProps;var a=Sn(t,we.current);Cn(t,n),a=Fi(null,t,r,e,a,n);var i=Ji();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Me(r)?(i=!0,Hr(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Di(t),a.updater=sa,t.stateNode=a,a._reactInternals=t,Hi(t,r,e,n),t=$i(null,t,r,!0,i,n)):(t.tag=0,Z&&i&&xi(t),Ae(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ua(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=xd(r),e=at(r,e),a){case 0:t=Yi(null,t,r,e,n);break e;case 1:t=Ul(null,t,r,e,n);break e;case 11:t=Rl(null,t,r,e,n);break e;case 14:t=Fl(null,t,r,at(r.type,e),n);break e}throw Error(f(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:at(r,a),Yi(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:at(r,a),Ul(e,t,r,a,n);case 3:e:{if(Wl(t),e===null)throw Error(f(387));r=t.pendingProps,i=t.memoizedState,a=i.element,al(e,t),ea(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=In(Error(f(423)),t),t=Vl(e,t,r,n,a);break e}else if(r!==a){a=In(Error(f(424)),t),t=Vl(e,t,r,n,a);break e}else for(Be=Ot(t.stateNode.containerInfo.firstChild),ze=t,Z=!0,rt=null,n=nl(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(kn(),r===a){t=Et(e,t,n);break e}Ae(e,t,r,n)}t=t.child}return t;case 5:return sl(t),e===null&&Ei(t),r=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,hi(r,a)?o=null:i!==null&&hi(r,i)&&(t.flags|=32),Bl(e,t),Ae(e,t,o,n),t.child;case 6:return e===null&&Ei(t),null;case 13:return Hl(e,t,n);case 4:return Mi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=bn(t,null,r,n):Ae(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:at(r,a),Rl(e,t,r,a,n);case 7:return Ae(e,t,t.pendingProps,n),t.child;case 8:return Ae(e,t,t.pendingProps.children,n),t.child;case 12:return Ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,q(Kr,r._currentValue),r._currentValue=o,i!==null)if(nt(i.value,o)){if(i.children===a.children&&!De.current){t=Et(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=bt(-1,n&-n),l.tag=2;var m=i.updateQueue;if(m!==null){m=m.shared;var g=m.pending;g===null?l.next=l:(l.next=g.next,g.next=l),m.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Ti(i.return,n,t),s.lanes|=n;break}l=l.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(f(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Ti(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Ae(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Cn(t,n),a=Ye(a),r=r(a),t.flags|=1,Ae(e,t,r,n),t.child;case 14:return r=t.type,a=at(r,t.pendingProps),a=at(r.type,a),Fl(e,t,r,a,n);case 15:return Jl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:at(r,a),ua(e,t),t.tag=1,Me(r)?(e=!0,Hr(t)):e=!1,Cn(t,n),jl(t,r,a),Hi(t,r,a,n),$i(null,t,r,!0,e,n);case 19:return Ql(e,t,n);case 22:return zl(e,t,n)}throw Error(f(156,t.tag))};function gu(e,t){return Go(e,t)}function wd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(e,t,n,r){return new wd(e,t,n,r)}function yo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xd(e){if(typeof e=="function")return yo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ut)return 11;if(e===ct)return 14}return 2}function Vt(e,t){var n=e.alternate;return n===null?(n=Ke(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function wa(e,t,n,r,a,i){var o=2;if(r=e,typeof e=="function")yo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Te:return on(n.children,a,i,t);case He:o=8,a|=8;break;case At:return e=Ke(12,n,t,a|2),e.elementType=At,e.lanes=i,e;case Re:return e=Ke(13,n,t,a),e.elementType=Re,e.lanes=i,e;case et:return e=Ke(19,n,t,a),e.elementType=et,e.lanes=i,e;case re:return xa(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gt:o=10;break e;case qt:o=9;break e;case ut:o=11;break e;case ct:o=14;break e;case je:o=16,r=null;break e}throw Error(f(130,e==null?e:typeof e,""))}return t=Ke(o,n,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function on(e,t,n,r){return e=Ke(7,e,r,t),e.lanes=n,e}function xa(e,t,n,r){return e=Ke(22,e,r,t),e.elementType=re,e.lanes=n,e.stateNode={isHidden:!1},e}function go(e,t,n){return e=Ke(6,e,null,t),e.lanes=n,e}function vo(e,t,n){return t=Ke(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function kd(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Va(0),this.expirationTimes=Va(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Va(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function So(e,t,n,r,a,i,o,s,l){return e=new kd(e,t,n,s,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ke(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Di(i),e}function bd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ce,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function vu(e){if(!e)return Nt;e=e._reactInternals;e:{if(Qt(e)!==e||e.tag!==1)throw Error(f(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(f(171))}if(e.tag===1){var n=e.type;if(Me(n))return qs(e,n,t)}return t}function Su(e,t,n,r,a,i,o,s,l){return e=So(n,r,!0,e,a,i,o,s,l),e.context=vu(null),n=e.current,r=Ie(),a=Ut(n),i=bt(r,a),i.callback=t??null,Ft(n,i,a),e.current.lanes=a,Jn(e,a,r),Ne(e,r),e}function ka(e,t,n,r){var a=t.current,i=Ie(),o=Ut(a);return n=vu(n),t.context===null?t.context=n:t.pendingContext=n,t=bt(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ft(a,t,o),e!==null&&(st(e,a,o,i),Zr(e,a,o)),o}function ba(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wo(e,t){wu(e,t),(e=e.alternate)&&wu(e,t)}function Ed(){return null}var xu=typeof reportError=="function"?reportError:function(e){console.error(e)};function xo(e){this._internalRoot=e}Ea.prototype.render=xo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(f(409));ka(e,t,null,null)},Ea.prototype.unmount=xo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nn(function(){ka(null,e,null,null)}),t[vt]=null}};function Ea(e){this._internalRoot=e}Ea.prototype.unstable_scheduleHydration=function(e){if(e){var t=as();e={blockedOn:null,target:e,priority:t};for(var n=0;n<jt.length&&t!==0&&t<jt[n].priority;n++);jt.splice(n,0,e),n===0&&ss(e)}};function ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ca(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ku(){}function Cd(e,t,n,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var m=ba(o);i.call(m)}}var o=Su(t,r,e,0,null,!1,!1,"",ku);return e._reactRootContainer=o,e[vt]=o.current,Zn(e.nodeType===8?e.parentNode:e),nn(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var s=r;r=function(){var m=ba(l);s.call(m)}}var l=So(e,0,!1,null,null,!1,!1,"",ku);return e._reactRootContainer=l,e[vt]=l.current,Zn(e.nodeType===8?e.parentNode:e),nn(function(){ka(t,l,n,r)}),l}function Aa(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var s=a;a=function(){var l=ba(o);s.call(l)}}ka(t,o,e,a)}else o=Cd(n,t,e,a,r);return ba(o)}ns=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fn(t.pendingLanes);n!==0&&(Ha(t,n|1),Ne(t,ie()),(_&6)===0&&(jn=ie()+500,_t()))}break;case 13:nn(function(){var r=kt(e,1);if(r!==null){var a=Ie();st(r,e,1,a)}}),wo(e,1)}},qa=function(e){if(e.tag===13){var t=kt(e,134217728);if(t!==null){var n=Ie();st(t,e,134217728,n)}wo(e,134217728)}},rs=function(e){if(e.tag===13){var t=Ut(e),n=kt(e,t);if(n!==null){var r=Ie();st(n,e,t,r)}wo(e,t)}},as=function(){return U},is=function(e,t){var n=U;try{return U=e,t()}finally{U=n}},Fa=function(e,t,n){switch(t){case"input":if(ja(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Wr(r);if(!a)throw Error(f(90));To(r),ja(r,a)}}}break;case"textarea":Lo(e,n);break;case"select":t=n.value,t!=null&&sn(e,!!n.multiple,t,!1)}},Wo=mo,Vo=nn;var Ad={usingClientEntryPoint:!1,Events:[nr,gn,Wr,Bo,Uo,mo]},yr={findFiberByHostInstance:Yt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Id={bundleType:yr.bundleType,version:yr.version,rendererPackageName:yr.rendererPackageName,rendererConfig:yr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Se.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yo(e),e===null?null:e.stateNode},findFiberByHostInstance:yr.findFiberByHostInstance||Ed,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ia=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ia.isDisabled&&Ia.supportsFiber)try{Er=Ia.inject(Id),dt=Ia}catch{}}return _e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ad,_e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ko(t))throw Error(f(200));return bd(e,t,null,n)},_e.createRoot=function(e,t){if(!ko(e))throw Error(f(299));var n=!1,r="",a=xu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=So(e,1,!1,null,null,n,!1,r,a),e[vt]=t.current,Zn(e.nodeType===8?e.parentNode:e),new xo(t)},_e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(f(188)):(e=Object.keys(e).join(","),Error(f(268,e)));return e=Yo(t),e=e===null?null:e.stateNode,e},_e.flushSync=function(e){return nn(e)},_e.hydrate=function(e,t,n){if(!Ca(t))throw Error(f(200));return Aa(null,e,t,!0,n)},_e.hydrateRoot=function(e,t,n){if(!ko(e))throw Error(f(405));var r=n!=null&&n.hydratedSources||null,a=!1,i="",o=xu;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Su(t,null,e,1,n??null,a,!1,i,o),e[vt]=t.current,Zn(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Ea(t)},_e.render=function(e,t,n){if(!Ca(t))throw Error(f(200));return Aa(null,e,t,!1,n)},_e.unmountComponentAtNode=function(e){if(!Ca(e))throw Error(f(40));return e._reactRootContainer?(nn(function(){Aa(null,null,e,!1,function(){e._reactRootContainer=null,e[vt]=null})}),!0):!1},_e.unstable_batchedUpdates=mo,_e.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ca(n))throw Error(f(200));if(e==null||e._reactInternals===void 0)throw Error(f(38));return Aa(e,t,n,!1,r)},_e.version="18.3.1-next-f1338f8080-20240426",_e}var ju;function Nd(){if(ju)return Co.exports;ju=1;function D(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D)}catch(z){console.error(z)}}return D(),Co.exports=Ld(),Co.exports}var Du;function _d(){if(Du)return Pa;Du=1;var D=Nd();return Pa.createRoot=D.createRoot,Pa.hydrateRoot=D.hydrateRoot,Pa}var Rd=_d();function Fd(){const[D,z]=Mu.useState(null),f=[{id:1,question:"1. Explain Encapsulation and Access Modifiers in Java with examples.",answer:"",codeExample:`
Encapsulation

  Encapsulation means hiding data and methods inside one unit (class) and protecting the data from direct access from outside the class.
  It is also called data hiding.

Example:

class Student {
    private String name;  // data hidden
    private int age;

    // methods to set and get data
    public void setName(String n) {
        name = n;
    }

    public String getName() {
        return name;
    }
}


In this example,

  The variables name and age are private, so they cannot be accessed directly.
  They can only be changed or read using methods (setName() and getName()).
      

Simple Explanation:

Encapsulation keeps data safe and secure inside the class.
It allows you to control how the data is used.
You hide the details and only show what is needed.


Advantages:

Protects data (data hiding)
Increases security
Easy to maintain and change code
Helps in modular (clean) programming


---------------------------

Access Modifiers

👉 Without access modifiers, encapsulation cannot work properly, because data will not be protected.

Access modifiers are keywords used to control the visibility (access) of classes, methods, and variables in Java.
They decide who can use what in your program.


🧩 Types of Access Modifiers:
| Modifier              | Access Level                                                  | Can be accessed from                                |
| ----------------------| ------------------------------------------------------------- | --------------------------------------------------- |
| public                | everywhere                                                    | inside same class, same package, and other packages |
| private               | only within the same class                                    | can’t be accessed outside the class                 |
| protected             | within same package + subclasses (even in different packages) | used mostly in inheritance                          |
| default (no modifier) | only within the same package                                  | can’t be accessed outside the package               |


🟦 Example 1: public and private

class Person {
    public String name;   // public → can access anywhere
    private int age;      // private → only inside this class

    public void setAge(int a) {
        age = a;
    }

    public void showInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}

public class Main {
    public static void main(String[] args) {
        Person p = new Person();
        p.name = "Raj";      // allowed (public)
        // p.age = 20;       // ❌ not allowed (private)
        p.setAge(20);        // ✅ allowed using method
        p.showInfo();
    }
}


🟢 Output:
Name: Raj
Age: 20



🟩 Example 2: protected and default

File 1: Animal.java

package pack1;

public class Animal {
    protected String type = "Dog";  // protected
    String sound = "Bark";          // default (no modifier)
}


File 2: Main.java

package pack2;
import pack1.Animal;

class Dog extends Animal {
    void display() {
        System.out.println(type);  // ✅ allowed (protected)
        // System.out.println(sound); // ❌ not allowed (default)
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.display();
    }
}



🟨 In short (for exam writing):

Access Modifiers are used to control the visibility of classes, methods, and variables.
There are four types:
public – accessible everywhere
private – only inside the same class
protected – same package + subclasses
default – only inside the same package

`},{id:2,question:"2. Explain Inheritance and Interface",answer:"",codeExample:`
🟩 Inheritance (in Java)

Inheritance means one class can use the properties and methods of another class.
It allows you to reuse code and avoid writing the same code again.

It is like a child class getting features from a parent class.


🟦 Example:

// Parent class
class Animal {
    void eat() {
        System.out.println("Animal is eating");
    }
}

// Child class
class Dog extends Animal {
    void bark() {
        System.out.println("Dog is barking");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();   // inherited method from Animal
        d.bark();  // method of Dog class
    }
}


🟢 Output:
Animal is eating
Dog is barking


🟩 Explanation:

Animal is the parent (superclass).
Dog is the child (subclass).
The Dog class inherits the eat() method from the Animal class.
So, we can use both eat() and bark() with the same object.



🟨 Types of Inheritance in Java:

| Type         | Description                                                                                                              | Example           |
| -------------| -------------------------------------------------------------------------------------------------------------------------|-------------------|
| Single       | One class inherits another                                                                                               | class B extends A |
| Multilevel   | Class inherits another which is also inherited                                                                           | A → B → C         |
| Hierarchical | Multiple classes inherit one base class (like multiple child class and one parent class)                                 | A → B, C          |
| Multiple     | Not supported in Java (because of ambiguity) but can be done using interfaces (multiple parent class and on child class) | —                 |
  Hybrid       | combine two or more inheritance 

🟩 Example of Multilevel Inheritance:

class Animal {
    void eat() {
        System.out.println("Eating");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Barking");
    }
}

class BabyDog extends Dog {
    void weep() {
        System.out.println("Weeping");
    }
}

public class Main {
    public static void main(String[] args) {
        BabyDog bd = new BabyDog();
        bd.eat();
        bd.bark();
        bd.weep();
    }
}


🟢 Output:
Eating
Barking
Weeping


🟧 Advantages of Inheritance:

Code reusability – write once, use many times.
Easy to maintain and update code.
Supports method overriding (used in polymorphism).
Improves code readability and structure.


🗣️ Short Oral Answer (for viva):

“Inheritance means one class can use the features of another class.
It helps in code reusability.
The extends keyword is used in Java for inheritance.”



-------------------------------------------------------------------------------------


🟩 Interface in Java

An interface is like a blueprint of a class.
It contains only method declarations (no method body).
A class that uses the interface must implement all its methods.

You can think of an interface as a contract —
it tells what to do, but not how to do it.


🧩 Keyword: interface
🧩 Implements Keyword: implements


🟦 Example:

// Interface
interface Animal {
    void eat();   // method without body
    void sleep();
}

// Class implementing the interface
class Dog implements Animal {
    public void eat() {
        System.out.println("Dog is eating");
    }

    public void sleep() {
        System.out.println("Dog is sleeping");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();
        d.sleep();
    }
}


🟢 Output:
Dog is eating
Dog is sleeping


🟩 Explanation:

interface Animal defines two methods (eat() and sleep()), but doesn’t give their body.
class Dog implements Animal → means Dog must write (override) those methods.
implements keyword is used instead of extends.


🟧 Important Points:

All methods in an interface are abstract (no body).
Variables in an interface are public, static, and final by default.
A class can implement multiple interfaces (Java supports this).
Interfaces help in achieving multiple inheritance in Java.



🟨 Example: Multiple Interfaces

interface A {
    void show();
}

interface B {
    void display();
}

class Demo implements A, B {
    public void show() {
        System.out.println("Hello from A");
    }

    public void display() {
        System.out.println("Hello from B");
    }
}

public class Main {
    public static void main(String[] args) {
        Demo d = new Demo();
        d.show();
        d.display();
    }
}

🟢 Output:
Hello from A
Hello from B


🟩 Advantages of Interface:

Supports multiple inheritance.
Provides abstraction (hides implementation details).
Makes code more flexible and maintainable.
Helps in achieving loose coupling between classes.


🗣️ Short Oral Answer (for viva):

“An interface is a collection of abstract methods.
It shows what a class should do but not how.
A class uses the implements keyword to provide the code for those methods.”
      `},{id:3,question:"3. Explain Polymorphism",answer:"",codeExample:`
🟩 Polymorphism (in Java)

Polymorphism means one thing can take many forms.
In Java, it allows methods or objects to behave differently in different situations.

Polymorphism is one of the main features of OOP.


🔹 Types of Polymorphism in Java

  Compile-time Polymorphism (Method Overloading)
  Run-time Polymorphism (Method Overriding)


🟦 1. Compile-time Polymorphism (Method Overloading)

Same method name but different parameters in the same class.
The compiler decides which method to call → hence compile-time.

class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println(calc.add(5, 10));     // 15
        System.out.println(calc.add(5, 10, 15)); // 30
    }
}


✅ Explanation: Same method add works differently depending on number of parameters.



🟦 2. Run-time Polymorphism (Method Overriding)

Child class provides its own version of a method from parent class.
Which method to call is decided at runtime → hence run-time.

class Animal {
    void sound() {
        System.out.println("Animal makes sound");
    }
}

class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal a = new Dog(); // Parent reference, child object
        a.sound();            // Dog's method is called → run-time polymorphism
    }
}


🟢 Output:

Dog barks

🟩 Summary for Exams
Type	What it is	Example
Compile-time	Same method name, different parameters	Method overloading
Run-time	Child class changes parent method	Method overriding


🟧 Key Points:

Polymorphism means many forms.
Improves code reusability and flexibility.
Compile-time → method overloading.
Run-time → method overriding.


🗣️ Short Oral Answer (for viva):

“Polymorphism means one method or object can have many forms.
Method overloading is compile-time polymorphism,
and method overriding is run-time polymorphism.”


🟧 Key Points:

Polymorphism means many forms.
Improves code reusability and flexibility.
Compile-time → method overloading.
Run-time → method overriding.


🗣️ Short Oral Answer (for viva):

“Polymorphism means one method or object can have many forms.
Method overloading is compile-time polymorphism,
and method overriding is run-time polymorphism.”

`},{id:4,question:"4. Explain Abstract Class and Abstract Method in Java with examples.",answer:"",codeExample:`
🟩 Abstraction (in Java)

Abstraction means hiding the implementation details and showing only the functionality to the user.
It focuses on what an object does, not how it does it.

In simple words: “Show only necessary things, hide unnecessary details.”

🔹 How to achieve Abstraction in Java:

  Abstract Class
  Interface

(We already discussed interfaces; now let’s focus on abstract classes)


🟦 Abstract Class Example

abstract class Vehicle {
    abstract void start(); // abstract method (no body)
    
    void stop() {          // regular method (with body)
        System.out.println("Vehicle stopped");
    }
}

class Car extends Vehicle {
    void start() {         // providing body of abstract method
        System.out.println("Car started");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle v = new Car();
        v.start(); // Car's implementation
        v.stop();  // inherited method
    }
}


🟢 Output:
Car started
Vehicle stopped


🟩 Explanation:

Vehicle is abstract class → contains abstract method start().
Car extends Vehicle → must provide implementation for start().
Abstraction hides the details of how start() works inside the class.


🟧 Important Points:

Abstract class cannot be instantiated directly.
Abstract class can have abstract and non-abstract methods.
Abstraction is used to hide complex details from the user.
Interfaces are 100% abstraction (all methods abstract by default).


🗣️ Short Oral Answer (for viva):

“Abstraction means hiding the implementation details and showing only the functionality.
Abstract classes and interfaces are used to achieve abstraction in Java.”



🟩 Example: Abstraction with Interface

// Interface (100% abstraction)
interface Vehicle {
    void start();   // abstract method
    void stop();
}

// Class implementing the interface
class Car implements Vehicle {
    public void start() {
        System.out.println("Car started");
    }

    public void stop() {
        System.out.println("Car stopped");
    }
}

// Another class implementing the same interface
class Bike implements Vehicle {
    public void start() {
        System.out.println("Bike started");
    }

    public void stop() {
        System.out.println("Bike stopped");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle v1 = new Car();  // Interface reference, Car object
        v1.start();               // Car's start
        v1.stop();                // Car's stop

        Vehicle v2 = new Bike(); // Interface reference, Bike object
        v2.start();              // Bike's start
        v2.stop();               // Bike's stop
    }
}


🟢 Output:
Car started
Car stopped
Bike started
Bike stopped



🟩 Explanation:

Vehicle is an interface → defines methods but no body.
Car and Bike implement the interface → provide their own method bodies.
Using interface reference, you can call methods of any class implementing it.
This is abstraction because the user only sees start() and stop() without knowing how each vehicle starts or stops internally.


🟨 Key Points:

Interface achieves 100% abstraction.
Helps in polymorphism — same interface reference can point to different objects.
Makes code flexible, reusable, and easy to maintain.



Why interface is called 100% abstraction

In Java, an abstract class can have:
Abstract methods (no body) ✅
Concrete methods (with body) ❌
  → So abstraction is partial if some methods have body.


An interface in Java:

Before Java 8 → all methods are abstract by default, no method body allowed. ✅
From Java 8 → can have default and static methods, but regular methods still abstract.
      `},{id:5,question:"5. Why is Java called platform-independent but not processor-independent?",answer:"",codeExample:`
1️⃣ Java is Platform-Independent

Platform-independent means:
You can write Java code once and run it anywhere (Windows, Linux, Mac, etc.) without changing the code.
How? → Because of Java Virtual Machine (JVM).


Step by step:

  You write Java source code → Hello.java
  Java compiler converts it into bytecode → Hello.class
  Bytecode is not machine code, but a standard code understood by JVM.
  JVM exists for all platforms (Windows, Linux, Mac).
  So the same bytecode runs on any platform using its JVM.
✅ That’s why Java is platform-independent → Write once, run anywhere (WORA).


2️⃣ Java is NOT Processor-Independent

Processor-independent would mean:
The same code runs on all types of processors (CPU hardware) without any translation.
But Java is NOT directly processor-independent because:
JVM translates bytecode to machine code specific to that CPU/processor at runtime.
Example: Windows JVM generates code for x86 CPU, Linux JVM generates for ARM CPU, etc.
So the bytecode is universal, but machine code execution depends on processor.


Simple Analogy:

  Platform-independent:
  Think of Java bytecode as a USB drive with movies → you can plug it into any computer with a media player (JVM) and watch.

  Processor-dependent:
  But each computer has a different CPU, so the media player (JVM) must translate the movie into instructions its CPU can understand.


✅ Short Exam Answer:

Java is platform-independent because bytecode can run on any operating system using JVM.
But it is not processor-independent because the JVM converts bytecode into machine code specific to the processor at runtime.
      `},{id:6,question:"6. Explain JDK, JRE, JVM",answer:"",codeExample:`
1️⃣ JVM (Java Virtual Machine)

  JVM is a virtual machine that runs Java bytecode on any platform.
  It does not know Java source code, only bytecode (.class files).
  JVM is platform-dependent → each OS has its own JVM.

Responsibilities of JVM:
  Loads class files.
  Verifies bytecode.
  Executes bytecode.
Manages memory (Garbage Collection).

✅ Think of JVM as a player that runs Java bytecode on your computer.


2️⃣ JRE (Java Runtime Environment)

  JRE = JVM + Libraries + other files needed to run Java programs.
  You can run Java programs using JRE, but cannot compile Java source code.

Components of JRE:
  JVM (to run programs)
  Core libraries (java.lang, java.util, etc.)
  Supporting files

✅ Think of JRE as a ready-to-run Java environment for your programs.


3️⃣ JDK (Java Development Kit)

  JDK = JRE + Development Tools (compiler, debugger, etc.)
  You need JDK to write and compile Java programs.

JDK contains:
  JRE
  javac compiler (converts .java → .class)
  Tools like jar, javadoc, jdb

✅ Think of JDK as a complete toolkit to write, compile, and run Java programs.



Simple Diagram:
JDK
 └── JRE
      └── JVM

JVM → runs bytecode
JRE → JVM + libraries to run program
JDK → JRE + tools to develop program


Short Exam Answer:

  JVM: Executes Java bytecode on any platform (platform-dependent).
  JRE: Provides JVM + libraries to run Java programs.
  JDK: Full toolkit for Java development (JRE + compiler + tools).

table of difference:
______________________________________________________________________________________________________
| JVM                                    |  JRE                        | JDK                         |
|----------------------------------------|-----------------------------|-----------------------------|
| Runs Java bytecode                     | Environment to run Java     | Complete toolkit for Java   |
| Platform-dependent                     | Includes JVM and libraries  | Includes JRE and tools      |
| Does not include development tools     | Does not include compiler   | Includes Java compiler      |
| Cannot compile Java code               | Cannot compile Java code    | Can compile Java code       |
------------------------------------------------------------------------------------------------------

      `},{id:7,question:"7. Difference between OOPs and POPs",answer:"",codeExample:`
1️⃣ Procedure-Oriented Programming (POP)

POP focuses on functions or procedures.
Program is divided into functions.
Data is usually global and can be accessed by any function.
Example languages: C, Pascal

Characteristics:
  Based on functions
  Data is not secure (global access)
  Code not easily reusable
  Hard to maintain for large programs


2️⃣ Object-Oriented Programming (OOP)

OOP focuses on objects.
Program is divided into classes and objects.
Data is encapsulated inside objects → more secure
Example languages: Java, C++, Python

Characteristics:
  Based on objects and classes
  Encapsulation, inheritance, polymorphism, abstraction
  Code is reusable and easy to maintain
  Better for large and complex programs


Difference Table (Easy Version)

| POP (Procedure-Oriented Programming) | OOP (Object-Oriented Programming)   |
| ------------------------------------ | ----------------------------------- |
| Focuses on functions/procedures      | Focuses on objects/classes          |
| Data is global and not secure        | Data is encapsulated and secure     |
| Code less reusable                   | Code more reusable                  |
| Hard to maintain large programs      | Easy to maintain large programs     |
| Example: C, Pascal                   | Example: Java, C++                  |

`},{id:8,question:"8. What is Unicode and why is it used in Java",answer:"",codeExample:`
🟩 What is Unicode?

Unicode is a universal character encoding system used to represent all characters of all languages — letters, digits, symbols, emojis, etc.

Each character is given a unique number (code point) called a Unicode value.
Example:

'A' → U+0041
'अ' → U+0905
'你' → U+4F60


🟦 Why Unicode is used in Java

->Java is an international language — it’s used all over the world.
So it must support many languages (English, Hindi, Chinese, etc.).

->Before Unicode, programming languages (like C/C++) used ASCII, which only supports English (128 characters).

->Unicode supports more than 100,000 characters, covering almost every written language.

->Java uses Unicode internally for all char, String, and text processing, so your Java programs can handle any global text easily.

🟩 Example:

public class Main {
    public static void main(String[] args) {
        char ch1 = 'A';        // English letter
        char ch2 = 'अ';   // Unicode for 'अ' (Hindi)
        System.out.println(ch1);
        System.out.println(ch2);
    }
}


🟢 Output:
A
अ


🟧 Short Exam Answer:

Unicode is a universal character encoding system that represents characters from all languages.
Java uses Unicode to support international text and make programs platform-independent for all languages.


`},{id:9,question:"9. Explain widening and narrowing type casting.",answer:"",codeExample:`
🟩 Type Casting in Java

Type casting means converting one data type into another.
There are two types of type casting in Java:

1. Widening (Implicit) Casting
2. Narrowing (Explicit) Casting


🟦 1. Widening Type Casting (Implicit Casting)

➡️ Definition:
Widening means converting a smaller data type into a larger data type automatically.
This is done by Java itself (no extra code needed).

➡️ Reason:
There is no data loss because the larger type can store all values of the smaller type.

➡️ Example:

public class Main {
    public static void main(String[] args) {
        int num = 10;       // int = 4 bytes
        double d = num;     // automatic conversion (int → double)
        System.out.println(d);
    }
}

🟢 Output:
10.0



🟧 2. Narrowing Type Casting (Explicit Casting)

➡️ Definition:
Narrowing means converting a larger data type into a smaller data type manually.
You must write the cast operator — otherwise, Java gives an error.

➡️ Reason:
There is a risk of data loss because the smaller type cannot hold all values of the larger type.

➡️ Example:

public class Main {
    public static void main(String[] args) {
        double d = 10.75;     // double = 8 bytes
        int num = (int) d;    // manual conversion (double → int)
        System.out.println(num);
    }
}

🟢 Output:
10

This is called Narrowing or Explicit casting.
(Notice the decimal part .75 is lost)




🟩 Summary Table
| Widening Casting        | Narrowing Casting                |
| ----------------------- | -------------------------------- |
| Small → Large data type | Large → Small data type          |
| Done automatically      | Done manually using (type)       |
| No data loss            | Possible data loss               |
| Example: int → double   | Example: double → int            |



🧠 Short Oral Answer (for viva):

Widening is automatic conversion from smaller to larger type (no data loss).
Narrowing is manual conversion from larger to smaller type (may lose data).
`},{id:10,question:"10. What are Wrapper Classes in Java? Explain with examples.",answer:"",codeExample:`
In Java, Wrapper Classes are used to convert primitive data types (like int, char, float) into objects.

➡️ In simple words:
Wrapper classes wrap (cover) primitive data types into objects so that they can be used in places where objects are required — like in collections (ArrayList, HashMap, etc.)


🟦 Why Wrapper Classes are Used

To use primitives as objects
To use Java Collection Framework (which only works with objects)
To use utility methods (like converting numbers to strings)
Supports Autoboxing and Unboxing


🟨 Primitive Types and Their Wrapper Classes
| Primitive Type | Wrapper Class |
| -------------- | ------------- |
| byte           | Byte          |
| short          | Short         |
| int            | Integer       |
| long           | Long          |
| float          | Float         |
| double         | Double        |
| char           | Character     |
| boolean        | Boolean       |


🟧 Example 1: Using Wrapper Class

public class Main {
    public static void main(String[] args) {
        int a = 10;                      // primitive type
        Integer obj = Integer.valueOf(a); // converting primitive to object
        System.out.println(obj);
    }
}


🟢 Output:
10

✅ Here, Integer is the wrapper class for int.



🟪 Example 2: Autoboxing and Unboxing

👉 Autoboxing:
Automatically converting primitive → object

👉 Unboxing:
Automatically converting object → primitive


public class Main {
    public static void main(String[] args) {
        int x = 5;
        Integer obj = x;    // Autoboxing
        int y = obj;        // Unboxing
        System.out.println(x + " " + obj + " " + y);
    }
}


🟢 Output:
5 5 5


🟩 Short Exam Answer:

Wrapper classes are used to convert primitive data types into objects.
They allow primitives to be used in collections and support features like autoboxing and unboxing.
Example: int → Integer, char → Character, boolean → Boolean.

`},{id:11,question:"11. What are primitive and non-primitive data types in Java?",answer:"",codeExample:`
🟩 1. Primitive Data Types

➡️ Definition:
Primitive data types are basic or fundamental data types that are predefined by Java.
They store simple values — not objects.

➡️ There are 8 primitive data types in Java:
| Type      | Size            | Example                | Description                          |
| --------- | --------------- | ---------------------- | ------------------------------------ |
| byte      | 1 byte          | byte b = 10;           | Small integer values                 |
| short     | 2 bytes         | short s = 1000;        | Small integer range                  |
| int       | 4 bytes         | int a = 5000;          | Common integer type                  |
| long      | 8 bytes         | long l = 100000L;      | Large integer values                 |
| float     | 4 bytes         | float f = 5.5f;        | Decimal numbers (single precision)   |
| double    | 8 bytes         | double d = 10.55;      | Decimal numbers (double precision)   |
| char      | 2 bytes         | char c = 'A';          | Single character (Unicode supported) |
| boolean   | 1 bit (logical) | boolean flag = true;   | True/False values                    |

✅ Primitive types store actual values directly.


🟦 Example:

public class Main {
    public static void main(String[] args) {
        int num = 10;         // primitive type
        char ch = 'A';
        boolean isTrue = true;
        System.out.println(num + " " + ch + " " + isTrue);
    }
}


🟢 Output:
10 A true



🟨 2. Non-Primitive Data Types

➡️ Definition:
Non-primitive data types are created by the programmer and are based on classes.
They store references (addresses) of objects, not actual values.

➡️ Examples:

  String
  Array
  Class
  Interface
  Objects

✅ Non-primitive types can have methods, and their size is not fixed.


🟧 Example:

public class Main {
    public static void main(String[] args) {
        String name = "Raj";      // String (non-primitive)
        int[] numbers = {1, 2, 3}; // Array (non-primitive)
        System.out.println(name);
        System.out.println(numbers[0]);
    }
}


🟢 Output:
Raj
1


🟪 Difference Between Primitive and Non-Primitive Data Types
| Primitive Data Type                | Non-Primitive Data Type              |
| ---------------------------------- | ------------------------------------ |
| Predefined by Java                 | Created by programmer                |
| Stores actual value                | Stores reference (address)           |
| Size is fixed                      | Size is not fixed                    |
| No additional methods              | Have methods and properties          |
| Examples: int, char, boolean       | Examples: String, Array, Class       |

      `},{id:12,question:"12. Explain Types of Variables in Java",answer:"",codeExample:`
🟩 Types of Variables in Java

In Java, there are three types of variables:

Instance Variables
Static Variables
Local Variables


🟩 1. Instance Variable

➡️ Definition:
An instance variable is a variable that belongs to an object.
Each object has its own copy of the instance variable.

➡️ Declared inside a class, but outside any method — without the static keyword.

🟦 Example:

public class Student {
    int rollNo;     // instance variable
    String name;    // instance variable

    public static void main(String[] args) {
        Student s1 = new Student();
        s1.rollNo = 1;
        s1.name = "Raj";

        Student s2 = new Student();
        s2.rollNo = 2;
        s2.name = "Priya";

        System.out.println(s1.name + " - " + s1.rollNo);
        System.out.println(s2.name + " - " + s2.rollNo);
    }
}


🟢 Output:

Raj - 1
Priya - 2

✅ Each object (s1, s2) has its own separate copy of rollNo and name.


🟨 2. Static Variable

➡️ Definition:
A static variable is a variable that belongs to the class, not to any object.
All objects share the same copy of the static variable.

➡️ Declared using the static keyword inside the class.

🟧 Example:

public class Student {
    int rollNo;           // instance variable
    String name;          // instance variable
    static String college = "ABC College"; // static variable

    public static void main(String[] args) {
        Student s1 = new Student();
        s1.rollNo = 1;
        s1.name = "Raj";

        Student s2 = new Student();
        s2.rollNo = 2;
        s2.name = "Priya";

        // Changing static variable through one object
        s2.college = "XYZ College";

        System.out.println(s1.name + " - " + s1.college);
        System.out.println(s2.name + " - " + s2.college);
    }
}


🟢 Output:
Raj - XYZ College
Priya - XYZ College

✅ Both objects share the same static variable, so the change reflects in both.


🧠 Short Oral Answer (for viva):

Instance variables are object-level variables, each object has its own copy.
Static variables are class-level variables shared by all objects.



🟧 3. Local Variable

➡️ Definition:
A local variable is declared inside a method, constructor, or block.
It is created when the method is called and destroyed when the method ends.

➡️ It is not accessible outside the method or block where it’s declared.
➡️ Must be initialized before use (no default value).

✅ Example:

public class Example {
    void show() {
        int num = 10;   // local variable
        System.out.println(num);
    }
}

📌 num exists only inside the show() method.




🟪 Difference Between Instance, Static, and Local Variables

| Instance Variable                         | Static Variable                              | Local Variable                                  |
| ------------------------------------------| ---------------------------------------------| ------------------------------------------------|
| Belongs to an object                      | Belongs to the class                         | Belongs to a method or block                    |
| Declared inside class but outside methods | Declared inside class using static keyword   | Declared inside a method, constructor, or block |
| Each object has its own copy              | Shared by all objects                        | Exists only while the method is running         |
| Stored in heap memory                     | Stored in method area (class area)           | Stored in stack memory                          |
| Can have a default value                  | Can have a default value                     | No default value (must initialize)              |
| Accessed using object name                | Accessed using class name                    | Accessed only within the same method            |




✅ Tip for exams:
Remember —

Instance → Object level
Static → Class level
Local → Method level
      `},{id:13,question:"13. Explain 1D and 2D array with syntax",answer:"",codeExample:`
🟩 1. One-Dimensional (1D) Array

➡️ Definition:
A 1D array is a list of elements of the same data type, stored in a single row (one direction).

➡️ It is used to store multiple values in a single variable.

✅ Syntax:

dataType[] arrayName = new dataType[size];
                or
dataType arrayName[] = new dataType[size];


✅ Example:
public class Main {
    public static void main(String[] args) {
        int[] numbers = new int[5] = {10, 20, 30, 40, 50};   // declaring like same this numbers[0] = 10;
        for (int i = 0; i < numbers.length; i++) {
            System.out.println(numbers[i]);
        }
    }
}
        
🟢 Output:
10
20
30
40
50


🟦 2. Two-Dimensional (2D) Array

➡️ Definition:
A 2D array is an array of arrays — it stores data in rows and columns (like a table or matrix).

➡️ It is used to represent tabular data.

✅ Syntax:

dataType[][] arrayName = new dataType[rows][columns];


✅ Example:
public class Main {
    public static void main(String[] args) {
        int[][] matrix = {         // this line is same like "int[][] matrix = new int[][] {" java allows
            {1, 2, 3},                When you declare and initialize an array in the same line,
            {4, 5, 6},                Java lets you skip writing new and the data type — because it can infer both automatically.
            {7, 8, 9}
        };
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
    }
}
  


🟪 Short Difference

| 1D Array                         | 2D Array                              |
| -------------------------------- | ------------------------------------- |
| Stores data in a single row      | Stores data in rows and columns       |
| Accessed using one index         | Accessed using two indexes            |
| Example: int[] a = new int[5];   | Example: int[][] a = new int[3][3];   |

      `},{id:14,question:"14. Classify the types of operators in Java.",answer:"",codeExample:`
🟩 Operators in Java

➡️ Definition:
Operators are special symbols used to perform operations on variables and values.
Example: +, -, *, /, ==, &&, etc.


🟦 Types of Operators in Java

Java operators are mainly classified into 8 types:


| No.     | Type of Operator      | Description                             | Example                      |
| ------- | ----------------------| --------------------------------------- | ---------------------------- |
| 1       | Arithmetic Operators  | Used to perform mathematical operations | +, -, *, /, %                |
| 2       | Relational Operators  | Used to compare two values              | ==, !=, >, <, >=, <=         |
| 3       | Logical Operators     | Used to combine conditions              | &&, ||                       |
| 4       | Assignment Operators  | Used to assign values to variables      | =, +=, -=, *=, /=            |
| 5       | Unary Operators       | Works on a single operand               | ++, --, +, -, !              |
| 6       | Bitwise Operators     | Works on bits (0s and 1s)               | &,|, ^, ~, <<, >>, >>>       |
| 7       | Ternary Operator      | Used as a short form of if-else         | condition ? value1 : value2  |
| 8       | Type Casting Operator | Used to convert data type               | (int), (double)              |


🟪 Short Oral Answer (for viva):

In Java, operators are symbols that perform operations on variables.
There are 8 types: Arithmetic, Relational, Logical, Assignment, Unary, Bitwise, Ternary, and Type Casting.


-----------------------------------------------------------------------------------


🟩 1. Ternary Operator (?:)

Definition:
A ternary operator is a shortcut for if-else.
It has three parts → condition ? value_if_true : value_if_false

Syntax:
result = (condition) ? value1 : value2;


Example:

public class Main {
    public static void main(String[] args) {
        int a = 10, b = 5;
        int max = (a > b) ? a : b; // if a > b then max = a else max = b
        System.out.println(max);
    }
}


🟢 Output:
10


-------------------------


| Operator | Usage         | Behavior                                                                    |
| -------- | ------------- | --------------------------------------------------------------------------- |
| &        | Single &      | Checks both conditions always (no shortcut)                                 |
| &&       | Double &&     | Short-circuits → if first condition is false, second is not checked         |


same for | and || operators

Example:

int a = 5, b = 10;

// & operator
if(a > 10 & b++ > 5){
    System.out.println("True");
}
System.out.println(b); // b = 11 (incremented)

// && operator
b = 10;
if(a > 10 && b++ > 5){
    System.out.println("True");
}
System.out.println(b); // b = 10 (not incremented because first condition false)


-------------------------


^ (Bitwise XOR) Operator

Definition:
The ^ operator compares each bit of two numbers.
If the bits are different, it gives 1; if they are the same, it gives 0.

Rule:
      0 ^ 0 = 0
      0 ^ 1 = 1
      1 ^ 0 = 1
      1 ^ 1 = 0


example:
public class Main {
    public static void main(String[] args) {
        int a = 5;  // 0101 in binary
        int b = 3;  // 0011 in binary
        int c = a ^ b; // XOR
        System.out.println(c);
    }
}


🟢 Output:

6


Explanation:

  0101 (5)
^ 0011 (3)
  ----
  0110 → 6


      `},{id:15,question:"15. Explain thread and multi threading",answer:"",codeExample:`
🟩 1. Thread

A thread is the smallest unit of a program that can run independently.
Think of it as one task or one path of execution.

Example (short & simple):

class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running");
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread t = new MyThread();
        t.start();  // start thread
    }
}


Output:
Thread is running

✅ Explanation: start() begins the thread, which runs the run() method.



🟦 2. Multithreading

Multithreading means running many threads at the same time.
Think of it as doing multiple tasks together.

Example (short & simple):

class MyThread extends Thread {
    String name;
    MyThread(String name) { this.name = name; }
    public void run() {
        System.out.println(name + " is running");
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread t1 = new MyThread("Thread 1");
        MyThread t2 = new MyThread("Thread 2");
        t1.start();
        t2.start();
    }
}


Output (order may vary):
Thread 1 is running
Thread 2 is running


✅ Explanation: Two threads run at the same time, so the program can do two tasks together.


🟪 Easy Difference Table
| Thread                     | Multithreading                     |
| -------------------------- | -----------------------------------|
| Smallest unit of a program | Many threads running together      |
| Runs one task              | Runs multiple tasks simultaneously |
| Can run alone              | Requires 2 or more threads         |




      `},{id:16,question:"16. Explain control statements (decision + looping)",answer:"",codeExample:`
Control statements are used to control the flow of a program — which code runs, how many times, and when to stop.

Types of Control Statements:

  1.  Decision Making Statements
  2.  Looping Statements
  3.  Jump Statements


🟦 1. Decision Making Statements

Used to make decisions based on conditions.


if statement: Executes a block if the condition is true.
if-else statement: Chooses between two blocks depending on the condition.
if-else-if ladder: Checks multiple conditions one by one.
switch statement: Selects a block among many based on a value.


(a) if 

int num = 10;
if(num > 0) {
    System.out.println("Number is positive");
}


(b) if-else statement

int num = -5;
if(num > 0) {
    System.out.println("Positive");
} else {
    System.out.println("Negative");
}


(c) if-else-if ladder

int marks = 75;
if(marks >= 90) {
    System.out.println("Grade A");
} else if(marks >= 75) {
    System.out.println("Grade B");
} else if(marks >= 50) {
    System.out.println("Grade C");
} else {
    System.out.println("Fail");
}


(d) switch statement

int day = 3;
switch(day) {
    case 1: System.out.println("Monday"); break;
    case 2: System.out.println("Tuesday"); break;
    case 3: System.out.println("Wednesday"); break;
    default: System.out.println("Other day");
}

✅ Tips: Use break to exit switch, default is optional.


-----------------------------------


🟨 2. Looping Statements

Used to repeat a block of code multiple times.

for loop: Executes a block for a fixed number of times.
while loop: Executes a block while a condition is true.
do-while loop: Executes a block at least once, then checks the condition.

(a) for loop

for(int i = 1; i <= 5; i++) {
    System.out.println("i = " + i);
}


(b) while loop

int i = 1;
while(i <= 5) {
    System.out.println("i = " + i);
    i++;
}


(c) do-while loop

int i = 1;
do {
    System.out.println("i = " + i);
    i++;
} while(i <= 5);


The do-while loop is called an exit-controlled loop because the condition is checked after executing the loop body, 
so the loop runs at least once, even if the condition is false.


-----------------------------------


🟧 3. Jump Statements

Used to change the normal flow of loops or methods.

break: Exits the current loop or switch immediately.
continue: Skips the current iteration and goes to the next iteration.
return: Exits from the current method immediately.

(a) break

Exits the current loop or switch immediately.

for(int i = 1; i <= 5; i++) {
    if(i == 3) break;
    System.out.println(i);
}


Output:

1
2


(b) continue

Skips the current iteration and goes to the next iteration.

for(int i = 1; i <= 5; i++) {
    if(i == 3) continue;
    System.out.println(i);
}


Output:

1
2
4
5


(c) return

Exits from the current method immediately.

public static void main(String[] args) {
    System.out.println("Start");
    return;
    // System.out.println("End"); // This will not execute
}


Output:

Start
`},{id:17,question:"17. Program: Menu-driven calculator using switch & do-while loop",answer:"",codeExample:`
import java.util.Scanner;  // for taking user input

public class Calculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int choice;
        double num1, num2, result;

        do {
            // Display Menu
            System.out.println("
--- Calculator Menu ---");
            System.out.println("1. Addition");
            System.out.println("2. Subtraction");
            System.out.println("3. Multiplication");
            System.out.println("4. Division");
            System.out.println("5. Exit");
            System.out.print("Enter your choice: ");
            choice = sc.nextInt();

            switch(choice) {
                case 1:
                    System.out.print("Enter two numbers: ");
                    num1 = sc.nextDouble();   // user input
                    num2 = sc.nextDouble();
                    result = num1 + num2;
                    System.out.println("Result = " + result);
                    break;

                case 2:
                    System.out.print("Enter two numbers: ");
                    num1 = sc.nextDouble();
                    num2 = sc.nextDouble();
                    result = num1 - num2;
                    System.out.println("Result = " + result);
                    break;

                case 3:
                    System.out.print("Enter two numbers: ");
                    num1 = sc.nextDouble();
                    num2 = sc.nextDouble();
                    result = num1 * num2;
                    System.out.println("Result = " + result);
                    break;

                case 4:
                    System.out.print("Enter two numbers: ");
                    num1 = sc.nextDouble();
                    num2 = sc.nextDouble();
                    if(num2 != 0)
                        System.out.println("Result = " + (num1 / num2));
                    else
                        System.out.println("Cannot divide by zero!");
                    break;

                case 5:
                    System.out.println("Exiting Calculator...");
                    break;

                default:
                    System.out.println("Invalid choice! Please try again.");
            }

        } while(choice != 5); // exit when user selects 5
    }
}




Sample Output:

--- Calculator Menu ---
1. Addition
2. Subtraction
3. Multiplication
4. Division
5. Exit
Enter your choice: 1
Enter two numbers: 5 3
Result = 8.0

--- Calculator Menu ---
Enter your choice: 5
Exiting Calculator...

`},{id:18,question:"18. Explain the uses of super keyword with examples.",answer:"",codeExample:`
🟩 What is super keyword?

➡️ The super keyword in Java is used to refer to the parent (superclass) of the current object.
It helps to access parent class members (variables, methods, and constructors) when they are hidden or overridden by the child class.

🟦 Uses of super keyword

The super keyword is mainly used in three ways:


🟢 1. To access parent class variables

If the child class has a variable with the same name as the parent class,
then super helps to access the parent class variable.

Example:

class Parent {
    int num = 100;
}

class Child extends Parent {
    int num = 200;

    void show() {
        System.out.println("Child num = " + num);
        System.out.println("Parent num = " + super.num); // using super
    }
}

public class Main {
    public static void main(String[] args) {
        Child obj = new Child();
        obj.show();
    }
}


Output:

Child num = 200
Parent num = 100


✅ Explanation:
super.num refers to the variable num in the Parent class.


🟢 2. To call parent class method

When a child class overrides a method of its parent,
super can be used to call the parent class’s version of that method.

Example:

class Animal {
    void sound() {
        System.out.println("Animal makes sound");
    }
}

class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks");
        super.sound(); // call parent method
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.sound();
    }
}


Output:

Dog barks
Animal makes sound


✅ Explanation:
super.sound() calls the sound() method from the Animal (parent) class.


🟢 3. To call parent class constructor

The super() statement is used to call the parent class constructor from the child class constructor.
It must be the first statement inside the child class constructor.

Example:

class Animal {
    Animal() {
        System.out.println("Animal constructor called");
    }
}

class Dog extends Animal {
    Dog() {
        super();  // calls parent constructor
        System.out.println("Dog constructor called");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
    }
}


Output:

Animal constructor called
Dog constructor called


✅ Explanation:
super() calls the parent constructor before executing the child’s constructor.

🟪 Summary Table
| Use of super   | Purpose                       | Example                  |
| ---------------| ----------------------------- | ------------------------ |
| super.variable | Access parent class variable  | super.num                |
| super.method() | Call parent class method      | super.show()             |
| super()        | Call parent class constructor | inside child constructor |



🧠 Short Exam Answer:

The super keyword in Java is used to refer to the parent class.
It can be used to access parent class variables, methods, and constructors that are hidden or overridden by the child class.      
`},{id:19,question:"19. Difference between static and dynamic binding.",answer:"",codeExample:`
🟩 What is Binding?

➡️ Binding means linking a method call to the method body.
In other words, when Java decides which method to call, that process is called binding.

🟦 1. Static Binding (Early Binding)

  Happens at compile time.
  The method call is fixed (decided) when the code is compiled.
  Used for static, private, and final methods because they cannot be overridden.

Example:

class Test {
    static void display() {   // static method
        System.out.println("Static Binding Example");
    }

    public static void main(String[] args) {
        Test.display();  // resolved at compile time
    }
}


✅ Explanation:
The compiler already knows which display() method to call — that’s static binding.


🟨 2. Dynamic Binding (Late Binding)

  Happens at runtime.
  The method to be called is decided during program execution.
  Used when method overriding occurs (inheritance).

Example:

class Animal {
    void sound() {
        System.out.println("Animal makes sound");
    }
}

class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal a = new Dog();  // parent reference, child object
        a.sound();  // resolved at runtime
    }
}


Output:

Dog barks


✅ Explanation:
At compile time, the compiler only knows a is of type Animal.
At runtime, it checks the actual object (Dog) and calls Dog’s sound() → dynamic binding.

🟪 Difference Table: Static vs Dynamic Binding
| Static Binding                                | Dynamic Binding                            |
| ----------------------------------------------|--------------------------------------------|
| Happens at compile time                       | Happens at runtime                         |
| Works with static, private, and final methods | Works with overridden (non-static) methods |
| Method call is decided by the compiler        | Method call is decided by the JVM          |
| Faster execution                              | Slightly slower execution                  |
| Example: Method Overloading                   | Example: Method Overriding                 |


🧠 Short Exam Answer:

In Java, static binding happens at compile time for static or final methods,
while dynamic binding happens at runtime when a method is overridden in a subclass.
      `},{id:20,question:"20. What is used of static keyword",answer:"",codeExample:`
🟩 What is static keyword in Java?

➡️ The static keyword is used in Java to create members (variables, methods, or blocks) that belong to the class, not to any specific object.

That means:
  You can access static members without creating an object of the class.


🟦 Uses of static keyword

The static keyword can be used with:

Variables
Methods
Blocks
Nested classes

Let’s see each one 👇


🟢 1. static variable (Class variable)

A variable that is shared by all objects of the class.
Only one copy of the variable exists in memory.

Example:

class Student {
    static String college = "ABC College";  // shared by all
    String name;

    Student(String name) {
        this.name = name;
    }

    void show() {
        System.out.println(name + " - " + college);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student("Raj");
        Student s2 = new Student("Jatin");

        s1.show();
        s2.show();
    }
}


Output:

Raj - ABC College
Jatin - ABC College


✅ Explanation:
Both students share the same college because it’s static.


🟢 2. static method

Can be called without creating an object.
Can only access static data directly.

Example:

class MathOperation {
    static void add(int a, int b) {   // static method
        System.out.println("Sum = " + (a + b));
    }

    public static void main(String[] args) {
        MathOperation.add(5, 3);  // no object needed
    }
}


Output:

Sum = 8


✅ Explanation:
The method add() is static, so it’s called directly using the class name.


🟢 3. static block

Used to initialize static variables.
Runs once when the class is loaded into memory (before main() method).

Example:

class Demo {
    static int x;

    static {
        x = 10;
        System.out.println("Static block executed");
    }

    public static void main(String[] args) {
        System.out.println("Main method executed");
        System.out.println("x = " + x);
    }
}


Output:

Static block executed
Main method executed
x = 10


✅ Explanation:
Static block runs first, before the main method.


🟢 4. static nested class

A class declared inside another class using static.
It can be accessed without creating an object of the outer class.

Example:

class Outer {
    static class Inner {
        void show() {
            System.out.println("Static Nested Class");
        }
    }

    public static void main(String[] args) {
        Outer.Inner obj = new Outer.Inner();
        obj.show();
    }
}


Output:

Static Nested Class


🟪 Summary Table
| Use of static       | Meaning                                    | Access             |
| ------------------- | ------------------------------------------ | ------------------ |
| static variable     | Shared by all objects                      | ClassName.variable |
| static method       | Can be called without object               | ClassName.method() |
| static block        | Runs once before main()                    | Automatically      |
| static nested class | Inner class that doesn’t need outer object | ClassName.Inner    |


🧠 Short Exam Answer:

The static keyword in Java is used to make variables, methods, and blocks belong to the class instead of objects.
It allows memory sharing and can be accessed without creating an object.
      `},{id:21,question:"21. Explain final keyword with all three uses.",answer:"",codeExample:`
.

🟩 What is final keyword in Java?

➡️ The final keyword in Java is used to make something unchangeable (fixed).
It can be applied to variables, methods, and classes.


🟦 1. final variable → Value cannot be changed

Once a final variable is assigned a value,
you cannot change (modify) it again.


Example:

class Example1 {
    public static void main(String[] args) {
        final int x = 10;
        System.out.println("x = " + x);

        // x = 20; ❌ Error – cannot change final variable
    }
}


✅ Explanation:
final variable acts like a constant — value cannot be reassigned.


🟦 2. final method → Cannot be overridden

If a method is declared as final,
it cannot be overridden in a subclass.


Example:

class Parent {
    final void show() {
        System.out.println("Parent class show method");
    }
}

class Child extends Parent {
    // void show() { } ❌ Error – cannot override final method
}

public class Main {
    public static void main(String[] args) {
        Child c = new Child();
        c.show();  // calls parent method
    }
}


✅ Explanation:
The method show() is final, so no child class can change its behavior.


🟦 3. final class → Cannot be inherited

If a class is declared as final,
no other class can extend (inherit) it.


Example:

final class Animal {
    void sound() {
        System.out.println("Animal sound");
    }
}

// class Dog extends Animal { } ❌ Error – cannot inherit final class

public class Main {
    public static void main(String[] args) {
        Animal a = new Animal();
        a.sound();
    }
}


✅ Explanation:
The Animal class is final, so it cannot have any subclass.


🟪 Summary Table
| Use of final   | Applied To     | Meaning                 | Example / Effect     |
| ---------------| -------------- | ----------------------- | -------------------- |
| final variable | Variable       | Value cannot be changed | Constant value       |
| final method   | Method         | Cannot be overridden    | Stops overriding     |
| final class    | Class          | Cannot be inherited     | Stops inheritance    |



🧠 Short Exam Answer:

The final keyword in Java is used to make data or behavior fixed.

final variable: value cannot change
final method: cannot be overridden
final class: cannot be inherited
      `},{id:22,question:"22. What are the methods of Object class?",answer:"",codeExample:`
🟩 What is Object Class in Java?

➡️ The Object class is the parent class of all classes in Java.
Every class you create automatically inherits from Object (directly or indirectly).

So, all Java classes can use the methods defined in the Object class.


🟪 Summary Table
| Method Name        | Purpose / Use                    |
| ------------------ |----------------------------------|
| toString()         | Returns string representation    |
| equals(Object obj) | Compares two objects             |
| hashCode()         | Returns hash value of object     |
| clone()            | Creates duplicate object         |
| finalize()         | Called before object destruction |
| getClass()         | Returns class information        |
| wait()             | Thread waits temporarily         |
| notify()           | Wakes one waiting thread         |
| notifyAll()        | Wakes all waiting threads        |


-------------------------------------------------------------------------------


🟦 1. toString() → Gives text of object

🟢 Use:
It returns a text (string) that describes the object.
By default, it gives a memory address, but we can change it.

Example:

class Student {
    String name = "Raj";
    int age = 20;

    public String toString() {
        return name + " is " + age + " years old";
    }

    public static void main(String[] args) {
        Student s = new Student();
        System.out.println(s.toString());
    }
}


Output:
Raj is 20 years old


✅ Meaning:
toString() helps show object data in a readable way.


🟦 2. equals() → Checks if two objects are same

🟢 Use:
It checks if two objects are equal.
But by default, it only checks if they are in the same memory location.

Example:

class Demo {
    int id;
    Demo(int id) {
        this.id = id;
    }

    public static void main(String[] args) {
        Demo d1 = new Demo(1);
        Demo d2 = new Demo(1);
        System.out.println(d1.equals(d2)); // false
    }
}


Output:
false


✅ Meaning:
Even though both objects have same value, they are different in memory, so result is false.


🟦 3. hashCode() → Gives a number for object

🟢 Use:
It gives a unique number (called hash code) for every object.
Used in HashMap, HashSet, etc.

Example:

class Test {
    public static void main(String[] args) {
        String s = "Hello";
        System.out.println(s.hashCode());
    }
}


Output:
69609650


✅ Meaning:
This number helps Java find objects faster in memory.


🟦 4. getClass() → Tells which class the object is from

🟢 Use:
It tells the class name of the object at runtime.

Example:

class Example {
    public static void main(String[] args) {
        String s = "Java";
        System.out.println(s.getClass());
    }
}


Output:
class java.lang.String


✅ Meaning:
getClass() helps Java know which class the object belongs to.


🟦 5. clone() → Makes a copy of the object

🟢 Use:
It copies one object into another.

Example:

class Student implements Cloneable {
    int id = 1;
    String name = "Raj";

    public static void main(String[] args) throws CloneNotSupportedException {
        Student s1 = new Student();
        Student s2 = (Student) s1.clone(); // copy created
        System.out.println(s2.id + " " + s2.name);
    }
}


Output:
1 Raj


✅ Meaning:
clone() creates a duplicate object with the same data.


      `},{id:23,question:"23. Explain the steps to create and use a user-defined package.",answer:"",codeExample:`
🟩 What is a Package in Java?

👉 A package in Java is a folder (group) that contains related classes, interfaces, and sub-packages.

Simple meaning:
Packages are used to organize classes and avoid name conflicts.

🟦 Types of Packages

    Built-in packages – already available (e.g. java.util, java.io)
    User-defined packages – created by the programmer (👉 you)


🟢 Steps to Create and Use a User-Defined Package

Let’s go step-by-step 👇



🧩 Step 1: Create a Package
👉 Use the package keyword at the top of your Java file.


Example (save as MyClass.java):

package mypack;  // step 1: create package

public class MyClass {
    public void show() {
        System.out.println("Hello from MyClass inside mypack package!");
    }
}


✅ Explanation:

The package name is mypack.
The class MyClass belongs to that package.

🗂️ Save this file inside a folder named mypack.

mypack/
   └── MyClass.java


   
🧩 Step 2: Compile the Class

Open Command Prompt (CMD) and go to the folder where your mypack folder is saved.

Then run:
    javac -d . MyClass.java


✅ Explanation:

-d . tells Java to put the .class file in the correct package folder.
After compiling, you’ll get:

    mypack/MyClass.class



🧩 Step 3: Use the Package in Another Program
Now create a new Java file in the same directory, but not inside the package folder.


Example (save as TestPackage.java):

import mypack.MyClass;  // step 3: import package

class TestPackage {
    public static void main(String[] args) {
        MyClass obj = new MyClass();
        obj.show();
    }
}



🧩 Step 4: Compile and Run

Compile:
    javac TestPackage.java


Run:
    java TestPackage


Output:
    Hello from MyClass inside mypack package!


✅ It worked! You successfully created and used a user-defined package.

🟪 Summary Table
| Step     | Action                          | Command / Example       |
|----------|---------------------------------|-------------------------|
| 1        | Create a package                | package mypack;         |
| 2        | Save in a folder with same name | mypack/MyClass.java     |
| 3        | Compile with package path       | javac -d . MyClass.java |
| 4        | Import and use in another file  | import mypack.MyClass;  |
| 5        | Run the program                 | java TestPackage        |


🧠 Short Exam Answer:

To create and use a user-defined package in Java:

Declare it using package packagename;.
Save the file in a folder with the same name.
Compile using javac -d . filename.java.
Import it using import packagename.ClassName;.
Use the class in your main program.



------------------------------------------------------------------------------

java.util

java.util is the utility toolbox of Java — it provides all essential classes for data storage, input, 
date/time, random numbers, and collection handling.

| Area              | Use                             |
| ----------------- | --------------------------------|
| Data storage      | ArrayList, HashMap, Set, etc.   |
| Input handling    | Scanner, StringTokenizer        |
| Randomization     | Random                          |
| Date/time         | Date, Calendar                  |
| Sorting/searching | Collections class               |
| Utilities         | Objects, Optional, Formatter    |



java.lang

This package is always imported by default in every Java program.

It contains all the core classes that you use all the time — without needing import.

💡 Common classes from java.lang:

| Class                              | Purpose                               |
| -----------------------------------| ------------------------------------- |
| Object                             | Base class for all classes            |
| String                             | Text handling                         |
| System                             | Input/output (System.out.println())   |
| Math                               | Math functions like sqrt(), pow()     |
| Thread                             | Multithreading                        |
| Exception                          | Exception handling                    |
| Integer, Double, Boolean, etc.     | Wrapper classes for primitive types   |
| Runtime                            | Interact with JVM at runtime          |



| Package                 | Auto Imported | Description                                         |
| ------------------------| --------------| --------------------------------------------------- |
| java.lang               | ✅ Yes       | Basic language classes (String, System, Math, etc.) |
| java.util               | ❌ No        | Collections, Scanner, Random, etc.                  |
| java.io                 | ❌ No        | Input/output                                        |
| java.net                | ❌ No        | Networking                                          |
| java.sql                | ❌ No        | Database connectivity                               |
| java.awt, javax.swing   | ❌ No        | GUI programming                                     |


      `},{id:24,question:"24. Differentiate between == and equals() method.",answer:"",codeExample:`
The == operator checks whether two references point to the same object in memory,
while the equals() method checks whether two objects have the same content (value).


Example (using ==):
String s1 = new String("Hello");
String s2 = new String("Hello");

System.out.println(s1 == s2);   // false



Example (using equals()):
String s1 = new String("Hello");
String s2 = new String("Hello");

System.out.println(s1.equals(s2));   // true


🟪 Summary Table
| Basis              | == Operator                      | equals() Method           |
| -------------------| ---------------------------------| --------------------------|
| Type               | Operator                         | Method from Object class  |
| Use                | Compares memory address          | Compares values (content) |
| Used for           | Both primitives & objects        | Only objects              |
| Returns true       | If both refer to the same object | If both have same content |
| Can be overridden? | ❌ No                            | ✅ Yes                   |
| Example Output     | s1 == s2 → false                 | s1.equals(s2) → true      |



|   Operator   |   Used In                          |   Meaning                                                          |
| ------------ | -----------------------------------| ------------------------------------------------------------------ |
| ==           | Java                               | Compares values (for primitives) or memory addresses (for objects) |
| equals()     | Java                               | Compares contents (object values)                                  |
| ===          | ❌ Not in Java (✅ in JavaScript) | Strictly compares value and type                                   |

`},{id:25,question:"25. What is the importance of -d option while compiling?",answer:"",codeExample:`
🟩 What is -d option in Java?

When we compile a Java program using the javac command,
the -d option is used to specify the destination folder
where the .class files (bytecode) should be stored.

🧠 Meaning:

-d stands for destination directory.


🧩 Syntax:
    javac -d <folder_name> <filename>.java


✅ Example:

Suppose your file is MyProgram.java, and inside it, you declared:

package mypackage;
public class MyProgram {
    public static void main(String[] args) {
        System.out.println("Hello Package!");
    }
}


Now, compile it like this:

javac -d . MyProgram.java


📘 Explanation:

    javac → Java compiler
    -d . → tells the compiler to create the package folder (mypackage) in the current directory (.)
    MyProgram.java → source file

After compiling, Java will automatically create this folder structure:


mypackage/
   MyProgram.class


⚡ Without -d

    If you don’t use -d, the .class file will be created in the same folder as the .java file —
    and your package structure won’t be created properly.

✅ Short Exam Answer:

    The -d option in Java is used to specify the destination directory for the generated .class files.
    It ensures that the package structure is created properly according to the package declaration in the source file.
      `},{id:26,question:"26. Explain hierarchy of exceptions in Java.",answer:"",codeExample:`
🟩 Hierarchy of Exceptions in Java

In Java, all exceptions and errors come under one big class called Throwable.
It is the superclass of everything that can be thrown using throw or caught using catch.

🧠 Main Hierarchy Structure:

Object
   └── Throwable
         ├── Exception
         │      ├── Checked Exceptions
         │      │     ├── IOException
         │      │     ├── SQLException
         │      │     └── ClassNotFoundException
         │      └── Unchecked Exceptions (Runtime)
         │            ├── ArithmeticException
         │            ├── NullPointerException
         │            └── ArrayIndexOutOfBoundsException
         └── Error
                ├── OutOfMemoryError
                ├── StackOverflowError
                └── VirtualMachineError



🧩 Explanation of Each Level
| Class                         | Description                                                                  | Examples                                  |
| ------------------------------| -----------------------------------------------------------------------------| ----------------------------------------- |
| Throwable                     | The parent class of all errors and exceptions.                               | —                                         |
| Exception                     | Problems that a program can handle or recover from.                          | IOException, SQLException                 |
| Error                         | Serious problems that occur in the JVM; cannot be handled by the program.    | OutOfMemoryError, StackOverflowError      |
| Checked Exception             | Checked at compile time. You must handle them using try-catch or throws.     | IOException, SQLException                 |
| Unchecked Exception (Runtime) | Checked at runtime. No need to handle them compulsorily.                     | ArithmeticException, NullPointerException |


✅ Simple Example

public class ExceptionExample {
    public static void main(String[] args) {
        try {
            int a = 10 / 0;   // This causes ArithmeticException
        } 
        catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero!");
        }
    }
}


Output:
Cannot divide by zero!


🧠 Short Exam Answer:

In Java, all exceptions and errors are subclasses of the Throwable class.
It has two main branches:

    Exception (for recoverable problems)
    Error (for serious, unrecoverable problems).

Exceptions are further divided into Checked and Unchecked exceptions.
Cannot divide by zero!


      `},{id:27,question:"27. Difference between checked and unchecked exceptions.",answer:"",codeExample:`
🟩 Difference Between Checked and Unchecked Exceptions
| Checked Exception                                                 | Unchecked Exception                                                                |
| ------------------------------------------------------------------| -----------------------------------------------------------------------------------|
| Checked at compile time                                           | Checked at runtime                                                                 |
| Must be handled using try-catch or throws keyword                 | Not mandatory to handle                                                            |
| Occurs due to external reasons (like file missing, network error) | Occurs due to programming mistakes                                                 |
| Subclasses of Exception (but not RuntimeException)                | Subclasses of RuntimeException                                                     |
| Example: IOException, SQLException, ClassNotFoundException        | Example: ArithmeticException, NullPointerException, ArrayIndexOutOfBoundsException |



🧩 Example of Checked Exception
import java.io.*;

class CheckedExample {
    public static void main(String[] args) {
        try {
            FileReader file = new FileReader("data.txt"); // File might not exist
        } catch (IOException e) {
            System.out.println("File not found!");
        }
    }
}


🟢 Explanation:
Here, IOException is a checked exception, because the compiler forces you to handle it.


--------------------------------------

🧩 Example of Unchecked Exception
class UncheckedExample {
    public static void main(String[] args) {
        int a = 10 / 0; // Causes ArithmeticException
        System.out.println(a);
    }
}


🟢 Explanation:
Here, ArithmeticException is an unchecked exception, because it occurs during runtime, and handling is optional.



✅ Short Exam Answer:

    Checked exceptions are checked at compile time and must be handled.
    Unchecked exceptions are checked at runtime and handling them is optional.

      `},{id:28,question:"28. Explain try-catch-finally with example.",answer:"",codeExample:`
🟩 try-catch-finally in Java

These are used for exception handling — to manage runtime errors so that the program doesn’t crash.


🧠 1️⃣ try block

The code that might throw an exception is written inside the try block.

Only one try block is allowed per set.

try {
    // risky code
}


🧠 2️⃣ catch block

The catch block is used to handle the exception thrown by the try block.

You can have multiple catch blocks for different exceptions.

catch (ExceptionType e) {
    // handling code
}


🧠 3️⃣ finally block

The finally block is used to execute code no matter what happens —
whether an exception occurs or not.

Commonly used for closing files, database connections, etc.

finally {
    // code that always runs
}


✅ Full Example:
public class TryCatchFinallyExample {
    public static void main(String[] args) {
        try {
            int a = 10 / 0; // risky code (will cause ArithmeticException)
            System.out.println("This line will not run.");
        } 
        catch (ArithmeticException e) {
            System.out.println("Error: Cannot divide by zero!");
        } 
        finally {
            System.out.println("Finally block always executes.");
        }
        System.out.println("Program continues normally...");
    }
}

🧩 Output:
Error: Cannot divide by zero!
Finally block always executes.
Program continues normally...


🧠 Explanation:

The code inside try throws an exception (10 / 0).
The catch block handles it.
The finally block runs no matter what, even if there was an exception.
The program doesn’t crash — it continues to run smoothly.



✅ Short Exam Answer:

    The try-catch-finally block is used for exception handling.
    try contains risky code.
    catch handles exceptions.
    finally always executes (used for cleanup).


-----------------------------------------------------------------------

Can we use nested try-catch blocks? Give a real-world example.


💡 What is a Nested try-catch?

A nested try-catch means:
➡️ A try block inside another try block.

You use it when one part of your code (inside a bigger risky operation) also has its own smaller risky part that needs separate error handling.


🔧 Syntax
try {
    // outer risky code

    try {
        // inner risky code
    } catch (Exception e1) {
        // inner catch block
    }

} catch (Exception e2) {
    // outer catch block
}


🌍 Real-World Example

Imagine a program that reads a file and then parses a number inside it.
Reading a file can cause a FileNotFoundException.
Converting a string to an integer can cause a NumberFormatException.
You can handle both with nested try-catch 👇


✅ Example Code

import java.io.*;
import java.util.*;

public class NestedTryCatchExample {
    public static void main(String[] args) {
        try {
            // Outer try: risky file operation
            File file = new File("data.txt");
            Scanner sc = new Scanner(file); // might throw FileNotFoundException

            try {
                // Inner try: risky number conversion
                String str = sc.nextLine();  // read first line
                int number = Integer.parseInt(str); // might throw NumberFormatException
                System.out.println("Number is: " + number);
            } 
            catch (NumberFormatException e) {
                System.out.println("⚠️ Invalid number format in file!");
            }

            sc.close();
        } 
        catch (FileNotFoundException e) {
            System.out.println("❌ File not found!");
        }

        System.out.println("Program continues...");
    }
}


🧠 Output Examples
Case 1: File doesn’t exist
❌ File not found!
Program continues...

Case 2: File exists but content = "abc"
⚠️ Invalid number format in file!
Program continues...

Case 3: File exists and content = "123"
Number is: 123
Program continues...
      `},{id:29,question:"29. Difference between throw and throws.",answer:"",codeExample:`
🟩 Difference Between throw and throws in Java

| throw                                            | throws                                                |
| -------------------------------------------------| ------------------------------------------------------|
| Used to actually throw an exception.             | Used to declare that a method may throw an exception. |
| Used inside a method or block.                   | Used in method declaration/signature.                 |
| Can throw only one exception at a time.          | Can declare multiple exceptions separated by commas.  |
| Followed by an object (instance) of Exception.   | Followed by class names of exceptions.                |
| Example: throw new ArithmeticException("Error"); | Example: void readFile() throws IOException           |
| Used for manually throwing exceptions.           | Used to inform the caller about possible exceptions.  |



✅ Example of throw:

public class ThrowExample {
    public static void main(String[] args) {
        int age = 15;
        if (age < 18) {
            throw new ArithmeticException("Not eligible to vote!");
        } else {
            System.out.println("You can vote!");
        }
    }
}


🟢 Explanation:
Here we used throw to manually generate an exception if the condition is not met.



✅ Example of throws:

import java.io.*;

class ThrowsExample {
    void readFile() throws IOException {
        FileReader file = new FileReader("data.txt"); // may cause IOException
    }

    public static void main(String[] args) {
        ThrowsExample obj = new ThrowsExample();
        try {
            obj.readFile(); // handle the exception
        } catch (IOException e) {
            System.out.println("File not found!");
        }
    }
}


🟢 Explanation:
Here, throws is used in the method declaration to tell the compiler
that this method might throw an IOException.



🧠 Short Exam Answer:

throw is used to manually throw an exception,
while throws is used to declare that a method might throw an exception.

`},{id:30,question:"30. Explain Collection Framework architecture.",answer:"",codeExample:`
🟩 What is the Collection Framework?

The Java Collection Framework (JCF) is a set of classes and interfaces that help store and manage groups of objects efficiently.

It provides ready-made data structures like:
    List
    Set
    Queue
    Map


🧩 Main Interfaces in Collection Framework

At the top of the hierarchy, there are two main parts:

Iterable
   ↓
 Collection
   ↓
 ├── List
 ├── Set
 └── Queue

Map (separate hierarchy)



🧠 1️⃣ Iterable (root interface)

    The parent of all collection interfaces.
    Provides the ability to iterate (loop) through elements.
    Contains one main method: iterator().


🧠 2️⃣ Collection Interface

    Extends Iterable
    It is the root interface of the Collection hierarchy.
    Defines basic methods like add(), remove(), size(), clear().


🧠 3️⃣ List Interface

    Ordered collection (elements are stored in sequence)
    Allows duplicate elements
    Elements can be accessed using index


    Common classes:

        ArrayList
        LinkedList
        Vector
        Stack

🧩 Example:
List<String> list = new ArrayList<>();
list.add("A");
list.add("B");


🧠 4️⃣ Set Interface

    Unordered collection
    Does not allow duplicates

    Common classes:

        HashSet
        LinkedHashSet
        TreeSet

🧩 Example:
Set<Integer> set = new HashSet<>();
set.add(10);
set.add(20);


🧠 5️⃣ Queue Interface

    Used to store elements in FIFO (First In, First Out) order.
    Commonly used in scheduling and buffering.

    Common classes:

        PriorityQueue
        LinkedList

🧩 Example:
Queue<String> q = new LinkedList<>();
q.add("Task1");
q.add("Task2");



🧠 6️⃣ Map Interface (Separate Hierarchy)

    Stores data in key-value pairs.
    Keys are unique, but values can be duplicated.

    Common classes:

        HashMap
        LinkedHashMap
        TreeMap
        Hashtable

🧩 Example:
Map<Integer, String> map = new HashMap<>();
map.put(1, "Raj");
map.put(2, "Jatin");



🧱 Diagram: Collection Framework Architecture

              Iterable
                  │
             Collection
         ┌────────┼─────────┐
        List      Set      Queue
     ┌───────┐  ┌─────┐   ┌───────┐
     ArrayList  HashSet   PriorityQueue
     LinkedList TreeSet   LinkedList
     Vector
     Stack

              Map (separate)
           ┌───────┬─────────┐
        HashMap  LinkedHashMap  TreeMap

`},{id:31,question:"31. Difference between ArrayList and LinkedList.",answer:"",codeExample:`
Doubly linked list means:
🔹 Diagram
         NULL ← [prev | 10 | next] ↔ [prev | 20 | next] ↔ [prev | 30 | next] → NULL

🟩 Difference Between ArrayList and LinkedList

| ArrayList                                                | LinkedList                                                      |
| ---------------------------------------------------------|-----------------------------------------------------------------|
| Uses a dynamic array to store elements.                  | Uses a doubly linked list to store elements.                    |
| Faster for accessing (reading) elements using index.     | Faster for insertion and deletion of elements.                  |
| Slower in insertion/deletion (because elements shift).   | No shifting needed, just link changes.                          |
| Takes less memory, as it stores only data.               | Takes more memory, as it stores data + next and previous links. |
| Random access is possible using index.                   | Sequential access only (no index-based random access).          |
| Best choice when more reads and fewer inserts/deletes.   | Best choice when more inserts/deletes and fewer reads.          |
| Example class: ArrayList<String> list = new ArrayList<>(); | Example class: LinkedList<String> list = new LinkedList<>();  |


🧩 Example

import java.util.*;

public class ListExample {
    public static void main(String[] args) {
        ArrayList<String> arrayList = new ArrayList<>();
        arrayList.add("Apple");
        arrayList.add("Banana");

        LinkedList<String> linkedList = new LinkedList<>();
        linkedList.add("Car");
        linkedList.add("Bus");

        System.out.println("ArrayList: " + arrayList);
        System.out.println("LinkedList: " + linkedList);
    }
}


Output:
ArrayList: [Apple, Banana]
LinkedList: [Car, Bus]



🧠 Short Exam Answer:

ArrayList uses a dynamic array, while LinkedList uses a doubly linked list.
ArrayList is faster for access, and LinkedList is faster for insertion and deletion.


-------------------------------------------------------------------------------------------

🔹 Full Line
        ArrayList<String> arrayList = new ArrayList<>();


👉 ArrayList<String> arrayList

This part declares a reference variable named arrayList of type ArrayList that stores String elements.
ArrayList → class name
<String> → Generics, which means this ArrayList can store only String type elements
(so it prevents adding integers or other types by mistake)


👉 new ArrayList<>()

This part creates a new ArrayList object in memory.
new → keyword to create an object
ArrayList<>() → constructor that initializes an empty ArrayList
< > → type inference (from Java 7 onward, you don’t need to repeat <String> on the right side)

      `},{id:32,question:"32. Difference between Set and List.",answer:"",codeExample:`
🟩 Difference Between Set and List

| List                                                                  | Set                                                     |
| ----------------------------------------------------------------------| --------------------------------------------------------|
| Stores elements in order (sequence).                                  | Stores elements in an unordered way.                    |
| Allows duplicate elements.                                            | Does not allow duplicates.                              |
| Elements can be accessed by index (like get(0)).                      | Elements cannot be accessed by index.                   |
| Maintains insertion order (the order in which items are added).       | May not maintain insertion order (depends on Set type). |
| Examples: ArrayList, LinkedList, Vector                               | Examples: HashSet, LinkedHashSet, TreeSet               |
| Good when you need to store data with duplicates and access by index. | Good when you need to store unique data only.           |


🧩 Example

import java.util.*;

public class SetListExample {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("Apple");
        list.add("Banana");
        list.add("Apple"); // duplicate allowed

        Set<String> set = new HashSet<>();
        set.add("Apple");
        set.add("Banana");
        set.add("Apple"); // duplicate ignored

        System.out.println("List: " + list);
        System.out.println("Set: " + set);
    }
}


🧠 Output:
List: [Apple, Banana, Apple]
Set: [Apple, Banana]


✅ Short Exam Answer:

A List allows duplicates and maintains insertion order,
while a Set stores unique elements and usually does not maintain order.


-----------------------------------------------------------------------------------

why i used this List<String> list = new ArrayList<>(); line because:



🧩 Case 1 — Using ArrayList on both sides
ArrayList<String> list = new ArrayList<>();


Now you use list in your code in 10 different places:

list.add("A");
list.remove("B");
doSomething(list);
anotherMethod(list);


Now your boss says:
“We need LinkedList instead of ArrayList for better performance.”

So you change this:

ArrayList<String> list = new ArrayList<>();
to:
LinkedList<String> list = new LinkedList<>();


But ⚠️ now everywhere you used ArrayList type — like in method parameters or returns — you also need to change those.


Example:

public void processData(ArrayList<String> data) {  // you must change here too!
    ...
}


You’d have to replace every "ArrayList" with "LinkedList" all over your project 😩
That’s what we mean by painful — not the one line, but all the places where you used that specific class name.

      `},{id:33,question:"33. Difference between Stack and Vector.",answer:"",codeExample:`
🟩 Difference Between Stack and Vector

| Vector                                               | Stack                                                                   |
| -----------------------------------------------------| ------------------------------------------------------------------------|
| It is a dynamic array that stores elements in order. | It is a subclass of Vector that follows LIFO (Last In First Out) order. |
| Used for general-purpose dynamic storage.            | Used when you need stack behavior (push and pop).                       |
| Elements are accessed by index.                      | Elements are added or removed only from the top.                        |
| Provides methods like add(), get(), remove().        | Provides extra methods like push(), pop(), peek().                      |
| Does not follow LIFO order.                          | Follows LIFO order.                                                     |
| Example: Vector<Integer> v = new Vector<>();         | Example: Stack<Integer> s = new Stack<>();                              |


🧩 Example

import java.util.*;

public class StackVectorExample {
    public static void main(String[] args) {
        Vector<String> vector = new Vector<>();
        vector.add("A");
        vector.add("B");
        vector.add("C");
        System.out.println("Vector: " + vector);

        Stack<String> stack = new Stack<>();
        stack.push("X");
        stack.push("Y");
        stack.push("Z");
        System.out.println("Stack before pop: " + stack);

        stack.pop(); // removes top element
        System.out.println("Stack after pop: " + stack);
    }
}


🧠 Output:
Vector: [A, B, C]
Stack before pop: [X, Y, Z]
Stack after pop: [X, Y]


✅ Short Exam Answer:

A Vector is a dynamic array that stores elements in order.
A Stack is a subclass of Vector that follows LIFO (Last In First Out) and provides methods like push(), pop(), and peek().


      `},{id:34,question:"34. Difference between HashSet and TreeSet.",answer:"",codeExample:`
🟩 Difference Between HashSet and TreeSet

| HashSet                                              | TreeSet                                           |
| -----------------------------------------------------| --------------------------------------------------|
| Stores elements in random (unordered) order.         | Stores elements in sorted (ascending) order.      |
| Faster for adding, searching, and removing elements. | Slower than HashSet (because it sorts elements).  |
| Uses a hash table internally.                        | Uses a balanced tree (Red-Black Tree) internally. |
| Allows null elements (only one).                     | Does not allow null elements.                     |
| No guarantee of order while iterating.               | Maintains elements in natural or custom order.    |
| Example: HashSet<Integer> hs = new HashSet<>();      | Example: TreeSet<Integer> ts = new TreeSet<>();   |


🧩 Example

import java.util.*;

public class SetExample {
    public static void main(String[] args) {
        HashSet<Integer> hashSet = new HashSet<>();
        hashSet.add(30);
        hashSet.add(10);
        hashSet.add(20);
        System.out.println("HashSet: " + hashSet);

        TreeSet<Integer> treeSet = new TreeSet<>();
        treeSet.add(30);
        treeSet.add(10);
        treeSet.add(20);
        System.out.println("TreeSet: " + treeSet);
    }
}


🧠 Output:
HashSet: [20, 10, 30]   // order may vary (random)
TreeSet: [10, 20, 30]   // sorted order



✅ Short Exam Answer:

HashSet stores elements in random order and is faster,
while TreeSet stores elements in sorted order and is slower because it maintains sorting.

      `},{id:35,question:"35. Explain Iterator interface with example.",answer:"",codeExample:`
🟩 What is Iterator in Java?

The Iterator interface in Java is used to traverse (loop through) elements of a collection (like ArrayList, HashSet, etc.) one by one.

It is a part of the java.util package.


🧠 Purpose of Iterator

    Helps to access each element in a collection.
    Allows removing elements safely while iterating.
    Replaces the older Enumeration interface.


🧩 Important Methods of Iterator
| Method              | Description                                       |
| ------------------- | ------------------------------------------------- |
|  boolean hasNext()  | Returns true if there is another element to read. |
|  E next()           | Returns the next element in the collection.       |
|  void remove()      | Removes the current element from the collection.  |


✅ Example of Iterator

import java.util.*;

public class IteratorExample {
    public static void main(String[] args) {
        // Create a list
        ArrayList<String> list = new ArrayList<>();
        list.add("Apple");
        list.add("Banana");
        list.add("Cherry");

        // Get iterator from list
        Iterator<String> itr = list.iterator();

        // Traverse elements one by one
        while (itr.hasNext()) {
            String fruit = itr.next();
            System.out.println(fruit);

            // Example: remove Banana while iterating
            if (fruit.equals("Banana")) {
                itr.remove();
            }
        }

        System.out.println("After removing Banana: " + list);
    }
}


🧠 Output:
Apple
Banana
Cherry
After removing Banana: [Apple, Cherry]



🧩 Explanation:

iterator() gives an Iterator object.
hasNext() checks if there is another element.
next() returns the next element.
remove() deletes the current element safely while iterating.


✅ Short Exam Answer:

The Iterator interface is used to traverse elements of a collection one by one.
It provides methods like hasNext(), next(), and remove() for safe and easy iteration.


---------------------------------------------------------------------------------------------

    Iterator is used in all collection framework yes or no ?

💡 Answer:

👉 Yes,
the Iterator interface can be used with all classes that implement the Collection interface —
like:

ArrayList
LinkedList
HashSet
TreeSet
LinkedHashSet
PriorityQueue
etc.


These all support the method:

    Iterator<E> iterator()



⚠️ But Note:

Iterator cannot be used directly with Maps (HashMap, TreeMap, etc.)
because Map does not extend Collection.

However, you can still use an iterator on Map’s view:

map.keySet().iterator() → for keys
map.values().iterator() → for values
map.entrySet().iterator() → for key-value pairs


✅ Summary Table
| Collection Type | Can use Iterator? | Example                   |
| ----------------| ------------------| --------------------------|
| ArrayList       | ✅ Yes            | list.iterator()           |
| LinkedList      | ✅ Yes            | list.iterator()           |
| HashSet         | ✅ Yes            | set.iterator()            |
| TreeSet         | ✅ Yes            | set.iterator()            |
| HashMap         | ⚠️ Indirectly     | map.entrySet().iterator() |


📘 In short:

✅ Iterator is used in all classes that implement Collection interface,
⚠️ For Map, we use iterator through keySet(), values(), or entrySet().

`},{id:36,question:"36. Difference between ArrayDeque and PriorityQueue.",answer:"",codeExample:`
🟩 Difference between ArrayDeque and PriorityQueue

| ArrayDeque                                                                    | PriorityQueue                                                                                        |
| ------------------------------------------------------------------------------| -----------------------------------------------------------------------------------------------------|
| It is a double-ended queue, so you can add or remove elements from both ends. | It is a priority-based queue, so elements are arranged by priority (like smallest or largest first). |
| It keeps the order in which you add elements (insertion order).               | It does not keep insertion order, it sorts automatically by priority.                                |
| You can use it like a Queue (FIFO) or a Stack (LIFO).                         | You can use it only as a Queue.                                                                      |
| It does not allow null elements.                                              | It does not allow null elements.                                                                     |
| Best when you need to add/remove from both ends quickly.                      | Best when you need to process elements based on priority (like job scheduling).                      |



✅ Example of ArrayDeque

import java.util.*;

public class ArrayDequeExample {
    public static void main(String[] args) {
        ArrayDeque<String> dq = new ArrayDeque<>();
        dq.add("A");
        dq.addFirst("B");
        dq.addLast("C");
        System.out.println(dq);  // [B, A, C]
    }
}



✅ Example of PriorityQueue

import java.util.*;

public class PriorityQueueExample {
    public static void main(String[] args) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();    // if you print Descending(high priority) Order Priority Queue change this  
        pq.add(30);                                     -> PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
        pq.add(10);
        pq.add(20);
        System.out.println(pq);         // [10, 30, 20]
        System.out.println(pq.peek());  // 10 (highest priority)
    }
}


🧠 In short:

ArrayDeque → Used for fast adding/removing from both ends.
PriorityQueue → Used for automatic sorting by priority.

`},{id:37,question:"37. Difference between HashMap and TreeMap.",answer:"",codeExample:`
    
| HashMap                                                 | TreeMap                                                              |
| --------------------------------------------------------| ---------------------------------------------------------------------|
| It stores data in random order (no sorting).            | It stores data in sorted order (ascending order of keys by default). |
| It is faster because it uses hashing.                   | It is slower because it uses a Red-Black tree for sorting.           |
| Allows one null key and many null values.               | Does not allow null key, but allows null values.                     |
| Used when order doesn’t matter, and speed is important. | Used when you need elements sorted by key.                           |
| Not thread-safe (needs manual synchronization).         | Also not thread-safe.                                                |


✅ Example of HashMap

import java.util.*;

public class HashMapExample {
    public static void main(String[] args) {
        HashMap<Integer, String> map = new HashMap<>();
        map.put(3, "Banana");
        map.put(1, "Apple");
        map.put(2, "Mango");
        System.out.println(map);  // Output: Random order like {1=Apple, 2=Mango, 3=Banana}
    }
}


🔄 What does “Random Order” mean?

“Random order” means:

The order of key–value pairs in the output is unpredictable — it depends on how hash codes are calculated and distributed internally.

You might see {1=Apple, 2=Mango, 3=Banana} today,
but after running again, it could be {2=Mango, 1=Apple, 3=Banana}.



✅ Example of TreeMap

import java.util.*;

public class TreeMapExample {
    public static void main(String[] args) {
        TreeMap<Integer, String> map = new TreeMap<>();
        map.put(3, "Banana");
        map.put(1, "Apple");
        map.put(2, "Mango");
        System.out.println(map);  // Output: {1=Apple, 2=Mango, 3=Banana} (sorted by key)
    }
}


✅ In short:

TreeMap = Always sorted by key (default ascending)
To reverse order → use Collections.reverseOrder()
To sort by value → need manual sorting (using List<Map.Entry>)



🧠 In Short:
HashMap → Fast, unordered, allows one null key.
TreeMap → Sorted, slower, does not allow null key.
      `},{id:38,question:"38. What is LinkedHashMap in Java?",answer:"",codeExample:`
🟩 What is LinkedHashMap in Java?

    A LinkedHashMap is just like a HashMap, but it remembers the order in which you insert elements.

It is a part of the java.util package and is a child class of HashMap.


🧠 Main Features of LinkedHashMap

| Feature          | Explanation (in simple words)                                           |
| -----------------| ------------------------------------------------------------------------|
| Order maintained | It keeps the insertion order (the order in which keys are added).       |
| Key–Value pairs  | Stores data in the form of key and value.                               |
| Unique keys      | Each key must be unique, values can be duplicate.                       |
| Allows null      | Allows one null key and multiple null values.                           |
| Not thread-safe  | Not synchronized (use Collections.synchronizedMap() for thread safety). |
| Based on         | It is based on HashMap and doubly linked list (for order).              |



✅ Example of LinkedHashMap

import java.util.*;

public class LinkedHashMapExample {
    public static void main(String[] args) {
        LinkedHashMap<Integer, String> map = new LinkedHashMap<>();

        map.put(3, "Banana");
        map.put(1, "Apple");
        map.put(2, "Mango");

        System.out.println(map);  // Output: {3=Banana, 1=Apple, 2=Mango}
    }
}


🧩 Explanation:

The output follows the same order as insertion (3, 1, 2).
This is the main difference from HashMap, which gives random order.


⚖️ Difference Between HashMap and LinkedHashMap
| HashMap                              | LinkedHashMap                               |
| -------------------------------------|---------------------------------------------|
| Does not maintain order of elements. | Maintains insertion order.                  |
| Based only on hashing.               | Based on hashing + linked list.             |
| Slightly faster.                     | Slightly slower because it maintains order. |


🧠 In short:

LinkedHashMap is like a HashMap that remembers the order in which elements were inserted.
It’s useful when you want both fast access and predictable order.

`},{id:39,question:"39. Explain FileInputStream and FileOutputStream with examples.",answer:"",codeExample:`
🟩 1. FileInputStream (Reading data from a file)

    The FileInputStream class is used to read data (bytes) from a file.

It reads data byte by byte (useful for reading binary files like images, audio, etc.).


.read()  -> Reads one character (returns int, -1 means EOF)   // this is used in all file operations
.write() ->	Writes one or more characters to file


Example: Read file using FileInputStream

import java.io.*;

public class ReadFile {
    public static void main(String[] args) throws Exception {
        FileInputStream fin = new FileInputStream("input.txt");
        int i;
        while ((i = fin.read()) != -1) {
            System.out.print((char)i); // print content
        }
        fin.close();
    }
}


Key points:
    Reads one byte at a time.
    -1 means end of file.
    (char)i converts byte to character.
      


Example: Write file using FileOutputStream

import java.io.*;

public class WriteFile {
    public static void main(String[] args) throws Exception {
        FileOutputStream fout = new FileOutputStream("output.txt");
        String text = "Hello Java!";
        fout.write(text.getBytes()); // write bytes
        fout.close();
        System.out.println("Data written!");
    }
}


Key points:

    Converts string to bytes using getBytes().
    Writes data byte by byte.
    Always close() the stream after use.



🧠 Memory Trick for Exams

    InputStream → Input (read)
    OutputStream → Output (write)
    Both work with bytes, not characters.


⚖️ Difference Between FileInputStream and FileOutputStream

| FileInputStream                            | FileOutputStream                                   |
| ------------------------------------------ | -------------------------------------------------- |
| Used to read data from a file.             | Used to write data into a file.                    |
| Reads data byte by byte.                   | Writes data byte by byte.                          |
| Example: reading image, audio, text files. | Example: saving image, writing text or data files. |

    `},{id:40,question:"40. What is serialization? Explain its process.",answer:"",codeExample:`
🟩 What is Serialization?

Serialization is the process of converting an object into a byte stream so that it can be saved to a file, sent over a network, or stored in a database.


Purpose:

To persist objects or transfer them between programs/machines.
Later, the object can be reconstructed using deserialization.


🧠 Deserialization

Deserialization is the reverse process of serialization.
It reconstructs the original object from the byte stream.


🟩 Process of Serialization

1. Make a class implement Serializable interface
    Marker interface (no methods) that tells Java this class can be serialized.
2. Create an object of the class.
3. Use ObjectOutputStream to write the object to a file.
4. Use ObjectInputStream to read the object from the file (deserialization).



✅ Short Exam Answer

Serialization converts an object into a byte stream so it can be saved or sent.
Deserialization reconstructs the object from the byte stream.
Steps:

1. Implement Serializable.
2. Create object.
3. Use ObjectOutputStream to write.
4. Use ObjectInputStream to read.


✅ Very Easy Example
import java.io.*;

// Step 1: Make class serializable
class Student implements Serializable {
    String name = "Raj";
    int age = 20;
}

public class SimpleExample {
    public static void main(String[] args) throws Exception {

        // Step 2: Write object to file (Serialization)
        Student s1 = new Student();  // create object
        FileOutputStream fout = new FileOutputStream("student.txt");
        ObjectOutputStream out = new ObjectOutputStream(fout);
        out.writeObject(s1);  // save object
        out.close();
        System.out.println("Object saved!");

        // Step 3: Read object from file (Deserialization)
        FileInputStream fin = new FileInputStream("student.txt");
        ObjectInputStream in = new ObjectInputStream(fin);
        Student s2 = (Student) in.readObject();  // get object back
        in.close();

        System.out.println("Name: " + s2.name);
        System.out.println("Age: " + s2.age);
    }
}


🧾 Output
Object saved!
Name: Raj
Age: 20



🧩 Short exam answer:

Serialization = Saving object to file.
Deserialization = Reading object from file.
Done using Serializable interface.
`},{id:41,question:"41. Explain Reader/Writer hierarchy.",answer:"",codeExample:`
🟩 What is Reader/Writer in Java?

The Reader and Writer classes are used to read and write character (text) data in Java.

They are part of the java.io package and are designed for text files,
while InputStream/OutputStream are for binary files (like images, videos).


🧠 Why Reader/Writer?

Because InputStream and OutputStream work with bytes,
but Reader and Writer work with characters (text) — making it easier to handle text data like .txt files.



🗂️ Reader/Writer Class Hierarchy (Structure)

                              java.lang.Object
                                     │
                        ┌────────────┴─────────────────┐
                        │                              │
                java.io.Reader                java.io.Writer
                        │                              │
                 ┌──────┼──────┐                ┌──────┼──────┐
                 │             │                │             │
      BufferedReader  InputStreamReader   BufferedWriter  OutputStreamWriter
                 │                              │
             FileReader                      FileWriter


🟢 Reader Classes (for reading text)

| Class             | Description                                                                             |
| ------------------| ----------------------------------------------------------------------------------------|
| Reader            | Parent (abstract) class for all character input streams. (Base class to read characters)|
| FileReader        | Reads characters from a text file.                                                      |
| BufferedReader    | Reads text from file efficiently using a buffer.                                        |
| InputStreamReader | Converts byte stream to character stream (used with FileInputStream).                   |



🔵 Writer Classes (for writing text)

| Class              | Description                                                                               |
| -------------------| ------------------------------------------------------------------------------------------|
| Writer             | Parent (abstract) class for all character output streams. (Base class to write characters)|
| FileWriter         | Writes characters to a text file.                                                         |
| BufferedWriter     | Writes text efficiently using a buffer.                                                   |
| OutputStreamWriter | Converts character stream to byte stream (used with FileOutputStream).                    |


.read()  -> Reads one character (returns int, -1 means EOF)   // this is used in all file operations
.write() ->	Writes one or more characters to file


✅ Example using FileReader and FileWriter


import java.io.*;

public class ReaderWriterExample {
    public static void main(String[] args) throws Exception {
        // Write data to file
        FileWriter fw = new FileWriter("demo.txt");
        fw.write("Hello Java!");
        fw.close();
        System.out.println("Data written successfully.");

        // Read data from file
        FileReader fr = new FileReader("demo.txt");
        int i;
        while ((i = fr.read()) != -1) {
            System.out.print((char) i);
        }
        fr.close();
    }
}


🧾 Output
Data written successfully.
Hello Java!



💡 Easy to Remember

Reader → Read characters (text)
Writer → Write characters (text)
FileReader / FileWriter → For simple files
BufferedReader / BufferedWriter → For fast reading/writing
InputStream / OutputStream -> Binary files	Bytes
      `},{id:42,question:"42. Explain BufferedReader and BufferedWriter with their advantages.",answer:"",codeExample:`
🟩 BufferedReader
    The BufferedReader class is used to read text from a file (or input stream) efficiently, using a buffer.

📘 It belongs to the package java.io.
📘 It reads characters, lines, or arrays of characters.


✅ Example of BufferedReader

import java.io.*;

public class BufferedReaderExample {
    public static void main(String[] args) throws Exception {
        FileReader fr = new FileReader("input.txt");
        BufferedReader br = new BufferedReader(fr);

        String line;
        while ((line = br.readLine()) != null) {  // read line by line
            System.out.println(line);
        }

        br.close();
        fr.close();
    }
}


🧠 Explanation:

BufferedReader reads text line by line using readLine().
It uses a buffer (temporary memory) to read large chunks at once → faster than FileReader.
      



🟦 BufferedWriter

    The BufferedWriter class is used to write text to a file efficiently, using a buffer.

📘 It belongs to the package java.io.
📘 It writes characters, strings, or arrays of characters.

✅ Example of BufferedWriter

import java.io.*;

public class BufferedWriterExample {
    public static void main(String[] args) throws Exception {
        FileWriter fw = new FileWriter("output.txt");
        BufferedWriter bw = new BufferedWriter(fw);

        bw.write("Hello Java!");
        bw.newLine();            // to move to next line
        bw.write("BufferedWriter is fast.");
        bw.close();
        fw.close();

        System.out.println("Data written successfully.");
    }
}



🧠 Explanation:

BufferedWriter stores text in a buffer before writing to the file.
This makes writing faster and more efficient than using FileWriter directly.
newLine() is used to write a line break (like pressing Enter).


🟢 Advantages of BufferedReader and BufferedWriter
| BufferedReader                               | BufferedWriter                                  |
| -------------------------------------------- | ----------------------------------------------- |
| Reads large text efficiently using a buffer. | Writes large text efficiently using a buffer.   |
| Can read line by line with readLine().       | Can add new lines easily using newLine().       |
| Faster than FileReader.                      | Faster than FileWriter.                         |
| Reduces the number of read operations.       | Reduces the number of write operations.         |



🧩 In Short:

BufferedReader → Read text fast (line by line).
BufferedWriter → Write text fast (with buffering).
Both improve speed and performance in file handling.


`},{id:43,question:"43. Explain how StringTokenizer can be replaced by modern split() approach and compare their performance. and ( String methods in Java )",answer:"",codeExample:`
🧠 1️⃣ What is StringTokenizer?

StringTokenizer (from java.util) was used in older Java versions to split a string into tokens (pieces) based on a delimiter.

It’s part of legacy Java (introduced in JDK 1.0), and it’s now mostly replaced by the split() method of the String class.

✅ Example: Using StringTokenizer

import java.util.StringTokenizer;

public class TokenizerExample {
    public static void main(String[] args) {
        String data = "Apple,Banana,Mango";
        StringTokenizer st = new StringTokenizer(data, ","); // comma as delimiter

        while (st.hasMoreTokens()) {
            System.out.println(st.nextToken());
        }
    }
}


🟩 Output:
Apple
Banana
Mango



2️⃣ Modern Way — Using String.split()

split() is a built-in method in the String class (since JDK 1.4+).
It splits the string based on a regular expression (regex) and returns a String array.

✅ Example: Using split()

public class SplitExample {
    public static void main(String[] args) {
        String data = "Apple,Banana,Mango";
        String[] fruits = data.split(",");  // comma as delimiter

        for (String fruit : fruits) {
            System.out.println(fruit);
        }
    }
}


🟩 Output (same):
Apple
Banana
Mango



3️⃣ Key Differences — StringTokenizer vs split()

| Feature           | StringTokenizer                                       | split()                             |
| ------------------| ------------------------------------------------------| ------------------------------------|
| Package           | java.util                                             | java.lang.String                    |
| Return Type       | No return — you get tokens via nextToken() one by one | Returns a String[] array            |
| Delimiter Type    | Simple character(s) only                              | Regular Expression (regex)          |
| Null/Empty Tokens | Skips empty tokens                                    | Keeps empty tokens (optional regex) |
| Thread Safety     | Yes (synchronized)                                    | No                                  |
| Introduced        | JDK 1.0 (Legacy class)                                | JDK 1.4+                            |
| Flexibility       | Limited                                               | Very flexible and powerful          |
| Recommended       | ❌ Deprecated (legacy use only)                       | ✅ Modern, preferred approach      |


------------------------------------------------------------------------------

important and commonly used String methods in Java

1️⃣ substring() — Extract part of a string

👉 Purpose: Returns a part (sub-string) of a string from a given index range.


📘 Syntax:

substring(int beginIndex)
substring(int beginIndex, int endIndex)


✅ Example:
public class Example1 {
    public static void main(String[] args) {
        String text = "HelloWorld";
        System.out.println(text.substring(5));      // from index 5 to end
        System.out.println(text.substring(0, 5));   // from index 0 to 4
    }
}


🟩 Output:

World
Hello


📌 Note: endIndex is exclusive (not included).



2️⃣ equals() and equalsIgnoreCase() — Compare strings

👉 Purpose: Compare two strings for equality.


📘 Syntax:

equals(Object another)
equalsIgnoreCase(String another)


✅ Example:
public class Example2 {
    public static void main(String[] args) {
        String a = "Java";
        String b = "java";
        System.out.println(a.equals(b));             // false
        System.out.println(a.equalsIgnoreCase(b));   // true
    }
}


🟩 Output:

false
true


📌 equals() is case-sensitive
📌 equalsIgnoreCase() is case-insensitive



3️⃣ toUpperCase() and toLowerCase() — Change case

👉 Purpose: Converts all characters in a string to upper or lower case.

✅ Example:
public class Example3 {
    public static void main(String[] args) {
        String word = "JaVa";
        System.out.println(word.toUpperCase());
        System.out.println(word.toLowerCase());
    }
}


🟩 Output:

JAVA
java


📌 Useful for case-insensitive comparisons or standardizing input.



4️⃣ trim() — Remove spaces

👉 Purpose: Removes leading and trailing spaces from a string (not spaces in the middle).

✅ Example:
public class Example4 {
    public static void main(String[] args) {
        String data = "   Hello Java   ";
        System.out.println("Before: [" + data + "]");
        System.out.println("After : [" + data.trim() + "]");
    }
}


🟩 Output:

Before: [   Hello Java   ]
After : [Hello Java]


📌 Useful when processing user input or reading text files.



5️⃣ Length of a String → .length() method (with parentheses)

👉 In Java, strings use a method (not property) called .length() to get the number of characters.

✅ Example:
public class StringLengthExample {
    public static void main(String[] args) {
        String name = "Java";
        System.out.println(name.length());
    }
}


🟩 Output:

4


📌 length() → counts all characters including spaces and symbols.



------------
replace() and replaceAll() — Replace characters or substrings
👉 Purpose: Replace part of a string with another value.

📘 Syntax:

replace(char oldChar, char newChar)
replace(CharSequence target, CharSequence replacement)
replaceAll(String regex, String replacement)

✅ Example:
public class Example5 {
    public static void main(String[] args) {
        String text = "Java is fun";
        System.out.println(text.replace("fun", "powerful"));     // replace word
        System.out.println(text.replace('a', '@'));              // replace character
    }
}


🟩 Output:

Java is powerful
J@v@ is fun


📌 replaceAll() works with regex, while replace() does simple replacement.

`},{id:1,question:"",answer:"",codeExample:""},{id:8888,question:"Mid semester exam Q&A....",answer:"",codeExample:`
Q1. Short answers (part a) — 1 mark each

1. Which type of inheritance is not supported in Java, why, and what problem does it cause?
Java does not support multiple inheritance of classes (i.e., a class cannot extend more than one class).

Why: to avoid ambiguity (the "diamond problem") when two parent classes define the same 
method or field name.

Problem example: if ClassA and ClassB both define void hello(), and ClassC extends both, 
the compiler would not know which hello() to use.


----------------------------------


2. Which methods and algorithm are used for garbage collection in Java?


🌟 What is Garbage Collection (GC) in Java?

Garbage Collection means:

➡ Java automatically removes (deletes) objects that are no longer needed.
➡ This helps free memory.

You do NOT delete objects manually.
Java does it for you.


✅ Very Simple Example of Garbage Collection

✔ Program:

class Demo {
    public void finalize() {
        System.out.println("Object Deleted");
    }

    public static void main(String[] args) {

        Demo obj = new Demo();

        obj = null;  // Object is now useless

        System.gc(); // Request garbage collector
    }
}


✅ Explanation in Simple Words

Demo obj = new Demo();
    👉 Creates an object.

obj = null;
    👉 Now no one is using the object.
    👉 It becomes garbage.

System.gc();
    👉 Ask Java to delete garbage.

finalize()
    👉 This message prints when the object is deleted.


🎯 Output when you run the program
    Object Deleted

✔ Because the object was removed by Garbage Collector.


⚠ Note

Sometimes the exact time of GC is not fixed.
But most of the time, this simple program prints:

    Object Deleted

    
----------------------------------

⭐ Garbage Collection in Java

Java automatically removes unused objects from memory.
To do this, it uses methods and algorithms.

✅ 1. Methods used in Garbage Collection

(a) System.gc()

    You call this method to request garbage collection.
    Java may run the garbage collector after this.

Example:

System.gc(); 


(b) finalize() method

    This method runs before an object is deleted.
    Used to show that the object is going to be destroyed.

Example:

protected void finalize() {
    System.out.println("Object destroyed");
}



⭐ 2. Algorithms used in Garbage Collection

Java mainly uses these algorithms:


(a) Mark and Sweep Algorithm

Very simple:

    Mark Phase:
        Java marks (identifies) all objects that are still in use.

    Sweep Phase:
        Java removes objects that are NOT marked (unused).

    👉 Like marking good items and throwing away unmarked ones.


(b) Copying Algorithm

    Java divides memory into two parts.
    It copies active (used) objects to one side.
    Deletes all unused objects from the other side.

👉 Like moving useful things to a new room and throwing everything else.


(c) Generational Garbage Collection

Java divides memory into:

    Young Generation (new objects)
    Old Generation (long-living objects)
    New objects are cleaned quickly.
    Old objects are cleaned less often.

👉 Fast and efficient.


(d) G1 Garbage Collector (Garbage First)

    Java breaks memory into small regions.
    Cleans areas with most garbage first.
    Works fast and smoothly.

👉 Best for large applications.


🎯 Summary (Very Simple)

| Part                | Meaning                     |
| ------------------- | --------------------------- |
| System.gc()         | Ask Java to clean memory    |
| finalize()          | Runs before object deletion |
| Mark-Sweep          | Mark used → delete unused   |
| Copying             | Move used → delete rest     |
| Generational GC     | Clean young objects first   |
| G1 GC               | Java’s fast modern GC       |



----------------------------------------------------------------------------------------


3. List the steps and commands to compile and run a Java program using Command Prompt.
Suppose file name is HelloWorld.java. Steps:

    Save the file HelloWorld.java.
    Open Command Prompt and go to folder containing the file.
    Compile: javac HelloWorld.java → produces HelloWorld.class.
    Run: java HelloWorld (do not include .class or .java).

Example commands:

C:> cd C:MyJavaPrograms
C:MyJavaPrograms> javac HelloWorld.java
C:MyJavaPrograms> java HelloWorld


----------------------------------------------------------------------------------------


Q1. (b) Objective / MCQs / True-False / Fill-in (7 items) — answers with short justification

1. Variables declared inside a class but outside any method, constructor, or block are known as:
Answer: a. Instance variable
    (Instance variables belong to objects of the class.)


2. True or False: Runtime polymorphism is also known as static polymorphism.
Answer: False.

    Runtime polymorphism = dynamic binding = method overriding.
    Static polymorphism = compile-time polymorphism = method overloading.


3. The ServerSocket class belongs to which package?
Answer: b. java.net
    (ServerSocket is a network/socket class.)


4. Which block always executes whether an exception occurs or not?
Answer: b. finally block
    (finally always executes (except when JVM exits abruptly), used for cleanup.)


5. Which method is used to return an immutable list containing specified elements?
Options: Arrays.asList, Collections.unmodifiableList, List.of, Stream.of.
Answer: c. List.of()

    List.of(...) (since Java 9) returns an immutable list with the given elements.


6. Does a TreeSet in Java contain unique elements?
Answer: c. Yes, TreeSet contains only unique elements

    TreeSet stores sorted unique elements (it behaves like a Set).


7. Which method of the File class is used to create a new directory?
Answer: b. mkdir()

    mkdir() creates a directory; mkdirs() creates directory and parents.


----------------------------------------------------------------------------------------


Q2 (a) — 2 marks (two short questions)

1. What is the purpose of Unicode in Java? Give an example of how a Unicode character can be used in a Java program.

Purpose: Java uses Unicode to support characters from many languages (not just ASCII). Unicode 
ensures Java strings and char can represent international characters.

Example: use Unicode escape XXXX or directly include Unicode characters in strings.

// Example using Unicode escape
public class UnicodeExample {
    public static void main(String[] args) {
        char smith = '★'; // Unicode star character
        System.out.println("Star: " + smith);
        System.out.println("Hindi: " + "नमस्ते"); // direct unicode in string
    }
}


Output:

Star: ★
Hindi: नमस्ते


------------------------------


2. Differentiate between method overloading and method overriding with simple examples.

Method overloading (same class): Same method name, different parameter lists (different types or counts). It's compile-time (static) polymorphism.

class Calc {
    int add(int a, int b){ return a+b; }
    double add(double a, double b){ return a+b; } // overloaded method
}


Method overriding (inheritance): Subclass defines a method with same signature as superclass. It's runtime polymorphism.

class Animal {
    void sound(){ System.out.println("Some sound"); }
}
class Dog extends Animal {
    @Override
    void sound(){ System.out.println("Bark"); } // overriding
}


---------------------------------------------------------------------------------------


Q2 (b) — 3 marks each

1. Describe various types of variables in Java and illustrate each with an example.

please check question no 12 

Types of variables:


Instance variables (non-static fields) — belong to an object; every object has its own copy.

class Person {
    String name; // instance variable
}


Static variables (class variables) — declared with static; shared across all instances.

class Counter {
    static int count = 0; // static variable
}


Local variables — declared inside methods or blocks; scope limited to the method/block.

void method() {
    int local = 5; // local variable
}


Parameter variables — variables that appear in method signatures; receive arguments.

void printName(String name) { // 'name' is a parameter variable
    System.out.println(name);
}



------------------------------


2. Explain the concept of ArrayList in Java. Write a simple Java program to create an ArrayList of 
integers, add 5 numbers to it, and display the elements.

Concept: ArrayList is a resizable array implementation of List interface. It can grow/shrink 
dynamically, allows random access, and preserves insertion order. It stores objects (so use Integer 
for ints).



Example program:


import java.util.ArrayList;

public class ArrayListExample {
    public static void main(String[] args) {
        // Create an ArrayList of Integer
        ArrayList<Integer> numbers = new ArrayList<>();
        // Add 5 numbers
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        numbers.add(40);
        numbers.add(50);
        // Display elements
        System.out.println("ArrayList elements: " + numbers);
        // Or iterate
        for (Integer n : numbers) {
            System.out.println(n);
        }
    }
}


Output:

ArrayList elements: [10, 20, 30, 40, 50]
10
20
30
40
50


---------------------------------------------------------------------------------------


Q3 Attempt any TWO (two questions) — each 5 marks

Q3.1 Apply the concept of Hierarchical Inheritance in Java. Write a simple program showing one superclass and multiple subclasses, and explain how subclasses inherit properties.

Explanation (simple):

Hierarchical inheritance means one superclass and many subclasses that extend that superclass. 
Subclasses inherit fields and methods from the superclass.



Program example:


// Superclass
class Vehicle {
    String brand = "Generic";
    void drive() {
        System.out.println("Vehicle is driving");
    }
}

// Subclass 1
class Car extends Vehicle {
    void carDetails() {
        System.out.println("Car brand: " + brand + " - Car drives smoothly.");
    }
}

// Subclass 2
class Bike extends Vehicle {
    void bikeDetails() {
        System.out.println("Bike brand: " + brand + " - Bike is fast.");
    }
}

public class HierarchicalExample {
    public static void main(String[] args) {
        Car c = new Car();
        c.drive();       // inherited from Vehicle
        c.carDetails();
        Bike b = new Bike();
        b.drive();       // inherited from Vehicle
        b.bikeDetails();
    }
}


How inheritance works here: Car and Bike automatically have access to brand and drive() from 
Vehicle. Each subclass can add its own methods or override existing ones.


------------------------------


Q3.2 Analyze the main features of Java and explain in simple words how each feature makes Java popular and useful.


Main features and why they matter (simple):


1. Platform independent (Write Once, Run Anywhere): Java bytecode runs on JVM on any platform; you 
    don’t need to recompile for each OS. This makes distribution and deployment easy.

2. Object-Oriented: Everything is modeled with objects (classes, inheritance, polymorphism, 
    encapsulation). This helps organize large projects and reuse code.

3. Automatic memory management (Garbage Collection): Programmers don’t manually free memory; the 
    JVM reclaims unused objects — fewer memory bugs.

4. Robust and strong type-checking: Java checks types at compile and runtime, reducing runtime errors.

5. Security: JVM provides a secure execution environment and classloader/sandboxing; useful for running 
    untrusted code (applets historically).

6. Multithreading support: Built-in concurrency support (threads, synchronized, concurrent libraries) helps 
    build responsive and scalable apps.

7. Rich standard library (APIs): Large standard library for I/O, networking, collections, GUI, etc., reduces 
    need to reinvent features.

8. Large ecosystem and tooling: Mature tools (IDE, build tools, frameworks) and community support 
    speed development.

Each feature reduces developer effort, increases reliability, portability and scalability — reasons Java is 
popular for enterprise and cross-platform apps.


------------------------------


Q3.3 Evaluate the use of exception handling in Java. Explain hierarchy of exceptions 
and illustrate with try-catch-finally examples.

Why use exception handling (simple):

Exception handling lets a program catch unexpected errors and handle them gracefully 
(show messages, clean up resources) rather than crashing.


Exception hierarchy (short):

    Root: Throwable
        Error (serious problems JVM usually can't handle, e.g., OutOfMemoryError)
        Exception
            RuntimeException (unchecked exceptions: e.g., NullPointerException, IndexOutOfBoundsException)
            Other checked exceptions (must be declared or caught): e.g., IOException, SQLException



Try-catch-finally example:


public class ExceptionExample {
    public static void main(String[] args) {
        try {
            int a = Integer.parseInt(args[0]); // may throw NumberFormatException
            int b = Integer.parseInt(args[1]);
            int c = a / b; // may throw ArithmeticException
            System.out.println("Result: " + c);
        } catch (ArrayIndexOutOfBoundsException ex) {
            System.out.println("Please provide two numbers as command-line arguments.");
        } catch (NumberFormatException ex) {
            System.out.println("Arguments must be integers.");
        } catch (ArithmeticException ex) {
            System.out.println("Cannot divide by zero.");
        } finally {
            System.out.println("Program finished (cleanup if needed).");
        }
    }
}


Explanation: try contains the code that may throw an exception. catch blocks handle specific exceptions (in order from specific to general). finally always runs — good to close files or release resources.


---------------------------------------------------------------------------------------


Q4 Answer the following — 5 marks each
Q4 (a) Explain the Java Virtual Machine (JVM): architecture, working, and role in making Java platform independent.

Simple explanation:

What JVM is:

The JVM is a runtime engine that executes Java bytecode. It forms an abstraction layer between compiled Java code and the underlying operating system and hardware.

JVM Architecture

                 +---------------------------------------+
                 |         Java Virtual Machine (JVM)    |
                 +---------------------------------------+

 +---------------------------------------------------------------+
 |                    Class Loader Subsystem                     |
 |  (Loading  →  Linking(Verify, Prepare, Resolve)  →  Init)     |
 +---------------------------------------------------------------+

 +---------------------------------------------------------------+
 |                Runtime Data Areas (Memory)                    |
 +---------------------------------------------------------------+
 |                                                               |
 |   +-------------------+        +---------------------------+  |
 |   |   Method Area     |        |       Heap                |  |
 |   |  (Class info,     |        |  (Objects, Instances,     |  |
 |   |   static data)    |        |   Arrays)                 |  |
 |   +-------------------+        +---------------------------+  |
 |                                                               |
 |   +-------------------+        +---------------------------+  |
 |   |   Java Stack      |        |      PC Registers         |  |
 |   | (Frames: local    |        | (Current instruction      |  |
 |   |  vars, operand    |        |  address per thread)      |  |
 |   |  stack)           |        +---------------------------+  |
 |   +-------------------+                                       |
 |                                                               |
 |   +-------------------+                                       |
 |   | Native Method     |                                       |
 |   |      Stack        |                                       |
 |   | (for native code) |                                       |
 |   +-------------------+                                       |
 +---------------------------------------------------------------+

 +---------------------------------------------------------------+
 |                    Execution Engine                           |
 |---------------------------------------------------------------|
 |  Interpreter   |   JIT Compiler   |     Garbage Collector     |
 +---------------------------------------------------------------+

 +---------------------------------------------------------------+
 |           JNI (Java Native Interface) & Native Libraries      |
 +---------------------------------------------------------------+



Short Explanation (easy words)

Class Loader loads .class files into JVM.

Runtime Data Areas hold memory used during execution:

    Method Area: class-level information.
    Heap: objects.
    Stack: method calls & local variables.
    PC Register: next instruction for each thread.
    Native Method Stack: C/C++ method memory.

Execution Engine: actually runs the code
(Interpreter + JIT + Garbage Collector).

JNI: allows calling native OS libraries.

------------------------------


⭐ How JVM Works (Very Easy Explanation)

Think of Java program like a recipe written in English.
But the computer only understands machine language.

So we need something in the middle to translate.

This “middle helper” is JVM (Java Virtual Machine).


🔥 JVM Working in Simple Steps
Step 1: You write code

Example:

    System.out.println("Hello");


This is written in Java language (English-like).



Step 2: Java compiler (javac) converts it into bytecode

javac Hello.java → produces
Hello.class → contains bytecode (not human readable, not machine readable)

Bytecode is like a universal language that any JVM can understand.



Step 3: JVM reads the bytecode

Now JVM comes into action.
It does 3 jobs inside:



🧠 JVM Job 1 — Class Loader

Class Loader loads classes into memory.
Think of it like “opening the file so that JVM can read it.”


📦 JVM Job 2 — Memory Manager / Runtime Data Areas

JVM creates different memory areas:

✔ Heap → For objects

Example:
    new Student() → stored here


✔ Stack → For method calls + local variables

Example:
Inside a method:

    int a = 10;

a goes to stack.


✔ Method Area → Stores class names, method names, static variables

Example:
    static int count = 0;


✔ PC Register → Stores which line should run next

Example:
Running line 5? PC register = 5


✔ Native Method Stack → For C/C++ methods

Used when Java uses OS functions.




⚙ JVM Job 3 — Execution Engine

This part actually runs your program.

It has 3 workers:

🔹 Interpreter

Runs bytecode line by line (slower but immediate).


🔹 JIT Compiler (Just In Time)

Converts repeated bytecode into fast machine code
→ improves speed


🔹 Garbage Collector

Deletes unused objects automatically
→ No need for free() like in C


🎯 Last Step — You See Output

After JVM runs the bytecode, you get the final result like:

    Hello



⭐ Why JVM Makes Java Special?

✔ Same Java program runs everywhere

Windows JVM → runs program
Linux JVM → runs same program
Mac JVM → runs same program

This is why Java is “Write Once, Run Anywhere (WORA)”


📘 Super Simple Summary (One Line Each)

javac → converts .java → .class (bytecode)
JVM → reads .class and runs it
Class Loader → loads class
Memory Area → stores data
Execution Engine → executes instructions
Garbage Collector → cleans trash


How it works (flow):

    Java source (.java) → compile with javac → produce .class bytecode.
    Class loader loads .class into JVM.
    Bytecode verifier ensures safety.
    Execution engine either interprets or JIT-compiles bytecode to native machine code and executes it.
    Garbage collector reclaims unused objects in heap.


Role in platform independence:

    Bytecode is the same across platforms. JVM implementations specific to OS/hardware execute the bytecode. 
    So the same .class files run on any platform with a matching JVM: Write Once, Run Anywhere.


----------------------------


Q4 (b) Explain Java packages. Demonstrate how to create a package and use access specifiers to control visibility of classes and members.

What is a package (simple):

A package groups related classes and interfaces. It provides namespace management and access protection.

How to create and use a package:


1. Declare package at top of .java file:

// inside file: com/example/util/MyUtil.java
package com.example.util;

public class MyUtil {
    public static int publicValue = 10;
    protected static int protectedValue = 20;
    static int defaultValue = 30; // package-private
    private static int privateValue = 40;

    public static void print() {
        System.out.println("Util");
    }
}



2. Access from another package:

// inside file: com/example/app/MainApp.java
package com.example.app;

import com.example.util.MyUtil;

public class MainApp {
    public static void main(String[] args) {
        System.out.println(MyUtil.publicValue); // OK
        MyUtil.print(); // OK
        // System.out.println(MyUtil.defaultValue); // Not accessible (package-private)
        // System.out.println(MyUtil.privateValue); // Not accessible
    }
}



3. Access specifiers summary:

    public — accessible from any package.
    protected — accessible in the same package and subclasses (even in other packages).
    default (no modifier) — package-private: accessible only inside same package.
    private — accessible only within the same class.


Compile and run example (from parent folder):

    javac com/example/util/MyUtil.java com/example/app/MainApp.java
    java com.example.app.MainApp


----------------------------


OR (alternate Q4 (b) option) — Program to read two integers from command line and display division with exceptions handled

Program that reads two integers from command line and handles possible exceptions 
(ArrayIndexOutOfBoundsException, NumberFormatException, ArithmeticException)


public class DivideCommandLine {
    public static void main(String[] args) {
        try {
            // Check arguments length
            if (args.length < 2) {
                throw new ArrayIndexOutOfBoundsException("Two integers required");
            }
            int a = Integer.parseInt(args[0]); // NumberFormatException possible
            int b = Integer.parseInt(args[1]);
            int result = a / b; // ArithmeticException possible (divide by zero)
            System.out.println("Division result: " + result);
        } catch (ArrayIndexOutOfBoundsException ex) {
            System.out.println("Error: Please provide two integer arguments.");
        } catch (NumberFormatException ex) {
            System.out.println("Error: Arguments must be valid integers.");
        } catch (ArithmeticException ex) {
            System.out.println("Error: Division by zero is not allowed.");
        } catch (Exception ex) { // generic catch as fallback
            System.out.println("Unexpected error: " + ex.getMessage());
        } finally {
            System.out.println("Program finished.");
        }
    }
}


Run examples:

java DivideCommandLine 10 2 → Division result: 5
java DivideCommandLine 10 0 → Error: Division by zero is not allowed.
java DivideCommandLine 10 → Error: Please provide two integer arguments.


Final notes & tips (easy & practical)

    Save Java files with the same name as the public class (e.g., ArrayListExample.java for public class ArrayListExample).
    Compile with javac FileName.java and run with java ClassName.
    Use List.of(...) for small immutable lists; use ArrayList for resizable lists.
    Use try-catch-finally to handle errors and finally to clean resources like streams.
    For inheritance, favor interfaces or composition when multiple behaviors are needed (Java allows multiple interfaces).
      
      `},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1.1,question:"1.1 Write a program for swapping and find a factorial value. Perform swapping without using third variable",answer:"",codeExample:`
🧠 Algorithm

1. Start
2. Input two numbers: a and b
3. Print original values of a and b
4. Swap without using third variable:
    a = a + b
    b = a - b
    a = a - b
5. Print swapped values
6. Initialize fact = 1
7. For i = 1 to a, multiply fact = fact * i
8. Print factorial of a
9. Stop 



🧩 ASCII Flowchart

        +----------------------+
        |        Start         |
        +----------------------+
                  |
                  v
        +----------------------+
        | Input a, b           |
        +----------------------+
                  |
                  v
        +----------------------+
        | Print original a, b  |
        +----------------------+
                  |
                  v
        +----------------------+
        | a = a + b            |
        | b = a - b            |
        | a = a - b            |
        +----------------------+
                  |
                  v
        +----------------------+
        | Print swapped a, b   |
        +----------------------+
                  |
                  v
        +----------------------+
        | fact = 1, i = 1      |
        +----------------------+
                  |
                  v
        +----------------------+
        | i <= a ?             |
        +----------------------+
            | Yes        | No
            v            v
+------------------+   +----------------------+
| fact = fact * i  |   | Print factorial fact |
| i = i + 1        |   +----------------------+
+------------------+              |
     |                            v
     +------------<----------+----+
                              |
                         +---------+
                         |  Stop   |
                         +---------+



💻 java Program Code
import java.util.Scanner;

public class SwapAndFactorial {
    public static void main(String[] args) {
        
        int a = 10;
        int b = 20;

        // Display before swapping
        System.out.println("Before swapping: a = " + a + ", b = " + b);

        // Swapping without third variable
        a = a + b;
        b = a - b;
        a = a - b;

        // Display after swapping
        System.out.println("After swapping: a = " + a + ", b = " + b);

        // Find factorial of 'a'
        int fact = 1;
        for (int i = 1; i <= a; i++) {
            fact = fact * i;
        }

        // Display factorial result
        System.out.println("Factorial of " + a + " is: " + fact);

        sc.close();
    }
}



📘 Example Output

Enter first number (a): 5
Enter second number (b): 3
Before swapping: a = 5, b = 3
After swapping: a = 3, b = 5
Factorial of 3 is: 6



      
`},{id:2.2,question:"2.1 Write a program to accept a number from the user through command line and  display whether the given number is palindrome or not. ",answer:"",codeExample:`
      
A palindrome number is a number that reads the same backward as forward.

👉 Example:

121 → reversed is also 121 ✅
1331 → reversed is also 1331 ✅
123 → reversed is 321 ❌ (not same)

So:

121 → Palindrome
1221 → Palindrome
123 → Not Palindrome
---------------------------

import java.util.Scanner;

public class PalindromeStringWay {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        String numStr = sc.nextLine();  // read number as text

        // Reverse using StringBuilder
        String reversed = new StringBuilder(numStr).reverse().toString();

        if (numStr.equals(reversed))
            System.out.println(numStr + " is a Palindrome number.");
        else
            System.out.println(numStr + " is NOT a Palindrome number.");
    }
}




🧾 Example Outputs

Example 1:

Enter a number: 121
121 is a Palindrome number.


Example 2:

Enter a number: 123
123 is NOT a Palindrome number.


Example 3:

Enter a number: 44444
44444 is a Palindrome number.

----------------------------------------------------------------------------------------
🧩 Line:

  String reversed = new StringBuilder(numStr).reverse().toString();



🧠 Step 1: numStr
You already have:

  String numStr = "121";

So here numStr is just the string version of your number.



🧠 Step 2: new StringBuilder(numStr)

👉 This creates a StringBuilder object that stores your string.

In Java, StringBuilder is a special class that helps you easily change or modify strings —
for example, reverse, append, or insert text.

So after this step:

  new StringBuilder(numStr)

you have a StringBuilder containing "121".



🧠 Step 3: .reverse()

Now we call .reverse() on that StringBuilder.

  new StringBuilder(numStr).reverse()

➡️ This reverses the characters inside it.
If the string was "121", it becomes "121" (same).
If it was "123", it becomes "321".



🧠 Step 4: .toString()

After reversing, we still have a StringBuilder object.
To convert it back into a normal String, we use .toString().

So:

  new StringBuilder(numStr).reverse().toString();

→ gives a new String that is the reversed version of numStr.


💡 Final Example:

  String numStr = "123";
  String reversed = new StringBuilder(numStr).reverse().toString();
  System.out.println(reversed);


Output:

  321


----------------------------

🧩 1️⃣ Scanner sc = new Scanner(System.in);

This line means:
  “Create a Scanner object named sc to take input from the keyboard.”

💡 Explanation:

  Scanner → a class in Java (in java.util package) used for taking input.
  new Scanner(System.in) → tells Java to read from the keyboard (that’s what System.in means).
  sc → is just the name of the Scanner object (you can name it anything).


📘 Why we use nextLine()?

Because:

nextLine() reads the entire line of input (until you press Enter).
It stores it as a String.

Later we can use this string for checking palindrome (and even reverse it easily).


✅ Full Example to see it working:

  import java.util.Scanner;

  public class InputExample {
      public static void main(String[] args) {
          Scanner sc = new Scanner(System.in);   // create Scanner to take input
          System.out.print("Enter something: ");
          String text = sc.nextLine();           // read input as string
          System.out.println("You typed: " + text);
      }
  }


When you run this:

  Enter something: Hello
  You typed: Hello
<---------------------------------------------------------------------------------------->
<---------------------------------------------------------------------------------------->

🧠 Algorithm (Step-by-Step)

1. Start
2. Import the Scanner class for user input.
3. Create a Scanner object sc.
4. Ask the user to enter a number.
5. Read the input as a string → numStr.
6. Reverse the string using StringBuilder:
    reversed = new StringBuilder(numStr).reverse().toString();
7. Compare the original and reversed strings:
    If both are equal → the number is a Palindrome.
    Else → it is Not a Palindrome.
8. Display the result.
9. Stop



🧩 ASCII Flowchart

+---------------------------+
|          Start            |
+---------------------------+
           |
           v
+---------------------------+
|  Input number as string   |
|  (numStr)                 |
+---------------------------+
           |
           v
+---------------------------+
|  reversed = reverse(numStr) |
+---------------------------+
           |
           v
+---------------------------+
|  numStr == reversed ?     |
+---------------------------+
     | Yes            | No
     v                v
+------------------+  +----------------------+
| Print "Palindrome" | | Print "Not Palindrome" |
+------------------+  +----------------------+
           |
           v
     +-------------+
     |    Stop     |
     +-------------+

<---------------------------------------------------------------------------------------->
<---------------------------------------------------------------------------------------->


second example or way:
    
import java.util.Scanner;

public class PalindromeEasy {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int num = sc.nextInt();   // take number from user

        int original = num;
        int reversed = 0;

        while (num > 0) {
            int digit = num % 10;           // get last digit
            reversed = reversed * 10 + digit; // build reversed number
            num = num / 10;                 // remove last digit
        }

        if (original == reversed)
            System.out.println(original + " is a Palindrome number.");
        else
            System.out.println(original + " is NOT a Palindrome number.");
    }
}


----------------------------------------------------------------------------------------

🧩 Step 1:
  int digit = num % 10;

➡️ % means modulus — it gives the remainder after dividing by 10.
That remainder is the last digit of the number.

Example:
  num = 121
  digit = 121 % 10 = 1

So the last digit = 1



🧩 Step 2:
  reversed = reversed * 10 + digit;

➡️ This line builds the reversed number step by step.

At first, reversed = 0.

Then:

  reversed = 0 * 10 + 1 = 1

Next time, when we get another digit (like 2),
we shift the previous digits to the left by multiplying by 10, then add the new digit.

Example:

  reversed = 1 * 10 + 2 = 12



🧩 Step 3:
  num = num / 10;

➡️ This line removes the last digit from the number.

Example:
  num = 121 / 10 = 12

Now the next loop works on 12.

🔁 Full process for 121:

| Step | num | digit = num%10 | reversed = reversed*10+digit | new num = num/10 |
| ---- | --- | -------------- | ---------------------------- | ---------------- |
| 1    | 121 | 1              | 1                            | 12               |
| 2    | 12  | 2              | 12                           | 1                |
| 3    | 1   | 1              | 121                          | 0                |

✅ reversed = 121 same as original → Palindrome!


---------

Let’s carefully understand how this line

  reversed = reversed * 10 + digit;

assigns and updates values step by step.

🧠 Before we start

We have two variables:

reversed = 0     (at the beginning)
num = 121


We take each last digit of num one by one and add it to reversed to make the reversed number.

🔹 Step 1:
digit = 121 % 10 = 1
reversed = 0 * 10 + 1 = 1


➡️ So now reversed = 1
We’ve added the last digit (1) to our reversed number.

Then remove last digit:

num = 121 / 10 = 12

🔹 Step 2:

Now num = 12 and reversed = 1

digit = 12 % 10 = 2
reversed = 1 * 10 + 2 = 12


Let’s break this line:

reversed * 10 → shifts old digits one place left → 1 * 10 = 10

+ digit → adds new digit at the end → 10 + 2 = 12

Now reversed becomes 12.

Then remove last digit again:

num = 12 / 10 = 1

🔹 Step 3:

Now num = 1 and reversed = 12

digit = 1 % 10 = 1
reversed = 12 * 10 + 1 = 121


➡️ So finally reversed = 121

✅ Summary Table

| Step | num | digit | reversed (new value) | How it’s calculated |
| ---- | --- | ----- | -------------------- | ------------------- |
| 1    | 121 | 1     | 1                    | 0×10 + 1            |
| 2    | 12  | 2     | 12                   | 1×10 + 2            |
| 3    | 1   | 1     | 121                  | 12×10 + 1           |

Now reversed = 121 (same as original) → Palindrome!

So the line

reversed = reversed * 10 + digit;


means:
➡️ “Move previous digits left (×10), and then add the new last digit.”

`},{id:3.3,question:"3.3. Write a program to accept an array of integer from the user through command line and find prime numbers from the array.",answer:"",codeExample:`
What is Prime numbers?

A prime number is a number that is divisible only by 1 and itself.
That means it has exactly two factors → 1 and the number itself.

If a number n is divisible by any number between 2 and n-1,
then it’s not prime.
Otherwise, it is prime.

✅ Example in words

Let’s check if 7 is prime:

  7 ÷ 2 → not divisible
  7 ÷ 3 → not divisible
  7 ÷ 4 → not divisible
  7 ÷ 5 → not divisible
  7 ÷ 6 → not divisible

✅ So, 7 is a Prime number

what is command line

Command line means a text-based way to interact with your computer — instead of clicking icons or menus, you type commands.

💡 Example:
When you open

  Command Prompt in Windows (cmd)
  Terminal in macOS or Linux

That black (or white) screen where you type commands like

  javac PrimeFromArray.java
  java PrimeFromArray 5 7 9

----------------------------------------------------------------------------------------


public class PrimeFromArray {
    public static void main(String[] args) {
        for (String s : args) {
            int num = Integer.parseInt(s);             // convert string to integer
            boolean isPrime = true;

            if (num <= 1) isPrime = false;
            else {
                for (int i = 2; i <= num / 2; i++) {   // check divisibility from 2 to num/2 like how many times loop runs (not divide num value)
                    if (num % i == 0) {                // % means Remainder = what’s left after division 
                        isPrime = false;
                        break;
                    }
                }
            }

            if (isPrime)
                System.out.println(num + " is Prime");
        }
    }
}


🧾 Example Output

Command: java PrimeFromArray 2 4 5 6 11
Output:
2 is Prime
5 is Prime
11 is Prime


------------

💡 What is Remainder?

👉 Remainder means what is left over after dividing one number by another.

🧮 Example 1:

Let’s divide 7 ÷ 2
    2 goes into 7 3 times → because 2 × 3 = 6
    But 7 is 1 more than 6
    So 1 is left over
✅ That 1 left over is called the remainder.

So:

7 ÷ 2 = 3 remainder 1


In math and Java:

  7 / 2 = 3   → quotient
  7 % 2 = 1   → remainder

----------------------------------------------------------------------------------------



🧠 🧩 ASCII Flowchart


+-----------------------------+
|           Start             |
+-----------------------------+
          |
          v
+-----------------------------+
| Read numbers from command   |
| line arguments              |
+-----------------------------+
          |
          v
+-----------------------------+
| For each number in array    |
+-----------------------------+
          |
          v
+-----------------------------+
| num > 1 ?                   |
+-----------------------------+
     | Yes        | No
     v            v
+------------------+   +-------------------+
| Set isPrime=true |   | Skip (not prime) |
+------------------+   +-------------------+
          |
          v
+-----------------------------+
| For i = 2 to num/2         |
| If num % i == 0            |
| then isPrime = false       |
+-----------------------------+
          |
          v
+-----------------------------+
| isPrime == true ?           |
+-----------------------------+
     | Yes        | No
     v            v
+------------------+  +-------------------+
| Print num (Prime)|  | Do nothing        |
+------------------+  +-------------------+
          |
          v
     +------------+
     |   Stop     |
     +------------+



Algorithm (Step-by-Step)

1. Start
2. Read array of numbers from command line arguments.
3. For each number in the array:
    a. If number <= 1, skip (not prime).
    b. Set isPrime = true.
    c. For i from 2 to number/2:
        i. If number % i == 0, set isPrime = false and break loop.
    d. If isPrime is still true, print the number (it’s prime).
4. Stop


`},{id:4.4,question:"4.4. CREATE A CLASS STACK THAT DEFINES AN INTEGER STACK THAT CAN HOLD 10 VALUES. PERFORM PUSH AND POP ACTIONS IN A STACK.",answer:"",codeExample:`
💻 Java Code

class Stack {
    int arr[] = new int[10];
    int top = -1;

    void push(int value) {
        if (top == 9)
            System.out.println("Stack Overflow!");
        else {
            arr[++top] = value;
            System.out.println(value + " pushed.");
        }
    }

    void pop() {
        if (top == -1)
            System.out.println("Stack Underflow!");
        else
            System.out.println(arr[top--] + " popped.");
    }
}

public class StackDemo {
    public static void main(String[] args) {
        Stack s = new Stack();

        s.push(10);
        s.push(20);
        s.push(30);
        s.pop();
        s.pop();
        s.pop();
        s.pop(); // extra pop to show underflow
    }
}


🧾 Example Output

10 pushed.
20 pushed.
30 pushed.
30 popped.
20 popped.
10 popped.
Stack Underflow!

------------------------------------------------------------------------

⚙️ Algorithm:

1. Start
2. Create a class Stack with:
    an integer array of size 10
    top variable initialized to -1
3. Define push() → add element if stack not full
4. Define pop() → remove element if stack not empty
5. In main(), create an object of Stack
6. Perform few push and pop actions
7. Stop




🧠 Flowchart

           ┌────────────┐
           │   Start    │
           └─────┬──────┘
                 │
                 ▼
       ┌────────────────────┐
       │ Initialize top=-1  │
       │ Stack size = 10    │
       └─────────┬──────────┘
                 │
                 ▼
       ┌────────────────────┐
       │ Push(value) called │
       └─────────┬──────────┘
                 │
                 ▼
     ┌────────────────────────────┐
     │ Is top == 9 ?              │
     └───────┬───────────┬────────┘
             │Yes         │No
             ▼            ▼
 ┌─────────────────┐   ┌───────────────────────────────┐
 │ Print Overflow  │   │ top = top + 1                 │
 │ (stack full)    │   │ arr[top] = value              │
 └─────────────────┘   │ Print “value pushed”          │
                       └──────────┬────────────────────┘
                                  │
                                  ▼
                     ┌────────────────────┐
                     │ Pop() called?      │
                     └───────┬────────────┘
                             │
                             ▼
              ┌────────────────────────────┐
              │ Is top == -1 ?             │
              └───────┬──────────┬─────────┘
                      │Yes        │No
                      ▼           ▼
       ┌──────────────────┐   ┌──────────────────────────┐
       │ Print Underflow  │   │ Print arr[top] + "popped"│
       │ (stack empty)    │   │ top = top - 1            │
       └──────────────────┘   └──────────────────────────┘
                             │
                             ▼
                      ┌───────────────┐
                      │    End        │
                      └───────────────┘


second small flowchart :

+--------+
| Start  |
+--------+
   |
   v
+----------------+
| Create Stack   |
+----------------+
   |
   v
+----------------+
| Push elements  |
+----------------+
   |
   v
+----------------+
| Pop elements   |
+----------------+
   |
   v
+--------+
| Stop   |
+--------+


`},{id:5.5,question:"5.5 Write a program to create a class Publisher with attributes publisher name and publisher id. Derive a subclass Book with attributes bookname, bookid and author name. All these data should be entered by the user. Create two methods getdata() and showdata() to display the details of book and publisher. ",answer:"",codeExample:`
💻 Java Code

import java.util.Scanner;

class Publisher {
    String publisherName;
    int publisherId;

    void getData(Scanner sc) {
        System.out.print("Enter Publisher Name: ");
        publisherName = sc.nextLine();
        System.out.print("Enter Publisher ID: ");
        publisherId = sc.nextInt();
        sc.nextLine(); // clear buffer
    }

    void showData() {
        System.out.println("
Publisher Details:");
        System.out.println("Publisher Name: " + publisherName);
        System.out.println("Publisher ID: " + publisherId);
    }
}

class Book extends Publisher {
    String bookName, authorName;
    int bookId;

    void getData(Scanner sc) {
        super.getData(sc);
        System.out.print("Enter Book Name: ");
        bookName = sc.nextLine();
        System.out.print("Enter Book ID: ");
        bookId = sc.nextInt();
        sc.nextLine(); // clear buffer
        System.out.print("Enter Author Name: ");
        authorName = sc.nextLine();
    }

    void showData() {
        super.showData();
        System.out.println("
Book Details:");
        System.out.println("Book Name: " + bookName);
        System.out.println("Book ID: " + bookId);
        System.out.println("Author Name: " + authorName);
    }
}

public class PublisherBookDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Book b = new Book();
        b.getData(sc);
        b.showData();
        sc.close();
    }
}


🧾 Example Output

Enter Publisher Name: Pearson
Enter Publisher ID: 101
Enter Book Name: Java Basics
Enter Book ID: 202
Enter Author Name: James Gosling

Publisher Details:
Publisher Name: Pearson
Publisher ID: 101

Book Details:
Book Name: Java Basics
Book ID: 202
Author Name: James Gosling


------------------------------------------------------------------------

⚙️ Algorithm

1. Start
2. Create class Publisher with:
    publisherName, publisherId
    method getData() → read publisher info
    method showData() → display publisher info
3. Create subclass Book extending Publisher
    bookName, bookId, authorName
    override getData() to read all info
    override showData() to display all info
4. In main(), create a Book object
5. Call getData() and showData()
6. Stop




🧠 Flowchart

+---------+
|  Start  |
+---------+
    |
    v
+----------------------+
| Input publisher info |
+----------------------+
    |
    v
+----------------------+
| Input book info      |
+----------------------+
    |
    v
+----------------------+
| Display publisher &  |
| book details         |
+----------------------+
    |
    v
+---------+
|  Stop   |
+---------+



      `},{id:6.6,question:"6.6 Create a class with two methods with same name addfunc(), one accepting two integer parameters and other accepting two double parameters. When method is called, the appropriate method should be selected depending on parameters passed(method overloading). ",answer:"",codeExample:`
💻 Java Source Code

public class AddFunction {

    // Method 1: accepts two integers
    void addfunc(int a, int b) {
        System.out.println("Sum of integers: " + (a + b));
    }

    // Method 2: accepts two doubles
    void addfunc(double x, double y) {
        System.out.println("Sum of doubles: " + (x + y));
    }

    public static void main(String[] args) {
        AddFunction obj = new AddFunction();

        obj.addfunc(5, 10);       // calls integer method
        obj.addfunc(3.5, 2.5);    // calls double method
    }
}


🧾 Example Output

Sum of integers: 15
Sum of doubles: 6.0

------------------------------------------------------------------------

🔷 Flowchart

🧠 Algorithm

1. Start
2. Create a class named AddFunction.
3. Define two methods named addfunc():
    One takes two integers and returns their sum.
    One takes two doubles and returns their sum.
4. In main():
    Call both methods with integer and double arguments.
5. Display the results.
6. Stop



🔷 Flowchart

          +----------------------+
          |        START         |
          +----------+-----------+
                     |
                     v
          +----------------------+
          | Create AddFunction   |
          | class with 2 methods |
          +----------+-----------+
                     |
                     v
          +----------------------+
          | Call addfunc(int,int)|
          +----------+-----------+
                     |
                     v
          +----------------------+
          | Call addfunc(double, |
          |        double)       |
          +----------+-----------+
                     |
                     v
          +----------------------+
          | Display both results |
          +----------+-----------+
                     |
                     v
          +----------------------+
          |         END          |
          +----------------------+


      `},{id:7.7,question:"7.7 Declare a variable called x with integer as the data type in base class and subclass. Make a method named as show() which displays the value of x in the superclass and subclass.",answer:"",codeExample:`
💻 Java Source Code

class BaseClass {
    int x = 10;

    void show() {
        System.out.println("Value of x in BaseClass: " + x);
    }
}

class SubClass extends BaseClass {
    int x = 20;

    void show() {
        System.out.println("Value of x in SubClass: " + x);
        System.out.println("Value of x in BaseClass (using super): " + super.x);
    }
}

public class MainClass {
    public static void main(String[] args) {
        SubClass obj = new SubClass();
        obj.show();
    }
}


🧾 Example Output

Value of x in SubClass: 20
Value of x in BaseClass (using super): 10


------------------------------------------------------------------------

🧠 Algorithm

1. Start
2. Create a base class called BaseClass with an integer variable x.
3. Initialize x in the base class (e.g., x = 10).
4. Create a subclass called SubClass that extends BaseClass.
5. Declare another integer variable x in the subclass (e.g., x = 20).
6. In both classes, define a method show() to display the value of x.
7. In the main() method:
    Create an object of SubClass.
    Call show() from the base class and subclass to display both values.
8. Stop


🔷 Flowchart

          +---------------------+
          |        START        |
          +----------+----------+
                     |
                     v
          +---------------------+
          | Create BaseClass    |
          | int x = 10          |
          +----------+----------+
                     |
                     v
          +---------------------+
          | Create SubClass     |
          | int x = 20          |
          +----------+----------+
                     |
                     v
          +---------------------+
          | Define show() in    |
          | both classes        |
          +----------+----------+
                     |
                     v
          +---------------------+
          | Create SubClass obj |
          | Call show()         |
          +----------+----------+
                     |
                     v
          +---------------------+
          | Display both values |
          +----------+----------+
                     |
                     v
          +---------------------+
          |        END          |
          +---------------------+

      `},{id:8.8,question:"8.8 WRITE A PROGRAM TO CALCULATE THE AREA, CIRCUMFERENCE AND VOLUME FOR ALL SHAPES. [PERFORM THIS APPLICATION USING FINAL CLASS, ABSTRACT CLASS AND INTERFACE]",answer:"",codeExample:`
💻 Java Source Code

interface Shape2D {
    void area(double r);
    void circumference(double r);
}

abstract class Shape3D {
    abstract void volume(double r);
}

final class Geometry extends Shape3D implements Shape2D {
    public void area(double r) {
        System.out.println("Area of Circle: " + (Math.PI * r * r));
    }
    public void circumference(double r) {
        System.out.println("Circumference of Circle: " + (2 * Math.PI * r));
    }
    void volume(double r) {
        System.out.println("Volume of Sphere: " + ((4.0/3.0) * Math.PI * r * r * r));
    }
}

public class ShapeCalculation {
    public static void main(String[] args) {
        Geometry g = new Geometry();
        double radius = 5.0;

        System.out.println("For Radius = " + radius);
        g.area(radius);
        g.circumference(radius);
        g.volume(radius);
    }
}


🧾 Example Output

For Radius = 5.0
Area of Circle: 78.53981633974483
Circumference of Circle: 31.41592653589793
Volume of Sphere: 523.5987755982989




🧠 Algorithm

1. Start
2. Create an interface Shape2D with methods:
    area()
    circumference()
3. Create an abstract class Shape3D with an abstract method:
    volume()
4. Create a final class Geometry that extends Shape3D and implements Shape2D.
5. In this class:
    Implement methods to calculate area, circumference, and volume for different shapes (circle and sphere).
6. In main(),
    Create an object of Geometry.
    Call methods to calculate and display results.
7. Stop


🔷 Flowchart

          +--------------------------+
          |          START           |
          +------------+-------------+
                       |
                       v
          +--------------------------+
          | Define interface Shape2D |
          | -> area(), circumference()|
          +------------+-------------+
                       |
                       v
          +--------------------------+
          | Define abstract class    |
          | Shape3D -> volume()      |
          +------------+-------------+
                       |
                       v
          +--------------------------+
          | final class Geometry     |
          | implements Shape2D       |
          | extends Shape3D          |
          +------------+-------------+
                       |
                       v
          +--------------------------+
          | Implement area(),        |
          | circumference(), volume()|
          +------------+-------------+
                       |
                       v
          +--------------------------+
          | Call methods in main()   |
          +------------+-------------+
                       |
                       v
          +--------------------------+
          |        END               |
          +--------------------------+


`},{id:9.9,question:"9.9 Write a program to enter two integers from the command line and display the division of those two numbers. Handle all the exceptions (i.e. ArrayIndexOutOfBoundsException, NumberFormatException, ArithmeticException) for invalid arguments passed.",answer:"",codeExample:`
java Program Code

public class DivisionWithExceptions {
    public static void main(String[] args) {
        try {
            int a = Integer.parseInt(args[0]);
            int b = Integer.parseInt(args[1]);
            System.out.println("Result: " + (a / b));
        }
        catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: Please provide two numbers!");
        }
        catch (NumberFormatException e) {
            System.out.println("Error: Enter valid integers!");
        }
        catch (ArithmeticException e) {
            System.out.println("Error: Division by zero not allowed!");
        }
    }
}




output Examples:

🧮 Case 1: Valid input
Command:
    java DivisionWithExceptions 10 2

Output:
    Result: 5



⚠️ Case 2: Missing arguments
Command:
    java DivisionWithExceptions 10

Output:
    Error: Please provide two numbers!

Command:
    java DivisionWithExceptions

Output:
    Error: Please provide two numbers!



🚫 Case 3: Invalid numbers
Command:
    java DivisionWithExceptions ten 5

Output:
    Error: Enter valid integers!


❌ Case 4: Division by zero
Command:
    java DivisionWithExceptions 10 0

Output:
    Error: Division by zero not allowed!


----------------------------------------------------------------

🧠 Algorithm

1. Start
2. Accept two integers from the command line arguments.
3. Convert them from String → int using Integer.parseInt().
4. Divide the first number by the second.
5. Handle possible exceptions using try-catch blocks:
    ArrayIndexOutOfBoundsException → if less than 2 args provided..
    NumberFormatException → if input is not a valid number.
    ArithmeticException → if division by zero.
6. Display the result if no exception occurs.
7. Stop




flowchart

             ┌──────────────────────────┐
             │   Start Program          │
             └────────────┬─────────────┘
                          │
                          ▼
             ┌──────────────────────────┐
             │ Try block starts         │
             │ Read args[0], args[1]    │
             └────────────┬─────────────┘
                          │
                          ▼
             ┌──────────────────────────┐
             │ Convert to integers      │
             │ a = Integer.parseInt()   │
             │ b = Integer.parseInt()   │
             └────────────┬─────────────┘
                          │
                          ▼
             ┌──────────────────────────┐
             │ Perform division (a/b)   │
             └────────────┬─────────────┘
                          │
                          ▼
             ┌──────────────────────────┐
             │ Print result             │
             └────────────┬─────────────┘
                          │
                          ▼
             ┌──────────────────────────┐
             │      End Program          │
             └──────────────────────────┘

                ┌───────────────────────────────┐
                │        Exception Handling     │
                └───────────────────────────────┘
                          ▲
          ┌───────────────┼──────────────────────────────┐
          │               │                              │
          │               │                              │
┌────────────────┐  ┌─────────────────────┐  ┌─────────────────────┐
│ Missing Args?  │  │ Invalid Number?     │  │ Divide by Zero?     │
│ (ArrayIndex...)│  │ (NumberFormat...)   │  │ (Arithmetic...)     │
└───────┬────────┘  └────────┬───────────┘  └────────┬───────────┘
        │                     │                      │
        ▼                     ▼                      ▼
┌──────────────┐    ┌─────────────────┐    ┌──────────────────────────┐
│ Print Error: │    │ Print Error:    │    │ Print Error:             │
│ Please       │    │ Enter valid     │    │ Division by zero not     │
│ provide two  │    │ integers!       │    │ allowed!                 │
│ numbers!     │    └─────────────────┘    └──────────────────────────┘
└──────────────┘


    `},{id:10.1,question:"10.10 Write a program to perform following actions and store output in file: Accept strings from user, convert it into uppercase and store it in a file. Write double value to a text file and also display the date on which the application was run inside the file. Delete a given file or directory and display appropriate message",answer:"",codeExample:`
💻 Java Source Code

import java.io.*;
import java.util.*;

public class FileActions {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        try {
            // Step 1: Accept a string from user
            System.out.print("Enter a string: ");
            String input = sc.nextLine();

            // Step 2: Convert to uppercase
            String upper = input.toUpperCase();

            // Step 3: Create and write to file
            FileWriter fw = new FileWriter("output.txt");
            fw.write("Uppercase String: " + upper + "
");

            // Step 4: Write a double value
            double num = 123.45;
            fw.write("Double Value: " + num + "
");

            // Step 5: Write current date
            Date date = new Date();
            fw.write("Date: " + date + "
");

            fw.close();
            System.out.println("Data written to output.txt successfully!");

            // Step 6: Ask for file or directory to delete
            System.out.print("Enter file or folder name to delete: ");
            String filename = sc.nextLine();

            File file = new File(filename);

            // Step 7: Delete file or show message
            if (file.exists()) {
                if (file.delete()) {
                    System.out.println("File deleted successfully!");
                } else {
                    System.out.println("Unable to delete the file.");
                }
            } else {
                System.out.println("File not found!");
            }

        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}


🧾 Example Output

Console Output:

Enter a string: hello world
Data written to output.txt successfully!
Enter file or folder name to delete: output.txt
File deleted successfully!


File Content (before deletion):
Uppercase String: HELLO WORLD
Double Value: 123.45
Date: Sat Oct 05 10:32:00 IST 2025


------------------------------------------------------------------------

🧠 Algorithm

1. Start
2. Accept a string from the user.
3. Convert the string to uppercase.
4. Create a text file (e.g., output.txt).
5. Write the uppercase string into the file.
6. Write a double value (e.g., 123.45) to the same file.
7. Write the current date of program execution in the file.
8. Ask the user to enter a filename to delete.
9. Try to delete the file or directory.
10. Display a message — “File deleted successfully” or “File not found.”
11. Stop


🔷 Flowchart

              ┌───────────────────────────┐
              │        Start              │
              └────────────┬──────────────┘
                           │
                           ▼
            ┌───────────────────────────┐
            │ Accept string from user   │
            └────────────┬──────────────┘
                           │
                           ▼
            ┌───────────────────────────┐
            │ Convert to UPPERCASE      │
            └────────────┬──────────────┘
                           │
                           ▼
            ┌───────────────────────────┐
            │ Write to file:            │
            │ - Text                    │
            │ - Double value            │
            │ - Current date            │
            └────────────┬──────────────┘
                           │
                           ▼
            ┌───────────────────────────┐
            │ Ask user for file name    │
            │ to delete                 │
            └────────────┬──────────────┘
                           │
                           ▼
            ┌───────────────────────────┐
            │ Does file exist?          │
            └───────┬──────────┬────────┘
                    │          │
              Yes ──┘          └── No
                    │              │
                    ▼              ▼
       ┌──────────────────┐   ┌────────────────────────┐
       │ Delete file and  │   │ Show message: File not │
       │ show “Deleted”   │   │ found or cannot delete │
       └────────┬─────────┘   └────────────┬──────────┘
                │                          │
                ▼                          ▼
             ┌──────────────────────────────┐
             │            End               │
             └──────────────────────────────┘

`},{id:11.11,question:"11.11 Collection Framework Write a program for creating an ArrayList, add the elements in array list and then obtain an array from ArrayList and display the contents and sum of those numbers.",answer:"",codeExample:`
💻 Java Source Code


import java.util.*;

public class ArrayListExample {
    public static void main(String[] args) {
        // Step 1: Create an ArrayList of Integers
        ArrayList<Integer> list = new ArrayList<>();

        // Step 2: Add elements
        list.add(10);
        list.add(20);
        list.add(30);
        list.add(40);
        list.add(50);

        // Step 3: Convert ArrayList to array
        Object[] arr = list.toArray();

        // Step 4: Display elements
        System.out.println("Array elements are:");
        for (Object obj : arr) {
            System.out.print(obj + " ");
        }

        // Step 5: Calculate sum
        int sum = 0;
        for (int num : list) {
            sum += num;
        }

        // Step 6: Display sum
        System.out.println("
Sum of elements: " + sum);
    }
}



🧾 Example Output
Array elements are:
10 20 30 40 50 
Sum of elements: 150
      

------------------------------------------------------------------------

🧠 Algorithm

1. Start
2. Create an ArrayList of integers.
3. Add elements to the ArrayList.
4. Convert the ArrayList to an array using toArray().
5. Display all elements of the array.
6. Calculate the sum of all elements.
7. Display the sum.
8. Stop
   

------------------------------------------------------------------------


🔷 Flowchart (ASCII Design)

                 +-------------------------+
                 |         START           |
                 +-----------+-------------+
                             |
                             v
                 +-------------------------+
                 | Create ArrayList object |
                 +-----------+-------------+
                             |
                             v
                 +-------------------------+
                 | Add integers to list    |
                 +-----------+-------------+
                             |
                             v
                 +-------------------------+
                 | Convert to array        |
                 +-----------+-------------+
                             |
                             v
                 +-------------------------+
                 | Display all elements    |
                 +-----------+-------------+
                             |
                             v
                 +-------------------------+
                 | Calculate sum of values |
                 +-----------+-------------+
                             |
                             v
                 +-------------------------+
                 | Display total sum       |
                 +-----------+-------------+
                             |
                             v
                 +-------------------------+
                 |          END            |
                 +-------------------------+


`},{id:1,question:"",answer:"",codeExample:""}],ge=M=>{z(D===M?null:M)};return Pe.jsxs("div",{className:"app-container",children:[Pe.jsx("h1",{children:"java Interview Questions"}),Pe.jsx("div",{className:"questions-container",children:f.map(M=>Pe.jsxs("div",{className:"question-item",children:[Pe.jsx("button",{className:`question-button ${D===M.id?"active":""}`,onClick:()=>ge(M.id),children:M.question}),D===M.id&&Pe.jsxs("div",{className:"answer-container",children:[Pe.jsxs("div",{className:"answer",children:[Pe.jsx("h3",{children:"Answer:"}),Pe.jsx("p",{children:M.answer})]}),M.codeExample&&Pe.jsxs("div",{className:"code-example",children:[Pe.jsx("h3",{children:"Code Example:"}),Pe.jsx("pre",{children:Pe.jsx("code",{children:M.codeExample})})]})]})]},M.id))})]})}Rd.createRoot(document.getElementById("root")).render(Pe.jsx(Mu.StrictMode,{children:Pe.jsx(Fd,{})}));
