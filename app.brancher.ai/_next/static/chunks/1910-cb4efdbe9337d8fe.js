(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1910],{88826:function(e,o,n){"use strict";var i=n(57437);n(2265);var t=n(42744),l=n.n(t),a=n(46718),s=n.n(a);o.Z=e=>{let{className:o,size:n="M"}=e;return(0,i.jsx)("div",{className:l()(s().container,"S"===n&&s().small,"M"===n&&s().medium,"L"===n&&s().large,o),children:"Coming Soon"})}},49776:function(e,o,n){"use strict";var i=n(57437),t=n(2265),l=n(33347),a=n(42744),s=n.n(a),r=n(56721),c=n.n(r),d=n(45620),m=n(23707),u=n(88826);o.Z=e=>{let{menu:o,Button:n=(0,i.jsx)(m.Z,{icon:"menu-outline",kind:"secondary"}),alignment:a="left"}=e,{buttonProps:r,itemProps:_,isOpen:p,setIsOpen:v}=(0,l.Z)(null==o?void 0:o.length,{focusFirstItemOnClick:!1}),g=(0,t.forwardRef)((e,o)=>{let{}=e;return(0,t.cloneElement)(n,{...r,ref:o})});return g.displayName="Trigger",(0,i.jsxs)("div",{className:c().container,children:[(0,i.jsx)(g,{}),(0,i.jsx)("div",{className:s()(c().menu,"left"===a&&c().menuLeft,"center"===a&&c().menuCenter,"right"===a&&c().menuRight,"bottom"===a&&c().menuBottom,"bottomRight"===a&&c().menuBottomRight,"bottomLeft"===a&&c().menuBottomLeft,"topRight"===a&&c().menuTopRight,p&&c().visibleMenu),role:"menu",children:null==o?void 0:o.map((e,o)=>(0,i.jsxs)("a",{className:s()(c().menuItem,(null==e?void 0:e.isDestructive)&&c().destructiveMenuItem,((null==e?void 0:e.disabled)||e.comingSoon)&&c().disabledMenuItem),onClick:()=>{!e.onClick||e.disabled||e.comingSoon||(v(!1),e.onClick())},href:null==e?void 0:e.href,..._[o],children:[(null==e?void 0:e.icon)&&(0,i.jsx)(d.Z,{icon:null==e?void 0:e.icon,size:20,color:(null==e?void 0:e.disabled)||(null==e?void 0:e.comingSoon)?"var(--colorGray3)":(null==e?void 0:e.isDestructive)?"var(--colorAlert)":"var(--colorGray8)"}),e.label,e.comingSoon&&(0,i.jsx)(u.Z,{size:"M"})]},o))})]})}},31910:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return w}});var i=n(57437),t=n(2265),l=n(42744),a=n.n(l),s=n(41651),r=n(30713),c=n(15190),d=n.n(c),m=n(24033),u=n(2940),_=n.n(u),p=n(66579);let v=()=>{let[e,o]=(0,t.useState)(0);return(0,t.useEffect)(()=>{let e=window.scrollY,n=o=>Math.abs(o-e)>50,i=()=>{let i=window.scrollY;n(i)&&(o(i),e=i>0?i:0)},t=()=>window.requestAnimationFrame(i);return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[]),e};var g=n(75992),h=n(57550),k=n(55188),x=n(49776),b=n(84058),N=n(39470),f=n(7038),D=n(23707),w=e=>{let{app:o,colorBackground:n,colorText:l,logo:c,showBrancherBranding:u}=e,w=(0,m.useRouter)(),{user:j}=(0,s.useUser)(),{data:y}=(0,r.ZP)(j?"/api/user":null,b.Z),[L,C]=(0,t.useState)(!1),{showServerError:O,showSuccessMessage:Z}=(0,f.Z)(),B=v(),T=d()(n).isLight(),I=d()(n).isDark(),H=async()=>{C(!0);try{var e;let n=await N.Z.cloneApp({hash:null==o?void 0:o.hash});w.push("/apps/".concat(null==n?void 0:null===(e=n.data)||void 0===e?void 0:e.hash,"/edit")),Z({title:"Template App Cloned"})}catch(e){O(e)}finally{C(!1)}};return(0,i.jsxs)("nav",{className:a()(_().nav,B>50&&_().scrolledNav),children:[(0,i.jsxs)("div",{className:_().primaryNav,children:[!(null==o?void 0:o.isOfficialTemplate)&&c&&(0,i.jsxs)("div",{className:_().logoWrapper,children:[(0,i.jsx)("img",{src:c,className:a()(_().customMobileLogo,_().mobileOnly),alt:"Logo"}),(0,i.jsx)("img",{src:c,className:a()(_().customDesktopLogo,_().desktopOnly),alt:"Logo"})]}),((null==o?void 0:o.isOfficialTemplate)||!c)&&(0,i.jsxs)(p.Z,{className:_().logoWrapper,href:"https://www.brancher.ai/",children:[(0,i.jsx)("img",{src:"/static/branding/square-or-circular-avatar.svg",className:a()(_().mobileLogo,_().mobileOnly),alt:"brancher.ai"}),I&&(0,i.jsx)("img",{src:"/static/branding/logo-on-dark.svg",className:a()(a()(_().desktopLogo,_().desktopOnly)),alt:"brancher.ai"}),T&&(0,i.jsx)("img",{src:"/static/branding/logo-on-white.svg",className:a()(_().desktopLogo,_().desktopOnly),alt:"brancher.ai"}),!T&&!I&&(0,i.jsx)("img",{src:"/static/branding/logo-on-black.svg",className:a()(_().desktopLogo,_().desktopOnly),alt:"brancher.ai"})]}),(0,i.jsx)("div",{className:_().links})]}),(0,i.jsxs)("div",{className:_().links,children:[(null==y?void 0:y.isAdmin)&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(x.Z,{Button:(0,i.jsx)(D.Z,{icon:"admin-monogram",className:_().dropDownButton,kind:"secondaryFill"}),menu:[{label:"Clone",icon:"copy",type:"button",isDestructive:!1,onClick:H,disabled:!o||L}],alignment:"right"})}),u&&!j&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g.Z,{colorText:l,colorBackground:n,kind:"customInverse",onClick:()=>{window.location.href="/apps"},size:"S",children:(0,i.jsxs)("span",{children:["Launch ",(0,i.jsx)("span",{className:_().extraActionText,children:"Your Own"})," ","App!"]})}),(0,i.jsx)(g.Z,{colorText:l,colorBackground:n,kind:"custom",onClick:()=>{window.location.href="/api/auth/login"},size:"S",children:(0,i.jsxs)("span",{children:["Sign In ",(0,i.jsx)("span",{className:_().extraActionText,children:"/ Up"})]})})]}),j&&(0,i.jsxs)(i.Fragment,{children:[((null==o?void 0:o.isOfficialTemplate)||(null==o?void 0:o.isCommunityTemplate))&&(0,i.jsx)(g.Z,{colorText:l,colorBackground:n,kind:"customInverse",onClick:H,size:"S",disabled:L,children:"Use as Template!"}),(0,i.jsx)(x.Z,{Button:(0,i.jsx)("button",{className:_().dropDownButton,type:"button",children:(0,i.jsxs)("div",{className:_().userCredit,children:[(0,i.jsx)(h.default,{givenName:null==y?void 0:y.displayName,src:null==y?void 0:y.avatar,size:k.E.M}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:a()(_().name,_().desktopOnly,T&&_().colorOnLight,I&&_().colorOnDark),children:null==y?void 0:y.displayName}),(0,i.jsxs)("p",{className:a()(_().credits,T&&_().colorOnLight,I&&_().colorOnDark),children:[(0,i.jsx)("strong",{children:(null==y?void 0:y.credits)||0})," Credits"]})]})]})}),menu:[{label:"Apps",icon:"rocket-launch",type:"link",isDestructive:!1,href:"/apps"},{label:"Template Library",icon:"official-template",type:"link",isDestructive:!1,href:"/template-library"},{label:"Subscriptions",icon:"bolt",type:"link",isDestructive:!1,href:"/account/subscriptions"},{label:"Account",icon:"user-square",type:"link",isDestructive:!1,href:"/account/profile"},{label:"Logout",icon:"log-out-outline",type:"link",isDestructive:!1,href:"/api/auth/logout"}],alignment:"right"})]})]})]})}},46718:function(e){e.exports={container:"ComingSoon_container__jf6vx",small:"ComingSoon_small__7Iq58",medium:"ComingSoon_medium__d4fWA",large:"ComingSoon_large__1y3bp"}},56721:function(e){e.exports={container:"DropDown_container__UUXJk",menu:"DropDown_menu__S8Yh1",menuLeft:"DropDown_menuLeft__IJBBo",menuCenter:"DropDown_menuCenter___O43B",menuRight:"DropDown_menuRight__rmfoZ",menuBottom:"DropDown_menuBottom__TGzJc",menuBottomRight:"DropDown_menuBottomRight__H1IZg",menuBottomLeft:"DropDown_menuBottomLeft__zt2S9",menuTopRight:"DropDown_menuTopRight__IxLhD",visibleMenu:"DropDown_visibleMenu__WToBE",menuItem:"DropDown_menuItem__GkyJq",destructiveMenuItem:"DropDown_destructiveMenuItem__gz83_",disabledMenuItem:"DropDown_disabledMenuItem__6d6pD"}},2940:function(e){e.exports={nav:"HeaderNav_nav__Tay03",scrolledNav:"HeaderNav_scrolledNav__Pw8An",primaryNav:"HeaderNav_primaryNav__f66w4",logoWrapper:"HeaderNav_logoWrapper__Z88Ub",customDesktopLogo:"HeaderNav_customDesktopLogo__s9FPY",customMobileLogo:"HeaderNav_customMobileLogo__pmRxR",desktopLogo:"HeaderNav_desktopLogo__afDGb",mobileLogo:"HeaderNav_mobileLogo__Qw1T4",links:"HeaderNav_links__i8Um7",link:"HeaderNav_link__Z8R5a",dropDownButton:"HeaderNav_dropDownButton__oiAEA",userCredit:"HeaderNav_userCredit__MskCS",name:"HeaderNav_name__fZywv",credits:"HeaderNav_credits__f1eZi",colorOnLight:"HeaderNav_colorOnLight__1fLIi",colorOnDark:"HeaderNav_colorOnDark__uIIy5",mobileOnly:"HeaderNav_mobileOnly__EfOyI",extraActionText:"HeaderNav_extraActionText__JC4Qa",desktopOnly:"HeaderNav_desktopOnly__YmJVN"}}}]);