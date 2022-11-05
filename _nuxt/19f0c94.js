(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{339:function(t,n,o){var content=o(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(88).default)("de520694",content,!0,{sourceMap:!1})},341:function(t,n,o){"use strict";o.r(n);o(347),o(14),o(29),o(30),o(214),o(91);var e={props:{song_id:{type:Number,required:!0},position:{type:Number,required:!0}},data:function(){return{song:null}},computed:{isSelected:function(){return this.isPlaying||this.isPausing},isPlaying:function(){return this.song===this.$store.getters["controller/playing"]},isPausing:function(){return this.song===this.$store.getters["controller/pausing"]},video:function(){return this.$store.getters["contents/videos"].get(this.song.video)},youtubeUrl:function(){var t=new URLSearchParams;return t.append("v",this.song.video),t.append("t",this.song.start_at),"https://youtube.com/watch?"+t.toString()}},methods:{clickSong:function(){this.$nuxt.$emit("click-song",this.song,this.position)},clickAdd:function(){console.log("add")},clickMenu:function(){console.log("menu")}},mounted:function(){this.song=this.$store.getters["contents/songs"].get(this.song_id)}},r=(o(351),o(56)),component=Object(r.a)(e,(function(){var t=this,n=t._self._c;return t.song?n("div",[n("div",{staticClass:"song-outer",class:t.isSelected?"-active":"",attrs:{id:"song-row-"+t.song.id}},[n("div",{staticClass:"song_thumb",on:{click:t.clickSong}},[n("img",{attrs:{src:t.video.thumbnail_path}})]),t._v(" "),t.isPlaying?n("div",{staticClass:"song_playing"},[n("div",{staticClass:"playing-image"})]):t._e(),t._v(" "),t.isPausing?n("div",{staticClass:"song_playing"},[t._m(0)]):t._e(),t._v(" "),n("div",{staticClass:"song_info",on:{click:t.clickSong}},[n("a",{attrs:{href:t.youtubeUrl},on:{click:function(t){t.preventDefault()}}},[n("div",{staticClass:"song_title"},[t._v(t._s(t.song.title))]),t._v(" "),n("div",{staticClass:"song_artist"},[t._v(t._s(t.song.artist))])])]),t._v(" "),n("div",{staticClass:"song_add"},[n("span",{staticClass:"icon",on:{click:t.clickAdd}},[n("li",{staticClass:"far fa-plus"})])]),t._v(" "),n("div",{staticClass:"song_menu"},[n("span",{staticClass:"icon",on:{click:t.clickMenu}},[n("li",{staticClass:"far fa-ellipsis-h"})])])])]):t._e()}),[function(){var t=this._self._c;return t("div",{staticClass:"pausing-image"},[t("i",{staticClass:"fa-solid fa-pause"})])}],!1,null,"e930df5c",null);n.default=component.exports},347:function(t,n,o){"use strict";var e=o(11),r=o(6),c=o(4),l=o(90),d=o(17),f=o(12),v=o(154),h=o(49),_=o(89),m=o(213),x=o(3),y=o(70).f,k=o(46).f,w=o(16).f,N=o(348),C=o(349).trim,I="Number",E=r.Number,S=E.prototype,A=r.TypeError,P=c("".slice),M=c("".charCodeAt),T=function(t){var n=m(t,"number");return"bigint"==typeof n?n:$(n)},$=function(t){var n,o,e,r,c,l,d,code,f=m(t,"number");if(_(f))throw A("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=C(f),43===(n=M(f,0))||45===n){if(88===(o=M(f,2))||120===o)return NaN}else if(48===n){switch(M(f,1)){case 66:case 98:e=2,r=49;break;case 79:case 111:e=8,r=55;break;default:return+f}for(l=(c=P(f,2)).length,d=0;d<l;d++)if((code=M(c,d))<48||code>r)return NaN;return parseInt(c,e)}return+f};if(l(I,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var F,z=function(t){var n=arguments.length<1?0:E(T(t)),o=this;return h(S,o)&&x((function(){N(o)}))?v(Object(n),o,z):n},O=e?y(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),R=0;O.length>R;R++)f(E,F=O[R])&&!f(z,F)&&w(z,F,k(E,F));z.prototype=S,S.constructor=z,d(r,I,z,{constructor:!0})}},348:function(t,n,o){var e=o(4);t.exports=e(1..valueOf)},349:function(t,n,o){var e=o(4),r=o(28),c=o(13),l=o(350),d=e("".replace),f="["+l+"]",v=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),_=function(t){return function(n){var o=c(r(n));return 1&t&&(o=d(o,v,"")),2&t&&(o=d(o,h,"")),o}};t.exports={start:_(1),end:_(2),trim:_(3)}},350:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},351:function(t,n,o){"use strict";o(339)},352:function(t,n,o){var e=o(87)(!1);e.push([t.i,".song-outer[data-v-e930df5c]{height:50px;display:flex;align-items:center;cursor:pointer}.song-outer[data-v-e930df5c]:hover{background-color:#222}.song-outer.-active[data-v-e930df5c]{background-color:#333}.song-outer .song_thumb[data-v-e930df5c]{width:70px;padding:2px 10px}.song-outer .song_thumb img[data-v-e930df5c]{border:1px solid #999;display:block;position:unset}.song-outer .song_playing[data-v-e930df5c]{margin:auto 10px auto -59px;width:48px;height:27px;padding:5px;background-color:#000;opacity:.7}.song-outer .song_playing .playing-image[data-v-e930df5c]{height:100%;background-image:url(https://inuinouta.s3.ap-northeast-1.amazonaws.com/images/equalizer.svg);background-size:cover}.song-outer .song_playing .pausing-image[data-v-e930df5c]{height:100%;color:#fff;display:-webkit-box}.song-outer .song_playing .pausing-image i[data-v-e930df5c]{display:block;margin:auto}.song-outer .song_info[data-v-e930df5c]{padding-left:5px;width:calc(100% - 150px)}.song-outer .song_info a[data-v-e930df5c]{display:block}.song-outer .song_title[data-v-e930df5c]{flex:auto;font-size:.9rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:#dfdfdf}.song-outer .song_artist[data-v-e930df5c]{flex:auto;font-size:.7rem;color:#999}.song-outer .song_add[data-v-e930df5c]{flex:auto;width:40px}.song-outer .song_add .fa-plus[data-v-e930df5c]{color:#dfdfdf}.song-outer .song_menu[data-v-e930df5c]{flex:auto;width:40px}.song-outer .song_menu .fa-ellipsis-h[data-v-e930df5c]{color:#dfdfdf}",""]),t.exports=e}}]);