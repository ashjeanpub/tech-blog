"use strict";(self.webpackChunktech_blog=self.webpackChunktech_blog||[]).push([[6381],{2050:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>t,contentTitle:()=>h,default:()=>o,frontMatter:()=>d,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"CS/DB/Sharding","title":"Sharding","description":"Concept","source":"@site/docs/CS/DB/02. Sharding.md","sourceDirName":"CS/DB","slug":"/CS/DB/Sharding","permalink":"/tech-blog/en/docs/CS/DB/Sharding","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"CSSidebar","previous":{"title":"DataBase","permalink":"/tech-blog/en/docs/category/database"},"next":{"title":"Git","permalink":"/tech-blog/en/docs/category/git"}}');var s=i(4848),l=i(8453);const d={sidebar_position:2},h=void 0,t={},a=[{value:"Concept",id:"concept",level:2},{value:"Purpose",id:"purpose",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Horizontal Partitioning VS Sharding",id:"horizontal-partitioning-vs-sharding",level:2},{value:"Pros &amp; Cons",id:"pros--cons",level:2},{value:"Pros",id:"pros",level:3},{value:"Cons",id:"cons",level:3},{value:"Types",id:"types",level:2},{value:"Hash Sharding",id:"hash-sharding",level:3},{value:"Modular Sharding",id:"modular-sharding",level:3},{value:"Range Sharding",id:"range-sharding",level:3},{value:"Directory Sharding",id:"directory-sharding",level:3},{value:"Refrences",id:"refrences",level:2}];function c(n){const e={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"concept",children:"Concept"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\ub3d9\uc77c\ud55c \uc2a4\ud0a4\ub9c8\ub97c \uac00\uc9c0\uace0 \uc788\ub294 \uc5ec\ub7ec \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc11c\ubc84\ub4e4\uc5d0 \ub370\uc774\ud130\ub4e4\uc744 \uc77c\uc815 \ub2e8\uc704(Shard)\ub85c \ubd84\uc0b0 \uc800\uc7a5\ud558\ub294 \uae30\ubc95"}),"\n",(0,s.jsx)(e.li,{children:"\uac01 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \ud30c\ud2f0\uc158(partition)\ub4e4\uc744 \uc11c\ub85c \ub2e4\ub978 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc11c\ubc84\uc5d0 \uc800\uc7a5"}),"\n",(0,s.jsx)(e.li,{children:"\uac1c\ub150\uc801\uc73c\ub85c \ud55c \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub97c \uac01 \uc11c\ubc84\uc5d0 \ubb3c\ub9ac\uc801\uc73c\ub85c \ubd84\ud560\ud558\uc5ec \ubd80\ud558(Load) \ubd84\uc0b0"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"purpose",children:"Purpose"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\ud2b8\ub798\ud53d \ubd84\uc0b0"}),"\n",(0,s.jsx)(e.li,{children:"\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \ubc18\uc751 \uc18d\ub3c4 \uac1c\uc120"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Sharding Key","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\uac01 \uc11c\ubc84\uc5d0 \uc788\ub294 \ud14c\uc774\ube14\ub4e4\uc740 \uac1c\ub150\uc801\uc73c\ub85c \ud55c \ud14c\uc774\ube14 \ub0b4\uc5d0 \uc788\ub294 \uac83\uc774\uc9c0\ub9cc, \uc5b4\ub5a4 DB\uc11c\ubc84\uc5d0 \uc800\uc7a5\ub418\uc5b4\uc788\ub294\uc9c0 \uc0e4\ub529 \ud0a4\ub97c \uad6c\ud604\ud558\uc5ec \ucd94\uc801\ud560 \uc218 \uc788\uc5b4\uc57c \ud55c\ub2e4."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"horizontal-partitioning-vs-sharding",children:"Horizontal Partitioning VS Sharding"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\uc0e4\ub529\uc740 \uc218\ud3c9 \ud30c\ud2f0\uc154\ub2dd\uc758 \uc77c\uc885"}),"\n",(0,s.jsxs)(e.li,{children:["\ubb3c\ub9ac \uad6c\ud604 \ud615\ud0dc\uac00 \ub2e4\ub984","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\uc218\ud3c9\uc801 \ud30c\ud2f0\uc154\ub2dd : \ub3d9\uc77c\ud55c DB \uc11c\ubc84 \ub0b4\uc5d0\uc11c \ud14c\uc774\ube14\uc744 \ubd84\ud560"}),"\n",(0,s.jsxs)(e.li,{children:["\uc0e4\ub529 : DB \uc11c\ubc84 \uc790\uccb4\ub97c \ubd84\ud560","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \ucc28\uc6d0\uc758 \uc218\ud3c9 \ud655\uc7a5"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"\uc0e4\ub529\uc758 \uacbd\uc6b0 DBMS\uac00 \uacf5\uc2dd \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294\ub2e4\uba74 \uc778\ub371\uc2a4\uc640 \uac19\uc740 \uc131\ub2a5 \uce21\uba74\uc5d0\uc11c \uc190\ud574\ub97c \ubcfc \uc218\ub3c4 \uc788\uc74c"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"pros--cons",children:"Pros & Cons"}),"\n",(0,s.jsx)(e.h3,{id:"pros",children:"Pros"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Easy Scale Out","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\uc0e4\ub4dc\ub97c \ucd94\uac00\ud560 \ub54c \ubcc4\uac1c\ub85c \uc0e4\ub4dc \uad6c\uc131\ud574\uc11c \ubd99\uc5ec\uc8fc\uba74 \ub418\uae30 \ub54c\ubb38\uc5d0 \uc0c1\ub300\uc801\uc73c\ub85c Scale Out\uc774 \uac04\ub2e8\ud568"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"\ub370\uc774\ud130 \uc2a4\uce94 \ubc94\uc704 \ucd95\uc18c"}),"\n",(0,s.jsxs)(e.li,{children:["\uc0e4\ub4dc \ub2e8\uc704 \uc7a5\uc560","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\ub2e8\uc77c \uc7a5\uc560 \uc9c0\uc810(SPOF, Single Point Of Failure)\uac00 \uc544\ub2c8\ub77c\uc11c \uc804\uba74 \uc7a5\uc560\ub85c \uc774\uc5b4\uc9c0\uc9c0 \uc54a\uc74c"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"cons",children:"Cons"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\ud504\ub85c\uadf8\ub798\ubc0d \ubcf5\uc7a1\ub3c4 \uc99d\uac00"}),"\n",(0,s.jsxs)(e.li,{children:["Hot Spot(\ub370\uc774\ud130\uc758 \ud2b9\uc815 \uc0e4\ub4dc \uc9d1\uc911) \ubc1c\uc0dd \uc2dc \ub2e8\uc77c DB \uad6c\uc131\uacfc \ub2e4\ub97c \uac8c \uc5c6\uc5b4\uc9d0","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\uc544\ub798 Range Sharding\uc5d0\uc11c \uc608\uc2dc \uc124\uba85"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"\uc5ec\ub7ec \uc0e4\ub4dc\uc5d0 \uac78\uce5c \ub370\uc774\ud130 \uc870\uc778\uc774 \uc5b4\ub824\uc6c0"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"types",children:"Types"}),"\n",(0,s.jsx)(e.h3,{id:"hash-sharding",children:"Hash Sharding"}),"\n",(0,s.jsx)(e.h3,{id:"modular-sharding",children:"Modular Sharding"}),"\n",(0,s.jsx)(e.p,{children:"PK\ub97c \ubaa8\ub4c8\ub7ec \uc5f0\uc0b0(\ub098\uba38\uc9c0 \uc5f0\uc0b0) \uacb0\uacfc\ub97c \uc0e4\ub529 \ud0a4\ub85c \uc0ac\uc6a9\ud558\uc5ec \ub77c\uc6b0\ud305\n\ub2e4\ub9cc \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uac1c\uc218\uc5d0 \ubcc0\ud654\uac00 \uc788\uc73c\uba74 \ud574\uc2dc \ud568\uc218 \ubcc0\uacbd \ubc0f \uc0e4\ub529 \ud0a4 \ubcc0\ub3d9\uc73c\ub85c \uc778\ud574 \ub370\uc774\ud130 \uc7ac\uc815\ub82c\uc774 \ud544\uc694\ud55c \uac83\uc740 \ube44\uc6a9\uce21\uba74\uc758 \uc190\ud574"}),"\n",(0,s.jsx)(e.h3,{id:"range-sharding",children:"Range Sharding"}),"\n",(0,s.jsx)(e.p,{children:"\ud30c\ud2f0\uc154\ub2dd\uacfc \ub3d9\uc77c\ud558\uac8c \ud2b9\uc815 \ubc94\uc704\ub85c \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub97c \uc0e4\ub529\ud558\ub294 \ubc29\ubc95\n\uc801\uc808\ud55c Range \uae30\uc900\uc744 \uc124\uc815\ud558\ub294 \uac83\uc774 \uc911\uc694\ud558\ub2e4."}),"\n",(0,s.jsx)(e.p,{children:"\ub2e8\uc21c\ud55c \uc608\uc2dc\ub85c \uc5f0\ub3c4 \uae30\uc900\uc73c\ub85c \uc720\uc800 \ud14c\uc774\ube14\uc5d0 \uc0e4\ub529\uc744 \uc124\uc815\ud588\ub2e4\uace0 \uac00\uc815\ud558\uc790. 2020~2024\ub144\uae4c\uc9c0\ub294 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ud765\ud589\ud558\uc9c0 \ubabb\ud574 \uc6d4 100\uba85 \uc815\ub3c4\uc758 \uc720\uc800 \ub370\uc774\ud130\ub9cc \uc720\uc785\ub418\uc5c8\ub2e4. \uc774\ud6c4 2025\ub144\uc5d0 \uc571\uc758 \uac11\uc791\uc2a4\ub7f0 \ud765\ud589\uc73c\ub85c \uba87 \ubc31\ubc30\uc758 \uc720\uc800\uac00 \uc720\uc785\ub418\uc5c8\ub2e4\uba74 \ud604\uc7ac \uad6c\uc870\uc758 \uc0e4\ub529\uc5d0\uc11c 2025\ub144\uc5d0 \ud574\ub2f9\ud558\ub294 \uc0e4\ub4dc\uc5d0\ub9cc \ub370\uc774\ud130\uac00 \uc9d1\uc911, Hot Spot\uc774 \ubc1c\uc0dd\ud560 \uac83\uc774\ub2e4. \uc774\ub54c\ub294 \uc0c8\ub85c\uc6b4 \uae30\uc900\uc744 \uc124\uc815\ud558\uc5ec \uc7ac-\uc0e4\ub529(re-sharding)\ud574\uc57c \ud55c\ub2e4."}),"\n",(0,s.jsx)(e.h3,{id:"directory-sharding",children:"Directory Sharding"}),"\n",(0,s.jsx)(e.p,{children:"\ubcc4\ub3c4 \uc870\ud68c \ud14c\uc774\ube14\uc744 \uad6c\uc131\ud558\uc5ec \ub77c\uc6b0\ud305\ud558\ub294 \ubc29\uc2dd\n\uc704\uc640 \uac19\uc774 \ub2e8\uc21c\ud55c \ubc29\uc2dd\uc774 \uc544\ub2cc \uc9c1\uc811 \uc54c\uace0\ub9ac\uc998 \uc801\uc6a9 \ubc0f \uc2dc\uc2a4\ud15c\uc744 \ubcc4\uac1c\ub85c \uc801\uc6a9\ud560 \uc218 \uc788\ub2e4.\n\ubaa8\ub4e0 DB \uc870\ud68c \uc804 \uc870\ud68c \ud14c\uc774\ube14\uc744 \ucc38\uc870\ud574\uc57c \ud558\ubbc0\ub85c \uc624\ubc84\ud5e4\ub4dc\uac00 \ubc1c\uc0dd\ud55c\ub2e4.\n\uc0e4\ub4dc\ub97c \ub3d9\uc801\uc73c\ub85c \ucd94\uac00\ud558\ub294 \uac83\uc774 \uc0c1\ub300\uc801\uc73c\ub85c \uc27d\ub2e4."}),"\n",(0,s.jsx)(e.h2,{id:"refrences",children:"Refrences"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://velog.io/@kyeun95/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4-%EC%83%A4%EB%94%A9Sharding%EC%9D%B4%EB%9E%80",children:"https://velog.io/@kyeun95/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4-%EC%83%A4%EB%94%A9Sharding%EC%9D%B4%EB%9E%80"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://hudi.blog/db-partitioning-and-sharding/",children:"https://hudi.blog/db-partitioning-and-sharding/"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://jaehoney.tistory.com/245",children:"https://jaehoney.tistory.com/245"})}),"\n"]})]})}function o(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>d,x:()=>h});var r=i(6540);const s={},l=r.createContext(s);function d(n){const e=r.useContext(l);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function h(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:d(n.components),r.createElement(l.Provider,{value:e},n.children)}}}]);