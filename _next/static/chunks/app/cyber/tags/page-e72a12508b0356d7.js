(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[40],{8895:(e,s,r)=>{Promise.resolve().then(r.bind(r,1316))},1316:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>o});var t=r(5155),l=r(50),a=r(2115),i=r(3108);let c=e=>{let{onTest:s}=e;var l=r(4875).files,a=r(9123).files,i=[],c=[];let n=e=>{let r=e.target.innerText.slice(0,-1).trim();s&&s(r)};l.forEach(e=>{var s=r(4786)("./"+e).tags;i=i.concat(s)});var i=Array.from(new Set(i));a.forEach(e=>{var s=r(4786)("./"+e).tags;c=c.concat(s)});var h=Array.from(new Set(c.concat(i)));return h.sort((e,s)=>e.toLowerCase().localeCompare(s.toLowerCase())),(0,t.jsx)("div",{className:"allfilter",children:(0,t.jsxs)("div",{className:"allfilterchild",children:[(0,t.jsx)("h2",{children:"Add Filter Tags"}),(0,t.jsx)("div",{className:"tags",children:h.map(e=>(0,t.jsx)("button",{onClick:n,children:(0,t.jsxs)("my-tag",{children:[e,(0,t.jsx)("sup",{children:"+"})]})},e))})]})})};var n=r(6658);let h=()=>{var e=(0,n.useSearchParams)(),s=r(4875).files,h=r(9123).files,o=[],d=[];if(e.size)var[x,j]=(0,a.useState)([e.get("searchTag")]);else var[x,j]=(0,a.useState)([]);let[m,p]=(0,a.useState)(!0),[f,g]=(0,a.useState)(!0),u=e=>{var s=e.target.innerText.slice(0,-1).trim();x=x.filter(e=>e!==s),j([...x])};return s.forEach(e=>{var s=r(4786)("./"+e),t=1;x.forEach(e=>{s.tags.includes(e)||(t=0)}),t&&o.push(s)}),h.forEach(e=>{var s=r(4786)("./"+e),t=1;x.forEach(e=>{s.tags.includes(e)||(t=0)}),t&&d.push(s)}),(0,a.useEffect)(()=>{window.scrollTo(0,0)},[]),(0,t.jsxs)("div",{className:"Wrapper",children:[(0,t.jsx)(i.default,{}),(0,t.jsxs)("div",{className:"content",children:[(0,t.jsxs)("div",{className:"Post",style:{},children:[(0,t.jsxs)("h2",{children:[(0,t.jsx)("span",{style:{color:"#da1953"},children:"Ind"}),"ex"]}),(0,t.jsx)("br",{}),(0,t.jsxs)("div",{className:"tagfilteroption",children:[(0,t.jsxs)("p",{children:[(0,t.jsx)("input",{type:"checkbox",name:"Show Blog Posts",checked:m,onChange:()=>p(!m)}),(0,t.jsx)("label",{children:" Show Blog Posts "}),"\xa0",(0,t.jsx)("input",{type:"checkbox",name:"Show Writeups",checked:f,onChange:()=>g(!f)}),(0,t.jsx)("label",{children:" Show Writeups"})]}),(0,t.jsxs)("p",{style:{fontSize:"14px",color:"#979797"},children:[" ",(0,t.jsx)("i",{children:"Click a filter to remove it."}),(0,t.jsx)("br",{}),"Searching for tag(s): "]}),x.map(e=>(0,t.jsx)("button",{onClick:u,children:(0,t.jsxs)("my-tag",{children:[e,(0,t.jsx)("sup",{children:"x"})]})},e))]}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),m&&(0,t.jsx)(l.A,{lst:o}),f&&(0,t.jsx)(l.A,{lst:d})]}),(0,t.jsx)(c,{onTest:e=>{!x.includes(e)&&e&&x.push(e),j([...x])}})]})]})},o=()=>(0,t.jsx)(a.Suspense,{children:(0,t.jsx)(h,{})})},50:(e,s,r)=>{"use strict";r.d(s,{A:()=>c});var t=r(5155),l=r(8173),a=r.n(l);let i=e=>{var s="",r=0;let l=e=>{if("string"==typeof e){s+=e+" ";return}e.body.forEach(e=>{"string"==typeof e?l(e):e.body.forEach(e=>{void 0!==e&&l(e)})})};l(e.postname);var r=void 0!==s.match(/<img\b[^>]*>/gi)&&null!==s.match(/<img\b[^>]*>/gi)?s.match(/<img\b[^>]*>/gi).length:0,a=s.split(" ").length;return(0,t.jsxs)("div",{className:"readingtime",children:["Reading: ",(0,t.jsxs)("i",{children:[parseInt((a+35*r)/180),"min ",Math.floor((a+35*r)/200%1*60),"sec "]})]})},c=e=>(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{style:{fontSize:"14px",color:"#979797"},children:[e.lst.length," elements"]}),e.lst.map((e,s)=>(0,t.jsxs)(a(),{href:"/cyber/"+e.type+"/"+e.path,children:[(0,t.jsxs)("div",{className:"my-single-menu",children:[(0,t.jsx)("img",{style:{border:"0px"},src:"/cyber/"+e.banner,alt:""}),(0,t.jsx)("div",{className:"indextitle",children:e.title}),(0,t.jsx)("post-date",{children:(0,t.jsx)(i,{postname:e})})]}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]},s))]})}},e=>{var s=s=>e(e.s=s);e.O(0,[120,173,541,441,517,358],()=>s(8895)),_N_E=e.O()}]);