(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{305:function(t,n,o){var content=o(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(67).default)("509da7b4",content,!0,{sourceMap:!1})},306:function(t,n,o){"use strict";o.r(n);o(311);var e={props:{song_id:{type:Number,required:!0},position:{type:Number,required:!0}},data:function(){return{song:null}},computed:{isSelected:function(){return this.isPlaying||this.isPausing},isPlaying:function(){return this.song===this.$store.getters["controller/playing"]},isPausing:function(){return this.song===this.$store.getters["controller/pausing"]},video:function(){return this.$store.getters["contents/videos"].get(this.song.video)}},methods:{clickSong:function(){this.$nuxt.$emit("click-song",this.song,this.position)},clickAdd:function(){console.log("add")},clickMenu:function(){console.log("menu")}},mounted:function(){this.song=this.$store.getters["contents/songs"].get(this.song_id)}},r=(o(315),o(56)),component=Object(r.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return t.song?o("div",[o("div",{staticClass:"song-outer",class:t.isSelected?"-active":"",attrs:{id:"song-row-"+t.position}},[o("div",{staticClass:"song_thumb",on:{click:t.clickSong}},[o("img",{attrs:{src:t.video.thumbnail_path}})]),t._v(" "),t.isPlaying?o("div",{staticClass:"song_playing"},[o("div",{staticClass:"playing-image"})]):t._e(),t._v(" "),t.isPausing?o("div",{staticClass:"song_playing"},[t._m(0)]):t._e(),t._v(" "),o("div",{staticClass:"song_info",on:{click:t.clickSong}},[o("div",{staticClass:"song_title"},[t._v(t._s(t.song.title))]),t._v(" "),o("div",{staticClass:"song_artist"},[t._v(t._s(t.song.artist))])]),t._v(" "),o("div",{staticClass:"song_add"},[o("span",{staticClass:"icon",on:{click:t.clickAdd}},[o("li",{staticClass:"far fa-plus"})])]),t._v(" "),o("div",{staticClass:"song_menu"},[o("span",{staticClass:"icon",on:{click:t.clickMenu}},[o("li",{staticClass:"far fa-ellipsis-h"})])])])]):t._e()}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"pausing-image"},[n("i",{staticClass:"fa-solid fa-pause"})])}],!1,null,"5711f842",null);n.default=component.exports},311:function(t,n,o){"use strict";var e=o(14),r=o(0),c=o(4),l=o(82),f=o(20),d=o(15),v=o(147),h=o(50),_=o(114),m=o(198),x=o(6),y=o(68).f,k=o(42).f,N=o(17).f,w=o(312),C=o(313).trim,I="Number",E=r.Number,S=E.prototype,A=r.TypeError,$=c("".slice),M=c("".charCodeAt),P=function(t){var n=m(t,"number");return"bigint"==typeof n?n:T(n)},T=function(t){var n,o,e,r,c,l,f,code,d=m(t,"number");if(_(d))throw A("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=C(d),43===(n=M(d,0))||45===n){if(88===(o=M(d,2))||120===o)return NaN}else if(48===n){switch(M(d,1)){case 66:case 98:e=2,r=49;break;case 79:case 111:e=8,r=55;break;default:return+d}for(l=(c=$(d,2)).length,f=0;f<l;f++)if((code=M(c,f))<48||code>r)return NaN;return parseInt(c,e)}return+d};if(l(I,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var F,z=function(t){var n=arguments.length<1?0:E(P(t)),o=this;return h(S,o)&&x((function(){w(o)}))?v(Object(n),o,z):n},O=e?y(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),R=0;O.length>R;R++)d(E,F=O[R])&&!d(z,F)&&N(z,F,k(E,F));z.prototype=S,S.constructor=z,f(r,I,z)}},312:function(t,n,o){var e=o(4);t.exports=e(1..valueOf)},313:function(t,n,o){var e=o(4),r=o(27),c=o(16),l=o(314),f=e("".replace),d="["+l+"]",v=RegExp("^"+d+d+"*"),h=RegExp(d+d+"*$"),_=function(t){return function(n){var o=c(r(n));return 1&t&&(o=f(o,v,"")),2&t&&(o=f(o,h,"")),o}};t.exports={start:_(1),end:_(2),trim:_(3)}},314:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},315:function(t,n,o){"use strict";o(305)},316:function(t,n,o){var e=o(66)(!1);e.push([t.i,".song-outer[data-v-5711f842]{height:50px;display:flex;align-items:center}.song-outer.-active[data-v-5711f842]{background-color:#333}.song-outer .song_thumb[data-v-5711f842]{width:70px;padding:2px 10px}.song-outer .song_thumb img[data-v-5711f842]{border:1px solid #999;display:block;position:unset}.song-outer .song_playing[data-v-5711f842]{margin:auto 10px auto -59px;width:48px;height:27px;padding:5px;background-color:#000;opacity:.7}.song-outer .song_playing .playing-image[data-v-5711f842]{height:100%;background-image:url(https://inuinouta.s3.ap-northeast-1.amazonaws.com/images/equalizer.svg);background-size:cover}.song-outer .song_playing .pausing-image[data-v-5711f842]{height:100%;color:#fff;display:-webkit-box}.song-outer .song_playing .pausing-image i[data-v-5711f842]{display:block;margin:auto}.song-outer .song_info[data-v-5711f842]{padding-left:5px;width:calc(100% - 150px)}.song-outer .song_title[data-v-5711f842]{flex:auto;font-size:.9rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:#dfdfdf}.song-outer .song_artist[data-v-5711f842]{flex:auto;font-size:.7rem;color:#999}.song-outer .song_add[data-v-5711f842]{flex:auto;width:40px}.song-outer .song_add .fa-plus[data-v-5711f842]{color:#dfdfdf}.song-outer .song_menu[data-v-5711f842]{flex:auto;width:40px}.song-outer .song_menu .fa-ellipsis-h[data-v-5711f842]{color:#dfdfdf}",""]),t.exports=e}}]);