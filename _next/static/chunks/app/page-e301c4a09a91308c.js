(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4389:function(e,t,s){Promise.resolve().then(s.t.bind(s,1749,23)),Promise.resolve().then(s.bind(s,6669)),Promise.resolve().then(s.bind(s,5712)),Promise.resolve().then(s.bind(s,9020)),Promise.resolve().then(s.bind(s,5808)),Promise.resolve().then(s.bind(s,7996)),Promise.resolve().then(s.bind(s,169)),Promise.resolve().then(s.bind(s,196))},6669:function(e,t,s){"use strict";s.r(t),s.d(t,{GithubCalendarBox:function(){return f}});var a=s(7437),l=s(2183),i=s(2265);let r=()=>{let e=(0,i.useRef)(null),[t,s]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let a=()=>{if(null===e.current)return;let a=Math.floor(e.current.offsetWidth/65);t!=a&&s(a)};return a(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[t]),[t,e]};var n=s(384),o=s(2073),d=s(9394),c=s(1396),m=s.n(c);let u=(0,i.memo)(function(){return(0,a.jsx)("h1",{className:"flex justify-center pb-2 sm:justify-center",children:(0,a.jsx)(m(),{href:l.c.githubUrl,children:(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(d.wGg,{width:20,height:20}),(0,a.jsx)("div",{className:"ml-1 text-xl font-semibold",children:"Github"})]})})})}),g=e=>t=>{let s=new Date().getFullYear(),a=new Date().getMonth();return t.filter(t=>{let l=new Date(t.date),i=l.getMonth();return a>=e?l.getFullYear()===s&&i>a-e&&i<=a:l.getFullYear()===s&&i<=a||l.getFullYear()===s-1&&i>a+11-e})},f=()=>{let e=(0,n.s)(),[t,s]=r();return(0,a.jsx)("div",{className:"flex w-full justify-center sm:justify-start",ref:s,children:(0,a.jsxs)("div",{className:"flex flex-col items-center sm:items-start",children:[(0,a.jsx)(u,{}),(0,a.jsx)("div",{className:"overflow-hidden",children:(0,a.jsx)(o.Z,{username:l.c.githubUsername,hideMonthLabels:!0,hideColorLegend:!0,colorScheme:e,blockSize:13,blockMargin:2,transformData:g(t),labels:{totalCount:1===t?"{{count}} contributions in the month":"{{count}} contributions in the ".concat(t," months")}})})]})})}},5712:function(e,t,s){"use strict";s.r(t),s.d(t,{ProfileCard:function(){return S}});var a=s(7437),l=s(2265),i=s(2169),r=s(169);s(196);let n=e=>{let{className:t,children:s,...n}=e,o=(0,r.useJigglerContext)(),d=(0,l.useRef)(null);return(0,l.useEffect)(()=>{null!=o&&null!=d&&null!=d.current&&(window.screen.width<640||(d.current.style.transform=o.rotateStyle))},[o]),(0,a.jsx)("div",{ref:d,className:(0,i.cn)("[preserve-3d] duration-100",t),...n,children:s})},o=l.forwardRef((e,t)=>{let{className:s,...l}=e;return(0,a.jsx)("div",{ref:t,className:(0,i.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",s),...l})});o.displayName="Card";let d=l.forwardRef((e,t)=>{let{className:s,...l}=e;return(0,a.jsx)("div",{ref:t,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",s),...l})});d.displayName="CardHeader";let c=l.forwardRef((e,t)=>{let{className:s,...l}=e;return(0,a.jsx)("h3",{ref:t,className:(0,i.cn)("text-2xl font-semibold leading-none tracking-tight",s),...l})});c.displayName="CardTitle";let m=l.forwardRef((e,t)=>{let{className:s,...l}=e;return(0,a.jsx)("p",{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",s),...l})});m.displayName="CardDescription";let u=l.forwardRef((e,t)=>{let{className:s,...l}=e;return(0,a.jsx)("div",{ref:t,className:(0,i.cn)("p-6 pt-0",s),...l})});u.displayName="CardContent";let g=l.forwardRef((e,t)=>{let{className:s,...l}=e;return(0,a.jsx)("div",{ref:t,className:(0,i.cn)("flex items-center p-6 pt-0",s),...l})});g.displayName="CardFooter";var f=s(5808);function h(){return(0,a.jsx)("div",{className:"flex w-full justify-center",children:(0,a.jsxs)(f.Avatar,{className:"my-[30px] h-60 w-60",children:[(0,a.jsx)(f.AvatarImage,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),(0,a.jsx)(f.AvatarFallback,{children:"CN"})]})})}let x=e=>{let{children:t}=e;return(0,a.jsx)("div",{className:"group-hover:animate-show-up absolute z-30 hidden h-full w-full items-center justify-center backdrop-blur group-hover:flex",children:t})},p=e=>{let{isFlipped:t}=e;return(0,a.jsxs)("div",{className:(0,i.cn)("left-0 top-0 -z-10 duration-1000 [backface-visibility:hidden] [transform:rotateY(180deg)]",t?"[transform:rotateY(0deg)]":""),children:[(0,a.jsx)(x,{children:"Go front"}),(0,a.jsxs)(o,{className:"w-fit sm:w-[350px]",children:[(0,a.jsxs)(d,{children:[(0,a.jsx)(h,{}),(0,a.jsx)(c,{children:"저는...!"}),(0,a.jsx)(m,{children:"보안전문가에서 프론트엔드 개발자로!!"})]}),(0,a.jsxs)(u,{children:[(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("h3",{className:"pb-2 text-2xl font-semibold leading-none tracking-tight",children:"함께 성장하고 발전하는!"}),(0,a.jsx)(m,{children:"함께 공부하고 기술리뷰하는 것을 좋아합니다. 협업과 팀 프로젝트를 즐기며 팀의 성장이 저의 성장이라고 생각합니다."})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("h3",{className:"pb-2 text-2xl font-semibold leading-none tracking-tight",children:"자바스크립트에 환장한!"}),(0,a.jsx)(m,{children:"개발자로 전향한 기간은 길지 않지만 컴퓨터 보안을 할 때부터 오랜기간 JS를 팔과 다리처럼 사용해왔고 JS로 코딩하는 것을 정말 좋아합니다."})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("h3",{className:"pb-2 text-2xl font-semibold leading-none tracking-tight",children:"개발 트렌드에 민감한!"}),(0,a.jsx)(m,{children:"새로운 기술을 사용하고 적용하는 것에 익숙하며 기존에 사용하고 있는 기술과 비교 분석하여 애플리케이션 퍼포먼스를 향상시킬 수 있습니다."})]}),(0,a.jsx)("div",{children:(0,a.jsx)("h3",{className:"pb-2 text-2xl font-semibold leading-none tracking-tight",children:"개발자 입니다!"})})]}),(0,a.jsx)(g,{className:"flex justify-between"})]})]})},j=(0,l.memo)(function(e){let{content:t}=e;return(0,a.jsx)("div",{className:"inline-block bg-gradient-to-r from-cyan-400 to-sky-950 bg-clip-text text-transparent",children:t})}),v=e=>{let{children:t,Icon:s}=e;return(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("div",{className:"w-8",children:(0,a.jsx)(s,{})}),t]})};var b=s(2410),k=s(9241),y=s(2183),N=s(2510),w=s(8910),I=s(1396),C=s.n(I);let F=e=>{let{isFlipped:t}=e;return(0,a.jsxs)("div",{className:(0,i.cn)("group absolute h-full w-full duration-1000 [backface-visibility:hidden]",t?"[transform:rotateY(180deg)]":""),children:[(0,a.jsx)(x,{children:"Go back"}),(0,a.jsxs)(o,{className:"sm:w-[350px]",children:[(0,a.jsxs)(d,{children:[(0,a.jsx)(h,{}),(0,a.jsx)(c,{children:(0,a.jsx)(j,{content:y.c.username})}),(0,a.jsx)(m,{children:"About"})]}),(0,a.jsxs)(u,{className:"flex flex-col gap-4",children:[(0,a.jsx)(v,{Icon:b.hyG,children:y.c.name}),(0,a.jsx)(v,{Icon:k.yjk,children:(0,a.jsxs)("div",{children:[y.c.university,(0,a.jsx)("br",{}),"".concat(y.c.major," 전공"),(0,a.jsx)("br",{}),"".concat(y.c.doubleMajor," 복수 전공")]})}),(0,a.jsx)(v,{Icon:N.XdU,children:(0,a.jsx)("div",{children:y.c.birthday})}),(0,a.jsx)(v,{Icon:w.c7Z,children:(0,a.jsx)("div",{children:y.c.address})}),(0,a.jsx)(v,{Icon:w.ixJ,children:(0,a.jsx)("div",{children:(0,a.jsx)(C(),{href:"mailto:".concat(y.c.primaryEmail),children:y.c.primaryEmail})})})]}),(0,a.jsx)(g,{className:"flex justify-between"})]})]})};function S(){let[e,t]=(0,l.useState)(!1);return(0,a.jsx)(n,{children:(0,a.jsx)("div",{className:"group relative flex w-fit",children:(0,a.jsxs)("div",{onClick:e=>{t(e=>!e)},className:(0,i.cn)("relative"),children:[(0,a.jsx)(F,{isFlipped:e}),(0,a.jsx)(p,{isFlipped:e})]})})})}},9020:function(e,t,s){"use strict";s.r(t),s.d(t,{SkillBox:function(){return r}});var a=s(7437),l=s(4825),i=s(7417);s(2265);let r=e=>{let{name:t,...s}=e;return(0,a.jsxs)("div",{className:"flex w-24 flex-col items-center gap-1",children:[(0,a.jsx)("div",{className:"flex justify-center rounded-lg duration-500 hover:relative hover:-translate-y-2",children:(0,a.jsx)(i.F,{...s,alt:t})}),(0,a.jsx)(l.iF,{mode:"single",className:"text-xs text-muted-foreground sm:text-sm",max:16,children:t})]})}},5808:function(e,t,s){"use strict";s.r(t),s.d(t,{Avatar:function(){return n},AvatarFallback:function(){return d},AvatarImage:function(){return o}});var a=s(7437),l=s(2265),i=s(6694),r=s(2169);let n=l.forwardRef((e,t)=>{let{className:s,...l}=e;return(0,a.jsx)(i.fC,{ref:t,className:(0,r.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",s),...l})});n.displayName=i.fC.displayName;let o=l.forwardRef((e,t)=>{let{className:s,...l}=e;return(0,a.jsx)(i.Ee,{ref:t,className:(0,r.cn)("aspect-square h-full w-full",s),...l})});o.displayName=i.Ee.displayName;let d=l.forwardRef((e,t)=>{let{className:s,...l}=e;return(0,a.jsx)(i.NY,{ref:t,className:(0,r.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",s),...l})});d.displayName=i.NY.displayName},7417:function(e,t,s){"use strict";s.d(t,{F:function(){return d}});var a=s(7437),l=s(6691),i=s.n(l),r=s(2169),n=s(384),o=s(2265);let d=(0,o.memo)(function(e){let{defaultImage:t,darkModeImage:s,alt:l,className:d,imageStyle:c}=e,m=(0,n.s)(),[u,g]=(0,o.useState)(t);return(0,o.useEffect)(()=>{g(e=>null!=s&&"dark"===m?s:t)},[s,t,m]),(0,a.jsx)("div",{className:(0,r.cn)("relative h-20 w-20 overflow-hidden rounded-lg",d),children:(0,a.jsx)(i(),{src:u,fill:!0,alt:l,className:(0,r.cn)("object-cover",c)})})})},7996:function(e,t,s){"use strict";s.r(t),s.d(t,{ImageCardWithTooltip:function(){return u}});var a=s(7437),l=s(2265),i=s(8567),r=s(2169);let n=i.zt,o=i.fC,d=i.xz,c=l.forwardRef((e,t)=>{let{className:s,sideOffset:l=4,...n}=e;return(0,a.jsx)(i.VY,{ref:t,sideOffset:l,className:(0,r.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",s),...n})});c.displayName=i.VY.displayName;var m=s(7417);let u=e=>(0,a.jsx)(n,{children:(0,a.jsxs)(o,{children:[(0,a.jsx)(d,{children:(0,a.jsx)("div",{className:"flex justify-center rounded-lg duration-500 hover:relative hover:-translate-y-2",children:(0,a.jsx)(m.F,{...e})})}),(0,a.jsx)(c,{children:(0,a.jsx)("p",{children:e.alt})})]})})},169:function(e,t,s){"use strict";s.r(t),s.d(t,{JigglerContext:function(){return l},useJigglerContext:function(){return i}});var a=s(2265);let l=(0,a.createContext)(null),i=()=>(0,a.useContext)(l)},196:function(e,t,s){"use strict";s.r(t),s.d(t,{JigglerContextProvider:function(){return r}});var a=s(7437),l=s(2265),i=s(169);let r=e=>{let{children:t}=e,s=(0,l.useRef)(null),[r,n]=(0,l.useState)("");return(0,a.jsx)(i.JigglerContext.Provider,{value:{rotateStyle:r},children:(0,a.jsx)("div",{ref:s,onMouseMove:e=>{if(null==s.current)return;let t=(e.clientX/window.innerWidth-.5)*20,a=(.5-e.clientY/window.innerHeight)*20;n(e=>"perspective(800px) rotateY(".concat(t,"deg) rotateX(").concat(a,"deg)"))},onMouseOut:e=>{null!=s.current&&n(e=>"perspective(800px) rotateY(0deg) rotateX(0deg)")},children:t})})}},2183:function(e,t,s){"use strict";s.d(t,{c:function(){return a}});let a={name:"명인지",university:"서울과학기술대학교",major:"산업정보시스템",doubleMajor:"컴퓨터공학",primaryEmail:"79841@naver.com",birthday:"1997.10.10.",address:"서울 구로구 고척동",secondaryEmail:"skj974600@gmail.com",githubUrl:"https://github.com/79841",blogUrl:"https://letmedev.vercel.app",githubUsername:"79841",username:"LEtMeDEv",skills:{frontEnd:{javascript:{name:"Javascript",defaultImage:"/images/skills/javascript-original.svg"},typescript:{name:"Typescript",defaultImage:"/images/skills/typescript-original.svg"},react:{defaultImage:"/images/skills/react-original.svg",name:"React"},redux:{defaultImage:"/images/skills/redux-original.svg",name:"Redux"},nextjs:{defaultImage:"/images/skills/nextjs-original.svg",darkModeImage:"/images/skills/nextjs-white.svg",name:"Next.js"},recoil:{defaultImage:"/images/skills/recoil-logo.png",name:"Recoil"},zustand:{name:"Zustand",defaultImage:"/images/skills/bear.jpg"},tanstackQuery:{defaultImage:"/images/skills/tanstack-original.png",name:"Tanstack Query"},styledComponents:{name:"Styled Components",defaultImage:"/images/skills/styled-components-logo.png"},tailwindcss:{defaultImage:"/images/skills/tailwindcss-plain.svg",name:"Tailwindcss"},shadcn:{defaultImage:"/images/skills/shadcn-original.svg",darkModeImage:"/images/skills/shadcn-white.svg",name:"Shadcn"},jest:{name:"Jest",defaultImage:"/images/skills/jest-logo.png"},testingLibrary:{defaultImage:"/images/skills/testing-library-logo.png",name:"Testing Library"},msw:{defaultImage:"/images/skills/msw-logo.png",name:"Msw"},prisma:{defaultImage:"/images/skills/prisma-logo.png",name:"Prisma"}},backEnd:{nodejs:{defaultImage:"/images/skills/nodejs-logo.png",name:"Node.js"},express:{defaultImage:"/images/skills/express-original.svg",darkModeImage:"/images/skills/express-white.svg",name:"Express.js"},nestjs:{defaultImage:"/images/skills/nestjs-plain.svg",name:"Nest.js"},fastapi:{defaultImage:"/images/skills/fastapi-original.svg",name:"FastAPI"},php:{defaultImage:"/images/skills/php-plain.svg",name:"PHP"},firebase:{defaultImage:"/images/skills/firebase-plain.svg",name:"Firebase"},mysql:{defaultImage:"/images/skills/mysql-original.svg",name:"Mysql"},mongodb:{defaultImage:"/images/skills/mongodb-original.svg",name:"Mongodb"}},app:{flutter:{defaultImage:"/images/skills/flutter-original.svg",name:"Flutter"}},deployment:{vultr:{defaultImage:"/images/skills/vultr-logo.webp",name:"Vultr"},firebase:{defaultImage:"/images/skills/firebase-plain.svg",name:"Firebase"},vercel:{defaultImage:"/images/skills/vercel-logo.png",name:"Vercel"},docker:{defaultImage:"/images/skills/docker-plain.svg",name:"Docker"}},statusManagement:{github:{defaultImage:"/images/skills/github-original.svg",name:"Github"},git:{defaultImage:"/images/skills/git-original.svg",name:"Git"}},communication:{jira:{defaultImage:"/images/skills/jira-original.svg",name:"Jira"},confluence:{defaultImage:"/images/skills/confluence-original.svg",name:"Confluence"},slack:{defaultImage:"/images/skills/slack-original.svg",name:"Slack"},discord:{defaultImage:"/images/skills/discord-logo.ico",name:"Discord"},gather:{defaultImage:"/images/skills/gather-logo.png",name:"Gather"},figma:{defaultImage:"/images/skills/figma-original.svg",name:"Figma"}}},experiences:[{title:"공군 사이버 작전센터",content:"체계 개발 및 취약점 분석",period:"2018.08. ~ 2020.05."},{title:"2019 사이버공격방어대회 CCE 기관팀 3위",period:"2019.11."},{title:" 네이버 버그바운티 명예의전당",period:"2020.01."},{title:"비욘드 코딩",content:"HTML, CSS, Javascript, Python 강의",period:"2020.11. ~ "},{title:"2020 금융보안 위협분석 대회 FIESTA 우승",period:"2020.12."},{title:"2020 시큐리티챌린지 개인정보비식별 본선",period:"2020.12."},{title:"2021 금융보안 위협분석 대회 FIESTA 3위",period:"2021.12."},{title:"토스페이먼츠",content:"취약점진단 및 모의해킹",period:"2022.04. ~ 2022.06."},{title:"2022 소개딩 해커톤 본선",period:"2022.09."}],projects:[{name:"추신사",description:"사용자의 성별, 키, 몸무게 정보를 이용하여 의류를 추천하는 웹 애플리케이션입니다.",content:"현재 존재하는 온라인 의류 쇼핑몰은 구매 이력, 상품 클릭 여부, 나이 등을 종합하여 개인에게 의류를 추천해 주는 쇼핑몰 입니다. 5명이서 진행한 프로젝트로 전반적인 프론트엔드와 백엔드의 전반적인 개발을 맡았습니다. 처리하는 데이터양이 방대하여 데이터베이스를 설계할때 정규화에 집중했습니다. 열정적인 팀원들과 함께 개발하며 협업의 재미를 느낄 수 있었던 프로젝트입니다.",techStack:["Next.js","FastAPI","Mysql"],date:"2022.04. ~ 2022.11.",images:["/images/projects/chusinsa/chusinsa.png"],github:["https://github.com/79841/chusinsa-front"]},{name:"렛츠듀",description:"척수 장애인을 위한 건강관리 앱 입니다.",content:"척수 장애인들에게 건강 관리를 위한 프로젝트를 제공하고 간편하게 상담할 수 있는 모바일 앱입니다. 사용자용과 관리자용으로 두가지 앱을 개발하고 백엔드까지 개발한 1인 프로젝트입니다. 사용자들의 과제 수행도를 확인하기 위한 대시보드와 상담을 위한 실시간 채팅 기능을 만들었습니다. 처음으로 진행한 플러터 프로젝트이면서 웹 소켓을 이용한 채팅 프로그램에 깊은 이해를 갖게 되어 의미가 있습니다.",techStack:["Flutter","FastAPI","Mysql","Redis"],date:"2023.06. ~ 2023.10.",images:["/images/projects/letsdo/letsdo_1.png","/images/projects/letsdo/letsdo_2.png","/images/projects/letsdo/letsdo_3.png","/images/projects/letsdo/letsdo_4.png"],github:["https://github.com/79841/letsdo-app","https://github.com/79841/letsdo-admin-app","https://github.com/79841/letsdo-back"]},{name:"DreamShare",description:"서로의 꿈을 공유하는 앱입니다.",content:"꿈 일기를 작성하고 공유하는 앱입니다. 현재 개발 중인 3인 프로젝트로 웹과 앱 개발을 동시에 진행하고 있습니다. 프론트엔드와 앱 개발을 맡고 있으며 백엔드는 코드리뷰로 참여하고 있습니다. Jira와 Slack을 통해 협업하고 있으면 Agile 방법론으로 개발하고 있습니다. 프로젝트 초기부터 체계적으로 설계한 프로젝트이고 Slack과 코드리뷰를 통해 적극적인 협업 중인 프로젝트이기에 의미가 큽니다. 또한 카카오와 구글 등의 소셜로그인을 구현하면서 OAuth와 OIDC에 대한 개념을 다질 수 있었습니다.",techStack:["Next.js","Recoil","Flutter","Spring Boot","Mysql"],date:"2023.10. ~ ",images:["/images/projects/dream-share/dream-share.png"],github:["https://github.com/Dream-share"]},{name:"Security Gym",description:"침해사고가 발생했을 시 즉각적인 대응을 위한 훈련 시스템입니다.",content:"기업에 침해사고 발생시 즉각적인 대응(Incident Response)을 위한 시스템입니다. BoB에서 진행한 5인 프로젝트로 시스템 구축과 포렌식을 맡아서 했습니다. 처음 진행한 협업 프로젝트이기에 의미가 큽니다. PHP와 Flask를 이용하여 서버를 개발했고 Docker와 VMware로 가상환경을 구현했습니다.",techStack:["PHP","Flask","Mysql"],date:"2017.09. ~ 2017.12."}]}},384:function(e,t,s){"use strict";s.d(t,{s:function(){return i}});var a=s(6435),l=s(2265);let i=()=>{let{theme:e}=(0,a.F)(),[t,s]=(0,l.useState)(void 0);return(0,l.useEffect)(()=>{let t=()=>window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";"system"===e?s(e=>t()):s(t=>e)},[e]),t}},2169:function(e,t,s){"use strict";s.d(t,{cn:function(){return i}});var a=s(7042),l=s(4769);function i(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,l.m6)((0,a.W)(t))}}},function(e){e.O(0,[310,929,582,400,306,3,99,971,938,744],function(){return e(e.s=4389)}),_N_E=e.O()}]);