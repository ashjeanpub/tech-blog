(()=>{"use strict";var e,a,f,c,t,r={},d={};function b(e){var a=d[e];if(void 0!==a)return a.exports;var f=d[e]={id:e,loaded:!1,exports:{}};return r[e].call(f.exports,f,f.exports,b),f.loaded=!0,f.exports}b.m=r,b.c=d,e=[],b.O=(a,f,c,t)=>{if(!f){var r=1/0;for(i=0;i<e.length;i++){f=e[i][0],c=e[i][1],t=e[i][2];for(var d=!0,o=0;o<f.length;o++)(!1&t||r>=t)&&Object.keys(b.O).every((e=>b.O[e](f[o])))?f.splice(o--,1):(d=!1,t<r&&(r=t));if(d){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}t=t||0;for(var i=e.length;i>0&&e[i-1][2]>t;i--)e[i]=e[i-1];e[i]=[f,c,t]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var t=Object.create(null);b.r(t);var r={};a=a||[null,f({}),f([]),f(f)];for(var d=2&c&&e;"object"==typeof d&&!~a.indexOf(d);d=f(d))Object.getOwnPropertyNames(d).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,b.d(t,r),t},b.d=(e,a)=>{for(var f in a)b.o(a,f)&&!b.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,f)=>(b.f[f](e,a),a)),[])),b.u=e=>"assets/js/"+({103:"1f407857",341:"e4424726",512:"6fe72508",713:"a0a8d5b1",810:"49836445",815:"1e08c418",1054:"9c4a2b00",1235:"a7456010",1512:"c02ff534",1784:"b959da69",1903:"acecf23e",1972:"73664a40",2079:"cade26c0",2205:"923bd51f",2466:"ff47c898",2538:"adcf9f80",2677:"ac34dedf",2707:"5d716957",2711:"9e4087bc",2885:"fd36d331",3249:"ccc49370",3552:"81ded9ea",3637:"f4f34a3a",3694:"8717b14a",4134:"393be207",4813:"6875c492",5176:"e9d91e9e",5228:"bc40549f",5285:"5fa10fbe",5557:"d9f32620",5696:"a3fb1d84",5742:"aba21aa0",5807:"4a39c493",5879:"ea072ae5",6056:"dd7d549b",6061:"1f391b9e",6191:"796d20b2",6433:"0543a652",6603:"e7d01d50",6969:"14eb3368",7098:"a7bd4aaa",7257:"4aca781e",7283:"7690520e",7411:"18f2384b",7472:"814f3328",7643:"a6aa9e1f",7858:"c0cb0c57",8075:"e7a39e0b",8209:"01a85c17",8210:"14a8a92a",8401:"17896441",8449:"3ef1fc2b",8609:"925b3f96",8737:"7661071f",9048:"a94703ab",9325:"59362658",9328:"e273c56f",9647:"5e95c892",9858:"36994c47"}[e]||e)+"."+{103:"de217d02",341:"43510c96",512:"ff47742a",713:"b338d85b",810:"bedf0233",815:"5d1aac69",1054:"158a1578",1235:"8f13c0fe",1512:"9980e21c",1538:"6f07e7b6",1784:"cc55196a",1903:"732ed4df",1972:"e3981235",2079:"ace008e4",2205:"ce0fefd1",2237:"ffc493b2",2466:"18cb0865",2538:"ec112a43",2677:"5a1d7980",2707:"3c302ceb",2711:"15e2b192",2885:"9bb23ad2",3242:"6c2dfa54",3249:"b3a1b505",3552:"dcf22337",3637:"cf669008",3694:"ac6faaca",4134:"3f2e6d00",4813:"41b55c82",5176:"778d0e5f",5228:"f23f841f",5285:"30d4812c",5557:"1e645b57",5696:"07bb97e8",5742:"f71e5aad",5807:"7e524597",5879:"89482ebc",6056:"0bf27b01",6061:"1972b4f3",6191:"f92c015b",6433:"7a1e0e6d",6603:"d0bc7e6e",6969:"4a3b0f0c",7098:"a08af465",7257:"13522d3c",7283:"a0499224",7411:"e1315cdc",7472:"971b4e09",7643:"b983ebec",7858:"87d7a1e5",8075:"adda6684",8209:"77345ab0",8210:"600a56af",8401:"0cf44fd0",8449:"bf532219",8609:"ab5f5488",8737:"929acb8c",9048:"498403fe",9325:"d26cce0d",9328:"6c1da590",9647:"dbb38d90",9858:"cdefb005"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},t="tech-blog:",b.l=(e,a,f,r)=>{if(c[e])c[e].push(a);else{var d,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==t+f){d=l;break}}d||(o=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,b.nc&&d.setAttribute("nonce",b.nc),d.setAttribute("data-webpack",t+f),d.src=e),c[e]=[a];var u=(a,f)=>{d.onerror=d.onload=null,clearTimeout(s);var t=c[e];if(delete c[e],d.parentNode&&d.parentNode.removeChild(d),t&&t.forEach((e=>e(f))),a)return a(f)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=u.bind(null,d.onerror),d.onload=u.bind(null,d.onload),o&&document.head.appendChild(d)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/tech-blog/en/",b.gca=function(e){return e={17896441:"8401",49836445:"810",59362658:"9325","1f407857":"103",e4424726:"341","6fe72508":"512",a0a8d5b1:"713","1e08c418":"815","9c4a2b00":"1054",a7456010:"1235",c02ff534:"1512",b959da69:"1784",acecf23e:"1903","73664a40":"1972",cade26c0:"2079","923bd51f":"2205",ff47c898:"2466",adcf9f80:"2538",ac34dedf:"2677","5d716957":"2707","9e4087bc":"2711",fd36d331:"2885",ccc49370:"3249","81ded9ea":"3552",f4f34a3a:"3637","8717b14a":"3694","393be207":"4134","6875c492":"4813",e9d91e9e:"5176",bc40549f:"5228","5fa10fbe":"5285",d9f32620:"5557",a3fb1d84:"5696",aba21aa0:"5742","4a39c493":"5807",ea072ae5:"5879",dd7d549b:"6056","1f391b9e":"6061","796d20b2":"6191","0543a652":"6433",e7d01d50:"6603","14eb3368":"6969",a7bd4aaa:"7098","4aca781e":"7257","7690520e":"7283","18f2384b":"7411","814f3328":"7472",a6aa9e1f:"7643",c0cb0c57:"7858",e7a39e0b:"8075","01a85c17":"8209","14a8a92a":"8210","3ef1fc2b":"8449","925b3f96":"8609","7661071f":"8737",a94703ab:"9048",e273c56f:"9328","5e95c892":"9647","36994c47":"9858"}[e]||e,b.p+b.u(e)},(()=>{var e={5354:0,1869:0};b.f.j=(a,f)=>{var c=b.o(e,a)?e[a]:void 0;if(0!==c)if(c)f.push(c[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var t=new Promise(((f,t)=>c=e[a]=[f,t]));f.push(c[2]=t);var r=b.p+b.u(a),d=new Error;b.l(r,(f=>{if(b.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var t=f&&("load"===f.type?"missing":f.type),r=f&&f.target&&f.target.src;d.message="Loading chunk "+a+" failed.\n("+t+": "+r+")",d.name="ChunkLoadError",d.type=t,d.request=r,c[1](d)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,f)=>{var c,t,r=f[0],d=f[1],o=f[2],n=0;if(r.some((a=>0!==e[a]))){for(c in d)b.o(d,c)&&(b.m[c]=d[c]);if(o)var i=o(b)}for(a&&a(f);n<r.length;n++)t=r[n],b.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return b.O(i)},f=self.webpackChunktech_blog=self.webpackChunktech_blog||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();