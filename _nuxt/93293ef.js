(window.webpackJsonp=window.webpackJsonp||[]).push([[0,3,4,5,7,8,9,12,13,14],{338:function(t,e,o){var content=o(345);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(88).default)("13fd5279",content,!0,{sourceMap:!1})},339:function(t,e,o){var content=o(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(88).default)("de520694",content,!0,{sourceMap:!1})},340:function(t,e,o){var content=o(355);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(88).default)("4d8fd59a",content,!0,{sourceMap:!1})},341:function(t,e,o){var content=o(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(88).default)("26d56454",content,!0,{sourceMap:!1})},342:function(t,e,o){"use strict";o.r(e);o(347),o(14),o(29),o(30),o(214),o(91);var n={props:{song_id:{type:Number,required:!0},position:{type:Number,required:!0}},data:function(){return{song:null}},computed:{isSelected:function(){return this.isPlaying||this.isPausing},isPlaying:function(){return this.song===this.$store.getters["controller/playing"]},isPausing:function(){return this.song===this.$store.getters["controller/pausing"]},video:function(){return this.$store.getters["contents/videos"].get(this.song.video)},youtubeUrl:function(){var t=new URLSearchParams;return t.append("v",this.song.video),t.append("t",this.song.start_at),"https://youtube.com/watch?"+t.toString()}},methods:{clickSong:function(){this.$nuxt.$emit("click-song",this.song,this.position)},clickAdd:function(){console.log("add")},clickMenu:function(){console.log("menu")}},mounted:function(){this.song=this.$store.getters["contents/songs"].get(this.song_id)}},l=(o(351),o(56)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return t.song?e("div",[e("div",{staticClass:"song-outer",class:t.isSelected?"-active":"",attrs:{id:"song-row-"+t.song.id}},[e("div",{staticClass:"song_thumb",on:{click:t.clickSong}},[e("img",{attrs:{src:t.video.thumbnail_path}})]),t._v(" "),t.isPlaying?e("div",{staticClass:"song_playing"},[e("div",{staticClass:"playing-image"})]):t._e(),t._v(" "),t.isPausing?e("div",{staticClass:"song_playing"},[t._m(0)]):t._e(),t._v(" "),e("div",{staticClass:"song_info",on:{click:t.clickSong}},[e("a",{attrs:{href:t.youtubeUrl},on:{click:function(t){t.preventDefault()}}},[e("div",{staticClass:"song_title"},[t._v(t._s(t.song.title))]),t._v(" "),e("div",{staticClass:"song_artist"},[t._v(t._s(t.song.artist))])])]),t._v(" "),e("div",{staticClass:"song_add"},[e("span",{staticClass:"icon",on:{click:t.clickAdd}},[e("li",{staticClass:"far fa-plus"})])]),t._v(" "),e("div",{staticClass:"song_menu"},[e("span",{staticClass:"icon",on:{click:t.clickMenu}},[e("li",{staticClass:"far fa-ellipsis-h"})])])])]):t._e()}),[function(){var t=this._self._c;return t("div",{staticClass:"pausing-image"},[t("i",{staticClass:"fa-solid fa-pause"})])}],!1,null,"e930df5c",null);e.default=component.exports},344:function(t,e,o){"use strict";o(338)},345:function(t,e,o){var n=o(87)(!1);n.push([t.i,'.nav-button[data-v-53f72f46]{padding:5px 10px;margin:0 5px;font-size:.8rem;font-family:"Kosugi Maru",sans-serif;color:#8f8f8f;background-color:unset;border:none;border-bottom:5px solid #000;transition:.8s;cursor:pointer}.-active[data-v-53f72f46]{color:#dfdfdf;border-bottom:5px solid #9d3757;transition:.8s}',""]),t.exports=n},346:function(t,e,o){var content=o(367);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(88).default)("c72ab26c",content,!0,{sourceMap:!1})},347:function(t,e,o){"use strict";var n=o(11),l=o(6),r=o(4),c=o(90),d=o(17),f=o(12),h=o(154),v=o(49),m=o(89),y=o(213),_=o(3),x=o(70).f,w=o(46).f,k=o(16).f,C=o(348),$=o(349).trim,S="Number",M=l.Number,P=M.prototype,N=l.TypeError,R=r("".slice),O=r("".charCodeAt),I=function(t){var e=y(t,"number");return"bigint"==typeof e?e:z(e)},z=function(t){var e,o,n,l,r,c,d,code,f=y(t,"number");if(m(f))throw N("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=$(f),43===(e=O(f,0))||45===e){if(88===(o=O(f,2))||120===o)return NaN}else if(48===e){switch(O(f,1)){case 66:case 98:n=2,l=49;break;case 79:case 111:n=8,l=55;break;default:return+f}for(c=(r=R(f,2)).length,d=0;d<c;d++)if((code=O(r,d))<48||code>l)return NaN;return parseInt(r,n)}return+f};if(c(S,!M(" 0o1")||!M("0b1")||M("+0x1"))){for(var V,E=function(t){var e=arguments.length<1?0:M(I(t)),o=this;return v(P,o)&&_((function(){C(o)}))?h(Object(e),o,E):e},A=n?x(M):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),j=0;A.length>j;j++)f(M,V=A[j])&&!f(E,V)&&k(E,V,w(M,V));E.prototype=P,P.constructor=E,d(l,S,E,{constructor:!0})}},348:function(t,e,o){var n=o(4);t.exports=n(1..valueOf)},349:function(t,e,o){var n=o(4),l=o(28),r=o(13),c=o(350),d=n("".replace),f="["+c+"]",h=RegExp("^"+f+f+"*"),v=RegExp(f+f+"*$"),m=function(t){return function(e){var o=r(l(e));return 1&t&&(o=d(o,h,"")),2&t&&(o=d(o,v,"")),o}};t.exports={start:m(1),end:m(2),trim:m(3)}},350:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},351:function(t,e,o){"use strict";o(339)},352:function(t,e,o){var n=o(87)(!1);n.push([t.i,".song-outer[data-v-e930df5c]{height:50px;display:flex;align-items:center;cursor:pointer}.song-outer[data-v-e930df5c]:hover{background-color:#222}.song-outer.-active[data-v-e930df5c]{background-color:#333}.song-outer .song_thumb[data-v-e930df5c]{width:70px;padding:2px 10px}.song-outer .song_thumb img[data-v-e930df5c]{border:1px solid #999;display:block;position:unset}.song-outer .song_playing[data-v-e930df5c]{margin:auto 10px auto -59px;width:48px;height:27px;padding:5px;background-color:#000;opacity:.7}.song-outer .song_playing .playing-image[data-v-e930df5c]{height:100%;background-image:url(https://inuinouta.s3.ap-northeast-1.amazonaws.com/images/equalizer.svg);background-size:cover}.song-outer .song_playing .pausing-image[data-v-e930df5c]{height:100%;color:#fff;display:-webkit-box}.song-outer .song_playing .pausing-image i[data-v-e930df5c]{display:block;margin:auto}.song-outer .song_info[data-v-e930df5c]{padding-left:5px;width:calc(100% - 150px)}.song-outer .song_info a[data-v-e930df5c]{display:block}.song-outer .song_title[data-v-e930df5c]{flex:auto;font-size:.9rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:#dfdfdf}.song-outer .song_artist[data-v-e930df5c]{flex:auto;font-size:.7rem;color:#999}.song-outer .song_add[data-v-e930df5c]{flex:auto;width:40px}.song-outer .song_add .fa-plus[data-v-e930df5c]{color:#dfdfdf}.song-outer .song_menu[data-v-e930df5c]{flex:auto;width:40px}.song-outer .song_menu .fa-ellipsis-h[data-v-e930df5c]{color:#dfdfdf}",""]),t.exports=n},353:function(t,e,o){var content=o(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(88).default)("3b155969",content,!0,{sourceMap:!1})},354:function(t,e,o){"use strict";o(340)},355:function(t,e,o){var n=o(87)(!1);n.push([t.i,".subcontrol[data-v-23a1ddc4]{display:flex;align-items:center;padding:0 10px;height:50px;background-color:#333}.icon[data-v-23a1ddc4]{font-size:1.5em;color:#666;width:2em}.icon .-active[data-v-23a1ddc4]{color:#ddd}.subcontrol-enter[data-v-23a1ddc4],.subcontrol-leave-to[data-v-23a1ddc4]{transform:translateY(100%)}.subcontrol-enter-active[data-v-23a1ddc4]{transition:all .3s ease}.subcontrol-leave-active[data-v-23a1ddc4]{transition:all .3s cubic-bezier(1,.5,.8,1)}",""]),t.exports=n},356:function(t,e,o){var content=o(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(88).default)("b37ce4ee",content,!0,{sourceMap:!1})},357:function(t,e,o){var content=o(373);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(88).default)("53336169",content,!0,{sourceMap:!1})},358:function(t,e,o){"use strict";o(341)},359:function(t,e,o){var n=o(87)(!1);n.push([t.i,".modal[data-v-b9dfda10]{display:flex;justify-content:center;align-items:center;position:fixed;z-index:1000;top:0;left:0;width:100%;height:100%}.modal-background[data-v-b9dfda10]{background-color:rgba(0,0,0,.5);width:100%;height:100%}.modal-box[data-v-b9dfda10]{max-width:600px;height:100%;margin:auto;position:relative}.box[data-v-b9dfda10]{position:absolute;bottom:100px;right:20px;width:auto;height:auto;background-color:rgba(0,0,0,.9);border:2px solid #ccc}",""]),t.exports=n},360:function(t,e,o){var content=o(375);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(88).default)("0f621a89",content,!0,{sourceMap:!1})},361:function(t,e,o){"use strict";o.r(e);o(32);var n={props:{name:{type:String,require:!0},label:{type:String,require:!0}},methods:{click:function(t){t.target.scrollIntoView({behavior:"smooth",block:"end",inline:"center"}),this.$emit("click")}},computed:{classActive:function(){if(this.name===this.$store.getters["global/activeNav"])return"-active"}}},l=(o(344),o(56)),component=Object(l.a)(n,(function(){var t=this;return(0,t._self._c)("button",{staticClass:"nav-button",class:t.classActive,on:{click:function(e){return t.click(e)}}},[t._v("\n  "+t._s(t.label)+"\n")])}),[],!1,null,"53f72f46",null);e.default=component.exports},362:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{isRepeat:!1,repeatOnce:!1}},computed:{repeatMode:function(){return this.$store.getters["controller/repeat_mode"]},isShuffle:function(){return this.$store.getters["controller/shuffle"]},repeatIconClass:function(){var t={"-active":this.isRepeat};return this.repeatOnce?(t["fa-repeat"]=!1,t["fa-repeat-1"]=!0):(t["fa-repeat"]=!0,t["fa-repeat-1"]=!1),t}},methods:{clickRepeat:function(){this.changeRepeatMode()},changeRepeatMode:function(){var t=this.$store.getters["controller/repeat_mode"];switch(console.log(t),t){case"off":this.$store.commit("controller/setRepeatMode","all"),this.repeatOnce=!1,this.isRepeat=!0;break;case"all":this.$store.commit("controller/setRepeatMode","once"),this.repeatOnce=!0,this.isRepeat=!0;break;case"once":this.$store.commit("controller/setRepeatMode","off"),this.repeatOnce=!1,this.isRepeat=!1}},changeRepeatIcon:function(){this.repeatOnce=!this.repeatOnce},clickShuffle:function(){this.$store.commit("controller/setShuffle",!this.isShuffle),this.isShuffle?(this.$playlist.setShuffled(),this.$emit("shuffle-on")):this.$emit("shuffle-off")},clickScroll:function(){this.$utils.scrollToPlayingSong()}}},l=(o(354),o(56)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"subcontrol"},[e("span",{staticClass:"icon",on:{click:t.clickRepeat}},[e("li",{staticClass:"fa-regular",class:t.repeatIconClass})]),t._v(" "),e("span",{staticClass:"icon",on:{click:t.clickShuffle}},[e("li",{staticClass:"fa-regular fa-shuffle",class:t.isShuffle?"-active":""})]),t._v(" "),e("span",{staticClass:"icon",on:{click:t.clickScroll}},[e("li",{staticClass:"fa-regular fa-arrows-to-dot -active"})])])}),[],!1,null,"23a1ddc4",null);e.default=component.exports},363:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{isShow:!0}},methods:{close:function(){console.error("close"),this.$emit("close")}}},l=(o(358),o(56)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"modal"},[e("div",{staticClass:"modal-background",on:{click:function(e){return e.target!==e.currentTarget?null:t.close.apply(null,arguments)}}},[e("div",{staticClass:"modal-box",on:{click:function(e){return e.target!==e.currentTarget?null:t.close.apply(null,arguments)}}},[e("div",{staticClass:"box"},[t._t("default")],2)])])])}),[],!1,null,"b9dfda10",null);e.default=component.exports},366:function(t,e,o){"use strict";o(346)},367:function(t,e,o){var n=o(87)(!1);n.push([t.i,".submenu{position:fixed;display:flex;height:40px;width:100%;max-width:600px;top:0;right:0;bottom:0;left:0;margin:45px auto;padding:5px;background-color:#000;white-space:nowrap;overflow:hidden;-webkit-overflow-scrolling:touch;z-index:2}",""]),t.exports=n},368:function(t,e,o){"use strict";o(353)},369:function(t,e,o){var n=o(87)(!1);n.push([t.i,".playlist[data-v-26c14758]{background-color:#000;padding-bottom:90px}",""]),t.exports=n},370:function(t,e,o){"use strict";o(356)},371:function(t,e,o){var n=o(87)(!1);n.push([t.i,".control-wrapper[data-v-b62ad13a]{position:fixed;bottom:0;width:100%;max-width:600px;z-index:2}.control[data-v-b62ad13a]{background-color:#1e1e1e;border-top:1px solid #999;display:flex;padding:5px 10px 15px 3px;width:100%;height:80px}.control .control-left[data-v-b62ad13a]{flex:1;min-width:220px;display:flex;position:relative}.control .control-left .please-tap-here[data-v-b62ad13a]{position:absolute;display:flex;justify-content:center;height:100%;width:100%}.control .control-left .please-tap-here .icon[data-v-b62ad13a]{font-size:1.3em;color:#555;margin-top:-5px}.control .control-left .song_thumb[data-v-b62ad13a]{display:flex;align-items:center;width:70px;min-width:70px;padding:3px 8px;z-index:1}.control .control-left .song_thumb img[data-v-b62ad13a]{top:auto;bottom:auto;border:1px solid #999;display:block;position:unset}@media(max-width:370px){.control .control-left .song_thumb[data-v-b62ad13a]{display:none}}.control .control-left .song_info[data-v-b62ad13a]{display:flex;align-items:center;z-index:1;min-width:100px;padding-left:5px;padding-right:5px}.control .control-left .song_info_inner[data-v-b62ad13a]{flex:auto;width:100%}.control .control-left .song_title[data-v-b62ad13a]{font-size:.9rem;color:#dfdfdf}.control .control-left .song_artist[data-v-b62ad13a],.control .control-left .song_title[data-v-b62ad13a]{width:100%;text-align:left;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.control .control-left .song_artist[data-v-b62ad13a]{font-size:.8rem;color:#999}@media(max-width:370px){.control .control-left[data-v-b62ad13a]{min-width:170px}}.control .control-middle[data-v-b62ad13a]{flex:none;display:flex;align-items:center}.control .control-middle .icon[data-v-b62ad13a]{color:#ccc;font-size:1.8em;height:2rem;width:3rem}.control .control-right[data-v-b62ad13a]{flex:auto;min-width:0}",""]),t.exports=n},372:function(t,e,o){"use strict";o(357)},373:function(t,e,o){var n=o(87)(!1);n.push([t.i,".control-line[data-v-420a1fc7]{display:flex;align-items:center;height:40px;font-size:.9em;color:#ddd;cursor:pointer}.control-line[data-v-420a1fc7]:last-child{border-bottom:none}.icon[data-v-420a1fc7]{font-size:1.5em;color:#666;width:2em}.icon .-active[data-v-420a1fc7]{color:#ddd}",""]),t.exports=n},374:function(t,e,o){"use strict";o(360)},375:function(t,e,o){var n=o(87)(!1);n.push([t.i,".switch-background[data-v-073c98b2]{position:fixed;width:100%;height:100%;top:0;left:0;pointer-events:none}.switch-area[data-v-073c98b2]{position:relative;height:100%;max-width:600px;margin:auto}.switch-box[data-v-073c98b2]{right:20px;bottom:100px;position:absolute}.icon[data-v-073c98b2]{font-size:1.5em;color:#000;width:2em;height:2em;background-color:hsla(0,0%,100%,.7);border-radius:50%;pointer-events:auto;cursor:pointer}.icon .-active[data-v-073c98b2]{color:#ddd}",""]),t.exports=n},376:function(t,e,o){"use strict";o.r(e);var n={components:{NavButton:o(361).default},methods:{clickNav:function(t){this.$store.commit("global/setActiveNav",t),this.$emit("click-nav",t)}}},l=(o(366),o(56)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"submenu"},[e("nav-button",{attrs:{name:"default",label:"全ての楽曲"},on:{click:function(e){return t.clickNav("default")}}}),t._v(" "),e("nav-button",{attrs:{name:"original",label:"オリジナル曲"},on:{click:function(e){return t.clickNav("original")}}}),t._v(" "),e("nav-button",{attrs:{name:"video",label:"歌動画"},on:{click:function(e){return t.clickNav("video")}}})],1)])}),[],!1,null,null,null);e.default=component.exports},377:function(t,e,o){"use strict";o.r(e);var n={components:{SongRow:o(342).default},props:{playlist:{required:!0}}},l=(o(368),o(56)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return t.playlist?e("div",{staticClass:"playlist"},[e("ul",t._l(t.playlist.list,(function(t,o){return e("li",{key:t},[e("song-row",{attrs:{song_id:t,position:o}})],1)})),0)]):t._e()}),[],!1,null,"26c14758",null);e.default=component.exports;installComponents(component,{SongRow:o(342).default})},378:function(t,e,o){"use strict";o.r(e);var n={components:{SubControl:o(362).default},computed:{song:function(){return this.$store.getters["controller/playing"]||this.$store.getters["controller/pausing"]},video:function(){return this.$store.getters["contents/videos"].get(this.song.video)},playing:function(){return this.$store.getters["controller/playing"]}},methods:{clickPrev:function(){this.$emit("prev")},clickPlayOrPause:function(){this.$emit("play-or-pause")},clickNext:function(){this.$emit("next")}}},l=(o(370),o(56)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"control-wrapper"},[t.song?e("div",{staticClass:"control"},[e("div",{staticClass:"control-left"},[e("div",{staticClass:"song_thumb"},[e("img",{attrs:{src:t.video.thumbnail_path}})]),t._v(" "),e("div",{staticClass:"song_info"},[e("div",{staticClass:"song_info_inner"},[e("div",{staticClass:"song_title"},[t._v(t._s(t.song.title))]),t._v(" "),e("div",{staticClass:"song_artist"},[t._v(t._s(t.song.artist))])])])]),t._v(" "),e("div",{staticClass:"control-middle"},[e("span",{staticClass:"icon",on:{click:t.clickPrev}},[e("li",{staticClass:"fa-thin fa-backward-step"})]),t._v(" "),e("span",{staticClass:"icon",on:{click:t.clickPlayOrPause}},[t.playing?e("li",{staticClass:"fa-thin fa-pause"}):e("li",{staticClass:"fa-thin fa-play"})]),t._v(" "),e("span",{staticClass:"icon",on:{click:t.clickNext}},[e("li",{staticClass:"fa-thin fa-forward-step"})])]),t._v(" "),e("div",{staticClass:"control-right"})]):t._e()])}),[],!1,null,"b62ad13a",null);e.default=component.exports},379:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{isRepeat:!1,repeatOnce:!1}},computed:{repeatMode:function(){return this.$store.getters["controller/repeat_mode"]},isShuffle:function(){return this.$store.getters["controller/shuffle"]},repeatIconClass:function(){var t={"-active":this.isRepeat};return this.repeatOnce?(t["fa-repeat"]=!1,t["fa-repeat-1"]=!0):(t["fa-repeat"]=!0,t["fa-repeat-1"]=!1),t}},methods:{close:function(){this.isShow=!1},clickRepeat:function(){this.changeRepeatMode()},changeRepeatMode:function(){var t=this.$store.getters["controller/repeat_mode"];switch(console.log(t),t){case"off":this.$store.commit("controller/setRepeatMode","all"),this.repeatOnce=!1,this.isRepeat=!0;break;case"all":this.$store.commit("controller/setRepeatMode","once"),this.repeatOnce=!0,this.isRepeat=!0;break;case"once":this.$store.commit("controller/setRepeatMode","off"),this.repeatOnce=!1,this.isRepeat=!1}},changeRepeatIcon:function(){this.repeatOnce=!this.repeatOnce},clickShuffle:function(){this.$store.commit("controller/setShuffle",!this.isShuffle),this.isShuffle?(this.$playlist.setShuffled(),this.$emit("shuffle-on")):this.$emit("shuffle-off")},clickScroll:function(){this.$utils.scrollToPlayingSong()}}},l=(o(372),o(56)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("modal-base",{on:{close:function(e){return t.$emit("close")}}},[e("div",{staticClass:"control-line",on:{click:t.clickRepeat}},[e("span",{staticClass:"icon"},[e("li",{staticClass:"fa-regular",class:t.repeatIconClass})]),t._v("リピート再生\n  ")]),t._v(" "),e("div",{staticClass:"control-line",on:{click:t.clickShuffle}},[e("span",{staticClass:"icon"},[e("li",{staticClass:"fa-regular fa-shuffle",class:t.isShuffle?"-active":""})]),t._v("ランダム再生\n  ")]),t._v(" "),e("div",{staticClass:"control-line",on:{click:t.clickScroll}},[e("span",{staticClass:"icon"},[e("li",{staticClass:"fa-regular fa-arrows-to-dot -active"})]),t._v("再生中の曲までスクロール\n  ")])])}),[],!1,null,"420a1fc7",null);e.default=component.exports;installComponents(component,{ModalBase:o(363).default})},381:function(t,e,o){var content=o(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(88).default)("a818f966",content,!0,{sourceMap:!1})},384:function(t,e,o){"use strict";o.r(e);var n={methods:{clickSetting:function(){console.error("clickSetting"),this.$emit("click-setting")}}},l=(o(374),o(56)),component=Object(l.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"switch-background"},[t("div",{staticClass:"switch-area"},[t("div",{staticClass:"switch-box"},[t("span",{staticClass:"icon",on:{click:this.clickSetting}},[t("li",{staticClass:"fa-regular fa-gear"})])])])])}),[],!1,null,"073c98b2",null);e.default=component.exports},387:function(t,e,o){"use strict";o(381)},388:function(t,e,o){var n=o(87)(!1);n.push([t.i,".body[data-v-5508e009]{padding-top:45px;max-width:600px;margin:0 auto;position:relative}.contents[data-v-5508e009]{margin-top:40px}.playarea[data-v-5508e009]{position:-webkit-sticky;position:sticky;max-width:800px;top:0;right:0;bottom:0;left:0;top:85px;margin:0 auto;z-index:1}.player-enter[data-v-5508e009],.player-leave-to[data-v-5508e009]{transform:translateY(-100%) translateY(30px)}.player-enter-active[data-v-5508e009]{transition:all .5s ease}.player-leave-active[data-v-5508e009]{transition:all .5s cubic-bezier(1,.5,.8,1)}.show-hide[data-v-5508e009]{height:30px;background-color:#252525;padding-bottom:5px;text-align:center;color:#dbdbdb;cursor:pointer}.yt-container[data-v-5508e009]{background-color:#000;margin-bottom:-6px}.yt-container[data-v-5508e009],.yt-container iframe[data-v-5508e009]{aspect-ratio:16/9}",""]),t.exports=n},391:function(t,e,o){"use strict";o.r(e);o(92);var n=o(376),l=o(377),r=o(378),c=(o(379),{components:{NavigationMenu:n.default,SongList:l.default,Control:r.default},data:function(){return{displayVideo:!0,displayShowHide:!1,displayControlModal:!1,playlist:null}},computed:{player:function(){return this.$refs.youtube.player},playerSize:function(){return{width:"100%",height:"100%"}},playerVars:function(){return{autoplay:0,controls:1,playsinline:1}},showHideMark:function(){return this.displayVideo?"▲":"▼"}},methods:{switchControlModal:function(){console.error("switchControlModal"),this.displayControlModal=!this.displayControlModal},showHideVideo:function(){this.displayVideo=!this.displayVideo,this.$store.commit("global/switchVideoArea")},switchDisplayShowHide:function(){this.displayShowHide=!this.displayShowHide},playOrPause:function(){var t=this.$store.getters["controller/playing"]||this.$store.getters["controller/pausing"];if(t){var e=this.$store.getters["playlist/position"];this.$controller.play_or_pause(t,e)}else{var o=this.playlist.list[0];this.$controller.play_or_pause(this.$store.getters["contents/songs"].get(o),0)}},changePlaylist:function(t){var e=this.$store.getters["playlist/"+t];this.playlist=e,this.$store.commit("playlist/setPlaying",e),this.$store.commit("controller/setShuffle",!1)},shufflePlaylist:function(){var t=this.$store.getters["playlist/shuffled"];this.$store.commit("playlist/setPlaying",t)},restorePlaylist:function(){var t=this.$store.getters["global/activeNav"];this.changePlaylist(t);var e=this.$store.getters["controller/playing"];e&&this.$store.commit("playlist/setPositionById",e.id)},syncPlaying:function(){if(this.$store.getters["controller/state_changed"])this.$store.commit("controller/setStateChanged",!1);else{var t=this.$store.getters["controller/pausing"];if(t){var e=this.$store.getters["contents/songs"].get(t.id);this.$store.commit("controller/setPlaying",e),this.$store.commit("controller/setPausing",null)}}},syncPaused:function(){if(this.$store.getters["controller/state_changed"])this.$store.commit("controller/setStateChanged",!1);else{var t=this.$store.getters["controller/playing"];if(t){var e=this.$store.getters["contents/songs"].get(t.id);this.$store.commit("controller/setPlaying",null),this.$store.commit("controller/setPausing",e)}}}},mounted:function(){var t=this;this.$store.commit("controller/setPlayer",this.$refs.youtube.player),this.playlist=this.$store.getters["playlist/default"];var e=this.playlist.list[0],o=this.$store.getters["contents/songs"].get(e);this.$store.commit("controller/setPausing",o),this.$nuxt.$on("click-song",(function(e,o){t.$controller.play_or_pause(e,o)})),setInterval(this.$controller.autoJump,1e3)}}),d=(o(387),o(56)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"body"},[e("navigation-menu",{on:{"click-nav":t.changePlaylist}}),t._v(" "),e("div",{staticClass:"contents"},[e("control-switch",{on:{"click-setting":t.switchControlModal}}),t._v(" "),e("div",{staticClass:"playarea"},[e("transition",{attrs:{name:"player"},on:{enter:t.switchDisplayShowHide,"after-leave":t.switchDisplayShowHide}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.displayVideo,expression:"displayVideo"}]},[e("div",{staticClass:"yt-container"},[e("youtube",{ref:"youtube",attrs:{"player-vars":t.playerVars,width:t.playerSize.width,height:t.playerSize.height,"video-id":t.$init_video.id},on:{playing:t.syncPlaying,paused:t.syncPaused}})],1),t._v(" "),e("div",{staticClass:"show-hide",attrs:{id:"show-hide-bar-open"},on:{click:t.showHideVideo}},[e("span",[t._v(t._s(t.showHideMark))])])])]),t._v(" "),t.displayShowHide?e("div",{staticClass:"show-hide",attrs:{id:"show-hide-bar-close"},on:{click:t.showHideVideo}},[e("span",[t._v(t._s(t.showHideMark))])]):t._e()],1),t._v(" "),e("div",{staticClass:"listarea"},[e("song-list",{attrs:{playlist:t.playlist}})],1),t._v(" "),e("Control",{on:{prev:t.$controller.prev,"play-or-pause":t.playOrPause,next:t.$controller.next,"shuffle-on":t.shufflePlaylist,"shuffle-off":t.restorePlaylist}})],1),t._v(" "),e("control-modal",{directives:[{name:"show",rawName:"v-show",value:t.displayControlModal,expression:"displayControlModal"}],on:{close:t.switchControlModal,"shuffle-on":t.shufflePlaylist,"shuffle-off":t.restorePlaylist}})],1)}),[],!1,null,"5508e009",null);e.default=component.exports;installComponents(component,{NavigationMenu:o(376).default,ControlSwitch:o(384).default,SongList:o(377).default,Control:o(378).default,ControlModal:o(379).default})}}]);