(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{336:function(t,n,o){var content=o(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(88).default)("0917d3b9",content,!0,{sourceMap:!1})},342:function(t,n,o){"use strict";o(336)},343:function(t,n,o){var e=o(87)(!1);e.push([t.i,'.nav-button[data-v-71b96060]{color:#8f8f8f;border:none;border-bottom:5px solid #000}.nav-button[data-v-71b96060],.nav-button-active[data-v-71b96060]{padding:5px 10px;margin:0 5px;font-size:.8rem;font-family:"Kosugi Maru",sans-serif;background-color:unset;transition:.8s}.nav-button-active[data-v-71b96060]{color:#dfdfdf;border:none;border-bottom:5px solid #9d3757}',""]),t.exports=e},355:function(t,n,o){"use strict";o.r(n);o(32);var e={props:{name:{type:String,require:!0},label:{type:String,require:!0}},methods:{click:function(t){t.target.scrollIntoView({behavior:"smooth",block:"end",inline:"center"}),this.$emit("click")}},computed:{className:function(){var t="nav-button";return this.name===this.$store.getters["global/activeNav"]?"nav-button-active":t}}},r=(o(342),o(56)),component=Object(r.a)(e,(function(){var t=this;return(0,t._self._c)("button",{class:t.className,on:{click:function(n){return t.click(n)}}},[t._v(t._s(t.label))])}),[],!1,null,"71b96060",null);n.default=component.exports}}]);