(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{340:function(e,t,c){var content=c(355);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,c(88).default)("4d8fd59a",content,!0,{sourceMap:!1})},342:function(e,t,c){"use strict";c.r(t);var o={data:function(){return{isRepeat:!1,repeatOnce:!1}},computed:{repeatMode:function(){return this.$store.getters["controller/repeat_mode"]},isShuffle:function(){return this.$store.getters["controller/shuffle"]},repeatIconClass:function(){var e={"-active":this.isRepeat};return this.repeatOnce?(e["fa-repeat"]=!1,e["fa-repeat-1"]=!0):(e["fa-repeat"]=!0,e["fa-repeat-1"]=!1),e}},methods:{clickRepeat:function(){this.changeRepeatMode()},changeRepeatMode:function(){var e=this.$store.getters["controller/repeat_mode"];switch(console.log(e),e){case"off":this.$store.commit("controller/setRepeatMode","all"),this.repeatOnce=!1,this.isRepeat=!0;break;case"all":this.$store.commit("controller/setRepeatMode","once"),this.repeatOnce=!0,this.isRepeat=!0;break;case"once":this.$store.commit("controller/setRepeatMode","off"),this.repeatOnce=!1,this.isRepeat=!1}},changeRepeatIcon:function(){this.repeatOnce=!this.repeatOnce},clickShuffle:function(){this.$store.commit("controller/setShuffle",!this.isShuffle),this.isShuffle?(this.$playlist.setShuffled(),this.$emit("shuffle-on")):this.$emit("shuffle-off")},clickScroll:function(){this.$utils.scrollToPlayingSong()}}},l=(c(354),c(56)),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"subcontrol"},[t("span",{staticClass:"icon",on:{click:e.clickRepeat}},[t("li",{staticClass:"fa-regular",class:e.repeatIconClass})]),e._v(" "),t("span",{staticClass:"icon",on:{click:e.clickShuffle}},[t("li",{staticClass:"fa-regular fa-shuffle",class:e.isShuffle?"-active":""})]),e._v(" "),t("span",{staticClass:"icon",on:{click:e.clickScroll}},[t("li",{staticClass:"fa-regular fa-arrows-to-dot -active"})])])}),[],!1,null,"23a1ddc4",null);t.default=component.exports},354:function(e,t,c){"use strict";c(340)},355:function(e,t,c){var o=c(87)(!1);o.push([e.i,".subcontrol[data-v-23a1ddc4]{display:flex;align-items:center;padding:0 10px;height:50px;background-color:#333}.icon[data-v-23a1ddc4]{font-size:1.5em;color:#666;width:2em}.icon .-active[data-v-23a1ddc4]{color:#ddd}.subcontrol-enter[data-v-23a1ddc4],.subcontrol-leave-to[data-v-23a1ddc4]{transform:translateY(100%)}.subcontrol-enter-active[data-v-23a1ddc4]{transition:all .3s ease}.subcontrol-leave-active[data-v-23a1ddc4]{transition:all .3s cubic-bezier(1,.5,.8,1)}",""]),e.exports=o}}]);