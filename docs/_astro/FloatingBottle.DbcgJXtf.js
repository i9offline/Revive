var i={exports:{}},t={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o;function d(){if(o)return t;o=1;var x=Symbol.for("react.transitional.element"),v=Symbol.for("react.fragment");function n(R,r,e){var s=null;if(e!==void 0&&(s=""+e),r.key!==void 0&&(s=""+r.key),"key"in r){e={};for(var u in r)u!=="key"&&(e[u]=r[u])}else e=r;return r=e.ref,{$$typeof:x,type:R,key:s,ref:r!==void 0?r:null,props:e}}return t.Fragment=v,t.jsx=n,t.jsxs=n,t}var a;function p(){return a||(a=1,i.exports=d()),i.exports}var l=p();function m(){return l.jsx("div",{className:"relative w-72 h-auto md:w-[400px]",children:l.jsx("img",{src:"/Reviveimages/revive-bottle.png",alt:"Revive Bottle",className:"w-full h-auto drop-shadow-2xl"})})}export{m as default};
