(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[699],{9482:(e,t,o)=>{Promise.resolve().then(o.bind(o,5897)),Promise.resolve().then(o.bind(o,3108)),Promise.resolve().then(o.bind(o,8845))},2054:(e,t)=>{"use strict";Object.prototype.toString},5897:(e,t,o)=>{"use strict";o.d(t,{default:()=>s});var l=o(5155),r=o(6591),n=o(2115);o(8427),o(9145),o(4),o(8665),o(9411),o(4255),o(9870),o(3039),o(4580),o(4204),o(5541);let s=e=>{var{section:t}=(0,r.g)(),s=(0,n.useRef)({});let c=o(4786)("./".concat(e.postname)),a=(0,n.useRef)(null),[d,i]=(0,n.useState)(!1),h=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,l=document.querySelectorAll("img, video, audio"),r=0,n={},s=()=>{r===l.length&&(console.log("All media fully loaded."),e(),i(!0))},c=(e,l)=>{if(l>t){console.warn("Failed to load media after ".concat(t," attempts: ").concat(e.src)),s();return}setTimeout(()=>{console.log("Retrying to load: ".concat(e.src," (Attempt ").concat(l+1,")")),"IMG"===e.tagName?e.src=e.src:("VIDEO"===e.tagName||"AUDIO"===e.tagName)&&e.load(),e.addEventListener("load",()=>{r++,console.log("Successfully loaded on retry: ".concat(e.src)),s()}),e.addEventListener("error",()=>{c(e,l+1)})},o)};l.forEach(e=>{e.complete||4===e.readyState?r++:(e.addEventListener("load",()=>{r++,console.log("Loaded: ".concat(e.src)),s()}),e.addEventListener("error",()=>{n[e.src]=(n[e.src]||0)+1,c(e,n[e.src])}))}),0===l.length?(console.log("No media found on the page."),e()):s()},u=()=>{h(()=>{t&&s.current[t]?(console.log("Scrolling to section: ".concat(t)),s.current[t].scrollIntoView({behavior:"smooth"}),a.current=t,console.log(">>",a)):console.warn('Section "'.concat(t,'" not found.'))})};(0,n.useEffect)(()=>{u()},[t]);let g=e=>e&&Array.isArray(e.body)?e.body.map((t,o)=>"string"==typeof t?(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:t}},"".concat(e.id.replaceAll(" ","-"),"-").concat(o)):"object"==typeof t&&t.body?(0,l.jsxs)("div",{id:t.id.replaceAll(" ","-"),ref:e=>{e&&(s.current[t.id.replaceAll(" ","-")]=e)},children:[t.title&&(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:t.title}}),g(t)]},t.id.replaceAll(" ","-")||o):null):null;return(0,n.useEffect)(()=>{if(d){let e=window.location.hash;if(console.log(e),e){let t=e.substring(1),o=document.getElementById(t);o&&setTimeout(()=>{o.scrollIntoView({behavior:"smooth"})},100)}}},[d]),(0,n.useEffect)(()=>{window.scrollTo(0,0)},[]),(0,l.jsxs)("div",{children:[g(c)," "]})}},8845:(e,t,o)=>{"use strict";o.d(t,{default:()=>c});var l=o(5155),r=o(8173),n=o.n(r);let s=e=>{var t=o(4786)("./"+e.postname),r=t.body,s=t.path,c=t.type,a=[],d=window.innerWidth<=1280?1:2;r[0].body.length>10&&(d=1);let i=(e,t)=>{void 0===e.body&&e.forEach(e=>{void 0!==e.id&&t>0&&t<=d&&"banner"!==e.id&&a.push([e.id,t]),"object"==typeof e.body&&i(e.body,t+1)})};return i(r,0),(0,l.jsx)("div",{children:a.map((e,t)=>(0,l.jsxs)(n(),{id:s,style:{fontSize:16-(e[1]-1)*2+"px",marginLeft:(e[1]-1)*20+"px"},href:"/cyber/"+c+"/"+s+"#"+e[0].replaceAll(" ","-"),children:[e[0],(0,l.jsx)("br",{})]},t))})},c=e=>{e.mystyle;var t=s(e),r=o(4786)("./"+e.postname).tags.sort();return(0,l.jsx)("div",{className:"sidebarRight",children:(0,l.jsxs)("div",{className:"sidebarRightChild",children:[(0,l.jsx)("h2",{children:"Index"}),t,(0,l.jsx)("br",{}),(0,l.jsx)("h2",{children:"Tags"}),(0,l.jsx)("div",{className:"tags",children:r.map((e,t)=>(0,l.jsx)(n(),{href:{pathname:"/cyber/tags/",query:{searchTag:e}},style:{marginTop:10},children:(0,l.jsx)("my-tag",{children:e})},t))})]})})}}}]);