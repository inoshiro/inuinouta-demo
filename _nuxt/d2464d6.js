(window.webpackJsonp=window.webpackJsonp||[]).push([[0,3,4,5,7,8,9,11,12,13,14],{338:function(t,e,o){var content=o(346);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(88).default)("13fd5279",content,!0,{sourceMap:!1})},339:function(t,e,o){var content=o(353);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(88).default)("de520694",content,!0,{sourceMap:!1})},340:function(t,e,o){var content=o(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(88).default)("4d8fd59a",content,!0,{sourceMap:!1})},341:function(t,e,o){var content=o(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(88).default)("47bcc38a",content,!0,{sourceMap:!1})},342:function(t,e,o){var content=o(362);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(88).default)("26d56454",content,!0,{sourceMap:!1})},343:function(t,e,o){"use strict";o.r(e);o(348),o(13),o(28),o(29),o(214),o(91);var n={props:{song_id:{type:Number,required:!0},position:{type:Number,required:!0}},data:function(){return{song:null}},computed:{isSelected:function(){return this.isPlaying||this.isPausing},isPlaying:function(){return this.song===this.$store.getters["controller/playing"]},isPausing:function(){return this.song===this.$store.getters["controller/pausing"]},video:function(){return this.$store.getters["contents/videos"].get(this.song.video)},youtubeUrl:function(){var t=new URLSearchParams;return t.append("v",this.song.video),t.append("t",this.song.start_at),"https://youtube.com/watch?"+t.toString()}},methods:{clickSong:function(){this.$nuxt.$emit("click-song",this.song,this.position)},clickAdd:function(){console.log("add")},clickMenu:function(){console.log("menu")}},mounted:function(){this.song=this.$store.getters["contents/songs"].get(this.song_id)}},r=(o(352),o(56)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return t.song?e("div",[e("div",{staticClass:"song-outer",class:t.isSelected?"-active":"",attrs:{id:"song-row-"+t.song.id}},[e("div",{staticClass:"song_thumb",on:{click:t.clickSong}},[e("img",{attrs:{src:t.video.thumbnail_path}})]),t._v(" "),t.isPlaying?e("div",{staticClass:"song_playing"},[e("div",{staticClass:"playing-image"})]):t._e(),t._v(" "),t.isPausing?e("div",{staticClass:"song_playing"},[t._m(0)]):t._e(),t._v(" "),e("div",{staticClass:"song_info",on:{click:t.clickSong}},[e("a",{attrs:{href:t.youtubeUrl},on:{click:function(t){t.preventDefault()}}},[e("div",{staticClass:"song_title"},[t._v(t._s(t.song.title))]),t._v(" "),e("div",{staticClass:"song_artist"},[t._v(t._s(t.song.artist))])])]),t._v(" "),e("div",{staticClass:"song_add"},[e("span",{staticClass:"icon",on:{click:t.clickAdd}},[e("li",{staticClass:"far fa-plus"})])]),t._v(" "),e("div",{staticClass:"song_menu"},[e("span",{staticClass:"icon",on:{click:t.clickMenu}},[e("li",{staticClass:"far fa-ellipsis-h"})])])])]):t._e()}),[function(){var t=this._self._c;return t("div",{staticClass:"pausing-image"},[t("i",{staticClass:"fa-solid fa-pause"})])}],!1,null,"e930df5c",null);e.default=component.exports},345:function(t,e,o){"use strict";o(338)},346:function(t,e,o){var n=o(87)(!1);n.push([t.i,'.nav-button[data-v-53f72f46]{padding:5px 10px;margin:0 5px;font-size:.8rem;font-family:"Kosugi Maru",sans-serif;color:#8f8f8f;background-color:unset;border:none;border-bottom:5px solid #000;transition:.8s;cursor:pointer}.-active[data-v-53f72f46]{color:#dfdfdf;border-bottom:5px solid #9d3757;transition:.8s}',""]),t.exports=n},347:function(t,e,o){var content=o(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(88).default)("c72ab26c",content,!0,{sourceMap:!1})},348:function(t,e,o){"use strict";var n=o(11),r=o(6),l=o(4),c=o(90),d=o(17),f=o(12),h=o(154),v=o(49),m=o(89),y=o(213),x=o(3),_=o(70).f,w=o(46).f,k=o(16).f,C=o(349),$=o(350).trim,S="Number",M=r.Number,O=M.prototype,P=r.TypeError,N=l("".slice),R=l("".charCodeAt),I=function(t){var e=y(t,"number");return"bigint"==typeof e?e:j(e)},j=function(t){var e,o,n,r,l,c,d,code,f=y(t,"number");if(m(f))throw P("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=$(f),43===(e=R(f,0))||45===e){if(88===(o=R(f,2))||120===o)return NaN}else if(48===e){switch(R(f,1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+f}for(c=(l=N(f,2)).length,d=0;d<c;d++)if((code=R(l,d))<48||code>r)return NaN;return parseInt(l,n)}return+f};if(c(S,!M(" 0o1")||!M("0b1")||M("+0x1"))){for(var z,E=function(t){var e=arguments.length<1?0:M(I(t)),o=this;return v(O,o)&&x((function(){C(o)}))?h(Object(e),o,E):e},A=n?_(M):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),T=0;A.length>T;T++)f(M,z=A[T])&&!f(E,z)&&k(E,z,w(M,z));E.prototype=O,O.constructor=E,d(r,S,E,{constructor:!0})}},349:function(t,e,o){var n=o(4);t.exports=n(1..valueOf)},350:function(t,e,o){var n=o(4),r=o(30),l=o(14),c=o(351),d=n("".replace),f="["+c+"]",h=RegExp("^"+f+f+"*"),v=RegExp(f+f+"*$"),m=function(t){return function(e){var o=l(r(e));return 1&t&&(o=d(o,h,"")),2&t&&(o=d(o,v,"")),o}};t.exports={start:m(1),end:m(2),trim:m(3)}},351:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},352:function(t,e,o){"use strict";o(339)},353:function(t,e,o){var n=o(87)(!1);n.push([t.i,".song-outer[data-v-e930df5c]{height:50px;display:flex;align-items:center;cursor:pointer}.song-outer[data-v-e930df5c]:hover{background-color:#222}.song-outer.-active[data-v-e930df5c]{background-color:#333}.song-outer .song_thumb[data-v-e930df5c]{width:70px;padding:2px 10px}.song-outer .song_thumb img[data-v-e930df5c]{border:1px solid #999;display:block;position:unset}.song-outer .song_playing[data-v-e930df5c]{margin:auto 10px auto -59px;width:48px;height:27px;padding:5px;background-color:#000;opacity:.7}.song-outer .song_playing .playing-image[data-v-e930df5c]{height:100%;background-image:url(https://inuinouta.s3.ap-northeast-1.amazonaws.com/images/equalizer.svg);background-size:cover}.song-outer .song_playing .pausing-image[data-v-e930df5c]{height:100%;color:#fff;display:-webkit-box}.song-outer .song_playing .pausing-image i[data-v-e930df5c]{display:block;margin:auto}.song-outer .song_info[data-v-e930df5c]{padding-left:5px;width:calc(100% - 150px)}.song-outer .song_info a[data-v-e930df5c]{display:block}.song-outer .song_title[data-v-e930df5c]{flex:auto;font-size:.9rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:#dfdfdf}.song-outer .song_artist[data-v-e930df5c]{flex:auto;font-size:.7rem;color:#999}.song-outer .song_add[data-v-e930df5c]{flex:auto;width:40px}.song-outer .song_add .fa-plus[data-v-e930df5c]{color:#dfdfdf}.song-outer .song_menu[data-v-e930df5c]{flex:auto;width:40px}.song-outer .song_menu .fa-ellipsis-h[data-v-e930df5c]{color:#dfdfdf}",""]),t.exports=n},354:function(t,e,o){var content=o(373);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(88).default)("3b155969",content,!0,{sourceMap:!1})},355:function(t,e,o){"use strict";o(340)},356:function(t,e,o){var n=o(87)(!1);n.push([t.i,".subcontrol[data-v-23a1ddc4]{display:flex;align-items:center;padding:0 10px;height:50px;background-color:#333}.icon[data-v-23a1ddc4]{font-size:1.5em;color:#666;width:2em}.icon .-active[data-v-23a1ddc4]{color:#ddd}.subcontrol-enter[data-v-23a1ddc4],.subcontrol-leave-to[data-v-23a1ddc4]{transform:translateY(100%)}.subcontrol-enter-active[data-v-23a1ddc4]{transition:all .3s ease}.subcontrol-leave-active[data-v-23a1ddc4]{transition:all .3s cubic-bezier(1,.5,.8,1)}",""]),t.exports=n},357:function(t,e,o){var content=o(375);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(88).default)("26e58517",content,!0,{sourceMap:!1})},358:function(t,e,o){"use strict";o(341)},359:function(t,e,o){var n=o(87)(!1);n.push([t.i,".seekbar[data-v-66ec0193]{padding-top:12px;height:10px}.seekbar[data-v-66ec0193],.seekbar input[data-v-66ec0193]{width:100%;border-radius:5px}.seekbar input[data-v-66ec0193]{outline:none;transition:background-color .2s ease}",""]),t.exports=n},360:function(t,e,o){var content=o(377);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(88).default)("53336169",content,!0,{sourceMap:!1})},361:function(t,e,o){"use strict";o(342)},362:function(t,e,o){var n=o(87)(!1);n.push([t.i,".modal[data-v-b9dfda10]{display:flex;justify-content:center;align-items:center;position:fixed;z-index:1000;top:0;left:0;width:100%;height:100%}.modal-background[data-v-b9dfda10]{background-color:rgba(0,0,0,.5);width:100%;height:100%}.modal-box[data-v-b9dfda10]{max-width:600px;height:100%;margin:auto;position:relative}.box[data-v-b9dfda10]{position:absolute;bottom:100px;right:20px;width:auto;height:auto;background-color:rgba(0,0,0,.9);border:2px solid #ccc}",""]),t.exports=n},363:function(t,e,o){var content=o(379);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(88).default)("003d6ad3",content,!0,{sourceMap:!1})},364:function(t,e,o){"use strict";o.r(e);o(32);var n={props:{name:{type:String,require:!0},label:{type:String,require:!0}},methods:{click:function(t){t.target.scrollIntoView({behavior:"smooth",block:"end",inline:"center"}),this.$emit("click")}},computed:{classActive:function(){if(this.name===this.$store.getters["global/activeNav"])return"-active"}}},r=(o(345),o(56)),component=Object(r.a)(n,(function(){var t=this;return(0,t._self._c)("button",{staticClass:"nav-button",class:t.classActive,on:{click:function(e){return t.click(e)}}},[t._v("\n  "+t._s(t.label)+"\n")])}),[],!1,null,"53f72f46",null);e.default=component.exports},365:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{isRepeat:!1,repeatOnce:!1}},computed:{repeatMode:function(){return this.$store.getters["controller/repeat_mode"]},isShuffle:function(){return this.$store.getters["controller/shuffle"]},repeatIconClass:function(){var t={"-active":this.isRepeat};return this.repeatOnce?(t["fa-repeat"]=!1,t["fa-repeat-1"]=!0):(t["fa-repeat"]=!0,t["fa-repeat-1"]=!1),t}},methods:{clickRepeat:function(){this.changeRepeatMode()},changeRepeatMode:function(){var t=this.$store.getters["controller/repeat_mode"];switch(console.log(t),t){case"off":this.$store.commit("controller/setRepeatMode","all"),this.repeatOnce=!1,this.isRepeat=!0;break;case"all":this.$store.commit("controller/setRepeatMode","once"),this.repeatOnce=!0,this.isRepeat=!0;break;case"once":this.$store.commit("controller/setRepeatMode","off"),this.repeatOnce=!1,this.isRepeat=!1}},changeRepeatIcon:function(){this.repeatOnce=!this.repeatOnce},clickShuffle:function(){this.$store.commit("controller/setShuffle",!this.isShuffle),this.isShuffle?(this.$playlist.setShuffled(),this.$emit("shuffle-on")):this.$emit("shuffle-off")},clickScroll:function(){this.$utils.scrollToPlayingSong()}}},r=(o(355),o(56)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"subcontrol"},[e("span",{staticClass:"icon",on:{click:t.clickRepeat}},[e("li",{staticClass:"fa-regular",class:t.repeatIconClass})]),t._v(" "),e("span",{staticClass:"icon",on:{click:t.clickShuffle}},[e("li",{staticClass:"fa-regular fa-shuffle",class:t.isShuffle?"-active":""})]),t._v(" "),e("span",{staticClass:"icon",on:{click:t.clickScroll}},[e("li",{staticClass:"fa-regular fa-arrows-to-dot -active"})])])}),[],!1,null,"23a1ddc4",null);e.default=component.exports},366:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{refresh:!0,song:null}},computed:{playingSong:function(){return this.$store.getters["controller/playing"]},playTime:function(){return this.$store.getters["controller/playTime"]}},watch:{playTime:function(t){if(this.refresh){var e=this.$store.getters["controller/playing"];if(e){var o=t-e.start_at,n=o/(e.end_at-e.start_at)*1e3;this.$refs.seekbar.value=n}}},playingSong:function(t,e){t&&e&&(this.$refs.seekbar.value=0,this.refresh=!0)}},methods:{seek:function(){console.error("seek",this.$refs.seekbar.value),this.$emit("seek",this.$refs.seekbar.value)},mousedown:function(){this.refresh=!1},mouseup:function(){this.setPlayTime(),this.refresh=!0},setPlayTime:function(){var t=this.$store.getters["controller/playing"];if(t&&(this.song=t),this.song){var e=this.song.end_at-this.song.start_at,o=this.$refs.seekbar.value/1e3,n=this.song.start_at+e*o;this.$store.getters["controller/player"].seekTo(n)}}}},r=(o(358),o(56)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"seekbar",on:{mousedown:function(e){return t.mousedown()},mouseup:function(e){return t.mouseup()},touchstart:function(e){return t.mousedown()},touchend:function(e){return t.mouseup()}}},[e("input",{ref:"seekbar",attrs:{type:"range",min:"0",max:"1000",step:"1",value:"0"},on:{input:t.seek}})])}),[],!1,null,"66ec0193",null);e.default=component.exports},367:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{isShow:!0}},methods:{close:function(){console.error("close"),this.$emit("close")}}},r=(o(361),o(56)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"modal"},[e("div",{staticClass:"modal-background",on:{click:function(e){return e.target!==e.currentTarget?null:t.close.apply(null,arguments)}}},[e("div",{staticClass:"modal-box",on:{click:function(e){return e.target!==e.currentTarget?null:t.close.apply(null,arguments)}}},[e("div",{staticClass:"box"},[t._t("default")],2)])])])}),[],!1,null,"b9dfda10",null);e.default=component.exports},370:function(t,e,o){"use strict";o(347)},371:function(t,e,o){var n=o(87)(!1);n.push([t.i,".submenu{position:fixed;display:flex;height:40px;width:100%;max-width:600px;top:0;right:0;bottom:0;left:0;margin:45px auto;padding:5px;background-color:#000;white-space:nowrap;overflow:hidden;-webkit-overflow-scrolling:touch;z-index:2}",""]),t.exports=n},372:function(t,e,o){"use strict";o(354)},373:function(t,e,o){var n=o(87)(!1);n.push([t.i,".playlist[data-v-26c14758]{background-color:#000;padding-bottom:90px}",""]),t.exports=n},374:function(t,e,o){"use strict";o(357)},375:function(t,e,o){var n=o(87)(!1);n.push([t.i,".seekbar-wrapper[data-v-451aa929]{bottom:90px;z-index:3}.control-wrapper[data-v-451aa929],.seekbar-wrapper[data-v-451aa929]{position:fixed;width:100%;max-width:600px}.control-wrapper[data-v-451aa929]{bottom:0;z-index:2}.control[data-v-451aa929]{background-color:#1e1e1e;border-top:1px solid #999;display:flex;padding:5px 10px 15px 3px;width:100%;height:80px}.control .control-left[data-v-451aa929]{flex:1;min-width:220px;display:flex;position:relative}.control .control-left .please-tap-here[data-v-451aa929]{position:absolute;display:flex;justify-content:center;height:100%;width:100%}.control .control-left .please-tap-here .icon[data-v-451aa929]{font-size:1.3em;color:#555;margin-top:-5px}.control .control-left .song_thumb[data-v-451aa929]{display:flex;align-items:center;width:70px;min-width:70px;padding:3px 8px;z-index:1}.control .control-left .song_thumb img[data-v-451aa929]{top:auto;bottom:auto;border:1px solid #999;display:block;position:unset}@media(max-width:370px){.control .control-left .song_thumb[data-v-451aa929]{display:none}}.control .control-left .song_info[data-v-451aa929]{display:flex;align-items:center;z-index:1;min-width:100px;padding-left:5px;padding-right:5px}.control .control-left .song_info_inner[data-v-451aa929]{flex:auto;width:100%}.control .control-left .song_title[data-v-451aa929]{font-size:.9rem;color:#dfdfdf}.control .control-left .song_artist[data-v-451aa929],.control .control-left .song_title[data-v-451aa929]{width:100%;text-align:left;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.control .control-left .song_artist[data-v-451aa929]{font-size:.8rem;color:#999}@media(max-width:370px){.control .control-left[data-v-451aa929]{min-width:170px}}.control .control-middle[data-v-451aa929]{flex:none;display:flex;align-items:center}.control .control-middle .icon[data-v-451aa929]{color:#ccc;font-size:1.8em;height:2rem;width:3rem}.control .control-right[data-v-451aa929]{flex:auto;min-width:0}",""]),t.exports=n},376:function(t,e,o){"use strict";o(360)},377:function(t,e,o){var n=o(87)(!1);n.push([t.i,".control-line[data-v-420a1fc7]{display:flex;align-items:center;height:40px;font-size:.9em;color:#ddd;cursor:pointer}.control-line[data-v-420a1fc7]:last-child{border-bottom:none}.icon[data-v-420a1fc7]{font-size:1.5em;color:#666;width:2em}.icon .-active[data-v-420a1fc7]{color:#ddd}",""]),t.exports=n},378:function(t,e,o){"use strict";o(363)},379:function(t,e,o){var n=o(87)(!1);n.push([t.i,".switch-background[data-v-1d49adbc]{position:fixed;width:100%;height:100%;top:0;left:0;pointer-events:none}.switch-area[data-v-1d49adbc]{position:relative;height:100%;max-width:600px;margin:auto}.switch-box[data-v-1d49adbc]{right:20px;bottom:100px;position:absolute}.search-box[data-v-1d49adbc]{right:80px;bottom:105px;position:absolute;pointer-events:auto}.search-box input[data-v-1d49adbc]{border:none;border-radius:20px;font-size:1.3em;padding:5px 15px;background-color:hsla(0,0%,100%,.85)}.icon-outer[data-v-1d49adbc]{margin-top:10px}.icon[data-v-1d49adbc]{font-size:1.5em;color:#000;width:2em;height:2em;background-color:hsla(0,0%,100%,.7);border-radius:50%;pointer-events:auto;cursor:pointer}.icon .-active[data-v-1d49adbc]{color:#ddd}.fade-enter-active[data-v-1d49adbc],.fade-leave-active[data-v-1d49adbc]{transition:opacity .5s ease}.fade-enter-from[data-v-1d49adbc],.fade-leave-to[data-v-1d49adbc]{opacity:0}",""]),t.exports=n},380:function(t,e,o){"use strict";o.r(e);var n={components:{NavButton:o(364).default},methods:{clickNav:function(t){this.$store.commit("global/setActiveNav",t),this.$emit("click-nav",t)}}},r=(o(370),o(56)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"submenu"},[e("nav-button",{attrs:{name:"default",label:"全ての楽曲"},on:{click:function(e){return t.clickNav("default")}}}),t._v(" "),e("nav-button",{attrs:{name:"original",label:"オリジナル曲"},on:{click:function(e){return t.clickNav("original")}}}),t._v(" "),e("nav-button",{attrs:{name:"video",label:"歌動画"},on:{click:function(e){return t.clickNav("video")}}})],1)])}),[],!1,null,null,null);e.default=component.exports},381:function(t,e,o){"use strict";o.r(e);var n={components:{SongRow:o(343).default},props:{playlist:{required:!0}}},r=(o(372),o(56)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return t.playlist?e("div",{staticClass:"playlist"},[e("ul",t._l(t.playlist.list,(function(t,o){return e("li",{key:t},[e("song-row",{attrs:{song_id:t,position:o}})],1)})),0)]):t._e()}),[],!1,null,"26c14758",null);e.default=component.exports;installComponents(component,{SongRow:o(343).default})},382:function(t,e,o){"use strict";o.r(e);var n={components:{SubControl:o(365).default},computed:{song:function(){return this.$store.getters["controller/playing"]||this.$store.getters["controller/pausing"]},video:function(){return this.$store.getters["contents/videos"].get(this.song.video)},playing:function(){return this.$store.getters["controller/playing"]}},methods:{clickPrev:function(){this.$emit("prev")},clickPlayOrPause:function(){this.$emit("play-or-pause")},clickNext:function(){this.$emit("next")}}},r=(o(374),o(56)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"control-wrapper"},[e("div",{staticClass:"seekbar-wrapper"},[e("seek-bar")],1),t._v(" "),t.song?e("div",{staticClass:"control"},[e("div",{staticClass:"control-left"},[e("div",{staticClass:"song_thumb"},[e("img",{attrs:{src:t.video.thumbnail_path}})]),t._v(" "),e("div",{staticClass:"song_info"},[e("div",{staticClass:"song_info_inner"},[e("div",{staticClass:"song_title"},[t._v(t._s(t.song.title))]),t._v(" "),e("div",{staticClass:"song_artist"},[t._v(t._s(t.song.artist))])])])]),t._v(" "),e("div",{staticClass:"control-middle"},[e("span",{staticClass:"icon",on:{click:t.clickPrev}},[e("li",{staticClass:"fa-thin fa-backward-step"})]),t._v(" "),e("span",{staticClass:"icon",on:{click:t.clickPlayOrPause}},[t.playing?e("li",{staticClass:"fa-thin fa-pause"}):e("li",{staticClass:"fa-thin fa-play"})]),t._v(" "),e("span",{staticClass:"icon",on:{click:t.clickNext}},[e("li",{staticClass:"fa-thin fa-forward-step"})])]),t._v(" "),e("div",{staticClass:"control-right"})]):t._e()])}),[],!1,null,"451aa929",null);e.default=component.exports;installComponents(component,{SeekBar:o(366).default})},383:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{isRepeat:!1,repeatOnce:!1}},computed:{repeatMode:function(){return this.$store.getters["controller/repeat_mode"]},isShuffle:function(){return this.$store.getters["controller/shuffle"]},repeatIconClass:function(){var t={"-active":this.isRepeat};return this.repeatOnce?(t["fa-repeat"]=!1,t["fa-repeat-1"]=!0):(t["fa-repeat"]=!0,t["fa-repeat-1"]=!1),t}},methods:{close:function(){this.isShow=!1},clickRepeat:function(){this.changeRepeatMode()},changeRepeatMode:function(){var t=this.$store.getters["controller/repeat_mode"];switch(console.log(t),t){case"off":this.$store.commit("controller/setRepeatMode","all"),this.repeatOnce=!1,this.isRepeat=!0;break;case"all":this.$store.commit("controller/setRepeatMode","once"),this.repeatOnce=!0,this.isRepeat=!0;break;case"once":this.$store.commit("controller/setRepeatMode","off"),this.repeatOnce=!1,this.isRepeat=!1}},changeRepeatIcon:function(){this.repeatOnce=!this.repeatOnce},clickShuffle:function(){this.$store.commit("controller/setShuffle",!this.isShuffle),this.isShuffle?(this.$playlist.setShuffled(),this.$emit("shuffle-on")):this.$emit("shuffle-off")},clickScroll:function(){this.$utils.scrollToPlayingSong()}}},r=(o(376),o(56)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("modal-base",{on:{close:function(e){return t.$emit("close")}}},[e("div",{staticClass:"control-line",on:{click:t.clickRepeat}},[e("span",{staticClass:"icon"},[e("li",{staticClass:"fa-regular",class:t.repeatIconClass})]),t._v("リピート再生\n  ")]),t._v(" "),e("div",{staticClass:"control-line",on:{click:t.clickShuffle}},[e("span",{staticClass:"icon"},[e("li",{staticClass:"fa-regular fa-shuffle",class:t.isShuffle?"-active":""})]),t._v("ランダム再生\n  ")]),t._v(" "),e("div",{staticClass:"control-line",on:{click:t.clickScroll}},[e("span",{staticClass:"icon"},[e("li",{staticClass:"fa-regular fa-arrows-to-dot -active"})]),t._v("再生中の曲までスクロール\n  ")])])}),[],!1,null,"420a1fc7",null);e.default=component.exports;installComponents(component,{ModalBase:o(367).default})},385:function(t,e,o){var content=o(392);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(88).default)("2f5a89ce",content,!0,{sourceMap:!1})},388:function(t,e,o){"use strict";o.r(e);var n=o(10),r=(o(50),{data:function(){return{displaySearchBox:!1,keyword:""}},methods:{clickSetting:function(){this.$emit("click-setting")},switchSearchBox:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.displaySearchBox=!t.displaySearchBox,e.next=3,t.$nextTick();case 3:t.displaySearchBox?t.$refs.keyword.focus():t.$refs.keyword.blur();case 4:case"end":return e.stop()}}),e)})))()},onEnter:function(){this.$refs.keyword.blur()}},watch:{keyword:function(){this.$emit("search",this.keyword)}}}),l=(o(378),o(56)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"switch-background"},[e("div",{staticClass:"switch-area"},[e("div",{staticClass:"switch-box"},[e("div",{staticClass:"icon-outer"},[e("span",{staticClass:"icon",on:{click:t.clickSetting}},[e("li",{staticClass:"fa-regular fa-gear"})])]),t._v(" "),e("div",{staticClass:"icon-outer"},[e("span",{staticClass:"icon",on:{click:t.switchSearchBox}},[e("li",{staticClass:"fa-regular fa-magnifying-glass"})])])]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.displaySearchBox,expression:"displaySearchBox"}],staticClass:"search-box"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],ref:"keyword",attrs:{type:"text",placeholder:"曲名・アーティスト名",enterkeyhint:"done"},domProps:{value:t.keyword},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onEnter.apply(null,arguments)},input:function(e){e.target.composing||(t.keyword=e.target.value)}}})])])],1)])}),[],!1,null,"1d49adbc",null);e.default=component.exports},391:function(t,e,o){"use strict";o(385)},392:function(t,e,o){var n=o(87)(!1);n.push([t.i,".body[data-v-619ca977]{padding-top:45px;max-width:600px;margin:0 auto;position:relative}.contents[data-v-619ca977]{margin-top:40px}.playarea[data-v-619ca977]{position:-webkit-sticky;position:sticky;max-width:800px;top:0;right:0;bottom:0;left:0;top:85px;margin:0 auto;z-index:1}.player-enter[data-v-619ca977],.player-leave-to[data-v-619ca977]{transform:translateY(-100%) translateY(30px)}.player-enter-active[data-v-619ca977]{transition:all .5s ease}.player-leave-active[data-v-619ca977]{transition:all .5s cubic-bezier(1,.5,.8,1)}.show-hide[data-v-619ca977]{height:30px;background-color:#252525;padding-bottom:5px;text-align:center;color:#dbdbdb;cursor:pointer}.yt-container[data-v-619ca977]{background-color:#000;margin-bottom:-6px}.yt-container[data-v-619ca977],.yt-container iframe[data-v-619ca977]{aspect-ratio:16/9}",""]),t.exports=n},395:function(t,e,o){"use strict";o.r(e);o(51),o(13),o(52),o(31),o(72),o(42),o(73),o(38),o(32),o(39),o(28),o(25),o(40),o(41),o(29);var n=o(36),r=(o(71),o(92),o(93),o(380)),l=o(381),c=o(382);o(383);function d(t,e){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,c=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return l=t.done,t},e:function(t){c=!0,r=t},f:function(){try{l||null==o.return||o.return()}finally{if(c)throw r}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var v={components:{NavigationMenu:r.default,SongList:l.default,Control:c.default},data:function(){return{displayVideo:!0,displayShowHide:!1,displayControlModal:!1,playlist:null,keyword:""}},computed:{player:function(){return this.$refs.youtube.player},playerSize:function(){return{width:"100%",height:"100%"}},playerVars:function(){return{autoplay:0,controls:1,playsinline:1}},showHideMark:function(){return this.displayVideo?"▲":"▼"},filteredList:function(){var t=this.keyword.toLowerCase(),e=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.playlist);if(!t)return this.playlist;var o,r=this.$store.getters["contents/songs"],l=[],c=d(this.playlist.list);try{for(c.s();!(o=c.n()).done;){var f=o.value,v=r.get(f);(v.title.toLowerCase().includes(t)||v.artist.toLowerCase().includes(t))&&l.push(f)}}catch(t){c.e(t)}finally{c.f()}return e.list=l,e}},methods:{filter:function(t){console.log("filter",t),this.keyword=t},switchControlModal:function(){console.error("switchControlModal"),this.displayControlModal=!this.displayControlModal},showHideVideo:function(){this.displayVideo=!this.displayVideo,this.$store.commit("global/switchVideoArea")},switchDisplayShowHide:function(){this.displayShowHide=!this.displayShowHide},playOrPause:function(){var t=this.$store.getters["controller/playing"]||this.$store.getters["controller/pausing"];if(t){var e=this.$store.getters["playlist/position"];this.$controller.play_or_pause(t,e)}else{var o=this.playlist.list[0];this.$controller.play_or_pause(this.$store.getters["contents/songs"].get(o),0)}},changePlaylist:function(t){var e=this.$store.getters["playlist/"+t];this.playlist=e,this.$store.commit("playlist/setPlaying",e),this.$store.commit("controller/setShuffle",!1)},shufflePlaylist:function(){var t=this.$store.getters["playlist/shuffled"];this.$store.commit("playlist/setPlaying",t)},restorePlaylist:function(){var t=this.$store.getters["global/activeNav"];this.changePlaylist(t);var e=this.$store.getters["controller/playing"];e&&this.$store.commit("playlist/setPositionById",e.id)},syncPlaying:function(){if(this.$store.getters["controller/state_changed"])this.$store.commit("controller/setStateChanged",!1);else{var t=this.$store.getters["controller/pausing"];if(t){var e=this.$store.getters["contents/songs"].get(t.id);this.$store.commit("controller/setPlaying",e),this.$store.commit("controller/setPausing",null)}}},syncPaused:function(){if(this.$store.getters["controller/state_changed"])this.$store.commit("controller/setStateChanged",!1);else{var t=this.$store.getters["controller/playing"];if(t){var e=this.$store.getters["contents/songs"].get(t.id);this.$store.commit("controller/setPlaying",null),this.$store.commit("controller/setPausing",e)}}}},mounted:function(){var t=this;this.$store.commit("controller/setPlayer",this.$refs.youtube.player),this.playlist=this.$store.getters["playlist/default"];var e=this.playlist.list[0],o=this.$store.getters["contents/songs"].get(e);this.$store.commit("controller/setPausing",o),this.$nuxt.$on("click-song",(function(e,o){t.$controller.play_or_pause(e,o)})),setInterval(this.$controller.autoJump,1e3),setInterval(this.$controller.setPlaytime,1e3)}},m=v,y=(o(391),o(56)),component=Object(y.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"body"},[e("navigation-menu",{on:{"click-nav":t.changePlaylist}}),t._v(" "),e("div",{staticClass:"contents"},[e("control-switch",{on:{"click-setting":t.switchControlModal,search:t.filter}}),t._v(" "),e("div",{staticClass:"playarea"},[e("transition",{attrs:{name:"player"},on:{enter:t.switchDisplayShowHide,"after-leave":t.switchDisplayShowHide}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.displayVideo,expression:"displayVideo"}]},[e("div",{staticClass:"yt-container"},[e("youtube",{ref:"youtube",attrs:{"player-vars":t.playerVars,width:t.playerSize.width,height:t.playerSize.height,"video-id":t.$init_video.id},on:{playing:t.syncPlaying,paused:t.syncPaused}})],1),t._v(" "),e("div",{staticClass:"show-hide",attrs:{id:"show-hide-bar-open"},on:{click:t.showHideVideo}},[e("span",[t._v(t._s(t.showHideMark))])])])]),t._v(" "),t.displayShowHide?e("div",{staticClass:"show-hide",attrs:{id:"show-hide-bar-close"},on:{click:t.showHideVideo}},[e("span",[t._v(t._s(t.showHideMark))])]):t._e()],1),t._v(" "),e("div",{staticClass:"listarea"},[e("song-list",{attrs:{playlist:t.filteredList}})],1),t._v(" "),e("Control",{on:{prev:t.$controller.prev,"play-or-pause":t.playOrPause,next:t.$controller.next,"shuffle-on":t.shufflePlaylist,"shuffle-off":t.restorePlaylist}})],1),t._v(" "),e("control-modal",{directives:[{name:"show",rawName:"v-show",value:t.displayControlModal,expression:"displayControlModal"}],on:{close:t.switchControlModal,"shuffle-on":t.shufflePlaylist,"shuffle-off":t.restorePlaylist}})],1)}),[],!1,null,"619ca977",null);e.default=component.exports;installComponents(component,{NavigationMenu:o(380).default,ControlSwitch:o(388).default,SongList:o(381).default,Control:o(382).default,ControlModal:o(383).default})}}]);