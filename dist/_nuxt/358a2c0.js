(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{395:function(t,e,c){"use strict";var l={name:"base-table",props:{columns:{type:Array,default:function(){return[]},description:"Table columns"},data:{type:Array,default:function(){return[]},description:"Table data"},type:{type:String,default:"",description:"Whether table is striped or hover type"},theadClasses:{type:String,default:"",description:"<thead> css classes"},tbodyClasses:{type:String,default:"",description:"<tbody> css classes"}},computed:{tableClass:function(){return this.type&&"table-".concat(this.type)}},methods:{hasValue:function(t,e){return"undefined"!==t[e.toLowerCase()]},itemValue:function(t,e){return t[e.toLowerCase()]}}},r=c(7),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("table",{staticClass:"table tablesorter",class:t.tableClass},[e("thead",{class:t.theadClasses},[e("tr",[t._t("columns",(function(){return t._l(t.columns,(function(c){return e("th",{key:c},[t._v(t._s(c))])}))}),{columns:t.columns})],2)]),t._v(" "),e("tbody",{class:t.tbodyClasses},t._l(t.data,(function(c,l){return e("tr",{key:l},[t._t("default",(function(){return t._l(t.columns,(function(l,r){return t.hasValue(c,l)?e("td",{key:r},[t._v("\n          "+t._s(t.itemValue(c,l))+"\n        ")]):t._e()}))}),{row:c,index:l})],2)})),0)])}),[],!1,null,null,null);e.a=component.exports},768:function(t,e,c){"use strict";c.r(e);var l={layout:"AuthLayout",name:"pricing-page",components:{BaseTable:c(395).a},data:function(){return{features:[{title:"IMAP/POP Support",bravo:'<i class="fas fa-check text-success"></i>',alpha:'<i class="fas fa-check text-success"></i>'},{title:"Email Forwarding",bravo:'<i class="fas fa-check text-success"></i>',alpha:'<i class="fas fa-check text-success"></i>'},{title:"Active Sync",bravo:'<i class="fas fa-check text-success"></i>',alpha:'<i class="fas fa-check text-success"></i>'},{title:"Multiple domain hosting",bravo:'<i class="fas fa-check text-success"></i>',alpha:'<span class="text-sm text-light">Limited to 1 domain only</span>'},{title:"Additional storage upgrade",bravo:'<i class="fas fa-check text-success"></i>',alpha:'<i class="fas fa-check text-success">'},{title:"30MB Attachment Limit",bravo:'<i class="fas fa-check text-success"></i>',alpha:"-"},{title:"Password protected / Expiry links",bravo:'<i class="fas fa-check text-success"></i>',alpha:"-"},{title:"Unlimited Custom Apps",bravo:'<i class="fas fa-check text-success"></i>',alpha:"-"}]}}},r=c(7),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"header bg-gradient-success py-7 py-lg-8 pt-lg-9"},[t._m(0),t._v(" "),e("div",{staticClass:"separator separator-bottom separator-skew zindex-100"},[e("svg",{attrs:{x:"0",y:"0",viewBox:"0 0 2560 100",preserveAspectRatio:"none",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[e("polygon",{staticClass:"fill-default",attrs:{points:"2560 0 2560 100 0 100"}})])])]),t._v(" "),e("div",{staticClass:"container mt--8 pb-5"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-10"},[e("div",{staticClass:"pricing card-group flex-column flex-md-row mb-3"},[e("card",{staticClass:"card-pricing border-0 text-center mb-4",attrs:{"header-classes":"bg-transparent","body-classes":"px-lg-7"}},[e("h4",{staticClass:"text-uppercase ls-1 text-primary py-3 mb-0",attrs:{slot:"header"},slot:"header"},[t._v("Bravo pack")]),t._v(" "),e("div",{staticClass:"display-2"},[t._v("$49")]),t._v(" "),e("span",{staticClass:"text-muted"},[t._v("per application")]),t._v(" "),e("ul",{staticClass:"list-unstyled my-4"},[e("li",[e("div",{staticClass:"d-flex align-items-center"},[e("div",[e("div",{staticClass:"icon icon-xs icon-shape bg-gradient-primary shadow rounded-circle text-white"},[e("i",{staticClass:"fas fa-terminal"})])]),t._v(" "),e("div",[e("span",{staticClass:"pl-2"},[t._v("Complete documentation")])])])]),t._v(" "),e("li",[e("div",{staticClass:"d-flex align-items-center"},[e("div",[e("div",{staticClass:"icon icon-xs icon-shape bg-gradient-primary shadow rounded-circle text-white"},[e("i",{staticClass:"fas fa-pen-fancy"})])]),t._v(" "),e("div",[e("span",{staticClass:"pl-2"},[t._v("Working materials in Sketch")])])])]),t._v(" "),e("li",[e("div",{staticClass:"d-flex align-items-center"},[e("div",[e("div",{staticClass:"icon icon-xs icon-shape bg-gradient-primary shadow rounded-circle text-white"},[e("i",{staticClass:"fas fa-hdd"})])]),t._v(" "),e("div",[e("span",{staticClass:"pl-2"},[t._v("2GB cloud storage")])])])])]),t._v(" "),e("base-button",{staticClass:"mb-3",attrs:{type:"primary"}},[t._v("Start free trial")]),t._v(" "),e("a",{staticClass:"text-light",attrs:{slot:"footer",href:"#!"},slot:"footer"},[t._v("Request a demo")])],1),t._v(" "),e("card",{staticClass:"card-pricing zoom-in shadow-lg rounded border-0 text-center mb-4",attrs:{gradient:"info","header-classes":"bg-transparent","body-classes":"px-lg-7","footer-classes":"bg-transparent"}},[e("h4",{staticClass:"text-uppercase ls-1 text-white py-3 mb-0",attrs:{slot:"header"},slot:"header"},[t._v("Alpha pack")]),t._v(" "),e("div",{staticClass:"display-1 text-white"},[t._v("$199")]),t._v(" "),e("span",{staticClass:"text-white"},[t._v("per application")]),t._v(" "),e("ul",{staticClass:"list-unstyled my-4"},[e("li",[e("div",{staticClass:"d-flex align-items-center"},[e("div",[e("div",{staticClass:"icon icon-xs icon-shape bg-white shadow rounded-circle text-muted"},[e("i",{staticClass:"fas fa-terminal"})])]),t._v(" "),e("div",[e("span",{staticClass:"pl-2 text-white"},[t._v("Complete documentation")])])])]),t._v(" "),e("li",[e("div",{staticClass:"d-flex align-items-center"},[e("div",[e("div",{staticClass:"icon icon-xs icon-shape bg-white shadow rounded-circle text-muted"},[e("i",{staticClass:"fas fa-pen-fancy"})])]),t._v(" "),e("div",[e("span",{staticClass:"pl-2 text-white"},[t._v("Working materials in Sketch")])])])]),t._v(" "),e("li",[e("div",{staticClass:"d-flex align-items-center"},[e("div",[e("div",{staticClass:"icon icon-xs icon-shape bg-white shadow rounded-circle text-muted"},[e("i",{staticClass:"fas fa-hdd"})])]),t._v(" "),e("div",[e("span",{staticClass:"pl-2 text-white"},[t._v("2GB cloud storage")])])])])]),t._v(" "),e("base-button",{staticClass:"mb-3",attrs:{type:"secondary"}},[t._v("Start free trial")]),t._v(" "),e("a",{staticClass:"text-white",attrs:{slot:"footer",href:"#!"},slot:"footer"},[t._v("Contact sales")])],1)],1)])]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"row row-grid justify-content-center"},[e("div",{staticClass:"col-lg-10"},[e("div",{staticClass:"table-responsive"},[e("base-table",{staticClass:"table table-dark mt-5",attrs:{data:t.features},scopedSlots:t._u([{key:"default",fn:function(c){var l=c.row;return[e("td",{staticClass:"px-0"},[t._v(t._s(l.title))]),t._v(" "),e("td",{staticClass:"text-center",domProps:{innerHTML:t._s(l.bravo)}}),t._v(" "),e("td",{staticClass:"text-center",domProps:{innerHTML:t._s(l.alpha)}})]}}])},[e("template",{slot:"columns"},[e("th",{staticClass:"px-0 bg-transparent",attrs:{scope:"col"}},[e("span",{staticClass:"text-light font-weight-700"},[t._v("Features")])]),t._v(" "),e("th",{staticClass:"text-center bg-transparent",attrs:{scope:"col"}},[t._v("Bravo Pack")]),t._v(" "),e("th",{staticClass:"text-center bg-transparent",attrs:{scope:"col"}},[t._v("Alpha Pack")])])],2)],1)])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"header-body text-center mb-7"},[t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-xl-5 col-lg-6 col-md-8 px-5"},[t("h1",{staticClass:"text-white"},[this._v("Choose the best plan for your business")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex justify-content-lg-center px-3 mt-5"},[e("div",[e("div",{staticClass:"icon icon-shape bg-gradient-white shadow rounded-circle text-primary"},[e("i",{staticClass:"ni ni-building text-primary"})])]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("p",{staticClass:"text-white"},[e("strong",[t._v("The Arctic Ocean")]),t._v(" freezes every winter and much of the sea-ice then\n          thaws\n          every summer, and that process will continue whatever.")])])])}],!1,null,null,null);e.default=component.exports}}]);