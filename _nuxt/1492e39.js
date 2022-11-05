(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{147:function(t,n,e){"use strict";var o=e(0),r=e(208),l=e.n(r);o.a.use(l.a)},148:function(t,n,e){"use strict";var o=e(10);e(53);n.a=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(n,e){var o,r,l,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=n.store,r=n.$axios,t.next=3,r.$get("/api/videos/?sort[]=-published_at");case 3:return l=t.sent,t.next=6,r.$get("/api/songs/?sort[]=-video.published_at&sort[]=start_at");case 6:c=t.sent,o.commit("contents/setVideos",l.videos),o.commit("contents/setSongs",c.songs),e("init_video",l.videos[0]);case 10:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}()},149:function(t,n,e){"use strict";n.a=function(t,n){var e=t.store;n("utils",{scrollToPlayingSong:function(){var t=e.getters["controller/playing"],n=e.getters["controller/pausing"],o=t||n,r=document.getElementById("song-row-"+o.id).getBoundingClientRect(),l=e.getters["global/showVideoArea"]?"show-hide-bar-open":"show-hide-bar-close",c=document.getElementById(l).getBoundingClientRect(),f=window.pageYOffset+r.top-c.top-c.height;window.scrollTo({top:f,left:0,behavior:"smooth"})}})}},150:function(t,n,e){"use strict";e(40),e(29),e(26),e(31),e(41),e(42),e(30);var o=e(118),r=e(119);e(14),e(43),e(334),e(192),e(32),e(38);function l(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return c(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return c(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,f=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return l=t.done,t},e:function(t){f=!0,r=t},f:function(){try{l||null==e.return||e.return()}finally{if(f)throw r}}}}function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,e=new Array(n);i<n;i++)e[i]=t[i];return e}n.a=function(t,n){var e=t.store,o=new f("default"),r=e.getters["contents/songs"],l=e.getters["contents/videos"];o.importFromMap(r),e.commit("playlist/setDefault",o),e.commit("playlist/setPlaying",o);var c=new f("original"),d=new f("video");r.forEach((function(t,n,map){t.is_original&&c.addSong(t),l.get(t.video).is_stream||d.addSong(t)})),e.commit("playlist/setOriginal",c),e.commit("playlist/setVideo",d),n("playlist",{setShuffled:function(){var t=e.getters["playlist/playing"].exportShuffledList(),n=e.getters["controller/playing"],o=e.getters["controller/pausing"],r=n||o,l=t.findIndex((function(t){return t==r.id}));t.splice(l,1),t.unshift(r.id);var c=new f("shuffled");c.importFromList(t),e.commit("playlist/setShuffled",c)}})};var f=function(){function t(n){Object(o.a)(this,t),this.name=n,this.position=0,this.list=[],this.max_index=0}return Object(r.a)(t,[{key:"getSong",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null===!t){var n=this.list[t];return store.getters["contents/songs"].get(n)}var e=this.list[this.position];return store.getters["contents/songs"].get(e)}},{key:"addSong",value:function(t){this.list.push(t.id),this.max_index++}},{key:"importFromMap",value:function(map){var t=this;map.forEach((function(n,e,map){t.list.push(e)})),this.max_index=this.list.length-1}},{key:"importFromList",value:function(t){var n,e=l(t);try{for(e.s();!(n=e.n()).done;){var o=n.value;this.list.push(o),this.max_index++}}catch(t){e.e(t)}finally{e.f()}}},{key:"exportShuffledList",value:function(){for(var t=this.list.slice(),i=t.length-1;i>=0;i--){var n=Math.floor(Math.random()*(i+1)),e=[t[n],t[i]];t[i]=e[0],t[n]=e[1]}return t}},{key:"setPosition",value:function(t){this.position=t}},{key:"setPositionById",value:function(t){var n=this.list.findIndex((function(n){return n==t}));this.position=n}},{key:"backwardPosition",value:function(){return 0===this.position?this.position=this.max_index:this.position-=1,this.list[this.position]}},{key:"forwardPosition",value:function(){return this.position===this.max_index?this.position=0:this.position+=1,this.list[this.position]}}]),t}()},151:function(t,n,e){"use strict";var o=e(10);e(53);n.a=function(t,n){var e,r=t.app,l=t.store;function c(){return l.getters["controller/player"]}n("controller",{play_or_pause:function(t,n){var e=l.getters["controller/playing"],o=l.getters["controller/pausing"];return t==e?(c().pauseVideo(),l.commit("controller/setPlaying",null),void l.commit("controller/setPausing",t)):t==o?(c().playVideo(),l.commit("controller/setPlaying",t),void l.commit("controller/setPausing",null)):(l.commit("playlist/setPosition",n),void r.$controller.play(e,t))},play:function(t,n){n?((t?t.video:null)!==n.video?c().loadVideoById(n.video,n.start_at):(c().seekTo(n.start_at),c().playVideo()),l.commit("controller/setPlaying",n),l.commit("controller/setPausing",null)):console.error("next song",n)},getPosition:function(){var t=l.getters["playlist/position"]+7,n=l.getters["playlist/playing"].max_index;return t>n?n:t},prev:function(){var t,n=l.getters["playlist/playing"];if(t=null===l.getters["controller/playing"]?l.getters["contents/songs"].get(n.list[0]):l.getters["controller/playing"],1!==n.list.length){l.commit("playlist/backward");var e=n.list[n.position],o=l.getters["contents/songs"].get(e);r.$controller.play(t,o),r.$utils.scrollToPlayingSong()}else r.$controller.play(t,t)},next:function(){var t,n=l.getters["playlist/playing"];if(t=null===l.getters["controller/playing"]?l.getters["contents/songs"].get(n.list[0]):l.getters["controller/playing"],1!==n.list.length){l.commit("playlist/forward");var e=n.list[n.position],o=l.getters["contents/songs"].get(e);r.$controller.play(t,o),r.$utils.scrollToPlayingSong()}else r.$controller.play(t,t)},autoJump:(e=Object(o.a)(regeneratorRuntime.mark((function t(){var n,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=l.getters["controller/playing"]){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,c().getCurrentTime();case 5:if(e=t.sent,Math.ceil(e)!=n.end_at){t.next=12;break}if("once"!=l.getters["controller/repeat_mode"]){t.next=11;break}return r.$controller.play(n,n),t.abrupt("return");case 11:r.$controller.next();case 12:case"end":return t.stop()}}),t)}))),function(){return e.apply(this,arguments)})})}},152:function(t,n,e){"use strict";var o=e(0),r=e(24),l=e(209),c=e(68);r.c.add(l.a),o.a.component("font-awesome-icon",c.a),o.a.config.productionTip=!1},213:function(t,n,e){e(214),t.exports=e(215)},273:function(t,n,e){var content=e(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(88).default)("464fe1bc",content,!0,{sourceMap:!1})},274:function(t,n,e){var o=e(87)(!1);o.push([t.i,"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}",""]),t.exports=o},277:function(t,n,e){"use strict";e.r(n),e.d(n,"state",(function(){return l})),e.d(n,"mutations",(function(){return c})),e.d(n,"getters",(function(){return f}));e(278),e(14),e(29),e(285),e(287),e(288),e(289),e(290),e(291),e(293),e(294),e(295),e(296),e(297),e(298),e(299),e(30),e(38),e(32),e(40),e(26),e(31),e(41),e(42);function o(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return r(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,f=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return c=t.done,t},e:function(t){f=!0,l=t},f:function(){try{c||null==e.return||e.return()}finally{if(f)throw l}}}}function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,e=new Array(n);i<n;i++)e[i]=t[i];return e}var l=function(){return{videos:new Map,songs:new Map}},c={setVideos:function(t,n){var e,r=o(n);try{for(r.s();!(e=r.n()).done;){var video=e.value;t.videos.set(video.id,video)}}catch(t){r.e(t)}finally{r.f()}},setSongs:function(t,n){var e,r=o(n);try{for(r.s();!(e=r.n()).done;){var l=e.value;t.songs.set(l.id,l)}}catch(t){r.e(t)}finally{r.f()}}},f={videos:function(t){return t.videos},songs:function(t){return t.songs}}},300:function(t,n,e){"use strict";e.r(n),e.d(n,"state",(function(){return o})),e.d(n,"mutations",(function(){return r})),e.d(n,"getters",(function(){return l}));var o=function(){return{player:null,pausing:null,playing:null,playlist_name:null,repeat_mode:"off",shuffle:!1}},r={setPlayer:function(t,n){t.player=n},setPausing:function(t,n){t.pausing=n},setPlaying:function(t,n){t.playing=n},setPlaylistName:function(t,n){t.playlist_name=n},setRepeatMode:function(t,n){t.repeat_mode=n},setShuffle:function(t,n){t.shuffle=n}},l={player:function(t){return t.player},playing:function(t){return t.playing},pausing:function(t){return t.pausing},playlist_name:function(t){return t.playlist_name},repeat_mode:function(t){return t.repeat_mode},shuffle:function(t){return t.shuffle}}},301:function(t,n,e){"use strict";e.r(n),e.d(n,"state",(function(){return o})),e.d(n,"mutations",(function(){return r})),e.d(n,"getters",(function(){return l}));var o=function(){return{activeNav:"default",showVideoArea:!0}},r={setActiveNav:function(t,n){t.activeNav=n},switchVideoArea:function(t){t.showVideoArea=!t.showVideoArea}},l={activeNav:function(t){return t.activeNav},showVideoArea:function(t){return t.showVideoArea}}},302:function(t,n,e){"use strict";e.r(n),e.d(n,"state",(function(){return o})),e.d(n,"mutations",(function(){return r})),e.d(n,"getters",(function(){return l}));var o=function(){return{playing:null,default:null,original:null,shuffled:null,video:null}},r={setPlaying:function(t,n){t.playing=n},setDefault:function(t,n){t.default=n},setOriginal:function(t,n){t.original=n},setVideo:function(t,n){t.video=n},setShuffled:function(t,n){t.shuffled=n},backward:function(t){t.playing.backwardPosition()},forward:function(t){t.playing.forwardPosition()},setPosition:function(t,n){t.playing.setPosition(n)},setPositionById:function(t,n){t.playing.setPositionById(n)}},l={playing:function(t){return t.playing},default:function(t){return t.default},original:function(t){return t.original},shuffled:function(t){return t.shuffled},video:function(t){return t.video},position:function(t){return t.playing.position}}},303:function(t,n,e){"use strict";e.r(n),e.d(n,"state",(function(){return o})),e.d(n,"mutations",(function(){return r})),e.d(n,"getters",(function(){return l}));var o=function(){return{activeId:null}},r={setActiveId:function(t,n){t.activeId=n}},l={activeId:function(t){return t.activeId}}}},[[213,13,2,14]]]);