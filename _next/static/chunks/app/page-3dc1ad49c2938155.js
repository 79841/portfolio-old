(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6820:function(e,r,t){Promise.resolve().then(t.t.bind(t,1749,23)),Promise.resolve().then(t.t.bind(t,5250,23)),Promise.resolve().then(t.bind(t,6669)),Promise.resolve().then(t.bind(t,4981)),Promise.resolve().then(t.bind(t,9020)),Promise.resolve().then(t.bind(t,117)),Promise.resolve().then(t.bind(t,169)),Promise.resolve().then(t.bind(t,196))},6669:function(e,r,t){"use strict";t.r(r),t.d(r,{GithubCalendarBox:function(){return x}});var n=t(7437),s=t(4296),i=t(2265);let l=()=>{let e=(0,i.useRef)(null),[r,t]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let n=()=>{if(null===e.current)return;let n=Math.floor(e.current.offsetWidth/65);r!=n&&t(n)};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[r]),[r,e]};var a=t(384),o=t(2073),c=t(9394),d=t(1396),u=t.n(d);let f=(0,i.memo)(function(){return(0,n.jsx)("h1",{className:"flex justify-center pb-2 sm:justify-center",children:(0,n.jsx)(u(),{href:s.F.githubUrl,children:(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(c.wGg,{width:20,height:20}),(0,n.jsx)("div",{className:"ml-1 text-xl font-semibold",children:"Github"})]})})})}),h=e=>r=>{let t=new Date().getFullYear(),n=new Date().getMonth();return r.filter(r=>{let s=new Date(r.date),i=s.getMonth();return n>=e?s.getFullYear()===t&&i>n-e&&i<=n:s.getFullYear()===t&&i<=n||s.getFullYear()===t-1&&i>n+11-e})},x=()=>{let e=(0,a.s)(),[r,t]=l();return(0,n.jsx)("div",{className:"flex w-full justify-center sm:justify-start",ref:t,children:(0,n.jsxs)("div",{className:"flex flex-col items-center sm:items-start",children:[(0,n.jsx)(f,{}),(0,n.jsx)("div",{className:"overflow-hidden",children:(0,n.jsx)(o.Z,{username:s.F.githubUsername,hideMonthLabels:!0,hideColorLegend:!0,colorScheme:e,blockSize:13,blockMargin:2,transformData:h(r),labels:{totalCount:1===r?"{{count}} contributions in the month":"{{count}} contributions in the ".concat(r," months")}})})]})})}},4981:function(e,r,t){"use strict";t.r(r),t.d(r,{ProfileCard:function(){return Y}});var n=t(7437),s=t(2265),i=t(2169),l=t(169);t(196);let a=e=>{let{className:r,children:t,...a}=e,o=(0,l.useJigglerContext)(),c=(0,s.useRef)(null);return(0,s.useEffect)(()=>{null!=o&&null!=c&&null!=c.current&&(window.screen.width<640||(c.current.style.transform=o.rotateStyle))},[o]),(0,n.jsx)("div",{ref:c,className:(0,i.cn)("[preserve-3d] duration-100",r),...a,children:t})},o=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,i.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...s})});o.displayName="Card";let c=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",t),...s})});c.displayName="CardHeader";let d=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("h3",{ref:r,className:(0,i.cn)("text-2xl font-semibold leading-none tracking-tight",t),...s})});d.displayName="CardTitle";let u=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("p",{ref:r,className:(0,i.cn)("text-sm text-muted-foreground",t),...s})});u.displayName="CardDescription";let f=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,i.cn)("p-6 pt-0",t),...s})});f.displayName="CardContent";let h=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,i.cn)("flex items-center p-6 pt-0",t),...s})});h.displayName="CardFooter";var x=t(6691),m=t.n(x);function v(e){let{src:r}=e;return(0,n.jsx)("div",{className:"flex w-full justify-center py-4",children:(0,n.jsx)("div",{className:"relative h-60 w-60 rounded-full bg-secondary",children:(0,n.jsx)(m(),{src:r,alt:"profile",className:"object-contain",fill:!0})})})}var g=t(575);let j=e=>{let{onClick:r,value:t}=e;return(0,n.jsx)(g.z,{onClick:r,variant:"ghost",className:"cursor-pointer text-xs  text-muted-foreground opacity-0 transition duration-1000 group-hover:opacity-100",children:t})};var p=t(1942);let b=e=>{let{isFlipped:r,handleFilp:t}=e;return(0,n.jsx)("div",{className:(0,i.cn)("left-0 top-0 -z-10 duration-1000 [backface-visibility:hidden] [transform:rotateY(180deg)]",r?"[transform:rotateY(0deg)]":""),children:(0,n.jsxs)(o,{className:"w-fit sm:w-[350px]",children:[(0,n.jsxs)(c,{children:[(0,n.jsx)(v,{src:p.Fu.profileSecondary}),(0,n.jsx)(d,{children:"저는..."}),(0,n.jsx)(u,{children:"보안전문가에서 프론트엔드 개발자로.."})]}),(0,n.jsxs)(f,{children:[(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("h3",{className:"pb-2 text-2xl font-semibold leading-none tracking-tight",children:"함께 성장하고 발전하는"}),(0,n.jsx)(u,{children:"함께 공부하고 기술리뷰하는 것을 좋아합니다. 협업과 팀 프로젝트를 즐기며 팀의 성장이 저의 성장이라고 생각합니다."})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("h3",{className:"pb-2 text-2xl font-semibold leading-none tracking-tight",children:"자바스크립트에 환장한"}),(0,n.jsx)(u,{children:"개발자로 전향한 기간은 길지 않지만 컴퓨터 보안을 할 때부터 오랜기간 JS를 팔과 다리처럼 사용해왔고 JS로 코딩하는 것을 정말 좋아합니다."})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("h3",{className:"pb-2 text-2xl font-semibold leading-none tracking-tight",children:"개발 트렌드에 민감한"}),(0,n.jsx)(u,{children:"새로운 기술을 사용하고 적용하는 것에 익숙하며 기존에 사용하고 있는 기술과 비교 분석하여 애플리케이션 퍼포먼스를 향상시킬 수 있습니다."})]}),(0,n.jsx)("div",{children:(0,n.jsx)("h3",{className:"pb-2 text-2xl font-semibold leading-none tracking-tight",children:"개발자 입니다."})})]}),(0,n.jsx)(h,{className:"flex justify-end",children:(0,n.jsx)(j,{onClick:t,value:"Go front"})})]})})},y=(0,s.memo)(function(e){let{content:r}=e;return(0,n.jsx)("div",{className:"inline-block bg-gradient-to-r from-cyan-400 to-sky-950 bg-clip-text text-transparent",children:r})}),N=e=>{let{children:r,Icon:t}=e;return(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("div",{className:"flex h-6 w-8 items-center",children:(0,n.jsx)(t,{})}),r]})};var w=t(2410),F=t(9241),k=t(4296),C=t(2510),E=t(8910),M=t(1396),P=t.n(M),S=t(3159),R=t(1678);let U=e=>{let{isFlipped:r,handleFilp:t}=e;return(0,n.jsx)("div",{className:(0,i.cn)("group absolute h-full w-full duration-1000 [backface-visibility:hidden]",r?"[transform:rotateY(180deg)]":""),children:(0,n.jsxs)(o,{className:"sm:w-[350px]",children:[(0,n.jsxs)(c,{children:[(0,n.jsx)(v,{src:k.F.profilePrimary}),(0,n.jsx)(d,{children:(0,n.jsx)(y,{content:k.F.username})}),(0,n.jsx)(u,{children:"About"})]}),(0,n.jsxs)(f,{className:"flex flex-col gap-4",children:[(0,n.jsx)(N,{Icon:w.hyG,children:k.F.name}),(0,n.jsx)(N,{Icon:F.yjk,children:(0,n.jsxs)("div",{children:[k.F.university,(0,n.jsx)("br",{}),"".concat(k.F.major," 전공"),(0,n.jsx)("br",{}),"".concat(k.F.doubleMajor," 복수 전공")]})}),(0,n.jsx)(N,{Icon:C.XdU,children:(0,n.jsx)("div",{children:k.F.birthday})}),(0,n.jsx)(N,{Icon:E.c7Z,children:(0,n.jsx)("div",{children:k.F.address})}),(0,n.jsx)(N,{Icon:E.ixJ,children:(0,n.jsx)(P(),{href:"mailto:".concat(k.F.primaryEmail),children:k.F.primaryEmail})}),(0,n.jsx)(N,{Icon:S.hJX,children:(0,n.jsx)(P(),{href:k.F.githubUrl,children:"".concat(k.F.username,"(Github)")})}),(0,n.jsx)(N,{Icon:R.bn7,children:(0,n.jsx)(P(),{href:k.F.blogUrl,children:"".concat(k.F.username,"(Blog)")})})]}),(0,n.jsx)(h,{className:"flex justify-end",children:(0,n.jsx)(j,{onClick:t,value:"Go back"})})]})})};function Y(){let[e,r]=(0,s.useState)(!1),t=(0,s.useCallback)(e=>{r(e=>!e)},[]);return(0,n.jsx)(a,{children:(0,n.jsx)("div",{className:"group relative flex w-fit",children:(0,n.jsxs)("div",{className:(0,i.cn)("relative"),children:[(0,n.jsx)(U,{isFlipped:e,handleFilp:t}),(0,n.jsx)(b,{isFlipped:e,handleFilp:t})]})})})}},9020:function(e,r,t){"use strict";t.r(r),t.d(r,{SkillBox:function(){return l}});var n=t(7437),s=t(4825),i=t(7417);t(2265);let l=e=>{let{name:r,...t}=e;return(0,n.jsxs)("div",{className:"flex w-20 flex-col items-center gap-1 sm:w-24",children:[(0,n.jsx)("div",{className:"flex justify-center rounded-lg duration-500 hover:relative hover:-translate-y-2",children:(0,n.jsx)(i.F,{...t,alt:r})}),(0,n.jsx)(s.iF,{mode:"single",max:12,className:"text-muted-foreground",children:r})]})}},7417:function(e,r,t){"use strict";t.d(r,{F:function(){return c}});var n=t(7437),s=t(6691),i=t.n(s),l=t(2169),a=t(384),o=t(2265);let c=(0,o.memo)(function(e){let{defaultImage:r,darkModeImage:t,alt:s,className:c,imageStyle:d}=e,u=(0,a.s)(),[f,h]=(0,o.useState)(r);return(0,o.useEffect)(()=>{h(e=>null!=t&&"dark"===u?t:r)},[t,r,u]),(0,n.jsx)("div",{className:(0,l.cn)("relative h-20 w-20 overflow-hidden rounded-lg",c),children:(0,n.jsx)(i(),{src:f,fill:!0,alt:s,className:(0,l.cn)("object-cover",d)})})})},575:function(e,r,t){"use strict";t.d(r,{z:function(){return c}});var n=t(7437),s=t(2265),i=t(7256),l=t(6061),a=t(2169);let o=(0,l.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=s.forwardRef((e,r)=>{let{className:t,variant:s,size:l,asChild:c=!1,...d}=e,u=c?i.g7:"button";return(0,n.jsx)(u,{className:(0,a.cn)(o({variant:s,size:l,className:t})),ref:r,...d})});c.displayName="Button"},117:function(e,r,t){"use strict";t.r(r),t.d(r,{ImageCardWithTooltip:function(){return i}});var n=t(7437),s=t(7417);let i=e=>(0,n.jsxs)("div",{className:"group relative flex flex-col items-center",children:[(0,n.jsx)("div",{className:"flex justify-center rounded-lg duration-500 hover:relative hover:-translate-y-2",children:(0,n.jsx)(s.F,{...e})}),(0,n.jsx)("div",{className:"absolute top-[calc(100%-0.5rem)] z-40 flex items-center justify-center rounded-lg border bg-popover p-2 text-xs text-muted-foreground opacity-0 transition duration-500 group-hover:opacity-100",children:e.alt})]})},169:function(e,r,t){"use strict";t.r(r),t.d(r,{JigglerContext:function(){return s},useJigglerContext:function(){return i}});var n=t(2265);let s=(0,n.createContext)(null),i=()=>(0,n.useContext)(s)},196:function(e,r,t){"use strict";t.r(r),t.d(r,{JigglerContextProvider:function(){return l}});var n=t(7437),s=t(2265),i=t(169);let l=e=>{let{children:r}=e,t=(0,s.useRef)(null),[l,a]=(0,s.useState)("");return(0,n.jsx)(i.JigglerContext.Provider,{value:{rotateStyle:l},children:(0,n.jsx)("div",{ref:t,onMouseMove:e=>{if(null==t.current)return;let r=(e.clientX/window.innerWidth-.5)*20,n=(.5-e.clientY/window.innerHeight)*20;a(e=>"perspective(800px) rotateY(".concat(r,"deg) rotateX(").concat(n,"deg)"))},onMouseOut:e=>{null!=t.current&&a(e=>"perspective(800px) rotateY(0deg) rotateX(0deg)")},children:r})})}},1942:function(e,r,t){"use strict";t.d(r,{gU:function(){return n},Fu:function(){return s.F}});let n={home:"/#home",skills:"/#skills",experience:"/#experience",projects:"/#projects"};var s=t(4296)},4296:function(e,r,t){"use strict";t.d(r,{F:function(){return n}});let n={title:"LEtMeDEv",description:"LEtMeDEv's portfolio",socialBanner:"/images/twitter-card.png",siteUrl:"https://79841.github.io",name:"명인지",university:"서울과학기술대학교",major:"산업정보시스템",doubleMajor:"컴퓨터공학",primaryEmail:"79841@naver.com",birthday:"1997.10.10.",address:"서울 구로구 고척동",secondaryEmail:"skj974600@gmail.com",githubUrl:"https://github.com/79841",blogUrl:"https://letmedev.vercel.app",githubUsername:"79841",username:"LEtMeDEv",language:"ko",locale:"ko_KR",profilePrimary:"/images/profile/profile-primary.png",profileSecondary:"/images/profile/profile-secondary.png"}},384:function(e,r,t){"use strict";t.d(r,{s:function(){return i}});var n=t(6435),s=t(2265);let i=()=>{let{theme:e}=(0,n.F)(),[r,t]=(0,s.useState)(void 0);return(0,s.useEffect)(()=>{let r=()=>window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";"system"===e?t(e=>r()):t(r=>e)},[e]),r}},2169:function(e,r,t){"use strict";t.d(r,{cn:function(){return i}});var n=t(7042),s=t(4769);function i(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,s.m6)((0,n.W)(r))}}},function(e){e.O(0,[310,929,582,400,724,306,420,112,273,971,938,744],function(){return e(e.s=6820)}),_N_E=e.O()}]);