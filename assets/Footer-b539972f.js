import{c as s,r,j as e,A as i,m as t,M as p,C as g}from"./index-bc3a3d1e.js";import{M as y,P as u}from"./phone-845d9cc0.js";const b=s("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]),f=s("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]),k=s("PartyPopper",[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"bpx1uq"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17",key:"1pd0s7"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7",key:"zq5xbz"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]),j=s("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),w=s("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),v=[{icon:e.jsx(b,{className:"w-5 h-5"}),href:"https://facebook.com/oponghostel",label:"Facebook",ariaLabel:"Visit our Facebook page"},{icon:e.jsx(w,{className:"w-5 h-5"}),href:"https://twitter.com/oponghostel",label:"Twitter",ariaLabel:"Follow us on Twitter"},{icon:e.jsx(f,{className:"w-5 h-5"}),href:"https://instagram.com/oponghostel",label:"Instagram",ariaLabel:"Follow us on Instagram"}],S=()=>{const[l,o]=r.useState(""),[c,n]=r.useState(!1),[x,d]=r.useState(!1),h=a=>{a.preventDefault(),l&&(n(!0),d(!0),setTimeout(()=>d(!1),3e3),setTimeout(()=>{n(!1),o("")},5e3))};return e.jsxs("footer",{className:"w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-t border-gray-200/20 dark:border-white/10 relative overflow-hidden",children:[e.jsx(i,{children:x&&e.jsx(t.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"absolute inset-0 pointer-events-none",children:[...Array(50)].map((a,m)=>e.jsx(t.div,{initial:{opacity:1,scale:0,x:Math.random()*window.innerWidth,y:window.innerHeight},animate:{opacity:0,scale:1,x:Math.random()*window.innerWidth,y:-100,rotate:Math.random()*360},transition:{duration:2+Math.random()*2,ease:"easeOut",delay:Math.random()*.2},className:`absolute w-3 h-3 rounded-full ${["bg-purple-500","bg-blue-500","bg-pink-500","bg-indigo-500"][Math.floor(Math.random()*4)]}`},m))})}),e.jsxs("div",{className:"w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-16",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsx(t.div,{whileHover:{scale:1.1},className:"text-3xl font-bold text-gray-900 dark:text-white",children:"℘"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 leading-relaxed",children:"Creating premium living spaces for KNUST students to thrive, learn, and excel in their academic journey."}),e.jsx("div",{className:"flex space-x-4",children:v.map(a=>e.jsx(t.a,{whileHover:{scale:1.1},href:a.href,target:"_blank",rel:"noopener noreferrer",className:"bg-gray-100 dark:bg-white/5 p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-white/10 transition-colors","aria-label":a.ariaLabel,children:e.jsx("div",{className:"text-gray-600 dark:text-gray-400",children:a.icon})},a.label))})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-lg font-semibold mb-6 text-gray-900 dark:text-white",children:"Quick Links"}),e.jsx("ul",{className:"space-y-4",children:["About Us","Room Types","Amenities","Student Portal","Book a Room","Virtual Tour"].map(a=>e.jsx("li",{children:e.jsx("a",{href:"#",className:"text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors",children:a})},a))})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-lg font-semibold mb-6 text-gray-900 dark:text-white",children:"Contact"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3 text-gray-600 dark:text-gray-400",children:[e.jsx(y,{className:"w-5 h-5 text-purple-500 dark:text-purple-400"}),e.jsx("span",{children:"KNUST Campus, Kumasi, Ghana"})]}),e.jsxs("div",{className:"flex items-center gap-3 text-gray-600 dark:text-gray-400",children:[e.jsx(p,{className:"w-5 h-5 text-purple-500 dark:text-purple-400"}),e.jsx("a",{href:"mailto:info@oponghostel.com",className:"hover:text-gray-900 dark:hover:text-white transition-colors",children:"info@oponghostel.com"})]}),e.jsxs("div",{className:"flex items-center gap-3 text-gray-600 dark:text-gray-400",children:[e.jsx(u,{className:"w-5 h-5 text-purple-500 dark:text-purple-400"}),e.jsx("a",{href:"tel:+233123456789",className:"hover:text-gray-900 dark:hover:text-white transition-colors",children:"+233 123 456 789"})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-lg font-semibold mb-6 text-gray-900 dark:text-white",children:"Newsletter"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Stay updated with our latest offers and news"}),e.jsxs("form",{onSubmit:h,className:"relative",children:[e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("input",{type:"email",value:l,onChange:a=>o(a.target.value),placeholder:"Enter your email",className:"bg-gray-100 dark:bg-white/5 rounded-xl px-4 py-2 flex-grow focus:outline-none focus:ring-2 focus:ring-purple-500/20 dark:focus:ring-purple-500/30 text-gray-900 dark:text-white"}),e.jsx(i,{mode:"wait",children:c?e.jsxs(t.div,{initial:{scale:0},animate:{scale:1},exit:{scale:0},className:"bg-emerald-600 dark:bg-emerald-500 px-4 py-2 rounded-xl font-medium flex items-center space-x-2 text-white",children:[e.jsx(g,{className:"w-4 h-4"}),e.jsx("span",{children:"Subscribed!"}),e.jsx(k,{className:"w-4 h-4"})]},"success"):e.jsxs(t.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-100 flex items-center space-x-2 transition-colors",type:"submit",children:[e.jsx("span",{children:"Subscribe"}),e.jsx(j,{className:"w-4 h-4"})]},"subscribe")})]}),e.jsx(i,{children:c&&e.jsx(t.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"absolute left-0 right-0 mt-2 text-emerald-600 dark:text-emerald-400 text-sm flex items-center space-x-2",children:e.jsx("span",{children:"🎉 Welcome to the Opong Hostel family!"})})})]}),e.jsx("p",{className:"text-gray-500 dark:text-gray-500 text-sm mt-4",children:"By subscribing, you agree to our Privacy Policy and consent to receive updates."})]})]}),e.jsx("div",{className:"border-t border-gray-200/20 dark:border-white/10 mt-16 pt-8",children:e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center gap-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-2 sm:gap-4",children:[e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"© 2024 Opong Hostel. All rights reserved."}),e.jsx("span",{className:"hidden sm:inline text-gray-400 dark:text-gray-600",children:"•"}),e.jsxs("p",{className:"text-gray-400 dark:text-gray-500 text-xs font-light",children:["Made with ",e.jsx("span",{className:"text-red-400 dark:text-red-500",children:"♥"})," by Bright",e.jsx("span",{className:"text-gray-400/50 dark:text-gray-500/50 text-[10px] ml-1",children:"(placeholder)"})]})]}),e.jsx("div",{className:"flex space-x-6 mt-4 md:mt-0",children:["Privacy Policy","Terms of Service"].map(a=>e.jsx("a",{href:"#",className:"text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors",children:a},a))})]})})]})]})};export{S as default};
