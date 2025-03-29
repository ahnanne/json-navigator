(this["webpackJsonpjson-navigator"]=this["webpackJsonpjson-navigator"]||[]).push([[0],{39:function(e,t,o){"use strict";o.r(t);var n=o(0),i=o.n(n),r=o(18),c=o.n(r),l=o(13),a=o(3),s=o(2);var d=s.a`
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
`;var p=o(22),b=o(1);var f=()=>{console.log("Snowfall.tsx=============");const e=Object(n.useRef)(null),[t,o]=Object(n.useState)(null),i=Object(n.useCallback)(Object(p.debounce)((()=>{if(e.current){const t=document.documentElement.clientWidth,o=document.documentElement.clientHeight;e.current.width=t,e.current.height=o}}),200),[e]);return Object(n.useEffect)((()=>{(async function(){console.log("loadWasm \ud638\ucd9c");try{const e=await fetch("/wasm/snowflakes.wasm"),t=await e.arrayBuffer(),{instance:o}=await WebAssembly.instantiate(t,{});return o.exports}catch(e){return console.error("Failed to load WASM: ",e),null}})().then((e=>{e&&o(e)}))}),[]),Object(n.useEffect)((()=>{if(!t)return;const o=e.current;if(o){const e=o.getContext("2d"),n=document.documentElement.clientWidth,i=document.documentElement.clientHeight;o.width=n,o.height=i,t.init_snowflakes(n,i);const r=new Float32Array(t.memory.buffer,t.get_snowflakes(),1800),c=()=>{if(t.update_snowflakes(o.width,o.height),e){e.clearRect(0,0,o.width,o.height),e.fillStyle="rgba(0, 0, 0, 0.1)";for(let t=0;t<r.length;t+=6){const o=e.createRadialGradient(r[t],r[t+1],0,r[t],r[t+1],r[t+5]);o.addColorStop(0,`rgba(255, 255, 255, ${r[t+4]})`),o.addColorStop(0,`rgba(210, 236, 242, ${r[t+4]})`),o.addColorStop(0,`rgba(237, 247, 249, ${r[t+4]})`),e.fillStyle=o,e.beginPath(),e.arc(r[t],r[t+1],r[t+5],0,2*Math.PI),e.fill(),e.shadowOffsetX=0,e.shadowOffsetY=0,e.shadowColor="#fafafa60",e.shadowBlur=7}}requestAnimationFrame(c)};c()}}),[t]),Object(n.useEffect)((()=>(window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)})),[]),Object(b.jsx)("canvas",{ref:e,style:{position:"fixed",top:0,right:0,bottom:0,left:0,width:"100vw",height:"100vh",pointerEvents:"none"}})};var x=e=>{let{children:t}=e;return console.log("===============Layout"),Object(b.jsxs)(h,{children:[t,Object(b.jsx)(f,{})]})};const u=s.c.h1`
  font-size: 48px;
  font-weight: 700;
`;var j=e=>{let{m:t,children:o}=e;return Object(b.jsx)(u,{style:{margin:t},children:o})};s.b`
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
`;var F=e=>Object(b.jsxs)(v,{children:[Object(b.jsx)($,{children:Object(b.jsx)("p",{children:e.fileName||"\ud30c\uc77c\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694.."})}),Object(b.jsxs)(y,{children:[Object(b.jsx)(k,{htmlFor:"file-uploader",children:"JSON \ud30c\uc77c \uc5c5\ub85c\ub4dc"}),Object(b.jsx)(S,{type:"file",accept:".json",id:"file-uploader",onChange:t=>{(t=>{const o=t.target.files;o&&o[0]?e.setFileName(o[0].name):e.setFileName("")})(t),(t=>{const o=new FileReader,n=t.target.files;n&&n[0]&&(o.readAsText(n[0],"UTF-8"),o.onload=t=>{var o;return e.setFileData(JSON.parse((null===(o=t.target)||void 0===o?void 0:o.result)||""))})})(t)}})]})]});const E=s.c.div`
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
`;var D=e=>{const[t,o]=Object(n.useState)("");return Object(b.jsxs)(E,{children:[Object(b.jsx)(C,{htmlFor:"search-input",children:"\uac80\uc0c9"}),Object(b.jsx)(N,{id:"search-input",value:t,onChange:e=>{o(e.target.value)},onKeyDown:o=>{"Enter"===o.key&&e.setKeyword(t)}}),Object(b.jsx)(z,{disabled:""===t,onClick:()=>e.setKeyword(t),children:"property \uac80\uc0c9"}),Object(b.jsx)(z,{disabled:""===e.keyword,onClick:()=>{e.setKeyword(""),o("")},children:"\uac80\uc0c9\uc5b4 \ucd08\uae30\ud654"})]})};const H=e=>{let{fileData:t,depth:o,obj:n,spl:i,prop:r}=e;n[i[o]]=i.length>o+1?n[i[o]]?Object.assign(n[i[o]],{}):{}:t[r],i[o+1]&&H({fileData:t,depth:o+1,obj:n[i[o]],spl:i,prop:r})};var A=H;const K=s.c.div`
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
`,W=s.c.button`
  ${O}
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  padding-left: 8px;
  text-align: left;
`,J=s.c.div`
  width: 100%;
  margin-bottom: 10px;
  padding-left: ${e=>{let{indent:t}=e;return t}};
`,P=s.c.em`
  display: inline-block;
  font-style: normal;
  font-size: 14px;
  transform: ${e=>{let{showNestedObject:t}=e;return t?"rotate(90deg)":""}};
  transform-origin: 50%;
  transition: all 100ms linear;
  margin-right: 7px;
`,T="20px",B=e=>{let{prop:t,value:o,id:i,depth:r,selected:c,setSelected:l,keyword:a}=e;const[s,d]=Object(n.useState)(!1),h=c&&(c.includes(i+".")||c===i),p=!!a.length;return Object(n.useEffect)((()=>{h||d(!1)}),[c]),Object(b.jsxs)(K,{children:[Object(b.jsxs)(W,{onClick:()=>{d(!s),l(i)},children:[Object(b.jsx)(P,{"aria-hidden":!0,showNestedObject:s,children:"\u25b6"}),Object(b.jsx)(R,{isHighlighted:p&&t.includes(a),children:t})]}),s&&h&&Object(b.jsx)(b.Fragment,{children:"string"===typeof o?Object(b.jsx)(J,{indent:T,children:Object(b.jsx)(R,{isSmall:!0,isHighlighted:p&&o.includes(a),children:o})}):Object(b.jsx)(K,{indent:T,children:Object.keys(o).map((e=>Object(b.jsx)(B,{prop:e,value:o[e],id:i+"."+e,depth:r+1,selected:c,setSelected:l,keyword:a},i+"."+e)))})})]})};var G=B;const L=s.c.div`
  width: 600px;
  margin-top: 40px;
  padding: 20px 20px 10px;
  border-radius: 10px;
  border: 1px solid #ffffff60;
`;var M=e=>{let{dataTree:t,selected:o,setSelected:n,keyword:i}=e;return Object(b.jsx)(L,{children:Object.keys(t).map((e=>Object(b.jsx)(G,{prop:e,value:t[e],id:e,depth:0,selected:o,setSelected:n,keyword:i},e)))})};var _=()=>{const[e,t]=Object(n.useState)(""),[o,i]=Object(n.useState)(null),[r,c]=Object(n.useState)(null),[l,a]=Object(n.useState)(null),[s,d]=Object(n.useState)("");return console.log("HomeContainer============="),Object(n.useEffect)((()=>{if(o){const e={},t=!!s.length;for(const n in o){if(t&&!n.includes(s))continue;const i=n.split(".");A({fileData:o,depth:0,obj:e,spl:i,prop:n})}c(e)}}),[o,s]),Object(b.jsxs)(x,{children:[Object(b.jsx)(j,{m:"0 0 50px",children:"json-navigator\ud83e\udded"}),Object(b.jsx)(F,{fileName:e,setFileName:t,setFileData:i}),r&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(D,{keyword:s,setKeyword:d}),Object(b.jsx)(M,{dataTree:r,selected:l,setSelected:a,keyword:s})]})]})};var I=()=>(console.log("HomePage"),Object(b.jsx)(_,{}));var q=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d,{}),Object(b.jsx)(a.c,{children:Object(b.jsx)(a.a,{path:"/",component:I,exact:!0})})]})};c.a.render(Object(b.jsx)(l.a,{children:Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(q,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.3b6b23b6.chunk.js.map