(self.webpackChunksoham_manoli=self.webpackChunksoham_manoli||[]).push([[678],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,l){if(e===l)return!0;if(e&&l&&"object"==typeof e&&"object"==typeof l){if(e.constructor!==l.constructor)return!1;var i,s,c,m;if(Array.isArray(e)){if((i=e.length)!=l.length)return!1;for(s=i;0!=s--;)if(!o(e[s],l[s]))return!1;return!0}if(r&&e instanceof Map&&l instanceof Map){if(e.size!==l.size)return!1;for(m=e.entries();!(s=m.next()).done;)if(!l.has(s.value[0]))return!1;for(m=e.entries();!(s=m.next()).done;)if(!o(s.value[1],l.get(s.value[0])))return!1;return!0}if(n&&e instanceof Set&&l instanceof Set){if(e.size!==l.size)return!1;for(m=e.entries();!(s=m.next()).done;)if(!l.has(s.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(l)){if((i=e.length)!=l.length)return!1;for(s=i;0!=s--;)if(e[s]!==l[s])return!1;return!0}if(e.constructor===RegExp)return e.source===l.source&&e.flags===l.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===l.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===l.toString();if((i=(c=Object.keys(e)).length)!==Object.keys(l).length)return!1;for(s=i;0!=s--;)if(!Object.prototype.hasOwnProperty.call(l,c[s]))return!1;if(t&&e instanceof Element)return!1;for(s=i;0!=s--;)if(("_owner"!==c[s]&&"__v"!==c[s]&&"__o"!==c[s]||!e.$$typeof)&&!o(e[c[s]],l[c[s]]))return!1;return!0}return e!=e&&l!=l}e.exports=function(e,t){try{return o(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,a=r(7294),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,c=[];function m(){s=e(c.map((function(e){return e.props}))),d.canUseDOM?t(s):r&&(s=r(s))}var d=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,c=[],e};var l=a.prototype;return l.UNSAFE_componentWillMount=function(){c.push(this),m()},l.componentDidUpdate=function(){m()},l.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),m()},l.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return l(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),l(d,"canUseDOM",i),d}}},7545:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Ne}});var n,a,o,l,i=r(7294),s=r.p+"static/proffesional-c95c6537d23a51bfc1b863c74454c3fc.jpg",c=function(){return i.createElement("div",{className:"pt-20 px-4 dark:bg-gray-800",id:"about"},i.createElement("div",{className:"mx-auto max-w-6xl flex flex-col md:flex-row"},i.createElement("h2",{className:"mr-8 w-full md:w-1/3 text-3xl font-extrabold leading-9 dark:text-white"},"About Me   ",i.createElement("span",{"aria-label":"jsx-a11y/accessible-emoji",role:"img"},"🧑🏽"),i.createElement("div",{className:"w-1/3 h-1 rounded-full mt-5 bg-pink-500"}),i.createElement("img",{alt:"ERR",src:s,class:" w-auto mt-7 mb-3"}),i.createElement("div",{className:"flex flex-row mb-5 mt-2"},i.createElement("a",{href:"https://github.com/msoham123/",target:"_blank",rel:"noreferrer"},i.createElement("button",{type:"button",class:"py-2 px-4 mr-2 flex mt-5 justify-center items-center  bg-indigo-700  hover:bg-indigo-800  dark:bg-gray-600 dark:hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "},i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",class:"mr-2",viewBox:"0 0 1792 1792"},i.createElement("path",{d:"M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"})),"GitHub")),i.createElement("a",{href:"https://www.linkedin.com/in/soham-manoli-342b4719a/",target:"_blank",rel:"noreferrer"},i.createElement("button",{type:"button",class:"py-2 px-4 mt-5 ml-2 flex justify-center items-center bg-blue-700  hover:bg-blue-800  dark:bg-gray-600 dark:hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "},i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",class:"mr-2",viewBox:"0 0 64 64"},i.createElement("path",{d:"M1.15 21.7h13V61h-13zm46.55-1.3c-5.7 0-9.1 2.1-12.7 6.7v-5.4H22V61h13.1V39.7c0-4.5 2.3-8.9 7.5-8.9s8.3 4.4 8.3 8.8V61H64V38.7c0-15.5-10.5-18.3-16.3-18.3zM7.7 2.6C3.4 2.6 0 5.7 0 9.5s3.4 6.9 7.7 6.9 7.7-3.1 7.7-6.9S12 2.6 7.7 2.6z"})),"LinkedIn")))),i.createElement("dl",{className:"w-full md:w-2/3"},i.createElement("dt",{className:"mb-4"},i.createElement("h3",{className:"text-xl font-semibold dark:text-white"},"Personal Life")),i.createElement("dd",{className:"mb-16 dark:text-white"},i.createElement("p",null,"I am an enthusiastic and passionate High School Junior who loves loves to learn new things! I enjoy spending time with my friends and family. I have a black belt, play basketball casually, and love to go the gym. I also volunteer as a tutor and love to meet new people!")),i.createElement("dt",{className:"mb-4 dark:text-white"},i.createElement("h3",{className:"text-xl font-semibold"},"Professional Life")),i.createElement("dd",{className:"mb-16 dark:text-white"},i.createElement("p",null,"I specialize in computer programming, robotics, information technology, and computer hardware. I am a 5x Hackathon Winner, have experience developing Android, IOS, and Web Applications, and have experience with Agile Development. In addition, I have won awards from Future Business Leaders of America, a national organization that holds selective competitions, and Morgan State University.")),i.createElement("dt",{className:"mb-4 dark:text-white"},i.createElement("h3",{className:"text-xl font-semibold"},"Goal")),i.createElement("dd",{className:"mb-16 dark:text-white"},i.createElement("p",null,"My dream is to use my skills and resources available to create a product that will help people and change the world. Therefore, I am working hard towards learning as much as possible and initiating an impact on our world.")))))},m=function(){return i.createElement("div",{id:"contact",className:"flex items-center bg-white dark:bg-gray-800"},i.createElement("div",{className:"container mx-auto"},i.createElement("div",{className:"max-w-6xl mx-auto mb-10 p-5 rounded-md"},i.createElement("div",{className:"text-center"},i.createElement("h1",{className:"my-3 text-3xl font-extrabold leading-9 dark:text-white"},"Contact Me"),i.createElement("p",{className:"text-gray-400 dark:text-gray-400"},"Fill up the form below to send me a message or email me at ",i.createElement("a",{className:"text-pink-500",href:"mailto:msoham467@gmail.com?subject=Message"},"msoham467@gmail.com"),".")),i.createElement("div",{className:"m-7"},i.createElement("form",{action:"https://api.web3forms.com/submit",method:"POST",id:"form"},i.createElement("input",{type:"hidden",name:"apikey",value:"YOUR_ACCESS_KEY_HERE"}),i.createElement("input",{type:"hidden",name:"subject",value:"New Submission from Web3Forms"}),i.createElement("input",{type:"checkbox",name:"botcheck",id:"",style:{display:"none"}}),i.createElement("div",{className:"mb-6"},i.createElement("label",{for:"name",className:"block mb-2 text-sm text-gray-600 dark:text-gray-400"},"Full Name"),i.createElement("input",{type:"text",name:"name",id:"name",placeholder:"e.g John Doe",required:!0,className:"w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"})),i.createElement("div",{className:"mb-6"},i.createElement("label",{for:"email",className:"block mb-2 text-sm text-gray-600 dark:text-gray-400"},"Email Address"),i.createElement("input",{type:"email",name:"email",id:"email",placeholder:"e.g you@company.com",required:!0,className:"w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"})),i.createElement("div",{className:"mb-6"},i.createElement("label",{for:"phone",className:"text-sm text-gray-600 dark:text-gray-400"},"Phone Number"),i.createElement("input",{type:"text",name:"phone",id:"phone",placeholder:"e.g +1 (555) 1234-567",required:!0,className:"w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"})),i.createElement("div",{className:"mb-6"},i.createElement("label",{for:"message",className:"block mb-2 text-sm text-gray-600 dark:text-gray-400"},"Your Message"),i.createElement("textarea",{rows:"5",name:"message",id:"message",placeholder:"Your Message",className:"w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500",required:!0})),i.createElement("div",{className:"mb-6"},i.createElement("button",{type:"submit",className:"w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"},"Send Message")),i.createElement("p",{className:"text-base text-center text-gray-400",id:"result"}))))))},d=r.p+"static/IMG_6753-02db94849409724d934c05767d8ee51e.jpg",u=function(){return i.createElement("div",{class:"bg-white flex justify-center dark:bg-gray-800  relative z-20 items-center overflow-hidden min-h-3/4 ",id:"home"},i.createElement("div",{class:"container px-6 flex justify-center relative"},i.createElement("div",{class:"sm:w-2/3 lg:w-2/5 flex flex-col relative z-20"},i.createElement("img",{alt:"ERR",src:d,class:"rounded-full w-28 mx-auto mb-3"}),i.createElement("h1",{className:"dark:text-white mb-8 text-gray-800 font-black leading-none text-6xl sm:text-8xl uppercase text-center"},"Welcome to my website"),i.createElement("p",{class:"test-xm sm:text-xl text-gray-700 dark:text-white text-center"},"Student. Developer. Leader."),i.createElement("div",{class:"hidden sm:flex justify-around mt-8"},i.createElement("div",null),i.createElement("div",null),i.createElement("a",{href:"#about",class:"py-3.5 px-10 border-2 border-transparent text-white transition duration-200 rounded shadow-md md:w-auto  md:mb-0 bg-pink-500 hover:bg-indigo-700 focus:shadow-outline focus:outline-none"},"Learn More"),i.createElement("a",{href:"#contact",class:"py-3.5 px-10 border-2 border-pink-500 hover:text-white text-pink-500 transition duration-200 rounded shadow-md md:w-auto md:mb-0 bg-transparent hover:bg-pink-500 focus:shadow-outline focus:outline-none"},"Contact Me"),i.createElement("div",null),i.createElement("div",null)),i.createElement("div",{class:"flex flex-col sm:hidden justify-around mt-8"},i.createElement("a",{href:"#about",class:"py-3.5 px-5 mb-4 border-2 border-transparent text-white transition duration-200 rounded shadow-md md:w-auto  md:mb-0 bg-pink-500 hover:bg-indigo-700 focus:shadow-outline focus:outline-none"},"Learn More"),i.createElement("a",{href:"#about",class:"py-3.5 px-5 border-2 border-pink-500 hover:text-white text-pink-500 transition duration-200 rounded shadow-md md:w-auto md:mb-0 bg-transparent hover:bg-pink-500 focus:shadow-outline focus:outline-none"},"Contact Me")))))},f=function(){var e=(0,i.useState)(!1),t=e[0],r=e[1];return(0,i.useEffect)((function(){var e=function(){window.scrollY>130!==t&&r(!t)};return document.addEventListener("scroll",e,{passive:!0}),function(){document.removeEventListener("scroll",e)}}),[t]),i.createElement("header",{className:t?"fixed h-24 sm:h-32 flex items-center z-30 shadow-sm border-b-2 border-pink-500 w-full bg-white dark:bg-gray-800":"h-24 sm:h-32 flex items-center z-30 w-full dark:bg-gray-800"},i.createElement("div",{className:"container mx-auto px-6 flex items-center justify-between"},i.createElement("div",{className:"uppercase text-gray-800 dark:text-white font-black text-3xl"},i.createElement("a",{href:"#home"},i.createElement("span",{className:"text-pink-500"},"Soham"),".Manoli")),i.createElement("div",{className:"flex items-center"},i.createElement("nav",{className:"font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden"},i.createElement("a",{href:"#about",className:"py-2 px-6 flex"},"About Me   ",i.createElement("span",{"aria-label":"jsx-a11y/accessible-emoji",role:"img"},"🙎🏽‍♂️")),i.createElement("a",{href:"#projects",className:"py-2 px-6 flex"},"Projects   ",i.createElement("span",{"aria-label":"jsx-a11y/accessible-emoji",role:"img"},"⚡")),i.createElement("a",{href:"#skills",className:"py-2 px-6 flex"},"Skills   ",i.createElement("span",{"aria-label":"jsx-a11y/accessible-emoji",role:"img"},"⚔")),i.createElement("a",{href:"#contact",className:"py-2 px-6 flex"},"Contact Me   ",i.createElement("span",{"aria-label":"jsx-a11y/accessible-emoji",role:"img"},"💬"))),i.createElement("button",{className:"lg:hidden flex flex-col ml-4"},i.createElement("span",{className:"w-6 h-1 bg-gray-800 dark:bg-white mb-1"}),i.createElement("span",{className:"w-6 h-1 bg-gray-800 dark:bg-white mb-1"}),i.createElement("span",{className:"w-6 h-1 bg-gray-800 dark:bg-white mb-1"})))))},p=function(){return i.createElement("div",null,i.createElement("section",{className:"bg-white dark:bg-gray-800",id:"skills"},i.createElement("div",{className:"max-w-6xl mx-auto px-5 py-24 "},i.createElement("div",{className:"text-center mb-20"},i.createElement("h1",{className:" text-black dark:text-white title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl"},"Skills"),i.createElement("p",{className:"text-black dark:text-white text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"},"I'm extremely passionate about learning. As a result, I have accumulated a myriad of skills. Here is a list of some of my most well-developed skills!"),i.createElement("div",{className:"flex mt-6 justify-center"},i.createElement("div",{className:"w-16 h-1 rounded-full bg-pink-500 inline-flex"}))),i.createElement("div",{className:"flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 "},i.createElement("div",{className:"p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col "},i.createElement("div",{className:"pattern-dots-md gray-light"},i.createElement("div",{className:"rounded dark:bg-gray-800 z-10 shadow-lg border-gray-600 dark:border-gray-700 border-2 p-4 transform translate-x-6 -translate-y-6 "},i.createElement("div",{className:"w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2"},i.createElement("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"}))),i.createElement("div",{className:"flex-grow"},i.createElement("h2",{className:"text-black dark:text-white text-xl title-font font-medium mb-3"},"File Systems and OS"),i.createElement("p",{className:"text-black dark:text-white leading-relaxed text-sm text-justify"},"Extensive knowledge of Windows, Linux, and Mac OS. I can write scripts, install programs, and configure IT infrastructure. Additionally, I am also familiar with both the Android and IOS ecosystem."))))),i.createElement("div",{className:"p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col "},i.createElement("div",{className:"pattern-dots-md gray-light"},i.createElement("div",{className:"rounded dark:bg-gray-800 z-10 shadow-lg border-gray-600 dark:border-gray-700 border-2 p-4 transform translate-x-6 -translate-y-6 "},i.createElement("div",{className:"w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0"},i.createElement("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"}))),i.createElement("div",{className:"flex-grow"},i.createElement("h2",{className:"text-black dark:text-white text-xl title-font font-medium mb-3"},"App Development"),i.createElement("p",{className:"text-black dark:text-white leading-relaxed text-sm text-justify"},"Have spent hundreds of hours developing apps for Android, IOS, and Desktop. I can apply state management, configure native platforms for deployment, and build data classNamees for client-server interaction."))))),i.createElement("div",{className:"p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col "},i.createElement("div",{className:"pattern-dots-md gray-light"},i.createElement("div",{className:"rounded dark:bg-gray-800 z-10 shadow-lg border-gray-600 dark:border-gray-700 border-2 p-4 transform translate-x-6 -translate-y-6 "},i.createElement("div",{className:"w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0"},i.createElement("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"}))),i.createElement("div",{className:"flex-grow"},i.createElement("h2",{className:"text-black dark:text-white text-xl title-font font-medium mb-3"},"Backends"),i.createElement("p",{className:"text-black dark:text-white leading-relaxed text-sm text-justify"},"Developed many projects with robust backends. Have worked with Firebase, MongoDB, NGINX, Apache, and Dropbox. I can navigate and perform operations in these systems")))))," ")," ")," ")," ")},h=function(){return i.createElement("div",null,i.createElement("section",{className:"bg-white dark:bg-gray-800",id:"projects"},i.createElement("div",{className:"max-w-8xl mx-auto px-5 py-24 "},i.createElement("div",{className:"text-center mb-20"},i.createElement("h1",{className:" title-font text-black dark:text-white mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl"},"Projects"),i.createElement("p",{className:"text-black dark:text-white text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"},"Here are a few of the projects I'm extremely proud of!"),i.createElement("div",{className:"flex mt-6 justify-center"},i.createElement("div",{className:"w-16 h-1 rounded-full bg-pink-500 inline-flex"}))),i.createElement("div",{className:"flex flex-wrap justify-center sm:-m-4 -mx-4 -mb-10 -mt-4 "},i.createElement("div",null,i.createElement("div",{className:"max-w-2xl mx-auto sm:px-6 lg:px-8"},i.createElement("div",{className:"overflow-hidden shadow-xl text-black dark:text-gray-100"},i.createElement("div",{className:"px-6 py-4 bg-white dark:bg-gray-800 border-b border-pink-500 font-bold uppercase"},"What is Lorem Ipsum?"),i.createElement("div",{className:"p-6 bg-white dark:bg-gray-800 border-b border-pink-500"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."),i.createElement("div",{className:"p-6 bg-white dark:bg-gray-800 border-gray-200 text-right"},i.createElement("a",{href:"#home",className:"bg-pink-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-indigo-500 rounded uppercase"},"Learn More"))))),i.createElement("div",null,i.createElement("div",{className:"max-w-2xl mx-auto sm:px-6 lg:px-8"},i.createElement("div",{className:"overflow-hidden shadow-xl text-black dark:text-gray-100"},i.createElement("div",{className:"px-6 py-4 bg-white dark:bg-gray-800 border-b border-pink-500 font-bold uppercase"},"What is Lorem Ipsum?"),i.createElement("div",{className:"p-6 bg-white dark:bg-gray-800 border-b border-pink-500"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."),i.createElement("div",{className:"p-6 bg-white dark:bg-gray-800 border-gray-200 text-right"},i.createElement("a",{className:"bg-pink-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-indigo-500 rounded uppercase",href:"#home"},"Learn More"))))))," ")," ")," ")},b=r(5697),g=r.n(b),y=r(4839),x=r.n(y),w=r(2993),v=r.n(w),E=r(6494),k=r.n(E),N="bodyAttributes",T="htmlAttributes",A="titleAttributes",j={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},S=(Object.keys(j).map((function(e){return j[e]})),"charset"),C="cssText",O="href",I="http-equiv",M="innerHTML",L="itemprop",P="name",q="property",z="rel",R="src",H="target",_={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},B="defaultTitle",D="defer",F="encodeSpecialCharacters",Y="onChangeClientState",U="titleTemplate",V=Object.keys(_).reduce((function(e,t){return e[_[t]]=t,e}),{}),W=[j.NOSCRIPT,j.SCRIPT,j.STYLE],K="data-react-helmet",G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},$=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Q=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},Z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},ee=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},te=function(e){var t=le(e,j.TITLE),r=le(e,U);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=le(e,B);return t||n||void 0},re=function(e){return le(e,Y)||function(){}},ne=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return X({},e,t)}),{})},ae=function(e,t){return t.filter((function(e){return void 0!==e[j.BASE]})).map((function(e){return e[j.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},oe=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&de("Helmet: "+e+' should be of type "Array". Instead found type "'+G(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),l=0;l<o.length;l++){var i=o[l],s=i.toLowerCase();-1===t.indexOf(s)||r===z&&"canonical"===e[r].toLowerCase()||s===z&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(i)||i!==M&&i!==C&&i!==L||(r=i)}if(!r||!e[r])return!1;var c=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][c]&&(a[r][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),l=0;l<o.length;l++){var i=o[l],s=k()({},n[i],a[i]);n[i]=s}return e}),[]).reverse()},le=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},ie=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){ie(e)}),0)}),se=function(e){return clearTimeout(e)},ce="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ie:r.g.requestAnimationFrame||ie,me="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||se:r.g.cancelAnimationFrame||se,de=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ue=null,fe=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,l=e.metaTags,i=e.noscriptTags,s=e.onChangeClientState,c=e.scriptTags,m=e.styleTags,d=e.title,u=e.titleAttributes;be(j.BODY,n),be(j.HTML,a),he(d,u);var f={baseTag:ge(j.BASE,r),linkTags:ge(j.LINK,o),metaTags:ge(j.META,l),noscriptTags:ge(j.NOSCRIPT,i),scriptTags:ge(j.SCRIPT,c),styleTags:ge(j.STYLE,m)},p={},h={};Object.keys(f).forEach((function(e){var t=f[e],r=t.newTags,n=t.oldTags;r.length&&(p[e]=r),n.length&&(h[e]=f[e].oldTags)})),t&&t(),s(e,p,h)},pe=function(e){return Array.isArray(e)?e.join(""):e},he=function(e,t){void 0!==e&&document.title!==e&&(document.title=pe(e)),be(j.TITLE,t)},be=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(K),a=n?n.split(","):[],o=[].concat(a),l=Object.keys(t),i=0;i<l.length;i++){var s=l[i],c=t[s]||"";r.getAttribute(s)!==c&&r.setAttribute(s,c),-1===a.indexOf(s)&&a.push(s);var m=o.indexOf(s);-1!==m&&o.splice(m,1)}for(var d=o.length-1;d>=0;d--)r.removeAttribute(o[d]);a.length===o.length?r.removeAttribute(K):r.getAttribute(K)!==l.join(",")&&r.setAttribute(K,l.join(","))}},ge=function(e,t){var r=document.head||document.querySelector(j.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(n),o=[],l=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===M)r.innerHTML=t.innerHTML;else if(n===C)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var i=void 0===t[n]?"":t[n];r.setAttribute(n,i)}r.setAttribute(K,"true"),a.some((function(e,t){return l=t,r.isEqualNode(e)}))?a.splice(l,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},ye=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},xe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[_[r]||r]=e[r],t}),t)},we=function(e,t,r){switch(e){case j.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[K]=!0,a=xe(r,n),[i.createElement(j.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=ye(r),o=pe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+ee(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+ee(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case N:case T:return{toComponent:function(){return xe(t)},toString:function(){return ye(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[K]=!0,n);return Object.keys(t).forEach((function(e){var r=_[e]||e;if(r===M||r===C){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),i.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===M||e===C)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+ee(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",l=-1===W.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(l?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},ve=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,l=e.metaTags,i=e.noscriptTags,s=e.scriptTags,c=e.styleTags,m=e.title,d=void 0===m?"":m,u=e.titleAttributes;return{base:we(j.BASE,t,n),bodyAttributes:we(N,r,n),htmlAttributes:we(T,a,n),link:we(j.LINK,o,n),meta:we(j.META,l,n),noscript:we(j.NOSCRIPT,i,n),script:we(j.SCRIPT,s,n),style:we(j.STYLE,c,n),title:we(j.TITLE,{title:d,titleAttributes:u},n)}},Ee=x()((function(e){return{baseTag:ae([O,H],e),bodyAttributes:ne(N,e),defer:le(e,D),encode:le(e,F),htmlAttributes:ne(T,e),linkTags:oe(j.LINK,[z,O],e),metaTags:oe(j.META,[P,S,I,q,L],e),noscriptTags:oe(j.NOSCRIPT,[M],e),onChangeClientState:re(e),scriptTags:oe(j.SCRIPT,[R,M],e),styleTags:oe(j.STYLE,[C],e),title:te(e),titleAttributes:ne(A,e)}}),(function(e){ue&&me(ue),e.defer?ue=ce((function(){fe(e,(function(){ue=null}))})):(fe(e),ue=null)}),ve)((function(){return null})),ke=(a=Ee,l=o=function(e){function t(){return J(this,t),Z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!v()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case j.SCRIPT:case j.NOSCRIPT:return{innerHTML:t};case j.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return X({},n,((t={})[r.type]=[].concat(n[r.type]||[],[X({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,l=e.nestedChildren;switch(n.type){case j.TITLE:return X({},a,((t={})[n.type]=l,t.titleAttributes=X({},o),t));case j.BODY:return X({},a,{bodyAttributes:X({},o)});case j.HTML:return X({},a,{htmlAttributes:X({},o)})}return X({},a,((r={})[n.type]=X({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=X({},t);return Object.keys(e).forEach((function(t){var n;r=X({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return i.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[V[r]||r]=e[r],t}),t)}(Q(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case j.LINK:case j.META:case j.NOSCRIPT:case j.SCRIPT:case j.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:l,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=Q(e,["children"]),n=X({},r);return t&&(n=this.mapChildrenToProps(t,n)),i.createElement(a,n)},$(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(i.Component),o.propTypes={base:g().object,bodyAttributes:g().object,children:g().oneOfType([g().arrayOf(g().node),g().node]),defaultTitle:g().string,defer:g().bool,encodeSpecialCharacters:g().bool,htmlAttributes:g().object,link:g().arrayOf(g().object),meta:g().arrayOf(g().object),noscript:g().arrayOf(g().object),onChangeClientState:g().func,script:g().arrayOf(g().object),style:g().arrayOf(g().object),title:g().string,titleAttributes:g().object,titleTemplate:g().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=ve({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},l);ke.renderStatic=ke.rewind;var Ne=function(){return i.createElement("div",null,i.createElement(ke,null,i.createElement("meta",{charSet:"utf-8"}),i.createElement("title",null,"Soham.Manoli")),i.createElement(f,null),i.createElement(u,null),i.createElement(c,null),i.createElement(h,null),i.createElement(p,null),i.createElement(m,null),i.createElement("footer",{className:"flex justify-center px-4 text-black bg-white dark:text-white dark:bg-gray-800"},i.createElement("div",{className:"container py-6"},i.createElement("hr",{className:"h-px mt-6 bg-gray-700 border-none"}),i.createElement("div",{className:"flex flex-col items-center justify-between mt-6 md:flex-row"},i.createElement("div",null,i.createElement("h1",{className:"text-xl font-bold"},i.createElement("span",{className:"text-pink-500"},"SOHAM"),".MANOLI")),i.createElement("div",{className:"flex mt-4 md:m-0"},i.createElement("div",{className:"-mx-4"},i.createElement("a",{href:"#about",className:"px-4 text-sm"},"About Me"),i.createElement("a",{href:"#projects",className:"px-4 text-sm"},"Projects"),i.createElement("a",{href:"#skills",className:"px-4 text-sm"},"Skills"),i.createElement("a",{href:"#contact",className:"px-4 text-sm"},"Contact"),i.createElement("a",{href:"#home",className:"px-4 text-sm"},"Back to Top")))))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-4bc9920ed8d92a92681f.js.map