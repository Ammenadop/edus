(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{437:function(t,e,l){"use strict";e.a=[{img:"img/theme/bootstrap.jpg",title:"Argon Design System",budget:"$2500 USD",status:"pending",statusType:"warning",completion:60},{img:"img/theme/angular.jpg",title:"Angular Now UI Kit PRO",budget:"$1800 USD",status:"completed",statusType:"success",completion:100},{img:"img/theme/sketch.jpg",title:"Black Dashboard",budget:"$3150 USD",status:"delayed",statusType:"danger",completion:72},{img:"img/theme/react.jpg",title:"React Material Dashboard",budget:"$4400 USD",status:"on schedule",statusType:"info",completion:90},{img:"img/theme/vue.jpg",title:"Vue Paper UI Kit PRO",budget:"$2200 USD",status:"completed",statusType:"success",completion:100},{img:"img/theme/bootstrap.jpg",title:"Argon Design System",budget:"$2500 USD",status:"pending",statusType:"warning",completion:60},{img:"img/theme/angular.jpg",title:"Angular Now UI Kit PRO",budget:"$1800 USD",status:"completed",statusType:"success",completion:100},{img:"img/theme/sketch.jpg",title:"Black Dashboard",budget:"$3150 USD",status:"delayed",statusType:"danger",completion:72},{img:"img/theme/vue.jpg",title:"Vue Paper UI Kit PRO",budget:"$2200 USD",status:"completed",statusType:"success",completion:100}]},577:function(t,e,l){"use strict";e.a=[{id:1,name:"John Michael",image:"img/theme/team-1.jpg",createdAt:"10/09/2018",product:"Argon Dashboard PRO",active:!0},{id:2,name:"Alexandra Smith",image:"img/theme/team-2.jpg",createdAt:"08/09/2018",product:"Argon Design System",active:!1},{id:3,name:"Samantha Ivy",image:"img/theme/team-3.jpg",createdAt:"30/08/2018",product:"Black Dashboard",active:!1},{id:4,name:"John Michael",image:"img/theme/team-1.jpg",createdAt:"10/09/2018",product:"Argon Dashboard PRO",active:!0},{id:5,name:"Alexandra Smith",image:"img/theme/team-2.jpg",createdAt:"30/09/2018",product:"Vue Argon Dashboard",active:!0}]},621:function(t,e,l){"use strict";var n,r=l(9),o=(l(416),l(86),l(417)),c=l.n(o),d=(l(418),l(419)),m=l.n(d),v=(l(420),l(421)),h=l.n(v),f=(l(401),l(402)),_=l.n(f),C=(l(403),l(404)),w=l.n(C),j=(l(11),l(437)),x={name:"light-table",components:(n={},Object(r.a)(n,w.a.name,w.a),Object(r.a)(n,_.a.name,_.a),Object(r.a)(n,h.a.name,h.a),Object(r.a)(n,m.a.name,m.a),Object(r.a)(n,c.a.name,c.a),n),data:function(){return{projects:j.a,currentPage:1}}},y=l(7),component=Object(y.a)(x,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[t._m(0),t._v(" "),e("el-table",{staticClass:"table-responsive table-flush",attrs:{"header-row-class-name":"thead-light",data:t.projects}},[e("el-table-column",{attrs:{label:"Project","min-width":"310px",prop:"name",sortable:""},scopedSlots:t._u([{key:"default",fn:function(l){var n=l.row;return[e("div",{staticClass:"media align-items-center"},[e("a",{staticClass:"avatar rounded-circle mr-3",attrs:{href:"#"}},[e("img",{attrs:{alt:"Image placeholder",src:n.img}})]),t._v(" "),e("div",{staticClass:"media-body"},[e("span",{staticClass:"font-weight-600 name mb-0 text-sm"},[t._v(t._s(n.title))])])])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"Budget",prop:"budget","min-width":"140px",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{label:"Status","min-width":"170px",prop:"status",sortable:""},scopedSlots:t._u([{key:"default",fn:function(l){var n=l.row;return[e("badge",{staticClass:"badge-dot mr-4",attrs:{type:""}},[e("i",{class:"bg-".concat(n.statusType)}),t._v(" "),e("span",{staticClass:"status"},[t._v(t._s(n.status))])])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"Users","min-width":"190px"}},[e("div",{staticClass:"avatar-group"},[e("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Ryan Tompson"}},[e("img",{attrs:{alt:"Image placeholder",src:"img/theme/team-1.jpg"}})]),t._v(" "),e("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Romina Hadid"}},[e("img",{attrs:{alt:"Image placeholder",src:"img/theme/team-2.jpg"}})]),t._v(" "),e("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Alexander Smith"}},[e("img",{attrs:{alt:"Image placeholder",src:"img/theme/team-3.jpg"}})]),t._v(" "),e("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Jessica Doe"}},[e("img",{attrs:{alt:"Image placeholder",src:"img/theme/team-4.jpg"}})])])]),t._v(" "),e("el-table-column",{attrs:{label:"Completion",prop:"completion","min-width":"240px",sortable:""},scopedSlots:t._u([{key:"default",fn:function(l){var n=l.row;return[e("div",{staticClass:"d-flex align-items-center"},[e("span",{staticClass:"completion mr-2"},[t._v(t._s(n.completion)+"%")]),t._v(" "),e("div",[e("base-progress",{attrs:{type:n.statusType,value:n.completion}})],1)])]}}])}),t._v(" "),e("el-table-column",{attrs:{"min-width":"180px"},scopedSlots:t._u([{key:"default",fn:function(l){l.row;return[e("el-dropdown",{staticClass:"dropdown",attrs:{trigger:"click"}},[e("span",{staticClass:"btn btn-sm btn-icon-only text-light"},[e("i",{staticClass:"fas fa-ellipsis-v mt-2"})]),t._v(" "),e("el-dropdown-menu",{staticClass:"dropdown-menu dropdown-menu-arrow show",attrs:{slot:"dropdown"},slot:"dropdown"},[e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])],1)]}}])})],1),t._v(" "),e("div",{staticClass:"card-footer py-4 d-flex justify-content-end"},[e("base-pagination",{attrs:{total:50},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"border-0 card-header"},[t("h3",{staticClass:"mb-0"},[this._v("Light table")])])}],!1,null,null,null);e.a=component.exports},622:function(t,e,l){"use strict";var n,r=l(9),o=(l(416),l(86),l(417)),c=l.n(o),d=(l(418),l(419)),m=l.n(d),v=(l(420),l(421)),h=l.n(v),f=(l(401),l(402)),_=l.n(f),C=(l(403),l(404)),w=l.n(C),j=(l(11),l(437)),x={name:"light-table",components:(n={},Object(r.a)(n,w.a.name,w.a),Object(r.a)(n,_.a.name,_.a),Object(r.a)(n,h.a.name,h.a),Object(r.a)(n,m.a.name,m.a),Object(r.a)(n,c.a.name,c.a),n),data:function(){return{projects:j.a,currentPage:1}}},y=l(7),component=Object(y.a)(x,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card bg-transparent"},[t._m(0),t._v(" "),e("el-table",{staticClass:"table-responsive",attrs:{"header-row-class-name":"thead-light",data:t.projects}},[e("el-table-column",{attrs:{label:"Project","min-width":"310px",prop:"name",sortable:""},scopedSlots:t._u([{key:"default",fn:function(l){var n=l.row;return[e("div",{staticClass:"media align-items-center"},[e("a",{staticClass:"avatar rounded-circle mr-3",attrs:{href:"#"}},[e("img",{attrs:{alt:"Image placeholder",src:n.img}})]),t._v(" "),e("div",{staticClass:"media-body"},[e("span",{staticClass:"font-weight-600 name mb-0 text-sm"},[t._v(t._s(n.title))])])])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"Budget",prop:"budget","min-width":"140px",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{label:"Status","min-width":"170px",prop:"status",sortable:""},scopedSlots:t._u([{key:"default",fn:function(l){var n=l.row;return[e("badge",{staticClass:"badge-dot mr-4",attrs:{type:""}},[e("i",{class:"bg-".concat(n.statusType)}),t._v(" "),e("span",{staticClass:"status"},[t._v(t._s(n.status))])])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"Users","min-width":"190px"}},[e("div",{staticClass:"avatar-group"},[e("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Ryan Tompson"}},[e("img",{attrs:{alt:"Image placeholder",src:"img/theme/team-1.jpg"}})]),t._v(" "),e("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Romina Hadid"}},[e("img",{attrs:{alt:"Image placeholder",src:"img/theme/team-2.jpg"}})]),t._v(" "),e("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Alexander Smith"}},[e("img",{attrs:{alt:"Image placeholder",src:"img/theme/team-3.jpg"}})]),t._v(" "),e("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Jessica Doe"}},[e("img",{attrs:{alt:"Image placeholder",src:"img/theme/team-4.jpg"}})])])]),t._v(" "),e("el-table-column",{attrs:{label:"Completion",prop:"completion","min-width":"240px",sortable:""},scopedSlots:t._u([{key:"default",fn:function(l){var n=l.row;return[e("div",{staticClass:"d-flex align-items-center"},[e("span",{staticClass:"completion mr-2"},[t._v(t._s(n.completion)+"%")]),t._v(" "),e("div",[e("base-progress",{attrs:{type:n.statusType,value:n.completion}})],1)])]}}])}),t._v(" "),e("el-table-column",{attrs:{"min-width":"180px"},scopedSlots:t._u([{key:"default",fn:function(l){l.row;return[e("el-dropdown",{staticClass:"dropdown",attrs:{trigger:"click"}},[e("span",{staticClass:"btn btn-sm btn-icon-only text-light"},[e("i",{staticClass:"fas fa-ellipsis-v mt-2"})]),t._v(" "),e("el-dropdown-menu",{staticClass:"dropdown-menu dropdown-menu-arrow show",attrs:{slot:"dropdown"},slot:"dropdown"},[e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])],1)]}}])})],1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"border-0 card-header bg-transparent"},[t("h3",{staticClass:"mb-0"},[this._v("Translucent table")])])}],!1,null,null,null);e.a=component.exports},623:function(t,e,l){"use strict";var n,r=l(9),o=(l(416),l(86),l(417)),c=l.n(o),d=(l(418),l(419)),m=l.n(d),v=(l(420),l(421)),h=l.n(v),f=(l(401),l(402)),_=l.n(f),C=(l(403),l(404)),w=l.n(C),j=(l(11),l(437)),x={name:"light-table",components:(n={},Object(r.a)(n,w.a.name,w.a),Object(r.a)(n,_.a.name,_.a),Object(r.a)(n,h.a.name,h.a),Object(r.a)(n,m.a.name,m.a),Object(r.a)(n,c.a.name,c.a),n),data:function(){return{projects:j.a,currentPage:1}}},y=l(7),component=Object(y.a)(x,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card bg-default shadow"},[t._m(0),t._v(" "),e("el-table",{staticClass:"table-responsive table-dark",attrs:{"header-row-class-name":"thead-dark",data:t.projects}},[e("el-table-column",{attrs:{label:"Project","min-width":"310px",prop:"name",sortable:""},scopedSlots:t._u([{key:"default",fn:function(l){var n=l.row;return[e("div",{staticClass:"media align-items-center"},[e("a",{staticClass:"avatar rounded-circle mr-3",attrs:{href:"#"}},[e("img",{attrs:{alt:"Image placeholder",src:n.img}})]),t._v(" "),e("div",{staticClass:"media-body"},[e("span",{staticClass:"font-weight-600 name mb-0 text-sm"},[t._v(t._s(n.title))])])])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"Budget",prop:"budget","min-width":"140px",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{label:"Status","min-width":"170px",prop:"status",sortable:""},scopedSlots:t._u([{key:"default",fn:function(l){var n=l.row;return[e("badge",{staticClass:"badge-dot mr-4"},[e("i",{class:"bg-".concat(n.statusType)}),t._v(" "),e("span",{staticClass:"status"},[t._v(t._s(n.status))])])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"Users","min-width":"190px"}},[e("div",{staticClass:"avatar-group"},[e("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Ryan Tompson"}},[e("img",{attrs:{alt:"Image placeholder",src:"img/theme/team-1.jpg"}})]),t._v(" "),e("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Romina Hadid"}},[e("img",{attrs:{alt:"Image placeholder",src:"img/theme/team-2.jpg"}})]),t._v(" "),e("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Alexander Smith"}},[e("img",{attrs:{alt:"Image placeholder",src:"img/theme/team-3.jpg"}})]),t._v(" "),e("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Jessica Doe"}},[e("img",{attrs:{alt:"Image placeholder",src:"img/theme/team-4.jpg"}})])])]),t._v(" "),e("el-table-column",{attrs:{label:"Completion",prop:"completion","min-width":"240px",sortable:""},scopedSlots:t._u([{key:"default",fn:function(l){var n=l.row;return[e("div",{staticClass:"d-flex align-items-center"},[e("span",{staticClass:"completion mr-2"},[t._v(t._s(n.completion)+"%")]),t._v(" "),e("div",[e("base-progress",{attrs:{type:n.statusType,value:n.completion}})],1)])]}}])}),t._v(" "),e("el-table-column",{attrs:{"min-width":"180px"},scopedSlots:t._u([{key:"default",fn:function(l){l.row;return[e("el-dropdown",{staticClass:"dropdown",attrs:{trigger:"click"}},[e("span",{staticClass:"btn btn-sm btn-icon-only text-light"},[e("i",{staticClass:"fas fa-ellipsis-v mt-2"})]),t._v(" "),e("el-dropdown-menu",{staticClass:"dropdown-menu dropdown-menu-arrow show",attrs:{slot:"dropdown"},slot:"dropdown"},[e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])],1)]}}])})],1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"card-header bg-transparent border-0"},[t("h3",{staticClass:"mb-0 text-white"},[this._v("Dark table")])])}],!1,null,null,null);e.a=component.exports},759:function(t,e,l){"use strict";l.r(e);var n,r,o,c,d,m=l(9),v=(l(401),l(86),l(402)),h=l.n(v),f=(l(403),l(404)),_=l.n(f),C=(l(416),l(417)),w=l.n(C),j=(l(418),l(419)),x=l.n(j),y=(l(420),l(421)),O=l.n(y),k=(l(11),l(115)),S=l(437),D=l(577),A=l(621),T=(l(253),l(172)),P=l.n(T),I={name:"inline-actions-table",components:(n={},Object(m.a)(n,P.a.name,P.a),Object(m.a)(n,_.a.name,_.a),Object(m.a)(n,h.a.name,h.a),Object(m.a)(n,O.a.name,O.a),Object(m.a)(n,x.a.name,x.a),Object(m.a)(n,w.a.name,w.a),n),data:function(){return{users:D.a,currentPage:1}},methods:{onEdit:function(t){alert("You want to edit ".concat(t.name))},onDelete:function(t){alert("You want to delete ".concat(t.name))}}},R=l(7),U=Object(R.a)(I,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-header border-0"},[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-6 text-right"},[e("el-tooltip",{attrs:{content:"Export",placement:"top"}},[e("base-button",{attrs:{type:"neutral",icon:"",size:"sm"}},[e("span",{staticClass:"btn-inner--icon"},[e("i",{staticClass:"fas fa-user-edit"})]),t._v(" "),e("span",{staticClass:"btn-inner--text"},[t._v("Export")])])],1)],1)])]),t._v(" "),e("el-table",{staticClass:"table-responsive align-items-center table-flush",attrs:{"header-row-class-name":"thead-light",data:t.users}},[e("el-table-column",{attrs:{label:"Author","min-width":"310px",prop:"name",sortable:""},scopedSlots:t._u([{key:"default",fn:function(l){var n=l.row;return[e("img",{staticClass:"avatar rounded-circle mr-3",attrs:{src:n.image}}),t._v(" "),e("b",[t._v(t._s(n.name))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"Created At",prop:"createdAt","min-width":"140px",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{label:"Product","min-width":"200px",prop:"product",sortable:""},scopedSlots:t._u([{key:"default",fn:function(l){var n=l.row;return[e("a",{staticClass:"font-weight-bold",attrs:{href:"#!"}},[t._v(t._s(n.product))])]}}])}),t._v(" "),e("el-table-column",{attrs:{"min-width":"180px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(l){var n=l.row;return e("div",{staticClass:"table-actions"},[e("el-tooltip",{attrs:{content:"Edit",placement:"top"}},[e("a",{staticClass:"table-action",attrs:{href:"#!","data-toggle":"tooltip","data-original-title":"Edit product"},on:{click:function(e){return e.preventDefault(),t.onEdit(n)}}},[e("i",{staticClass:"fas fa-user-edit"})])]),t._v(" "),e("el-tooltip",{attrs:{content:"Delete",placement:"top"}},[e("a",{staticClass:"table-action table-action-delete",attrs:{href:"#!","data-toggle":"tooltip","data-original-title":"Delete product"},on:{click:function(e){return e.preventDefault(),t.onDelete(n)}}},[e("i",{staticClass:"fas fa-trash"})])])],1)}}])})],1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"col-6"},[t("h3",{staticClass:"mb-0"},[this._v("Inline actions")])])}],!1,null,null,null).exports,E={name:"inline-actions-table",components:(r={},Object(m.a)(r,P.a.name,P.a),Object(m.a)(r,_.a.name,_.a),Object(m.a)(r,h.a.name,h.a),Object(m.a)(r,O.a.name,O.a),Object(m.a)(r,x.a.name,x.a),Object(m.a)(r,w.a.name,w.a),r),data:function(){return{users:D.a,currentPage:1}},methods:{onEdit:function(t){alert("You want to edit ".concat(t.name))},onDelete:function(t){alert("You want to delete ".concat(t.name))}}},$=Object(R.a)(E,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-header border-0"},[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-6 text-right"},[e("el-tooltip",{attrs:{content:"Export",placement:"top"}},[e("base-button",{attrs:{type:"primary",icon:"",size:"sm"}},[e("span",{staticClass:"btn-inner--icon"},[e("i",{staticClass:"fas fa-user-edit"})]),t._v(" "),e("span",{staticClass:"btn-inner--text"},[t._v("Export")])])],1)],1)])]),t._v(" "),e("el-table",{staticClass:"table-responsive align-items-center table-flush table-striped",attrs:{"header-row-class-name":"thead-light",data:t.users}},[e("el-table-column",{attrs:{label:"Author","min-width":"310px",prop:"name",sortable:""},scopedSlots:t._u([{key:"default",fn:function(l){var n=l.row;return[e("img",{staticClass:"avatar rounded-circle mr-3",attrs:{src:n.image}}),t._v(" "),e("b",[t._v(t._s(n.name))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"Created At",prop:"createdAt","min-width":"140px",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{label:"Product","min-width":"200px",prop:"product",sortable:""},scopedSlots:t._u([{key:"default",fn:function(l){var n=l.row;return[e("a",{staticClass:"font-weight-bold",attrs:{href:"#!"}},[t._v(t._s(n.product))])]}}])}),t._v(" "),e("el-table-column",{attrs:{"min-width":"180px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(l){var n=l.row;return e("div",{staticClass:"table-actions"},[e("el-tooltip",{attrs:{content:"Edit",placement:"top"}},[e("a",{staticClass:"table-action",attrs:{href:"#!","data-toggle":"tooltip","data-original-title":"Edit product"},on:{click:function(e){return e.preventDefault(),t.onEdit(n)}}},[e("i",{staticClass:"fas fa-user-edit"})])]),t._v(" "),e("el-tooltip",{attrs:{content:"Delete",placement:"top"}},[e("a",{staticClass:"table-action table-action-delete",attrs:{href:"#!","data-toggle":"tooltip","data-original-title":"Delete product"},on:{click:function(e){return e.preventDefault(),t.onDelete(n)}}},[e("i",{staticClass:"fas fa-trash"})])])],1)}}])})],1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"col-6"},[t("h3",{staticClass:"mb-0"},[this._v("Striped Table")])])}],!1,null,null,null).exports,Y={name:"inline-actions-table",components:(o={},Object(m.a)(o,P.a.name,P.a),Object(m.a)(o,_.a.name,_.a),Object(m.a)(o,h.a.name,h.a),Object(m.a)(o,O.a.name,O.a),Object(m.a)(o,x.a.name,x.a),Object(m.a)(o,w.a.name,w.a),o),data:function(){return{users:D.a,currentPage:1,selectedRows:[]}},methods:{onEdit:function(t){alert("You want to edit ".concat(t.name))},onDelete:function(t){alert("You want to delete ".concat(t.name))},onSelectionChange:function(t){this.selectedRows=t}}},B=Object(R.a)(Y,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-header border-0"},[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-6 text-right"},[e("el-tooltip",{attrs:{content:"Delete",placement:"top"}},[e("base-button",{attrs:{type:"danger",icon:"",size:"sm"}},[e("span",{staticClass:"btn-inner--icon"},[e("i",{staticClass:"fas fa-trash"})]),t._v(" "),e("span",{staticClass:"btn-inner--text"},[t._v("Delete")])])],1)],1)])]),t._v(" "),e("el-table",{staticClass:"table-responsive table-flush",attrs:{"header-row-class-name":"thead-light","row-key":"id",data:t.users},on:{"selection-change":t.onSelectionChange}},[e("el-table-column",{attrs:{type:"selection",align:"left","min-width":"120px"}}),t._v(" "),e("el-table-column",{attrs:{label:"Author","min-width":"220px",prop:"name",sortable:""},scopedSlots:t._u([{key:"default",fn:function(l){var n=l.row;return[e("b",[t._v(t._s(n.name))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"Created At",prop:"createdAt",width:"170px","min-width":"140px",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{label:"Product","min-width":"180px",prop:"product",sortable:""},scopedSlots:t._u([{key:"default",fn:function(l){var n=l.row;return[e("a",{staticClass:"font-weight-bold",attrs:{href:"#!"}},[t._v(t._s(n.product))])]}}])}),t._v(" "),e("el-table-column",{attrs:{"min-width":"120px",label:"Active",prop:"active",sortable:"",align:"center"},scopedSlots:t._u([{key:"default",fn:function(l){var n=l.row;return[e("div",{staticClass:"d-flex justify-content-center"},[e("base-switch",{model:{value:n.active,callback:function(e){t.$set(n,"active",e)},expression:"row.active"}})],1)]}}])})],1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"col-6"},[t("h3",{staticClass:"mb-0"},[this._v("Checkbox + Toggles")])])}],!1,null,null,null).exports,J={name:"inline-actions-table",components:(c={},Object(m.a)(c,P.a.name,P.a),Object(m.a)(c,_.a.name,_.a),Object(m.a)(c,h.a.name,h.a),Object(m.a)(c,O.a.name,O.a),Object(m.a)(c,x.a.name,x.a),Object(m.a)(c,w.a.name,w.a),c),data:function(){return{users:D.a,currentPage:1,selectedRows:[]}},methods:{onEdit:function(t){alert("You want to edit ".concat(t.name))},onDelete:function(t){alert("You want to delete ".concat(t.name))},onSelectionChange:function(t){this.selectedRows=t},rowClassName:function(t){var e=t.rowIndex;return 0===e?"table-success":2===e?"table-warning":""}}},z=Object(R.a)(J,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-header border-0"},[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-6 text-right"},[e("el-tooltip",{attrs:{content:"Delete",placement:"top"}},[e("base-button",{attrs:{type:"danger",icon:"",size:"sm"}},[e("span",{staticClass:"btn-inner--icon"},[e("i",{staticClass:"fas fa-trash"})]),t._v(" "),e("span",{staticClass:"btn-inner--text"},[t._v("Delete")])])],1)],1)])]),t._v(" "),e("el-table",{staticClass:"table-responsive table-flush",attrs:{"header-row-class-name":"thead-light","row-key":"id",data:t.users,"row-class-name":t.rowClassName},on:{"selection-change":t.onSelectionChange}},[e("el-table-column",{attrs:{type:"selection",align:"left","min-width":"120px"}}),t._v(" "),e("el-table-column",{attrs:{label:"Author","min-width":"220px",prop:"name",sortable:""},scopedSlots:t._u([{key:"default",fn:function(l){var n=l.row;return[e("div",{staticClass:"table-user"},[e("b",[t._v(t._s(n.name))])])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"Created At",prop:"createdAt",width:"170px","min-width":"140px",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{label:"Product","min-width":"180px",prop:"product",sortable:""},scopedSlots:t._u([{key:"default",fn:function(l){var n=l.row;return[e("a",{staticClass:"font-weight-bold",attrs:{href:"#!"}},[t._v(t._s(n.product))])]}}])}),t._v(" "),e("el-table-column",{attrs:{"min-width":"120px",label:"Active",prop:"active",sortable:"",align:"center"},scopedSlots:t._u([{key:"default",fn:function(l){var n=l.row;return[e("div",{staticClass:"d-flex justify-content-center"},[e("base-switch",{model:{value:n.active,callback:function(e){t.$set(n,"active",e)},expression:"row.active"}})],1)]}}])})],1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"col-6"},[t("h3",{staticClass:"mb-0"},[this._v("Checkbox + Labels")])])}],!1,null,null,null).exports,N=l(622),K=l(623),L={layout:"DashboardLayout",components:(d={LightTable:A.a,InlineActionsTable:U,StripedTable:$,CheckboxTable:B,CheckboxColoredTable:z,TranslucentTable:N.a,DarkTable:K.a,RouteBreadCrumb:k.a},Object(m.a)(d,O.a.name,O.a),Object(m.a)(d,x.a.name,x.a),Object(m.a)(d,w.a.name,w.a),Object(m.a)(d,_.a.name,_.a),Object(m.a)(d,h.a.name,h.a),d),data:function(){return{projects:S.a,users:D.a}}},H=Object(R.a)(L,(function(){var t=this,e=t._self._c;return e("div",[e("base-header",{staticClass:"pb-6"},[e("div",{staticClass:"row align-items-center py-4"},[e("div",{staticClass:"col-lg-6 col-7"},[e("h6",{staticClass:"h2 text-white d-inline-block mb-0"},[t._v("Tables")]),t._v(" "),e("nav",{staticClass:"d-none d-md-inline-block ml-md-4",attrs:{"aria-label":"breadcrumb"}},[e("route-bread-crumb")],1)]),t._v(" "),e("div",{staticClass:"col-lg-6 col-5 text-right"},[e("base-button",{attrs:{size:"sm",type:"neutral"}},[t._v("New")]),t._v(" "),e("base-button",{attrs:{size:"sm",type:"neutral"}},[t._v("Filters")])],1)])]),t._v(" "),e("div",{staticClass:"container-fluid mt--6"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("light-table")],1)]),t._v(" "),e("inline-actions-table"),t._v(" "),e("striped-table"),t._v(" "),e("checkbox-table"),t._v(" "),e("checkbox-colored-table"),t._v(" "),e("translucent-table"),t._v(" "),e("dark-table")],1)],1)}),[],!1,null,null,null);e.default=H.exports}}]);