import{_ as j}from"./nuxt-link.9c03c89b.js";import{_ as v,o as g,c as h,a as d,b as u,w as m,d as p,q as f,K as B,s as K,u as C,v as w,P as b,r as O,x as N,L as I,R as L,y as H,z as A,A as V,B as F,S as q,C as E,T as z,D,E as G,F as J}from"./entry.b1594a16.js";const M={};function Q(e,a,t,n,o,s){const i=j;return g(),h("nav",null,[d("ul",null,[d("li",null,[u(i,{to:"/"},{default:m(()=>[p("Home")]),_:1})]),d("li",null,[u(i,{to:"/page1"},{default:m(()=>[p("Three.js Intro")]),_:1})]),d("li",null,[u(i,{to:"/page2"},{default:m(()=>[p("Blender Intro")]),_:1})])])])}const U=v(M,[["render",Q]]);const W={},X={class:"emptynav"};function Y(e,a,t,n,o,s){return g(),h("div",X)}const Z=v(W,[["render",Y]]),P=(e,a)=>a.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,t=>{var n;return((n=e.params[t.slice(1)])==null?void 0:n.toString())||""}),y=(e,a)=>{const t=e.route.matched.find(o=>{var s;return((s=o.components)==null?void 0:s.default)===e.Component.type}),n=a??(t==null?void 0:t.meta.key)??(t&&P(e.route,t));return typeof n=="function"?n(e.route):n},ee=(e,a)=>({default:()=>e?f(B,e===!0?{}:e,a):a}),te=K({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const a=e.renderKey,t=e.route,n={};for(const o in e.route)Object.defineProperty(n,o,{get:()=>a===e.renderKey?e.route[o]:t[o]});return C(b,w(n)),()=>f(e.vnode,{ref:e.vnodeRef})}}),ne=K({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:a,expose:t}){const n=H(),o=O(),s=N(b,null);t({pageRef:o});const i=N(I,null);let c;const l=n.deferHydration();return()=>f(L,{name:e.name,route:e.route,...a},{default:r=>{const S=re(s,r.route,r.Component),x=s&&s.matched.length===r.route.matched.length;if(!r.Component){if(c&&!x)return c;l();return}if(c&&i&&!i.isCurrent(r.route))return c;if(S&&s&&(!i||i!=null&&i.isCurrent(s)))return x?c:null;const k=y(r,e.pageKey),_=!!(e.transition??r.route.meta.pageTransition??A),T=_&&oe([e.transition,r.route.meta.pageTransition,A,{onAfterLeave:()=>{n.callHook("page:transition:finish",r.Component)}}].filter(Boolean)),R=e.keepalive??r.route.meta.keepalive??V;return c=F(z,_&&T,ee(R,f(q,{suspensible:!0,onPending:()=>n.callHook("page:start",r.Component),onResolve:()=>{E(()=>n.callHook("page:finish",r.Component).finally(l))}},{default:()=>{const $=f(te,{key:k||void 0,vnode:r.Component,route:r.route,renderKey:k||void 0,trackRootNodes:_,vnodeRef:o});return R&&($.type.name=r.Component.type.name||r.Component.type.__name||"RouteProvider"),$}}))).default(),c}})}});function ae(e){return Array.isArray(e)?e:e?[e]:[]}function oe(e){const a=e.map(t=>({...t,onAfterLeave:ae(t.onAfterLeave)}));return D(...a)}function re(e,a,t){if(!e)return!1;const n=a.matched.findIndex(o=>{var s;return((s=o.components)==null?void 0:s.default)===(t==null?void 0:t.type)});return!n||n===-1?!1:a.matched.slice(0,n).some((o,s)=>{var i,c,l;return((i=o.components)==null?void 0:i.default)!==((l=(c=e.matched[s])==null?void 0:c.components)==null?void 0:l.default)})||t&&y({route:a,Component:t})!==y({route:e,Component:t})}const se={};function ie(e,a){const t=U,n=Z,o=ne;return g(),h(J,null,[d("header",null,[u(t),u(n)]),G(e.$slots,"default"),u(o)],64)}const le=v(se,[["render",ie]]);export{le as default};