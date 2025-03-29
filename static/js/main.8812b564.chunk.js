(this["webpackJsonpjson-navigator"]=this["webpackJsonpjson-navigator"]||[]).push([[0],{39:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),r=n(18),c=n.n(r),a=n(13),l=n(3),s=n(2);var d=s.a`
html, body {
  background-color: #1a1a1a;
  color: #fafafa;
  margin: 0;
  padding: 0;
  font-family: 'Source Code Pro', "Noto Sans KR", sans-serif, 돋움, Dotum, 굴림, Gulim, "Apple SD Gothic Neo";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  min-width: 360px;
  overflow-x: hidden;
}

::selection {
  background-color: #999ccc;
}

html, body, #root {
  height: 100%;
}

* {
  box-sizing: inherit;
}

input, button, textarea {
  font-family: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

p {
  margin: 0;
}
`;const h=s.c.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100vw - 240px);
  min-width: 700px;
  margin: 60px auto;
`;var p=n(22),b=n(1);var f=()=>{const e=Object(i.useRef)(null),[t,n]=Object(i.useState)(null),o=Object(i.useCallback)(Object(p.debounce)((()=>{if(e.current){const t=document.documentElement.clientWidth,n=document.documentElement.clientHeight;e.current.width=t,e.current.height=n}}),200),[e]);return Object(i.useEffect)((()=>{(async function(){try{const e=await fetch("/json-navigator/wasm/snowflakes.wasm"),t=await e.arrayBuffer(),{instance:n}=await WebAssembly.instantiate(t,{});return n.exports}catch(e){return console.error("Failed to load WASM: ",e),null}})().then((e=>{e&&n(e)}))}),[]),Object(i.useEffect)((()=>{if(!t)return;const n=e.current;if(n){const e=n.getContext("2d"),i=document.documentElement.clientWidth,o=document.documentElement.clientHeight;n.width=i,n.height=o,t.init_snowflakes(i,o);const r=new Float32Array(t.memory.buffer,t.get_snowflakes(),1800),c=()=>{if(t.update_snowflakes(n.width,n.height),e){e.clearRect(0,0,n.width,n.height),e.fillStyle="rgba(0, 0, 0, 0.1)";for(let t=0;t<r.length;t+=6){const n=e.createRadialGradient(r[t],r[t+1],0,r[t],r[t+1],r[t+5]);n.addColorStop(0,`rgba(255, 255, 255, ${r[t+4]})`),n.addColorStop(0,`rgba(210, 236, 242, ${r[t+4]})`),n.addColorStop(0,`rgba(237, 247, 249, ${r[t+4]})`),e.fillStyle=n,e.beginPath(),e.arc(r[t],r[t+1],r[t+5],0,2*Math.PI),e.fill(),e.shadowOffsetX=0,e.shadowOffsetY=0,e.shadowColor="#fafafa60",e.shadowBlur=7}}requestAnimationFrame(c)};c()}}),[t]),Object(i.useEffect)((()=>(window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)})),[]),Object(b.jsx)("canvas",{ref:e,style:{position:"fixed",top:0,right:0,bottom:0,left:0,width:"100vw",height:"100vh",pointerEvents:"none"}})};var j=e=>{let{children:t}=e;return Object(b.jsxs)(h,{children:[t,Object(b.jsx)(f,{})]})};const x=s.c.h1`
  font-size: 48px;
  font-weight: 700;
`;var u=e=>{let{m:t,children:n}=e;return Object(b.jsx)(x,{style:{margin:t},children:n})};s.b`
  display: flex;
  flex-flow: row nowrap;
`;const g=s.b`
  overflow: hidden;
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: polygon(0 0, 0 0, 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  white-space: nowrap;
`,w=s.b`
  background-color: transparent;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: pointer;
`,m=s.b`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,O=s.b`
  ${w}
  border-radius: 5px;
  color: #fafafa;
  background-color: #999ccc90;
  transition: background-color 100ms linear;

  &:hover {
    background-color: #999ccc;
  }
`,v=s.c.div`
  display: flex;
  flex-flow: row nowrap;
`,y=s.c.div``,k=s.c.label`
  cursor: pointer;
  display: inline-block;
  padding: 0 20px;
  vertical-align: middle;
  background-color: #999ccc90;
  height: ${40}px;
  line-height: ${40}px;
  border-radius: 5px;
  transition: background-color 100ms linear;

  &:hover {
    background-color: #999ccc;
  }
`,S=s.c.input`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`,$=s.c.div`
  height: ${40}px;
  border-bottom: 1px solid #ffffff60;
  width: 400px;
  margin-right: 20px;

  > p {
    ${m}
    width: 100%;
    font-size: 14px;
    line-height: ${40}px;
    color: #ffffff;
  }
`;var F=e=>Object(b.jsxs)(v,{children:[Object(b.jsx)($,{children:Object(b.jsx)("p",{children:e.fileName||"\ud30c\uc77c\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694.."})}),Object(b.jsxs)(y,{children:[Object(b.jsx)(k,{htmlFor:"file-uploader",children:"JSON \ud30c\uc77c \uc5c5\ub85c\ub4dc"}),Object(b.jsx)(S,{type:"file",accept:".json",id:"file-uploader",onChange:t=>{(t=>{const n=t.target.files;n&&n[0]?e.setFileName(n[0].name):e.setFileName("")})(t),(t=>{const n=new FileReader,i=t.target.files;i&&i[0]&&(n.readAsText(i[0],"UTF-8"),n.onload=t=>{var n;return e.setFileData(JSON.parse((null===(n=t.target)||void 0===n?void 0:n.result)||""))})})(t)}})]})]});const E=s.c.div`
  flex-flow: row nowrap;
  display: flex;
  width: 600px;
  margin-top: 40px;
`,C=s.c.label`
  ${g}
`,N=s.c.input`
  width: 400px;
  height: 40px;
  border-radius: 5px;
  border: 0;
`,z=s.c.button`
  ${O}
  width: 90px;
  height: 40px;
  padding: 0 10px;
  margin-left: 10px;
  word-break: keep-all;

  &:disabled {
    cursor: not-allowed;
    background-color: #999;
    &:hover {
      background-color: #999;
    }
  }
`;var D=e=>{const[t,n]=Object(i.useState)("");return Object(b.jsxs)(E,{children:[Object(b.jsx)(C,{htmlFor:"search-input",children:"\uac80\uc0c9"}),Object(b.jsx)(N,{id:"search-input",value:t,onChange:e=>{n(e.target.value)},onKeyDown:n=>{"Enter"===n.key&&e.setKeyword(t)}}),Object(b.jsx)(z,{disabled:""===t,onClick:()=>e.setKeyword(t),children:"property \uac80\uc0c9"}),Object(b.jsx)(z,{disabled:""===e.keyword,onClick:()=>{e.setKeyword(""),n("")},children:"\uac80\uc0c9\uc5b4 \ucd08\uae30\ud654"})]})};const A=e=>{let{fileData:t,depth:n,obj:i,spl:o,prop:r}=e;i[o[n]]=o.length>n+1?i[o[n]]?Object.assign(i[o[n]],{}):{}:t[r],o[n+1]&&A({fileData:t,depth:n+1,obj:i[o[n]],spl:o,prop:r})};var K=A;const H=s.c.div`
  padding-left: ${e=>{let{indent:t}=e;return t}};
  width: 100%;
`,R=s.c.span`
  display: inline-block;

  line-height: 30px;
  font-size: 16px;

  ${e=>e.isSmall&&s.b`
      line-height: 14px;
      font-size: 14px;
    `}

  ${e=>e.isHighlighted&&s.b`
      color: #61e584;
      font-weight: 700;
    `}
`,J=s.c.button`
  ${O}
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  padding-left: 8px;
  text-align: left;
`,T=s.c.div`
  width: 100%;
  margin-bottom: 10px;
  padding-left: ${e=>{let{indent:t}=e;return t}};
`,W=s.c.em`
  display: inline-block;
  font-style: normal;
  font-size: 14px;
  transform: ${e=>{let{showNestedObject:t}=e;return t?"rotate(90deg)":""}};
  transform-origin: 50%;
  transition: all 100ms linear;
  margin-right: 7px;
`,B="20px",G=e=>{let{prop:t,value:n,id:o,depth:r,selected:c,setSelected:a,keyword:l}=e;const[s,d]=Object(i.useState)(!1),h=c&&(c.includes(o+".")||c===o),p=!!l.length;return Object(i.useEffect)((()=>{h||d(!1)}),[c]),Object(b.jsxs)(H,{children:[Object(b.jsxs)(J,{onClick:()=>{d(!s),a(o)},children:[Object(b.jsx)(W,{"aria-hidden":!0,showNestedObject:s,children:"\u25b6"}),Object(b.jsx)(R,{isHighlighted:p&&t.includes(l),children:t})]}),s&&h&&Object(b.jsx)(b.Fragment,{children:"string"===typeof n?Object(b.jsx)(T,{indent:B,children:Object(b.jsx)(R,{isSmall:!0,isHighlighted:p&&n.includes(l),children:n})}):Object(b.jsx)(H,{indent:B,children:Object.keys(n).map((e=>Object(b.jsx)(G,{prop:e,value:n[e],id:o+"."+e,depth:r+1,selected:c,setSelected:a,keyword:l},o+"."+e)))})})]})};var M=G;const P=s.c.div`
  width: 600px;
  margin-top: 40px;
  padding: 20px 20px 10px;
  border-radius: 10px;
  border: 1px solid #ffffff60;
`;var _=e=>{let{dataTree:t,selected:n,setSelected:i,keyword:o}=e;return Object(b.jsx)(P,{children:Object.keys(t).map((e=>Object(b.jsx)(M,{prop:e,value:t[e],id:e,depth:0,selected:n,setSelected:i,keyword:o},e)))})};var I=()=>{const[e,t]=Object(i.useState)(""),[n,o]=Object(i.useState)(null),[r,c]=Object(i.useState)(null),[a,l]=Object(i.useState)(null),[s,d]=Object(i.useState)("");return Object(i.useEffect)((()=>{if(n){const e={},t=!!s.length;for(const i in n){if(t&&!i.includes(s))continue;const o=i.split(".");K({fileData:n,depth:0,obj:e,spl:o,prop:i})}c(e)}}),[n,s]),Object(b.jsxs)(j,{children:[Object(b.jsx)(u,{m:"0 0 50px",children:"json-navigator\ud83e\udded"}),Object(b.jsx)(F,{fileName:e,setFileName:t,setFileData:o}),r&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(D,{keyword:s,setKeyword:d}),Object(b.jsx)(_,{dataTree:r,selected:a,setSelected:l,keyword:s})]})]})};var L=()=>Object(b.jsx)(I,{});var q=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d,{}),Object(b.jsx)(l.c,{children:Object(b.jsx)(l.a,{path:"/",component:L,exact:!0})})]})};c.a.render(Object(b.jsx)(a.a,{basename:"/json-navigator",children:Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(q,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.8812b564.chunk.js.map