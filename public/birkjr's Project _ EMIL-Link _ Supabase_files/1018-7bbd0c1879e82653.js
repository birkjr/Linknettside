!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e3112d91-379b-4e7c-a026-71d3167352b1",e._sentryDebugIdIdentifier="sentry-dbid-e3112d91-379b-4e7c-a026-71d3167352b1")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1018],{44735:function(e,n,t){t.d(n,{Z:function(){return r}});let r=(0,t(98266).Z)("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]])},34981:function(e,n,t){t.d(n,{B:function(){return l}});var r=t(52983),o=t(95831),u=t(61031),a=t(83457);function l(e){let n=e+"CollectionProvider",[t,l]=(0,o.b)(n),[c,i]=t(n,{collectionRef:{current:null},itemMap:new Map}),d=e+"CollectionSlot",s=r.forwardRef((e,n)=>{let{scope:t,children:o}=e,l=i(d,t),c=(0,u.e)(n,l.collectionRef);return r.createElement(a.g7,{ref:c},o)}),f=e+"CollectionItemSlot",p="data-radix-collection-item";return[{Provider:e=>{let{scope:n,children:t}=e,o=r.useRef(null),u=r.useRef(new Map).current;return r.createElement(c,{scope:n,itemMap:u,collectionRef:o},t)},Slot:s,ItemSlot:r.forwardRef((e,n)=>{let{scope:t,children:o,...l}=e,c=r.useRef(null),d=(0,u.e)(n,c),s=i(f,t);return r.useEffect(()=>(s.itemMap.set(c,{ref:c,...l}),()=>void s.itemMap.delete(c))),r.createElement(a.g7,{[p]:"",ref:d},o)})},function(n){let t=i(e+"CollectionConsumer",n);return r.useCallback(()=>{let e=t.collectionRef.current;if(!e)return[];let n=Array.from(e.querySelectorAll(`[${p}]`));return Array.from(t.itemMap.values()).sort((e,t)=>n.indexOf(e.ref.current)-n.indexOf(t.ref.current))},[t.collectionRef,t.itemMap])},l]}},44809:function(e,n,t){t.d(n,{Ee:function(){return K},Rk:function(){return V},Tr:function(){return U},Uv:function(){return F},VY:function(){return Z},Z0:function(){return G},ZA:function(){return O},__:function(){return S},ck:function(){return A},fC:function(){return P},fF:function(){return B},oC:function(){return L},tu:function(){return z},wU:function(){return W},xz:function(){return T}});var r=t(83573),o=t(52983),u=t(12527),a=t(61031),l=t(95831),c=t(29650),i=t(36986),d=t(79883),s=t(29028);let f="DropdownMenu",[p,m]=(0,l.b)(f,[d.Wf]),v=(0,d.Wf)(),[g,w]=p(f),h=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,disabled:l=!1,...c}=e,s=w("DropdownMenuTrigger",t),f=v(t);return(0,o.createElement)(d.ee,(0,r.Z)({asChild:!0},f),(0,o.createElement)(i.WV.button,(0,r.Z)({type:"button",id:s.triggerId,"aria-haspopup":"menu","aria-expanded":s.open,"aria-controls":s.open?s.contentId:void 0,"data-state":s.open?"open":"closed","data-disabled":l?"":void 0,disabled:l},c,{ref:(0,a.F)(n,s.triggerRef),onPointerDown:(0,u.M)(e.onPointerDown,e=>{l||0!==e.button||!1!==e.ctrlKey||(s.onOpenToggle(),s.open||e.preventDefault())}),onKeyDown:(0,u.M)(e.onKeyDown,e=>{!l&&(["Enter"," "].includes(e.key)&&s.onOpenToggle(),"ArrowDown"===e.key&&s.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(e.key)&&e.preventDefault())})})))}),E=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...a}=e,l=w("DropdownMenuContent",t),c=v(t),i=(0,o.useRef)(!1);return(0,o.createElement)(d.VY,(0,r.Z)({id:l.contentId,"aria-labelledby":l.triggerId},c,a,{ref:n,onCloseAutoFocus:(0,u.M)(e.onCloseAutoFocus,e=>{var n;i.current||null===(n=l.triggerRef.current)||void 0===n||n.focus(),i.current=!1,e.preventDefault()}),onInteractOutside:(0,u.M)(e.onInteractOutside,e=>{let n=e.detail.originalEvent,t=0===n.button&&!0===n.ctrlKey,r=2===n.button||t;(!l.modal||r)&&(i.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),M=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...u}=e,a=v(t);return(0,o.createElement)(d.ZA,(0,r.Z)({},a,u,{ref:n}))}),_=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...u}=e,a=v(t);return(0,o.createElement)(d.__,(0,r.Z)({},a,u,{ref:n}))}),b=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...u}=e,a=v(t);return(0,o.createElement)(d.ck,(0,r.Z)({},a,u,{ref:n}))}),C=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...u}=e,a=v(t);return(0,o.createElement)(d.oC,(0,r.Z)({},a,u,{ref:n}))}),R=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...u}=e,a=v(t);return(0,o.createElement)(d.Ee,(0,r.Z)({},a,u,{ref:n}))}),y=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...u}=e,a=v(t);return(0,o.createElement)(d.Rk,(0,r.Z)({},a,u,{ref:n}))}),D=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...u}=e,a=v(t);return(0,o.createElement)(d.wU,(0,r.Z)({},a,u,{ref:n}))}),k=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...u}=e,a=v(t);return(0,o.createElement)(d.Z0,(0,r.Z)({},a,u,{ref:n}))}),I=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...u}=e,a=v(t);return(0,o.createElement)(d.fF,(0,r.Z)({},a,u,{ref:n}))}),x=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...u}=e,a=v(t);return(0,o.createElement)(d.tu,(0,r.Z)({},a,u,{ref:n,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),P=e=>{let{__scopeDropdownMenu:n,children:t,dir:u,open:a,defaultOpen:l,onOpenChange:i,modal:f=!0}=e,p=v(n),m=(0,o.useRef)(null),[w=!1,h]=(0,c.T)({prop:a,defaultProp:l,onChange:i});return(0,o.createElement)(g,{scope:n,triggerId:(0,s.M)(),triggerRef:m,contentId:(0,s.M)(),open:w,onOpenChange:h,onOpenToggle:(0,o.useCallback)(()=>h(e=>!e),[h]),modal:f},(0,o.createElement)(d.fC,(0,r.Z)({},p,{open:w,onOpenChange:h,dir:u,modal:f}),t))},T=h,F=e=>{let{__scopeDropdownMenu:n,...t}=e,u=v(n);return(0,o.createElement)(d.h_,(0,r.Z)({},u,t))},Z=E,O=M,S=_,A=b,L=C,K=R,V=y,W=D,G=k,U=e=>{let{__scopeDropdownMenu:n,children:t,open:u,onOpenChange:a,defaultOpen:l}=e,i=v(n),[s=!1,f]=(0,c.T)({prop:u,defaultProp:l,onChange:a});return(0,o.createElement)(d.Tr,(0,r.Z)({},i,{open:s,onOpenChange:f}),t)},B=I,z=x},79883:function(e,n,t){t.d(n,{Ee:function(){return eF},Eh:function(){return eA},Rk:function(){return eZ},Tr:function(){return eL},VY:function(){return ek},Wf:function(){return Z},Z0:function(){return eS},ZA:function(){return eI},__:function(){return ex},ck:function(){return eP},ee:function(){return ey},fC:function(){return eR},fF:function(){return eK},h_:function(){return eD},oC:function(){return eT},tu:function(){return eV},wU:function(){return eO}});var r=t(83573),o=t(52983),u=t(12527),a=t(34981),l=t(61031),c=t(95831),i=t(72929),d=t(94259),s=t(48611),f=t(60648),p=t(29028),m=t(40292),v=t(45409),g=t(96501),w=t(36986),h=t(80671),E=t(83457),M=t(66727),_=t(40627),b=t(57405);let C=["Enter"," "],R=["ArrowUp","PageDown","End"],y=["ArrowDown","PageUp","Home",...R],D={ltr:[...C,"ArrowRight"],rtl:[...C,"ArrowLeft"]},k={ltr:["ArrowLeft"],rtl:["ArrowRight"]},I="Menu",[x,P,T]=(0,a.B)(I),[F,Z]=(0,c.b)(I,[T,m.D7,h.Pc]),O=(0,m.D7)(),S=(0,h.Pc)(),[A,L]=F(I),[K,V]=F(I),W=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,...u}=e,a=O(t);return(0,o.createElement)(m.ee,(0,r.Z)({},a,u,{ref:n}))}),G="MenuPortal",[U,B]=F(G,{forceMount:void 0}),z="MenuContent",[X,Y]=F(z),H=(0,o.forwardRef)((e,n)=>{let t=B(z,e.__scopeMenu),{forceMount:u=t.forceMount,...a}=e,l=L(z,e.__scopeMenu),c=V(z,e.__scopeMenu);return(0,o.createElement)(x.Provider,{scope:e.__scopeMenu},(0,o.createElement)(g.z,{present:u||l.open},(0,o.createElement)(x.Slot,{scope:e.__scopeMenu},c.modal?(0,o.createElement)(q,(0,r.Z)({},a,{ref:n})):(0,o.createElement)(N,(0,r.Z)({},a,{ref:n})))))}),q=(0,o.forwardRef)((e,n)=>{let t=L(z,e.__scopeMenu),a=(0,o.useRef)(null),c=(0,l.e)(n,a);return(0,o.useEffect)(()=>{let e=a.current;if(e)return(0,_.Ry)(e)},[]),(0,o.createElement)(j,(0,r.Z)({},e,{ref:c,trapFocus:t.open,disableOutsidePointerEvents:t.open,disableOutsideScroll:!0,onFocusOutside:(0,u.M)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>t.onOpenChange(!1)}))}),N=(0,o.forwardRef)((e,n)=>{let t=L(z,e.__scopeMenu);return(0,o.createElement)(j,(0,r.Z)({},e,{ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>t.onOpenChange(!1)}))}),j=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,loop:a=!1,trapFocus:c,onOpenAutoFocus:i,onCloseAutoFocus:p,disableOutsidePointerEvents:v,onEntryFocus:g,onEscapeKeyDown:w,onPointerDownOutside:M,onFocusOutside:_,onInteractOutside:C,onDismiss:D,disableOutsideScroll:k,...I}=e,x=L(z,t),T=V(z,t),F=O(t),Z=S(t),A=P(t),[K,W]=(0,o.useState)(null),G=(0,o.useRef)(null),U=(0,l.e)(n,G,x.onContentChange),B=(0,o.useRef)(0),Y=(0,o.useRef)(""),H=(0,o.useRef)(0),q=(0,o.useRef)(null),N=(0,o.useRef)("right"),j=(0,o.useRef)(0),$=k?b.Z:o.Fragment,J=k?{as:E.g7,allowPinchZoom:!0}:void 0,Q=e=>{var n,t;let r=Y.current+e,o=A().filter(e=>!e.disabled),u=document.activeElement,a=null===(n=o.find(e=>e.ref.current===u))||void 0===n?void 0:n.textValue,l=function(e,n,t){var r;let o=n.length>1&&Array.from(n).every(e=>e===n[0])?n[0]:n,u=(r=Math.max(t?e.indexOf(t):-1,0),e.map((n,t)=>e[(r+t)%e.length]));1===o.length&&(u=u.filter(e=>e!==t));let a=u.find(e=>e.toLowerCase().startsWith(o.toLowerCase()));return a!==t?a:void 0}(o.map(e=>e.textValue),r,a),c=null===(t=o.find(e=>e.textValue===l))||void 0===t?void 0:t.ref.current;!function e(n){Y.current=n,window.clearTimeout(B.current),""!==n&&(B.current=window.setTimeout(()=>e(""),1e3))}(r),c&&setTimeout(()=>c.focus())};(0,o.useEffect)(()=>()=>window.clearTimeout(B.current),[]),(0,s.EW)();let ee=(0,o.useCallback)(e=>{var n,t,r;return N.current===(null===(n=q.current)||void 0===n?void 0:n.side)&&!!(r=null===(t=q.current)||void 0===t?void 0:t.area)&&function(e,n){let{x:t,y:r}=e,o=!1;for(let e=0,u=n.length-1;e<n.length;u=e++){let a=n[e].x,l=n[e].y,c=n[u].x,i=n[u].y;l>r!=i>r&&t<(c-a)*(r-l)/(i-l)+a&&(o=!o)}return o}({x:e.clientX,y:e.clientY},r)},[]);return(0,o.createElement)(X,{scope:t,searchRef:Y,onItemEnter:(0,o.useCallback)(e=>{ee(e)&&e.preventDefault()},[ee]),onItemLeave:(0,o.useCallback)(e=>{var n;ee(e)||(null===(n=G.current)||void 0===n||n.focus(),W(null))},[ee]),onTriggerLeave:(0,o.useCallback)(e=>{ee(e)&&e.preventDefault()},[ee]),pointerGraceTimerRef:H,onPointerGraceIntentChange:(0,o.useCallback)(e=>{q.current=e},[])},(0,o.createElement)($,J,(0,o.createElement)(f.M,{asChild:!0,trapped:c,onMountAutoFocus:(0,u.M)(i,e=>{var n;e.preventDefault(),null===(n=G.current)||void 0===n||n.focus()}),onUnmountAutoFocus:p},(0,o.createElement)(d.XB,{asChild:!0,disableOutsidePointerEvents:v,onEscapeKeyDown:w,onPointerDownOutside:M,onFocusOutside:_,onInteractOutside:C,onDismiss:D},(0,o.createElement)(h.fC,(0,r.Z)({asChild:!0},Z,{dir:T.dir,orientation:"vertical",loop:a,currentTabStopId:K,onCurrentTabStopIdChange:W,onEntryFocus:(0,u.M)(g,e=>{T.isUsingKeyboardRef.current||e.preventDefault()})}),(0,o.createElement)(m.VY,(0,r.Z)({role:"menu","aria-orientation":"vertical","data-state":eM(x.open),"data-radix-menu-content":"",dir:T.dir},F,I,{ref:U,style:{outline:"none",...I.style},onKeyDown:(0,u.M)(I.onKeyDown,e=>{let n=e.target.closest("[data-radix-menu-content]")===e.currentTarget,t=e.ctrlKey||e.altKey||e.metaKey,r=1===e.key.length;n&&("Tab"===e.key&&e.preventDefault(),!t&&r&&Q(e.key));let o=G.current;if(e.target!==o||!y.includes(e.key))return;e.preventDefault();let u=A().filter(e=>!e.disabled).map(e=>e.ref.current);R.includes(e.key)&&u.reverse(),function(e){let n=document.activeElement;for(let t of e)if(t===n||(t.focus(),document.activeElement!==n))return}(u)}),onBlur:(0,u.M)(e.onBlur,e=>{e.currentTarget.contains(e.target)||(window.clearTimeout(B.current),Y.current="")}),onPointerMove:(0,u.M)(e.onPointerMove,eC(e=>{let n=e.target,t=j.current!==e.clientX;if(e.currentTarget.contains(n)&&t){let n=e.clientX>j.current?"right":"left";N.current=n,j.current=e.clientX}}))})))))))}),$=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,...u}=e;return(0,o.createElement)(w.WV.div,(0,r.Z)({role:"group"},u,{ref:n}))}),J=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,...u}=e;return(0,o.createElement)(w.WV.div,(0,r.Z)({},u,{ref:n}))}),Q="MenuItem",ee="menu.itemSelect",en=(0,o.forwardRef)((e,n)=>{let{disabled:t=!1,onSelect:a,...c}=e,i=(0,o.useRef)(null),d=V(Q,e.__scopeMenu),s=Y(Q,e.__scopeMenu),f=(0,l.e)(n,i),p=(0,o.useRef)(!1);return(0,o.createElement)(et,(0,r.Z)({},c,{ref:f,disabled:t,onClick:(0,u.M)(e.onClick,()=>{let e=i.current;if(!t&&e){let n=new CustomEvent(ee,{bubbles:!0,cancelable:!0});e.addEventListener(ee,e=>null==a?void 0:a(e),{once:!0}),(0,w.jH)(e,n),n.defaultPrevented?p.current=!1:d.onClose()}}),onPointerDown:n=>{var t;null===(t=e.onPointerDown)||void 0===t||t.call(e,n),p.current=!0},onPointerUp:(0,u.M)(e.onPointerUp,e=>{var n;p.current||null===(n=e.currentTarget)||void 0===n||n.click()}),onKeyDown:(0,u.M)(e.onKeyDown,e=>{let n=""!==s.searchRef.current;!t&&(!n||" "!==e.key)&&C.includes(e.key)&&(e.currentTarget.click(),e.preventDefault())})}))}),et=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,disabled:a=!1,textValue:c,...i}=e,d=Y(Q,t),s=S(t),f=(0,o.useRef)(null),p=(0,l.e)(n,f),[m,v]=(0,o.useState)(!1),[g,E]=(0,o.useState)("");return(0,o.useEffect)(()=>{let e=f.current;if(e){var n;E((null!==(n=e.textContent)&&void 0!==n?n:"").trim())}},[i.children]),(0,o.createElement)(x.ItemSlot,{scope:t,disabled:a,textValue:null!=c?c:g},(0,o.createElement)(h.ck,(0,r.Z)({asChild:!0},s,{focusable:!a}),(0,o.createElement)(w.WV.div,(0,r.Z)({role:"menuitem","data-highlighted":m?"":void 0,"aria-disabled":a||void 0,"data-disabled":a?"":void 0},i,{ref:p,onPointerMove:(0,u.M)(e.onPointerMove,eC(e=>{a?d.onItemLeave(e):(d.onItemEnter(e),e.defaultPrevented||e.currentTarget.focus())})),onPointerLeave:(0,u.M)(e.onPointerLeave,eC(e=>d.onItemLeave(e))),onFocus:(0,u.M)(e.onFocus,()=>v(!0)),onBlur:(0,u.M)(e.onBlur,()=>v(!1))}))))}),er=(0,o.forwardRef)((e,n)=>{let{checked:t=!1,onCheckedChange:a,...l}=e;return(0,o.createElement)(ei,{scope:e.__scopeMenu,checked:t},(0,o.createElement)(en,(0,r.Z)({role:"menuitemcheckbox","aria-checked":e_(t)?"mixed":t},l,{ref:n,"data-state":eb(t),onSelect:(0,u.M)(l.onSelect,()=>null==a?void 0:a(!!e_(t)||!t),{checkForDefaultPrevented:!1})})))}),[eo,eu]=F("MenuRadioGroup",{value:void 0,onValueChange:()=>{}}),ea=(0,o.forwardRef)((e,n)=>{let{value:t,onValueChange:u,...a}=e,l=(0,M.W)(u);return(0,o.createElement)(eo,{scope:e.__scopeMenu,value:t,onValueChange:l},(0,o.createElement)($,(0,r.Z)({},a,{ref:n})))}),el=(0,o.forwardRef)((e,n)=>{let{value:t,...a}=e,l=eu("MenuRadioItem",e.__scopeMenu),c=t===l.value;return(0,o.createElement)(ei,{scope:e.__scopeMenu,checked:c},(0,o.createElement)(en,(0,r.Z)({role:"menuitemradio","aria-checked":c},a,{ref:n,"data-state":eb(c),onSelect:(0,u.M)(a.onSelect,()=>{var e;return null===(e=l.onValueChange)||void 0===e?void 0:e.call(l,t)},{checkForDefaultPrevented:!1})})))}),ec="MenuItemIndicator",[ei,ed]=F(ec,{checked:!1}),es=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,forceMount:u,...a}=e,l=ed(ec,t);return(0,o.createElement)(g.z,{present:u||e_(l.checked)||!0===l.checked},(0,o.createElement)(w.WV.span,(0,r.Z)({},a,{ref:n,"data-state":eb(l.checked)})))}),ef=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,...u}=e;return(0,o.createElement)(w.WV.div,(0,r.Z)({role:"separator","aria-orientation":"horizontal"},u,{ref:n}))}),ep=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,...u}=e,a=O(t);return(0,o.createElement)(m.Eh,(0,r.Z)({},a,u,{ref:n}))}),em="MenuSub",[ev,eg]=F(em),ew="MenuSubTrigger",eh=(0,o.forwardRef)((e,n)=>{let t=L(ew,e.__scopeMenu),a=V(ew,e.__scopeMenu),c=eg(ew,e.__scopeMenu),i=Y(ew,e.__scopeMenu),d=(0,o.useRef)(null),{pointerGraceTimerRef:s,onPointerGraceIntentChange:f}=i,p={__scopeMenu:e.__scopeMenu},m=(0,o.useCallback)(()=>{d.current&&window.clearTimeout(d.current),d.current=null},[]);return(0,o.useEffect)(()=>m,[m]),(0,o.useEffect)(()=>{let e=s.current;return()=>{window.clearTimeout(e),f(null)}},[s,f]),(0,o.createElement)(W,(0,r.Z)({asChild:!0},p),(0,o.createElement)(et,(0,r.Z)({id:c.triggerId,"aria-haspopup":"menu","aria-expanded":t.open,"aria-controls":c.contentId,"data-state":eM(t.open)},e,{ref:(0,l.F)(n,c.onTriggerChange),onClick:n=>{var r;null===(r=e.onClick)||void 0===r||r.call(e,n),e.disabled||n.defaultPrevented||(n.currentTarget.focus(),t.open||t.onOpenChange(!0))},onPointerMove:(0,u.M)(e.onPointerMove,eC(n=>{i.onItemEnter(n),n.defaultPrevented||e.disabled||t.open||d.current||(i.onPointerGraceIntentChange(null),d.current=window.setTimeout(()=>{t.onOpenChange(!0),m()},100))})),onPointerLeave:(0,u.M)(e.onPointerLeave,eC(e=>{var n,r;m();let o=null===(n=t.content)||void 0===n?void 0:n.getBoundingClientRect();if(o){let n=null===(r=t.content)||void 0===r?void 0:r.dataset.side,u="right"===n,a=o[u?"left":"right"],l=o[u?"right":"left"];i.onPointerGraceIntentChange({area:[{x:e.clientX+(u?-5:5),y:e.clientY},{x:a,y:o.top},{x:l,y:o.top},{x:l,y:o.bottom},{x:a,y:o.bottom}],side:n}),window.clearTimeout(s.current),s.current=window.setTimeout(()=>i.onPointerGraceIntentChange(null),300)}else{if(i.onTriggerLeave(e),e.defaultPrevented)return;i.onPointerGraceIntentChange(null)}})),onKeyDown:(0,u.M)(e.onKeyDown,n=>{let r=""!==i.searchRef.current;if(!e.disabled&&(!r||" "!==n.key)&&D[a.dir].includes(n.key)){var o;t.onOpenChange(!0),null===(o=t.content)||void 0===o||o.focus(),n.preventDefault()}})})))}),eE=(0,o.forwardRef)((e,n)=>{let t=B(z,e.__scopeMenu),{forceMount:a=t.forceMount,...c}=e,i=L(z,e.__scopeMenu),d=V(z,e.__scopeMenu),s=eg("MenuSubContent",e.__scopeMenu),f=(0,o.useRef)(null),p=(0,l.e)(n,f);return(0,o.createElement)(x.Provider,{scope:e.__scopeMenu},(0,o.createElement)(g.z,{present:a||i.open},(0,o.createElement)(x.Slot,{scope:e.__scopeMenu},(0,o.createElement)(j,(0,r.Z)({id:s.contentId,"aria-labelledby":s.triggerId},c,{ref:p,align:"start",side:"rtl"===d.dir?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:e=>{var n;d.isUsingKeyboardRef.current&&(null===(n=f.current)||void 0===n||n.focus()),e.preventDefault()},onCloseAutoFocus:e=>e.preventDefault(),onFocusOutside:(0,u.M)(e.onFocusOutside,e=>{e.target!==s.trigger&&i.onOpenChange(!1)}),onEscapeKeyDown:(0,u.M)(e.onEscapeKeyDown,e=>{d.onClose(),e.preventDefault()}),onKeyDown:(0,u.M)(e.onKeyDown,e=>{let n=e.currentTarget.contains(e.target),t=k[d.dir].includes(e.key);if(n&&t){var r;i.onOpenChange(!1),null===(r=s.trigger)||void 0===r||r.focus(),e.preventDefault()}})})))))});function eM(e){return e?"open":"closed"}function e_(e){return"indeterminate"===e}function eb(e){return e_(e)?"indeterminate":e?"checked":"unchecked"}function eC(e){return n=>"mouse"===n.pointerType?e(n):void 0}let eR=e=>{let{__scopeMenu:n,open:t=!1,children:r,dir:u,onOpenChange:a,modal:l=!0}=e,c=O(n),[d,s]=(0,o.useState)(null),f=(0,o.useRef)(!1),p=(0,M.W)(a),v=(0,i.gm)(u);return(0,o.useEffect)(()=>{let e=()=>{f.current=!0,document.addEventListener("pointerdown",n,{capture:!0,once:!0}),document.addEventListener("pointermove",n,{capture:!0,once:!0})},n=()=>f.current=!1;return document.addEventListener("keydown",e,{capture:!0}),()=>{document.removeEventListener("keydown",e,{capture:!0}),document.removeEventListener("pointerdown",n,{capture:!0}),document.removeEventListener("pointermove",n,{capture:!0})}},[]),(0,o.createElement)(m.fC,c,(0,o.createElement)(A,{scope:n,open:t,onOpenChange:p,content:d,onContentChange:s},(0,o.createElement)(K,{scope:n,onClose:(0,o.useCallback)(()=>p(!1),[p]),isUsingKeyboardRef:f,dir:v,modal:l},r)))},ey=W,eD=e=>{let{__scopeMenu:n,forceMount:t,children:r,container:u}=e,a=L(G,n);return(0,o.createElement)(U,{scope:n,forceMount:t},(0,o.createElement)(g.z,{present:t||a.open},(0,o.createElement)(v.h,{asChild:!0,container:u},r)))},ek=H,eI=$,ex=J,eP=en,eT=er,eF=ea,eZ=el,eO=es,eS=ef,eA=ep,eL=e=>{let{__scopeMenu:n,children:t,open:r=!1,onOpenChange:u}=e,a=L(em,n),l=O(n),[c,i]=(0,o.useState)(null),[d,s]=(0,o.useState)(null),f=(0,M.W)(u);return(0,o.useEffect)(()=>(!1===a.open&&f(!1),()=>f(!1)),[a.open,f]),(0,o.createElement)(m.fC,l,(0,o.createElement)(A,{scope:n,open:r,onOpenChange:f,content:d,onContentChange:s},(0,o.createElement)(ev,{scope:n,contentId:(0,p.M)(),triggerId:(0,p.M)(),trigger:c,onTriggerChange:i},t)))},eK=eh,eV=eE},80671:function(e,n,t){t.d(n,{Pc:function(){return _},ck:function(){return P},fC:function(){return x}});var r=t(83573),o=t(52983),u=t(12527),a=t(34981),l=t(61031),c=t(95831),i=t(29028),d=t(36986),s=t(66727),f=t(29650),p=t(72929);let m="rovingFocusGroup.onEntryFocus",v={bubbles:!1,cancelable:!0},g="RovingFocusGroup",[w,h,E]=(0,a.B)(g),[M,_]=(0,c.b)(g,[E]),[b,C]=M(g),R=(0,o.forwardRef)((e,n)=>(0,o.createElement)(w.Provider,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(w.Slot,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(y,(0,r.Z)({},e,{ref:n}))))),y=(0,o.forwardRef)((e,n)=>{let{__scopeRovingFocusGroup:t,orientation:a,loop:c=!1,dir:i,currentTabStopId:g,defaultCurrentTabStopId:w,onCurrentTabStopIdChange:E,onEntryFocus:M,..._}=e,C=(0,o.useRef)(null),R=(0,l.e)(n,C),y=(0,p.gm)(i),[D=null,k]=(0,f.T)({prop:g,defaultProp:w,onChange:E}),[x,P]=(0,o.useState)(!1),T=(0,s.W)(M),F=h(t),Z=(0,o.useRef)(!1),[O,S]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=C.current;if(e)return e.addEventListener(m,T),()=>e.removeEventListener(m,T)},[T]),(0,o.createElement)(b,{scope:t,orientation:a,dir:y,loop:c,currentTabStopId:D,onItemFocus:(0,o.useCallback)(e=>k(e),[k]),onItemShiftTab:(0,o.useCallback)(()=>P(!0),[]),onFocusableItemAdd:(0,o.useCallback)(()=>S(e=>e+1),[]),onFocusableItemRemove:(0,o.useCallback)(()=>S(e=>e-1),[])},(0,o.createElement)(d.WV.div,(0,r.Z)({tabIndex:x||0===O?-1:0,"data-orientation":a},_,{ref:R,style:{outline:"none",...e.style},onMouseDown:(0,u.M)(e.onMouseDown,()=>{Z.current=!0}),onFocus:(0,u.M)(e.onFocus,e=>{let n=!Z.current;if(e.target===e.currentTarget&&n&&!x){let n=new CustomEvent(m,v);if(e.currentTarget.dispatchEvent(n),!n.defaultPrevented){let e=F().filter(e=>e.focusable);I([e.find(e=>e.active),e.find(e=>e.id===D),...e].filter(Boolean).map(e=>e.ref.current))}}Z.current=!1}),onBlur:(0,u.M)(e.onBlur,()=>P(!1))})))}),D=(0,o.forwardRef)((e,n)=>{let{__scopeRovingFocusGroup:t,focusable:a=!0,active:l=!1,tabStopId:c,...s}=e,f=(0,i.M)(),p=c||f,m=C("RovingFocusGroupItem",t),v=m.currentTabStopId===p,g=h(t),{onFocusableItemAdd:E,onFocusableItemRemove:M}=m;return(0,o.useEffect)(()=>{if(a)return E(),()=>M()},[a,E,M]),(0,o.createElement)(w.ItemSlot,{scope:t,id:p,focusable:a,active:l},(0,o.createElement)(d.WV.span,(0,r.Z)({tabIndex:v?0:-1,"data-orientation":m.orientation},s,{ref:n,onMouseDown:(0,u.M)(e.onMouseDown,e=>{a?m.onItemFocus(p):e.preventDefault()}),onFocus:(0,u.M)(e.onFocus,()=>m.onItemFocus(p)),onKeyDown:(0,u.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){m.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let n=function(e,n,t){var r;let o=(r=e.key,"rtl"!==t?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===n&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===n&&["ArrowUp","ArrowDown"].includes(o)))return k[o]}(e,m.orientation,m.dir);if(void 0!==n){e.preventDefault();let o=g().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===n)o.reverse();else if("prev"===n||"next"===n){var t,r;"prev"===n&&o.reverse();let u=o.indexOf(e.currentTarget);o=m.loop?(t=o,r=u+1,t.map((e,n)=>t[(r+n)%t.length])):o.slice(u+1)}setTimeout(()=>I(o))}})})))}),k={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function I(e){let n=document.activeElement;for(let t of e)if(t===n||(t.focus(),document.activeElement!==n))return}let x=R,P=D}}]);