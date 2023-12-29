(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6110:function(e,t,r){Promise.resolve().then(r.t.bind(r,1749,23)),Promise.resolve().then(r.t.bind(r,5250,23)),Promise.resolve().then(r.bind(r,6669)),Promise.resolve().then(r.bind(r,4981)),Promise.resolve().then(r.bind(r,9020)),Promise.resolve().then(r.bind(r,5808)),Promise.resolve().then(r.bind(r,117)),Promise.resolve().then(r.bind(r,169)),Promise.resolve().then(r.bind(r,196))},6669:function(e,t,r){"use strict";r.r(t),r.d(t,{GithubCalendarBox:function(){return x}});var n=r(7437),s=r(4296),l=r(2265);let i=()=>{let e=(0,l.useRef)(null),[t,r]=(0,l.useState)(0);return(0,l.useEffect)(()=>{let n=()=>{if(null===e.current)return;let n=Math.floor(e.current.offsetWidth/65);t!=n&&r(n)};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[t]),[t,e]};var a=r(384),c=r(2073),o=r(9394),d=r(1396),u=r.n(d);let f=(0,l.memo)(function(){return(0,n.jsx)("h1",{className:"flex justify-center pb-2 sm:justify-center",children:(0,n.jsx)(u(),{href:s.F.githubUrl,children:(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(o.wGg,{width:20,height:20}),(0,n.jsx)("div",{className:"ml-1 text-xl font-semibold",children:"Github"})]})})})}),h=e=>t=>{let r=new Date().getFullYear(),n=new Date().getMonth();return t.filter(t=>{let s=new Date(t.date),l=s.getMonth();return n>=e?s.getFullYear()===r&&l>n-e&&l<=n:s.getFullYear()===r&&l<=n||s.getFullYear()===r-1&&l>n+11-e})},x=()=>{let e=(0,a.s)(),[t,r]=i();return(0,n.jsx)("div",{className:"flex w-full justify-center sm:justify-start",ref:r,children:(0,n.jsxs)("div",{className:"flex flex-col items-center sm:items-start",children:[(0,n.jsx)(f,{}),(0,n.jsx)("div",{className:"overflow-hidden",children:(0,n.jsx)(c.Z,{username:s.F.githubUsername,hideMonthLabels:!0,hideColorLegend:!0,colorScheme:e,blockSize:13,blockMargin:2,transformData:h(t),labels:{totalCount:1===t?"{{count}} contributions in the month":"{{count}} contributions in the ".concat(t," months")}})})]})})}},4981:function(e,t,r){"use strict";r.r(t),r.d(t,{ProfileCard:function(){return Y}});var n=r(7437),s=r(2265),l=r(2169),i=r(169);r(196);let a=e=>{let{className:t,children:r,...a}=e,c=(0,i.useJigglerContext)(),o=(0,s.useRef)(null);return(0,s.useEffect)(()=>{null!=c&&null!=o&&null!=o.current&&(window.screen.width<640||(o.current.style.transform=c.rotateStyle))},[c]),(0,n.jsx)("div",{ref:o,className:(0,l.cn)("[preserve-3d] duration-100",t),...a,children:r})},c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,l.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...s})});c.displayName="Card";let o=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,l.cn)("flex flex-col space-y-1.5 p-6",r),...s})});o.displayName="CardHeader";let d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("h3",{ref:t,className:(0,l.cn)("text-2xl font-semibold leading-none tracking-tight",r),...s})});d.displayName="CardTitle";let u=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("p",{ref:t,className:(0,l.cn)("text-sm text-muted-foreground",r),...s})});u.displayName="CardDescription";let f=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,l.cn)("p-6 pt-0",r),...s})});f.displayName="CardContent";let h=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,l.cn)("flex items-center p-6 pt-0",r),...s})});h.displayName="CardFooter";var x=r(5808);function m(){return(0,n.jsx)("div",{className:"flex w-full justify-center",children:(0,n.jsxs)(x.Avatar,{className:"my-[30px] h-60 w-60",children:[(0,n.jsx)(x.AvatarImage,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),(0,n.jsx)(x.AvatarFallback,{children:"CN"})]})})}var v=r(575);let g=e=>{let{onClick:t,value:r}=e;return(0,n.jsx)(v.z,{onClick:t,variant:"ghost",className:"cursor-pointer text-xs  text-muted-foreground opacity-0 transition duration-1000 group-hover:opacity-100",children:r})},j=e=>{let{isFlipped:t,handleFilp:r}=e;return(0,n.jsx)("div",{className:(0,l.cn)("left-0 top-0 -z-10 duration-1000 [backface-visibility:hidden] [transform:rotateY(180deg)]",t?"[transform:rotateY(0deg)]":""),children:(0,n.jsxs)(c,{className:"w-fit sm:w-[350px]",children:[(0,n.jsxs)(o,{children:[(0,n.jsx)(m,{}),(0,n.jsx)(d,{children:"저는..."}),(0,n.jsx)(u,{children:"보안전문가에서 프론트엔드 개발자로.."})]}),(0,n.jsxs)(f,{children:[(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("h3",{className:"pb-2 text-2xl font-semibold leading-none tracking-tight",children:"함께 성장하고 발전하는"}),(0,n.jsx)(u,{children:"함께 공부하고 기술리뷰하는 것을 좋아합니다. 협업과 팀 프로젝트를 즐기며 팀의 성장이 저의 성장이라고 생각합니다."})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("h3",{className:"pb-2 text-2xl font-semibold leading-none tracking-tight",children:"자바스크립트에 환장한"}),(0,n.jsx)(u,{children:"개발자로 전향한 기간은 길지 않지만 컴퓨터 보안을 할 때부터 오랜기간 JS를 팔과 다리처럼 사용해왔고 JS로 코딩하는 것을 정말 좋아합니다."})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("h3",{className:"pb-2 text-2xl font-semibold leading-none tracking-tight",children:"개발 트렌드에 민감한"}),(0,n.jsx)(u,{children:"새로운 기술을 사용하고 적용하는 것에 익숙하며 기존에 사용하고 있는 기술과 비교 분석하여 애플리케이션 퍼포먼스를 향상시킬 수 있습니다."})]}),(0,n.jsx)("div",{children:(0,n.jsx)("h3",{className:"pb-2 text-2xl font-semibold leading-none tracking-tight",children:"개발자 입니다."})})]}),(0,n.jsx)(h,{className:"flex justify-end",children:(0,n.jsx)(g,{onClick:r,value:"Go front"})})]})})},p=(0,s.memo)(function(e){let{content:t}=e;return(0,n.jsx)("div",{className:"inline-block bg-gradient-to-r from-cyan-400 to-sky-950 bg-clip-text text-transparent",children:t})}),b=e=>{let{children:t,Icon:r}=e;return(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("div",{className:"flex h-6 w-8 items-center",children:(0,n.jsx)(r,{})}),t]})};var N=r(2410),y=r(9241),w=r(4296),k=r(2510),F=r(8910),C=r(1396),E=r.n(C),M=r(3159),R=r(1678);let P=e=>{let{isFlipped:t,handleFilp:r}=e;return(0,n.jsx)("div",{className:(0,l.cn)("group absolute h-full w-full duration-1000 [backface-visibility:hidden]",t?"[transform:rotateY(180deg)]":""),children:(0,n.jsxs)(c,{className:"sm:w-[350px]",children:[(0,n.jsxs)(o,{children:[(0,n.jsx)(m,{}),(0,n.jsx)(d,{children:(0,n.jsx)(p,{content:w.F.username})}),(0,n.jsx)(u,{children:"About"})]}),(0,n.jsxs)(f,{className:"flex flex-col gap-4",children:[(0,n.jsx)(b,{Icon:N.hyG,children:w.F.name}),(0,n.jsx)(b,{Icon:y.yjk,children:(0,n.jsxs)("div",{children:[w.F.university,(0,n.jsx)("br",{}),"".concat(w.F.major," 전공"),(0,n.jsx)("br",{}),"".concat(w.F.doubleMajor," 복수 전공")]})}),(0,n.jsx)(b,{Icon:k.XdU,children:(0,n.jsx)("div",{children:w.F.birthday})}),(0,n.jsx)(b,{Icon:F.c7Z,children:(0,n.jsx)("div",{children:w.F.address})}),(0,n.jsx)(b,{Icon:F.ixJ,children:(0,n.jsx)(E(),{href:"mailto:".concat(w.F.primaryEmail),children:w.F.primaryEmail})}),(0,n.jsx)(b,{Icon:M.hJX,children:(0,n.jsx)(E(),{href:w.F.githubUrl,children:"".concat(w.F.username,"(Github)")})}),(0,n.jsx)(b,{Icon:R.bn7,children:(0,n.jsx)(E(),{href:w.F.blogUrl,children:"".concat(w.F.username,"(Blog)")})})]}),(0,n.jsx)(h,{className:"flex justify-end",children:(0,n.jsx)(g,{onClick:r,value:"Go back"})})]})})};function Y(){let[e,t]=(0,s.useState)(!1),r=(0,s.useCallback)(e=>{t(e=>!e)},[]);return(0,n.jsx)(a,{children:(0,n.jsx)("div",{className:"group relative flex w-fit",children:(0,n.jsxs)("div",{className:(0,l.cn)("relative"),children:[(0,n.jsx)(P,{isFlipped:e,handleFilp:r}),(0,n.jsx)(j,{isFlipped:e,handleFilp:r})]})})})}},9020:function(e,t,r){"use strict";r.r(t),r.d(t,{SkillBox:function(){return i}});var n=r(7437),s=r(4825),l=r(7417);r(2265);let i=e=>{let{name:t,...r}=e;return(0,n.jsxs)("div",{className:"flex w-20 flex-col items-center gap-1 sm:w-24",children:[(0,n.jsx)("div",{className:"flex justify-center rounded-lg duration-500 hover:relative hover:-translate-y-2",children:(0,n.jsx)(l.F,{...r,alt:t})}),(0,n.jsx)(s.iF,{mode:"single",max:12,className:"text-muted-foreground",children:t})]})}},5808:function(e,t,r){"use strict";r.r(t),r.d(t,{Avatar:function(){return a},AvatarFallback:function(){return o},AvatarImage:function(){return c}});var n=r(7437),s=r(2265),l=r(6694),i=r(2169);let a=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(l.fC,{ref:t,className:(0,i.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",r),...s})});a.displayName=l.fC.displayName;let c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(l.Ee,{ref:t,className:(0,i.cn)("aspect-square h-full w-full",r),...s})});c.displayName=l.Ee.displayName;let o=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(l.NY,{ref:t,className:(0,i.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",r),...s})});o.displayName=l.NY.displayName},7417:function(e,t,r){"use strict";r.d(t,{F:function(){return o}});var n=r(7437),s=r(6691),l=r.n(s),i=r(2169),a=r(384),c=r(2265);let o=(0,c.memo)(function(e){let{defaultImage:t,darkModeImage:r,alt:s,className:o,imageStyle:d}=e,u=(0,a.s)(),[f,h]=(0,c.useState)(t);return(0,c.useEffect)(()=>{h(e=>null!=r&&"dark"===u?r:t)},[r,t,u]),(0,n.jsx)("div",{className:(0,i.cn)("relative h-20 w-20 overflow-hidden rounded-lg",o),children:(0,n.jsx)(l(),{src:f,fill:!0,alt:s,className:(0,i.cn)("object-cover",d)})})})},575:function(e,t,r){"use strict";r.d(t,{z:function(){return o}});var n=r(7437),s=r(2265),l=r(7256),i=r(6061),a=r(2169);let c=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),o=s.forwardRef((e,t)=>{let{className:r,variant:s,size:i,asChild:o=!1,...d}=e,u=o?l.g7:"button";return(0,n.jsx)(u,{className:(0,a.cn)(c({variant:s,size:i,className:r})),ref:t,...d})});o.displayName="Button"},117:function(e,t,r){"use strict";r.r(t),r.d(t,{ImageCardWithTooltip:function(){return l}});var n=r(7437),s=r(7417);let l=e=>(0,n.jsxs)("div",{className:"group relative flex flex-col items-center",children:[(0,n.jsx)("div",{className:"flex justify-center rounded-lg duration-500 hover:relative hover:-translate-y-2",children:(0,n.jsx)(s.F,{...e})}),(0,n.jsx)("div",{className:"absolute top-[calc(100%-0.5rem)] z-40 flex items-center justify-center rounded-lg border bg-popover p-2 text-xs text-muted-foreground opacity-0 transition duration-500 group-hover:opacity-100",children:e.alt})]})},169:function(e,t,r){"use strict";r.r(t),r.d(t,{JigglerContext:function(){return s},useJigglerContext:function(){return l}});var n=r(2265);let s=(0,n.createContext)(null),l=()=>(0,n.useContext)(s)},196:function(e,t,r){"use strict";r.r(t),r.d(t,{JigglerContextProvider:function(){return i}});var n=r(7437),s=r(2265),l=r(169);let i=e=>{let{children:t}=e,r=(0,s.useRef)(null),[i,a]=(0,s.useState)("");return(0,n.jsx)(l.JigglerContext.Provider,{value:{rotateStyle:i},children:(0,n.jsx)("div",{ref:r,onMouseMove:e=>{if(null==r.current)return;let t=(e.clientX/window.innerWidth-.5)*20,n=(.5-e.clientY/window.innerHeight)*20;a(e=>"perspective(800px) rotateY(".concat(t,"deg) rotateX(").concat(n,"deg)"))},onMouseOut:e=>{null!=r.current&&a(e=>"perspective(800px) rotateY(0deg) rotateX(0deg)")},children:t})})}},4296:function(e,t,r){"use strict";r.d(t,{F:function(){return n}});let n={title:"LEtMeDEv",description:"LEtMeDEv's portfolio",socialBanner:"/images/twitter-card.png",siteUrl:"https://79841.github.io",name:"명인지",university:"서울과학기술대학교",major:"산업정보시스템",doubleMajor:"컴퓨터공학",primaryEmail:"79841@naver.com",birthday:"1997.10.10.",address:"서울 구로구 고척동",secondaryEmail:"skj974600@gmail.com",githubUrl:"https://github.com/79841",blogUrl:"https://letmedev.vercel.app",githubUsername:"79841",username:"LEtMeDEv",language:"ko",locale:"ko_KR"}},384:function(e,t,r){"use strict";r.d(t,{s:function(){return l}});var n=r(6435),s=r(2265);let l=()=>{let{theme:e}=(0,n.F)(),[t,r]=(0,s.useState)(void 0);return(0,s.useEffect)(()=>{let t=()=>window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";"system"===e?r(e=>t()):r(t=>e)},[e]),t}},2169:function(e,t,r){"use strict";r.d(t,{cn:function(){return l}});var n=r(7042),s=r(4769);function l(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,n.W)(t))}}},function(e){e.O(0,[310,929,582,400,724,306,420,637,595,971,938,744],function(){return e(e.s=6110)}),_N_E=e.O()}]);