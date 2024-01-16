(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[652],{60652:function(e,a,l){"use strict";l.r(a);var o=l(57437),i=l(2265),t=l(32198),n=l.n(t),r=l(30713),d=l(24033),s=l(42744),p=l.n(s),c=l(41651),u=l(95418),v=l.n(u),m=l(31039),h=l(66579),_=l(23707),x=l(40128),C=l(75992),y=l(39470),f=l(7038),j=l(76168),A=l(57550),T=l(41326),Z=l(84058),N=l(20824),b=l(45620);a.default=e=>{var a,l,t,s,u;let k,{app:g,cardLink:w,canClone:O,canEdit:B,canDelete:D,canViewHistory:S,showAvatar:F,showName:G,showOpenNewTab:I=!0,showFooter:P=!0,showDescription:z=!0,statFormat:R,disabled:U=!1}=e,H=(0,d.useRouter)(),{user:L}=(0,c.useUser)(),{data:V}=(0,r.ZP)(L?"/api/user":null,Z.Z),{showServerError:K,showSuccessMessage:M}=(0,f.Z)(),{mutate:Q}=(0,r.kY)(),[W,E]=(0,i.useState)(!1),[J,Y]=(0,i.useState)(!1),X=async()=>{Y(!0);try{await y.Z.deleteApp(null==g?void 0:g.hash),document.cookie="token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",await Q("/api/apps"),E(!1),M({title:"App Deleted"})}catch(e){K(e)}finally{Y(!1)}},q=async e=>{e.stopPropagation(),e.preventDefault(),Y(!0);try{var a;let e=await y.Z.cloneApp({hash:null==g?void 0:g.hash});H.push("/apps/".concat(null==e?void 0:null===(a=e.data)||void 0===a?void 0:a.hash,"/edit")),M({title:"Template App Cloned"})}catch(e){K(e)}finally{Y(!1)}},$=!(null==g?void 0:g.isOfficialTemplate)&&!(null==g?void 0:g.isCommunityTemplate);return"landing"===w&&(null==g?void 0:g.hash)&&!U&&(k="/".concat(null==g?void 0:g.hash)),"edit"===w&&(null==g?void 0:g.hash)&&!U&&(k="/apps/".concat(null==g?void 0:g.hash,"/edit")),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(h.Z,{className:p()(v().container,(null==g?void 0:g.isOfficialTemplate)&&v().officialTemplateTheme,U&&v().disabled),href:k||"",style:$?{color:null==g?void 0:g.colorText,background:null==g?void 0:g.colorBackground,border:"2px solid var(--colorSeparator)"}:void 0,disabled:U,children:[(0,o.jsxs)("div",{className:v().appCardHeader,children:[(0,o.jsx)("div",{className:v().primaryActionButtons,children:O&&(0,o.jsx)(j.Z,{overlay:!U&&"Use as Template",children:(0,o.jsxs)("div",{className:v().iconStatGroup,children:[(0,o.jsx)(_.Z,{Icon:(0,o.jsx)(b.Z,{icon:"copy",color:(null==g?void 0:g.isOfficialTemplate)?"var(--colorGray8)":null==g?void 0:g.colorText,size:24}),onClick:q,disabled:U||J}),(0,o.jsx)("span",{children:(null==g?void 0:g.numCloned)||0})]})})}),(0,o.jsxs)("div",{className:v().secondaryActionButtons,children:[(B||(null==g?void 0:g.isOfficialTemplate)&&(null==V?void 0:V.isAdmin))&&(0,o.jsx)(j.Z,{overlay:!U&&"Edit",children:(0,o.jsx)(_.Z,{Icon:(0,o.jsx)(b.Z,{icon:"pen",color:(null==g?void 0:g.isOfficialTemplate)?"var(--colorGray8)":null==g?void 0:g.colorText,size:24}),onClick:e=>{e.stopPropagation(),e.preventDefault(),H.push("/apps/".concat(null==g?void 0:g.hash,"/edit"))},disabled:U||J})}),S&&(0,o.jsx)(j.Z,{overlay:!U&&"View Usage History",children:(0,o.jsx)(_.Z,{Icon:(0,o.jsx)(b.Z,{icon:"chart-line",color:(null==g?void 0:g.isOfficialTemplate)?"var(--colorGray8)":null==g?void 0:g.colorText,size:24}),onClick:e=>{e.stopPropagation(),e.preventDefault(),H.push("/apps/".concat(null==g?void 0:g.hash,"/history"))},disabled:U})}),I&&(0,o.jsx)(j.Z,{overlay:!U&&"Open in New Tab",children:(0,o.jsx)(_.Z,{Icon:(0,o.jsx)(b.Z,{icon:"external-link",color:(null==g?void 0:g.isOfficialTemplate)?"var(--colorGray8)":null==g?void 0:g.colorText,size:24}),onClick:e=>{e.stopPropagation(),e.preventDefault(),window.open("/".concat(null==g?void 0:g.hash),"_blank")},disabled:U})}),D&&(0,o.jsx)(j.Z,{overlay:!U&&"Delete",children:(0,o.jsx)(_.Z,{Icon:(0,o.jsx)(b.Z,{icon:"trash",color:(null==g?void 0:g.isOfficialTemplate)?"var(--colorGray8)":null==g?void 0:g.colorText,size:24}),onClick:e=>{e.stopPropagation(),e.preventDefault(),E(!0)},disabled:U||J})})]})]}),(0,o.jsxs)("div",{className:v().appCardBody,children:[(0,o.jsx)(n(),{line:3,element:"div",truncateText:"…",text:g.appTitle||"Untitled",containerClassName:v().appTitle}),z&&(0,o.jsx)(n(),{line:3,element:"div",truncateText:"…",text:g.description,containerClassName:v().appDescription})]}),(0,o.jsx)("div",{className:v().appCardFooterWrapper,children:P&&(0,o.jsxs)("div",{className:v().appCardFooter,children:[(0,o.jsxs)("button",{onClick:e=>{var a;e.preventDefault(),e.stopPropagation(),window.open("/user/".concat(null==g?void 0:null===(a=g.createdBy)||void 0===a?void 0:a.hash),"_blank")},className:v().avatarGroup,style:{color:(null==g?void 0:g.isOfficialTemplate)?"var(--colorGray8)":g.colorText},type:"button",children:[F&&(0,o.jsx)(A.default,{size:48,givenName:null==g?void 0:null===(a=g.createdBy)||void 0===a?void 0:a.displayName,src:(null==g?void 0:g.isOfficialTemplate)&&"/static/branding/avatar.png"||(null==g?void 0:null===(l=g.createdBy)||void 0===l?void 0:l.avatar),alt:"Avatar"}),(0,o.jsxs)("div",{children:[G&&(0,o.jsxs)("p",{className:v().userName,children:[$&&((null==g?void 0:null===(t=g.createdBy)||void 0===t?void 0:t.displayName)||"Anonymous"),(null==g?void 0:g.isOfficialTemplate)&&"brancher.ai"]}),"public"===R&&(0,o.jsxs)("div",{className:v().publicStat,children:[(0,o.jsxs)("p",{children:["Run"," ",Intl.NumberFormat("en",{notation:"compact"}).format(null==g?void 0:g.numRun)," ","times"]}),(0,o.jsxs)("p",{children:["Created ",(0,m.Z)(null==g?void 0:g.createdDate).fromNow()]})]}),"private"===R&&(0,o.jsxs)("p",{className:v().privateStat,children:[(0,o.jsx)("span",{children:(0,m.Z)(null==g?void 0:g.createdDate).fromNow()}),(0,o.jsx)("span",{children:"•"}),(0,o.jsxs)("span",{children:["Run"," ",Intl.NumberFormat("en",{notation:"compact"}).format(null==g?void 0:g.numRun)," ","times"]})]})]})]}),(0,o.jsx)("ul",{className:v().models,children:null===(u=(0,N.jw)(null==g?void 0:g.aiModels))||void 0===u?void 0:null===(s=u.slice(0,2))||void 0===s?void 0:s.map(e=>{var a,l;return(0,o.jsx)("li",{children:(0,o.jsx)(j.Z,{overlay:!U&&(null===(a=T.Z[e])||void 0===a?void 0:a.name),children:(0,o.jsx)(b.Z,{className:v().modelLogo,icon:null===(l=T.Z[e])||void 0===l?void 0:l.iconKey,color:(null==g?void 0:g.isOfficialTemplate)?"var(--colorBlack)":null==g?void 0:g.colorText})})},e)})})]})})]}),D&&W&&(0,o.jsx)(x.Z,{isOpen:W,title:"Delete App?",Content:(0,o.jsx)("p",{children:"Are you sure you want to delete this app?"}),Footer:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(C.Z,{kind:"secondary",onClick:()=>{E(!1)},disabled:U||J,size:"S",children:"Cancel"}),(0,o.jsx)(C.Z,{onClick:X,disabled:U||J,size:"S",kind:"alert",children:"Delete"})]}),onRequestClose:()=>{E(!1)}})]})}},76168:function(e,a,l){"use strict";var o=l(57437);l(2265);var i=l(86587),t=l(82448),n=l.n(t);a.Z=e=>{let{children:a,placement:l="top",overlay:t}=e;return t?(0,o.jsx)(i.Z,{placement:l,overlay:t,children:(0,o.jsx)("span",{className:n().tooltip,children:a})}):a}},31039:function(e,a,l){"use strict";var o=l(74548),i=l.n(o),t=l(38100),n=l.n(t),r=l(51068),d=l.n(r),s=l(69532),p=l.n(s),c=l(6537),u=l.n(c),v=l(20239),m=l.n(v),h=l(33016),_=l.n(h);i().extend(n()),i().extend(d()),i().extend(p()),i().extend(u()),i().extend(m()),i().extend(_()),i().updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"a few sec",m:"a min",mm:"%d mins",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a mth",MM:"%d mths",y:"a yr",yy:"%d yrs"}});let x=i();a.Z=x},95418:function(e){e.exports={container:"AppCard_container__1YxBU",disabled:"AppCard_disabled__QB3MI",appCardHeader:"AppCard_appCardHeader__lgQiF",appCardBody:"AppCard_appCardBody__jh_gV",appCardFooterWrapper:"AppCard_appCardFooterWrapper__lGKWS",appCardFooter:"AppCard_appCardFooter__oIHCY",avatarGroup:"AppCard_avatarGroup__n53Ry",userName:"AppCard_userName__x0PyG",appTitle:"AppCard_appTitle__TOa8O",appDescription:"AppCard_appDescription__3tXeS",primaryActionButtons:"AppCard_primaryActionButtons__1wJlb",secondaryActionButtons:"AppCard_secondaryActionButtons__hCry6",iconStatGroup:"AppCard_iconStatGroup__j9qlF",publicStat:"AppCard_publicStat__6U2R9",privateStat:"AppCard_privateStat__VapdV",models:"AppCard_models__Wj5uc",modelLogo:"AppCard_modelLogo__eyHDn",officialTemplateTheme:"AppCard_officialTemplateTheme__OJl4V","theme-1":"AppCard_theme-1__QiTw6","theme-2":"AppCard_theme-2__X1KUZ","theme-3":"AppCard_theme-3__l_vwt","theme-4":"AppCard_theme-4__g0tPO","theme-5":"AppCard_theme-5__ZFEQo","theme-6":"AppCard_theme-6__10n3j","theme-7":"AppCard_theme-7__cKLX0","theme-8":"AppCard_theme-8__wYK_Q","theme-9":"AppCard_theme-9__weVZe"}},82448:function(e){e.exports={tooltip:"Tooltip_tooltip__FNLpJ"}}}]);