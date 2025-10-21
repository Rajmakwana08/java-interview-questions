(function(){const B=document.createElement("link").relList;if(B&&B.supports&&B.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))ge(_);new MutationObserver(_=>{for(const Q of _)if(Q.type==="childList")for(const ce of Q.addedNodes)ce.tagName==="LINK"&&ce.rel==="modulepreload"&&ge(ce)}).observe(document,{childList:!0,subtree:!0});function m(_){const Q={};return _.integrity&&(Q.integrity=_.integrity),_.referrerPolicy&&(Q.referrerPolicy=_.referrerPolicy),_.crossOrigin==="use-credentials"?Q.credentials="include":_.crossOrigin==="anonymous"?Q.credentials="omit":Q.credentials="same-origin",Q}function ge(_){if(_.ep)return;_.ep=!0;const Q=m(_);fetch(_.href,Q)}})();var Eo={exports:{}},gr={},bo={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eu;function Ad(){if(Eu)return L;Eu=1;var j=Symbol.for("react.element"),B=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),ge=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),Q=Symbol.for("react.provider"),ce=Symbol.for("react.context"),de=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),be=Symbol.for("react.memo"),ve=Symbol.for("react.lazy"),ee=Symbol.iterator;function K(c){return c===null||typeof c!="object"?null:(c=ee&&c[ee]||c["@@iterator"],typeof c=="function"?c:null)}var We={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},He=Object.assign,G={};function H(c,y,O){this.props=c,this.context=y,this.refs=G,this.updater=O||We}H.prototype.isReactComponent={},H.prototype.setState=function(c,y){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,y,"setState")},H.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function yt(){}yt.prototype=H.prototype;function st(c,y,O){this.props=c,this.context=y,this.refs=G,this.updater=O||We}var Xe=st.prototype=new yt;Xe.constructor=st,He(Xe,H.prototype),Xe.isPureReactComponent=!0;var Se=Array.isArray,Ze=Object.prototype.hasOwnProperty,Ce={current:null},Ae={key:!0,ref:!0,__self:!0,__source:!0};function Ve(c,y,O){var M,R={},F=null,V=null;if(y!=null)for(M in y.ref!==void 0&&(V=y.ref),y.key!==void 0&&(F=""+y.key),y)Ze.call(y,M)&&!Ae.hasOwnProperty(M)&&(R[M]=y[M]);var U=arguments.length-2;if(U===1)R.children=O;else if(1<U){for(var X=Array(U),Fe=0;Fe<U;Fe++)X[Fe]=arguments[Fe+2];R.children=X}if(c&&c.defaultProps)for(M in U=c.defaultProps,U)R[M]===void 0&&(R[M]=U[M]);return{$$typeof:j,type:c,key:F,ref:V,props:R,_owner:Ce.current}}function Pt(c,y){return{$$typeof:j,type:c.type,key:y,ref:c.ref,props:c.props,_owner:c._owner}}function gt(c){return typeof c=="object"&&c!==null&&c.$$typeof===j}function qt(c){var y={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(O){return y[O]})}var ut=/\/+/g;function Re(c,y){return typeof c=="object"&&c!==null&&c.key!=null?qt(""+c.key):y.toString(36)}function et(c,y,O,M,R){var F=typeof c;(F==="undefined"||F==="boolean")&&(c=null);var V=!1;if(c===null)V=!0;else switch(F){case"string":case"number":V=!0;break;case"object":switch(c.$$typeof){case j:case B:V=!0}}if(V)return V=c,R=R(V),c=M===""?"."+Re(V,0):M,Se(R)?(O="",c!=null&&(O=c.replace(ut,"$&/")+"/"),et(R,y,O,"",function(Fe){return Fe})):R!=null&&(gt(R)&&(R=Pt(R,O+(!R.key||V&&V.key===R.key?"":(""+R.key).replace(ut,"$&/")+"/")+c)),y.push(R)),1;if(V=0,M=M===""?".":M+":",Se(c))for(var U=0;U<c.length;U++){F=c[U];var X=M+Re(F,U);V+=et(F,y,O,X,R)}else if(X=K(c),typeof X=="function")for(c=X.call(c),U=0;!(F=c.next()).done;)F=F.value,X=M+Re(F,U++),V+=et(F,y,O,X,R);else if(F==="object")throw y=String(c),Error("Objects are not valid as a React child (found: "+(y==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":y)+"). If you meant to render a collection of children, use an array instead.");return V}function ct(c,y,O){if(c==null)return c;var M=[],R=0;return et(c,M,"","",function(F){return y.call(O,F,R++)}),M}function De(c){if(c._status===-1){var y=c._result;y=y(),y.then(function(O){(c._status===0||c._status===-1)&&(c._status=1,c._result=O)},function(O){(c._status===0||c._status===-1)&&(c._status=2,c._result=O)}),c._status===-1&&(c._status=0,c._result=y)}if(c._status===1)return c._result.default;throw c._result}var re={current:null},w={transition:null},A={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:w,ReactCurrentOwner:Ce};function E(){throw Error("act(...) is not supported in production builds of React.")}return L.Children={map:ct,forEach:function(c,y,O){ct(c,function(){y.apply(this,arguments)},O)},count:function(c){var y=0;return ct(c,function(){y++}),y},toArray:function(c){return ct(c,function(y){return y})||[]},only:function(c){if(!gt(c))throw Error("React.Children.only expected to receive a single React element child.");return c}},L.Component=H,L.Fragment=m,L.Profiler=_,L.PureComponent=st,L.StrictMode=ge,L.Suspense=W,L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,L.act=E,L.cloneElement=function(c,y,O){if(c==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+c+".");var M=He({},c.props),R=c.key,F=c.ref,V=c._owner;if(y!=null){if(y.ref!==void 0&&(F=y.ref,V=Ce.current),y.key!==void 0&&(R=""+y.key),c.type&&c.type.defaultProps)var U=c.type.defaultProps;for(X in y)Ze.call(y,X)&&!Ae.hasOwnProperty(X)&&(M[X]=y[X]===void 0&&U!==void 0?U[X]:y[X])}var X=arguments.length-2;if(X===1)M.children=O;else if(1<X){U=Array(X);for(var Fe=0;Fe<X;Fe++)U[Fe]=arguments[Fe+2];M.children=U}return{$$typeof:j,type:c.type,key:R,ref:F,props:M,_owner:V}},L.createContext=function(c){return c={$$typeof:ce,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},c.Provider={$$typeof:Q,_context:c},c.Consumer=c},L.createElement=Ve,L.createFactory=function(c){var y=Ve.bind(null,c);return y.type=c,y},L.createRef=function(){return{current:null}},L.forwardRef=function(c){return{$$typeof:de,render:c}},L.isValidElement=gt,L.lazy=function(c){return{$$typeof:ve,_payload:{_status:-1,_result:c},_init:De}},L.memo=function(c,y){return{$$typeof:be,type:c,compare:y===void 0?null:y}},L.startTransition=function(c){var y=w.transition;w.transition={};try{c()}finally{w.transition=y}},L.unstable_act=E,L.useCallback=function(c,y){return re.current.useCallback(c,y)},L.useContext=function(c){return re.current.useContext(c)},L.useDebugValue=function(){},L.useDeferredValue=function(c){return re.current.useDeferredValue(c)},L.useEffect=function(c,y){return re.current.useEffect(c,y)},L.useId=function(){return re.current.useId()},L.useImperativeHandle=function(c,y,O){return re.current.useImperativeHandle(c,y,O)},L.useInsertionEffect=function(c,y){return re.current.useInsertionEffect(c,y)},L.useLayoutEffect=function(c,y){return re.current.useLayoutEffect(c,y)},L.useMemo=function(c,y){return re.current.useMemo(c,y)},L.useReducer=function(c,y,O){return re.current.useReducer(c,y,O)},L.useRef=function(c){return re.current.useRef(c)},L.useState=function(c){return re.current.useState(c)},L.useSyncExternalStore=function(c,y,O){return re.current.useSyncExternalStore(c,y,O)},L.useTransition=function(){return re.current.useTransition()},L.version="18.3.1",L}var bu;function Io(){return bu||(bu=1,bo.exports=Ad()),bo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cu;function Dd(){if(Cu)return gr;Cu=1;var j=Io(),B=Symbol.for("react.element"),m=Symbol.for("react.fragment"),ge=Object.prototype.hasOwnProperty,_=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Q={key:!0,ref:!0,__self:!0,__source:!0};function ce(de,W,be){var ve,ee={},K=null,We=null;be!==void 0&&(K=""+be),W.key!==void 0&&(K=""+W.key),W.ref!==void 0&&(We=W.ref);for(ve in W)ge.call(W,ve)&&!Q.hasOwnProperty(ve)&&(ee[ve]=W[ve]);if(de&&de.defaultProps)for(ve in W=de.defaultProps,W)ee[ve]===void 0&&(ee[ve]=W[ve]);return{$$typeof:B,type:de,key:K,ref:We,props:ee,_owner:_.current}}return gr.Fragment=m,gr.jsx=ce,gr.jsxs=ce,gr}var Pu;function jd(){return Pu||(Pu=1,Eo.exports=Dd()),Eo.exports}var Ie=jd(),_u=Io(),Ii={},Co={exports:{}},Ne={},Po={exports:{}},To={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tu;function _d(){return Tu||(Tu=1,(function(j){function B(w,A){var E=w.length;w.push(A);e:for(;0<E;){var c=E-1>>>1,y=w[c];if(0<_(y,A))w[c]=A,w[E]=y,E=c;else break e}}function m(w){return w.length===0?null:w[0]}function ge(w){if(w.length===0)return null;var A=w[0],E=w.pop();if(E!==A){w[0]=E;e:for(var c=0,y=w.length,O=y>>>1;c<O;){var M=2*(c+1)-1,R=w[M],F=M+1,V=w[F];if(0>_(R,E))F<y&&0>_(V,R)?(w[c]=V,w[F]=E,c=F):(w[c]=R,w[M]=E,c=M);else if(F<y&&0>_(V,E))w[c]=V,w[F]=E,c=F;else break e}}return A}function _(w,A){var E=w.sortIndex-A.sortIndex;return E!==0?E:w.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var Q=performance;j.unstable_now=function(){return Q.now()}}else{var ce=Date,de=ce.now();j.unstable_now=function(){return ce.now()-de}}var W=[],be=[],ve=1,ee=null,K=3,We=!1,He=!1,G=!1,H=typeof setTimeout=="function"?setTimeout:null,yt=typeof clearTimeout=="function"?clearTimeout:null,st=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Xe(w){for(var A=m(be);A!==null;){if(A.callback===null)ge(be);else if(A.startTime<=w)ge(be),A.sortIndex=A.expirationTime,B(W,A);else break;A=m(be)}}function Se(w){if(G=!1,Xe(w),!He)if(m(W)!==null)He=!0,De(Ze);else{var A=m(be);A!==null&&re(Se,A.startTime-w)}}function Ze(w,A){He=!1,G&&(G=!1,yt(Ve),Ve=-1),We=!0;var E=K;try{for(Xe(A),ee=m(W);ee!==null&&(!(ee.expirationTime>A)||w&&!qt());){var c=ee.callback;if(typeof c=="function"){ee.callback=null,K=ee.priorityLevel;var y=c(ee.expirationTime<=A);A=j.unstable_now(),typeof y=="function"?ee.callback=y:ee===m(W)&&ge(W),Xe(A)}else ge(W);ee=m(W)}if(ee!==null)var O=!0;else{var M=m(be);M!==null&&re(Se,M.startTime-A),O=!1}return O}finally{ee=null,K=E,We=!1}}var Ce=!1,Ae=null,Ve=-1,Pt=5,gt=-1;function qt(){return!(j.unstable_now()-gt<Pt)}function ut(){if(Ae!==null){var w=j.unstable_now();gt=w;var A=!0;try{A=Ae(!0,w)}finally{A?Re():(Ce=!1,Ae=null)}}else Ce=!1}var Re;if(typeof st=="function")Re=function(){st(ut)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,ct=et.port2;et.port1.onmessage=ut,Re=function(){ct.postMessage(null)}}else Re=function(){H(ut,0)};function De(w){Ae=w,Ce||(Ce=!0,Re())}function re(w,A){Ve=H(function(){w(j.unstable_now())},A)}j.unstable_IdlePriority=5,j.unstable_ImmediatePriority=1,j.unstable_LowPriority=4,j.unstable_NormalPriority=3,j.unstable_Profiling=null,j.unstable_UserBlockingPriority=2,j.unstable_cancelCallback=function(w){w.callback=null},j.unstable_continueExecution=function(){He||We||(He=!0,De(Ze))},j.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Pt=0<w?Math.floor(1e3/w):5},j.unstable_getCurrentPriorityLevel=function(){return K},j.unstable_getFirstCallbackNode=function(){return m(W)},j.unstable_next=function(w){switch(K){case 1:case 2:case 3:var A=3;break;default:A=K}var E=K;K=A;try{return w()}finally{K=E}},j.unstable_pauseExecution=function(){},j.unstable_requestPaint=function(){},j.unstable_runWithPriority=function(w,A){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var E=K;K=w;try{return A()}finally{K=E}},j.unstable_scheduleCallback=function(w,A,E){var c=j.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?c+E:c):E=c,w){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=E+y,w={id:ve++,callback:A,priorityLevel:w,startTime:E,expirationTime:y,sortIndex:-1},E>c?(w.sortIndex=E,B(be,w),m(W)===null&&w===m(be)&&(G?(yt(Ve),Ve=-1):G=!0,re(Se,E-c))):(w.sortIndex=y,B(W,w),He||We||(He=!0,De(Ze))),w},j.unstable_shouldYield=qt,j.unstable_wrapCallback=function(w){var A=K;return function(){var E=K;K=A;try{return w.apply(this,arguments)}finally{K=E}}}})(To)),To}var Iu;function Od(){return Iu||(Iu=1,Po.exports=_d()),Po.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Au;function Ld(){if(Au)return Ne;Au=1;var j=Io(),B=Od();function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ge=new Set,_={};function Q(e,t){ce(e,t),ce(e+"Capture",t)}function ce(e,t){for(_[e]=t,e=0;e<t.length;e++)ge.add(t[e])}var de=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),W=Object.prototype.hasOwnProperty,be=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ve={},ee={};function K(e){return W.call(ee,e)?!0:W.call(ve,e)?!1:be.test(e)?ee[e]=!0:(ve[e]=!0,!1)}function We(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function He(e,t,n,r){if(t===null||typeof t>"u"||We(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function G(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){H[e]=new G(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];H[t]=new G(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){H[e]=new G(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){H[e]=new G(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){H[e]=new G(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){H[e]=new G(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){H[e]=new G(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){H[e]=new G(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){H[e]=new G(e,5,!1,e.toLowerCase(),null,!1,!1)});var yt=/[\-:]([a-z])/g;function st(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yt,st);H[t]=new G(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yt,st);H[t]=new G(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yt,st);H[t]=new G(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){H[e]=new G(e,1,!1,e.toLowerCase(),null,!1,!1)}),H.xlinkHref=new G("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){H[e]=new G(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xe(e,t,n,r){var i=H.hasOwnProperty(t)?H[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(He(t,n,i,r)&&(n=null),r||i===null?K(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Se=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ze=Symbol.for("react.element"),Ce=Symbol.for("react.portal"),Ae=Symbol.for("react.fragment"),Ve=Symbol.for("react.strict_mode"),Pt=Symbol.for("react.profiler"),gt=Symbol.for("react.provider"),qt=Symbol.for("react.context"),ut=Symbol.for("react.forward_ref"),Re=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),ct=Symbol.for("react.memo"),De=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),w=Symbol.iterator;function A(e){return e===null||typeof e!="object"?null:(e=w&&e[w]||e["@@iterator"],typeof e=="function"?e:null)}var E=Object.assign,c;function y(e){if(c===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);c=t&&t[1]||""}return`
`+c+e}var O=!1;function M(e,t){if(!e||O)return"";O=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,l=a.length-1;1<=o&&0<=l&&i[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==a[l]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{O=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?y(e):""}function R(e){switch(e.tag){case 5:return y(e.type);case 16:return y("Lazy");case 13:return y("Suspense");case 19:return y("SuspenseList");case 0:case 2:case 15:return e=M(e.type,!1),e;case 11:return e=M(e.type.render,!1),e;case 1:return e=M(e.type,!0),e;default:return""}}function F(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ae:return"Fragment";case Ce:return"Portal";case Pt:return"Profiler";case Ve:return"StrictMode";case Re:return"Suspense";case et:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qt:return(e.displayName||"Context")+".Consumer";case gt:return(e._context.displayName||"Context")+".Provider";case ut:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ct:return t=e.displayName||null,t!==null?t:F(e.type)||"Memo";case De:t=e._payload,e=e._init;try{return F(e(t))}catch{}}return null}function V(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return F(t);case 8:return t===Ve?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function U(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function X(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fe(e){var t=X(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vr(e){e._valueTracker||(e._valueTracker=Fe(e))}function Ao(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=X(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Sr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ai(e,t){var n=t.checked;return E({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Do(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=U(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function jo(e,t){t=t.checked,t!=null&&Xe(e,"checked",t,!1)}function Di(e,t){jo(e,t);var n=U(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ji(e,t.type,n):t.hasOwnProperty("defaultValue")&&ji(e,t.type,U(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _o(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ji(e,t,n){(t!=="number"||Sr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var _n=Array.isArray;function ln(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+U(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function _i(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(m(91));return E({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Oo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(m(92));if(_n(n)){if(1<n.length)throw Error(m(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:U(n)}}function Lo(e,t){var n=U(t.value),r=U(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Mo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function No(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?No(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wr,Ro=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wr=wr||document.createElement("div"),wr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function On(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ln={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ou=["Webkit","ms","Moz","O"];Object.keys(Ln).forEach(function(e){Ou.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ln[t]=Ln[e]})});function Fo(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ln.hasOwnProperty(e)&&Ln[e]?(""+t).trim():t+"px"}function zo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Fo(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Lu=E({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Li(e,t){if(t){if(Lu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(m(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(m(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(m(61))}if(t.style!=null&&typeof t.style!="object")throw Error(m(62))}}function Mi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ni=null;function Ri(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fi=null,sn=null,un=null;function Bo(e){if(e=nr(e)){if(typeof Fi!="function")throw Error(m(280));var t=e.stateNode;t&&(t=Wr(t),Fi(e.stateNode,e.type,t))}}function Uo(e){sn?un?un.push(e):un=[e]:sn=e}function Jo(){if(sn){var e=sn,t=un;if(un=sn=null,Bo(e),t)for(e=0;e<t.length;e++)Bo(t[e])}}function Wo(e,t){return e(t)}function Ho(){}var zi=!1;function Vo(e,t,n){if(zi)return e(t,n);zi=!0;try{return Wo(e,t,n)}finally{zi=!1,(sn!==null||un!==null)&&(Ho(),Jo())}}function Mn(e,t){var n=e.stateNode;if(n===null)return null;var r=Wr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(m(231,t,typeof n));return n}var Bi=!1;if(de)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){Bi=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{Bi=!1}function Mu(e,t,n,r,i,a,o,l,s){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(g){this.onError(g)}}var Rn=!1,xr=null,kr=!1,Ui=null,Nu={onError:function(e){Rn=!0,xr=e}};function Ru(e,t,n,r,i,a,o,l,s){Rn=!1,xr=null,Mu.apply(Nu,arguments)}function Fu(e,t,n,r,i,a,o,l,s){if(Ru.apply(this,arguments),Rn){if(Rn){var f=xr;Rn=!1,xr=null}else throw Error(m(198));kr||(kr=!0,Ui=f)}}function Qt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qo(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qo(e){if(Qt(e)!==e)throw Error(m(188))}function zu(e){var t=e.alternate;if(!t){if(t=Qt(e),t===null)throw Error(m(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Qo(i),e;if(a===r)return Qo(i),t;a=a.sibling}throw Error(m(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o)throw Error(m(189))}}if(n.alternate!==r)throw Error(m(190))}if(n.tag!==3)throw Error(m(188));return n.stateNode.current===n?e:t}function $o(e){return e=zu(e),e!==null?Yo(e):null}function Yo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Yo(e);if(t!==null)return t;e=e.sibling}return null}var Ko=B.unstable_scheduleCallback,Go=B.unstable_cancelCallback,Bu=B.unstable_shouldYield,Uu=B.unstable_requestPaint,ae=B.unstable_now,Ju=B.unstable_getCurrentPriorityLevel,Ji=B.unstable_ImmediatePriority,Xo=B.unstable_UserBlockingPriority,Er=B.unstable_NormalPriority,Wu=B.unstable_LowPriority,Zo=B.unstable_IdlePriority,br=null,dt=null;function Hu(e){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(br,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:Qu,Vu=Math.log,qu=Math.LN2;function Qu(e){return e>>>=0,e===0?32:31-(Vu(e)/qu|0)|0}var Cr=64,Pr=4194304;function Fn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Tr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Fn(l):(a&=o,a!==0&&(r=Fn(a)))}else o=n&~i,o!==0?r=Fn(o):a!==0&&(r=Fn(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tt(t),i=1<<n,r|=e[n],t&=~i;return r}function $u(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-tt(a),l=1<<o,s=i[o];s===-1?((l&n)===0||(l&r)!==0)&&(i[o]=$u(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}function Wi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function el(){var e=Cr;return Cr<<=1,(Cr&4194240)===0&&(Cr=64),e}function Hi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function zn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=n}function Ku(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-tt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Vi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var J=0;function tl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var nl,qi,rl,il,al,Qi=!1,Ir=[],Tt=null,It=null,At=null,Bn=new Map,Un=new Map,Dt=[],Gu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ol(e,t){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":It=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":Bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Un.delete(t.pointerId)}}function Jn(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=nr(t),t!==null&&qi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Xu(e,t,n,r,i){switch(t){case"focusin":return Tt=Jn(Tt,e,t,n,r,i),!0;case"dragenter":return It=Jn(It,e,t,n,r,i),!0;case"mouseover":return At=Jn(At,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Bn.set(a,Jn(Bn.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Un.set(a,Jn(Un.get(a)||null,e,t,n,r,i)),!0}return!1}function ll(e){var t=$t(e.target);if(t!==null){var n=Qt(t);if(n!==null){if(t=n.tag,t===13){if(t=qo(n),t!==null){e.blockedOn=t,al(e.priority,function(){rl(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ar(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ni=r,n.target.dispatchEvent(r),Ni=null}else return t=nr(n),t!==null&&qi(t),e.blockedOn=n,!1;t.shift()}return!0}function sl(e,t,n){Ar(e)&&n.delete(t)}function Zu(){Qi=!1,Tt!==null&&Ar(Tt)&&(Tt=null),It!==null&&Ar(It)&&(It=null),At!==null&&Ar(At)&&(At=null),Bn.forEach(sl),Un.forEach(sl)}function Wn(e,t){e.blockedOn===t&&(e.blockedOn=null,Qi||(Qi=!0,B.unstable_scheduleCallback(B.unstable_NormalPriority,Zu)))}function Hn(e){function t(i){return Wn(i,e)}if(0<Ir.length){Wn(Ir[0],e);for(var n=1;n<Ir.length;n++){var r=Ir[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Tt!==null&&Wn(Tt,e),It!==null&&Wn(It,e),At!==null&&Wn(At,e),Bn.forEach(t),Un.forEach(t),n=0;n<Dt.length;n++)r=Dt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Dt.length&&(n=Dt[0],n.blockedOn===null);)ll(n),n.blockedOn===null&&Dt.shift()}var cn=Se.ReactCurrentBatchConfig,Dr=!0;function ec(e,t,n,r){var i=J,a=cn.transition;cn.transition=null;try{J=1,$i(e,t,n,r)}finally{J=i,cn.transition=a}}function tc(e,t,n,r){var i=J,a=cn.transition;cn.transition=null;try{J=4,$i(e,t,n,r)}finally{J=i,cn.transition=a}}function $i(e,t,n,r){if(Dr){var i=Yi(e,t,n,r);if(i===null)pa(e,t,r,jr,n),ol(e,r);else if(Xu(i,e,t,n,r))r.stopPropagation();else if(ol(e,r),t&4&&-1<Gu.indexOf(e)){for(;i!==null;){var a=nr(i);if(a!==null&&nl(a),a=Yi(e,t,n,r),a===null&&pa(e,t,r,jr,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else pa(e,t,r,null,n)}}var jr=null;function Yi(e,t,n,r){if(jr=null,e=Ri(r),e=$t(e),e!==null)if(t=Qt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qo(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return jr=e,null}function ul(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ju()){case Ji:return 1;case Xo:return 4;case Er:case Wu:return 16;case Zo:return 536870912;default:return 16}default:return 16}}var jt=null,Ki=null,_r=null;function cl(){if(_r)return _r;var e,t=Ki,n=t.length,r,i="value"in jt?jt.value:jt.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return _r=i.slice(e,1<r?1-r:void 0)}function Or(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Lr(){return!0}function dl(){return!1}function ze(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Lr:dl,this.isPropagationStopped=dl,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Lr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Lr)},persist:function(){},isPersistent:Lr}),t}var dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gi=ze(dn),Vn=E({},dn,{view:0,detail:0}),nc=ze(Vn),Xi,Zi,qn,Mr=E({},Vn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ta,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qn&&(qn&&e.type==="mousemove"?(Xi=e.screenX-qn.screenX,Zi=e.screenY-qn.screenY):Zi=Xi=0,qn=e),Xi)},movementY:function(e){return"movementY"in e?e.movementY:Zi}}),pl=ze(Mr),rc=E({},Mr,{dataTransfer:0}),ic=ze(rc),ac=E({},Vn,{relatedTarget:0}),ea=ze(ac),oc=E({},dn,{animationName:0,elapsedTime:0,pseudoElement:0}),lc=ze(oc),sc=E({},dn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uc=ze(sc),cc=E({},dn,{data:0}),fl=ze(cc),dc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fc[e])?!!t[e]:!1}function ta(){return mc}var hc=E({},Vn,{key:function(e){if(e.key){var t=dc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Or(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ta,charCode:function(e){return e.type==="keypress"?Or(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Or(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yc=ze(hc),gc=E({},Mr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ml=ze(gc),vc=E({},Vn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ta}),Sc=ze(vc),wc=E({},dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),xc=ze(wc),kc=E({},Mr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ec=ze(kc),bc=[9,13,27,32],na=de&&"CompositionEvent"in window,Qn=null;de&&"documentMode"in document&&(Qn=document.documentMode);var Cc=de&&"TextEvent"in window&&!Qn,hl=de&&(!na||Qn&&8<Qn&&11>=Qn),yl=" ",gl=!1;function vl(e,t){switch(e){case"keyup":return bc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pn=!1;function Pc(e,t){switch(e){case"compositionend":return Sl(t);case"keypress":return t.which!==32?null:(gl=!0,yl);case"textInput":return e=t.data,e===yl&&gl?null:e;default:return null}}function Tc(e,t){if(pn)return e==="compositionend"||!na&&vl(e,t)?(e=cl(),_r=Ki=jt=null,pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hl&&t.locale!=="ko"?null:t.data;default:return null}}var Ic={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ic[e.type]:t==="textarea"}function xl(e,t,n,r){Uo(r),t=Br(t,"onChange"),0<t.length&&(n=new Gi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var $n=null,Yn=null;function Ac(e){zl(e,0)}function Nr(e){var t=gn(e);if(Ao(t))return e}function Dc(e,t){if(e==="change")return t}var kl=!1;if(de){var ra;if(de){var ia="oninput"in document;if(!ia){var El=document.createElement("div");El.setAttribute("oninput","return;"),ia=typeof El.oninput=="function"}ra=ia}else ra=!1;kl=ra&&(!document.documentMode||9<document.documentMode)}function bl(){$n&&($n.detachEvent("onpropertychange",Cl),Yn=$n=null)}function Cl(e){if(e.propertyName==="value"&&Nr(Yn)){var t=[];xl(t,Yn,e,Ri(e)),Vo(Ac,t)}}function jc(e,t,n){e==="focusin"?(bl(),$n=t,Yn=n,$n.attachEvent("onpropertychange",Cl)):e==="focusout"&&bl()}function _c(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nr(Yn)}function Oc(e,t){if(e==="click")return Nr(t)}function Lc(e,t){if(e==="input"||e==="change")return Nr(t)}function Mc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:Mc;function Kn(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!W.call(t,i)||!nt(e[i],t[i]))return!1}return!0}function Pl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tl(e,t){var n=Pl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pl(n)}}function Il(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Il(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Al(){for(var e=window,t=Sr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Sr(e.document)}return t}function aa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Nc(e){var t=Al(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Il(n.ownerDocument.documentElement,n)){if(r!==null&&aa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Tl(n,a);var o=Tl(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Rc=de&&"documentMode"in document&&11>=document.documentMode,fn=null,oa=null,Gn=null,la=!1;function Dl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;la||fn==null||fn!==Sr(r)||(r=fn,"selectionStart"in r&&aa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gn&&Kn(Gn,r)||(Gn=r,r=Br(oa,"onSelect"),0<r.length&&(t=new Gi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=fn)))}function Rr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mn={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionend:Rr("Transition","TransitionEnd")},sa={},jl={};de&&(jl=document.createElement("div").style,"AnimationEvent"in window||(delete mn.animationend.animation,delete mn.animationiteration.animation,delete mn.animationstart.animation),"TransitionEvent"in window||delete mn.transitionend.transition);function Fr(e){if(sa[e])return sa[e];if(!mn[e])return e;var t=mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in jl)return sa[e]=t[n];return e}var _l=Fr("animationend"),Ol=Fr("animationiteration"),Ll=Fr("animationstart"),Ml=Fr("transitionend"),Nl=new Map,Rl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _t(e,t){Nl.set(e,t),Q(t,[e])}for(var ua=0;ua<Rl.length;ua++){var ca=Rl[ua],Fc=ca.toLowerCase(),zc=ca[0].toUpperCase()+ca.slice(1);_t(Fc,"on"+zc)}_t(_l,"onAnimationEnd"),_t(Ol,"onAnimationIteration"),_t(Ll,"onAnimationStart"),_t("dblclick","onDoubleClick"),_t("focusin","onFocus"),_t("focusout","onBlur"),_t(Ml,"onTransitionEnd"),ce("onMouseEnter",["mouseout","mouseover"]),ce("onMouseLeave",["mouseout","mouseover"]),ce("onPointerEnter",["pointerout","pointerover"]),ce("onPointerLeave",["pointerout","pointerover"]),Q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Q("onBeforeInput",["compositionend","keypress","textInput","paste"]),Q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bc=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xn));function Fl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Fu(r,t,void 0,e),e.currentTarget=null}function zl(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,f=l.currentTarget;if(l=l.listener,s!==a&&i.isPropagationStopped())break e;Fl(i,l,f),a=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,f=l.currentTarget,l=l.listener,s!==a&&i.isPropagationStopped())break e;Fl(i,l,f),a=s}}}if(kr)throw e=Ui,kr=!1,Ui=null,e}function $(e,t){var n=t[va];n===void 0&&(n=t[va]=new Set);var r=e+"__bubble";n.has(r)||(Bl(t,e,2,!1),n.add(r))}function da(e,t,n){var r=0;t&&(r|=4),Bl(n,e,r,t)}var zr="_reactListening"+Math.random().toString(36).slice(2);function Zn(e){if(!e[zr]){e[zr]=!0,ge.forEach(function(n){n!=="selectionchange"&&(Bc.has(n)||da(n,!1,e),da(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zr]||(t[zr]=!0,da("selectionchange",!1,t))}}function Bl(e,t,n,r){switch(ul(t)){case 1:var i=ec;break;case 4:i=tc;break;default:i=$i}n=i.bind(null,t,n,e),i=void 0,!Bi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function pa(e,t,n,r,i){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;l!==null;){if(o=$t(l),o===null)return;if(s=o.tag,s===5||s===6){r=a=o;continue e}l=l.parentNode}}r=r.return}Vo(function(){var f=a,g=Ri(n),v=[];e:{var h=Nl.get(e);if(h!==void 0){var x=Gi,b=e;switch(e){case"keypress":if(Or(n)===0)break e;case"keydown":case"keyup":x=yc;break;case"focusin":b="focus",x=ea;break;case"focusout":b="blur",x=ea;break;case"beforeblur":case"afterblur":x=ea;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=pl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=ic;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Sc;break;case _l:case Ol:case Ll:x=lc;break;case Ml:x=xc;break;case"scroll":x=nc;break;case"wheel":x=Ec;break;case"copy":case"cut":case"paste":x=uc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=ml}var C=(t&4)!==0,oe=!C&&e==="scroll",d=C?h!==null?h+"Capture":null:h;C=[];for(var u=f,p;u!==null;){p=u;var S=p.stateNode;if(p.tag===5&&S!==null&&(p=S,d!==null&&(S=Mn(u,d),S!=null&&C.push(er(u,S,p)))),oe)break;u=u.return}0<C.length&&(h=new x(h,b,null,n,g),v.push({event:h,listeners:C}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&n!==Ni&&(b=n.relatedTarget||n.fromElement)&&($t(b)||b[vt]))break e;if((x||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,x?(b=n.relatedTarget||n.toElement,x=f,b=b?$t(b):null,b!==null&&(oe=Qt(b),b!==oe||b.tag!==5&&b.tag!==6)&&(b=null)):(x=null,b=f),x!==b)){if(C=pl,S="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(C=ml,S="onPointerLeave",d="onPointerEnter",u="pointer"),oe=x==null?h:gn(x),p=b==null?h:gn(b),h=new C(S,u+"leave",x,n,g),h.target=oe,h.relatedTarget=p,S=null,$t(g)===f&&(C=new C(d,u+"enter",b,n,g),C.target=p,C.relatedTarget=oe,S=C),oe=S,x&&b)t:{for(C=x,d=b,u=0,p=C;p;p=hn(p))u++;for(p=0,S=d;S;S=hn(S))p++;for(;0<u-p;)C=hn(C),u--;for(;0<p-u;)d=hn(d),p--;for(;u--;){if(C===d||d!==null&&C===d.alternate)break t;C=hn(C),d=hn(d)}C=null}else C=null;x!==null&&Ul(v,h,x,C,!1),b!==null&&oe!==null&&Ul(v,oe,b,C,!0)}}e:{if(h=f?gn(f):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var P=Dc;else if(wl(h))if(kl)P=Lc;else{P=_c;var T=jc}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=Oc);if(P&&(P=P(e,f))){xl(v,P,n,g);break e}T&&T(e,h,f),e==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&ji(h,"number",h.value)}switch(T=f?gn(f):window,e){case"focusin":(wl(T)||T.contentEditable==="true")&&(fn=T,oa=f,Gn=null);break;case"focusout":Gn=oa=fn=null;break;case"mousedown":la=!0;break;case"contextmenu":case"mouseup":case"dragend":la=!1,Dl(v,n,g);break;case"selectionchange":if(Rc)break;case"keydown":case"keyup":Dl(v,n,g)}var I;if(na)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else pn?vl(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(hl&&n.locale!=="ko"&&(pn||D!=="onCompositionStart"?D==="onCompositionEnd"&&pn&&(I=cl()):(jt=g,Ki="value"in jt?jt.value:jt.textContent,pn=!0)),T=Br(f,D),0<T.length&&(D=new fl(D,e,null,n,g),v.push({event:D,listeners:T}),I?D.data=I:(I=Sl(n),I!==null&&(D.data=I)))),(I=Cc?Pc(e,n):Tc(e,n))&&(f=Br(f,"onBeforeInput"),0<f.length&&(g=new fl("onBeforeInput","beforeinput",null,n,g),v.push({event:g,listeners:f}),g.data=I))}zl(v,t)})}function er(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Br(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Mn(e,n),a!=null&&r.unshift(er(e,a,i)),a=Mn(e,t),a!=null&&r.push(er(e,a,i))),e=e.return}return r}function hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ul(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var l=n,s=l.alternate,f=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&f!==null&&(l=f,i?(s=Mn(n,a),s!=null&&o.unshift(er(n,s,l))):i||(s=Mn(n,a),s!=null&&o.push(er(n,s,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Uc=/\r\n?/g,Jc=/\u0000|\uFFFD/g;function Jl(e){return(typeof e=="string"?e:""+e).replace(Uc,`
`).replace(Jc,"")}function Ur(e,t,n){if(t=Jl(t),Jl(e)!==t&&n)throw Error(m(425))}function Jr(){}var fa=null,ma=null;function ha(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ya=typeof setTimeout=="function"?setTimeout:void 0,Wc=typeof clearTimeout=="function"?clearTimeout:void 0,Wl=typeof Promise=="function"?Promise:void 0,Hc=typeof queueMicrotask=="function"?queueMicrotask:typeof Wl<"u"?function(e){return Wl.resolve(null).then(e).catch(Vc)}:ya;function Vc(e){setTimeout(function(){throw e})}function ga(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Hn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Hn(t)}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yn=Math.random().toString(36).slice(2),pt="__reactFiber$"+yn,tr="__reactProps$"+yn,vt="__reactContainer$"+yn,va="__reactEvents$"+yn,qc="__reactListeners$"+yn,Qc="__reactHandles$"+yn;function $t(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hl(e);e!==null;){if(n=e[pt])return n;e=Hl(e)}return t}e=n,n=e.parentNode}return null}function nr(e){return e=e[pt]||e[vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(m(33))}function Wr(e){return e[tr]||null}var Sa=[],vn=-1;function Lt(e){return{current:e}}function Y(e){0>vn||(e.current=Sa[vn],Sa[vn]=null,vn--)}function q(e,t){vn++,Sa[vn]=e.current,e.current=t}var Mt={},we=Lt(Mt),je=Lt(!1),Yt=Mt;function Sn(e,t){var n=e.type.contextTypes;if(!n)return Mt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function _e(e){return e=e.childContextTypes,e!=null}function Hr(){Y(je),Y(we)}function Vl(e,t,n){if(we.current!==Mt)throw Error(m(168));q(we,t),q(je,n)}function ql(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(m(108,V(e)||"Unknown",i));return E({},n,r)}function Vr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Mt,Yt=we.current,q(we,e),q(je,je.current),!0}function Ql(e,t,n){var r=e.stateNode;if(!r)throw Error(m(169));n?(e=ql(e,t,Yt),r.__reactInternalMemoizedMergedChildContext=e,Y(je),Y(we),q(we,e)):Y(je),q(je,n)}var St=null,qr=!1,wa=!1;function $l(e){St===null?St=[e]:St.push(e)}function $c(e){qr=!0,$l(e)}function Nt(){if(!wa&&St!==null){wa=!0;var e=0,t=J;try{var n=St;for(J=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}St=null,qr=!1}catch(i){throw St!==null&&(St=St.slice(e+1)),Ko(Ji,Nt),i}finally{J=t,wa=!1}}return null}var wn=[],xn=0,Qr=null,$r=0,qe=[],Qe=0,Kt=null,wt=1,xt="";function Gt(e,t){wn[xn++]=$r,wn[xn++]=Qr,Qr=e,$r=t}function Yl(e,t,n){qe[Qe++]=wt,qe[Qe++]=xt,qe[Qe++]=Kt,Kt=e;var r=wt;e=xt;var i=32-tt(r)-1;r&=~(1<<i),n+=1;var a=32-tt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,wt=1<<32-tt(t)+i|n<<i|r,xt=a+e}else wt=1<<a|n<<i|r,xt=e}function xa(e){e.return!==null&&(Gt(e,1),Yl(e,1,0))}function ka(e){for(;e===Qr;)Qr=wn[--xn],wn[xn]=null,$r=wn[--xn],wn[xn]=null;for(;e===Kt;)Kt=qe[--Qe],qe[Qe]=null,xt=qe[--Qe],qe[Qe]=null,wt=qe[--Qe],qe[Qe]=null}var Be=null,Ue=null,Z=!1,rt=null;function Kl(e,t){var n=Ge(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Gl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Be=e,Ue=Ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Be=e,Ue=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Kt!==null?{id:wt,overflow:xt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ge(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Be=e,Ue=null,!0):!1;default:return!1}}function Ea(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ba(e){if(Z){var t=Ue;if(t){var n=t;if(!Gl(e,t)){if(Ea(e))throw Error(m(418));t=Ot(n.nextSibling);var r=Be;t&&Gl(e,t)?Kl(r,n):(e.flags=e.flags&-4097|2,Z=!1,Be=e)}}else{if(Ea(e))throw Error(m(418));e.flags=e.flags&-4097|2,Z=!1,Be=e}}}function Xl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Be=e}function Yr(e){if(e!==Be)return!1;if(!Z)return Xl(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ha(e.type,e.memoizedProps)),t&&(t=Ue)){if(Ea(e))throw Zl(),Error(m(418));for(;t;)Kl(e,t),t=Ot(t.nextSibling)}if(Xl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ue=Ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ue=null}}else Ue=Be?Ot(e.stateNode.nextSibling):null;return!0}function Zl(){for(var e=Ue;e;)e=Ot(e.nextSibling)}function kn(){Ue=Be=null,Z=!1}function Ca(e){rt===null?rt=[e]:rt.push(e)}var Yc=Se.ReactCurrentBatchConfig;function rr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(m(309));var r=n.stateNode}if(!r)throw Error(m(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=i.refs;o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(m(284));if(!n._owner)throw Error(m(290,e))}return e}function Kr(e,t){throw e=Object.prototype.toString.call(t),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function es(e){var t=e._init;return t(e._payload)}function ts(e){function t(d,u){if(e){var p=d.deletions;p===null?(d.deletions=[u],d.flags|=16):p.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function i(d,u){return d=Ht(d,u),d.index=0,d.sibling=null,d}function a(d,u,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<u?(d.flags|=2,u):p):(d.flags|=2,u)):(d.flags|=1048576,u)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,u,p,S){return u===null||u.tag!==6?(u=go(p,d.mode,S),u.return=d,u):(u=i(u,p),u.return=d,u)}function s(d,u,p,S){var P=p.type;return P===Ae?g(d,u,p.props.children,S,p.key):u!==null&&(u.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===De&&es(P)===u.type)?(S=i(u,p.props),S.ref=rr(d,u,p),S.return=d,S):(S=wi(p.type,p.key,p.props,null,d.mode,S),S.ref=rr(d,u,p),S.return=d,S)}function f(d,u,p,S){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=vo(p,d.mode,S),u.return=d,u):(u=i(u,p.children||[]),u.return=d,u)}function g(d,u,p,S,P){return u===null||u.tag!==7?(u=on(p,d.mode,S,P),u.return=d,u):(u=i(u,p),u.return=d,u)}function v(d,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=go(""+u,d.mode,p),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Ze:return p=wi(u.type,u.key,u.props,null,d.mode,p),p.ref=rr(d,null,u),p.return=d,p;case Ce:return u=vo(u,d.mode,p),u.return=d,u;case De:var S=u._init;return v(d,S(u._payload),p)}if(_n(u)||A(u))return u=on(u,d.mode,p,null),u.return=d,u;Kr(d,u)}return null}function h(d,u,p,S){var P=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return P!==null?null:l(d,u,""+p,S);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ze:return p.key===P?s(d,u,p,S):null;case Ce:return p.key===P?f(d,u,p,S):null;case De:return P=p._init,h(d,u,P(p._payload),S)}if(_n(p)||A(p))return P!==null?null:g(d,u,p,S,null);Kr(d,p)}return null}function x(d,u,p,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(p)||null,l(u,d,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ze:return d=d.get(S.key===null?p:S.key)||null,s(u,d,S,P);case Ce:return d=d.get(S.key===null?p:S.key)||null,f(u,d,S,P);case De:var T=S._init;return x(d,u,p,T(S._payload),P)}if(_n(S)||A(S))return d=d.get(p)||null,g(u,d,S,P,null);Kr(u,S)}return null}function b(d,u,p,S){for(var P=null,T=null,I=u,D=u=0,me=null;I!==null&&D<p.length;D++){I.index>D?(me=I,I=null):me=I.sibling;var z=h(d,I,p[D],S);if(z===null){I===null&&(I=me);break}e&&I&&z.alternate===null&&t(d,I),u=a(z,u,D),T===null?P=z:T.sibling=z,T=z,I=me}if(D===p.length)return n(d,I),Z&&Gt(d,D),P;if(I===null){for(;D<p.length;D++)I=v(d,p[D],S),I!==null&&(u=a(I,u,D),T===null?P=I:T.sibling=I,T=I);return Z&&Gt(d,D),P}for(I=r(d,I);D<p.length;D++)me=x(I,d,D,p[D],S),me!==null&&(e&&me.alternate!==null&&I.delete(me.key===null?D:me.key),u=a(me,u,D),T===null?P=me:T.sibling=me,T=me);return e&&I.forEach(function(Vt){return t(d,Vt)}),Z&&Gt(d,D),P}function C(d,u,p,S){var P=A(p);if(typeof P!="function")throw Error(m(150));if(p=P.call(p),p==null)throw Error(m(151));for(var T=P=null,I=u,D=u=0,me=null,z=p.next();I!==null&&!z.done;D++,z=p.next()){I.index>D?(me=I,I=null):me=I.sibling;var Vt=h(d,I,z.value,S);if(Vt===null){I===null&&(I=me);break}e&&I&&Vt.alternate===null&&t(d,I),u=a(Vt,u,D),T===null?P=Vt:T.sibling=Vt,T=Vt,I=me}if(z.done)return n(d,I),Z&&Gt(d,D),P;if(I===null){for(;!z.done;D++,z=p.next())z=v(d,z.value,S),z!==null&&(u=a(z,u,D),T===null?P=z:T.sibling=z,T=z);return Z&&Gt(d,D),P}for(I=r(d,I);!z.done;D++,z=p.next())z=x(I,d,D,z.value,S),z!==null&&(e&&z.alternate!==null&&I.delete(z.key===null?D:z.key),u=a(z,u,D),T===null?P=z:T.sibling=z,T=z);return e&&I.forEach(function(Id){return t(d,Id)}),Z&&Gt(d,D),P}function oe(d,u,p,S){if(typeof p=="object"&&p!==null&&p.type===Ae&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Ze:e:{for(var P=p.key,T=u;T!==null;){if(T.key===P){if(P=p.type,P===Ae){if(T.tag===7){n(d,T.sibling),u=i(T,p.props.children),u.return=d,d=u;break e}}else if(T.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===De&&es(P)===T.type){n(d,T.sibling),u=i(T,p.props),u.ref=rr(d,T,p),u.return=d,d=u;break e}n(d,T);break}else t(d,T);T=T.sibling}p.type===Ae?(u=on(p.props.children,d.mode,S,p.key),u.return=d,d=u):(S=wi(p.type,p.key,p.props,null,d.mode,S),S.ref=rr(d,u,p),S.return=d,d=S)}return o(d);case Ce:e:{for(T=p.key;u!==null;){if(u.key===T)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(d,u.sibling),u=i(u,p.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=vo(p,d.mode,S),u.return=d,d=u}return o(d);case De:return T=p._init,oe(d,u,T(p._payload),S)}if(_n(p))return b(d,u,p,S);if(A(p))return C(d,u,p,S);Kr(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(d,u.sibling),u=i(u,p),u.return=d,d=u):(n(d,u),u=go(p,d.mode,S),u.return=d,d=u),o(d)):n(d,u)}return oe}var En=ts(!0),ns=ts(!1),Gr=Lt(null),Xr=null,bn=null,Pa=null;function Ta(){Pa=bn=Xr=null}function Ia(e){var t=Gr.current;Y(Gr),e._currentValue=t}function Aa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Cn(e,t){Xr=e,Pa=bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Oe=!0),e.firstContext=null)}function $e(e){var t=e._currentValue;if(Pa!==e)if(e={context:e,memoizedValue:t,next:null},bn===null){if(Xr===null)throw Error(m(308));bn=e,Xr.dependencies={lanes:0,firstContext:e}}else bn=bn.next=e;return t}var Xt=null;function Da(e){Xt===null?Xt=[e]:Xt.push(e)}function rs(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Da(t)):(n.next=i.next,i.next=n),t.interleaved=n,kt(e,r)}function kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Rt=!1;function ja(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function is(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(N&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,kt(e,n)}return i=r.interleaved,i===null?(t.next=t,Da(r)):(t.next=i.next,i.next=t),r.interleaved=t,kt(e,n)}function Zr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vi(e,n)}}function as(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ei(e,t,n,r){var i=e.updateQueue;Rt=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,f=s.next;s.next=null,o===null?a=f:o.next=f,o=s;var g=e.alternate;g!==null&&(g=g.updateQueue,l=g.lastBaseUpdate,l!==o&&(l===null?g.firstBaseUpdate=f:l.next=f,g.lastBaseUpdate=s))}if(a!==null){var v=i.baseState;o=0,g=f=s=null,l=a;do{var h=l.lane,x=l.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=e,C=l;switch(h=t,x=n,C.tag){case 1:if(b=C.payload,typeof b=="function"){v=b.call(x,v,h);break e}v=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=C.payload,h=typeof b=="function"?b.call(x,v,h):b,h==null)break e;v=E({},v,h);break e;case 2:Rt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else x={eventTime:x,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},g===null?(f=g=x,s=v):g=g.next=x,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(g===null&&(s=v),i.baseState=s,i.firstBaseUpdate=f,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);tn|=o,e.lanes=o,e.memoizedState=v}}function os(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(m(191,i));i.call(r)}}}var ir={},ft=Lt(ir),ar=Lt(ir),or=Lt(ir);function Zt(e){if(e===ir)throw Error(m(174));return e}function _a(e,t){switch(q(or,t),q(ar,e),q(ft,ir),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Oi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Oi(t,e)}Y(ft),q(ft,t)}function Pn(){Y(ft),Y(ar),Y(or)}function ls(e){Zt(or.current);var t=Zt(ft.current),n=Oi(t,e.type);t!==n&&(q(ar,e),q(ft,n))}function Oa(e){ar.current===e&&(Y(ft),Y(ar))}var te=Lt(0);function ti(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var La=[];function Ma(){for(var e=0;e<La.length;e++)La[e]._workInProgressVersionPrimary=null;La.length=0}var ni=Se.ReactCurrentDispatcher,Na=Se.ReactCurrentBatchConfig,en=0,ne=null,se=null,pe=null,ri=!1,lr=!1,sr=0,Kc=0;function xe(){throw Error(m(321))}function Ra(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function Fa(e,t,n,r,i,a){if(en=a,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ni.current=e===null||e.memoizedState===null?ed:td,e=n(r,i),lr){a=0;do{if(lr=!1,sr=0,25<=a)throw Error(m(301));a+=1,pe=se=null,t.updateQueue=null,ni.current=nd,e=n(r,i)}while(lr)}if(ni.current=oi,t=se!==null&&se.next!==null,en=0,pe=se=ne=null,ri=!1,t)throw Error(m(300));return e}function za(){var e=sr!==0;return sr=0,e}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?ne.memoizedState=pe=e:pe=pe.next=e,pe}function Ye(){if(se===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=pe===null?ne.memoizedState:pe.next;if(t!==null)pe=t,se=e;else{if(e===null)throw Error(m(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},pe===null?ne.memoizedState=pe=e:pe=pe.next=e}return pe}function ur(e,t){return typeof t=="function"?t(e):t}function Ba(e){var t=Ye(),n=t.queue;if(n===null)throw Error(m(311));n.lastRenderedReducer=e;var r=se,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var l=o=null,s=null,f=a;do{var g=f.lane;if((en&g)===g)s!==null&&(s=s.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var v={lane:g,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};s===null?(l=s=v,o=r):s=s.next=v,ne.lanes|=g,tn|=g}f=f.next}while(f!==null&&f!==a);s===null?o=r:s.next=l,nt(r,t.memoizedState)||(Oe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,ne.lanes|=a,tn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ua(e){var t=Ye(),n=t.queue;if(n===null)throw Error(m(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);nt(a,t.memoizedState)||(Oe=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function ss(){}function us(e,t){var n=ne,r=Ye(),i=t(),a=!nt(r.memoizedState,i);if(a&&(r.memoizedState=i,Oe=!0),r=r.queue,Ja(ps.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,cr(9,ds.bind(null,n,r,i,t),void 0,null),fe===null)throw Error(m(349));(en&30)!==0||cs(n,t,i)}return i}function cs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ds(e,t,n,r){t.value=n,t.getSnapshot=r,fs(t)&&ms(e)}function ps(e,t,n){return n(function(){fs(t)&&ms(e)})}function fs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function ms(e){var t=kt(e,1);t!==null&&lt(t,e,1,-1)}function hs(e){var t=mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ur,lastRenderedState:e},t.queue=e,e=e.dispatch=Zc.bind(null,ne,e),[t.memoizedState,e]}function cr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ys(){return Ye().memoizedState}function ii(e,t,n,r){var i=mt();ne.flags|=e,i.memoizedState=cr(1|t,n,void 0,r===void 0?null:r)}function ai(e,t,n,r){var i=Ye();r=r===void 0?null:r;var a=void 0;if(se!==null){var o=se.memoizedState;if(a=o.destroy,r!==null&&Ra(r,o.deps)){i.memoizedState=cr(t,n,a,r);return}}ne.flags|=e,i.memoizedState=cr(1|t,n,a,r)}function gs(e,t){return ii(8390656,8,e,t)}function Ja(e,t){return ai(2048,8,e,t)}function vs(e,t){return ai(4,2,e,t)}function Ss(e,t){return ai(4,4,e,t)}function ws(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xs(e,t,n){return n=n!=null?n.concat([e]):null,ai(4,4,ws.bind(null,t,e),n)}function Wa(){}function ks(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ra(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Es(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ra(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function bs(e,t,n){return(en&21)===0?(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=n):(nt(n,t)||(n=el(),ne.lanes|=n,tn|=n,e.baseState=!0),t)}function Gc(e,t){var n=J;J=n!==0&&4>n?n:4,e(!0);var r=Na.transition;Na.transition={};try{e(!1),t()}finally{J=n,Na.transition=r}}function Cs(){return Ye().memoizedState}function Xc(e,t,n){var r=Jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ps(e))Ts(t,n);else if(n=rs(e,t,n,r),n!==null){var i=Te();lt(n,e,r,i),Is(n,t,r)}}function Zc(e,t,n){var r=Jt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ps(e))Ts(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,n);if(i.hasEagerState=!0,i.eagerState=l,nt(l,o)){var s=t.interleaved;s===null?(i.next=i,Da(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=rs(e,t,i,r),n!==null&&(i=Te(),lt(n,e,r,i),Is(n,t,r))}}function Ps(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function Ts(e,t){lr=ri=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Is(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vi(e,n)}}var oi={readContext:$e,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},ed={readContext:$e,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:gs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ii(4194308,4,ws.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ii(4194308,4,e,t)},useInsertionEffect:function(e,t){return ii(4,2,e,t)},useMemo:function(e,t){var n=mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Xc.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:hs,useDebugValue:Wa,useDeferredValue:function(e){return mt().memoizedState=e},useTransition:function(){var e=hs(!1),t=e[0];return e=Gc.bind(null,e[1]),mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,i=mt();if(Z){if(n===void 0)throw Error(m(407));n=n()}else{if(n=t(),fe===null)throw Error(m(349));(en&30)!==0||cs(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,gs(ps.bind(null,r,a,e),[e]),r.flags|=2048,cr(9,ds.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=mt(),t=fe.identifierPrefix;if(Z){var n=xt,r=wt;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=sr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Kc++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},td={readContext:$e,useCallback:ks,useContext:$e,useEffect:Ja,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:Ss,useMemo:Es,useReducer:Ba,useRef:ys,useState:function(){return Ba(ur)},useDebugValue:Wa,useDeferredValue:function(e){var t=Ye();return bs(t,se.memoizedState,e)},useTransition:function(){var e=Ba(ur)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:ss,useSyncExternalStore:us,useId:Cs,unstable_isNewReconciler:!1},nd={readContext:$e,useCallback:ks,useContext:$e,useEffect:Ja,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:Ss,useMemo:Es,useReducer:Ua,useRef:ys,useState:function(){return Ua(ur)},useDebugValue:Wa,useDeferredValue:function(e){var t=Ye();return se===null?t.memoizedState=e:bs(t,se.memoizedState,e)},useTransition:function(){var e=Ua(ur)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:ss,useSyncExternalStore:us,useId:Cs,unstable_isNewReconciler:!1};function it(e,t){if(e&&e.defaultProps){t=E({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ha(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:E({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var li={isMounted:function(e){return(e=e._reactInternals)?Qt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Te(),i=Jt(e),a=Et(r,i);a.payload=t,n!=null&&(a.callback=n),t=Ft(e,a,i),t!==null&&(lt(t,e,i,r),Zr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Te(),i=Jt(e),a=Et(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Ft(e,a,i),t!==null&&(lt(t,e,i,r),Zr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Te(),r=Jt(e),i=Et(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ft(e,i,r),t!==null&&(lt(t,e,r,n),Zr(t,e,r))}};function As(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Kn(n,r)||!Kn(i,a):!0}function Ds(e,t,n){var r=!1,i=Mt,a=t.contextType;return typeof a=="object"&&a!==null?a=$e(a):(i=_e(t)?Yt:we.current,r=t.contextTypes,a=(r=r!=null)?Sn(e,i):Mt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=li,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function js(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&li.enqueueReplaceState(t,t.state,null)}function Va(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ja(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=$e(a):(a=_e(t)?Yt:we.current,i.context=Sn(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Ha(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&li.enqueueReplaceState(i,i.state,null),ei(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Tn(e,t){try{var n="",r=t;do n+=R(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function qa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Qa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var rd=typeof WeakMap=="function"?WeakMap:Map;function _s(e,t,n){n=Et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){mi||(mi=!0,so=r),Qa(e,t)},n}function Os(e,t,n){n=Et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Qa(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Qa(e,t),typeof r!="function"&&(Bt===null?Bt=new Set([this]):Bt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ls(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new rd;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=gd.bind(null,e,t,n),t.then(e,e))}function Ms(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ns(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Et(-1,1),t.tag=2,Ft(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var id=Se.ReactCurrentOwner,Oe=!1;function Pe(e,t,n,r){t.child=e===null?ns(t,null,n,r):En(t,e.child,n,r)}function Rs(e,t,n,r,i){n=n.render;var a=t.ref;return Cn(t,i),r=Fa(e,t,n,r,a,i),n=za(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,bt(e,t,i)):(Z&&n&&xa(t),t.flags|=1,Pe(e,t,r,i),t.child)}function Fs(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!yo(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,zs(e,t,a,r,i)):(e=wi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Kn,n(o,r)&&e.ref===t.ref)return bt(e,t,i)}return t.flags|=1,e=Ht(a,r),e.ref=t.ref,e.return=t,t.child=e}function zs(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Kn(a,r)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=r=a,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Oe=!0);else return t.lanes=e.lanes,bt(e,t,i)}return $a(e,t,n,r,i)}function Bs(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(An,Je),Je|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(An,Je),Je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,q(An,Je),Je|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,q(An,Je),Je|=r;return Pe(e,t,i,n),t.child}function Us(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function $a(e,t,n,r,i){var a=_e(n)?Yt:we.current;return a=Sn(t,a),Cn(t,i),n=Fa(e,t,n,r,a,i),r=za(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,bt(e,t,i)):(Z&&r&&xa(t),t.flags|=1,Pe(e,t,n,i),t.child)}function Js(e,t,n,r,i){if(_e(n)){var a=!0;Vr(t)}else a=!1;if(Cn(t,i),t.stateNode===null)ui(e,t),Ds(t,n,r),Va(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,f=n.contextType;typeof f=="object"&&f!==null?f=$e(f):(f=_e(n)?Yt:we.current,f=Sn(t,f));var g=n.getDerivedStateFromProps,v=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";v||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==f)&&js(t,o,r,f),Rt=!1;var h=t.memoizedState;o.state=h,ei(t,r,o,i),s=t.memoizedState,l!==r||h!==s||je.current||Rt?(typeof g=="function"&&(Ha(t,n,g,r),s=t.memoizedState),(l=Rt||As(t,n,l,r,h,s,f))?(v||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=f,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,is(e,t),l=t.memoizedProps,f=t.type===t.elementType?l:it(t.type,l),o.props=f,v=t.pendingProps,h=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=$e(s):(s=_e(n)?Yt:we.current,s=Sn(t,s));var x=n.getDerivedStateFromProps;(g=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==v||h!==s)&&js(t,o,r,s),Rt=!1,h=t.memoizedState,o.state=h,ei(t,r,o,i);var b=t.memoizedState;l!==v||h!==b||je.current||Rt?(typeof x=="function"&&(Ha(t,n,x,r),b=t.memoizedState),(f=Rt||As(t,n,f,r,h,b,s)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,b,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,b,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),o.props=r,o.state=b,o.context=s,r=f):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ya(e,t,n,r,a,i)}function Ya(e,t,n,r,i,a){Us(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Ql(t,n,!1),bt(e,t,a);r=t.stateNode,id.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=En(t,e.child,null,a),t.child=En(t,null,l,a)):Pe(e,t,l,a),t.memoizedState=r.state,i&&Ql(t,n,!0),t.child}function Ws(e){var t=e.stateNode;t.pendingContext?Vl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vl(e,t.context,!1),_a(e,t.containerInfo)}function Hs(e,t,n,r,i){return kn(),Ca(i),t.flags|=256,Pe(e,t,n,r),t.child}var Ka={dehydrated:null,treeContext:null,retryLane:0};function Ga(e){return{baseLanes:e,cachePool:null,transitions:null}}function Vs(e,t,n){var r=t.pendingProps,i=te.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),q(te,i&1),e===null)return ba(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=o):a=xi(o,r,0,null),e=on(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ga(n),t.memoizedState=Ka,e):Xa(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ad(e,t,o,r,l,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Ht(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=Ht(l,a):(a=on(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Ga(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Ka,r}return a=e.child,e=a.sibling,r=Ht(a,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xa(e,t){return t=xi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function si(e,t,n,r){return r!==null&&Ca(r),En(t,e.child,null,n),e=Xa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ad(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=qa(Error(m(422))),si(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=xi({mode:"visible",children:r.children},i,0,null),a=on(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&En(t,e.child,null,o),t.child.memoizedState=Ga(o),t.memoizedState=Ka,a);if((t.mode&1)===0)return si(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(m(419)),r=qa(a,r,void 0),si(e,t,o,r)}if(l=(o&e.childLanes)!==0,Oe||l){if(r=fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,kt(e,i),lt(r,e,i,-1))}return ho(),r=qa(Error(m(421))),si(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=vd.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Ue=Ot(i.nextSibling),Be=t,Z=!0,rt=null,e!==null&&(qe[Qe++]=wt,qe[Qe++]=xt,qe[Qe++]=Kt,wt=e.id,xt=e.overflow,Kt=t),t=Xa(t,r.children),t.flags|=4096,t)}function qs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Aa(e.return,t,n)}function Za(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Qs(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Pe(e,t,r.children,n),r=te.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qs(e,n,t);else if(e.tag===19)qs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(te,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ti(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Za(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ti(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Za(t,!0,n,null,a);break;case"together":Za(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ui(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(m(153));if(t.child!==null){for(e=t.child,n=Ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function od(e,t,n){switch(t.tag){case 3:Ws(t),kn();break;case 5:ls(t);break;case 1:_e(t.type)&&Vr(t);break;case 4:_a(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;q(Gr,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(q(te,te.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Vs(e,t,n):(q(te,te.current&1),e=bt(e,t,n),e!==null?e.sibling:null);q(te,te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Qs(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),q(te,te.current),r)break;return null;case 22:case 23:return t.lanes=0,Bs(e,t,n)}return bt(e,t,n)}var $s,eo,Ys,Ks;$s=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},eo=function(){},Ys=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Zt(ft.current);var a=null;switch(n){case"input":i=Ai(e,i),r=Ai(e,r),a=[];break;case"select":i=E({},i,{value:void 0}),r=E({},r,{value:void 0}),a=[];break;case"textarea":i=_i(e,i),r=_i(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Jr)}Li(n,r);var o;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var l=i[f];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(_.hasOwnProperty(f)?a||(a=[]):(a=a||[]).push(f,null));for(f in r){var s=r[f];if(l=i!=null?i[f]:void 0,r.hasOwnProperty(f)&&s!==l&&(s!=null||l!=null))if(f==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(a||(a=[]),a.push(f,n)),n=s;else f==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(f,s)):f==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(f,""+s):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(_.hasOwnProperty(f)?(s!=null&&f==="onScroll"&&$("scroll",e),a||l===s||(a=[])):(a=a||[]).push(f,s))}n&&(a=a||[]).push("style",n);var f=a;(t.updateQueue=f)&&(t.flags|=4)}},Ks=function(e,t,n,r){n!==r&&(t.flags|=4)};function dr(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ld(e,t,n){var r=t.pendingProps;switch(ka(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(t),null;case 1:return _e(t.type)&&Hr(),ke(t),null;case 3:return r=t.stateNode,Pn(),Y(je),Y(we),Ma(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Yr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,rt!==null&&(po(rt),rt=null))),eo(e,t),ke(t),null;case 5:Oa(t);var i=Zt(or.current);if(n=t.type,e!==null&&t.stateNode!=null)Ys(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(m(166));return ke(t),null}if(e=Zt(ft.current),Yr(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[pt]=t,r[tr]=a,e=(t.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(i=0;i<Xn.length;i++)$(Xn[i],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":Do(r,a),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},$("invalid",r);break;case"textarea":Oo(r,a),$("invalid",r)}Li(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&Ur(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Ur(r.textContent,l,e),i=["children",""+l]):_.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&$("scroll",r)}switch(n){case"input":vr(r),_o(r,a,!0);break;case"textarea":vr(r),Mo(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Jr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=No(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[pt]=t,e[tr]=r,$s(e,t,!1,!1),t.stateNode=e;e:{switch(o=Mi(n,r),n){case"dialog":$("cancel",e),$("close",e),i=r;break;case"iframe":case"object":case"embed":$("load",e),i=r;break;case"video":case"audio":for(i=0;i<Xn.length;i++)$(Xn[i],e);i=r;break;case"source":$("error",e),i=r;break;case"img":case"image":case"link":$("error",e),$("load",e),i=r;break;case"details":$("toggle",e),i=r;break;case"input":Do(e,r),i=Ai(e,r),$("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=E({},r,{value:void 0}),$("invalid",e);break;case"textarea":Oo(e,r),i=_i(e,r),$("invalid",e);break;default:i=r}Li(n,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?zo(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Ro(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&On(e,s):typeof s=="number"&&On(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(_.hasOwnProperty(a)?s!=null&&a==="onScroll"&&$("scroll",e):s!=null&&Xe(e,a,s,o))}switch(n){case"input":vr(e),_o(e,r,!1);break;case"textarea":vr(e),Mo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+U(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?ln(e,!!r.multiple,a,!1):r.defaultValue!=null&&ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ke(t),null;case 6:if(e&&t.stateNode!=null)Ks(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(m(166));if(n=Zt(or.current),Zt(ft.current),Yr(t)){if(r=t.stateNode,n=t.memoizedProps,r[pt]=t,(a=r.nodeValue!==n)&&(e=Be,e!==null))switch(e.tag){case 3:Ur(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ur(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=t,t.stateNode=r}return ke(t),null;case 13:if(Y(te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Ue!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Zl(),kn(),t.flags|=98560,a=!1;else if(a=Yr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(m(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(m(317));a[pt]=t}else kn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ke(t),a=!1}else rt!==null&&(po(rt),rt=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(te.current&1)!==0?ue===0&&(ue=3):ho())),t.updateQueue!==null&&(t.flags|=4),ke(t),null);case 4:return Pn(),eo(e,t),e===null&&Zn(t.stateNode.containerInfo),ke(t),null;case 10:return Ia(t.type._context),ke(t),null;case 17:return _e(t.type)&&Hr(),ke(t),null;case 19:if(Y(te),a=t.memoizedState,a===null)return ke(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)dr(a,!1);else{if(ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=ti(e),o!==null){for(t.flags|=128,dr(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return q(te,te.current&1|2),t.child}e=e.sibling}a.tail!==null&&ae()>Dn&&(t.flags|=128,r=!0,dr(a,!1),t.lanes=4194304)}else{if(!r)if(e=ti(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),dr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!Z)return ke(t),null}else 2*ae()-a.renderingStartTime>Dn&&n!==1073741824&&(t.flags|=128,r=!0,dr(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ae(),t.sibling=null,n=te.current,q(te,r?n&1|2:n&1),t):(ke(t),null);case 22:case 23:return mo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Je&1073741824)!==0&&(ke(t),t.subtreeFlags&6&&(t.flags|=8192)):ke(t),null;case 24:return null;case 25:return null}throw Error(m(156,t.tag))}function sd(e,t){switch(ka(t),t.tag){case 1:return _e(t.type)&&Hr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pn(),Y(je),Y(we),Ma(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Oa(t),null;case 13:if(Y(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(m(340));kn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(te),null;case 4:return Pn(),null;case 10:return Ia(t.type._context),null;case 22:case 23:return mo(),null;case 24:return null;default:return null}}var ci=!1,Ee=!1,ud=typeof WeakSet=="function"?WeakSet:Set,k=null;function In(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(e,t,r)}else n.current=null}function to(e,t,n){try{n()}catch(r){ie(e,t,r)}}var Gs=!1;function cd(e,t){if(fa=Dr,e=Al(),aa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,l=-1,s=-1,f=0,g=0,v=e,h=null;t:for(;;){for(var x;v!==n||i!==0&&v.nodeType!==3||(l=o+i),v!==a||r!==0&&v.nodeType!==3||(s=o+r),v.nodeType===3&&(o+=v.nodeValue.length),(x=v.firstChild)!==null;)h=v,v=x;for(;;){if(v===e)break t;if(h===n&&++f===i&&(l=o),h===a&&++g===r&&(s=o),(x=v.nextSibling)!==null)break;v=h,h=v.parentNode}v=x}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ma={focusedElem:e,selectionRange:n},Dr=!1,k=t;k!==null;)if(t=k,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,k=e;else for(;k!==null;){t=k;try{var b=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var C=b.memoizedProps,oe=b.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?C:it(t.type,C),oe);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(m(163))}}catch(S){ie(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,k=e;break}k=t.return}return b=Gs,Gs=!1,b}function pr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&to(t,n,a)}i=i.next}while(i!==r)}}function di(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function no(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Xs(e){var t=e.alternate;t!==null&&(e.alternate=null,Xs(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[tr],delete t[va],delete t[qc],delete t[Qc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Zs(e){return e.tag===5||e.tag===3||e.tag===4}function eu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ro(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Jr));else if(r!==4&&(e=e.child,e!==null))for(ro(e,t,n),e=e.sibling;e!==null;)ro(e,t,n),e=e.sibling}function io(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(io(e,t,n),e=e.sibling;e!==null;)io(e,t,n),e=e.sibling}var he=null,at=!1;function zt(e,t,n){for(n=n.child;n!==null;)tu(e,t,n),n=n.sibling}function tu(e,t,n){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(br,n)}catch{}switch(n.tag){case 5:Ee||In(n,t);case 6:var r=he,i=at;he=null,zt(e,t,n),he=r,at=i,he!==null&&(at?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(at?(e=he,n=n.stateNode,e.nodeType===8?ga(e.parentNode,n):e.nodeType===1&&ga(e,n),Hn(e)):ga(he,n.stateNode));break;case 4:r=he,i=at,he=n.stateNode.containerInfo,at=!0,zt(e,t,n),he=r,at=i;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&((a&2)!==0||(a&4)!==0)&&to(n,t,o),i=i.next}while(i!==r)}zt(e,t,n);break;case 1:if(!Ee&&(In(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ie(n,t,l)}zt(e,t,n);break;case 21:zt(e,t,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,zt(e,t,n),Ee=r):zt(e,t,n);break;default:zt(e,t,n)}}function nu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ud),t.forEach(function(r){var i=Sd.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:he=l.stateNode,at=!1;break e;case 3:he=l.stateNode.containerInfo,at=!0;break e;case 4:he=l.stateNode.containerInfo,at=!0;break e}l=l.return}if(he===null)throw Error(m(160));tu(a,o,i),he=null,at=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(f){ie(i,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ru(t,e),t=t.sibling}function ru(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ot(t,e),ht(e),r&4){try{pr(3,e,e.return),di(3,e)}catch(C){ie(e,e.return,C)}try{pr(5,e,e.return)}catch(C){ie(e,e.return,C)}}break;case 1:ot(t,e),ht(e),r&512&&n!==null&&In(n,n.return);break;case 5:if(ot(t,e),ht(e),r&512&&n!==null&&In(n,n.return),e.flags&32){var i=e.stateNode;try{On(i,"")}catch(C){ie(e,e.return,C)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&jo(i,a),Mi(l,o);var f=Mi(l,a);for(o=0;o<s.length;o+=2){var g=s[o],v=s[o+1];g==="style"?zo(i,v):g==="dangerouslySetInnerHTML"?Ro(i,v):g==="children"?On(i,v):Xe(i,g,v,f)}switch(l){case"input":Di(i,a);break;case"textarea":Lo(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var x=a.value;x!=null?ln(i,!!a.multiple,x,!1):h!==!!a.multiple&&(a.defaultValue!=null?ln(i,!!a.multiple,a.defaultValue,!0):ln(i,!!a.multiple,a.multiple?[]:"",!1))}i[tr]=a}catch(C){ie(e,e.return,C)}}break;case 6:if(ot(t,e),ht(e),r&4){if(e.stateNode===null)throw Error(m(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(C){ie(e,e.return,C)}}break;case 3:if(ot(t,e),ht(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hn(t.containerInfo)}catch(C){ie(e,e.return,C)}break;case 4:ot(t,e),ht(e);break;case 13:ot(t,e),ht(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(lo=ae())),r&4&&nu(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(Ee=(f=Ee)||g,ot(t,e),Ee=f):ot(t,e),ht(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!g&&(e.mode&1)!==0)for(k=e,g=e.child;g!==null;){for(v=k=g;k!==null;){switch(h=k,x=h.child,h.tag){case 0:case 11:case 14:case 15:pr(4,h,h.return);break;case 1:In(h,h.return);var b=h.stateNode;if(typeof b.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(C){ie(r,n,C)}}break;case 5:In(h,h.return);break;case 22:if(h.memoizedState!==null){ou(v);continue}}x!==null?(x.return=h,k=x):ou(v)}g=g.sibling}e:for(g=null,v=e;;){if(v.tag===5){if(g===null){g=v;try{i=v.stateNode,f?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=v.stateNode,s=v.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Fo("display",o))}catch(C){ie(e,e.return,C)}}}else if(v.tag===6){if(g===null)try{v.stateNode.nodeValue=f?"":v.memoizedProps}catch(C){ie(e,e.return,C)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;g===v&&(g=null),v=v.return}g===v&&(g=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:ot(t,e),ht(e),r&4&&nu(e);break;case 21:break;default:ot(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Zs(n)){var r=n;break e}n=n.return}throw Error(m(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(On(i,""),r.flags&=-33);var a=eu(e);io(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=eu(e);ro(e,l,o);break;default:throw Error(m(161))}}catch(s){ie(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dd(e,t,n){k=e,iu(e)}function iu(e,t,n){for(var r=(e.mode&1)!==0;k!==null;){var i=k,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ci;if(!o){var l=i.alternate,s=l!==null&&l.memoizedState!==null||Ee;l=ci;var f=Ee;if(ci=o,(Ee=s)&&!f)for(k=i;k!==null;)o=k,s=o.child,o.tag===22&&o.memoizedState!==null?lu(i):s!==null?(s.return=o,k=s):lu(i);for(;a!==null;)k=a,iu(a),a=a.sibling;k=i,ci=l,Ee=f}au(e)}else(i.subtreeFlags&8772)!==0&&a!==null?(a.return=i,k=a):au(e)}}function au(e){for(;k!==null;){var t=k;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ee||di(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:it(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&os(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}os(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var g=f.memoizedState;if(g!==null){var v=g.dehydrated;v!==null&&Hn(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(m(163))}Ee||t.flags&512&&no(t)}catch(h){ie(t,t.return,h)}}if(t===e){k=null;break}if(n=t.sibling,n!==null){n.return=t.return,k=n;break}k=t.return}}function ou(e){for(;k!==null;){var t=k;if(t===e){k=null;break}var n=t.sibling;if(n!==null){n.return=t.return,k=n;break}k=t.return}}function lu(e){for(;k!==null;){var t=k;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{di(4,t)}catch(s){ie(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){ie(t,i,s)}}var a=t.return;try{no(t)}catch(s){ie(t,a,s)}break;case 5:var o=t.return;try{no(t)}catch(s){ie(t,o,s)}}}catch(s){ie(t,t.return,s)}if(t===e){k=null;break}var l=t.sibling;if(l!==null){l.return=t.return,k=l;break}k=t.return}}var pd=Math.ceil,pi=Se.ReactCurrentDispatcher,ao=Se.ReactCurrentOwner,Ke=Se.ReactCurrentBatchConfig,N=0,fe=null,le=null,ye=0,Je=0,An=Lt(0),ue=0,fr=null,tn=0,fi=0,oo=0,mr=null,Le=null,lo=0,Dn=1/0,Ct=null,mi=!1,so=null,Bt=null,hi=!1,Ut=null,yi=0,hr=0,uo=null,gi=-1,vi=0;function Te(){return(N&6)!==0?ae():gi!==-1?gi:gi=ae()}function Jt(e){return(e.mode&1)===0?1:(N&2)!==0&&ye!==0?ye&-ye:Yc.transition!==null?(vi===0&&(vi=el()),vi):(e=J,e!==0||(e=window.event,e=e===void 0?16:ul(e.type)),e)}function lt(e,t,n,r){if(50<hr)throw hr=0,uo=null,Error(m(185));zn(e,n,r),((N&2)===0||e!==fe)&&(e===fe&&((N&2)===0&&(fi|=n),ue===4&&Wt(e,ye)),Me(e,r),n===1&&N===0&&(t.mode&1)===0&&(Dn=ae()+500,qr&&Nt()))}function Me(e,t){var n=e.callbackNode;Yu(e,t);var r=Tr(e,e===fe?ye:0);if(r===0)n!==null&&Go(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Go(n),t===1)e.tag===0?$c(uu.bind(null,e)):$l(uu.bind(null,e)),Hc(function(){(N&6)===0&&Nt()}),n=null;else{switch(tl(r)){case 1:n=Ji;break;case 4:n=Xo;break;case 16:n=Er;break;case 536870912:n=Zo;break;default:n=Er}n=gu(n,su.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function su(e,t){if(gi=-1,vi=0,(N&6)!==0)throw Error(m(327));var n=e.callbackNode;if(jn()&&e.callbackNode!==n)return null;var r=Tr(e,e===fe?ye:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Si(e,r);else{t=r;var i=N;N|=2;var a=du();(fe!==e||ye!==t)&&(Ct=null,Dn=ae()+500,rn(e,t));do try{hd();break}catch(l){cu(e,l)}while(!0);Ta(),pi.current=a,N=i,le!==null?t=0:(fe=null,ye=0,t=ue)}if(t!==0){if(t===2&&(i=Wi(e),i!==0&&(r=i,t=co(e,i))),t===1)throw n=fr,rn(e,0),Wt(e,r),Me(e,ae()),n;if(t===6)Wt(e,r);else{if(i=e.current.alternate,(r&30)===0&&!fd(i)&&(t=Si(e,r),t===2&&(a=Wi(e),a!==0&&(r=a,t=co(e,a))),t===1))throw n=fr,rn(e,0),Wt(e,r),Me(e,ae()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(m(345));case 2:an(e,Le,Ct);break;case 3:if(Wt(e,r),(r&130023424)===r&&(t=lo+500-ae(),10<t)){if(Tr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Te(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ya(an.bind(null,e,Le,Ct),t);break}an(e,Le,Ct);break;case 4:if(Wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-tt(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pd(r/1960))-r,10<r){e.timeoutHandle=ya(an.bind(null,e,Le,Ct),r);break}an(e,Le,Ct);break;case 5:an(e,Le,Ct);break;default:throw Error(m(329))}}}return Me(e,ae()),e.callbackNode===n?su.bind(null,e):null}function co(e,t){var n=mr;return e.current.memoizedState.isDehydrated&&(rn(e,t).flags|=256),e=Si(e,t),e!==2&&(t=Le,Le=n,t!==null&&po(t)),e}function po(e){Le===null?Le=e:Le.push.apply(Le,e)}function fd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!nt(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wt(e,t){for(t&=~oo,t&=~fi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tt(t),r=1<<n;e[n]=-1,t&=~r}}function uu(e){if((N&6)!==0)throw Error(m(327));jn();var t=Tr(e,0);if((t&1)===0)return Me(e,ae()),null;var n=Si(e,t);if(e.tag!==0&&n===2){var r=Wi(e);r!==0&&(t=r,n=co(e,r))}if(n===1)throw n=fr,rn(e,0),Wt(e,t),Me(e,ae()),n;if(n===6)throw Error(m(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,an(e,Le,Ct),Me(e,ae()),null}function fo(e,t){var n=N;N|=1;try{return e(t)}finally{N=n,N===0&&(Dn=ae()+500,qr&&Nt())}}function nn(e){Ut!==null&&Ut.tag===0&&(N&6)===0&&jn();var t=N;N|=1;var n=Ke.transition,r=J;try{if(Ke.transition=null,J=1,e)return e()}finally{J=r,Ke.transition=n,N=t,(N&6)===0&&Nt()}}function mo(){Je=An.current,Y(An)}function rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Wc(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(ka(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hr();break;case 3:Pn(),Y(je),Y(we),Ma();break;case 5:Oa(r);break;case 4:Pn();break;case 13:Y(te);break;case 19:Y(te);break;case 10:Ia(r.type._context);break;case 22:case 23:mo()}n=n.return}if(fe=e,le=e=Ht(e.current,null),ye=Je=t,ue=0,fr=null,oo=fi=tn=0,Le=mr=null,Xt!==null){for(t=0;t<Xt.length;t++)if(n=Xt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Xt=null}return e}function cu(e,t){do{var n=le;try{if(Ta(),ni.current=oi,ri){for(var r=ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ri=!1}if(en=0,pe=se=ne=null,lr=!1,sr=0,ao.current=null,n===null||n.return===null){ue=1,fr=t,le=null;break}e:{var a=e,o=n.return,l=n,s=t;if(t=ye,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var f=s,g=l,v=g.tag;if((g.mode&1)===0&&(v===0||v===11||v===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var x=Ms(o);if(x!==null){x.flags&=-257,Ns(x,o,l,a,t),x.mode&1&&Ls(a,f,t),t=x,s=f;var b=t.updateQueue;if(b===null){var C=new Set;C.add(s),t.updateQueue=C}else b.add(s);break e}else{if((t&1)===0){Ls(a,f,t),ho();break e}s=Error(m(426))}}else if(Z&&l.mode&1){var oe=Ms(o);if(oe!==null){(oe.flags&65536)===0&&(oe.flags|=256),Ns(oe,o,l,a,t),Ca(Tn(s,l));break e}}a=s=Tn(s,l),ue!==4&&(ue=2),mr===null?mr=[a]:mr.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var d=_s(a,s,t);as(a,d);break e;case 1:l=s;var u=a.type,p=a.stateNode;if((a.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Bt===null||!Bt.has(p)))){a.flags|=65536,t&=-t,a.lanes|=t;var S=Os(a,l,t);as(a,S);break e}}a=a.return}while(a!==null)}fu(n)}catch(P){t=P,le===n&&n!==null&&(le=n=n.return);continue}break}while(!0)}function du(){var e=pi.current;return pi.current=oi,e===null?oi:e}function ho(){(ue===0||ue===3||ue===2)&&(ue=4),fe===null||(tn&268435455)===0&&(fi&268435455)===0||Wt(fe,ye)}function Si(e,t){var n=N;N|=2;var r=du();(fe!==e||ye!==t)&&(Ct=null,rn(e,t));do try{md();break}catch(i){cu(e,i)}while(!0);if(Ta(),N=n,pi.current=r,le!==null)throw Error(m(261));return fe=null,ye=0,ue}function md(){for(;le!==null;)pu(le)}function hd(){for(;le!==null&&!Bu();)pu(le)}function pu(e){var t=yu(e.alternate,e,Je);e.memoizedProps=e.pendingProps,t===null?fu(e):le=t,ao.current=null}function fu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=ld(n,t,Je),n!==null){le=n;return}}else{if(n=sd(n,t),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,le=null;return}}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);ue===0&&(ue=5)}function an(e,t,n){var r=J,i=Ke.transition;try{Ke.transition=null,J=1,yd(e,t,n,r)}finally{Ke.transition=i,J=r}return null}function yd(e,t,n,r){do jn();while(Ut!==null);if((N&6)!==0)throw Error(m(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(m(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Ku(e,a),e===fe&&(le=fe=null,ye=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||hi||(hi=!0,gu(Er,function(){return jn(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=Ke.transition,Ke.transition=null;var o=J;J=1;var l=N;N|=4,ao.current=null,cd(e,n),ru(n,e),Nc(ma),Dr=!!fa,ma=fa=null,e.current=n,dd(n),Uu(),N=l,J=o,Ke.transition=a}else e.current=n;if(hi&&(hi=!1,Ut=e,yi=i),a=e.pendingLanes,a===0&&(Bt=null),Hu(n.stateNode),Me(e,ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(mi)throw mi=!1,e=so,so=null,e;return(yi&1)!==0&&e.tag!==0&&jn(),a=e.pendingLanes,(a&1)!==0?e===uo?hr++:(hr=0,uo=e):hr=0,Nt(),null}function jn(){if(Ut!==null){var e=tl(yi),t=Ke.transition,n=J;try{if(Ke.transition=null,J=16>e?16:e,Ut===null)var r=!1;else{if(e=Ut,Ut=null,yi=0,(N&6)!==0)throw Error(m(331));var i=N;for(N|=4,k=e.current;k!==null;){var a=k,o=a.child;if((k.flags&16)!==0){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var f=l[s];for(k=f;k!==null;){var g=k;switch(g.tag){case 0:case 11:case 15:pr(8,g,a)}var v=g.child;if(v!==null)v.return=g,k=v;else for(;k!==null;){g=k;var h=g.sibling,x=g.return;if(Xs(g),g===f){k=null;break}if(h!==null){h.return=x,k=h;break}k=x}}}var b=a.alternate;if(b!==null){var C=b.child;if(C!==null){b.child=null;do{var oe=C.sibling;C.sibling=null,C=oe}while(C!==null)}}k=a}}if((a.subtreeFlags&2064)!==0&&o!==null)o.return=a,k=o;else e:for(;k!==null;){if(a=k,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:pr(9,a,a.return)}var d=a.sibling;if(d!==null){d.return=a.return,k=d;break e}k=a.return}}var u=e.current;for(k=u;k!==null;){o=k;var p=o.child;if((o.subtreeFlags&2064)!==0&&p!==null)p.return=o,k=p;else e:for(o=u;k!==null;){if(l=k,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:di(9,l)}}catch(P){ie(l,l.return,P)}if(l===o){k=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,k=S;break e}k=l.return}}if(N=i,Nt(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(br,e)}catch{}r=!0}return r}finally{J=n,Ke.transition=t}}return!1}function mu(e,t,n){t=Tn(n,t),t=_s(e,t,1),e=Ft(e,t,1),t=Te(),e!==null&&(zn(e,1,t),Me(e,t))}function ie(e,t,n){if(e.tag===3)mu(e,e,n);else for(;t!==null;){if(t.tag===3){mu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bt===null||!Bt.has(r))){e=Tn(n,e),e=Os(t,e,1),t=Ft(t,e,1),e=Te(),t!==null&&(zn(t,1,e),Me(t,e));break}}t=t.return}}function gd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Te(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(ye&n)===n&&(ue===4||ue===3&&(ye&130023424)===ye&&500>ae()-lo?rn(e,0):oo|=n),Me(e,t)}function hu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Pr,Pr<<=1,(Pr&130023424)===0&&(Pr=4194304)));var n=Te();e=kt(e,t),e!==null&&(zn(e,t,n),Me(e,n))}function vd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hu(e,n)}function Sd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(m(314))}r!==null&&r.delete(t),hu(e,n)}var yu;yu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)Oe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Oe=!1,od(e,t,n);Oe=(e.flags&131072)!==0}else Oe=!1,Z&&(t.flags&1048576)!==0&&Yl(t,$r,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ui(e,t),e=t.pendingProps;var i=Sn(t,we.current);Cn(t,n),i=Fa(null,t,r,e,i,n);var a=za();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(r)?(a=!0,Vr(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ja(t),i.updater=li,t.stateNode=i,i._reactInternals=t,Va(t,r,e,n),t=Ya(null,t,r,!0,a,n)):(t.tag=0,Z&&a&&xa(t),Pe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ui(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=xd(r),e=it(r,e),i){case 0:t=$a(null,t,r,e,n);break e;case 1:t=Js(null,t,r,e,n);break e;case 11:t=Rs(null,t,r,e,n);break e;case 14:t=Fs(null,t,r,it(r.type,e),n);break e}throw Error(m(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),$a(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),Js(e,t,r,i,n);case 3:e:{if(Ws(t),e===null)throw Error(m(387));r=t.pendingProps,a=t.memoizedState,i=a.element,is(e,t),ei(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Tn(Error(m(423)),t),t=Hs(e,t,r,n,i);break e}else if(r!==i){i=Tn(Error(m(424)),t),t=Hs(e,t,r,n,i);break e}else for(Ue=Ot(t.stateNode.containerInfo.firstChild),Be=t,Z=!0,rt=null,n=ns(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(kn(),r===i){t=bt(e,t,n);break e}Pe(e,t,r,n)}t=t.child}return t;case 5:return ls(t),e===null&&ba(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,ha(r,i)?o=null:a!==null&&ha(r,a)&&(t.flags|=32),Us(e,t),Pe(e,t,o,n),t.child;case 6:return e===null&&ba(t),null;case 13:return Vs(e,t,n);case 4:return _a(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=En(t,null,r,n):Pe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),Rs(e,t,r,i,n);case 7:return Pe(e,t,t.pendingProps,n),t.child;case 8:return Pe(e,t,t.pendingProps.children,n),t.child;case 12:return Pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,q(Gr,r._currentValue),r._currentValue=o,a!==null)if(nt(a.value,o)){if(a.children===i.children&&!je.current){t=bt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=Et(-1,n&-n),s.tag=2;var f=a.updateQueue;if(f!==null){f=f.shared;var g=f.pending;g===null?s.next=s:(s.next=g.next,g.next=s),f.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Aa(a.return,n,t),l.lanes|=n;break}s=s.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(m(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Aa(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Pe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Cn(t,n),i=$e(i),r=r(i),t.flags|=1,Pe(e,t,r,n),t.child;case 14:return r=t.type,i=it(r,t.pendingProps),i=it(r.type,i),Fs(e,t,r,i,n);case 15:return zs(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),ui(e,t),t.tag=1,_e(r)?(e=!0,Vr(t)):e=!1,Cn(t,n),Ds(t,r,i),Va(t,r,i,n),Ya(null,t,r,!0,e,n);case 19:return Qs(e,t,n);case 22:return Bs(e,t,n)}throw Error(m(156,t.tag))};function gu(e,t){return Ko(e,t)}function wd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ge(e,t,n,r){return new wd(e,t,n,r)}function yo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xd(e){if(typeof e=="function")return yo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ut)return 11;if(e===ct)return 14}return 2}function Ht(e,t){var n=e.alternate;return n===null?(n=Ge(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function wi(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")yo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ae:return on(n.children,i,a,t);case Ve:o=8,i|=8;break;case Pt:return e=Ge(12,n,t,i|2),e.elementType=Pt,e.lanes=a,e;case Re:return e=Ge(13,n,t,i),e.elementType=Re,e.lanes=a,e;case et:return e=Ge(19,n,t,i),e.elementType=et,e.lanes=a,e;case re:return xi(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gt:o=10;break e;case qt:o=9;break e;case ut:o=11;break e;case ct:o=14;break e;case De:o=16,r=null;break e}throw Error(m(130,e==null?e:typeof e,""))}return t=Ge(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function on(e,t,n,r){return e=Ge(7,e,r,t),e.lanes=n,e}function xi(e,t,n,r){return e=Ge(22,e,r,t),e.elementType=re,e.lanes=n,e.stateNode={isHidden:!1},e}function go(e,t,n){return e=Ge(6,e,null,t),e.lanes=n,e}function vo(e,t,n){return t=Ge(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function kd(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hi(0),this.expirationTimes=Hi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function So(e,t,n,r,i,a,o,l,s){return e=new kd(e,t,n,l,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ge(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ja(a),e}function Ed(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ce,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function vu(e){if(!e)return Mt;e=e._reactInternals;e:{if(Qt(e)!==e||e.tag!==1)throw Error(m(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(m(171))}if(e.tag===1){var n=e.type;if(_e(n))return ql(e,n,t)}return t}function Su(e,t,n,r,i,a,o,l,s){return e=So(n,r,!0,e,i,a,o,l,s),e.context=vu(null),n=e.current,r=Te(),i=Jt(n),a=Et(r,i),a.callback=t??null,Ft(n,a,i),e.current.lanes=i,zn(e,i,r),Me(e,r),e}function ki(e,t,n,r){var i=t.current,a=Te(),o=Jt(i);return n=vu(n),t.context===null?t.context=n:t.pendingContext=n,t=Et(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ft(i,t,o),e!==null&&(lt(e,i,o,a),Zr(e,i,o)),o}function Ei(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wo(e,t){wu(e,t),(e=e.alternate)&&wu(e,t)}function bd(){return null}var xu=typeof reportError=="function"?reportError:function(e){console.error(e)};function xo(e){this._internalRoot=e}bi.prototype.render=xo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(m(409));ki(e,t,null,null)},bi.prototype.unmount=xo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nn(function(){ki(null,e,null,null)}),t[vt]=null}};function bi(e){this._internalRoot=e}bi.prototype.unstable_scheduleHydration=function(e){if(e){var t=il();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dt.length&&t!==0&&t<Dt[n].priority;n++);Dt.splice(n,0,e),n===0&&ll(e)}};function ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ci(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ku(){}function Cd(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var f=Ei(o);a.call(f)}}var o=Su(t,r,e,0,null,!1,!1,"",ku);return e._reactRootContainer=o,e[vt]=o.current,Zn(e.nodeType===8?e.parentNode:e),nn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var f=Ei(s);l.call(f)}}var s=So(e,0,!1,null,null,!1,!1,"",ku);return e._reactRootContainer=s,e[vt]=s.current,Zn(e.nodeType===8?e.parentNode:e),nn(function(){ki(t,s,n,r)}),s}function Pi(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var l=i;i=function(){var s=Ei(o);l.call(s)}}ki(t,o,e,i)}else o=Cd(n,t,e,i,r);return Ei(o)}nl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fn(t.pendingLanes);n!==0&&(Vi(t,n|1),Me(t,ae()),(N&6)===0&&(Dn=ae()+500,Nt()))}break;case 13:nn(function(){var r=kt(e,1);if(r!==null){var i=Te();lt(r,e,1,i)}}),wo(e,1)}},qi=function(e){if(e.tag===13){var t=kt(e,134217728);if(t!==null){var n=Te();lt(t,e,134217728,n)}wo(e,134217728)}},rl=function(e){if(e.tag===13){var t=Jt(e),n=kt(e,t);if(n!==null){var r=Te();lt(n,e,t,r)}wo(e,t)}},il=function(){return J},al=function(e,t){var n=J;try{return J=e,t()}finally{J=n}},Fi=function(e,t,n){switch(t){case"input":if(Di(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Wr(r);if(!i)throw Error(m(90));Ao(r),Di(r,i)}}}break;case"textarea":Lo(e,n);break;case"select":t=n.value,t!=null&&ln(e,!!n.multiple,t,!1)}},Wo=fo,Ho=nn;var Pd={usingClientEntryPoint:!1,Events:[nr,gn,Wr,Uo,Jo,fo]},yr={findFiberByHostInstance:$t,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Td={bundleType:yr.bundleType,version:yr.version,rendererPackageName:yr.rendererPackageName,rendererConfig:yr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Se.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$o(e),e===null?null:e.stateNode},findFiberByHostInstance:yr.findFiberByHostInstance||bd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ti=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ti.isDisabled&&Ti.supportsFiber)try{br=Ti.inject(Td),dt=Ti}catch{}}return Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pd,Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ko(t))throw Error(m(200));return Ed(e,t,null,n)},Ne.createRoot=function(e,t){if(!ko(e))throw Error(m(299));var n=!1,r="",i=xu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=So(e,1,!1,null,null,n,!1,r,i),e[vt]=t.current,Zn(e.nodeType===8?e.parentNode:e),new xo(t)},Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=$o(t),e=e===null?null:e.stateNode,e},Ne.flushSync=function(e){return nn(e)},Ne.hydrate=function(e,t,n){if(!Ci(t))throw Error(m(200));return Pi(null,e,t,!0,n)},Ne.hydrateRoot=function(e,t,n){if(!ko(e))throw Error(m(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=xu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Su(t,null,e,1,n??null,i,!1,a,o),e[vt]=t.current,Zn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new bi(t)},Ne.render=function(e,t,n){if(!Ci(t))throw Error(m(200));return Pi(null,e,t,!1,n)},Ne.unmountComponentAtNode=function(e){if(!Ci(e))throw Error(m(40));return e._reactRootContainer?(nn(function(){Pi(null,null,e,!1,function(){e._reactRootContainer=null,e[vt]=null})}),!0):!1},Ne.unstable_batchedUpdates=fo,Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ci(n))throw Error(m(200));if(e==null||e._reactInternals===void 0)throw Error(m(38));return Pi(e,t,n,!1,r)},Ne.version="18.3.1-next-f1338f8080-20240426",Ne}var Du;function Md(){if(Du)return Co.exports;Du=1;function j(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j)}catch(B){console.error(B)}}return j(),Co.exports=Ld(),Co.exports}var ju;function Nd(){if(ju)return Ii;ju=1;var j=Md();return Ii.createRoot=j.createRoot,Ii.hydrateRoot=j.hydrateRoot,Ii}var Rd=Nd();function Fd(){const[j,B]=_u.useState(null),m=[{id:1,question:"1. Explain Encapsulation and Access Modifiers in Java with examples.",answer:"",codeExample:`
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

`},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1.1,question:"1.1 Write a program for swapping and find a factorial value. Perform swapping without using third variable",answer:"",codeExample:`
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

`},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""}],ge=_=>{B(j===_?null:_)};return Ie.jsxs("div",{className:"app-container",children:[Ie.jsx("h1",{children:"java Interview Questions"}),Ie.jsx("div",{className:"questions-container",children:m.map(_=>Ie.jsxs("div",{className:"question-item",children:[Ie.jsx("button",{className:`question-button ${j===_.id?"active":""}`,onClick:()=>ge(_.id),children:_.question}),j===_.id&&Ie.jsxs("div",{className:"answer-container",children:[Ie.jsxs("div",{className:"answer",children:[Ie.jsx("h3",{children:"Answer:"}),Ie.jsx("p",{children:_.answer})]}),_.codeExample&&Ie.jsxs("div",{className:"code-example",children:[Ie.jsx("h3",{children:"Code Example:"}),Ie.jsx("pre",{children:Ie.jsx("code",{children:_.codeExample})})]})]})]},_.id))})]})}Rd.createRoot(document.getElementById("root")).render(Ie.jsx(_u.StrictMode,{children:Ie.jsx(Fd,{})}));
