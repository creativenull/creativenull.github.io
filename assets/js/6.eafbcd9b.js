(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{102:function(t,e,n){"use strict";var s=n(93);n.n(s).a},103:function(t,e,n){"use strict";var s=n(94);n.n(s).a},115:function(t,e,n){"use strict";var s={props:{showBanner:Boolean},data:function(){return{menuHide:!0,menuText:"Menu"}},computed:{displayBanner:function(){return this.showBanner}},methods:{onMenuClick:function(){this.menuHide=!this.menuHide,this.menuText=this.menuHide?"Menu":"Close"}}},i=(n(102),n(2)),a=Object(i.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"tcn__header font-open"},[n("div",{staticClass:"header__menu p-4 flex flex-row-reverse justify-between items-center bg-gray-900 shadow-md"},[n("a",{staticClass:"text-white no-underline md:hidden",attrs:{href:"#"},on:{click:t.onMenuClick}},[t._v(t._s(t.menuText))]),t._v(" "),t._m(0),t._v(" "),n("ul",{staticClass:"menu__list bg-gray-900 hidden md:inline"},t._l(t.$site.themeConfig.nav,function(e){return n("li",{staticClass:"menu__item md:inline"},[n("a",{staticClass:"menu__link px-2 no-underline text-lg text-white hover:underline",attrs:{href:e.link}},[t._v(t._s(e.text))])])}),0)]),t._v(" "),n("div",{staticClass:"header__menu--mobile text-center shadow-md md:hidden",class:{hidden:t.menuHide}},[n("ul",{staticClass:"menu__list--mobile bg-gray-900"},t._l(t.$site.themeConfig.nav,function(e){return n("li",{staticClass:"menu__item--mobile py-2"},[n("a",{staticClass:"menu__link--mobile px-2 no-underline text-lg text-white hover:underline",attrs:{href:e.link}},[t._v(t._s(e.text))])])}),0)]),t._v(" "),t.showBanner?n("div",{staticClass:"header__banner flex items-center justify-center banner-sm"},[n("div",{staticClass:"banner__block"},[t._m(1),t._v(" "),n("p",{staticClass:"banner__subtitle text-sm text-center font-open-light md:text-xl"},[t._v(t._s(t.$site.description))])])]):t._e()])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[e("a",{staticClass:"text-white text-xl no-underline md:text-4xl",attrs:{href:"/"}},[this._v("Arnold "),e("span",{staticClass:"text-blue-600"},[this._v("Chand")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"banner__title text-4xl text-center md:text-6xl"},[e("span",{staticClass:"text-blue-600"},[this._v("Creative")]),this._v(" Nobody")])}],!1,null,"78881c04",null);e.a=a.exports},116:function(t,e,n){"use strict";n(103);var s=n(2),i=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"tcn__footer flex items-center justify-center text-white bg-black"},[e("h6",{staticClass:"footer__copyright text-xs"},[this._v("2019 Arnold Chand (thecreativenobody) | powered by "),e("a",{staticClass:"footer__link underline",attrs:{target:"_blank",href:"https://vuepress.vuejs.org/"}},[this._v("vuepress")]),this._v(", "),e("a",{staticClass:"footer__link underline",attrs:{target:"_blank",href:"https://tailwindcss.com/"}},[this._v("tailwindcss")])])])}],!1,null,null,null);e.a=i.exports},157:function(t,e,n){},164:function(t,e,n){"use strict";var s=n(157);n.n(s).a},171:function(t,e,n){"use strict";n.r(e);var s=n(115),i=n(116),a={components:{Header:s.a,Footer:i.a}},r=(n(164),n(2)),l=Object(r.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Header",{attrs:{showBanner:!1}}),this._v(" "),e("section",{staticClass:"tcn__body container mx-auto px-2 md:px-5"},[e("Content",{staticClass:"page font-noto"})],1),this._v(" "),e("Footer")],1)},[],!1,null,null,null);e.default=l.exports},93:function(t,e,n){},94:function(t,e,n){}}]);