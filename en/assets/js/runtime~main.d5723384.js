(()=>{"use strict";var e,a,f,t,r,c={},d={};function b(e){var a=d[e];if(void 0!==a)return a.exports;var f=d[e]={id:e,loaded:!1,exports:{}};return c[e].call(f.exports,f,f.exports,b),f.loaded=!0,f.exports}b.m=c,b.c=d,e=[],b.O=(a,f,t,r)=>{if(!f){var c=1/0;for(i=0;i<e.length;i++){f=e[i][0],t=e[i][1],r=e[i][2];for(var d=!0,o=0;o<f.length;o++)(!1&r||c>=r)&&Object.keys(b.O).every((e=>b.O[e](f[o])))?f.splice(o--,1):(d=!1,r<c&&(c=r));if(d){e.splice(i--,1);var n=t();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[f,t,r]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var r=Object.create(null);b.r(r);var c={};a=a||[null,f({}),f([]),f(f)];for(var d=2&t&&e;"object"==typeof d&&!~a.indexOf(d);d=f(d))Object.getOwnPropertyNames(d).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,b.d(r,c),r},b.d=(e,a)=>{for(var f in a)b.o(a,f)&&!b.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,f)=>(b.f[f](e,a),a)),[])),b.u=e=>"assets/js/"+({63:"65ab16f9",103:"1f407857",512:"6fe72508",713:"a0a8d5b1",810:"49836445",1054:"9c4a2b00",1235:"a7456010",1903:"acecf23e",1972:"73664a40",1989:"3f8a0a81",1997:"09b85a47",2096:"d0316e7a",2205:"923bd51f",2466:"ff47c898",2538:"adcf9f80",2677:"ac34dedf",2707:"5d716957",2711:"9e4087bc",3206:"4ae9bcd7",3249:"ccc49370",3637:"f4f34a3a",3694:"8717b14a",3880:"f5324784",4134:"393be207",4434:"cc26c72c",4813:"6875c492",5176:"e9d91e9e",5285:"5fa10fbe",5557:"d9f32620",5742:"aba21aa0",5807:"4a39c493",6056:"dd7d549b",6061:"1f391b9e",6191:"796d20b2",6433:"0543a652",6603:"e7d01d50",6969:"14eb3368",7098:"a7bd4aaa",7283:"7690520e",7472:"814f3328",7643:"a6aa9e1f",7655:"e442b1fd",7743:"f7d852f2",8075:"e7a39e0b",8209:"01a85c17",8401:"17896441",8449:"3ef1fc2b",8609:"925b3f96",8737:"7661071f",8904:"35c1d780",9048:"a94703ab",9325:"59362658",9328:"e273c56f",9647:"5e95c892",9858:"36994c47"}[e]||e)+"."+{63:"3fd7e7b6",103:"de217d02",512:"50e88bd7",713:"b338d85b",810:"bedf0233",1054:"158a1578",1235:"8f13c0fe",1538:"6f07e7b6",1903:"732ed4df",1972:"e3981235",1989:"c126be37",1997:"b0864f22",2096:"fd4b5e47",2205:"9d74b686",2237:"ffc493b2",2466:"18cb0865",2538:"ec112a43",2677:"5a1d7980",2707:"a74eac19",2711:"15e2b192",3206:"2900ea41",3242:"6c2dfa54",3249:"b3a1b505",3637:"cf669008",3694:"ac6faaca",3880:"dbd30475",4134:"3f2e6d00",4434:"fc434254",4813:"41b55c82",5176:"1475f227",5285:"30d4812c",5557:"1e645b57",5742:"f71e5aad",5807:"594f1208",6056:"0bf27b01",6061:"1972b4f3",6191:"f92c015b",6433:"7a1e0e6d",6603:"22e360ad",6969:"4a3b0f0c",7098:"a08af465",7283:"a0499224",7472:"2df0fd61",7643:"b983ebec",7655:"3423d21f",7743:"51c00037",8075:"b8d33196",8209:"77345ab0",8401:"0cf44fd0",8449:"f1b7d223",8609:"09ffc01e",8737:"929acb8c",8904:"ae3e9fe7",9048:"498403fe",9325:"d26cce0d",9328:"f587e985",9647:"dbb38d90",9858:"cdefb005"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},r="tech-blog:",b.l=(e,a,f,c)=>{if(t[e])t[e].push(a);else{var d,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==r+f){d=l;break}}d||(o=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,b.nc&&d.setAttribute("nonce",b.nc),d.setAttribute("data-webpack",r+f),d.src=e),t[e]=[a];var u=(a,f)=>{d.onerror=d.onload=null,clearTimeout(s);var r=t[e];if(delete t[e],d.parentNode&&d.parentNode.removeChild(d),r&&r.forEach((e=>e(f))),a)return a(f)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=u.bind(null,d.onerror),d.onload=u.bind(null,d.onload),o&&document.head.appendChild(d)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/tech-blog/en/",b.gca=function(e){return e={17896441:"8401",49836445:"810",59362658:"9325","65ab16f9":"63","1f407857":"103","6fe72508":"512",a0a8d5b1:"713","9c4a2b00":"1054",a7456010:"1235",acecf23e:"1903","73664a40":"1972","3f8a0a81":"1989","09b85a47":"1997",d0316e7a:"2096","923bd51f":"2205",ff47c898:"2466",adcf9f80:"2538",ac34dedf:"2677","5d716957":"2707","9e4087bc":"2711","4ae9bcd7":"3206",ccc49370:"3249",f4f34a3a:"3637","8717b14a":"3694",f5324784:"3880","393be207":"4134",cc26c72c:"4434","6875c492":"4813",e9d91e9e:"5176","5fa10fbe":"5285",d9f32620:"5557",aba21aa0:"5742","4a39c493":"5807",dd7d549b:"6056","1f391b9e":"6061","796d20b2":"6191","0543a652":"6433",e7d01d50:"6603","14eb3368":"6969",a7bd4aaa:"7098","7690520e":"7283","814f3328":"7472",a6aa9e1f:"7643",e442b1fd:"7655",f7d852f2:"7743",e7a39e0b:"8075","01a85c17":"8209","3ef1fc2b":"8449","925b3f96":"8609","7661071f":"8737","35c1d780":"8904",a94703ab:"9048",e273c56f:"9328","5e95c892":"9647","36994c47":"9858"}[e]||e,b.p+b.u(e)},(()=>{var e={5354:0,1869:0};b.f.j=(a,f)=>{var t=b.o(e,a)?e[a]:void 0;if(0!==t)if(t)f.push(t[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var r=new Promise(((f,r)=>t=e[a]=[f,r]));f.push(t[2]=r);var c=b.p+b.u(a),d=new Error;b.l(c,(f=>{if(b.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var r=f&&("load"===f.type?"missing":f.type),c=f&&f.target&&f.target.src;d.message="Loading chunk "+a+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,t[1](d)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,f)=>{var t,r,c=f[0],d=f[1],o=f[2],n=0;if(c.some((a=>0!==e[a]))){for(t in d)b.o(d,t)&&(b.m[t]=d[t]);if(o)var i=o(b)}for(a&&a(f);n<c.length;n++)r=c[n],b.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return b.O(i)},f=self.webpackChunktech_blog=self.webpackChunktech_blog||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();