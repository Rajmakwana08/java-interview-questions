(function(){const W=document.createElement("link").relList;if(W&&W.supports&&W.supports("modulepreload"))return;for(const L of document.querySelectorAll('link[rel="modulepreload"]'))ye(L);new MutationObserver(L=>{for(const q of L)if(q.type==="childList")for(const ce of q.addedNodes)ce.tagName==="LINK"&&ce.rel==="modulepreload"&&ye(ce)}).observe(document,{childList:!0,subtree:!0});function h(L){const q={};return L.integrity&&(q.integrity=L.integrity),L.referrerPolicy&&(q.referrerPolicy=L.referrerPolicy),L.crossOrigin==="use-credentials"?q.credentials="include":L.crossOrigin==="anonymous"?q.credentials="omit":q.credentials="same-origin",q}function ye(L){if(L.ep)return;L.ep=!0;const q=h(L);fetch(L.href,q)}})();var Eo={exports:{}},ya={},ko={exports:{}},P={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eu;function Md(){if(Eu)return P;Eu=1;var j=Symbol.for("react.element"),W=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),ye=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),q=Symbol.for("react.provider"),ce=Symbol.for("react.context"),de=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),ke=Symbol.for("react.memo"),ve=Symbol.for("react.lazy"),ee=Symbol.iterator;function Q(c){return c===null||typeof c!="object"?null:(c=ee&&c[ee]||c["@@iterator"],typeof c=="function"?c:null)}var ze={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ve=Object.assign,$={};function V(c,g,F){this.props=c,this.context=g,this.refs=$,this.updater=F||ze}V.prototype.isReactComponent={},V.prototype.setState=function(c,g){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,g,"setState")},V.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function gt(){}gt.prototype=V.prototype;function lt(c,g,F){this.props=c,this.context=g,this.refs=$,this.updater=F||ze}var Xe=lt.prototype=new gt;Xe.constructor=lt,Ve(Xe,V.prototype),Xe.isPureReactComponent=!0;var we=Array.isArray,Ze=Object.prototype.hasOwnProperty,Ce={current:null},Me={key:!0,ref:!0,__self:!0,__source:!0};function He(c,g,F){var D,N={},J=null,H=null;if(g!=null)for(D in g.ref!==void 0&&(H=g.ref),g.key!==void 0&&(J=""+g.key),g)Ze.call(g,D)&&!Me.hasOwnProperty(D)&&(N[D]=g[D]);var _=arguments.length-2;if(_===1)N.children=F;else if(1<_){for(var X=Array(_),Je=0;Je<_;Je++)X[Je]=arguments[Je+2];N.children=X}if(c&&c.defaultProps)for(D in _=c.defaultProps,_)N[D]===void 0&&(N[D]=_[D]);return{$$typeof:j,type:c,key:J,ref:H,props:N,_owner:Ce.current}}function Tt(c,g){return{$$typeof:j,type:c.type,key:g,ref:c.ref,props:c.props,_owner:c._owner}}function yt(c){return typeof c=="object"&&c!==null&&c.$$typeof===j}function Gt(c){var g={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(F){return g[F]})}var ut=/\/+/g;function Ne(c,g){return typeof c=="object"&&c!==null&&c.key!=null?Gt(""+c.key):g.toString(36)}function et(c,g,F,D,N){var J=typeof c;(J==="undefined"||J==="boolean")&&(c=null);var H=!1;if(c===null)H=!0;else switch(J){case"string":case"number":H=!0;break;case"object":switch(c.$$typeof){case j:case W:H=!0}}if(H)return H=c,N=N(H),c=D===""?"."+Ne(H,0):D,we(N)?(F="",c!=null&&(F=c.replace(ut,"$&/")+"/"),et(N,g,F,"",function(Je){return Je})):N!=null&&(yt(N)&&(N=Tt(N,F+(!N.key||H&&H.key===N.key?"":(""+N.key).replace(ut,"$&/")+"/")+c)),g.push(N)),1;if(H=0,D=D===""?".":D+":",we(c))for(var _=0;_<c.length;_++){J=c[_];var X=D+Ne(J,_);H+=et(J,g,F,X,N)}else if(X=Q(c),typeof X=="function")for(c=X.call(c),_=0;!(J=c.next()).done;)J=J.value,X=D+Ne(J,_++),H+=et(J,g,F,X,N);else if(J==="object")throw g=String(c),Error("Objects are not valid as a React child (found: "+(g==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":g)+"). If you meant to render a collection of children, use an array instead.");return H}function ct(c,g,F){if(c==null)return c;var D=[],N=0;return et(c,D,"","",function(J){return g.call(F,J,N++)}),D}function Oe(c){if(c._status===-1){var g=c._result;g=g(),g.then(function(F){(c._status===0||c._status===-1)&&(c._status=1,c._result=F)},function(F){(c._status===0||c._status===-1)&&(c._status=2,c._result=F)}),c._status===-1&&(c._status=0,c._result=g)}if(c._status===1)return c._result.default;throw c._result}var ae={current:null},S={transition:null},M={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:S,ReactCurrentOwner:Ce};function E(){throw Error("act(...) is not supported in production builds of React.")}return P.Children={map:ct,forEach:function(c,g,F){ct(c,function(){g.apply(this,arguments)},F)},count:function(c){var g=0;return ct(c,function(){g++}),g},toArray:function(c){return ct(c,function(g){return g})||[]},only:function(c){if(!yt(c))throw Error("React.Children.only expected to receive a single React element child.");return c}},P.Component=V,P.Fragment=h,P.Profiler=L,P.PureComponent=lt,P.StrictMode=ye,P.Suspense=z,P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,P.act=E,P.cloneElement=function(c,g,F){if(c==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+c+".");var D=Ve({},c.props),N=c.key,J=c.ref,H=c._owner;if(g!=null){if(g.ref!==void 0&&(J=g.ref,H=Ce.current),g.key!==void 0&&(N=""+g.key),c.type&&c.type.defaultProps)var _=c.type.defaultProps;for(X in g)Ze.call(g,X)&&!Me.hasOwnProperty(X)&&(D[X]=g[X]===void 0&&_!==void 0?_[X]:g[X])}var X=arguments.length-2;if(X===1)D.children=F;else if(1<X){_=Array(X);for(var Je=0;Je<X;Je++)_[Je]=arguments[Je+2];D.children=_}return{$$typeof:j,type:c.type,key:N,ref:J,props:D,_owner:H}},P.createContext=function(c){return c={$$typeof:ce,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},c.Provider={$$typeof:q,_context:c},c.Consumer=c},P.createElement=He,P.createFactory=function(c){var g=He.bind(null,c);return g.type=c,g},P.createRef=function(){return{current:null}},P.forwardRef=function(c){return{$$typeof:de,render:c}},P.isValidElement=yt,P.lazy=function(c){return{$$typeof:ve,_payload:{_status:-1,_result:c},_init:Oe}},P.memo=function(c,g){return{$$typeof:ke,type:c,compare:g===void 0?null:g}},P.startTransition=function(c){var g=S.transition;S.transition={};try{c()}finally{S.transition=g}},P.unstable_act=E,P.useCallback=function(c,g){return ae.current.useCallback(c,g)},P.useContext=function(c){return ae.current.useContext(c)},P.useDebugValue=function(){},P.useDeferredValue=function(c){return ae.current.useDeferredValue(c)},P.useEffect=function(c,g){return ae.current.useEffect(c,g)},P.useId=function(){return ae.current.useId()},P.useImperativeHandle=function(c,g,F){return ae.current.useImperativeHandle(c,g,F)},P.useInsertionEffect=function(c,g){return ae.current.useInsertionEffect(c,g)},P.useLayoutEffect=function(c,g){return ae.current.useLayoutEffect(c,g)},P.useMemo=function(c,g){return ae.current.useMemo(c,g)},P.useReducer=function(c,g,F){return ae.current.useReducer(c,g,F)},P.useRef=function(c){return ae.current.useRef(c)},P.useState=function(c){return ae.current.useState(c)},P.useSyncExternalStore=function(c,g,F){return ae.current.useSyncExternalStore(c,g,F)},P.useTransition=function(){return ae.current.useTransition()},P.version="18.3.1",P}var ku;function Io(){return ku||(ku=1,ko.exports=Md()),ko.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cu;function Od(){if(Cu)return ya;Cu=1;var j=Io(),W=Symbol.for("react.element"),h=Symbol.for("react.fragment"),ye=Object.prototype.hasOwnProperty,L=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,q={key:!0,ref:!0,__self:!0,__source:!0};function ce(de,z,ke){var ve,ee={},Q=null,ze=null;ke!==void 0&&(Q=""+ke),z.key!==void 0&&(Q=""+z.key),z.ref!==void 0&&(ze=z.ref);for(ve in z)ye.call(z,ve)&&!q.hasOwnProperty(ve)&&(ee[ve]=z[ve]);if(de&&de.defaultProps)for(ve in z=de.defaultProps,z)ee[ve]===void 0&&(ee[ve]=z[ve]);return{$$typeof:W,type:de,key:Q,ref:ze,props:ee,_owner:L.current}}return ya.Fragment=h,ya.jsx=ce,ya.jsxs=ce,ya}var Tu;function jd(){return Tu||(Tu=1,Eo.exports=Od()),Eo.exports}var Ie=jd(),Lu=Io(),Ir={},Co={exports:{}},Re={},To={exports:{}},Ao={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Au;function Ld(){return Au||(Au=1,(function(j){function W(S,M){var E=S.length;S.push(M);e:for(;0<E;){var c=E-1>>>1,g=S[c];if(0<L(g,M))S[c]=M,S[E]=g,E=c;else break e}}function h(S){return S.length===0?null:S[0]}function ye(S){if(S.length===0)return null;var M=S[0],E=S.pop();if(E!==M){S[0]=E;e:for(var c=0,g=S.length,F=g>>>1;c<F;){var D=2*(c+1)-1,N=S[D],J=D+1,H=S[J];if(0>L(N,E))J<g&&0>L(H,N)?(S[c]=H,S[J]=E,c=J):(S[c]=N,S[D]=E,c=D);else if(J<g&&0>L(H,E))S[c]=H,S[J]=E,c=J;else break e}}return M}function L(S,M){var E=S.sortIndex-M.sortIndex;return E!==0?E:S.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var q=performance;j.unstable_now=function(){return q.now()}}else{var ce=Date,de=ce.now();j.unstable_now=function(){return ce.now()-de}}var z=[],ke=[],ve=1,ee=null,Q=3,ze=!1,Ve=!1,$=!1,V=typeof setTimeout=="function"?setTimeout:null,gt=typeof clearTimeout=="function"?clearTimeout:null,lt=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Xe(S){for(var M=h(ke);M!==null;){if(M.callback===null)ye(ke);else if(M.startTime<=S)ye(ke),M.sortIndex=M.expirationTime,W(z,M);else break;M=h(ke)}}function we(S){if($=!1,Xe(S),!Ve)if(h(z)!==null)Ve=!0,Oe(Ze);else{var M=h(ke);M!==null&&ae(we,M.startTime-S)}}function Ze(S,M){Ve=!1,$&&($=!1,gt(He),He=-1),ze=!0;var E=Q;try{for(Xe(M),ee=h(z);ee!==null&&(!(ee.expirationTime>M)||S&&!Gt());){var c=ee.callback;if(typeof c=="function"){ee.callback=null,Q=ee.priorityLevel;var g=c(ee.expirationTime<=M);M=j.unstable_now(),typeof g=="function"?ee.callback=g:ee===h(z)&&ye(z),Xe(M)}else ye(z);ee=h(z)}if(ee!==null)var F=!0;else{var D=h(ke);D!==null&&ae(we,D.startTime-M),F=!1}return F}finally{ee=null,Q=E,ze=!1}}var Ce=!1,Me=null,He=-1,Tt=5,yt=-1;function Gt(){return!(j.unstable_now()-yt<Tt)}function ut(){if(Me!==null){var S=j.unstable_now();yt=S;var M=!0;try{M=Me(!0,S)}finally{M?Ne():(Ce=!1,Me=null)}}else Ce=!1}var Ne;if(typeof lt=="function")Ne=function(){lt(ut)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,ct=et.port2;et.port1.onmessage=ut,Ne=function(){ct.postMessage(null)}}else Ne=function(){V(ut,0)};function Oe(S){Me=S,Ce||(Ce=!0,Ne())}function ae(S,M){He=V(function(){S(j.unstable_now())},M)}j.unstable_IdlePriority=5,j.unstable_ImmediatePriority=1,j.unstable_LowPriority=4,j.unstable_NormalPriority=3,j.unstable_Profiling=null,j.unstable_UserBlockingPriority=2,j.unstable_cancelCallback=function(S){S.callback=null},j.unstable_continueExecution=function(){Ve||ze||(Ve=!0,Oe(Ze))},j.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Tt=0<S?Math.floor(1e3/S):5},j.unstable_getCurrentPriorityLevel=function(){return Q},j.unstable_getFirstCallbackNode=function(){return h(z)},j.unstable_next=function(S){switch(Q){case 1:case 2:case 3:var M=3;break;default:M=Q}var E=Q;Q=M;try{return S()}finally{Q=E}},j.unstable_pauseExecution=function(){},j.unstable_requestPaint=function(){},j.unstable_runWithPriority=function(S,M){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var E=Q;Q=S;try{return M()}finally{Q=E}},j.unstable_scheduleCallback=function(S,M,E){var c=j.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?c+E:c):E=c,S){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=E+g,S={id:ve++,callback:M,priorityLevel:S,startTime:E,expirationTime:g,sortIndex:-1},E>c?(S.sortIndex=E,W(ke,S),h(z)===null&&S===h(ke)&&($?(gt(He),He=-1):$=!0,ae(we,E-c))):(S.sortIndex=g,W(z,S),Ve||ze||(Ve=!0,Oe(Ze))),S},j.unstable_shouldYield=Gt,j.unstable_wrapCallback=function(S){var M=Q;return function(){var E=Q;Q=M;try{return S.apply(this,arguments)}finally{Q=E}}}})(Ao)),Ao}var Iu;function Fd(){return Iu||(Iu=1,To.exports=Ld()),To.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mu;function Pd(){if(Mu)return Re;Mu=1;var j=Io(),W=Fd();function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ye=new Set,L={};function q(e,t){ce(e,t),ce(e+"Capture",t)}function ce(e,t){for(L[e]=t,e=0;e<t.length;e++)ye.add(t[e])}var de=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),z=Object.prototype.hasOwnProperty,ke=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ve={},ee={};function Q(e){return z.call(ee,e)?!0:z.call(ve,e)?!1:ke.test(e)?ee[e]=!0:(ve[e]=!0,!1)}function ze(e,t,n,a){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ve(e,t,n,a){if(t===null||typeof t>"u"||ze(e,t,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $(e,t,n,a,r,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){V[e]=new $(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];V[t]=new $(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){V[e]=new $(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){V[e]=new $(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){V[e]=new $(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){V[e]=new $(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){V[e]=new $(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){V[e]=new $(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){V[e]=new $(e,5,!1,e.toLowerCase(),null,!1,!1)});var gt=/[\-:]([a-z])/g;function lt(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(gt,lt);V[t]=new $(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(gt,lt);V[t]=new $(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(gt,lt);V[t]=new $(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){V[e]=new $(e,1,!1,e.toLowerCase(),null,!1,!1)}),V.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){V[e]=new $(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xe(e,t,n,a){var r=V.hasOwnProperty(t)?V[t]:null;(r!==null?r.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ve(t,n,r,a)&&(n=null),a||r===null?Q(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,a=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,a?e.setAttributeNS(a,t,n):e.setAttribute(t,n))))}var we=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ze=Symbol.for("react.element"),Ce=Symbol.for("react.portal"),Me=Symbol.for("react.fragment"),He=Symbol.for("react.strict_mode"),Tt=Symbol.for("react.profiler"),yt=Symbol.for("react.provider"),Gt=Symbol.for("react.context"),ut=Symbol.for("react.forward_ref"),Ne=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),ct=Symbol.for("react.memo"),Oe=Symbol.for("react.lazy"),ae=Symbol.for("react.offscreen"),S=Symbol.iterator;function M(e){return e===null||typeof e!="object"?null:(e=S&&e[S]||e["@@iterator"],typeof e=="function"?e:null)}var E=Object.assign,c;function g(e){if(c===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);c=t&&t[1]||""}return`
`+c+e}var F=!1;function D(e,t){if(!e||F)return"";F=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(m){var a=m}Reflect.construct(e,[],t)}else{try{t.call()}catch(m){a=m}e.call(t.prototype)}else{try{throw Error()}catch(m){a=m}e()}}catch(m){if(m&&a&&typeof m.stack=="string"){for(var r=m.stack.split(`
`),i=a.stack.split(`
`),o=r.length-1,s=i.length-1;1<=o&&0<=s&&r[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(r[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||r[o]!==i[s]){var l=`
`+r[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{F=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?g(e):""}function N(e){switch(e.tag){case 5:return g(e.type);case 16:return g("Lazy");case 13:return g("Suspense");case 19:return g("SuspenseList");case 0:case 2:case 15:return e=D(e.type,!1),e;case 11:return e=D(e.type.render,!1),e;case 1:return e=D(e.type,!0),e;default:return""}}function J(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Me:return"Fragment";case Ce:return"Portal";case Tt:return"Profiler";case He:return"StrictMode";case Ne:return"Suspense";case et:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gt:return(e.displayName||"Context")+".Consumer";case yt:return(e._context.displayName||"Context")+".Provider";case ut:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ct:return t=e.displayName||null,t!==null?t:J(e.type)||"Memo";case Oe:t=e._payload,e=e._init;try{return J(e(t))}catch{}}return null}function H(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return J(t);case 8:return t===He?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function _(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function X(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Je(e){var t=X(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(o){a=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function va(e){e._valueTracker||(e._valueTracker=Je(e))}function Mo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=X(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function wa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Mr(e,t){var n=t.checked;return E({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Oo(e,t){var n=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;n=_(t.value!=null?t.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function jo(e,t){t=t.checked,t!=null&&Xe(e,"checked",t,!1)}function Or(e,t){jo(e,t);var n=_(t.value),a=t.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?jr(e,t.type,n):t.hasOwnProperty("defaultValue")&&jr(e,t.type,_(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Lo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function jr(e,t,n){(t!=="number"||wa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ln=Array.isArray;function sn(e,t,n,a){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&a&&(e[n].defaultSelected=!0)}else{for(n=""+_(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Lr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(h(91));return E({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(h(92));if(Ln(n)){if(1<n.length)throw Error(h(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:_(n)}}function Po(e,t){var n=_(t.value),a=_(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function Do(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ro(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fr(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ro(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Sa,No=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,a,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,a,r)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Sa=Sa||document.createElement("div"),Sa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Sa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fu=["Webkit","ms","Moz","O"];Object.keys(Pn).forEach(function(e){Fu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Pn[t]=Pn[e]})});function Jo(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Pn.hasOwnProperty(e)&&Pn[e]?(""+t).trim():t+"px"}function Bo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var a=n.indexOf("--")===0,r=Jo(n,t[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,r):e[n]=r}}var Pu=E({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pr(e,t){if(t){if(Pu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(h(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(h(61))}if(t.style!=null&&typeof t.style!="object")throw Error(h(62))}}function Dr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rr=null;function Nr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jr=null,ln=null,un=null;function Wo(e){if(e=na(e)){if(typeof Jr!="function")throw Error(h(280));var t=e.stateNode;t&&(t=za(t),Jr(e.stateNode,e.type,t))}}function _o(e){ln?un?un.push(e):un=[e]:ln=e}function Uo(){if(ln){var e=ln,t=un;if(un=ln=null,Wo(e),t)for(e=0;e<t.length;e++)Wo(t[e])}}function zo(e,t){return e(t)}function Vo(){}var Br=!1;function Ho(e,t,n){if(Br)return e(t,n);Br=!0;try{return zo(e,t,n)}finally{Br=!1,(ln!==null||un!==null)&&(Vo(),Uo())}}function Dn(e,t){var n=e.stateNode;if(n===null)return null;var a=za(n);if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(h(231,t,typeof n));return n}var Wr=!1;if(de)try{var Rn={};Object.defineProperty(Rn,"passive",{get:function(){Wr=!0}}),window.addEventListener("test",Rn,Rn),window.removeEventListener("test",Rn,Rn)}catch{Wr=!1}function Du(e,t,n,a,r,i,o,s,l){var m=Array.prototype.slice.call(arguments,3);try{t.apply(n,m)}catch(y){this.onError(y)}}var Nn=!1,ba=null,xa=!1,_r=null,Ru={onError:function(e){Nn=!0,ba=e}};function Nu(e,t,n,a,r,i,o,s,l){Nn=!1,ba=null,Du.apply(Ru,arguments)}function Ju(e,t,n,a,r,i,o,s,l){if(Nu.apply(this,arguments),Nn){if(Nn){var m=ba;Nn=!1,ba=null}else throw Error(h(198));xa||(xa=!0,_r=m)}}function qt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Go(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function qo(e){if(qt(e)!==e)throw Error(h(188))}function Bu(e){var t=e.alternate;if(!t){if(t=qt(e),t===null)throw Error(h(188));return t!==e?null:e}for(var n=e,a=t;;){var r=n.return;if(r===null)break;var i=r.alternate;if(i===null){if(a=r.return,a!==null){n=a;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===n)return qo(r),e;if(i===a)return qo(r),t;i=i.sibling}throw Error(h(188))}if(n.return!==a.return)n=r,a=i;else{for(var o=!1,s=r.child;s;){if(s===n){o=!0,n=r,a=i;break}if(s===a){o=!0,a=r,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,a=r;break}if(s===a){o=!0,a=i,n=r;break}s=s.sibling}if(!o)throw Error(h(189))}}if(n.alternate!==a)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:t}function Yo(e){return e=Bu(e),e!==null?Ko(e):null}function Ko(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ko(e);if(t!==null)return t;e=e.sibling}return null}var Qo=W.unstable_scheduleCallback,$o=W.unstable_cancelCallback,Wu=W.unstable_shouldYield,_u=W.unstable_requestPaint,ie=W.unstable_now,Uu=W.unstable_getCurrentPriorityLevel,Ur=W.unstable_ImmediatePriority,Xo=W.unstable_UserBlockingPriority,Ea=W.unstable_NormalPriority,zu=W.unstable_LowPriority,Zo=W.unstable_IdlePriority,ka=null,dt=null;function Vu(e){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(ka,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:qu,Hu=Math.log,Gu=Math.LN2;function qu(e){return e>>>=0,e===0?32:31-(Hu(e)/Gu|0)|0}var Ca=64,Ta=4194304;function Jn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Aa(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,r=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~r;s!==0?a=Jn(s):(i&=o,i!==0&&(a=Jn(i)))}else o=n&~r,o!==0?a=Jn(o):i!==0&&(a=Jn(i));if(a===0)return 0;if(t!==0&&t!==a&&(t&r)===0&&(r=a&-a,i=t&-t,r>=i||r===16&&(i&4194240)!==0))return t;if((a&4)!==0&&(a|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)n=31-tt(t),r=1<<n,a|=e[n],t&=~r;return a}function Yu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ku(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-tt(i),s=1<<o,l=r[o];l===-1?((s&n)===0||(s&a)!==0)&&(r[o]=Yu(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}function zr(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function es(){var e=Ca;return Ca<<=1,(Ca&4194240)===0&&(Ca=64),e}function Vr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Bn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=n}function Qu(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-tt(n),i=1<<r;t[r]=0,a[r]=-1,e[r]=-1,n&=~i}}function Hr(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-tt(n),r=1<<a;r&t|e[a]&t&&(e[a]|=t),n&=~r}}var U=0;function ts(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ns,Gr,as,rs,is,qr=!1,Ia=[],At=null,It=null,Mt=null,Wn=new Map,_n=new Map,Ot=[],$u="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function os(e,t){switch(e){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":It=null;break;case"mouseover":case"mouseout":Mt=null;break;case"pointerover":case"pointerout":Wn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_n.delete(t.pointerId)}}function Un(e,t,n,a,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[r]},t!==null&&(t=na(t),t!==null&&Gr(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Xu(e,t,n,a,r){switch(t){case"focusin":return At=Un(At,e,t,n,a,r),!0;case"dragenter":return It=Un(It,e,t,n,a,r),!0;case"mouseover":return Mt=Un(Mt,e,t,n,a,r),!0;case"pointerover":var i=r.pointerId;return Wn.set(i,Un(Wn.get(i)||null,e,t,n,a,r)),!0;case"gotpointercapture":return i=r.pointerId,_n.set(i,Un(_n.get(i)||null,e,t,n,a,r)),!0}return!1}function ss(e){var t=Yt(e.target);if(t!==null){var n=qt(t);if(n!==null){if(t=n.tag,t===13){if(t=Go(n),t!==null){e.blockedOn=t,is(e.priority,function(){as(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ma(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Kr(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Rr=a,n.target.dispatchEvent(a),Rr=null}else return t=na(n),t!==null&&Gr(t),e.blockedOn=n,!1;t.shift()}return!0}function ls(e,t,n){Ma(e)&&n.delete(t)}function Zu(){qr=!1,At!==null&&Ma(At)&&(At=null),It!==null&&Ma(It)&&(It=null),Mt!==null&&Ma(Mt)&&(Mt=null),Wn.forEach(ls),_n.forEach(ls)}function zn(e,t){e.blockedOn===t&&(e.blockedOn=null,qr||(qr=!0,W.unstable_scheduleCallback(W.unstable_NormalPriority,Zu)))}function Vn(e){function t(r){return zn(r,e)}if(0<Ia.length){zn(Ia[0],e);for(var n=1;n<Ia.length;n++){var a=Ia[n];a.blockedOn===e&&(a.blockedOn=null)}}for(At!==null&&zn(At,e),It!==null&&zn(It,e),Mt!==null&&zn(Mt,e),Wn.forEach(t),_n.forEach(t),n=0;n<Ot.length;n++)a=Ot[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<Ot.length&&(n=Ot[0],n.blockedOn===null);)ss(n),n.blockedOn===null&&Ot.shift()}var cn=we.ReactCurrentBatchConfig,Oa=!0;function ec(e,t,n,a){var r=U,i=cn.transition;cn.transition=null;try{U=1,Yr(e,t,n,a)}finally{U=r,cn.transition=i}}function tc(e,t,n,a){var r=U,i=cn.transition;cn.transition=null;try{U=4,Yr(e,t,n,a)}finally{U=r,cn.transition=i}}function Yr(e,t,n,a){if(Oa){var r=Kr(e,t,n,a);if(r===null)pi(e,t,a,ja,n),os(e,a);else if(Xu(r,e,t,n,a))a.stopPropagation();else if(os(e,a),t&4&&-1<$u.indexOf(e)){for(;r!==null;){var i=na(r);if(i!==null&&ns(i),i=Kr(e,t,n,a),i===null&&pi(e,t,a,ja,n),i===r)break;r=i}r!==null&&a.stopPropagation()}else pi(e,t,a,null,n)}}var ja=null;function Kr(e,t,n,a){if(ja=null,e=Nr(a),e=Yt(e),e!==null)if(t=qt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Go(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ja=e,null}function us(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Uu()){case Ur:return 1;case Xo:return 4;case Ea:case zu:return 16;case Zo:return 536870912;default:return 16}default:return 16}}var jt=null,Qr=null,La=null;function cs(){if(La)return La;var e,t=Qr,n=t.length,a,r="value"in jt?jt.value:jt.textContent,i=r.length;for(e=0;e<n&&t[e]===r[e];e++);var o=n-e;for(a=1;a<=o&&t[n-a]===r[i-a];a++);return La=r.slice(e,1<a?1-a:void 0)}function Fa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pa(){return!0}function ds(){return!1}function Be(e){function t(n,a,r,i,o){this._reactName=n,this._targetInst=r,this.type=a,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Pa:ds,this.isPropagationStopped=ds,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pa)},persist:function(){},isPersistent:Pa}),t}var dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$r=Be(dn),Hn=E({},dn,{view:0,detail:0}),nc=Be(Hn),Xr,Zr,Gn,Da=E({},Hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ti,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gn&&(Gn&&e.type==="mousemove"?(Xr=e.screenX-Gn.screenX,Zr=e.screenY-Gn.screenY):Zr=Xr=0,Gn=e),Xr)},movementY:function(e){return"movementY"in e?e.movementY:Zr}}),ps=Be(Da),ac=E({},Da,{dataTransfer:0}),rc=Be(ac),ic=E({},Hn,{relatedTarget:0}),ei=Be(ic),oc=E({},dn,{animationName:0,elapsedTime:0,pseudoElement:0}),sc=Be(oc),lc=E({},dn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uc=Be(lc),cc=E({},dn,{data:0}),ms=Be(cc),dc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mc[e])?!!t[e]:!1}function ti(){return hc}var fc=E({},Hn,{key:function(e){if(e.key){var t=dc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ti,charCode:function(e){return e.type==="keypress"?Fa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gc=Be(fc),yc=E({},Da,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hs=Be(yc),vc=E({},Hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ti}),wc=Be(vc),Sc=E({},dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),bc=Be(Sc),xc=E({},Da,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ec=Be(xc),kc=[9,13,27,32],ni=de&&"CompositionEvent"in window,qn=null;de&&"documentMode"in document&&(qn=document.documentMode);var Cc=de&&"TextEvent"in window&&!qn,fs=de&&(!ni||qn&&8<qn&&11>=qn),gs=" ",ys=!1;function vs(e,t){switch(e){case"keyup":return kc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ws(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pn=!1;function Tc(e,t){switch(e){case"compositionend":return ws(t);case"keypress":return t.which!==32?null:(ys=!0,gs);case"textInput":return e=t.data,e===gs&&ys?null:e;default:return null}}function Ac(e,t){if(pn)return e==="compositionend"||!ni&&vs(e,t)?(e=cs(),La=Qr=jt=null,pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fs&&t.locale!=="ko"?null:t.data;default:return null}}var Ic={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ss(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ic[e.type]:t==="textarea"}function bs(e,t,n,a){_o(a),t=Wa(t,"onChange"),0<t.length&&(n=new $r("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Yn=null,Kn=null;function Mc(e){Bs(e,0)}function Ra(e){var t=yn(e);if(Mo(t))return e}function Oc(e,t){if(e==="change")return t}var xs=!1;if(de){var ai;if(de){var ri="oninput"in document;if(!ri){var Es=document.createElement("div");Es.setAttribute("oninput","return;"),ri=typeof Es.oninput=="function"}ai=ri}else ai=!1;xs=ai&&(!document.documentMode||9<document.documentMode)}function ks(){Yn&&(Yn.detachEvent("onpropertychange",Cs),Kn=Yn=null)}function Cs(e){if(e.propertyName==="value"&&Ra(Kn)){var t=[];bs(t,Kn,e,Nr(e)),Ho(Mc,t)}}function jc(e,t,n){e==="focusin"?(ks(),Yn=t,Kn=n,Yn.attachEvent("onpropertychange",Cs)):e==="focusout"&&ks()}function Lc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ra(Kn)}function Fc(e,t){if(e==="click")return Ra(t)}function Pc(e,t){if(e==="input"||e==="change")return Ra(t)}function Dc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:Dc;function Qn(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var r=n[a];if(!z.call(t,r)||!nt(e[r],t[r]))return!1}return!0}function Ts(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function As(e,t){var n=Ts(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ts(n)}}function Is(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Is(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ms(){for(var e=window,t=wa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=wa(e.document)}return t}function ii(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Rc(e){var t=Ms(),n=e.focusedElem,a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Is(n.ownerDocument.documentElement,n)){if(a!==null&&ii(n)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,i=Math.min(a.start,r);a=a.end===void 0?i:Math.min(a.end,r),!e.extend&&i>a&&(r=a,a=i,i=r),r=As(n,i);var o=As(n,a);r&&o&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),i>a?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Nc=de&&"documentMode"in document&&11>=document.documentMode,mn=null,oi=null,$n=null,si=!1;function Os(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;si||mn==null||mn!==wa(a)||(a=mn,"selectionStart"in a&&ii(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),$n&&Qn($n,a)||($n=a,a=Wa(oi,"onSelect"),0<a.length&&(t=new $r("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=mn)))}function Na(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hn={animationend:Na("Animation","AnimationEnd"),animationiteration:Na("Animation","AnimationIteration"),animationstart:Na("Animation","AnimationStart"),transitionend:Na("Transition","TransitionEnd")},li={},js={};de&&(js=document.createElement("div").style,"AnimationEvent"in window||(delete hn.animationend.animation,delete hn.animationiteration.animation,delete hn.animationstart.animation),"TransitionEvent"in window||delete hn.transitionend.transition);function Ja(e){if(li[e])return li[e];if(!hn[e])return e;var t=hn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in js)return li[e]=t[n];return e}var Ls=Ja("animationend"),Fs=Ja("animationiteration"),Ps=Ja("animationstart"),Ds=Ja("transitionend"),Rs=new Map,Ns="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lt(e,t){Rs.set(e,t),q(t,[e])}for(var ui=0;ui<Ns.length;ui++){var ci=Ns[ui],Jc=ci.toLowerCase(),Bc=ci[0].toUpperCase()+ci.slice(1);Lt(Jc,"on"+Bc)}Lt(Ls,"onAnimationEnd"),Lt(Fs,"onAnimationIteration"),Lt(Ps,"onAnimationStart"),Lt("dblclick","onDoubleClick"),Lt("focusin","onFocus"),Lt("focusout","onBlur"),Lt(Ds,"onTransitionEnd"),ce("onMouseEnter",["mouseout","mouseover"]),ce("onMouseLeave",["mouseout","mouseover"]),ce("onPointerEnter",["pointerout","pointerover"]),ce("onPointerLeave",["pointerout","pointerover"]),q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),q("onBeforeInput",["compositionend","keypress","textInput","paste"]),q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wc=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xn));function Js(e,t,n){var a=e.type||"unknown-event";e.currentTarget=n,Ju(a,t,void 0,e),e.currentTarget=null}function Bs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],r=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var o=a.length-1;0<=o;o--){var s=a[o],l=s.instance,m=s.currentTarget;if(s=s.listener,l!==i&&r.isPropagationStopped())break e;Js(r,s,m),i=l}else for(o=0;o<a.length;o++){if(s=a[o],l=s.instance,m=s.currentTarget,s=s.listener,l!==i&&r.isPropagationStopped())break e;Js(r,s,m),i=l}}}if(xa)throw e=_r,xa=!1,_r=null,e}function Y(e,t){var n=t[vi];n===void 0&&(n=t[vi]=new Set);var a=e+"__bubble";n.has(a)||(Ws(t,e,2,!1),n.add(a))}function di(e,t,n){var a=0;t&&(a|=4),Ws(n,e,a,t)}var Ba="_reactListening"+Math.random().toString(36).slice(2);function Zn(e){if(!e[Ba]){e[Ba]=!0,ye.forEach(function(n){n!=="selectionchange"&&(Wc.has(n)||di(n,!1,e),di(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ba]||(t[Ba]=!0,di("selectionchange",!1,t))}}function Ws(e,t,n,a){switch(us(t)){case 1:var r=ec;break;case 4:r=tc;break;default:r=Yr}n=r.bind(null,t,n,e),r=void 0,!Wr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function pi(e,t,n,a,r){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var s=a.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(o===4)for(o=a.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;s!==null;){if(o=Yt(s),o===null)return;if(l=o.tag,l===5||l===6){a=i=o;continue e}s=s.parentNode}}a=a.return}Ho(function(){var m=i,y=Nr(n),v=[];e:{var f=Rs.get(e);if(f!==void 0){var b=$r,k=e;switch(e){case"keypress":if(Fa(n)===0)break e;case"keydown":case"keyup":b=gc;break;case"focusin":k="focus",b=ei;break;case"focusout":k="blur",b=ei;break;case"beforeblur":case"afterblur":b=ei;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=ps;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=rc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=wc;break;case Ls:case Fs:case Ps:b=sc;break;case Ds:b=bc;break;case"scroll":b=nc;break;case"wheel":b=Ec;break;case"copy":case"cut":case"paste":b=uc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=hs}var C=(t&4)!==0,oe=!C&&e==="scroll",d=C?f!==null?f+"Capture":null:f;C=[];for(var u=m,p;u!==null;){p=u;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,d!==null&&(w=Dn(u,d),w!=null&&C.push(ea(u,w,p)))),oe)break;u=u.return}0<C.length&&(f=new b(f,k,null,n,y),v.push({event:f,listeners:C}))}}if((t&7)===0){e:{if(f=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",f&&n!==Rr&&(k=n.relatedTarget||n.fromElement)&&(Yt(k)||k[vt]))break e;if((b||f)&&(f=y.window===y?y:(f=y.ownerDocument)?f.defaultView||f.parentWindow:window,b?(k=n.relatedTarget||n.toElement,b=m,k=k?Yt(k):null,k!==null&&(oe=qt(k),k!==oe||k.tag!==5&&k.tag!==6)&&(k=null)):(b=null,k=m),b!==k)){if(C=ps,w="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(C=hs,w="onPointerLeave",d="onPointerEnter",u="pointer"),oe=b==null?f:yn(b),p=k==null?f:yn(k),f=new C(w,u+"leave",b,n,y),f.target=oe,f.relatedTarget=p,w=null,Yt(y)===m&&(C=new C(d,u+"enter",k,n,y),C.target=p,C.relatedTarget=oe,w=C),oe=w,b&&k)t:{for(C=b,d=k,u=0,p=C;p;p=fn(p))u++;for(p=0,w=d;w;w=fn(w))p++;for(;0<u-p;)C=fn(C),u--;for(;0<p-u;)d=fn(d),p--;for(;u--;){if(C===d||d!==null&&C===d.alternate)break t;C=fn(C),d=fn(d)}C=null}else C=null;b!==null&&_s(v,f,b,C,!1),k!==null&&oe!==null&&_s(v,oe,k,C,!0)}}e:{if(f=m?yn(m):window,b=f.nodeName&&f.nodeName.toLowerCase(),b==="select"||b==="input"&&f.type==="file")var T=Oc;else if(Ss(f))if(xs)T=Pc;else{T=Lc;var A=jc}else(b=f.nodeName)&&b.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=Fc);if(T&&(T=T(e,m))){bs(v,T,n,y);break e}A&&A(e,f,m),e==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&jr(f,"number",f.value)}switch(A=m?yn(m):window,e){case"focusin":(Ss(A)||A.contentEditable==="true")&&(mn=A,oi=m,$n=null);break;case"focusout":$n=oi=mn=null;break;case"mousedown":si=!0;break;case"contextmenu":case"mouseup":case"dragend":si=!1,Os(v,n,y);break;case"selectionchange":if(Nc)break;case"keydown":case"keyup":Os(v,n,y)}var I;if(ni)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else pn?vs(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(fs&&n.locale!=="ko"&&(pn||O!=="onCompositionStart"?O==="onCompositionEnd"&&pn&&(I=cs()):(jt=y,Qr="value"in jt?jt.value:jt.textContent,pn=!0)),A=Wa(m,O),0<A.length&&(O=new ms(O,e,null,n,y),v.push({event:O,listeners:A}),I?O.data=I:(I=ws(n),I!==null&&(O.data=I)))),(I=Cc?Tc(e,n):Ac(e,n))&&(m=Wa(m,"onBeforeInput"),0<m.length&&(y=new ms("onBeforeInput","beforeinput",null,n,y),v.push({event:y,listeners:m}),y.data=I))}Bs(v,t)})}function ea(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wa(e,t){for(var n=t+"Capture",a=[];e!==null;){var r=e,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=Dn(e,n),i!=null&&a.unshift(ea(e,i,r)),i=Dn(e,t),i!=null&&a.push(ea(e,i,r))),e=e.return}return a}function fn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _s(e,t,n,a,r){for(var i=t._reactName,o=[];n!==null&&n!==a;){var s=n,l=s.alternate,m=s.stateNode;if(l!==null&&l===a)break;s.tag===5&&m!==null&&(s=m,r?(l=Dn(n,i),l!=null&&o.unshift(ea(n,l,s))):r||(l=Dn(n,i),l!=null&&o.push(ea(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var _c=/\r\n?/g,Uc=/\u0000|\uFFFD/g;function Us(e){return(typeof e=="string"?e:""+e).replace(_c,`
`).replace(Uc,"")}function _a(e,t,n){if(t=Us(t),Us(e)!==t&&n)throw Error(h(425))}function Ua(){}var mi=null,hi=null;function fi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gi=typeof setTimeout=="function"?setTimeout:void 0,zc=typeof clearTimeout=="function"?clearTimeout:void 0,zs=typeof Promise=="function"?Promise:void 0,Vc=typeof queueMicrotask=="function"?queueMicrotask:typeof zs<"u"?function(e){return zs.resolve(null).then(e).catch(Hc)}:gi;function Hc(e){setTimeout(function(){throw e})}function yi(e,t){var n=t,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(a===0){e.removeChild(r),Vn(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=r}while(n);Vn(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Vs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var gn=Math.random().toString(36).slice(2),pt="__reactFiber$"+gn,ta="__reactProps$"+gn,vt="__reactContainer$"+gn,vi="__reactEvents$"+gn,Gc="__reactListeners$"+gn,qc="__reactHandles$"+gn;function Yt(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Vs(e);e!==null;){if(n=e[pt])return n;e=Vs(e)}return t}e=n,n=e.parentNode}return null}function na(e){return e=e[pt]||e[vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function za(e){return e[ta]||null}var wi=[],vn=-1;function Pt(e){return{current:e}}function K(e){0>vn||(e.current=wi[vn],wi[vn]=null,vn--)}function G(e,t){vn++,wi[vn]=e.current,e.current=t}var Dt={},Se=Pt(Dt),je=Pt(!1),Kt=Dt;function wn(e,t){var n=e.type.contextTypes;if(!n)return Dt;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in n)r[i]=t[i];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function Le(e){return e=e.childContextTypes,e!=null}function Va(){K(je),K(Se)}function Hs(e,t,n){if(Se.current!==Dt)throw Error(h(168));G(Se,t),G(je,n)}function Gs(e,t,n){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var r in a)if(!(r in t))throw Error(h(108,H(e)||"Unknown",r));return E({},n,a)}function Ha(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dt,Kt=Se.current,G(Se,e),G(je,je.current),!0}function qs(e,t,n){var a=e.stateNode;if(!a)throw Error(h(169));n?(e=Gs(e,t,Kt),a.__reactInternalMemoizedMergedChildContext=e,K(je),K(Se),G(Se,e)):K(je),G(je,n)}var wt=null,Ga=!1,Si=!1;function Ys(e){wt===null?wt=[e]:wt.push(e)}function Yc(e){Ga=!0,Ys(e)}function Rt(){if(!Si&&wt!==null){Si=!0;var e=0,t=U;try{var n=wt;for(U=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}wt=null,Ga=!1}catch(r){throw wt!==null&&(wt=wt.slice(e+1)),Qo(Ur,Rt),r}finally{U=t,Si=!1}}return null}var Sn=[],bn=0,qa=null,Ya=0,Ge=[],qe=0,Qt=null,St=1,bt="";function $t(e,t){Sn[bn++]=Ya,Sn[bn++]=qa,qa=e,Ya=t}function Ks(e,t,n){Ge[qe++]=St,Ge[qe++]=bt,Ge[qe++]=Qt,Qt=e;var a=St;e=bt;var r=32-tt(a)-1;a&=~(1<<r),n+=1;var i=32-tt(t)+r;if(30<i){var o=r-r%5;i=(a&(1<<o)-1).toString(32),a>>=o,r-=o,St=1<<32-tt(t)+r|n<<r|a,bt=i+e}else St=1<<i|n<<r|a,bt=e}function bi(e){e.return!==null&&($t(e,1),Ks(e,1,0))}function xi(e){for(;e===qa;)qa=Sn[--bn],Sn[bn]=null,Ya=Sn[--bn],Sn[bn]=null;for(;e===Qt;)Qt=Ge[--qe],Ge[qe]=null,bt=Ge[--qe],Ge[qe]=null,St=Ge[--qe],Ge[qe]=null}var We=null,_e=null,Z=!1,at=null;function Qs(e,t){var n=$e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $s(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,We=e,_e=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,We=e,_e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qt!==null?{id:St,overflow:bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,We=e,_e=null,!0):!1;default:return!1}}function Ei(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ki(e){if(Z){var t=_e;if(t){var n=t;if(!$s(e,t)){if(Ei(e))throw Error(h(418));t=Ft(n.nextSibling);var a=We;t&&$s(e,t)?Qs(a,n):(e.flags=e.flags&-4097|2,Z=!1,We=e)}}else{if(Ei(e))throw Error(h(418));e.flags=e.flags&-4097|2,Z=!1,We=e}}}function Xs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;We=e}function Ka(e){if(e!==We)return!1;if(!Z)return Xs(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!fi(e.type,e.memoizedProps)),t&&(t=_e)){if(Ei(e))throw Zs(),Error(h(418));for(;t;)Qs(e,t),t=Ft(t.nextSibling)}if(Xs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_e=Ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_e=null}}else _e=We?Ft(e.stateNode.nextSibling):null;return!0}function Zs(){for(var e=_e;e;)e=Ft(e.nextSibling)}function xn(){_e=We=null,Z=!1}function Ci(e){at===null?at=[e]:at.push(e)}var Kc=we.ReactCurrentBatchConfig;function aa(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(h(309));var a=n.stateNode}if(!a)throw Error(h(147,e));var r=a,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=r.refs;o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(h(284));if(!n._owner)throw Error(h(290,e))}return e}function Qa(e,t){throw e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function el(e){var t=e._init;return t(e._payload)}function tl(e){function t(d,u){if(e){var p=d.deletions;p===null?(d.deletions=[u],d.flags|=16):p.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function a(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function r(d,u){return d=Vt(d,u),d.index=0,d.sibling=null,d}function i(d,u,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<u?(d.flags|=2,u):p):(d.flags|=2,u)):(d.flags|=1048576,u)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,u,p,w){return u===null||u.tag!==6?(u=yo(p,d.mode,w),u.return=d,u):(u=r(u,p),u.return=d,u)}function l(d,u,p,w){var T=p.type;return T===Me?y(d,u,p.props.children,w,p.key):u!==null&&(u.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Oe&&el(T)===u.type)?(w=r(u,p.props),w.ref=aa(d,u,p),w.return=d,w):(w=Sr(p.type,p.key,p.props,null,d.mode,w),w.ref=aa(d,u,p),w.return=d,w)}function m(d,u,p,w){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=vo(p,d.mode,w),u.return=d,u):(u=r(u,p.children||[]),u.return=d,u)}function y(d,u,p,w,T){return u===null||u.tag!==7?(u=on(p,d.mode,w,T),u.return=d,u):(u=r(u,p),u.return=d,u)}function v(d,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=yo(""+u,d.mode,p),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Ze:return p=Sr(u.type,u.key,u.props,null,d.mode,p),p.ref=aa(d,null,u),p.return=d,p;case Ce:return u=vo(u,d.mode,p),u.return=d,u;case Oe:var w=u._init;return v(d,w(u._payload),p)}if(Ln(u)||M(u))return u=on(u,d.mode,p,null),u.return=d,u;Qa(d,u)}return null}function f(d,u,p,w){var T=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return T!==null?null:s(d,u,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ze:return p.key===T?l(d,u,p,w):null;case Ce:return p.key===T?m(d,u,p,w):null;case Oe:return T=p._init,f(d,u,T(p._payload),w)}if(Ln(p)||M(p))return T!==null?null:y(d,u,p,w,null);Qa(d,p)}return null}function b(d,u,p,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(p)||null,s(u,d,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ze:return d=d.get(w.key===null?p:w.key)||null,l(u,d,w,T);case Ce:return d=d.get(w.key===null?p:w.key)||null,m(u,d,w,T);case Oe:var A=w._init;return b(d,u,p,A(w._payload),T)}if(Ln(w)||M(w))return d=d.get(p)||null,y(u,d,w,T,null);Qa(u,w)}return null}function k(d,u,p,w){for(var T=null,A=null,I=u,O=u=0,he=null;I!==null&&O<p.length;O++){I.index>O?(he=I,I=null):he=I.sibling;var B=f(d,I,p[O],w);if(B===null){I===null&&(I=he);break}e&&I&&B.alternate===null&&t(d,I),u=i(B,u,O),A===null?T=B:A.sibling=B,A=B,I=he}if(O===p.length)return n(d,I),Z&&$t(d,O),T;if(I===null){for(;O<p.length;O++)I=v(d,p[O],w),I!==null&&(u=i(I,u,O),A===null?T=I:A.sibling=I,A=I);return Z&&$t(d,O),T}for(I=a(d,I);O<p.length;O++)he=b(I,d,O,p[O],w),he!==null&&(e&&he.alternate!==null&&I.delete(he.key===null?O:he.key),u=i(he,u,O),A===null?T=he:A.sibling=he,A=he);return e&&I.forEach(function(Ht){return t(d,Ht)}),Z&&$t(d,O),T}function C(d,u,p,w){var T=M(p);if(typeof T!="function")throw Error(h(150));if(p=T.call(p),p==null)throw Error(h(151));for(var A=T=null,I=u,O=u=0,he=null,B=p.next();I!==null&&!B.done;O++,B=p.next()){I.index>O?(he=I,I=null):he=I.sibling;var Ht=f(d,I,B.value,w);if(Ht===null){I===null&&(I=he);break}e&&I&&Ht.alternate===null&&t(d,I),u=i(Ht,u,O),A===null?T=Ht:A.sibling=Ht,A=Ht,I=he}if(B.done)return n(d,I),Z&&$t(d,O),T;if(I===null){for(;!B.done;O++,B=p.next())B=v(d,B.value,w),B!==null&&(u=i(B,u,O),A===null?T=B:A.sibling=B,A=B);return Z&&$t(d,O),T}for(I=a(d,I);!B.done;O++,B=p.next())B=b(I,d,O,B.value,w),B!==null&&(e&&B.alternate!==null&&I.delete(B.key===null?O:B.key),u=i(B,u,O),A===null?T=B:A.sibling=B,A=B);return e&&I.forEach(function(Id){return t(d,Id)}),Z&&$t(d,O),T}function oe(d,u,p,w){if(typeof p=="object"&&p!==null&&p.type===Me&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Ze:e:{for(var T=p.key,A=u;A!==null;){if(A.key===T){if(T=p.type,T===Me){if(A.tag===7){n(d,A.sibling),u=r(A,p.props.children),u.return=d,d=u;break e}}else if(A.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Oe&&el(T)===A.type){n(d,A.sibling),u=r(A,p.props),u.ref=aa(d,A,p),u.return=d,d=u;break e}n(d,A);break}else t(d,A);A=A.sibling}p.type===Me?(u=on(p.props.children,d.mode,w,p.key),u.return=d,d=u):(w=Sr(p.type,p.key,p.props,null,d.mode,w),w.ref=aa(d,u,p),w.return=d,d=w)}return o(d);case Ce:e:{for(A=p.key;u!==null;){if(u.key===A)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(d,u.sibling),u=r(u,p.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=vo(p,d.mode,w),u.return=d,d=u}return o(d);case Oe:return A=p._init,oe(d,u,A(p._payload),w)}if(Ln(p))return k(d,u,p,w);if(M(p))return C(d,u,p,w);Qa(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(d,u.sibling),u=r(u,p),u.return=d,d=u):(n(d,u),u=yo(p,d.mode,w),u.return=d,d=u),o(d)):n(d,u)}return oe}var En=tl(!0),nl=tl(!1),$a=Pt(null),Xa=null,kn=null,Ti=null;function Ai(){Ti=kn=Xa=null}function Ii(e){var t=$a.current;K($a),e._currentValue=t}function Mi(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Cn(e,t){Xa=e,Ti=kn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Fe=!0),e.firstContext=null)}function Ye(e){var t=e._currentValue;if(Ti!==e)if(e={context:e,memoizedValue:t,next:null},kn===null){if(Xa===null)throw Error(h(308));kn=e,Xa.dependencies={lanes:0,firstContext:e}}else kn=kn.next=e;return t}var Xt=null;function Oi(e){Xt===null?Xt=[e]:Xt.push(e)}function al(e,t,n,a){var r=t.interleaved;return r===null?(n.next=n,Oi(t)):(n.next=r.next,r.next=n),t.interleaved=n,xt(e,a)}function xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Nt=!1;function ji(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Jt(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(R&2)!==0){var r=a.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),a.pending=t,xt(e,n)}return r=a.interleaved,r===null?(t.next=t,Oi(a)):(t.next=r.next,r.next=t),a.interleaved=t,xt(e,n)}function Za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Hr(e,n)}}function il(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var r=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?r=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?r=i=t:i=i.next=t}else r=i=t;n={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function er(e,t,n,a){var r=e.updateQueue;Nt=!1;var i=r.firstBaseUpdate,o=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var l=s,m=l.next;l.next=null,o===null?i=m:o.next=m,o=l;var y=e.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==o&&(s===null?y.firstBaseUpdate=m:s.next=m,y.lastBaseUpdate=l))}if(i!==null){var v=r.baseState;o=0,y=m=l=null,s=i;do{var f=s.lane,b=s.eventTime;if((a&f)===f){y!==null&&(y=y.next={eventTime:b,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,C=s;switch(f=t,b=n,C.tag){case 1:if(k=C.payload,typeof k=="function"){v=k.call(b,v,f);break e}v=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=C.payload,f=typeof k=="function"?k.call(b,v,f):k,f==null)break e;v=E({},v,f);break e;case 2:Nt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=r.effects,f===null?r.effects=[s]:f.push(s))}else b={eventTime:b,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(m=y=b,l=v):y=y.next=b,o|=f;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;f=s,s=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(y===null&&(l=v),r.baseState=l,r.firstBaseUpdate=m,r.lastBaseUpdate=y,t=r.shared.interleaved,t!==null){r=t;do o|=r.lane,r=r.next;while(r!==t)}else i===null&&(r.shared.lanes=0);tn|=o,e.lanes=o,e.memoizedState=v}}function ol(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],r=a.callback;if(r!==null){if(a.callback=null,a=n,typeof r!="function")throw Error(h(191,r));r.call(a)}}}var ra={},mt=Pt(ra),ia=Pt(ra),oa=Pt(ra);function Zt(e){if(e===ra)throw Error(h(174));return e}function Li(e,t){switch(G(oa,t),G(ia,e),G(mt,ra),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fr(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Fr(t,e)}K(mt),G(mt,t)}function Tn(){K(mt),K(ia),K(oa)}function sl(e){Zt(oa.current);var t=Zt(mt.current),n=Fr(t,e.type);t!==n&&(G(ia,e),G(mt,n))}function Fi(e){ia.current===e&&(K(mt),K(ia))}var te=Pt(0);function tr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Pi=[];function Di(){for(var e=0;e<Pi.length;e++)Pi[e]._workInProgressVersionPrimary=null;Pi.length=0}var nr=we.ReactCurrentDispatcher,Ri=we.ReactCurrentBatchConfig,en=0,ne=null,le=null,pe=null,ar=!1,sa=!1,la=0,Qc=0;function be(){throw Error(h(321))}function Ni(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function Ji(e,t,n,a,r,i){if(en=i,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,nr.current=e===null||e.memoizedState===null?ed:td,e=n(a,r),sa){i=0;do{if(sa=!1,la=0,25<=i)throw Error(h(301));i+=1,pe=le=null,t.updateQueue=null,nr.current=nd,e=n(a,r)}while(sa)}if(nr.current=or,t=le!==null&&le.next!==null,en=0,pe=le=ne=null,ar=!1,t)throw Error(h(300));return e}function Bi(){var e=la!==0;return la=0,e}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?ne.memoizedState=pe=e:pe=pe.next=e,pe}function Ke(){if(le===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=pe===null?ne.memoizedState:pe.next;if(t!==null)pe=t,le=e;else{if(e===null)throw Error(h(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},pe===null?ne.memoizedState=pe=e:pe=pe.next=e}return pe}function ua(e,t){return typeof t=="function"?t(e):t}function Wi(e){var t=Ke(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var a=le,r=a.baseQueue,i=n.pending;if(i!==null){if(r!==null){var o=r.next;r.next=i.next,i.next=o}a.baseQueue=r=i,n.pending=null}if(r!==null){i=r.next,a=a.baseState;var s=o=null,l=null,m=i;do{var y=m.lane;if((en&y)===y)l!==null&&(l=l.next={lane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),a=m.hasEagerState?m.eagerState:e(a,m.action);else{var v={lane:y,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null};l===null?(s=l=v,o=a):l=l.next=v,ne.lanes|=y,tn|=y}m=m.next}while(m!==null&&m!==i);l===null?o=a:l.next=s,nt(a,t.memoizedState)||(Fe=!0),t.memoizedState=a,t.baseState=o,t.baseQueue=l,n.lastRenderedState=a}if(e=n.interleaved,e!==null){r=e;do i=r.lane,ne.lanes|=i,tn|=i,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function _i(e){var t=Ke(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var a=n.dispatch,r=n.pending,i=t.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do i=e(i,o.action),o=o.next;while(o!==r);nt(i,t.memoizedState)||(Fe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function ll(){}function ul(e,t){var n=ne,a=Ke(),r=t(),i=!nt(a.memoizedState,r);if(i&&(a.memoizedState=r,Fe=!0),a=a.queue,Ui(pl.bind(null,n,a,e),[e]),a.getSnapshot!==t||i||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,ca(9,dl.bind(null,n,a,r,t),void 0,null),me===null)throw Error(h(349));(en&30)!==0||cl(n,t,r)}return r}function cl(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function dl(e,t,n,a){t.value=n,t.getSnapshot=a,ml(t)&&hl(e)}function pl(e,t,n){return n(function(){ml(t)&&hl(e)})}function ml(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function hl(e){var t=xt(e,1);t!==null&&st(t,e,1,-1)}function fl(e){var t=ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:e},t.queue=e,e=e.dispatch=Zc.bind(null,ne,e),[t.memoizedState,e]}function ca(e,t,n,a){return e={tag:e,create:t,destroy:n,deps:a,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e)),e}function gl(){return Ke().memoizedState}function rr(e,t,n,a){var r=ht();ne.flags|=e,r.memoizedState=ca(1|t,n,void 0,a===void 0?null:a)}function ir(e,t,n,a){var r=Ke();a=a===void 0?null:a;var i=void 0;if(le!==null){var o=le.memoizedState;if(i=o.destroy,a!==null&&Ni(a,o.deps)){r.memoizedState=ca(t,n,i,a);return}}ne.flags|=e,r.memoizedState=ca(1|t,n,i,a)}function yl(e,t){return rr(8390656,8,e,t)}function Ui(e,t){return ir(2048,8,e,t)}function vl(e,t){return ir(4,2,e,t)}function wl(e,t){return ir(4,4,e,t)}function Sl(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bl(e,t,n){return n=n!=null?n.concat([e]):null,ir(4,4,Sl.bind(null,t,e),n)}function zi(){}function xl(e,t){var n=Ke();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&Ni(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function El(e,t){var n=Ke();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&Ni(t,a[1])?a[0]:(e=e(),n.memoizedState=[e,t],e)}function kl(e,t,n){return(en&21)===0?(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=n):(nt(n,t)||(n=es(),ne.lanes|=n,tn|=n,e.baseState=!0),t)}function $c(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var a=Ri.transition;Ri.transition={};try{e(!1),t()}finally{U=n,Ri.transition=a}}function Cl(){return Ke().memoizedState}function Xc(e,t,n){var a=Ut(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},Tl(e))Al(t,n);else if(n=al(e,t,n,a),n!==null){var r=Ae();st(n,e,a,r),Il(n,t,a)}}function Zc(e,t,n){var a=Ut(e),r={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tl(e))Al(t,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(r.hasEagerState=!0,r.eagerState=s,nt(s,o)){var l=t.interleaved;l===null?(r.next=r,Oi(t)):(r.next=l.next,l.next=r),t.interleaved=r;return}}catch{}finally{}n=al(e,t,r,a),n!==null&&(r=Ae(),st(n,e,a,r),Il(n,t,a))}}function Tl(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function Al(e,t){sa=ar=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Il(e,t,n){if((n&4194240)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Hr(e,n)}}var or={readContext:Ye,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},ed={readContext:Ye,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:yl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,rr(4194308,4,Sl.bind(null,t,e),n)},useLayoutEffect:function(e,t){return rr(4194308,4,e,t)},useInsertionEffect:function(e,t){return rr(4,2,e,t)},useMemo:function(e,t){var n=ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var a=ht();return t=n!==void 0?n(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=Xc.bind(null,ne,e),[a.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:fl,useDebugValue:zi,useDeferredValue:function(e){return ht().memoizedState=e},useTransition:function(){var e=fl(!1),t=e[0];return e=$c.bind(null,e[1]),ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var a=ne,r=ht();if(Z){if(n===void 0)throw Error(h(407));n=n()}else{if(n=t(),me===null)throw Error(h(349));(en&30)!==0||cl(a,t,n)}r.memoizedState=n;var i={value:n,getSnapshot:t};return r.queue=i,yl(pl.bind(null,a,i,e),[e]),a.flags|=2048,ca(9,dl.bind(null,a,i,n,t),void 0,null),n},useId:function(){var e=ht(),t=me.identifierPrefix;if(Z){var n=bt,a=St;n=(a&~(1<<32-tt(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=la++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Qc++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},td={readContext:Ye,useCallback:xl,useContext:Ye,useEffect:Ui,useImperativeHandle:bl,useInsertionEffect:vl,useLayoutEffect:wl,useMemo:El,useReducer:Wi,useRef:gl,useState:function(){return Wi(ua)},useDebugValue:zi,useDeferredValue:function(e){var t=Ke();return kl(t,le.memoizedState,e)},useTransition:function(){var e=Wi(ua)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:ll,useSyncExternalStore:ul,useId:Cl,unstable_isNewReconciler:!1},nd={readContext:Ye,useCallback:xl,useContext:Ye,useEffect:Ui,useImperativeHandle:bl,useInsertionEffect:vl,useLayoutEffect:wl,useMemo:El,useReducer:_i,useRef:gl,useState:function(){return _i(ua)},useDebugValue:zi,useDeferredValue:function(e){var t=Ke();return le===null?t.memoizedState=e:kl(t,le.memoizedState,e)},useTransition:function(){var e=_i(ua)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:ll,useSyncExternalStore:ul,useId:Cl,unstable_isNewReconciler:!1};function rt(e,t){if(e&&e.defaultProps){t=E({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Vi(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:E({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var sr={isMounted:function(e){return(e=e._reactInternals)?qt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Ae(),r=Ut(e),i=Et(a,r);i.payload=t,n!=null&&(i.callback=n),t=Jt(e,i,r),t!==null&&(st(t,e,r,a),Za(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Ae(),r=Ut(e),i=Et(a,r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Jt(e,i,r),t!==null&&(st(t,e,r,a),Za(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ae(),a=Ut(e),r=Et(n,a);r.tag=2,t!=null&&(r.callback=t),t=Jt(e,r,a),t!==null&&(st(t,e,a,n),Za(t,e,a))}};function Ml(e,t,n,a,r,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,o):t.prototype&&t.prototype.isPureReactComponent?!Qn(n,a)||!Qn(r,i):!0}function Ol(e,t,n){var a=!1,r=Dt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ye(i):(r=Le(t)?Kt:Se.current,a=t.contextTypes,i=(a=a!=null)?wn(e,r):Dt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=sr,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),t}function jl(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&sr.enqueueReplaceState(t,t.state,null)}function Hi(e,t,n,a){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},ji(e);var i=t.contextType;typeof i=="object"&&i!==null?r.context=Ye(i):(i=Le(t)?Kt:Se.current,r.context=wn(e,i)),r.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Vi(e,t,i,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&sr.enqueueReplaceState(r,r.state,null),er(e,n,r,a),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function An(e,t){try{var n="",a=t;do n+=N(a),a=a.return;while(a);var r=n}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:r,digest:null}}function Gi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function qi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ad=typeof WeakMap=="function"?WeakMap:Map;function Ll(e,t,n){n=Et(-1,n),n.tag=3,n.payload={element:null};var a=t.value;return n.callback=function(){hr||(hr=!0,lo=a),qi(e,t)},n}function Fl(e,t,n){n=Et(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var r=t.value;n.payload=function(){return a(r)},n.callback=function(){qi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){qi(e,t),typeof a!="function"&&(Wt===null?Wt=new Set([this]):Wt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Pl(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new ad;var r=new Set;a.set(t,r)}else r=a.get(t),r===void 0&&(r=new Set,a.set(t,r));r.has(n)||(r.add(n),e=yd.bind(null,e,t,n),t.then(e,e))}function Dl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Rl(e,t,n,a,r){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Et(-1,1),t.tag=2,Jt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=r,e)}var rd=we.ReactCurrentOwner,Fe=!1;function Te(e,t,n,a){t.child=e===null?nl(t,null,n,a):En(t,e.child,n,a)}function Nl(e,t,n,a,r){n=n.render;var i=t.ref;return Cn(t,r),a=Ji(e,t,n,a,i,r),n=Bi(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,kt(e,t,r)):(Z&&n&&bi(t),t.flags|=1,Te(e,t,a,r),t.child)}function Jl(e,t,n,a,r){if(e===null){var i=n.type;return typeof i=="function"&&!go(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Bl(e,t,i,a,r)):(e=Sr(n.type,null,a,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&r)===0){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Qn,n(o,a)&&e.ref===t.ref)return kt(e,t,r)}return t.flags|=1,e=Vt(i,a),e.ref=t.ref,e.return=t,t.child=e}function Bl(e,t,n,a,r){if(e!==null){var i=e.memoizedProps;if(Qn(i,a)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=a=i,(e.lanes&r)!==0)(e.flags&131072)!==0&&(Fe=!0);else return t.lanes=e.lanes,kt(e,t,r)}return Yi(e,t,n,a,r)}function Wl(e,t,n){var a=t.pendingProps,r=a.children,i=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(Mn,Ue),Ue|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(Mn,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=i!==null?i.baseLanes:n,G(Mn,Ue),Ue|=a}else i!==null?(a=i.baseLanes|n,t.memoizedState=null):a=n,G(Mn,Ue),Ue|=a;return Te(e,t,r,n),t.child}function _l(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Yi(e,t,n,a,r){var i=Le(n)?Kt:Se.current;return i=wn(t,i),Cn(t,r),n=Ji(e,t,n,a,i,r),a=Bi(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,kt(e,t,r)):(Z&&a&&bi(t),t.flags|=1,Te(e,t,n,r),t.child)}function Ul(e,t,n,a,r){if(Le(n)){var i=!0;Ha(t)}else i=!1;if(Cn(t,r),t.stateNode===null)ur(e,t),Ol(t,n,a),Hi(t,n,a,r),a=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,m=n.contextType;typeof m=="object"&&m!==null?m=Ye(m):(m=Le(n)?Kt:Se.current,m=wn(t,m));var y=n.getDerivedStateFromProps,v=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function";v||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==a||l!==m)&&jl(t,o,a,m),Nt=!1;var f=t.memoizedState;o.state=f,er(t,a,o,r),l=t.memoizedState,s!==a||f!==l||je.current||Nt?(typeof y=="function"&&(Vi(t,n,y,a),l=t.memoizedState),(s=Nt||Ml(t,n,s,a,f,l,m))?(v||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=l),o.props=a,o.state=l,o.context=m,a=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{o=t.stateNode,rl(e,t),s=t.memoizedProps,m=t.type===t.elementType?s:rt(t.type,s),o.props=m,v=t.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ye(l):(l=Le(n)?Kt:Se.current,l=wn(t,l));var b=n.getDerivedStateFromProps;(y=typeof b=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==v||f!==l)&&jl(t,o,a,l),Nt=!1,f=t.memoizedState,o.state=f,er(t,a,o,r);var k=t.memoizedState;s!==v||f!==k||je.current||Nt?(typeof b=="function"&&(Vi(t,n,b,a),k=t.memoizedState),(m=Nt||Ml(t,n,m,a,f,k,l)||!1)?(y||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,k,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,k,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=k),o.props=a,o.state=k,o.context=l,a=m):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),a=!1)}return Ki(e,t,n,a,i,r)}function Ki(e,t,n,a,r,i){_l(e,t);var o=(t.flags&128)!==0;if(!a&&!o)return r&&qs(t,n,!1),kt(e,t,i);a=t.stateNode,rd.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&o?(t.child=En(t,e.child,null,i),t.child=En(t,null,s,i)):Te(e,t,s,i),t.memoizedState=a.state,r&&qs(t,n,!0),t.child}function zl(e){var t=e.stateNode;t.pendingContext?Hs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Hs(e,t.context,!1),Li(e,t.containerInfo)}function Vl(e,t,n,a,r){return xn(),Ci(r),t.flags|=256,Te(e,t,n,a),t.child}var Qi={dehydrated:null,treeContext:null,retryLane:0};function $i(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hl(e,t,n){var a=t.pendingProps,r=te.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(r&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),G(te,r&1),e===null)return ki(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=a.children,e=a.fallback,i?(a=t.mode,i=t.child,o={mode:"hidden",children:o},(a&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=o):i=br(o,a,0,null),e=on(e,a,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=$i(n),t.memoizedState=Qi,e):Xi(t,o));if(r=e.memoizedState,r!==null&&(s=r.dehydrated,s!==null))return id(e,t,o,a,s,r,n);if(i){i=a.fallback,o=t.mode,r=e.child,s=r.sibling;var l={mode:"hidden",children:a.children};return(o&1)===0&&t.child!==r?(a=t.child,a.childLanes=0,a.pendingProps=l,t.deletions=null):(a=Vt(r,l),a.subtreeFlags=r.subtreeFlags&14680064),s!==null?i=Vt(s,i):(i=on(i,o,n,null),i.flags|=2),i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,o=e.child.memoizedState,o=o===null?$i(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Qi,a}return i=e.child,e=i.sibling,a=Vt(i,{mode:"visible",children:a.children}),(t.mode&1)===0&&(a.lanes=n),a.return=t,a.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Xi(e,t){return t=br({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function lr(e,t,n,a){return a!==null&&Ci(a),En(t,e.child,null,n),e=Xi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function id(e,t,n,a,r,i,o){if(n)return t.flags&256?(t.flags&=-257,a=Gi(Error(h(422))),lr(e,t,o,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=a.fallback,r=t.mode,a=br({mode:"visible",children:a.children},r,0,null),i=on(i,r,o,null),i.flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,(t.mode&1)!==0&&En(t,e.child,null,o),t.child.memoizedState=$i(o),t.memoizedState=Qi,i);if((t.mode&1)===0)return lr(e,t,o,null);if(r.data==="$!"){if(a=r.nextSibling&&r.nextSibling.dataset,a)var s=a.dgst;return a=s,i=Error(h(419)),a=Gi(i,a,void 0),lr(e,t,o,a)}if(s=(o&e.childLanes)!==0,Fe||s){if(a=me,a!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(a.suspendedLanes|o))!==0?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,xt(e,r),st(a,e,r,-1))}return fo(),a=Gi(Error(h(421))),lr(e,t,o,a)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=vd.bind(null,e),r._reactRetry=t,null):(e=i.treeContext,_e=Ft(r.nextSibling),We=t,Z=!0,at=null,e!==null&&(Ge[qe++]=St,Ge[qe++]=bt,Ge[qe++]=Qt,St=e.id,bt=e.overflow,Qt=t),t=Xi(t,a.children),t.flags|=4096,t)}function Gl(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Mi(e.return,t,n)}function Zi(e,t,n,a,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:r}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=n,i.tailMode=r)}function ql(e,t,n){var a=t.pendingProps,r=a.revealOrder,i=a.tail;if(Te(e,t,a.children,n),a=te.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gl(e,n,t);else if(e.tag===19)Gl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(G(te,a),(t.mode&1)===0)t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&tr(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Zi(t,!1,r,n,i);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&tr(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Zi(t,!0,n,null,i);break;case"together":Zi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ur(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function kt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,n=Vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function od(e,t,n){switch(t.tag){case 3:zl(t),xn();break;case 5:sl(t);break;case 1:Le(t.type)&&Ha(t);break;case 4:Li(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,r=t.memoizedProps.value;G($a,a._currentValue),a._currentValue=r;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(G(te,te.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Hl(e,t,n):(G(te,te.current&1),e=kt(e,t,n),e!==null?e.sibling:null);G(te,te.current&1);break;case 19:if(a=(n&t.childLanes)!==0,(e.flags&128)!==0){if(a)return ql(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),G(te,te.current),a)break;return null;case 22:case 23:return t.lanes=0,Wl(e,t,n)}return kt(e,t,n)}var Yl,eo,Kl,Ql;Yl=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},eo=function(){},Kl=function(e,t,n,a){var r=e.memoizedProps;if(r!==a){e=t.stateNode,Zt(mt.current);var i=null;switch(n){case"input":r=Mr(e,r),a=Mr(e,a),i=[];break;case"select":r=E({},r,{value:void 0}),a=E({},a,{value:void 0}),i=[];break;case"textarea":r=Lr(e,r),a=Lr(e,a),i=[];break;default:typeof r.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Ua)}Pr(n,a);var o;n=null;for(m in r)if(!a.hasOwnProperty(m)&&r.hasOwnProperty(m)&&r[m]!=null)if(m==="style"){var s=r[m];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else m!=="dangerouslySetInnerHTML"&&m!=="children"&&m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(L.hasOwnProperty(m)?i||(i=[]):(i=i||[]).push(m,null));for(m in a){var l=a[m];if(s=r!=null?r[m]:void 0,a.hasOwnProperty(m)&&l!==s&&(l!=null||s!=null))if(m==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(i||(i=[]),i.push(m,n)),n=l;else m==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(m,l)):m==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(m,""+l):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&(L.hasOwnProperty(m)?(l!=null&&m==="onScroll"&&Y("scroll",e),i||s===l||(i=[])):(i=i||[]).push(m,l))}n&&(i=i||[]).push("style",n);var m=i;(t.updateQueue=m)&&(t.flags|=4)}},Ql=function(e,t,n,a){n!==a&&(t.flags|=4)};function da(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags&14680064,a|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function sd(e,t,n){var a=t.pendingProps;switch(xi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(t),null;case 1:return Le(t.type)&&Va(),xe(t),null;case 3:return a=t.stateNode,Tn(),K(je),K(Se),Di(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ka(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,at!==null&&(po(at),at=null))),eo(e,t),xe(t),null;case 5:Fi(t);var r=Zt(oa.current);if(n=t.type,e!==null&&t.stateNode!=null)Kl(e,t,n,a,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(h(166));return xe(t),null}if(e=Zt(mt.current),Ka(t)){a=t.stateNode,n=t.type;var i=t.memoizedProps;switch(a[pt]=t,a[ta]=i,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",a),Y("close",a);break;case"iframe":case"object":case"embed":Y("load",a);break;case"video":case"audio":for(r=0;r<Xn.length;r++)Y(Xn[r],a);break;case"source":Y("error",a);break;case"img":case"image":case"link":Y("error",a),Y("load",a);break;case"details":Y("toggle",a);break;case"input":Oo(a,i),Y("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!i.multiple},Y("invalid",a);break;case"textarea":Fo(a,i),Y("invalid",a)}Pr(n,i),r=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?a.textContent!==s&&(i.suppressHydrationWarning!==!0&&_a(a.textContent,s,e),r=["children",s]):typeof s=="number"&&a.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&_a(a.textContent,s,e),r=["children",""+s]):L.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&Y("scroll",a)}switch(n){case"input":va(a),Lo(a,i,!0);break;case"textarea":va(a),Do(a);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(a.onclick=Ua)}a=r,t.updateQueue=a,a!==null&&(t.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ro(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=o.createElement(n,{is:a.is}):(e=o.createElement(n),n==="select"&&(o=e,a.multiple?o.multiple=!0:a.size&&(o.size=a.size))):e=o.createElementNS(e,n),e[pt]=t,e[ta]=a,Yl(e,t,!1,!1),t.stateNode=e;e:{switch(o=Dr(n,a),n){case"dialog":Y("cancel",e),Y("close",e),r=a;break;case"iframe":case"object":case"embed":Y("load",e),r=a;break;case"video":case"audio":for(r=0;r<Xn.length;r++)Y(Xn[r],e);r=a;break;case"source":Y("error",e),r=a;break;case"img":case"image":case"link":Y("error",e),Y("load",e),r=a;break;case"details":Y("toggle",e),r=a;break;case"input":Oo(e,a),r=Mr(e,a),Y("invalid",e);break;case"option":r=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},r=E({},a,{value:void 0}),Y("invalid",e);break;case"textarea":Fo(e,a),r=Lr(e,a),Y("invalid",e);break;default:r=a}Pr(n,r),s=r;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?Bo(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&No(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Fn(e,l):typeof l=="number"&&Fn(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(L.hasOwnProperty(i)?l!=null&&i==="onScroll"&&Y("scroll",e):l!=null&&Xe(e,i,l,o))}switch(n){case"input":va(e),Lo(e,a,!1);break;case"textarea":va(e),Do(e);break;case"option":a.value!=null&&e.setAttribute("value",""+_(a.value));break;case"select":e.multiple=!!a.multiple,i=a.value,i!=null?sn(e,!!a.multiple,i,!1):a.defaultValue!=null&&sn(e,!!a.multiple,a.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Ua)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return xe(t),null;case 6:if(e&&t.stateNode!=null)Ql(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(h(166));if(n=Zt(oa.current),Zt(mt.current),Ka(t)){if(a=t.stateNode,n=t.memoizedProps,a[pt]=t,(i=a.nodeValue!==n)&&(e=We,e!==null))switch(e.tag){case 3:_a(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_a(a.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[pt]=t,t.stateNode=a}return xe(t),null;case 13:if(K(te),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&_e!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Zs(),xn(),t.flags|=98560,i=!1;else if(i=Ka(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(h(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(h(317));i[pt]=t}else xn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;xe(t),i=!1}else at!==null&&(po(at),at=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(te.current&1)!==0?ue===0&&(ue=3):fo())),t.updateQueue!==null&&(t.flags|=4),xe(t),null);case 4:return Tn(),eo(e,t),e===null&&Zn(t.stateNode.containerInfo),xe(t),null;case 10:return Ii(t.type._context),xe(t),null;case 17:return Le(t.type)&&Va(),xe(t),null;case 19:if(K(te),i=t.memoizedState,i===null)return xe(t),null;if(a=(t.flags&128)!==0,o=i.rendering,o===null)if(a)da(i,!1);else{if(ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=tr(e),o!==null){for(t.flags|=128,da(i,!1),a=o.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=n,n=t.child;n!==null;)i=n,e=a,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(te,te.current&1|2),t.child}e=e.sibling}i.tail!==null&&ie()>On&&(t.flags|=128,a=!0,da(i,!1),t.lanes=4194304)}else{if(!a)if(e=tr(o),e!==null){if(t.flags|=128,a=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),da(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Z)return xe(t),null}else 2*ie()-i.renderingStartTime>On&&n!==1073741824&&(t.flags|=128,a=!0,da(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ie(),t.sibling=null,n=te.current,G(te,a?n&1|2:n&1),t):(xe(t),null);case 22:case 23:return ho(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(Ue&1073741824)!==0&&(xe(t),t.subtreeFlags&6&&(t.flags|=8192)):xe(t),null;case 24:return null;case 25:return null}throw Error(h(156,t.tag))}function ld(e,t){switch(xi(t),t.tag){case 1:return Le(t.type)&&Va(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tn(),K(je),K(Se),Di(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Fi(t),null;case 13:if(K(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));xn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(te),null;case 4:return Tn(),null;case 10:return Ii(t.type._context),null;case 22:case 23:return ho(),null;case 24:return null;default:return null}}var cr=!1,Ee=!1,ud=typeof WeakSet=="function"?WeakSet:Set,x=null;function In(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){re(e,t,a)}else n.current=null}function to(e,t,n){try{n()}catch(a){re(e,t,a)}}var $l=!1;function cd(e,t){if(mi=Oa,e=Ms(),ii(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var r=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,m=0,y=0,v=e,f=null;t:for(;;){for(var b;v!==n||r!==0&&v.nodeType!==3||(s=o+r),v!==i||a!==0&&v.nodeType!==3||(l=o+a),v.nodeType===3&&(o+=v.nodeValue.length),(b=v.firstChild)!==null;)f=v,v=b;for(;;){if(v===e)break t;if(f===n&&++m===r&&(s=o),f===i&&++y===a&&(l=o),(b=v.nextSibling)!==null)break;v=f,f=v.parentNode}v=b}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(hi={focusedElem:e,selectionRange:n},Oa=!1,x=t;x!==null;)if(t=x,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,x=e;else for(;x!==null;){t=x;try{var k=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var C=k.memoizedProps,oe=k.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?C:rt(t.type,C),oe);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(w){re(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,x=e;break}x=t.return}return k=$l,$l=!1,k}function pa(e,t,n){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var r=a=a.next;do{if((r.tag&e)===e){var i=r.destroy;r.destroy=void 0,i!==void 0&&to(t,n,i)}r=r.next}while(r!==a)}}function dr(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==t)}}function no(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Xl(e){var t=e.alternate;t!==null&&(e.alternate=null,Xl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[ta],delete t[vi],delete t[Gc],delete t[qc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Zl(e){return e.tag===5||e.tag===3||e.tag===4}function eu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ao(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ua));else if(a!==4&&(e=e.child,e!==null))for(ao(e,t,n),e=e.sibling;e!==null;)ao(e,t,n),e=e.sibling}function ro(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(ro(e,t,n),e=e.sibling;e!==null;)ro(e,t,n),e=e.sibling}var fe=null,it=!1;function Bt(e,t,n){for(n=n.child;n!==null;)tu(e,t,n),n=n.sibling}function tu(e,t,n){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(ka,n)}catch{}switch(n.tag){case 5:Ee||In(n,t);case 6:var a=fe,r=it;fe=null,Bt(e,t,n),fe=a,it=r,fe!==null&&(it?(e=fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(it?(e=fe,n=n.stateNode,e.nodeType===8?yi(e.parentNode,n):e.nodeType===1&&yi(e,n),Vn(e)):yi(fe,n.stateNode));break;case 4:a=fe,r=it,fe=n.stateNode.containerInfo,it=!0,Bt(e,t,n),fe=a,it=r;break;case 0:case 11:case 14:case 15:if(!Ee&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){r=a=a.next;do{var i=r,o=i.destroy;i=i.tag,o!==void 0&&((i&2)!==0||(i&4)!==0)&&to(n,t,o),r=r.next}while(r!==a)}Bt(e,t,n);break;case 1:if(!Ee&&(In(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(s){re(n,t,s)}Bt(e,t,n);break;case 21:Bt(e,t,n);break;case 22:n.mode&1?(Ee=(a=Ee)||n.memoizedState!==null,Bt(e,t,n),Ee=a):Bt(e,t,n);break;default:Bt(e,t,n)}}function nu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ud),t.forEach(function(a){var r=wd.bind(null,e,a);n.has(a)||(n.add(a),a.then(r,r))})}}function ot(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:fe=s.stateNode,it=!1;break e;case 3:fe=s.stateNode.containerInfo,it=!0;break e;case 4:fe=s.stateNode.containerInfo,it=!0;break e}s=s.return}if(fe===null)throw Error(h(160));tu(i,o,r),fe=null,it=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(m){re(r,t,m)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)au(t,e),t=t.sibling}function au(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ot(t,e),ft(e),a&4){try{pa(3,e,e.return),dr(3,e)}catch(C){re(e,e.return,C)}try{pa(5,e,e.return)}catch(C){re(e,e.return,C)}}break;case 1:ot(t,e),ft(e),a&512&&n!==null&&In(n,n.return);break;case 5:if(ot(t,e),ft(e),a&512&&n!==null&&In(n,n.return),e.flags&32){var r=e.stateNode;try{Fn(r,"")}catch(C){re(e,e.return,C)}}if(a&4&&(r=e.stateNode,r!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&jo(r,i),Dr(s,o);var m=Dr(s,i);for(o=0;o<l.length;o+=2){var y=l[o],v=l[o+1];y==="style"?Bo(r,v):y==="dangerouslySetInnerHTML"?No(r,v):y==="children"?Fn(r,v):Xe(r,y,v,m)}switch(s){case"input":Or(r,i);break;case"textarea":Po(r,i);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var b=i.value;b!=null?sn(r,!!i.multiple,b,!1):f!==!!i.multiple&&(i.defaultValue!=null?sn(r,!!i.multiple,i.defaultValue,!0):sn(r,!!i.multiple,i.multiple?[]:"",!1))}r[ta]=i}catch(C){re(e,e.return,C)}}break;case 6:if(ot(t,e),ft(e),a&4){if(e.stateNode===null)throw Error(h(162));r=e.stateNode,i=e.memoizedProps;try{r.nodeValue=i}catch(C){re(e,e.return,C)}}break;case 3:if(ot(t,e),ft(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Vn(t.containerInfo)}catch(C){re(e,e.return,C)}break;case 4:ot(t,e),ft(e);break;case 13:ot(t,e),ft(e),r=e.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(so=ie())),a&4&&nu(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(Ee=(m=Ee)||y,ot(t,e),Ee=m):ot(t,e),ft(e),a&8192){if(m=e.memoizedState!==null,(e.stateNode.isHidden=m)&&!y&&(e.mode&1)!==0)for(x=e,y=e.child;y!==null;){for(v=x=y;x!==null;){switch(f=x,b=f.child,f.tag){case 0:case 11:case 14:case 15:pa(4,f,f.return);break;case 1:In(f,f.return);var k=f.stateNode;if(typeof k.componentWillUnmount=="function"){a=f,n=f.return;try{t=a,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(C){re(a,n,C)}}break;case 5:In(f,f.return);break;case 22:if(f.memoizedState!==null){ou(v);continue}}b!==null?(b.return=f,x=b):ou(v)}y=y.sibling}e:for(y=null,v=e;;){if(v.tag===5){if(y===null){y=v;try{r=v.stateNode,m?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=v.stateNode,l=v.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Jo("display",o))}catch(C){re(e,e.return,C)}}}else if(v.tag===6){if(y===null)try{v.stateNode.nodeValue=m?"":v.memoizedProps}catch(C){re(e,e.return,C)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;y===v&&(y=null),v=v.return}y===v&&(y=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:ot(t,e),ft(e),a&4&&nu(e);break;case 21:break;default:ot(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Zl(n)){var a=n;break e}n=n.return}throw Error(h(160))}switch(a.tag){case 5:var r=a.stateNode;a.flags&32&&(Fn(r,""),a.flags&=-33);var i=eu(e);ro(e,i,r);break;case 3:case 4:var o=a.stateNode.containerInfo,s=eu(e);ao(e,s,o);break;default:throw Error(h(161))}}catch(l){re(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dd(e,t,n){x=e,ru(e)}function ru(e,t,n){for(var a=(e.mode&1)!==0;x!==null;){var r=x,i=r.child;if(r.tag===22&&a){var o=r.memoizedState!==null||cr;if(!o){var s=r.alternate,l=s!==null&&s.memoizedState!==null||Ee;s=cr;var m=Ee;if(cr=o,(Ee=l)&&!m)for(x=r;x!==null;)o=x,l=o.child,o.tag===22&&o.memoizedState!==null?su(r):l!==null?(l.return=o,x=l):su(r);for(;i!==null;)x=i,ru(i),i=i.sibling;x=r,cr=s,Ee=m}iu(e)}else(r.subtreeFlags&8772)!==0&&i!==null?(i.return=r,x=i):iu(e)}}function iu(e){for(;x!==null;){var t=x;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ee||dr(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!Ee)if(n===null)a.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:rt(t.type,n.memoizedProps);a.componentDidUpdate(r,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ol(t,i,a);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ol(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var m=t.alternate;if(m!==null){var y=m.memoizedState;if(y!==null){var v=y.dehydrated;v!==null&&Vn(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}Ee||t.flags&512&&no(t)}catch(f){re(t,t.return,f)}}if(t===e){x=null;break}if(n=t.sibling,n!==null){n.return=t.return,x=n;break}x=t.return}}function ou(e){for(;x!==null;){var t=x;if(t===e){x=null;break}var n=t.sibling;if(n!==null){n.return=t.return,x=n;break}x=t.return}}function su(e){for(;x!==null;){var t=x;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{dr(4,t)}catch(l){re(t,n,l)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var r=t.return;try{a.componentDidMount()}catch(l){re(t,r,l)}}var i=t.return;try{no(t)}catch(l){re(t,i,l)}break;case 5:var o=t.return;try{no(t)}catch(l){re(t,o,l)}}}catch(l){re(t,t.return,l)}if(t===e){x=null;break}var s=t.sibling;if(s!==null){s.return=t.return,x=s;break}x=t.return}}var pd=Math.ceil,pr=we.ReactCurrentDispatcher,io=we.ReactCurrentOwner,Qe=we.ReactCurrentBatchConfig,R=0,me=null,se=null,ge=0,Ue=0,Mn=Pt(0),ue=0,ma=null,tn=0,mr=0,oo=0,ha=null,Pe=null,so=0,On=1/0,Ct=null,hr=!1,lo=null,Wt=null,fr=!1,_t=null,gr=0,fa=0,uo=null,yr=-1,vr=0;function Ae(){return(R&6)!==0?ie():yr!==-1?yr:yr=ie()}function Ut(e){return(e.mode&1)===0?1:(R&2)!==0&&ge!==0?ge&-ge:Kc.transition!==null?(vr===0&&(vr=es()),vr):(e=U,e!==0||(e=window.event,e=e===void 0?16:us(e.type)),e)}function st(e,t,n,a){if(50<fa)throw fa=0,uo=null,Error(h(185));Bn(e,n,a),((R&2)===0||e!==me)&&(e===me&&((R&2)===0&&(mr|=n),ue===4&&zt(e,ge)),De(e,a),n===1&&R===0&&(t.mode&1)===0&&(On=ie()+500,Ga&&Rt()))}function De(e,t){var n=e.callbackNode;Ku(e,t);var a=Aa(e,e===me?ge:0);if(a===0)n!==null&&$o(n),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(n!=null&&$o(n),t===1)e.tag===0?Yc(uu.bind(null,e)):Ys(uu.bind(null,e)),Vc(function(){(R&6)===0&&Rt()}),n=null;else{switch(ts(a)){case 1:n=Ur;break;case 4:n=Xo;break;case 16:n=Ea;break;case 536870912:n=Zo;break;default:n=Ea}n=yu(n,lu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function lu(e,t){if(yr=-1,vr=0,(R&6)!==0)throw Error(h(327));var n=e.callbackNode;if(jn()&&e.callbackNode!==n)return null;var a=Aa(e,e===me?ge:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=wr(e,a);else{t=a;var r=R;R|=2;var i=du();(me!==e||ge!==t)&&(Ct=null,On=ie()+500,an(e,t));do try{fd();break}catch(s){cu(e,s)}while(!0);Ai(),pr.current=i,R=r,se!==null?t=0:(me=null,ge=0,t=ue)}if(t!==0){if(t===2&&(r=zr(e),r!==0&&(a=r,t=co(e,r))),t===1)throw n=ma,an(e,0),zt(e,a),De(e,ie()),n;if(t===6)zt(e,a);else{if(r=e.current.alternate,(a&30)===0&&!md(r)&&(t=wr(e,a),t===2&&(i=zr(e),i!==0&&(a=i,t=co(e,i))),t===1))throw n=ma,an(e,0),zt(e,a),De(e,ie()),n;switch(e.finishedWork=r,e.finishedLanes=a,t){case 0:case 1:throw Error(h(345));case 2:rn(e,Pe,Ct);break;case 3:if(zt(e,a),(a&130023424)===a&&(t=so+500-ie(),10<t)){if(Aa(e,0)!==0)break;if(r=e.suspendedLanes,(r&a)!==a){Ae(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=gi(rn.bind(null,e,Pe,Ct),t);break}rn(e,Pe,Ct);break;case 4:if(zt(e,a),(a&4194240)===a)break;for(t=e.eventTimes,r=-1;0<a;){var o=31-tt(a);i=1<<o,o=t[o],o>r&&(r=o),a&=~i}if(a=r,a=ie()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*pd(a/1960))-a,10<a){e.timeoutHandle=gi(rn.bind(null,e,Pe,Ct),a);break}rn(e,Pe,Ct);break;case 5:rn(e,Pe,Ct);break;default:throw Error(h(329))}}}return De(e,ie()),e.callbackNode===n?lu.bind(null,e):null}function co(e,t){var n=ha;return e.current.memoizedState.isDehydrated&&(an(e,t).flags|=256),e=wr(e,t),e!==2&&(t=Pe,Pe=n,t!==null&&po(t)),e}function po(e){Pe===null?Pe=e:Pe.push.apply(Pe,e)}function md(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var r=n[a],i=r.getSnapshot;r=r.value;try{if(!nt(i(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zt(e,t){for(t&=~oo,t&=~mr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tt(t),a=1<<n;e[n]=-1,t&=~a}}function uu(e){if((R&6)!==0)throw Error(h(327));jn();var t=Aa(e,0);if((t&1)===0)return De(e,ie()),null;var n=wr(e,t);if(e.tag!==0&&n===2){var a=zr(e);a!==0&&(t=a,n=co(e,a))}if(n===1)throw n=ma,an(e,0),zt(e,t),De(e,ie()),n;if(n===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rn(e,Pe,Ct),De(e,ie()),null}function mo(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(On=ie()+500,Ga&&Rt())}}function nn(e){_t!==null&&_t.tag===0&&(R&6)===0&&jn();var t=R;R|=1;var n=Qe.transition,a=U;try{if(Qe.transition=null,U=1,e)return e()}finally{U=a,Qe.transition=n,R=t,(R&6)===0&&Rt()}}function ho(){Ue=Mn.current,K(Mn)}function an(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,zc(n)),se!==null)for(n=se.return;n!==null;){var a=n;switch(xi(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Va();break;case 3:Tn(),K(je),K(Se),Di();break;case 5:Fi(a);break;case 4:Tn();break;case 13:K(te);break;case 19:K(te);break;case 10:Ii(a.type._context);break;case 22:case 23:ho()}n=n.return}if(me=e,se=e=Vt(e.current,null),ge=Ue=t,ue=0,ma=null,oo=mr=tn=0,Pe=ha=null,Xt!==null){for(t=0;t<Xt.length;t++)if(n=Xt[t],a=n.interleaved,a!==null){n.interleaved=null;var r=a.next,i=n.pending;if(i!==null){var o=i.next;i.next=r,a.next=o}n.pending=a}Xt=null}return e}function cu(e,t){do{var n=se;try{if(Ai(),nr.current=or,ar){for(var a=ne.memoizedState;a!==null;){var r=a.queue;r!==null&&(r.pending=null),a=a.next}ar=!1}if(en=0,pe=le=ne=null,sa=!1,la=0,io.current=null,n===null||n.return===null){ue=1,ma=t,se=null;break}e:{var i=e,o=n.return,s=n,l=t;if(t=ge,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var m=l,y=s,v=y.tag;if((y.mode&1)===0&&(v===0||v===11||v===15)){var f=y.alternate;f?(y.updateQueue=f.updateQueue,y.memoizedState=f.memoizedState,y.lanes=f.lanes):(y.updateQueue=null,y.memoizedState=null)}var b=Dl(o);if(b!==null){b.flags&=-257,Rl(b,o,s,i,t),b.mode&1&&Pl(i,m,t),t=b,l=m;var k=t.updateQueue;if(k===null){var C=new Set;C.add(l),t.updateQueue=C}else k.add(l);break e}else{if((t&1)===0){Pl(i,m,t),fo();break e}l=Error(h(426))}}else if(Z&&s.mode&1){var oe=Dl(o);if(oe!==null){(oe.flags&65536)===0&&(oe.flags|=256),Rl(oe,o,s,i,t),Ci(An(l,s));break e}}i=l=An(l,s),ue!==4&&(ue=2),ha===null?ha=[i]:ha.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=Ll(i,l,t);il(i,d);break e;case 1:s=l;var u=i.type,p=i.stateNode;if((i.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Wt===null||!Wt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Fl(i,s,t);il(i,w);break e}}i=i.return}while(i!==null)}mu(n)}catch(T){t=T,se===n&&n!==null&&(se=n=n.return);continue}break}while(!0)}function du(){var e=pr.current;return pr.current=or,e===null?or:e}function fo(){(ue===0||ue===3||ue===2)&&(ue=4),me===null||(tn&268435455)===0&&(mr&268435455)===0||zt(me,ge)}function wr(e,t){var n=R;R|=2;var a=du();(me!==e||ge!==t)&&(Ct=null,an(e,t));do try{hd();break}catch(r){cu(e,r)}while(!0);if(Ai(),R=n,pr.current=a,se!==null)throw Error(h(261));return me=null,ge=0,ue}function hd(){for(;se!==null;)pu(se)}function fd(){for(;se!==null&&!Wu();)pu(se)}function pu(e){var t=gu(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?mu(e):se=t,io.current=null}function mu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=sd(n,t,Ue),n!==null){se=n;return}}else{if(n=ld(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,se=null;return}}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);ue===0&&(ue=5)}function rn(e,t,n){var a=U,r=Qe.transition;try{Qe.transition=null,U=1,gd(e,t,n,a)}finally{Qe.transition=r,U=a}return null}function gd(e,t,n,a){do jn();while(_t!==null);if((R&6)!==0)throw Error(h(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Qu(e,i),e===me&&(se=me=null,ge=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||fr||(fr=!0,yu(Ea,function(){return jn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=Qe.transition,Qe.transition=null;var o=U;U=1;var s=R;R|=4,io.current=null,cd(e,n),au(n,e),Rc(hi),Oa=!!mi,hi=mi=null,e.current=n,dd(n),_u(),R=s,U=o,Qe.transition=i}else e.current=n;if(fr&&(fr=!1,_t=e,gr=r),i=e.pendingLanes,i===0&&(Wt=null),Vu(n.stateNode),De(e,ie()),t!==null)for(a=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],a(r.value,{componentStack:r.stack,digest:r.digest});if(hr)throw hr=!1,e=lo,lo=null,e;return(gr&1)!==0&&e.tag!==0&&jn(),i=e.pendingLanes,(i&1)!==0?e===uo?fa++:(fa=0,uo=e):fa=0,Rt(),null}function jn(){if(_t!==null){var e=ts(gr),t=Qe.transition,n=U;try{if(Qe.transition=null,U=16>e?16:e,_t===null)var a=!1;else{if(e=_t,_t=null,gr=0,(R&6)!==0)throw Error(h(331));var r=R;for(R|=4,x=e.current;x!==null;){var i=x,o=i.child;if((x.flags&16)!==0){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var m=s[l];for(x=m;x!==null;){var y=x;switch(y.tag){case 0:case 11:case 15:pa(8,y,i)}var v=y.child;if(v!==null)v.return=y,x=v;else for(;x!==null;){y=x;var f=y.sibling,b=y.return;if(Xl(y),y===m){x=null;break}if(f!==null){f.return=b,x=f;break}x=b}}}var k=i.alternate;if(k!==null){var C=k.child;if(C!==null){k.child=null;do{var oe=C.sibling;C.sibling=null,C=oe}while(C!==null)}}x=i}}if((i.subtreeFlags&2064)!==0&&o!==null)o.return=i,x=o;else e:for(;x!==null;){if(i=x,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:pa(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,x=d;break e}x=i.return}}var u=e.current;for(x=u;x!==null;){o=x;var p=o.child;if((o.subtreeFlags&2064)!==0&&p!==null)p.return=o,x=p;else e:for(o=u;x!==null;){if(s=x,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:dr(9,s)}}catch(T){re(s,s.return,T)}if(s===o){x=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,x=w;break e}x=s.return}}if(R=r,Rt(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(ka,e)}catch{}a=!0}return a}finally{U=n,Qe.transition=t}}return!1}function hu(e,t,n){t=An(n,t),t=Ll(e,t,1),e=Jt(e,t,1),t=Ae(),e!==null&&(Bn(e,1,t),De(e,t))}function re(e,t,n){if(e.tag===3)hu(e,e,n);else for(;t!==null;){if(t.tag===3){hu(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Wt===null||!Wt.has(a))){e=An(n,e),e=Fl(t,e,1),t=Jt(t,e,1),e=Ae(),t!==null&&(Bn(t,1,e),De(t,e));break}}t=t.return}}function yd(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),t=Ae(),e.pingedLanes|=e.suspendedLanes&n,me===e&&(ge&n)===n&&(ue===4||ue===3&&(ge&130023424)===ge&&500>ie()-so?an(e,0):oo|=n),De(e,t)}function fu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ta,Ta<<=1,(Ta&130023424)===0&&(Ta=4194304)));var n=Ae();e=xt(e,t),e!==null&&(Bn(e,t,n),De(e,n))}function vd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),fu(e,n)}function wd(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(h(314))}a!==null&&a.delete(t),fu(e,n)}var gu;gu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)Fe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Fe=!1,od(e,t,n);Fe=(e.flags&131072)!==0}else Fe=!1,Z&&(t.flags&1048576)!==0&&Ks(t,Ya,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;ur(e,t),e=t.pendingProps;var r=wn(t,Se.current);Cn(t,n),r=Ji(null,t,a,e,r,n);var i=Bi();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Le(a)?(i=!0,Ha(t)):i=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ji(t),r.updater=sr,t.stateNode=r,r._reactInternals=t,Hi(t,a,e,n),t=Ki(null,t,a,!0,i,n)):(t.tag=0,Z&&i&&bi(t),Te(null,t,r,n),t=t.child),t;case 16:a=t.elementType;e:{switch(ur(e,t),e=t.pendingProps,r=a._init,a=r(a._payload),t.type=a,r=t.tag=bd(a),e=rt(a,e),r){case 0:t=Yi(null,t,a,e,n);break e;case 1:t=Ul(null,t,a,e,n);break e;case 11:t=Nl(null,t,a,e,n);break e;case 14:t=Jl(null,t,a,rt(a.type,e),n);break e}throw Error(h(306,a,""))}return t;case 0:return a=t.type,r=t.pendingProps,r=t.elementType===a?r:rt(a,r),Yi(e,t,a,r,n);case 1:return a=t.type,r=t.pendingProps,r=t.elementType===a?r:rt(a,r),Ul(e,t,a,r,n);case 3:e:{if(zl(t),e===null)throw Error(h(387));a=t.pendingProps,i=t.memoizedState,r=i.element,rl(e,t),er(t,a,null,n);var o=t.memoizedState;if(a=o.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){r=An(Error(h(423)),t),t=Vl(e,t,a,n,r);break e}else if(a!==r){r=An(Error(h(424)),t),t=Vl(e,t,a,n,r);break e}else for(_e=Ft(t.stateNode.containerInfo.firstChild),We=t,Z=!0,at=null,n=nl(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xn(),a===r){t=kt(e,t,n);break e}Te(e,t,a,n)}t=t.child}return t;case 5:return sl(t),e===null&&ki(t),a=t.type,r=t.pendingProps,i=e!==null?e.memoizedProps:null,o=r.children,fi(a,r)?o=null:i!==null&&fi(a,i)&&(t.flags|=32),_l(e,t),Te(e,t,o,n),t.child;case 6:return e===null&&ki(t),null;case 13:return Hl(e,t,n);case 4:return Li(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=En(t,null,a,n):Te(e,t,a,n),t.child;case 11:return a=t.type,r=t.pendingProps,r=t.elementType===a?r:rt(a,r),Nl(e,t,a,r,n);case 7:return Te(e,t,t.pendingProps,n),t.child;case 8:return Te(e,t,t.pendingProps.children,n),t.child;case 12:return Te(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(a=t.type._context,r=t.pendingProps,i=t.memoizedProps,o=r.value,G($a,a._currentValue),a._currentValue=o,i!==null)if(nt(i.value,o)){if(i.children===r.children&&!je.current){t=kt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var l=s.firstContext;l!==null;){if(l.context===a){if(i.tag===1){l=Et(-1,n&-n),l.tag=2;var m=i.updateQueue;if(m!==null){m=m.shared;var y=m.pending;y===null?l.next=l:(l.next=y.next,y.next=l),m.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Mi(i.return,n,t),s.lanes|=n;break}l=l.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(h(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Mi(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Te(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,a=t.pendingProps.children,Cn(t,n),r=Ye(r),a=a(r),t.flags|=1,Te(e,t,a,n),t.child;case 14:return a=t.type,r=rt(a,t.pendingProps),r=rt(a.type,r),Jl(e,t,a,r,n);case 15:return Bl(e,t,t.type,t.pendingProps,n);case 17:return a=t.type,r=t.pendingProps,r=t.elementType===a?r:rt(a,r),ur(e,t),t.tag=1,Le(a)?(e=!0,Ha(t)):e=!1,Cn(t,n),Ol(t,a,r),Hi(t,a,r,n),Ki(null,t,a,!0,e,n);case 19:return ql(e,t,n);case 22:return Wl(e,t,n)}throw Error(h(156,t.tag))};function yu(e,t){return Qo(e,t)}function Sd(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,t,n,a){return new Sd(e,t,n,a)}function go(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bd(e){if(typeof e=="function")return go(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ut)return 11;if(e===ct)return 14}return 2}function Vt(e,t){var n=e.alternate;return n===null?(n=$e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Sr(e,t,n,a,r,i){var o=2;if(a=e,typeof e=="function")go(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Me:return on(n.children,r,i,t);case He:o=8,r|=8;break;case Tt:return e=$e(12,n,t,r|2),e.elementType=Tt,e.lanes=i,e;case Ne:return e=$e(13,n,t,r),e.elementType=Ne,e.lanes=i,e;case et:return e=$e(19,n,t,r),e.elementType=et,e.lanes=i,e;case ae:return br(n,r,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yt:o=10;break e;case Gt:o=9;break e;case ut:o=11;break e;case ct:o=14;break e;case Oe:o=16,a=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return t=$e(o,n,t,r),t.elementType=e,t.type=a,t.lanes=i,t}function on(e,t,n,a){return e=$e(7,e,a,t),e.lanes=n,e}function br(e,t,n,a){return e=$e(22,e,a,t),e.elementType=ae,e.lanes=n,e.stateNode={isHidden:!1},e}function yo(e,t,n){return e=$e(6,e,null,t),e.lanes=n,e}function vo(e,t,n){return t=$e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function xd(e,t,n,a,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vr(0),this.expirationTimes=Vr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vr(0),this.identifierPrefix=a,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function wo(e,t,n,a,r,i,o,s,l){return e=new xd(e,t,n,s,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=$e(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ji(i),e}function Ed(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ce,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}function vu(e){if(!e)return Dt;e=e._reactInternals;e:{if(qt(e)!==e||e.tag!==1)throw Error(h(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Le(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(h(171))}if(e.tag===1){var n=e.type;if(Le(n))return Gs(e,n,t)}return t}function wu(e,t,n,a,r,i,o,s,l){return e=wo(n,a,!0,e,r,i,o,s,l),e.context=vu(null),n=e.current,a=Ae(),r=Ut(n),i=Et(a,r),i.callback=t??null,Jt(n,i,r),e.current.lanes=r,Bn(e,r,a),De(e,a),e}function xr(e,t,n,a){var r=t.current,i=Ae(),o=Ut(r);return n=vu(n),t.context===null?t.context=n:t.pendingContext=n,t=Et(i,o),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=Jt(r,t,o),e!==null&&(st(e,r,o,i),Za(e,r,o)),o}function Er(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Su(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function So(e,t){Su(e,t),(e=e.alternate)&&Su(e,t)}function kd(){return null}var bu=typeof reportError=="function"?reportError:function(e){console.error(e)};function bo(e){this._internalRoot=e}kr.prototype.render=bo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));xr(e,t,null,null)},kr.prototype.unmount=bo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nn(function(){xr(null,e,null,null)}),t[vt]=null}};function kr(e){this._internalRoot=e}kr.prototype.unstable_scheduleHydration=function(e){if(e){var t=rs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ot.length&&t!==0&&t<Ot[n].priority;n++);Ot.splice(n,0,e),n===0&&ss(e)}};function xo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Cr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xu(){}function Cd(e,t,n,a,r){if(r){if(typeof a=="function"){var i=a;a=function(){var m=Er(o);i.call(m)}}var o=wu(t,a,e,0,null,!1,!1,"",xu);return e._reactRootContainer=o,e[vt]=o.current,Zn(e.nodeType===8?e.parentNode:e),nn(),o}for(;r=e.lastChild;)e.removeChild(r);if(typeof a=="function"){var s=a;a=function(){var m=Er(l);s.call(m)}}var l=wo(e,0,!1,null,null,!1,!1,"",xu);return e._reactRootContainer=l,e[vt]=l.current,Zn(e.nodeType===8?e.parentNode:e),nn(function(){xr(t,l,n,a)}),l}function Tr(e,t,n,a,r){var i=n._reactRootContainer;if(i){var o=i;if(typeof r=="function"){var s=r;r=function(){var l=Er(o);s.call(l)}}xr(t,o,e,r)}else o=Cd(n,t,e,r,a);return Er(o)}ns=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Jn(t.pendingLanes);n!==0&&(Hr(t,n|1),De(t,ie()),(R&6)===0&&(On=ie()+500,Rt()))}break;case 13:nn(function(){var a=xt(e,1);if(a!==null){var r=Ae();st(a,e,1,r)}}),So(e,1)}},Gr=function(e){if(e.tag===13){var t=xt(e,134217728);if(t!==null){var n=Ae();st(t,e,134217728,n)}So(e,134217728)}},as=function(e){if(e.tag===13){var t=Ut(e),n=xt(e,t);if(n!==null){var a=Ae();st(n,e,t,a)}So(e,t)}},rs=function(){return U},is=function(e,t){var n=U;try{return U=e,t()}finally{U=n}},Jr=function(e,t,n){switch(t){case"input":if(Or(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var r=za(a);if(!r)throw Error(h(90));Mo(a),Or(a,r)}}}break;case"textarea":Po(e,n);break;case"select":t=n.value,t!=null&&sn(e,!!n.multiple,t,!1)}},zo=mo,Vo=nn;var Td={usingClientEntryPoint:!1,Events:[na,yn,za,_o,Uo,mo]},ga={findFiberByHostInstance:Yt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ad={bundleType:ga.bundleType,version:ga.version,rendererPackageName:ga.rendererPackageName,rendererConfig:ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:we.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yo(e),e===null?null:e.stateNode},findFiberByHostInstance:ga.findFiberByHostInstance||kd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ar=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ar.isDisabled&&Ar.supportsFiber)try{ka=Ar.inject(Ad),dt=Ar}catch{}}return Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Td,Re.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xo(t))throw Error(h(200));return Ed(e,t,null,n)},Re.createRoot=function(e,t){if(!xo(e))throw Error(h(299));var n=!1,a="",r=bu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=wo(e,1,!1,null,null,n,!1,a,r),e[vt]=t.current,Zn(e.nodeType===8?e.parentNode:e),new bo(t)},Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=Yo(t),e=e===null?null:e.stateNode,e},Re.flushSync=function(e){return nn(e)},Re.hydrate=function(e,t,n){if(!Cr(t))throw Error(h(200));return Tr(null,e,t,!0,n)},Re.hydrateRoot=function(e,t,n){if(!xo(e))throw Error(h(405));var a=n!=null&&n.hydratedSources||null,r=!1,i="",o=bu;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=wu(t,null,e,1,n??null,r,!1,i,o),e[vt]=t.current,Zn(e),a)for(e=0;e<a.length;e++)n=a[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new kr(t)},Re.render=function(e,t,n){if(!Cr(t))throw Error(h(200));return Tr(null,e,t,!1,n)},Re.unmountComponentAtNode=function(e){if(!Cr(e))throw Error(h(40));return e._reactRootContainer?(nn(function(){Tr(null,null,e,!1,function(){e._reactRootContainer=null,e[vt]=null})}),!0):!1},Re.unstable_batchedUpdates=mo,Re.unstable_renderSubtreeIntoContainer=function(e,t,n,a){if(!Cr(n))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return Tr(e,t,n,!1,a)},Re.version="18.3.1-next-f1338f8080-20240426",Re}var Ou;function Dd(){if(Ou)return Co.exports;Ou=1;function j(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j)}catch(W){console.error(W)}}return j(),Co.exports=Pd(),Co.exports}var ju;function Rd(){if(ju)return Ir;ju=1;var j=Dd();return Ir.createRoot=j.createRoot,Ir.hydrateRoot=j.hydrateRoot,Ir}var Nd=Rd();function Jd(){const[j,W]=Lu.useState(null),h=[{id:1,question:"1. Explain Encapsulation and Access Modifiers in Java with examples.",answer:"",codeExample:`
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
      
      `},{id:1,question:"",answer:"",codeExample:""},{id:45,question:"45. File class (with directory creation)",answer:"",codeExample:`
📌 Java File Class (With Directory Creation)

Directory = Folder.

The File class in Java (from java.io package) is used to work with files and directories.
It does NOT read/write file content — it only represents file or folder paths and lets you perform tasks like:

✔ Creating folders
✔ Creating files
✔ Checking file/folder exists
✔ Deleting file/folder
✔ Getting file properties (name, size, path)

📘 Simple Example: Create Directory + File

👉 Note: You said not to write multiple classes inside one file, so this is a single simple class.


import java.io.File;
import java.io.IOException;

public class FileExample {
    public static void main(String[] args) {

        // Create a directory
        File folder = new File("MyFolder");

        if (!folder.exists()) {
            folder.mkdir();   // make directory
            System.out.println("Folder created.");
        } else {
            System.out.println("Folder already exists.");
        }

        // Create a file inside the folder
        File file = new File("MyFolder/data.txt");

        try {
            if (file.createNewFile()) {
                System.out.println("File created: " + file.getName());
            } else {
                System.out.println("File already exists.");
            }
        } 
        catch (IOException e) {
            System.out.println("Error creating file.");
            e.printStackTrace();
        }
    }
}



📝 Explanation (Easy Words)

1️⃣ Create a Folder

    File folder = new File("MyFolder");
    folder.mkdir();

✔ mkdir() → makes one directory
✔ Creates folder named MyFolder


2️⃣ Create a File

    File file = new File("MyFolder/data.txt");
    file.createNewFile();

✔ createNewFile() → creates empty file
✔ File stored inside MyFolder


3️⃣ Check If Exists
folder.exists();
file.exists();


4️⃣ File Information
file.getName();      // data.txt
file.getPath();      // MyFolder/data.txt
file.length();       // size in bytes



🎯 Output (Example)

Folder created.
File created: data.txt
      

---------------------------------------------------------------------------


✅ What is a Directory? (Very Simple Words)

A directory means a folder.

Example:

    Desktop folder
    Documents folder
    Downloads folder
    Any folder you create

In Java and programming, "directory" = "folder".

📁 Example from your code

File folder = new File("MyFolder");
folder.mkdir();


This means:

👉 Create a folder named MyFolder
inside the current project location.


📂 Visual Example

Your project will look like this after running code:

Project Folder
│
└── MyFolder   ← (this is directory)
      └── data.txt   ← (this is file inside directory)


----------------------


✅ Meaning of printStackTrace()

printStackTrace() is a method used to print the error details when an exception happens.

It shows:

what error happened
where the error happened
which line caused the problem
which functions were called before the error


🧠 Easy Definition
👉 printStackTrace() = print full error report on screen.

It's like a map that shows how your program reached the error.


📌 Example

try {
    int a = 10 / 0;   // error (divide by zero)
}
catch (Exception e) {
    e.printStackTrace();
}


Output (example):

java.lang.ArithmeticException: / by zero
    at FileExample.main(FileExample.java:6)


This tells you:

The error is / by zero
The error happened on line 6
The class name and location


| Method                | Purpose                                        |
| --------------------- | ---------------------------------------------- |
| e.getMessage()        | Shows only the error message                   |
| e.printStackTrace()   | Shows complete error details + line number     |


      `},{id:46,question:"46. Difference between byte & character streams",answer:"",codeExample:`
Difference Between Byte Streams and Character Streams


| Byte Streams                                  | Character Streams                                 |
| ----------------------------------------------| --------------------------------------------------|
| Works with raw binary data (0s and 1s)        | Works with text data (characters)                 |
| Used for images, audio, video, PDF, ZIP, etc. | Used for text files (.txt), letters, strings      |
| Reads/Writes 1 byte (8-bit) at a time         | Reads/Writes 2 bytes (16-bit Unicode) at a time   |
| Classes: InputStream, OutputStream            | Classes: Reader, Writer                           |
| Examples: FileInputStream, FileOutputStream   | Examples: FileReader, FileWriter                  |
| Does NOT convert data                         | Automatically converts Unicode characters         |
| Faster for binary data                        | Slower than byte stream (because of conversion)   |



Simple Summary

👉 Byte Streams = binary data
👉 Character Streams = text data


Example of Byte Stream (read image file)

FileInputStream fis = new FileInputStream("photo.jpg");
FileOutputStream fos = new FileOutputStream("copy.jpg");

int b;
while ((b = fis.read()) != -1) {
    fos.write(b);
}

fis.close();
fos.close();



Example of Character Stream (read text file)

FileReader fr = new FileReader("data.txt");
FileWriter fw = new FileWriter("copy.txt");

int ch;
while ((ch = fr.read()) != -1) {
    fw.write(ch);
}

fr.close();
fw.close();
      `},{id:47,question:"47. Reading and writing files (FileReader/FileWriter)",answer:"",codeExample:`
✅ Reading and Writing Files (FileReader / FileWriter) – Java

Java provides character streams to work with text files.
The two main classes are:

FileReader → for reading characters from a file
FileWriter → for writing characters to a file


✍️ 1. Writing to a File using FileWriter
✔ Simple Example (writes a message into a file)

import java.io.FileWriter;
import java.io.IOException;

public class WriteExample {
    public static void main(String[] args) {
        try {
            FileWriter fw = new FileWriter("myfile.txt"); 
            fw.write("Hello, this is a FileWriter example!");
            fw.close();
            System.out.println("File written successfully.");
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}


🔍 Explanation

FileWriter("myfile.txt") → creates a file (if not exist)
write() → writes text inside the file
close() → closes the file to save data



📖 2. Reading from a File using FileReader

✔ Simple FileReader Example

import java.io.FileReader;
import java.io.IOException;

public class ReadExample {
    public static void main(String[] args) {
        try {
            FileReader fr = new FileReader("myfile.txt");
            int ch;

            while ((ch = fr.read()) != -1) { 
                System.out.print((char) ch); 
            }

            fr.close();
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}


🔍 Explanation

fr.read() → reads one character at a time
Returns -1 → end of file
(char) ch → converts ASCII value to character



📝 3. Read & Write Together Example

import java.io.*;

public class ReadWriteDemo {
    public static void main(String[] args) {
        try {
            // Writing
            FileWriter fw = new FileWriter("data.txt");
            fw.write("Java FileReader and FileWriter example.");
            fw.close();

            // Reading
            FileReader fr = new FileReader("data.txt");
            int ch;
            System.out.println("File Content:");
            while ((ch = fr.read()) != -1) {
                System.out.print((char) ch);
            }
            fr.close();

        } catch (IOException e) {
            System.out.println("Error: " + e);
        }
    }
}


⭐ Summary

| Operation      | Class Used     | Works On |
| -------------- | -------------- | -------- |
| Write to file  | FileWriter | Text     |
| Read from file | FileReader | Text     |

      
      `},{id:48,question:"48. PrintWriter with example",answer:"",codeExample:`
✅ PrintWriter in Java

PrintWriter is a Java class used to write text data to files.
It is easier to use than FileWriter because it provides methods like:

print()
println()
printf()

Just like printing on the console using System.out.println.


✅ Why use PrintWriter?

✔ Easy to write text
✔ Supports print / println like console
✔ Automatically flushes data
✔ Can write formatted text
✔ Works on files, console, or other output streams



✅ Simple Example of PrintWriter

➤ Write text into a file

import java.io.PrintWriter;
import java.io.IOException;

public class PrintWriterExample {
    public static void main(String[] args) {
        try {
            // Create PrintWriter to write in file
            PrintWriter pw = new PrintWriter("output.txt");

            pw.println("Hello, this is PrintWriter example!");
            pw.println("Writing data line by line.");
            pw.print("You can also write without new line.");

            pw.close(); // Close the file
            System.out.println("File written successfully!");
            
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}


✅ What happens in output.txt?

Hello, this is PrintWriter example!
Writing data line by line.
You can also write without new line.


⭐ Key Methods of PrintWriter

| Method      | Meaning                       |
| ----------- | ----------------------------- |
| print()     | Writes data without a newline |
| println()   | Writes data + adds a newline  |
| printf()    | Writes formatted data         |
| close()     | Closes the writer             |
| flush()     | Forces writing to file        |

      
      `},{id:49,question:"49. What is transient? Explain with serialization",answer:"",codeExample:`
✅ What is Serialization? (Simple Explanation)

Serialization = Converting an object into a file (or bytes).
This allows you to save the object and load it later.

Example:
You save a game → player object is written to a file → load game later → object is restored.

Java makes this possible using:

    implements Serializable


✅ What is transient? (Very Easy Explanation)

transient means: do NOT save this variable when the object is serialized.

Java skips that variable when writing the object to a file.


⭐ Why do we use transient?

Because some data should NOT be saved, such as:

✔ Passwords
✔ Temporary values
✔ Sensitive information
✔ Data that can be calculated again
✔ Values not required after restart


✅ Simple Example (Understand in 1 minute)

❌ Without transient → variable is saved
✔ With transient → variable is NOT saved


📌 Example Code (VERY SIMPLE)

import java.io.*;

class Student implements Serializable {
    String name;
    transient String password;  // this will NOT be saved

    Student(String name, String password) {
        this.name = name;
        this.password = password;
    }
}

public class Main {
    public static void main(String[] args) throws Exception {

        Student s1 = new Student("Raj", "secret123");

        // ---------- Serialization (Write object) ----------
        FileOutputStream fos = new FileOutputStream("data.ser");
        ObjectOutputStream oos = new ObjectOutputStream(fos);
        oos.writeObject(s1);
        oos.close();

        // ---------- Deserialization (Read object) ----------
        FileInputStream fis = new FileInputStream("data.ser");
        ObjectInputStream ois = new ObjectInputStream(fis);
        Student s2 = (Student) ois.readObject();

        System.out.println("Name: " + s2.name); 
        System.out.println("Password: " + s2.password); 
    }
}


📌 Output:

Name: Raj
Password: null


❗ Why password becomes null?

Because password is transient → Java does NOT save it → so when reading the object again, it becomes 
null.

🎯 Final Explanation Summary

| Keyword         | Meaning            | During Serialization             |
| --------------- | ------------------ | -------------------------------- |
| transient       | Skip this variable | NOT saved → becomes null/default |
| normal variable | Save this variable | Saved normally                   |


----------------


✅ What is Serialization?

Serialization = Converting an object into a file (binary data).

    When you create an object in Java, it lives in RAM.

    If you want to save the object permanently (in a file, database, send over network),
    then you serialize it.

    Java converts the object into bytes and stores it in a file.

Example:
You have a Student object → you convert it into a file called student.ser.



✅ What is Deserialization?

Deserialization = Reading the saved bytes and converting them back into an object.
This recreates the original object from the file.


🧩 Why use Serialization?

To save object data permanently.
To send objects over network (RMI, socket programming).
To store session data.


⭐ IMPORTANT:

To serialize an object, the class must use:

    class Student implements Serializable {
    }

Serializable is just a marker interface (no methods inside).



🔧 Java Streams Used in Serialization

1️⃣ FileOutputStream

Used to write raw bytes to a file.
In serialization, used as the base stream.


2️⃣ ObjectOutputStream

Used to write objects into FileOutputStream.
Converts objects → bytes.

Serialization Steps:

FileOutputStream fos = new FileOutputStream("student.ser");
ObjectOutputStream oos = new ObjectOutputStream(fos);
oos.writeObject(object);   // Saves object
oos.close();


3️⃣ FileInputStream

Used to read raw bytes from a file.


4️⃣ ObjectInputStream

Converts bytes → object.
Used for deserialization.

Deserialization Steps:

FileInputStream fis = new FileInputStream("student.ser");
ObjectInputStream ois = new ObjectInputStream(fis);
Student s = (Student) ois.readObject();   // Reads object
ois.close();


🎯 Complete Simple Example

Serialization + Deserialization



Student.java

import java.io.Serializable;

class Student implements Serializable {
    int id;
    String name;

    Student(int id, String name) {
        this.id = id;
        this.name = name;
    }
}



WriteObject.java (Serialization)

import java.io.*;

public class WriteObject {
    public static void main(String[] args) throws Exception {

        Student s1 = new Student(101, "Raj");

        FileOutputStream fos = new FileOutputStream("student.ser");
        ObjectOutputStream oos = new ObjectOutputStream(fos);

        oos.writeObject(s1);   // Saving object
        oos.close();

        System.out.println("Object Serialized");
    }
}



ReadObject.java (Deserialization)

import java.io.*;

public class ReadObject {
    public static void main(String[] args) throws Exception {

        FileInputStream fis = new FileInputStream("student.ser");
        ObjectInputStream ois = new ObjectInputStream(fis);

        Student s = (Student) ois.readObject();
        ois.close();

        System.out.println(s.id + " " + s.name);
    }
}


🛑 What is transient keyword?

(You asked earlier; now the meaning is clear with serialization)
transient = Do not save this variable during serialization.

Example:

class Student implements Serializable {
    int id;
    transient String password;  // not saved
}


When serializing, the password value will be skipped.


✅ Final Summary

| Concept            | Meaning                                   |
| -------------------| ----------------------------------------- |
| Serialization      | Convert object → file (bytes)             |
| Deserialization    | Convert file (bytes) → object             |
| FileOutputStream   | Write bytes to file                       |
| ObjectOutputStream | Write objects to file                     |
| FileInputStream    | Read bytes from file                      |
| ObjectInputStream  | Read objects from file                    |
| transient          | Prevents a variable from being serialized |


--------------------------------------


✅ How FileOutputStream & ObjectOutputStream Work Together

👉 Think like this:

FileOutputStream (FOS) = writes raw bytes into a file.
ObjectOutputStream (OOS) = converts Java objects → bytes.

But OOS cannot write directly to a file on its own.
So it needs another stream that knows how to write bytes to a file.

Therefore, we connect both:


FileOutputStream fos = new FileOutputStream("student.ser");  
ObjectOutputStream oos = new ObjectOutputStream(fos);


✔ Meaning:

1. FileOutputStream opens a file → "student.ser"
2. ObjectOutputStream uses that file stream to send bytes into that file


🔁 Data Flow:

Java Object → ObjectOutputStream → FileOutputStream → File

So OOS converts object to bytes,
and FOS stores those bytes in the file.



🟦 Same logic when reading:

FileInputStream fis = new FileInputStream("student.ser");
ObjectInputStream ois = new ObjectInputStream(fis);


🔁 Data Flow:

File → FileInputStream → ObjectInputStream → Java Object

FIS reads bytes from file,
OIS converts bytes back into an object.


🔥 Simple Example (Very Easy)

✔ Writing object (Serialization)

Student s1 = new Student("Raj", 22);

FileOutputStream fos = new FileOutputStream("student.ser");  
ObjectOutputStream oos = new ObjectOutputStream(fos);

oos.writeObject(s1);      // object → bytes → file
oos.close();
fos.close();



✔ Reading object (Deserialization)

FileInputStream fis = new FileInputStream("student.ser");
ObjectInputStream ois = new ObjectInputStream(fis);

Student s2 = (Student) ois.readObject();  // bytes → object

ois.close();
fis.close();

System.out.println(s2.name);



🟩 VERY SIMPLE DIFFERENCE TABLE

| Stream                 | Meaning        | Works With             | Purpose                |
| ---------------------- | -------------- | ---------------------- | ---------------------- |
| FileOutputStream       | Writes bytes   | Files                  | Save bytes             |
| ObjectOutputStream     | Writes objects | Needs FileOutputStream | Convert object → bytes |
| FileInputStream        | Reads bytes    | Files                  | Read bytes             |
| ObjectInputStream      | Reads objects  | Needs FileInputStream  | Convert bytes → object |


🟨 Simple Real-Life Example

Think of:

ObjectOutputStream = a translator converting your object to some encoded form.
FileOutputStream = a delivery person who stores that encoded form in a file.

They must work together.


      `},{id:50,question:"50. RandomAccessFile example",answer:"",codeExample:`
✅ RandomAccessFile Example (Easy)

📌 What is RandomAccessFile?

It allows read + write operations in a file.
It supports random (non-sequential) access → you can move the file pointer anywhere using seek().
Works like a combination of FileInputStream + FileOutputStream.



✅ Simple Example: Write and Read Using RandomAccessFile

✔ Program (No complex code)

import java.io.RandomAccessFile;

public class RAFExample {
    public static void main(String[] args) {
        try {
            // Create RandomAccessFile in read-write mode
            RandomAccessFile raf = new RandomAccessFile("data.txt", "rw");

            // Write data to file
            raf.writeUTF("Hello");
            raf.writeInt(100);

            // Move pointer to beginning
            raf.seek(0);

            // Read data back
            String message = raf.readUTF();
            int number = raf.readInt();

            System.out.println("Message: " + message);
            System.out.println("Number: " + number);

            raf.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}


✨ Output

Message: Hello
Number: 100



🧠 Explanation (Very Simple)

✔ RandomAccessFile("data.txt", "rw")

"rw" = read + write mode
Creates file if not exists.


✔ writeUTF(), writeInt()

Write string and integer to file.


✔ seek(0)

Move file pointer to the start of file.
Now reading will start from the beginning.


✔ readUTF(), readInt()

Reads same data written earlier.


🎉 Summary (Very Simple)

| Feature            | Meaning                                   |
| ------------------ | ----------------------------------------- |
| RandomAccessFile   | Read + write at any position              |
| seek(pos)          | Move pointer anywhere in file             |
| writeXXX()         | Write data (UTF, int, byte, double, etc.) |
| readXXX()          | Read data                                 |
| "rw"               | Read/Write mode                           |

      
      `},{id:51,question:"51. Multithreading introduction",answer:"",codeExample:`
✅ Multithreading – Easy Explanation

Multithreading means:

Running multiple tasks at the same time inside one program.

Just like:

You listen to music 🎵 and chat on WhatsApp 💬 at the same time.
A restaurant cooks many orders together.

Java allows the program to do multiple works simultaneously → this is called multithreading.


✅ Why Multithreading?

| Reason             | Meaning                             |
| -------------------| ----------------------------------- |
| Faster execution   | Tasks run parallel.                 |
| Better performance | CPU is used fully.                  |
| Multiple tasks     | Example: music + download + typing. |
| Avoid waiting      | App remains responsive.             |


✅ Thread in Java

A thread = a small unit of a program that runs independently.

Java gives 2 ways to create threads:

1. Extend Thread class
2. Implement Runnable interface


✅ Simple Example (Extend Thread Class)

class MyThread extends Thread {
    public void run() { 
        System.out.println("Thread is running...");
    }
}

public class Demo {
    public static void main(String[] args) {
        MyThread t = new MyThread();  
        t.start();   // start thread → calls run()
    }
}



How it works:

run() = code that thread will execute.
start() = actually creates the new thread.


✅ Simple Example (Implement Runnable Interface)

class MyTask implements Runnable {
    public void run() {
        System.out.println("Task is running...");
    }
}

public class Demo2 {
    public static void main(String[] args) {
        Thread t = new Thread(new MyTask());
        t.start();
    }
}


✅ Real-Life Example

Imagine a download manager:

Thread 1: Download video
Thread 2: Update progress bar
Thread 3: Save file
All run together, not one-by-one.


✅ Important Terms (Easy Meaning)

| Term           | Meaning                               |
| ---------------| ------------------------------------- |
| Thread         | Small process that runs independently |
| Multithreading | Running many threads simultaneously   |
| run()          | Work of the thread                    |
| start()        | Start a new thread                    |
| sleep(ms)      | Pause thread                          |
| join()         | Wait for another thread               |
| priority       | Importance of thread                  |




-----------------------------

✅ Multithreading Introduction (Easy Explanation)

Multithreading = running multiple tasks at the same time in a single program.

Example in real life:
👉 WhatsApp can download, send messages, and play audio at the same time.

In Java:
👉 You can create multiple threads so your program does many things at once.


Why we use multithreading?

Faster performance
Better CPU usage
Can do multiple tasks parallel
Background tasks are possible (like autosave, timer, download)


Two ways to create thread:

1. Extend Thread class
2. Implement Runnable interface

✔ Simple Multithreading Example (2 Threads)

(VERY EASY CODE)


Example 1: Using Thread class

class MyThread1 extends Thread {
    public void run() {
        for(int i=1; i<=5; i++) {
            System.out.println("Thread 1 : " + i);
        }
    }
}

class MyThread2 extends Thread {
    public void run() {
        for(int i=1; i<=5; i++) {
            System.out.println("Thread 2 : " + i);
        }
    }
}

public class MultiThreadDemo {
    public static void main(String[] args) {
        MyThread1 t1 = new MyThread1();  // create thread
        MyThread2 t2 = new MyThread2();  // create thread

        t1.start();   // start thread 1
        t2.start();   // start thread 2
    }
}


Output (random order, because threads run independently):

Thread 1 : 1
Thread 2 : 1
Thread 1 : 2
Thread 2 : 2
...



✔ Example 2: Using Runnable (Preferred Method)

class Task1 implements Runnable {
    public void run() {
        for(int i=1; i<=5; i++) {
            System.out.println("Task 1 running... " + i);
        }
    }
}

class Task2 implements Runnable {
    public void run() {
        for(int i=1; i<=5; i++) {
            System.out.println("Task 2 running... " + i);
        }
    }
}

public class RunnableDemo {
    public static void main(String[] args) {
        Thread t1 = new Thread(new Task1());
        Thread t2 = new Thread(new Task2());

        t1.start();
        t2.start();
    }
}


✔ Key Points to Remember

| Feature              | Description                |
| ---------------------| -------------------------- |
| Thread               | Smallest unit of execution |
| start()              | Starts a new thread        |
| run()                | Contains thread’s task     |
| Thread runs parallel | Output order is NOT fixed  |
| Runnable             | Best way to create thread  |

      
      `},{id:52,question:"52. Thread life-cycle diagram",answer:"",codeExample:`
✅ Thread Life-Cycle (States of a Thread in Java)

A thread in Java goes through different stages from start to end.
Below is the easy diagram and explanation.

⭐ Thread Life-Cycle Diagram (ASCII)

          +--------------------+
          |     NEW            |
          | (Thread created)   |
          +---------+----------+
                    |
                    | start()
                    v
          +--------------------+
          |   RUNNABLE         |
          | (Ready / Running)  |
          +---------+----------+
                    |
     +--------------+---------------------------+
     |              |                           |
     |              |                           |
     v              v                           v
+---------+   +------------+             +---------------+
| BLOCKED |   | WAITING    |             | TIMED_WAITING |
| (Lock   |   | (wait())   |             | (sleep(ms),   |
|  busy)  |   | join())    |             |  wait(ms))     |
+----+----+   +------+-----+             +-------+--------+
     |               |                           |
     |               |   notify()/notifyAll()     |
     +---------------+-------------+--------------+
                                   |
                                   v
                           +---------------+
                           |   RUNNABLE    |
                           +-------+-------+
                                   |
                                   v
                          +------------------+
                          |    TERMINATED    |
                          | (run() finished) |
                          +------------------+


⭐ Explanation of Each State

1. NEW

Thread object is created.
But it has not started running.

Thread t = new Thread();


2. RUNNABLE

Thread becomes ready to run.
After calling start(), it enters RUNNABLE.

t.start();

⚠️ NOTE:
In Java, RUNNABLE means:

The thread is either running OR
Waiting for CPU time.


3. BLOCKED

Thread wants a lock but another thread is holding it.
Happens in synchronized blocks.

Example:

Thread waits because synchronized block is locked by another thread.


4. WAITING

Thread waits without time limit.

Happens when:

wait()
join()
park()

Thread waits until someone signals:

notify()
notifyAll()


5. TIMED_WAITING

Thread waits for a fixed time.
Happens when:

sleep(1000)
wait(1000)
join(2000)

It will automatically wake up after time ends.


6. TERMINATED

Thread completed run() method.
Or thread crashed with error.

Thread cannot be restarted.


-------------------------------------------------


✅ Thread Life-Cycle (Easy Explanation)

A thread in Java goes through different states from start to end.
The life cycle looks like this:

NEW  →  RUNNABLE  →  RUNNING  →  BLOCKED/WAITING  →  RUNNABLE  →  TERMINATED


Let’s explain each state in simple words:



🔵 1. NEW (Thread Created)

Thread object is created but not started.

Example:
Thread t = new Thread();



🟢 2. RUNNABLE (Ready to Run)

After calling start(), the thread goes to RUNNABLE.

It is ready to run.
Waiting for CPU time.

Example:
t.start();  // moves to RUNNABLE



🟡 3. RUNNING (Currently Executing)

When CPU gives time to the thread, it becomes RUNNING.
It runs the run() method.



🔴 4. BLOCKED / WAITING / TIMED_WAITING

Thread pauses execution because:

Blocked
    Trying to access a resource locked by another thread.

Waiting
    Calling wait(), or waiting for another thread’s work.

Timed Waiting

Calling sleep(1000)
Calling wait(1000)
Calling join(1000)

Thread will return to RUNNABLE after time/condition is over.



⚫ 5. TERMINATED (Dead)

Thread finishes execution → program end of run().



🧭 Diagram (Simple)

        +---------+
        |  NEW    |
        +----+----+
             |
             | start()
             v
       +-----+------+
       |  RUNNABLE  |
       +-----+------+
             |
             | CPU gives time
             v
        +----+----+
        | RUNNING |
        +----+----+
             |
   +---------+-----------+
   |                     |
   v                     v
BLOCKED/WAITING   TIMED_WAITING
   |                     |
   +---------+-----------+
             |
             v
        RUNNABLE
             |
             v
        TERMINATED



✅ All Functions Used in Thread Life-Cycle

Here is every important method connected to the thread states:

| Function    | State Change            | Meaning (Easy Words)                          |
| ------------| ----------------------- | --------------------------------------------- |
| start()     | NEW → RUNNABLE          | Prepares thread to run                        |
| run()       | RUNNABLE → RUNNING      | Code executed by thread                       |
| sleep(ms)   | RUNNING → TIMED_WAITING | Thread pauses for some time                   |
| wait()      | RUNNING → WAITING       | Thread waits until notify()                   |
| wait(time)  | RUNNING → TIMED_WAITING | Waits for given time                          |
| notify()    | WAITING → RUNNABLE      | Wakes up one waiting thread                   |
| notifyAll() | WAITING → RUNNABLE      | Wakes all waiting threads                     |
| join()      | RUNNING → WAITING       | One thread waits for another thread to finish |
| yield()     | RUNNING → RUNNABLE      | Gives chance to other threads                 |
| stop()      | → TERMINATED            | (Deprecated, unsafe)                          |
| interrupt() | Changes states          | Interrupts sleeping/waiting thread            |



🧪 Simple Thread Program Showing Lifecycle Functions

class MyThread extends Thread {

    public void run() {
        System.out.println("Thread started...");

        try {
            System.out.println("Thread going to sleep...");
            sleep(1000); // TIMED_WAITING
        } catch (InterruptedException e) {
            System.out.println("Interrupted!");
        }

        System.out.println("Thread finishing...");
    }
}

public class Demo {
    public static void main(String[] args) throws Exception {

        MyThread t = new MyThread(); // NEW

        t.start();  // RUNNABLE

        t.join();   // main thread WAITING for t to finish

        System.out.println("Main thread ends.");
    }
}


⭐ Summary (Very Simple)

Thread created → NEW
Thread started → RUNNABLE
CPU runs thread → RUNNING
Thread sleeps/waits → WAITING or TIMED_WAITING
Thread dies → TERMINATED
      
      `},{id:53,question:"53. Runnable vs Thread",answer:"",codeExample:`
✅ Runnable vs Thread (Easy Explanation)

1️⃣ Runnable (Interface)

Runnable is only a task.

It cannot run by itself.
It must be passed into a Thread object to run.
Used when you want multiple threads to share the same task.


✔ Runnable Example

class MyTask implements Runnable {
    public void run() {
        System.out.println("Task running using Runnable...");
    }
}

class Demo {
    public static void main(String[] args) {
        MyTask obj = new MyTask();     // create runnable object
        Thread t = new Thread(obj);    // pass to Thread
        t.start();                     // start thread
    }
}



2️⃣ Thread (Class)

Thread is a class.
You extend Thread when you want a separate independent thread class.
Not recommended if you need multiple inheritance, because Java does not support it.


✔ Thread Example

class MyThread extends Thread {
    public void run() {
        System.out.println("Task running using Thread...");
    }
}

class Demo {
    public static void main(String[] args) {
        MyThread t = new MyThread();
        t.start();
    }
}



🔥 Key Differences (Simple Table)

| Runnable                                          | Thread                                                         |
| ------------------------------------------------- | -------------------------------------------------------------- |
| Interface                                         | Class                                                          |
| Only defines run() method                         | Contains thread methods like start(), sleep(), isAlive()       |
| Task only, no thread behavior                     | Represents an actual thread                                    |
| Best when task must be shared by multiple threads | Best when you want a dedicated thread class                    |
| Allows multiple inheritance (because interface)   | No multiple inheritance (extends class)                        |
| Flexible                                          | Less flexible                                                  |


🎯 When to Use What?

✔ Use Runnable when:

You want to separate task from thread.
You want multiple threads to execute the same task.
You want to use thread pool (ExecutorService).
Your class already extends another class.


✔ Use Thread when:

You need a full thread class.
Task is not reused.
Simpler for beginners.


⭐ Final Easy Summary

    Runnable = What the thread will do (task).
    Thread = Who will do the work (thread).

Runnable → gives job
Thread → runs the job
      
      `},{id:54,question:"54. Daemon thread example",answer:"",codeExample:`
✅ Daemon Thread in Java (Simple Explanation)

A Daemon Thread is a background thread that runs behind the main program.
Its job is to support other threads (like garbage collector).
When all user threads finish, daemon threads also automatically stop.

✔ User Thread → Normal thread (main work)
✔ Daemon Thread → Background helper thread


✅ Daemon Thread Example

👉 Simple Program

class MyDaemon extends Thread {
    public void run() {
        while (true) {
            System.out.println("Daemon thread running...");
            try {
                Thread.sleep(500);                               // this sleep time for daemon thread
            } catch (Exception e) {
                System.out.println(e);
            }
        }
    }
}

class Demo {
    public static void main(String[] args) {
        MyDaemon d = new MyDaemon();

        d.setDaemon(true);  // Make it daemon thread
        d.start();

        System.out.println("Main thread started");

        try {
            Thread.sleep(2000); // main thread runs for 2 sec
        } catch (Exception e) {
            System.out.println(e);
        }

        System.out.println("Main thread finished");
        // After main finishes → Daemon thread stops automatically
    }
}


✅ Output (Example)

Main thread started
Daemon thread running...
Daemon thread running...
Daemon thread running...
Daemon thread running...
Main thread finished


After "Main thread finished", the program ends → daemon thread stops automatically.


🔍 Important Points About Daemon Thread

| Feature         | Explanation                                    |
| --------------- | ---------------------------------------------- |
| Purpose         | Background task (cleanup, logging, monitoring) |
| Auto stop       | When all user threads finish                   |
| setDaemon(true) | Must be called before start()                  |
| Example         | Java Garbage Collector is daemon thread        |


📝 Rules

1. Must call setDaemon(true) before start()
    ❌ After start() = ERROR

2. If all user threads finish → JVM kills daemon threads.      


---------------------

Yes — the behavior is always predictable based on the two sleep times:

Daemon thread sleep: 500 ms
Main thread sleep: 4000 ms (4 seconds)

Let me show you exactly how many times the daemon thread will print.


✅ If daemon sleeps 500 ms and main sleeps 4000 ms

Daemon prints every = 500 ms  
Main thread runs for = 4000 ms


Number of daemon prints:

4000 / 500 = 8 times


So you will see around 8 prints.

📌 Expected Output (approx)
Main thread started
Daemon thread running...
Daemon thread running...
Daemon thread running...
Daemon thread running...
Daemon thread running...
Daemon thread running...
Daemon thread running...
Daemon thread running...
Main thread finished


(You may get 7 or 8 depending on exact CPU timing, but usually 8.)
      
      `},{id:55,question:"55. ThreadGroup example",answer:"",codeExample:`
✅ ThreadGroup in Java – Easy Explanation

A ThreadGroup is a group (collection) of threads.
It helps you:

Manage multiple threads together
Check how many threads are active
Interrupt all threads at once
Set priority for the whole group


🌟 Java Program: ThreadGroup Example

// A simple thread that prints message
class MyThread extends Thread {

    MyThread(ThreadGroup tg, String name) {
        super(tg, name); // put thread into the group
    }

    public void run() {
        System.out.println(getName() + " is running...");
    }
}

public class ThreadGroupExample {
    public static void main(String[] args) {

        // Create a group
        ThreadGroup group = new ThreadGroup("MyGroup");

        // Create threads inside this group
        MyThread t1 = new MyThread(group, "Thread-1");
        MyThread t2 = new MyThread(group, "Thread-2");

        // Start threads
        t1.start();
        t2.start();

        // Show group info
        System.out.println("Group Name: " + group.getName());
        System.out.println("Active Threads: " + group.activeCount());

        // List threads in the group
        group.list();   // prints all thread names
    }
}


✅ Output (Example)
Thread-1 is running...
Thread-2 is running...
Group Name: MyGroup
Active Threads: 2
java.lang.ThreadGroup[name=MyGroup,maxpri=10]
    Thread[Thread-1,5,MyGroup]
    Thread[Thread-2,5,MyGroup]



✅ Explain This in Super Easy Words

1️⃣ Create a ThreadGroup
ThreadGroup group = new ThreadGroup("MyGroup");

Like making a box named MyGroup.


2️⃣ Create Threads Inside Group
MyThread t1 = new MyThread(group, "Thread-1");

This puts Thread-1 inside MyGroup.


3️⃣ Start Threads
t1.start();
t2.start();

Threads begin running.


4️⃣ Get Group Information

group.getName();        // name of group
group.activeCount();    // number of running threads
group.list();           // print all threads in group



✅ Why ThreadGroup is useful?

| Feature       | Meaning                                |
| ------------- | -------------------------------------- |
| Group threads | Handle many threads together           |
| Monitoring    | Know how many threads are running      |
| Control       | Interrupt all threads at once          |
| Security      | Used in older Java for access controls |

      


✅ What is ThreadGroup?

A ThreadGroup is used to group multiple threads together.

Benefits:

You can start many threads,
Check how many threads are running,
Stop or interrupt all threads at once.


✅ Super Simple Explanation

Think like:

ThreadGroup = a container (box)
Threads = items placed inside the box

You create a group → put threads inside → manage them together.
      `},{id:56,question:"56. Stream hierarchy",answer:"",codeExample:`
✅ Java Stream Hierarchy (Easy Explanation)

In Java, streams are used to read data (input) and write data (output).
All stream classes come from two main parents:

⭐ 1. Root Classes

Java has two top-level abstract classes:

① InputStream (for reading bytes)
② OutputStream (for writing bytes)

These work with byte data (0s and 1s) → used for images, audio, PDF, etc.


⭐ 2. Byte Stream Hierarchy
                InputStream (read bytes)
                     |
            --------------------
            |        |         |
     FileInputStream BufferedInputStream  ObjectInputStream

                OutputStream (write bytes)
                     |
            ---------------------
            |        |          |
 FileOutputStream BufferedOutputStream ObjectOutputStream



 ⭐ 3. Character Stream Hierarchy


Character streams are used for text (A–Z, numbers, symbols).

             Reader (read characters)
                  |
          ---------------------
          |                   |
  FileReader         BufferedReader


             Writer (write characters)
                  |
          ---------------------
          |                   |
  FileWriter         BufferedWriter / PrintWriter


  ❤️ Easy Summary Table

| Type            | Root Class   | Example Classes                         | Used For                |
| --------------- | ------------ | --------------------------------------- | ----------------------- |
| Byte Input      | InputStream  | FileInputStream, BufferedInputStream    | Read bytes (image, PDF) |
| Byte Output     | OutputStream | FileOutputStream, BufferedOutputStream  | Write bytes             |
| Char Input      | Reader       | FileReader, BufferedReader              | Read text               |
| Char Output     | Writer       | FileWriter, BufferedWriter, PrintWriter | Write text              |

🌟 Super Easy Diagram

                Streams
                   |
        -------------------------
        |                       |
      Byte                    Character
 (InputStream/OutputStream) (Reader/Writer)



📝 Example (Very Simple)

Byte Stream Example

FileInputStream fis = new FileInputStream("data.txt");
int ch = fis.read();   // reads byte
fis.close();


Character Stream Example

FileReader fr = new FileReader("data.txt");
int ch = fr.read();   // reads character
fr.close();
      
      `},{id:57,question:"57. ",answer:"",codeExample:`
✅ Console I/O Operations (Very Simple Explanation)

Console I/O means taking input from the keyboard and showing output on the screen.

I = Input (user gives data)
O = Output (program prints data)

Java provides two main ways:


⭐ 1. Output using System.out

Use this to print something on screen.

✔ Example:

System.out.println("Hello World");  // prints with new line
System.out.print("Hello");          // prints without new line
System.out.printf("Value = %d", 10); // formatted output


⭐ 2. Input using Scanner class

Scanner is the most common and easiest way to take input.

✔ Example: Read name and age
import java.util.Scanner;

public class InputExample {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter your name: ");
        String name = sc.nextLine();  // read text

        System.out.print("Enter your age: ");
        int age = sc.nextInt();       // read number

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}


⭐ 3. Input using BufferedReader (old method)

Less common today but still important.

✔ Example:
import java.io.*;

public class BRExample {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        System.out.print("Enter your city: ");
        String city = br.readLine(); // read input as string

        System.out.println("City: " + city);
    }
}


⭐ 4. Console class (for password input)

Used when you want safe input (like password).

✔ Example:
public class ConsoleExample {
    public static void main(String[] args) {

        Console c = System.console();

        if (c == null) {
            System.out.println("Console not available");
            return;
        }

        String name = c.readLine("Enter name: ");
        char[] pwd = c.readPassword("Enter password: ");

        System.out.println("Name: " + name);
        System.out.println("Password length: " + pwd.length);
    }
}



⭐ Summary Table

| Operation               | Method               | Example          |
| ----------------------- | ---------------------| ---------------- |
| Print output            | System.out.println() | prints on screen |
| Read input              | Scanner              | sc.nextInt()     |
| Read input (old method) | BufferedReader       | br.readLine()    |
| Secure input            | Console              | readPassword()   |
      
      `},{id:61,question:"61. AWT hierarchy",answer:"",codeExample:`
⭐ AWT Hierarchy (Simple Explanation)

AWT (Abstract Window Toolkit) in Java provides all GUI (Graphics) components.
Java organizes all AWT classes in a hierarchy (family tree) starting from one main class:


🌳 Top of AWT Hierarchy

✔ 1. java.lang.Object

Every Java class comes from Object.

↓


✔ 2. java.awt.Component

This is the base class of all AWT components
(every button, label, text box, window… comes from Component)

↓


✔ 3. java.awt.Container

A Container can hold other components, like:

Frame
Panel
Dialog

↓


🎨 AWT Hierarchy (Simple Tree)

Object
  ↓
Component
  ├── Button
  ├── Label
  ├── TextField
  ├── TextArea
  ├── Checkbox
  ├── List
  ├── Scrollbar
  ├── Choice
  └── Container
        ├── Panel
        ├── Window
        │      └── Frame
        │      └── Dialog
        └── ScrollPane


🌟 EXPLANATION

✔ Component

Small UI elements (controls).

Examples:

Button
Label
TextField
TextArea
Checkbox


✔ Container

Component that can hold other components.

Examples:

    Panel → A blank area to place components
    Window → Base for Frames and Dialogs
    ScrollPane → Provides scrolling


✔ Frame
A window with title bar, minimize, close button.


✔ Dialog
Popup window.


🧩 Small Example Using AWT Components

import java.awt.*;

public class SimpleAWT {
    public static void main(String[] args) {

        Frame f = new Frame("My AWT Window");  // Frame (Container)

        Button b = new Button("Click Me");     // Component
        Label l = new Label("Hello AWT");      // Component

        f.setLayout(new FlowLayout());
        f.add(l);
        f.add(b);

        f.setSize(300, 200);
        f.setVisible(true);
    }
}



🖼️ Visual Representation of Output
 -----------------------------------------
|           My AWT Window                 |
|                                         |
|   Hello AWT    [ Click Me ]             |
|                                         |
 -----------------------------------------


"Hello AWT" → Label
"Click Me" → Button

Both added with FlowLayout, so they appear left-to-right.


🎯 Super Simple Summary

| AWT Element | Meaning                            |
| ----------- | ---------------------------------- |
| Component   | Single UI element (Button, Label…) |
| Container   | Can hold other components          |
| Panel       | Small container inside frame       |
| Window      | Base container                     |
| Frame       | Main application window            |
| Dialog      | Popup window                       |



🆚 Difference Table: Component vs Container

| Component                          | Container                             |
| ---------------------------------- | ------------------------------------- |
| Small UI element                   | Big UI element that holds components  |
| Cannot hold other components       | Can hold many components              |
| Examples: Button, Label, TextField | Examples: Frame, Panel, Dialog        |
| Used to display or input data      | Used to group and arrange components  |
| Does not have add() method         | Has add() method to add components    |
| Basic building block of UI         | Layout manager works inside container |
      
      `},{id:62,question:"62. Applet vs Swing vs AWT",answer:"",codeExample:`
✅ Applet vs Swing vs AWT (Simple Table – No Feature Column)

| Applet                                        | Swing                                              | AWT                                        |
| ----------------------------------------------| -------------------------------------------------- | ------------------------------------------ |
| Applet is a small Java program that runs      | Swing is advanced GUI library built on top of AWT. | AWT is the original GUI toolkit of Java.   |
 inside a browser or applet viewer.             |                                                    |                                            |
| Uses AWT components.                          | Uses lightweight components.                       | Uses heavyweight components.               |
| Limited UI controls.                          | Rich UI controls (tables, trees, buttons, dialog). | Basic UI controls only.                    |
| Requires browser support (now outdated).      | Works without browser; used for desktop apps.      | Works without browser but old and limited. |
| Slow and mostly deprecated.                   | Faster and modern.                                 | Slower and less flexible.                  |


---------------------

✅ Applet Example (with output)

Note: New Java versions removed applets, but this is for exam understanding.

Applet Code

import java.applet.Applet;
import java.awt.Graphics;

public class MyApplet extends Applet {
    public void paint(Graphics g) {
        g.drawString("Hello Applet!", 50, 50);
    }
}


HTML File
<applet code="MyApplet.class" width="300" height="200"></applet>


Output
Hello Applet!

(Displayed inside browser/applet viewer window)

 -----------------------------
|                             |
|        Hello Applet!        |
|                             |
 -----------------------------
             ↑
        Drawn at (50,50)



✅ Swing Example (with output)
Swing Code

import javax.swing.*;

public class MySwing {
    public static void main(String[] args) {
        JFrame f = new JFrame("Swing Example");
        JLabel label = new JLabel("Hello Swing!");
        f.add(label);

        f.setSize(300, 200);
        f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);  //When you click the close button (X), the program exits completely.
        f.setVisible(true);
    }
}


Output

A window appears:

+--------------------------+
|     Swing Example        |
|  Hello Swing!            |
+--------------------------+



✅ AWT Example (with output)
AWT Code

import java.awt.*;

public class MyAwt {
    public static void main(String[] args) {
        Frame f = new Frame("AWT Example");
        Label l = new Label("Hello AWT!");
        f.add(l);

        f.setSize(300, 200);
        f.setVisible(true);
    }
}


Output

A window appears:

+--------------------------+
|      AWT Example         |
|   Hello AWT!             |
+--------------------------+


⭐ Final Quick Summary

| Applet           | Swing                 | AWT                      |
| ---------------- | --------------------- | ------------------------ |
| Needs browser    | Desktop GUI           | Desktop GUI              |
| Uses AWT         | Uses Swing components | Uses OS-based components |
| Heavy & outdated | Modern & popular      | Oldest toolkit           |


---------------------

| AWT                            | Swing                        |
| ------------------------------ | ---------------------------- |
| Uses Frame                     | Uses JFrame                  |
| Uses Label                     | Uses JLabel                  |
| Older, heavy-weight components | New, light-weight & flexible |
| OS-dependent look              | Same look on all OS          |

      `},{id:63,question:"63. FlowLayout, GridLayout, BorderLayout",answer:"",codeExample:`
1️⃣ FlowLayout
✔ What it does?

Places components left to right (like words in a sentence).
When space is finished → goes to next line.
Default layout of JPanel.


✅ Example: FlowLayout

import java.awt.*;
import javax.swing.*;

public class FlowLayoutExample {
    public static void main(String[] args) {
        JFrame frame = new JFrame("FlowLayout Example");
        frame.setSize(300, 150);

        frame.setLayout(new FlowLayout());

        frame.add(new JButton("Button 1"));
        frame.add(new JButton("Button 2"));
        frame.add(new JButton("Button 3"));
        frame.add(new JButton("Button 4"));

        frame.setVisible(true);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}


📌 Output (Description)
Button 1   Button 2   Button 3   Button 4

All buttons appear in one horizontal line.


2️⃣ GridLayout
✔ What it does?

Arranges components in rows & columns (like a table/grid).
Each cell has equal size.


✅ Example: GridLayout (2 rows × 3 columns)

import java.awt.*;
import javax.swing.*;

public class GridLayoutExample {
    public static void main(String[] args) {
        JFrame frame = new JFrame("GridLayout Example");
        frame.setSize(300, 200);

        frame.setLayout(new GridLayout(2, 3)); // 2 rows, 3 columns

        frame.add(new JButton("1"));
        frame.add(new JButton("2"));
        frame.add(new JButton("3"));
        frame.add(new JButton("4"));
        frame.add(new JButton("5"));
        frame.add(new JButton("6"));

        frame.setVisible(true);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}


📌 Output (Description)
1   2   3
4   5   6

Buttons fill the grid equally.



3️⃣ BorderLayout
✔ What it does?

Divides the frame into 5 areas:

NORTH (top)
SOUTH (bottom)
EAST (right)
WEST (left)
CENTER (middle)


✅ Example: BorderLayout

import java.awt.*;
import javax.swing.*;

public class BorderLayoutExample {
    public static void main(String[] args) {
        JFrame frame = new JFrame("BorderLayout Example");
        frame.setSize(300, 200);

        frame.setLayout(new BorderLayout());

        frame.add(new JButton("North"), BorderLayout.NORTH);
        frame.add(new JButton("South"), BorderLayout.SOUTH);
        frame.add(new JButton("East"), BorderLayout.EAST);
        frame.add(new JButton("West"), BorderLayout.WEST);
        frame.add(new JButton("Center"), BorderLayout.CENTER);

        frame.setVisible(true);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}


📌 Output (Description)
North (top)
West   Center   East
South (bottom)


✔ Summary Table

| Layout           | Works Like      | Component Arrangement            |
| ---------------- | --------------- | -------------------------------- |
| FlowLayout       | Text line       | Left → Right                     |
| GridLayout       | Table/Grid      | Equal rows × columns             |
| BorderLayout     | Screen sections | North, South, East, West, Center |

      
      
      
      `},{id:64,question:"64. Event classes & listener interfaces",answer:"",codeExample:`
✅ Event Classes & Listener Interfaces (Easy Explanation)

In Java GUI (AWT/Swing), events happen when the user does something —
✔ clicks a button
✔ presses a key
✔ moves the mouse
✔ closes a window

To handle these actions, Java uses:


1️⃣ Event Classes

These are objects created when an event happens.

Examples:

ActionEvent → when button is clicked
MouseEvent → when mouse is clicked/moved
KeyEvent → when keyboard key is pressed
WindowEvent → when window is opened/closed
ItemEvent → when checkbox/list item is selected


2️⃣ Listener Interfaces

These are interfaces that contain methods to handle the events.

Examples:

ActionListener → handles button clicks
MouseListener → handles mouse actions
KeyListener → handles keyboard input
WindowListener → handles window actions
ItemListener → handles item-selection

Listeners wait and listen for the event → when event occurs → listener method runs.


✅ Simple Table

| Event Class   | Listener Interface   | When it occurs    |
| --------------| ---------------------| ------------------|
| ActionEvent   | ActionListener       | Button click      |
| MouseEvent    | MouseListener        | Mouse click/move  |
| KeyEvent      | KeyListener          | Key press         |
| WindowEvent   | WindowListener       | Window open/close |
| ItemEvent     | ItemListener         | Item selected     |


⭐ Simple Example 1: ActionListener (Button Click)
✔ Code

import java.awt.*;
import java.awt.event.*;

public class ButtonExample {
    public static void main(String[] args) {

        Frame f = new Frame("Button Click Example"); // Create window
        Button b = new Button("Click Me");           // Create button

        b.setBounds(80, 80, 100, 40); // Button position + size

        // When button is clicked → this code runs
        b.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                System.out.println("Button clicked!");
            }
        });

        f.add(b);           // Add button to frame
        f.setSize(300, 300);
        f.setLayout(null);  // No layout → manual positioning
        f.setVisible(true); // Show window
    }
}


✔ Output (in console)
Button clicked!



⭐ Simple Example 2: MouseListener

import java.awt.*;
import java.awt.event.*;

public class MouseExample extends Frame implements MouseListener {

    MouseExample() {
        addMouseListener(this); // Register mouse listener
        setSize(300, 300);
        setVisible(true);
    }

    public void mouseClicked(MouseEvent e) {
        System.out.println("Mouse Clicked!");
    }

    // Empty methods (must be written because MouseListener has 5 methods)
    public void mousePressed(MouseEvent e) {}
    public void mouseReleased(MouseEvent e) {}  // this all not write to worked ok
    public void mouseEntered(MouseEvent e) {}
    public void mouseExited(MouseEvent e) {}

    public static void main(String[] args) {
        new MouseExample(); // Create window
    }
}


✔ Output
Mouse Clicked!



⭐ Simple Example 3: KeyListener

import java.awt.*;
import java.awt.event.*;

public class KeyExample extends Frame implements KeyListener {

    Label l;

    KeyExample() {
        l = new Label("Press any key");   // Text label
        l.setBounds(50, 50, 200, 30);
        add(l);

        addKeyListener(this); // Listen for keyboard keys

        setSize(300, 300);
        setLayout(null);
        setVisible(true);
    }

    public void keyPressed(KeyEvent e) {
        l.setText("Key Pressed: " + e.getKeyChar()); // Show pressed key
    }

    public void keyReleased(KeyEvent e) {}
    public void keyTyped(KeyEvent e) {}

    public static void main(String[] args) {
        new KeyExample();
    }
}


✔ Output (changes on screen)
Key Pressed: a


(when user presses "a")



⭐ Simple Example 4: WindowListener

import java.awt.*;
import java.awt.event.*;

public class WindowExample extends Frame {

    WindowExample() {

        // When user clicks close button (X)
        addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent e) {
                System.out.println("Window Closed!");
                System.exit(0);
            }
        });

        setSize(300, 300);
        setVisible(true);
    }

    public static void main(String[] args) {
        new WindowExample();
    }
}


✔ Output:
Window Closed!


🎉 Summary (Very Simple)

Event Class = what happened
Listener Interface = what to run when it happens
      
      `},{id:65,question:"65. Adapter classes",answer:"",codeExample:`
⭐ Adapter Classes (Easy Explanation)

In Java AWT/Swing, listener interfaces have many methods.

Example:
MouseListener has 5 methods → but sometimes you need only 1.

❌ Problem

If you use MouseListener directly, you must write all methods, even empty ones.


✅ Solution → Adapter Class

Java provides Adapter Classes (like MouseAdapter, KeyAdapter, WindowAdapter) that already contain empty 
method bodies.

So you only override the method you need.



⭐ Example 1: MouseAdapter (very easy)
✔ Code:

import java.awt.*;
import java.awt.event.*;

public class MouseAdapterExample extends Frame {

    MouseAdapterExample() {
        setTitle("Mouse Adapter Demo");
        setSize(300, 200);
        setVisible(true);

        // Using Adapter Class
        addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                System.out.println("Mouse Clicked at: " + e.getX() + ", " + e.getY());
            }
        });
    }

    public static void main(String[] args) {
        new MouseAdapterExample();
    }
}


✔ Output (console):
Mouse Clicked at: 120, 85
Mouse Clicked at: 200, 140



⭐ Example 2: WindowAdapter (easy window closing)
✔ Code:

import java.awt.*;
import java.awt.event.*;

public class WindowAdapterExample extends Frame {

    WindowAdapterExample() {
        setSize(300, 200);
        setVisible(true);

        addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent e) {
                System.out.println("Window is closing...");
                System.exit(0);
            }
        });
    }

    public static void main(String[] args) {
        new WindowAdapterExample();
    }
}


✔ Output:
Window is closing...



⭐ Example 3: KeyAdapter (key press event)
✔ Code:

import java.awt.*;
import java.awt.event.*;

public class KeyAdapterExample extends Frame {

    KeyAdapterExample() {
        setSize(300, 200);
        setVisible(true);

        addKeyListener(new KeyAdapter() {
            public void keyPressed(KeyEvent e) {
                System.out.println("Key Pressed: " + e.getKeyChar());
            }
        });
    }

    public static void main(String[] args) {
        new KeyAdapterExample();
    }
}


✔ Output:
Key Pressed: a
Key Pressed: b
Key Pressed: Enter


⭐ Summary Table (Simple)

| Adapter Class    | Purpose                            |
| -----------------| ---------------------------------- |
| MouseAdapter     | Handle only required mouse methods |
| KeyAdapter       | Handle only key methods            |
| WindowAdapter    | Handle window events easily        |
| FocusAdapter     | Handle focus gained/lost           |
| ComponentAdapter | Handle component resize/move       |

      
      `},{id:67,question:"67. Frame creation (inheritance/association)",answer:"",codeExample:`
✅ 1. Frame Creation using Inheritance

You extend the Frame class.

✔ Simple Example

import java.awt.*;

class MyFrame extends Frame {

    MyFrame() {
        setTitle("Inheritance Frame");
        setSize(300, 200);
        setVisible(true);
    }

    public static void main(String[] args) {
        new MyFrame();  // object created → frame appears
    }
}


✔ Output (Window)
A window opens with:

Title: Inheritance Frame
Size: 300 x 200



✅ 2. Frame Creation using Association

You create Frame object separately (no extends).


✔ Simple Example

import java.awt.*;

public class AssocFrame {

    public static void main(String[] args) {
        Frame f = new Frame("Association Frame");

        f.setSize(300, 200);
        f.setVisible(true);
    }
}


✔ Output (Window)
A window opens with:

Title: Association Frame
Size: 300 x 200


✅ Difference Between Inheritance & Association

| Method          | Meaning                   | Example                       |
| --------------- | ------------------------- | ----------------------------- |
| Inheritance     | Class becomes a Frame     | class MyFrame extends Frame   |
| Association     | Class uses a Frame object | Frame f = new Frame()         |


⭐ Which is better?

Inheritance → When your class is a GUI window
Association → When your class has a GUI window (recommended in large apps)





| Feature       | Inheritance (extends Frame)                            | Association (Frame f = new Frame())                 |
| ------------- | ------------------------------------------------------ | ----------------------------------------------------|
| What it means | Your class is a Frame                                  | Your class has a Frame                              |
| Syntax        | class A extends Frame                                  | Frame f = new Frame()                               |
| Access        | You directly use setSize(), add(), setVisible()        | You access through object → f.add(), f.setVisible() |
| Good for      | Creating UI classes where the class itself is a window | When you want multiple frames or composition        |
| Code length   | Shorter                                                | Little longer                                       |
| Flexibility   | Less (because class already extends Frame)             | More (class can extend something else)              |




      `},{id:68,question:"68. Swing features",answer:"",codeExample:`
✅ Swing Features (Simple & Easy)

Swing is a Java GUI (Graphical User Interface) toolkit.
It is an improved version of AWT and used to build windows, buttons, forms, tables, etc.


⭐ Main Features of Swing

1. Pure Java (Platform Independent)

Swing is written completely in Java → works the same on Windows, Linux, macOS.


2. Lightweight Components

Swing does not depend on OS components.
Example: Swing button looks same on all operating systems.


3. Rich Set of Components

Swing provides many GUI controls:

✔ JButton
✔ JLabel
✔ JTextField
✔ JTable
✔ JList
✔ JComboBox
✔ JProgressBar
✔ JOptionPane (Message box)


4. MVC Architecture

Swing uses Model–View–Controller, meaning:

    Model = data
    View = UI
    Controller = events
        Allows better separation and flexibility.


5. Pluggable Look & Feel

You can change UI design:

✔ Metal Look
✔ Windows Look
✔ Motif Look
✔ Nimbus Look


6. Highly Customizable

You can change colors, borders, fonts, size, icons easily.


7. Supports Double Buffering

Gives smooth graphics and reduces screen flicker.


8. Event Handling Support

Swing uses Java event model to handle:

✔ Button click
✔ Mouse events
✔ Keyboard events


9. Lightweight Menus & Dialogs

Swing gives:

✔ JMenu
✔ JDialog
✔ JOptionPane


✅ Simple Swing Example

import javax.swing.*;

public class SimpleSwing {
    public static void main(String[] args) {

        JFrame frame = new JFrame("My Swing Window");
        JButton btn = new JButton("Click Me!");

        frame.add(btn);
        frame.setSize(300, 200);
        frame.setLayout(null);

        btn.setBounds(100, 80, 100, 30);

        frame.setVisible(true);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}


🎯 Output (What You Will See)

A window pops up:

+------------------------------+
|        My Swing Window       |
|                              |
|            [Click Me!]       |
+------------------------------+      
      
      `},{id:69,question:"69. JComponent hierarchy",answer:"",codeExample:`
⭐ What is JComponent Hierarchy?

Swing components (buttons, labels, text fields, etc.) are arranged in a class hierarchy.
All Swing components come from a common parent class → JComponent.

So:
👉 Every Swing UI component is a child (or grandchild) of JComponent.


🌳 JComponent Hierarchy Diagram (VERY SIMPLE)

Object
  └── Component
        └── Container
              └── JComponent
                    ├── JLabel
                    ├── JButton
                    ├── JTextField
                    ├── JTextArea
                    ├── JCheckBox
                    ├── JRadioButton
                    ├── JList
                    ├── JTable
                    ├── JPanel
                    ├── JScrollPane
                    └── JMenu


📘 Hierarchy Levels Explained
1. Object

Top-most class in Java.


2. Component

Basic graphical element.


3. Container

A component that can contain other components.

Examples:

Panel
Frame
JPanel
JFrame


4. JComponent

Parent of all Swing UI components.

Provides:
✔ Borders
✔ Tooltips
✔ Double buffering
✔ Painting
✔ Keyboard handling


5. Swing Components (Children of JComponent)

| Component    | Purpose            |
| -------------| ------------------ |
| JLabel       | Show text or image |
| JButton      | Button             |
| JTextField   | Single-line input  |
| JTextArea    | Multi-line text    |
| JCheckBox    | Checkbox           |
| JRadioButton | Radio button       |
| JList        | List               |
| JTable       | Table              |
| JPanel       | A panel/container  |
| JScrollPane  | Scroll bars        |
| JMenu        | Menu item          |


📌 Why is JComponent important?

Because all Swing components:

look consistent (same theme)
behave consistently
support common features like:

    setBackground()
    setFont()
    setToolTipText()
    setBorder()



⭐ 10-Point Exam Answer (Short Notes)
JComponent Hierarchy:

In Java Swing, all GUI components are derived from the class JComponent.
The hierarchy is:

Object → Component → Container → JComponent → Swing components.

JComponent is the direct parent for components like:
JButton, JLabel, JTextField, JTextArea, JCheckBox, JRadioButton, JList, JTable, JPanel, JScrollPane, etc.

JComponent provides common functionalities such as:
double buffering, borders, tooltips, painting support, and uniform look and feel.

Thus, Swing components share a consistent architecture through JComponent.

      
      `},{id:70,question:"70. Applet life-cycle",answer:"",codeExample:`
✅ Applet Life-Cycle (Easy Explanation)

A Java Applet runs inside a browser or applet viewer.
It passes through 4 main life-cycle methods:


1️⃣ init()

Called only once when the applet is first loaded.
Used to initialize variables, UI components.


2️⃣ start()

Called every time the applet becomes active or visible.
Used to start animations, threads, timers.


3️⃣ paint(Graphics g)

Called automatically whenever the applet needs to draw something.
Used for drawing shapes, text, images.


4️⃣ stop()

Called when the applet becomes inactive, e.g., user switches tab.
Used to pause animations or threads.


5️⃣ destroy()

Called only once when the applet is closed.
Used to clean up memory or close resources.


📌 Applet Life-Cycle Diagram

        +-----------+
        |   init()  |   ← Called only once
        +-----+-----+
              |
              ↓
        +-----------+
        |  start()  |   ← Called every time applet becomes active
        +-----+-----+
              |
              ↓
        +-----------+
        | paint()   |   ← Used for drawing / UI
        +-----+-----+
              |
              ↓
        +-----------+
        |  stop()   |   ← Called when applet goes inactive
        +-----+-----+
              |
              ↓
        +-----------+
        | destroy() |   ← Called once when applet is closed
        +-----------+


⭐ Simple Applet Program (Very Easy)

import java.applet.Applet;
import java.awt.Graphics;

public class MyApplet extends Applet {

    public void init() {
        System.out.println("init() called");
    }

    public void start() {
        System.out.println("start() called");
    }

    public void paint(Graphics g) {
        g.drawString("Hello from Applet!", 50, 50);
        System.out.println("paint() called");
    }

    public void stop() {
        System.out.println("stop() called");
    }

    public void destroy() {
        System.out.println("destroy() called");
    }
}


📌 HTML File to Run Applet

<html>
<body>
<applet code="MyApplet.class" width="300" height="200"></applet>
</body>
</html>


🖥️ Output on Screen
Hello from Applet!

(Displayed in the applet window)


🧾 Output in Console
init() called
start() called
paint() called


If you switch tab:
stop() called


When applet viewer closes:
destroy() called
      

-------------------------------------------------------------


⭐ What is an Applet? (Simple Explanation)

Applet is a small Java program that runs inside a web browser.
It is not a full application — it needs a browser or an applet viewer to run.

Think of an applet like a tiny mini-program you embed inside a webpage.


✔ Key Points (Easy Words)

🔹 1. Applet runs inside browser

You cannot run an applet by typing java MyClass.
It runs in:

Web browser (old browsers supported applets)
Applet Viewer tool (appletviewer command)


🔹 2. Applet cannot access the computer directly

For security reasons:

Cannot read local files
Cannot write files
Cannot access system features
Applet is sandboxed (restricted environment).


🔹 3. Applet is used for GUI

Applet is mostly used for:

Buttons
Graphics
Animations
Small interactive programs


🔹 4. Applet is in java.applet package

You must extend:

import java.applet.Applet;
import java.awt.Graphics;

public class MyApplet extends Applet {
    public void paint(Graphics g) {
        g.drawString("Hello Applet!", 50, 50);
    }
}


⭐ Applet Example (Simple)
Java Code

import java.applet.Applet;
import java.awt.Graphics;

public class FirstApplet extends Applet {

    public void paint(Graphics g) {
        g.drawString("Welcome to My First Applet!", 30, 30);
    }
}


HTML File (to run applet)

<html>
<body>
<applet code="FirstApplet.class" width="300" height="100">
</applet>
</body>
</html>


⭐ Output (Simple Visual)
+----------------------------------------+
|                                        |
|   Welcome to My First Applet!          |
|                                        |
+----------------------------------------+


✔ In Short
| Applet            | Meaning                                             |
| ------------------| --------------------------------------------------- |
| Applet            | A small Java program that runs inside a web browser |
| Runs using        | Browser or appletviewer                             |
| Used for          | Graphics, animations, small GUI tasks               |
| Lifecycle methods | init(), start(), paint(), stop(), destroy()         |
| Secure            | Cannot access system files                          |


      `},{id:71,question:"71. showDocument(), getCodeBase()",answer:"",codeExample:`
🌐 showDocument()
✔ Used to open a webpage or URL from an applet.
📌 Meaning

It tells the browser to open another webpage, another HTML file, or any URL.

📌 Where it comes from

It is a method of:
AppletContext class → accessed using getAppletContext().


✅ Example

import java.applet.*;
import java.awt.*;

public class OpenURLApplet extends Applet {

    public void init() {
        AppletContext ac = getAppletContext();    //It is an object that gives your applet access to the browser environment.
        try {                                       Think like this:-> “Hey browser, give me permission to interact with you.”
            URL url = new URL("https://www.google.com");
            ac.showDocument(url);   // opens Google in browser
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}


🟦 Output

When applet loads → Browser opens https://www.google.com



🌐 getCodeBase()
✔ Used to get the URL/location of the folder where the applet .class file is stored.

📌 Meaning

It returns the base URL of the applet program.

Example:
If your applet is in:

http://example.com/myapp/


Then:
getCodeBase() → returns http://example.com/myapp/


✅ Example

import java.applet.*;
import java.awt.*;

public class CodeBaseApplet extends Applet {

    public void init() {
        URL codeURL = getCodeBase();
        System.out.println("Applet Code Base: " + codeURL);
    }
}


🟦 Output
Applet Code Base: http://example.com/myapp/


✔ Summary Table

| Method             | Meaning                     | Used For                         |
| ------------------ | --------------------------- | -------------------------------- |
| getCodeBase()      | Returns applet's folder URL | To know where applet is stored   |
| showDocument()     | Opens a webpage/URL         | To navigate user to another page |
      
      
      `},{id:72,question:"72. Graphics class methods",answer:"",codeExample:`
✅ What is the Graphics class?

When you draw shapes, text, or images on a component (Frame, JPanel, Applet), Java gives you a Graphics 
object.
This object contains methods like drawLine(), drawRect(), drawOval(), etc.

You normally get it inside:

public void paint(Graphics g) {
    // use g to draw
}

g is your Graphics object.


✅ Important Graphics Methods (Simple Explanation)

Below are the most commonly used Graphics methods with arguments explained.


1️⃣ drawLine(int x1, int y1, int x2, int y2)

Draws a line between two points.

Arguments
| Argument | Meaning          |
| -------- | ---------------- |
| x1       | starting point X |
| y1       | starting point Y |
| x2       | ending point X   |
| y2       | ending point Y   |

Example:
g.drawLine(10, 20, 100, 20);


2️⃣ drawRect(int x, int y, int width, int height)

Draws a rectangle outline.

Arguments:

x, y → top-left corner
width, height

Example:
g.drawRect(50, 50, 120, 80);


3️⃣ fillRect(int x, int y, int width, int height)

Same as drawRect but filled with color.


4️⃣ drawOval(int x, int y, int width, int height)

Draws an oval inside an imaginary rectangle.

Example:
g.drawOval(50, 50, 100, 100); // perfect circle


5️⃣ fillOval(int x, int y, int width, int height)

Filled oval.


6️⃣ drawString(String msg, int x, int y)

Writes text at given location.

Example:
g.drawString("Hello Java", 50, 50);


7️⃣ setColor(Color c)

Changes drawing color.

Example:
g.setColor(Color.red);
g.drawLine(10, 10, 100, 10);


8️⃣ setFont(Font f)

Changes text font.


9️⃣ drawArc(int x, int y, int width, int height, int startAngle, int arcAngle)
Arguments:
| Argument      | Meaning                                         |
| ------------- | ----------------------------------------------- |
| x, y          | top-left of bounding rectangle                  |
| width, height | size of oval                                    |
| startAngle    | angle where arc begins (0 at 3 o’clock)         |
| arcAngle      | how much to draw (+ clockwise, – anticlockwise) |

Example:
g.drawArc(50, 50, 100, 100, 0, 180); // semicircle



✅ Simple Example + Output Description
Program

import java.awt.*;
import javax.swing.*;

public class GraphicsExample extends JPanel {
    public void paint(Graphics g) {
        // Line
        g.drawLine(10, 20, 150, 20);

        // Rectangle
        g.drawRect(20, 50, 100, 60);

        // Filled Rectangle
        g.setColor(Color.blue);
        g.fillRect(20, 130, 100, 60);

        // Oval
        g.setColor(Color.red);
        g.drawOval(150, 50, 80, 80);

        // Text
        g.setColor(Color.black);
        g.drawString("Hello Graphics", 20, 220);
    }

    public static void main(String[] args) {
        JFrame f = new JFrame("Graphics Demo");
        f.add(new GraphicsExample());
        f.setSize(300, 300);
        f.setVisible(true);
        f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}


✅ Output (Explanation)

You will see:

✔ A horizontal line
✔ A rectangle
✔ A filled blue rectangle
✔ A red circle
✔ Text "Hello Graphics"
      
      
      `},{id:73,question:"73. Event handling approaches",answer:"",codeExample:`

✅ Event Handling Approaches in Java

When you click a button, press a key, move the mouse — Java creates events.
To handle these events, Java provides three main approaches:


⭐ 1. Using Separate Listener Class

You create a separate class that implements a listener interface (like ActionListener).

✔ Easy to understand
✔ Good for big programs

Example

import java.awt.*;
import java.awt.event.*;

class MyListener implements ActionListener {
    public void actionPerformed(ActionEvent e) {
        System.out.println("Button clicked!");
    }
}

public class Test {
    public static void main(String[] args) {

        Frame f = new Frame("Demo");
        Button b = new Button("Click Me");

        b.addActionListener(new MyListener()); // using separate class

        f.add(b);
        f.setSize(300, 300);
        f.setVisible(true);
    }
}

Output
Button clicked!



⭐ 2. Using Anonymous Inner Class

No need to create a separate file.
Write listener inside the code directly.

✔ Short
✔ Mostly used in Swing

Example

Button b = new Button("Click Me");

b.addActionListener(new ActionListener() {
    public void actionPerformed(ActionEvent e) {
        System.out.println("Button clicked using anonymous class!");
    }
});


Output
Button clicked using anonymous class!



⭐ 3. Using Current Class (implements listener)

Your class itself implements the listener interface.

✔ Very common
✔ For small AWT/Swing apps

Example

import java.awt.*;
import java.awt.event.*;

public class MyFrame extends Frame implements ActionListener {

    Button b;

    MyFrame() {
        b = new Button("Click");
        b.addActionListener(this); // current class as listener
        add(b);

        setSize(300,300);
        setVisible(true);
    }

    public void actionPerformed(ActionEvent e) {
        System.out.println("Button clicked!");
    }

    public static void main(String[] args) {
        new MyFrame();
    }
}


Output
Button clicked!


⭐ QUICK SUMMARY TABLE

| Approach                          | Description                 | Example Use       |
| ----------------------------------| --------------------------- | ----------------- |
| Separate Listener Class           | Listener in another class   | Large programs    |
| Anonymous Inner Class             | Listener written inline     | Buttons, Swing UI |
| Current Class implements Listener | Frame itself handles events | Small apps        |

      
      
      `},{id:74,question:"74. Registration form using AWT",answer:"",codeExample:`
✅ Registration Form using AWT (Simple Example)
✔ Uses AWT components
✔ Uses Event Handling
✔ Easy to understand


📌 Program: Registration Form (AWT)

import java.awt.*;
import java.awt.event.*;

public class RegistrationForm extends Frame implements ActionListener {

    // Components
    Label l1, l2, l3, msg;
    TextField t1, t2;
    Button submit;

    RegistrationForm() {

        setTitle("Registration Form");
        setSize(300, 250);
        setLayout(new FlowLayout());

        l1 = new Label("Name:");
        t1 = new TextField(20);

        l2 = new Label("Email:");
        t2 = new TextField(20);

        submit = new Button("Submit");
        submit.addActionListener(this);

        msg = new Label("");

        // Add components
        add(l1);
        add(t1);
        add(l2);
        add(t2);
        add(submit);
        add(msg);

        setVisible(true);
    }

    // Event handling
    public void actionPerformed(ActionEvent e) {
        String name = t1.getText();
        String email = t2.getText();

        msg.setText("Registered: " + name + " | " + email);
    }

    public static void main(String[] args) {
        new RegistrationForm();
    }
}


✅ OUTPUT (How it looks)
-------------------------------
|       Registration Form     |
| Name:   [___________]       |
| Email:  [___________]       |
| [Submit]                    |
| Registered: (after click)   |
-------------------------------


When user enters:

Name  → Raj
Email → raj@gmail.com


After clicking Submit, message displays:

Registered: Raj | raj@gmail.com



⭐ Explanation (Very Simple)

✔ Frame

Window where form is shown.


✔ Label

Shows text like “Name”, “Email”.


✔ TextField

User enters text.


✔ Button

User clicks to submit form.


✔ ActionListener

Detects button click.


✔ actionPerformed()

Runs when button is clicked.
Reads data → shows message.
      
      `},{id:75,question:"75. Difference between heavyweight & lightweight components",answer:"",codeExample:`
Difference between Heavyweight & Lightweight Components

| Type of Component     | Meaning                                                                   | Examples                                               | Why?                                                  |
| ----------------------| --------------------------------------------------------------------------| -------------------------------------------------------| ----------------------------------------------------- |
| Heavyweight Component | Depends on OS (Operating System) to draw UI. Has its own native resource. | AWT components → Button, Frame, Label, TextField       | They use OS-level code, so they are heavier.          |
| Lightweight Component | Does NOT depend on OS. Drawn completely by Java.                          | Swing components → JButton, JFrame, JLabel, JTextField | No native OS resource, so they are faster & flexible. |


Heavyweight (AWT)

Java asks Windows/Mac/Linux to draw the component.
Example: AWT Button looks different on Windows vs Mac.
Uses system resources → heavy.


Lightweight (Swing)

Java draws everything by itself.
Looks same on every OS.
Runs faster → light.


Simple Example

Heavyweight Example (AWT Button)
import java.awt.*;

class AWTExample {
    public static void main(String[] args) {
        Frame f = new Frame("AWT Example");
        Button b = new Button("Click");

        b.setBounds(60, 60, 80, 30);
        f.add(b);

        f.setSize(300, 200);
        f.setLayout(null);
        f.setVisible(true);
    }
}



Lightweight Example (Swing Button)

import javax.swing.*;

class SwingExample {
    public static void main(String[] args) {
        JFrame f = new JFrame("Swing Example");
        JButton b = new JButton("Click");

        b.setBounds(60, 60, 80, 30);
        f.add(b);

        f.setSize(300, 200);
        f.setLayout(null);
        f.setVisible(true);
    }
}


Outputs (Simple)

AWT Output
Window with AWT Button (OS look)


Swing Output

Window with Swing Button (Modern Java look)
      
      `},{id:76,question:"76. How Swing implements MVC",answer:"",codeExample:`
How Swing Implements MVC

Swing uses a special design called MVC – Model, View, Controller, but in Swing these three parts are not 
fully separate.

Swing actually uses a Modified MVC (a.k.a. “Pluggable Look and Feel MVC”).

✅ Meaning of MVC in Swing

Model → Stores data
View → Shows the data on the screen
Controller → Handles user actions (mouse/keyboard)

But Swing combines View + Controller in one place.


So Swing is basically:

Swing = Model + (View + Controller together)
This is also called “Model–Delegate Architecture”.


How Swing Splits MVC

✔ 1. Model (Separate class)

Each Swing component has its own model object.

Examples:

JTextField uses Document
JList uses ListModel
JTable uses TableModel
JButton uses ButtonModel

👉 These handle data + state.


✔ 2. View (Component UI)

This is responsible for drawing the component.

Examples:

BasicButtonUI
BasicTextFieldUI


✔ 3. Controller (Event handling)

Swing does not keep controller separate.
The component itself works as the controller.

Example:

JButton listens for clicks using ActionListener.
JTextField listens for typing using KeyListener.


Simple Example: JButton MVC

JButton btn = new JButton("Save");

// Model
ButtonModel model = btn.getModel();

// Controller (event handling)
btn.addActionListener(e -> {
    System.out.println("Button clicked!");
});


Explanation:

✔ Model → ButtonModel stores pressed/not pressed, enabled/disabled state
✔ View → Draws the button
✔ Controller → ActionListener is inside the component

Swing merges View + Controller, so user events are handled in the component.


Why Swing uses Modified MVC?

1. Easier for developers
2. Better performance than 3 separate classes
3. Allows Look and Feel changes (Windows, Metal, Nimbus)


Short Summary

| Part              | Swing Implementation                           |
| ------------------| ---------------------------------------------- |
| Model             | Separate class (e.g., ListModel, Document)     |
| View              | UI delegate (BasicButtonUI)                    |
| Controller        | Inside the component (event methods)           |
| Architecture type | Model–Delegate (Modified MVC)                  |
      
      `},{id:77,question:"77. What is JPanel?",answer:"",codeExample:`
✅ What is Swing? (Simple Explanation)

Swing is a Java GUI (Graphical User Interface) toolkit used to make desktop applications.

Example apps you can make using Swing:

    ✔ Calculator
    ✔ Registration form
    ✔ Games
    ✔ Dashboard windows


⭐ Important Points:

Swing is lightweight → faster than AWT
Swing has more components (JButton, JTextField, JTable, etc.)
Swing is platform independent
Swing uses MVC (Model-View-Controller) internally
Swing components start with J (JFrame, JPanel, JButton…)


🪟 What is JPanel?

JPanel = A small container inside a window.

    It is used to organize components.
    You can add buttons, text fields, labels, etc. inside a JPanel.
    You can use multiple JPanels in one JFrame.

Think of JFrame as a big window
and JPanel as small sections/boxes inside the window.



✅ Simple Example of JPanel
✔ Program

import javax.swing.*;

public class JPanelExample {
    public static void main(String[] args) {
        JFrame frame = new JFrame("JPanel Example");

        JPanel panel = new JPanel(); // create a panel
        JButton btn = new JButton("Click Me"); // button

        panel.add(btn);        // add button to panel
        frame.add(panel);      // add panel to frame

        frame.setSize(300, 200);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}


🖥 Output (What You See)

A small window with one button inside it:

-------------------------------
|          JFrame             |
|  -------------------------  |
|  |       JPanel          | |
|  |   [ Click Me ]        | |
|  -------------------------  |
-------------------------------



🎯 When do we use JPanel?

You use JPanel when:

✔ You want to group components together
✔ You want different sections in layout
✔ You want custom drawing (paintComponent)
✔ You want background color or border


Example:

Top panel = title
Center panel = registration form
Bottom panel = buttons
      
      `},{id:78,question:"78. what is swing",answer:"",codeExample:`
✅ What is Swing in Java?

Swing is a Graphical User Interface (GUI) toolkit in Java used to build desktop applications.
It is part of Java Foundation Classes (JFC) and is built on top of AWT, but is more powerful, flexible, and lightweight.

Swing is in the package:

    javax.swing.*


⭐ Why Swing Was Introduced?

AWT was limited because:

It used native OS components (heavyweight)
UI looked different on different platforms
Hard to customize


Swing solves this with:
✔ Lightweight components (written in Java)
✔ Same look on all platforms
✔ More components (tables, trees, sliders, dialogs, tabs, etc.)
✔ Highly customizable


🎯 Features of Swing

✔ Platform independent
✔ Lightweight components
✔ Rich set of widgets
✔ Pluggable Look and Feel
✔ MVC architecture
✔ Highly customizable
✔ Double buffering for smooth graphics


📌 Swing Component Hierarchy (Important)
Top-level Containers
These are the windows where UI is displayed.

| Component   | Description                |
| ----------- | -------------------------- |
| JFrame      | Main application window    |
| JApplet     | Applet version using Swing |
| JDialog     | Popup dialog window        |
| JWindow     | Borderless window          |


📌 Intermediate Containers

| Component   | Description                   |
| ------------| ----------------------------- |
| JPanel      | General-purpose container     |
| JScrollPane | Provides scrollbars           |
| JSplitPane  | Divides screen into two parts |
| JTabbedPane | Tab-based container           |


📌 Swing Components (Widgets)

| Component    | Purpose              |
| -------------| -------------------- |
| JButton      | Button               |
| JLabel       | Text label           |
| JTextField   | Single-line text box |
| JTextArea    | Multi-line text box  |
| JCheckBox    | Checkbox             |
| JRadioButton | Radio button         |
| JComboBox    | Drop-down list       |
| JList        | List of items        |


Advanced Components

| Component     | Purpose                |
| --------------| ---------------------- |
| JTable        | Display table data     |
| JTree         | Hierarchical tree view |
| JSlider       | Slider control         |
| JProgressBar  | Progress indicator     |
| JFileChooser  | Open-file dialog       |
| JColorChooser | Color picker           |


📦 Swing Uses Models (MVC Architecture)

Each component has:

Model → Data
View → UI
Controller → Handles actions


Example:

JTextField uses Document model
JTable uses TableModel
JList uses ListModel


🎨 Painting & Graphics in Swing

Swing uses:
    paintComponent() method (instead of AWT’s paint())

Example:

public void paintComponent(Graphics g) {
    super.paintComponent(g);
    g.drawString("Hello Swing!", 50, 50);
}



🖼️ Simple Swing Example

import javax.swing.*;

public class MySwing {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Swing Example");

        JLabel label = new JLabel("Hello Swing!");
        frame.add(label);

        frame.setSize(300, 200);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}



🧱 Difference: AWT vs Swing

| AWT                  | Swing                |
| -------------------- | -------------------- |
| Heavyweight          | Lightweight          |
| OS dependent         | Pure Java            |
| Fewer components     | Rich components      |
| Look changes with OS | Same look everywhere |
| Not flexible         | Highly customizable  |


📌 Important Swing Packages

| Package           | Purpose               |
| -------------------| --------------------- |
| javax.swing        | Core Swing components |
| javax.swing.event  | Event-handling        |
| javax.swing.table  | JTable classes        |
| javax.swing.tree   | JTree classes         |
| javax.swing.border | Borders               |



🎯 Summary (For Exam)

Swing is a UI toolkit for Java desktop apps.
More powerful than AWT.
Provides lightweight, platform-independent, rich components.
Uses MVC architecture.
Main container: JFrame, JDialog, JPanel.
Components: JButton, JLabel, JTable, JTree, JComboBox, etc.
      
      
      `},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1.1,question:"1.1 Write a program for swapping and find a factorial value. Perform swapping without using third variable",answer:"",codeExample:`
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


`},{id:12.12,question:"12. Collection Framework Create a class named Address and define name, city and state as the data members of this class. Create another class named Maillist and add the elements to the linked list and display the contents using Iterator interface.",answer:"",codeExample:`
💻 Java Source Code


import java.util.*;

// Address class
class Address {
    String name, city, state;

    Address(String name, String city, String state) {
        this.name = name;
        this.city = city;
        this.state = state;
    }
}

public class Maillist {
    public static void main(String[] args) {

        // Create LinkedList
        LinkedList<Address> list = new LinkedList<>();

        // Add Address objects
        list.add(new Address("Raj", "Keshod", "Gujarat"));
        list.add(new Address("Amit", "Ahmedabad", "Gujarat"));
        list.add(new Address("Neha", "Surat", "Gujarat"));

        // Use Iterator to display elements
        Iterator<Address> itr = list.iterator();

        System.out.println("Mail List Entries:
");

        while (itr.hasNext()) {             //itr.hasNext() → checks if there is a next element.
            Address a = itr.next();        //itr.next() → gives the next Address object.
            System.out.println("Name: " + a.name + ", City: " + a.city + ", State: " + a.state);
        }
    }
}



🧾 Example Output


Mail List Entries:

Name: Raj, City: Keshod, State: Gujarat
Name: Amit, City: Ahmedabad, State: Gujarat
Name: Neha, City: Surat, State: Gujarat


------------------------------------------------------------------------


🧠 Algorithm

1. Start
2. Create a class Address with
    name
    city
    state
3. Create another class Maillist (main class).
4. Create a LinkedList to store Address objects.
5. Add multiple Address objects into the LinkedList.
6. Use Iterator to traverse the LinkedList.
7. Display name, city, and state of each object.
8. Stop


------------------------------------------------------------------------


🔷 Flowchart (ASCII Design)

                    +-------------------------+
                    |          START          |
                    +------------+------------+
                                 |
                                 v
                    +-------------------------+
                    | Define Address class     |
                    | (name, city, state)      |
                    +------------+------------+
                                 |
                                 v
                    +-------------------------+
                    | Create LinkedList        |
                    | of Address objects       |
                    +------------+------------+
                                 |
                                 v
                    +-------------------------+
                    | Add Address objects      |
                    | into LinkedList          |
                    +------------+------------+
                                 |
                                 v
                    +-------------------------+
                    | Create Iterator object   |
                    +------------+------------+
                                 |
                                 v
                    +-------------------------+
                    | Loop using Iterator      |
                    | and display data         |
                    +------------+------------+
                                 |
                                 v
                    +-------------------------+
                    |           END           |
                    +-------------------------+

      `},{id:13.13,question:"13. 13. Calendar class Create a Gregorian Calendar. Display current date and time in default locale and time zone. Find out whether the current year is a leap year or not.",answer:"",codeExample:`
💻 Java Source Code


import java.util.GregorianCalendar;

public class CalendarExample {
    public static void main(String[] args) {

        // Create GregorianCalendar object
        GregorianCalendar gc = new GregorianCalendar();

        // Get current date & time
        int day = gc.get(GregorianCalendar.DAY_OF_MONTH);
        int month = gc.get(GregorianCalendar.MONTH) + 1; // Months start from 0
        int year = gc.get(GregorianCalendar.YEAR);
        int hour = gc.get(GregorianCalendar.HOUR_OF_DAY);
        int minute = gc.get(GregorianCalendar.MINUTE);
        int second = gc.get(GregorianCalendar.SECOND);

        // Display current date and time
        System.out.println("Current Date: " + day + "/" + month + "/" + year);
        System.out.println("Current Time: " + hour + ":" + minute + ":" + second);

        // Check leap year
        if (gc.isLeapYear(year)) {
            System.out.println(year + " is a leap year.");
        } else {
            System.out.println(year + " is NOT a leap year.");
        }
    }
}


🧾 Example Output

Current Date: 20/11/2025
Current Time: 13:45:18
2025 is NOT a leap year.


-------------------------------------------------------------------------------


🧠 Algorithm

1. Start
2. Create an object of GregorianCalendar.
3. Get the current date & time using built-in methods.
4. Display:
    Day
    Month
    Year
    Hour
    Minute
    Second
5. Check if the current year is a leap year using isLeapYear(year).
6. Display leap year result.
7. Stop
   

---------------------------------------------------------------------------


🔷 Flowchart (ASCII)

                     +------------------------+
                     |         START          |
                     +-----------+------------+
                                 |
                                 v
                     +------------------------+
                     | Create GregorianCalendar|
                     +-----------+------------+
                                 |
                                 v
                     +------------------------+
                     | Get current date & time |
                     +-----------+------------+
                                 |
                                 v
                     +------------------------+
                     | Display date & time     |
                     +-----------+------------+
                                 |
                                 v
                     +------------------------+
                     | Get current year        |
                     +-----------+------------+
                                 |
                                 v
                     +------------------------+
                     | Check leap year ?       |
                     +-----------+------------+
                                 |
                     +-----------+------------+
                     |   Yes     |     No     |
                     v                 v
        +------------------+   +-----------------------+
        | Print "Leap Year"|   | Print "Not Leap Year" |
        +------------------+   +-----------------------+
                                 |
                                 v
                          +--------------+
                          |     END      |
                          +--------------+

      `},{id:14.14,question:"14. 14. Regular expression Write a program to find integers and decimal value from the string by using a pattern of regular expression.",answer:"",codeExample:`
💻 Java Source Code


import java.util.regex.*;

public class Main {
    public static void main(String[] args) {

        String str = "Marks: 45, 78.5, 100, 23.75 and 9";

        Pattern p = Pattern.compile("[0-9]+(\\.[0-9]+)?");
        Matcher m = p.matcher(str);

        while (m.find()) {
            System.out.println(m.group());
        }
    }
}


🧾 Example Output


45
78.5
100
23.75
9


---------------------------------------------------------------------------

✅ Algorithm (Very Simple Steps)

Aim: Find all integers and decimal numbers from a string using Regular Expression.

1. Start
2. Take a string input (example: "Marks are 45, 78.5, 100").
3. Create a regex pattern → [0-9]+(\\.[0-9]+)?
    This finds integers and decimals.
4. Match the pattern in the string using Matcher.
5. While a match is found:
    Print the matched number.
6. End the loop when all numbers are found.
7. Stop
   

---------------------------------------------------------------------------

✅ Flowchart (Text Diagram – Easy to Draw)

        ┌──────────────────┐
        │      START       │
        └───────┬──────────┘
                │
                ▼
     ┌───────────────────────┐
     │  Read Input String    │
     └──────────┬────────────┘
                │
                ▼
      ┌──────────────────────┐
      │  Set Regex Pattern   │
      │ [0-9]+(.[0-9]+)?    │
      └──────────┬───────────┘
                 │
                 ▼
     ┌─────────────────────────┐
     │  Find Match in String   │
     └──────────┬──────────────┘
                │Yes
                ▼
     ┌─────────────────────────┐
     │  Print the Matched No.  │
     └──────────┬──────────────┘
                │
                │No more matches?
                ├───── No ──────► (Go back to Find Match)
                │
                ▼
        ┌──────────────────┐
        │       END        │
        └──────────────────┘

      `},{id:15.15,question:"15. 15. Thread and Runnable interface Write a multi-threaded program which sets the priority of threads and gets the name of threads.",answer:"",codeExample:`
✅ Java Program (Thread + Runnable + Priority + Name)

class MyTask implements Runnable {

    @Override
    public void run() {
        Thread t = Thread.currentThread();
        System.out.println("Running Thread: " + t.getName() +
                           " | Priority: " + t.getPriority());
    }
}

public class ThreadPriorityDemo {

    public static void main(String[] args) {

        MyTask task = new MyTask();

        Thread t1 = new Thread(task);
        Thread t2 = new Thread(task);
        Thread t3 = new Thread(task);

        // Set thread names
        t1.setName("Thread-One");
        t2.setName("Thread-Two");
        t3.setName("Thread-Three");

        // Set thread priorities (1 to 10)
        t1.setPriority(Thread.MIN_PRIORITY);  // 1
        t2.setPriority(Thread.NORM_PRIORITY); // 5
        t3.setPriority(Thread.MAX_PRIORITY);  // 10

        // Start all threads
        t1.start();
        t2.start();
        t3.start();
    }
}



✅ Sample Output
Running Thread: Thread-One | Priority: 1
Running Thread: Thread-Two | Priority: 5
Running Thread: Thread-Three | Priority: 10
      
      `},{id:16.16,question:"16. Thread (sleep method) Write a program to calculate sum and factorial of numbers using sleep method.",answer:"",codeExample:`
✅ Java Program (Using sleep() method)

class SumTask implements Runnable {
    @Override
    public void run() {
        int sum = 0;
        System.out.println("Sum Thread Started...");

        try {
            for (int i = 1; i <= 5; i++) {
                sum += i;
                System.out.println("Adding: " + i + " | Current Sum: " + sum);
                Thread.sleep(500); // sleep for 0.5 seconds
            }
        } catch (InterruptedException e) {
            System.out.println(e);
        }

        System.out.println("Final Sum = " + sum);
    }
}

class FactorialTask implements Runnable {
    @Override
    public void run() {
        int fact = 1;
        System.out.println("Factorial Thread Started...");

        try {
            for (int i = 1; i <= 5; i++) {
                fact *= i;
                System.out.println("Multiplying: " + i + " | Current Factorial: " + fact);
                Thread.sleep(500); // sleep for 0.5 seconds
            }
        } catch (InterruptedException e) {
            System.out.println(e);
        }

        System.out.println("Final Factorial = " + fact);
    }
}

public class SleepMethodDemo {
    public static void main(String[] args) {

        Thread sumThread = new Thread(new SumTask());
        Thread factThread = new Thread(new FactorialTask());

        sumThread.start();
        factThread.start();
    }
}


✅ Sample Output

Sum Thread Started...
Factorial Thread Started...
Adding: 1 | Current Sum: 1
Multiplying: 1 | Current Factorial: 1
Adding: 2 | Current Sum: 3
Multiplying: 2 | Current Factorial: 2
Adding: 3 | Current Sum: 6
Multiplying: 3 | Current Factorial: 6
Adding: 4 | Current Sum: 10
Multiplying: 4 | Current Factorial: 24
Adding: 5 | Current Sum: 15
Multiplying: 5 | Current Factorial: 120
Final Sum = 15
Final Factorial = 120
      
      `},{id:17.17,question:"17. Multi-threading Write a program to create multi-threaded application to perform banking tasks. [For Example: Withdrawal and Deposit from Joint account.]",answer:"",codeExample:`
✅ Short Java Program (Multithreading Banking Example)

class Bank {
    int balance = 1000;

    synchronized void deposit(int amt) {
        balance += amt;
        System.out.println("Deposited: " + amt + " | Balance = " + balance);
    }

    synchronized void withdraw(int amt) {
        if (balance >= amt) {
            balance -= amt;
            System.out.println("Withdrawn: " + amt + " | Balance = " + balance);
        } else {
            System.out.println("Insufficient Balance! Withdrawal failed.");
        }
    }
}

public class ShortBankThread {
    public static void main(String[] args) {

        Bank b = new Bank();

        Thread t1 = new Thread(() -> b.deposit(500));
        Thread t2 = new Thread(() -> b.withdraw(1200));

        t1.start();
        t2.start();
    }
}



✅ Sample Output

Withdrawn: 1200 | Balance = -200  (OR withdrawal failed depending on order)
Deposited: 500 | Balance = 1500
      
      
      `},{id:18.18,question:"18. AWT and Swing Write a program to create a Menubar and create 2 Menus File and Edit. Involve New, Open, Close as items in the File menu and then add a separator, then further add Save, Save As and again add separator and add another menu item named Print. Add all these items in File menu. Add Line, Rectangle and Circle as the menu items and add Radio Button before these menu items and add a separator. Then add Red, Green and Blue as menu items and add Check Box before these menu items.",answer:"",codeExample:`
🧠 Algorithm (Short & Simple)

Start the program

Create a JFrame window

Create a MenuBar

Add File and Edit menus

Under File menu:

Add: New, Open, Close

Add separator

Add: Save, Save As

Add separator

Add: Print

Under Edit menu:

Add RadioButtonMenuItem: Line, Rectangle, Circle

Add separator

Add CheckBoxMenuItem: Red, Green, Blue

Add MenuBar to JFrame

Show the window

End


🎯 Flowchart (ASCII)

                 ┌────────────┐
                 │   START     │
                 └─────┬───────┘
                       │
          ┌────────────▼─────────────┐
          │ Create JFrame Window      │
          └────────────┬─────────────┘
                       │
             ┌─────────▼──────────┐
             │ Create MenuBar      │
             └─────────┬──────────┘
                       │
      ┌────────────────▼────────────────┐
      │ Add File Menu + Items + Separator│
      └────────────────┬────────────────┘
                       │
      ┌────────────────▼────────────────┐
      │ Add Edit Menu + Radio + Checkbox│
      └────────────────┬────────────────┘
                       │
               ┌───────▼────────┐
               │ Add MenuBar     │
               └───────┬────────┘
                       │
               ┌───────▼───────┐
               │   SHOW GUI     │
               └───────┬────────┘
                       │
                 ┌─────▼──────┐
                 │    END      │
                 └─────────────┘


💻 Short & Simple Java Program (Swing + AWT)


import javax.swing.*;

public class MenuBarDemo {
    public static void main(String[] args) {

        JFrame f = new JFrame("MenuBar Example");
        f.setSize(400, 300);
        f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JMenuBar mb = new JMenuBar();

        // File Menu
        JMenu file = new JMenu("File");
        file.add(new JMenuItem("New"));
        file.add(new JMenuItem("Open"));
        file.add(new JMenuItem("Close"));
        file.addSeparator();
        file.add(new JMenuItem("Save"));
        file.add(new JMenuItem("Save As"));
        file.addSeparator();
        file.add(new JMenuItem("Print"));

        // Edit Menu
        JMenu edit = new JMenu("Edit");

        // Radio Button items
        ButtonGroup bg = new ButtonGroup();
        JRadioButtonMenuItem line = new JRadioButtonMenuItem("Line");
        JRadioButtonMenuItem rect = new JRadioButtonMenuItem("Rectangle");
        JRadioButtonMenuItem circle = new JRadioButtonMenuItem("Circle");

        bg.add(line);
        bg.add(rect);
        bg.add(circle);

        edit.add(line);
        edit.add(rect);
        edit.add(circle);
        edit.addSeparator();

        // CheckBox items
        JCheckBoxMenuItem red = new JCheckBoxMenuItem("Red");
        JCheckBoxMenuItem green = new JCheckBoxMenuItem("Green");
        JCheckBoxMenuItem blue = new JCheckBoxMenuItem("Blue");

        edit.add(red);
        edit.add(green);
        edit.add(blue);

        // Add menus to menubar
        mb.add(file);
        mb.add(edit);

        f.setJMenuBar(mb);
        f.setVisible(true);
    }
}



📝 Output (Description)

✔ A window appears
✔ MenuBar contains File and Edit menus
✔ File menu has:
New, Open, Close → separator → Save, Save As → separator → Print
✔ Edit menu has:
Radio Buttons → Line, Rectangle, Circle
Separator
Checkboxes → Red, Green, Blue
      
      
      `},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""}],ye=L=>{W(j===L?null:L)};return Ie.jsxs("div",{className:"app-container",children:[Ie.jsx("h1",{children:"java Interview Questions"}),Ie.jsx("div",{className:"questions-container",children:h.map(L=>Ie.jsxs("div",{className:"question-item",children:[Ie.jsx("button",{className:`question-button ${j===L.id?"active":""}`,onClick:()=>ye(L.id),children:L.question}),j===L.id&&Ie.jsxs("div",{className:"answer-container",children:[Ie.jsxs("div",{className:"answer",children:[Ie.jsx("h3",{children:"Answer:"}),Ie.jsx("p",{children:L.answer})]}),L.codeExample&&Ie.jsxs("div",{className:"code-example",children:[Ie.jsx("h3",{children:"Code Example:"}),Ie.jsx("pre",{children:Ie.jsx("code",{children:L.codeExample})})]})]})]},L.id))})]})}Nd.createRoot(document.getElementById("root")).render(Ie.jsx(Lu.StrictMode,{children:Ie.jsx(Jd,{})}));
