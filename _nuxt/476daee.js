(window.webpackJsonp=window.webpackJsonp||[]).push([[3,10],{338:function(t,e,o){var content=o(353);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(88).default)("4d8fd59a",content,!0,{sourceMap:!1})},340:function(t,e,o){"use strict";o.r(e);var l={data:function(){return{isRepeat:!1,repeatOnce:!1}},computed:{repeatMode:function(){return this.$store.getters["controller/repeat_mode"]},isShuffle:function(){return this.$store.getters["controller/shuffle"]},repeatIconClass:function(){var t={"-active":this.isRepeat};return this.repeatOnce?(t["fa-repeat"]=!1,t["fa-repeat-1"]=!0):(t["fa-repeat"]=!0,t["fa-repeat-1"]=!1),t}},methods:{clickRepeat:function(){this.changeRepeatMode()},changeRepeatMode:function(){var t=this.$store.getters["controller/repeat_mode"];switch(console.log(t),t){case"off":this.$store.commit("controller/setRepeatMode","all"),this.repeatOnce=!1,this.isRepeat=!0;break;case"all":this.$store.commit("controller/setRepeatMode","once"),this.repeatOnce=!0,this.isRepeat=!0;break;case"once":this.$store.commit("controller/setRepeatMode","off"),this.repeatOnce=!1,this.isRepeat=!1}},changeRepeatIcon:function(){this.repeatOnce=!this.repeatOnce},clickShuffle:function(){this.$store.commit("controller/setShuffle",!this.isShuffle),this.isShuffle?(this.$playlist.setShuffled(),this.$emit("shuffle-on")):this.$emit("shuffle-off")},clickScroll:function(){this.$utils.scrollToPlayingSong()}}},n=(o(352),o(56)),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"subcontrol"},[e("span",{staticClass:"icon",on:{click:t.clickRepeat}},[e("li",{staticClass:"fa-regular",class:t.repeatIconClass})]),t._v(" "),e("span",{staticClass:"icon",on:{click:t.clickShuffle}},[e("li",{staticClass:"fa-regular fa-shuffle",class:t.isShuffle?"-active":""})]),t._v(" "),e("span",{staticClass:"icon",on:{click:t.clickScroll}},[e("li",{staticClass:"fa-regular fa-arrows-to-dot -active"})])])}),[],!1,null,"23a1ddc4",null);e.default=component.exports},352:function(t,e,o){"use strict";o(338)},353:function(t,e,o){var l=o(87)(!1);l.push([t.i,".subcontrol[data-v-23a1ddc4]{display:flex;align-items:center;padding:0 10px;height:50px;background-color:#333}.icon[data-v-23a1ddc4]{font-size:1.5em;color:#666;width:2em}.icon .-active[data-v-23a1ddc4]{color:#ddd}.subcontrol-enter[data-v-23a1ddc4],.subcontrol-leave-to[data-v-23a1ddc4]{transform:translateY(100%)}.subcontrol-enter-active[data-v-23a1ddc4]{transition:all .3s ease}.subcontrol-leave-active[data-v-23a1ddc4]{transition:all .3s cubic-bezier(1,.5,.8,1)}",""]),t.exports=l},354:function(t,e,o){var content=o(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(88).default)("e429e54c",content,!0,{sourceMap:!1})},362:function(t,e,o){"use strict";o(354)},363:function(t,e,o){var l=o(87)(!1);l.push([t.i,".control-wrapper[data-v-7b414955]{position:fixed;bottom:0;width:100%;max-width:800px;z-index:2}.control[data-v-7b414955]{background-color:#1e1e1e;border-top:1px solid #999;display:flex;padding:5px 10px 15px 3px;width:100%;height:80px}.control .control-left[data-v-7b414955]{flex:1;min-width:220px;display:flex;position:relative}.control .control-left .please-tap-here[data-v-7b414955]{position:absolute;display:flex;justify-content:center;height:100%;width:100%}.control .control-left .please-tap-here .icon[data-v-7b414955]{font-size:1.3em;color:#555;margin-top:-5px}.control .control-left .song_thumb[data-v-7b414955]{display:flex;align-items:center;width:70px;min-width:70px;padding:3px 8px;z-index:1}.control .control-left .song_thumb img[data-v-7b414955]{top:auto;bottom:auto;border:1px solid #999;display:block;position:unset}@media(max-width:370px){.control .control-left .song_thumb[data-v-7b414955]{display:none}}.control .control-left .song_info[data-v-7b414955]{display:flex;align-items:center;z-index:1;min-width:100px;padding-left:5px;padding-right:5px}.control .control-left .song_info_inner[data-v-7b414955]{flex:auto;width:100%}.control .control-left .song_title[data-v-7b414955]{font-size:.9rem;color:#dfdfdf}.control .control-left .song_artist[data-v-7b414955],.control .control-left .song_title[data-v-7b414955]{width:100%;text-align:left;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.control .control-left .song_artist[data-v-7b414955]{font-size:.8rem;color:#999}@media(max-width:370px){.control .control-left[data-v-7b414955]{min-width:170px}}.control .control-middle[data-v-7b414955]{flex:none;display:flex;align-items:center}.control .control-middle .icon[data-v-7b414955]{color:#ccc;font-size:1.8em;height:2rem;width:3rem}.control .control-right[data-v-7b414955]{flex:auto;min-width:0}",""]),t.exports=l},366:function(t,e,o){"use strict";o.r(e);var l={components:{SubControl:o(340).default},data:function(){return{displaySubControl:!1}},computed:{song:function(){return this.$store.getters["controller/playing"]||this.$store.getters["controller/pausing"]},video:function(){return this.$store.getters["contents/videos"].get(this.song.video)},playing:function(){return this.$store.getters["controller/playing"]}},methods:{clickPrev:function(){this.$emit("prev")},clickPlayOrPause:function(){this.$emit("play-or-pause")},clickNext:function(){this.$emit("next")},switchSubControl:function(){this.displaySubControl=!this.displaySubControl}}},n=(o(362),o(56)),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"control-wrapper"},[e("transition",{attrs:{name:"subcontrol"}},[e("SubControl",{directives:[{name:"show",rawName:"v-show",value:t.displaySubControl,expression:"displaySubControl"}],on:{"shuffle-on":t.$listeners["shuffle-on"],"shuffle-off":t.$listeners["shuffle-off"]}})],1),t._v(" "),t.song?e("div",{staticClass:"control"},[e("div",{staticClass:"control-left",on:{click:t.switchSubControl}},[e("div",{staticClass:"please-tap-here"},[e("span",{staticClass:"icon",on:{click:t.clickNext}},[e("li",{staticClass:"fa-solid fa-chevron-up"})])]),t._v(" "),e("div",{staticClass:"song_thumb"},[e("img",{attrs:{src:t.video.thumbnail_path}})]),t._v(" "),e("div",{staticClass:"song_info"},[e("div",{staticClass:"song_info_inner"},[e("div",{staticClass:"song_title"},[t._v(t._s(t.song.title))]),t._v(" "),e("div",{staticClass:"song_artist"},[t._v(t._s(t.song.artist))])])])]),t._v(" "),e("div",{staticClass:"control-middle"},[e("span",{staticClass:"icon",on:{click:t.clickPrev}},[e("li",{staticClass:"fa-thin fa-backward-step"})]),t._v(" "),e("span",{staticClass:"icon",on:{click:t.clickPlayOrPause}},[t.playing?e("li",{staticClass:"fa-thin fa-pause"}):e("li",{staticClass:"fa-thin fa-play"})]),t._v(" "),e("span",{staticClass:"icon",on:{click:t.clickNext}},[e("li",{staticClass:"fa-thin fa-forward-step"})])]),t._v(" "),e("div",{staticClass:"control-right"})]):t._e()],1)}),[],!1,null,"7b414955",null);e.default=component.exports;installComponents(component,{SubControl:o(340).default})}}]);