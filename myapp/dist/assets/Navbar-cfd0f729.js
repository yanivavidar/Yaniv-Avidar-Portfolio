import{b as v,r as s,j as e}from"./index-481c70e4.js";import{G as p}from"./iconBase-a906f379.js";import{F as w,a as b}from"./index.esm-dd27d0e2.js";function g(a){return p({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"}}]})(a)}function j(a){return p({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]})(a)}const u=[{name:"home",path:"#home",icon:e.jsx(g,{})},{name:"about",path:"#about",icon:e.jsx(w,{})},{name:"projects",path:"#projects",icon:e.jsx(b,{})},{name:"contact",path:"#contact",icon:e.jsx(j,{})}],E=()=>{const[a,l]=s.useState(window.location.hash),n=s.useRef(!1);return s.useEffect(()=>{let r;const o=()=>{l(window.location.hash)},c=()=>{clearTimeout(r),r=setTimeout(()=>{n.current=!1},100)},i=()=>{n.current=!0},h=[];u.forEach(t=>{const x=document.querySelector(t.path);if(x){const m=new IntersectionObserver(([f])=>{f.isIntersecting&&!n.current&&(l(t.path),window.location.hash=t.path)},{threshold:.5});m.observe(x),h.push(m)}}),window.addEventListener("hashchange",o),window.addEventListener("scroll",c);const d=document.querySelectorAll("nav a");return d.forEach(t=>t.addEventListener("click",i)),()=>{h.forEach(t=>t.disconnect()),window.removeEventListener("hashchange",o),window.removeEventListener("scroll",c),d.forEach(t=>t.removeEventListener("click",i))}},[]),e.jsx("nav",{className:"flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-30 top-0  w-full xl:w-16 xl:max-w-md xl:h-screen",children:e.jsx("div",{className:"flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full",children:u.map((r,o)=>e.jsxs("a",{href:r.path,className:`${r.path===a?"text-accent":""} relative flex items-center group hover:text-accent transition-all duration-300`,children:[e.jsx("div",{className:"absolute pr-14 right-0 hidden xl:group-hover:flex",children:e.jsxs("div",{className:"bg-white relative flex text-primary items-center p-[6px] rounded-[3px]",children:[e.jsx("div",{className:"text-[12px] leading-none font-semibold capitalize",children:r.name}),e.jsx("div",{className:"border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"})]})}),e.jsx("div",{children:r.icon})]},o))})})},H=v.memo(E);export{H as default};
