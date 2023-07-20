(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{147:function(t,e,n){"use strict";var o=n(0),r=n(209),l=n.n(r);o.a.use(l.a)},148:function(t,e,n){"use strict";var o=n(210);e.a=function(t,e){Object(o.a)(t),e("s3_image",(function(path){return"https://inuinouta.s3.ap-northeast-1.amazonaws.com/images"+path}))}},149:function(t,e,n){"use strict";var o=n(10);n(50);e.a=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e,n){var o,r,l,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.store,r=e.$axios,t.next=3,r.$get("/api/videos/?sort[]=-published_at");case 3:return l=t.sent,t.next=6,r.$get("/api/songs/?sort[]=-video.published_at&sort[]=start_at");case 6:c=t.sent,o.commit("contents/setVideos",l.videos),o.commit("contents/setSongs",c.songs),n("init_video",l.videos[0]);case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},150:function(t,e,n){"use strict";e.a=function(t,e){var n=t.store;e("utils",{scrollToPlayingSong:function(){var t=n.getters["controller/playing"],e=n.getters["controller/pausing"],o=t||e,r=document.getElementById("song-row-"+o.id).getBoundingClientRect(),l=n.getters["global/showVideoArea"]?"show-hide-bar-open":"show-hide-bar-close",c=document.getElementById(l).getBoundingClientRect(),f=window.pageYOffset+r.top-c.top-c.height;window.scrollTo({top:f,left:0,behavior:"smooth"})}})}},151:function(t,e,n){"use strict";n(39),n(28),n(25),n(31),n(40),n(41),n(29);var o=n(118),r=n(119);n(13),n(42),n(336),n(193),n(32),n(38);function l(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,f=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){f=!0,r=t},f:function(){try{l||null==n.return||n.return()}finally{if(f)throw r}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}e.a=function(t,e){var n=t.store,o=new f("default"),r=n.getters["contents/songs"],l=n.getters["contents/videos"];o.importFromMap(r),n.commit("playlist/setDefault",o),n.commit("playlist/setPlaying",o);var c=new f("original"),d=new f("video");r.forEach((function(t,e,map){t.is_original&&c.addSong(t),l.get(t.video).is_stream||d.addSong(t)})),n.commit("playlist/setOriginal",c),n.commit("playlist/setVideo",d),e("playlist",{setShuffled:function(){var t=n.getters["playlist/playing"].exportShuffledList(),e=n.getters["controller/playing"],o=n.getters["controller/pausing"],r=e||o,l=t.findIndex((function(t){return t==r.id}));t.splice(l,1),t.unshift(r.id);var c=new f("shuffled");c.importFromList(t),n.commit("playlist/setShuffled",c)}})};var f=function(){function t(e){Object(o.a)(this,t),this.name=e,this.position=0,this.list=[],this.max_index=0}return Object(r.a)(t,[{key:"getSong",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null===!t){var e=this.list[t];return store.getters["contents/songs"].get(e)}var n=this.list[this.position];return store.getters["contents/songs"].get(n)}},{key:"addSong",value:function(t){this.list.push(t.id),this.max_index++}},{key:"importFromMap",value:function(map){var t=this;map.forEach((function(e,n,map){t.list.push(n)})),this.max_index=this.list.length-1}},{key:"importFromList",value:function(t){var e,n=l(t);try{for(n.s();!(e=n.n()).done;){var o=e.value;this.list.push(o),this.max_index++}}catch(t){n.e(t)}finally{n.f()}}},{key:"exportShuffledList",value:function(){for(var t=this.list.slice(),i=t.length-1;i>=0;i--){var e=Math.floor(Math.random()*(i+1)),n=[t[e],t[i]];t[i]=n[0],t[e]=n[1]}return t}},{key:"setPosition",value:function(t){this.position=t}},{key:"setPositionById",value:function(t){var e=this.list.findIndex((function(e){return e==t}));this.position=e}},{key:"backwardPosition",value:function(){return 0===this.position?this.position=this.max_index:this.position-=1,this.list[this.position]}},{key:"forwardPosition",value:function(){return this.position===this.max_index?this.position=0:this.position+=1,this.list[this.position]}}]),t}()},152:function(t,e,n){"use strict";var o=n(10);n(50);e.a=function(t,e){var n,r,l=t.app,c=t.store;function f(){return c.getters["controller/player"]}e("controller",{play_or_pause:function(t,e){var n=c.getters["controller/playing"],o=c.getters["controller/pausing"];return t==n?(f().pauseVideo(),c.commit("controller/setPlaying",null),c.commit("controller/setPausing",t),void c.commit("controller/setStateChanged",!0)):t==o?(f().playVideo(),c.commit("controller/setPlaying",t),c.commit("controller/setPausing",null),void c.commit("controller/setStateChanged",!0)):(c.commit("playlist/setPosition",e),void l.$controller.play(n,t))},play:function(t,e){e?((t?t.video:null)!==e.video?f().loadVideoById(e.video,e.start_at):(f().seekTo(e.start_at),f().playVideo()),c.commit("controller/setPlaying",e),c.commit("controller/setPausing",null),c.commit("controller/setStateChanged",!0)):console.error("next song",e)},getPosition:function(){var t=c.getters["playlist/position"]+7,e=c.getters["playlist/playing"].max_index;return t>e?e:t},prev:function(){var t,e=c.getters["playlist/playing"];if(t=null===c.getters["controller/playing"]?c.getters["contents/songs"].get(e.list[0]):c.getters["controller/playing"],1!==e.list.length){c.commit("playlist/backward");var n=e.list[e.position],o=c.getters["contents/songs"].get(n);l.$controller.play(t,o),l.$utils.scrollToPlayingSong()}else l.$controller.play(t,t)},next:function(){var t,e=c.getters["playlist/playing"];if(t=null===c.getters["controller/playing"]?c.getters["contents/songs"].get(e.list[0]):c.getters["controller/playing"],1!==e.list.length){c.commit("playlist/forward");var n=e.list[e.position],o=c.getters["contents/songs"].get(n);l.$controller.play(t,o),l.$utils.scrollToPlayingSong()}else l.$controller.play(t,t)},autoJump:(r=Object(o.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=c.getters["controller/playing"]){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,f().getCurrentTime();case 5:if(n=t.sent,Math.ceil(n)!=e.end_at){t.next=12;break}if("once"!=c.getters["controller/repeat_mode"]){t.next=11;break}return l.$controller.play(e,e),t.abrupt("return");case 11:l.$controller.next();case 12:case"end":return t.stop()}}),t)}))),function(){return r.apply(this,arguments)}),setPlaytime:(n=Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().getCurrentTime();case 2:e=t.sent,c.commit("controller/setPlayTime",e);case 4:case"end":return t.stop()}}),t)}))),function(){return n.apply(this,arguments)})})}},153:function(t,e,n){"use strict";var o=n(0),r=n(24),l=n(211),c=n(68);r.c.add(l.a),o.a.component("font-awesome-icon",c.a),o.a.config.productionTip=!1},215:function(t,e,n){n(216),t.exports=n(217)},275:function(t,e,n){var content=n(276);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(88).default)("464fe1bc",content,!0,{sourceMap:!1})},276:function(t,e,n){var o=n(87)(!1);o.push([t.i,"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}",""]),t.exports=o},279:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return l})),n.d(e,"mutations",(function(){return c})),n.d(e,"getters",(function(){return f}));n(280),n(13),n(28),n(287),n(289),n(290),n(291),n(292),n(293),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(29),n(38),n(32),n(39),n(25),n(31),n(40),n(41);function o(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,f=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){f=!0,l=t},f:function(){try{c||null==n.return||n.return()}finally{if(f)throw l}}}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var l=function(){return{videos:new Map,songs:new Map}},c={setVideos:function(t,e){var n,r=o(e);try{for(r.s();!(n=r.n()).done;){var video=n.value;t.videos.set(video.id,video)}}catch(t){r.e(t)}finally{r.f()}},setSongs:function(t,e){var n,r=o(e);try{for(r.s();!(n=r.n()).done;){var l=n.value;t.songs.set(l.id,l)}}catch(t){r.e(t)}finally{r.f()}}},f={videos:function(t){return t.videos},songs:function(t){return t.songs}}},302:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return r})),n.d(e,"getters",(function(){return l}));var o=function(){return{player:null,pausing:null,playing:null,playlist_name:null,repeat_mode:"off",shuffle:!1,state_changed:!1,songTime:0,playTime:0}},r={setPlayer:function(t,e){t.player=e},setPausing:function(t,e){t.pausing=e},setPlaying:function(t,e){t.playing=e},setPlaylistName:function(t,e){t.playlist_name=e},setRepeatMode:function(t,e){t.repeat_mode=e},setShuffle:function(t,e){t.shuffle=e},setStateChanged:function(t,e){t.state_changed=e},setSongTime:function(t,e){t.songTime=e},setPlayTime:function(t,e){t.playTime=e}},l={player:function(t){return t.player},playing:function(t){return t.playing},pausing:function(t){return t.pausing},playlist_name:function(t){return t.playlist_name},repeat_mode:function(t){return t.repeat_mode},shuffle:function(t){return t.shuffle},state_changed:function(t){return t.state_changed},songTime:function(t){return t.songTime},playTime:function(t){return t.playTime}}},303:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return r})),n.d(e,"getters",(function(){return l}));var o=function(){return{activeNav:"default",showVideoArea:!0}},r={setActiveNav:function(t,e){t.activeNav=e},switchVideoArea:function(t){t.showVideoArea=!t.showVideoArea}},l={activeNav:function(t){return t.activeNav},showVideoArea:function(t){return t.showVideoArea}}},304:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return r})),n.d(e,"getters",(function(){return l}));var o=function(){return{playing:null,default:null,original:null,shuffled:null,video:null}},r={setPlaying:function(t,e){t.playing=e},setDefault:function(t,e){t.default=e},setOriginal:function(t,e){t.original=e},setVideo:function(t,e){t.video=e},setShuffled:function(t,e){t.shuffled=e},backward:function(t){t.playing.backwardPosition()},forward:function(t){t.playing.forwardPosition()},setPosition:function(t,e){t.playing.setPosition(e)},setPositionById:function(t,e){t.playing.setPositionById(e)}},l={playing:function(t){return t.playing},default:function(t){return t.default},original:function(t){return t.original},shuffled:function(t){return t.shuffled},video:function(t){return t.video},position:function(t){return t.playing.position}}},305:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return r})),n.d(e,"getters",(function(){return l}));var o=function(){return{activeId:null}},r={setActiveId:function(t,e){t.activeId=e}},l={activeId:function(t){return t.activeId}}}},[[215,17,2,18]]]);