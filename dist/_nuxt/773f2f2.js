(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{431:function(t,e,r){"use strict";r(434);var o=r(439);e.a={mounted:function(){Object(o.c)()}}},439:function(t,e,r){"use strict";r.d(e,"a",(function(){return m})),r.d(e,"c",(function(){return C})),r.d(e,"b",(function(){return y}));r(32),r(21),r(26),r(38),r(39);var o=r(9),n=r(29);function c(t,e){for(var r in e)"object"!==Object(n.a)(e[r])?t[r]=e[r]:c(t[r],e[r])}var l=r(434),d=r.n(l);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={mode:"light",fonts:{base:"Open Sans"},colors:{gray:{100:"#f6f9fc",200:"#e9ecef",300:"#dee2e6",400:"#ced4da",500:"#adb5bd",600:"#8898aa",700:"#525f7f",800:"#32325d",900:"#212529"},theme:{default:"#172b4d",primary:"#5e72e4",secondary:"#f4f5f7",info:"#11cdef",success:"#2dce89",danger:"#f5365c",warning:"#fb6340"},black:"#12263F",white:"#FFFFFF",transparent:"transparent"}};var j=!1;function C(){var t,e,r,o;j||(c(d.a,(t=m.colors,e=m.mode,r=m.fonts,o={defaults:{global:{responsive:!0,maintainAspectRatio:!1,defaultColor:"dark"===e?t.gray[700]:t.gray[600],defaultFontColor:"dark"===e?t.gray[700]:t.gray[600],defaultFontFamily:r.base,defaultFontSize:13,layout:{padding:0},legend:{display:!1,position:"bottom",labels:{usePointStyle:!0,padding:16}},elements:{point:{radius:0,backgroundColor:t.theme.primary},line:{tension:.4,borderWidth:4,borderColor:t.theme.primary,backgroundColor:t.transparent,borderCapStyle:"rounded"},rectangle:{backgroundColor:t.theme.warning},arc:{backgroundColor:t.theme.primary,borderColor:"dark"==e?t.gray[800]:t.white,borderWidth:4}},tooltips:{enabled:!0,mode:"index",intersect:!1}},pie:{tooltips:{mode:"point"}},doughnut:{tooltips:{mode:"point"},cutoutPercentage:83,legendCallback:function(t){var data=t.data,content="";return data.labels.forEach((function(label,t){var e=data.datasets[0].backgroundColor[t];content+='<span class="chart-legend-item">',content+='<i class="chart-legend-indicator" style="background-color: '+e+'"></i>',content+=label,content+="</span>"})),content}}}},d.a.scaleService.updateScaleDefaults("linear",{gridLines:{borderDash:[2],borderDashOffset:[2],color:"dark"===e?t.gray[900]:t.gray[200],drawBorder:!1,drawTicks:!0,zeroLineWidth:1,zeroLineColor:"dark"===e?t.gray[900]:t.gray[200],zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2]},ticks:{beginAtZero:!0,padding:10,callback:function(t){if(!(t%10))return t}}}),d.a.scaleService.updateScaleDefaults("category",{gridLines:{drawBorder:!1,drawOnChartArea:!1,drawTicks:!1,lineWidth:1,zeroLineWidth:1},ticks:{padding:20},maxBarThickness:10}),o)),j=!0)}var v={maintainAspectRatio:!1,legend:{display:!1},responsive:!0},y={scales:{yAxes:[{gridLines:{color:m.colors.gray[700],zeroLineColor:m.colors.gray[700]}}]}};f(f({},v),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:125,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}),f(f({},v),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{gridLines:{drawBorder:!1,color:"rgba(253,93,147,0.1)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:125,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{gridLines:{drawBorder:!1,color:"rgba(253,93,147,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}),f(f({},v),{},{cutoutPercentage:70,tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{display:0,ticks:{display:!1},gridLines:{drawBorder:!1,zeroLineColor:"transparent",color:"rgba(255,255,255,0.05)"}}],xAxes:[{display:0,barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(255,255,255,0.1)",zeroLineColor:"transparent"},ticks:{display:!1}}]}}),f(f({},v),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:125,padding:20,fontColor:"#9a9a9a"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(225,78,202,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}]}}),f(f({},v),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:50,suggestedMax:110,padding:20,fontColor:"#ff8a76"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(220,53,69,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#ff8a76"}}]}}),f(f({},v),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:50,suggestedMax:125,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(0,242,195,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}),f(f({},v),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:120,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}})},580:function(t,e,r){"use strict";var o=r(438),n=r(431);e.a={name:"line-chart",extends:o.c,mixins:[o.e.reactiveProp,n.a],props:{extraOptions:{type:Object,default:function(){return{}}}},data:function(){return{ctx:null}},mounted:function(){var t=this;this.$watch("chartData",(function(e,r){r||t.renderChart(t.chartData,t.extraOptions)}),{immediate:!0})}}},581:function(t,e,r){"use strict";var o=r(438),n=r(431);e.a={name:"bar-chart",extends:o.a,mixins:[o.e.reactiveProp,n.a],props:{extraOptions:{type:Object,default:function(){return{}}}},data:function(){return{ctx:null}},mounted:function(){var t=this;this.$watch("chartData",(function(e,r){r||t.renderChart(t.chartData,t.extraOptions)}),{immediate:!0})}}},587:function(t,e,r){var map={"./af":441,"./af.js":441,"./ar":442,"./ar-dz":443,"./ar-dz.js":443,"./ar-kw":444,"./ar-kw.js":444,"./ar-ly":445,"./ar-ly.js":445,"./ar-ma":446,"./ar-ma.js":446,"./ar-sa":447,"./ar-sa.js":447,"./ar-tn":448,"./ar-tn.js":448,"./ar.js":442,"./az":449,"./az.js":449,"./be":450,"./be.js":450,"./bg":451,"./bg.js":451,"./bm":452,"./bm.js":452,"./bn":453,"./bn-bd":454,"./bn-bd.js":454,"./bn.js":453,"./bo":455,"./bo.js":455,"./br":456,"./br.js":456,"./bs":457,"./bs.js":457,"./ca":458,"./ca.js":458,"./cs":459,"./cs.js":459,"./cv":460,"./cv.js":460,"./cy":461,"./cy.js":461,"./da":462,"./da.js":462,"./de":463,"./de-at":464,"./de-at.js":464,"./de-ch":465,"./de-ch.js":465,"./de.js":463,"./dv":466,"./dv.js":466,"./el":467,"./el.js":467,"./en-au":468,"./en-au.js":468,"./en-ca":469,"./en-ca.js":469,"./en-gb":470,"./en-gb.js":470,"./en-ie":471,"./en-ie.js":471,"./en-il":472,"./en-il.js":472,"./en-in":473,"./en-in.js":473,"./en-nz":474,"./en-nz.js":474,"./en-sg":475,"./en-sg.js":475,"./eo":476,"./eo.js":476,"./es":477,"./es-do":478,"./es-do.js":478,"./es-mx":479,"./es-mx.js":479,"./es-us":480,"./es-us.js":480,"./es.js":477,"./et":481,"./et.js":481,"./eu":482,"./eu.js":482,"./fa":483,"./fa.js":483,"./fi":484,"./fi.js":484,"./fil":485,"./fil.js":485,"./fo":486,"./fo.js":486,"./fr":487,"./fr-ca":488,"./fr-ca.js":488,"./fr-ch":489,"./fr-ch.js":489,"./fr.js":487,"./fy":490,"./fy.js":490,"./ga":491,"./ga.js":491,"./gd":492,"./gd.js":492,"./gl":493,"./gl.js":493,"./gom-deva":494,"./gom-deva.js":494,"./gom-latn":495,"./gom-latn.js":495,"./gu":496,"./gu.js":496,"./he":497,"./he.js":497,"./hi":498,"./hi.js":498,"./hr":499,"./hr.js":499,"./hu":500,"./hu.js":500,"./hy-am":501,"./hy-am.js":501,"./id":502,"./id.js":502,"./is":503,"./is.js":503,"./it":504,"./it-ch":505,"./it-ch.js":505,"./it.js":504,"./ja":506,"./ja.js":506,"./jv":507,"./jv.js":507,"./ka":508,"./ka.js":508,"./kk":509,"./kk.js":509,"./km":510,"./km.js":510,"./kn":511,"./kn.js":511,"./ko":512,"./ko.js":512,"./ku":513,"./ku.js":513,"./ky":514,"./ky.js":514,"./lb":515,"./lb.js":515,"./lo":516,"./lo.js":516,"./lt":517,"./lt.js":517,"./lv":518,"./lv.js":518,"./me":519,"./me.js":519,"./mi":520,"./mi.js":520,"./mk":521,"./mk.js":521,"./ml":522,"./ml.js":522,"./mn":523,"./mn.js":523,"./mr":524,"./mr.js":524,"./ms":525,"./ms-my":526,"./ms-my.js":526,"./ms.js":525,"./mt":527,"./mt.js":527,"./my":528,"./my.js":528,"./nb":529,"./nb.js":529,"./ne":530,"./ne.js":530,"./nl":531,"./nl-be":532,"./nl-be.js":532,"./nl.js":531,"./nn":533,"./nn.js":533,"./oc-lnc":534,"./oc-lnc.js":534,"./pa-in":535,"./pa-in.js":535,"./pl":536,"./pl.js":536,"./pt":537,"./pt-br":538,"./pt-br.js":538,"./pt.js":537,"./ro":539,"./ro.js":539,"./ru":540,"./ru.js":540,"./sd":541,"./sd.js":541,"./se":542,"./se.js":542,"./si":543,"./si.js":543,"./sk":544,"./sk.js":544,"./sl":545,"./sl.js":545,"./sq":546,"./sq.js":546,"./sr":547,"./sr-cyrl":548,"./sr-cyrl.js":548,"./sr.js":547,"./ss":549,"./ss.js":549,"./sv":550,"./sv.js":550,"./sw":551,"./sw.js":551,"./ta":552,"./ta.js":552,"./te":553,"./te.js":553,"./tet":554,"./tet.js":554,"./tg":555,"./tg.js":555,"./th":556,"./th.js":556,"./tk":557,"./tk.js":557,"./tl-ph":558,"./tl-ph.js":558,"./tlh":559,"./tlh.js":559,"./tr":560,"./tr.js":560,"./tzl":561,"./tzl.js":561,"./tzm":562,"./tzm-latn":563,"./tzm-latn.js":563,"./tzm.js":562,"./ug-cn":564,"./ug-cn.js":564,"./uk":565,"./uk.js":565,"./ur":566,"./ur.js":566,"./uz":567,"./uz-latn":568,"./uz-latn.js":568,"./uz.js":567,"./vi":569,"./vi.js":569,"./x-pseudo":570,"./x-pseudo.js":570,"./yo":571,"./yo.js":571,"./zh-cn":572,"./zh-cn.js":572,"./zh-hk":573,"./zh-hk.js":573,"./zh-mo":574,"./zh-mo.js":574,"./zh-tw":575,"./zh-tw.js":575};function o(t){var e=n(t);return r(e)}function n(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=n,t.exports=o,o.id=587},762:function(t,e,r){"use strict";r.r(e);var o=r(438),n=r(431),c={name:"doughnut-chart",extends:o.b,mixins:[o.e.reactiveProp,n.a],props:{extraOptions:{type:Object,default:function(){return{}}}},data:function(){return{ctx:null}},mounted:function(){var t=this;this.$watch("chartData",(function(e,r){r||t.renderChart(t.chartData,t.extraOptions)}),{immediate:!0})}},l=r(580),d=r(581),h={name:"pie-chart",extends:o.d,mixins:[o.e.reactiveProp,n.a],props:{extraOptions:{type:Object,default:function(){return{}}}},data:function(){return{ctx:null}},mounted:function(){var t=this;this.$watch("chartData",(function(e,r){r||t.renderChart(t.chartData,t.extraOptions)}),{immediate:!0})}},f=r(439),m=r(115),j=r(129),C=r(117);function v(){return Math.round(100*Math.random())}var y={layout:"DashboardLayout",components:{DoughnutChart:c,LineChart:l.a,BarChart:d.a,PieChart:h,StatsCard:C.a,BaseHeader:j.a,RouteBreadCrumb:m.a},data:function(){return{salesChart:{chartData:{labels:["May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Performance",data:[0,20,10,30,15,40,20,60,60]}]},extraOptions:f.b},ordersChart:{chartData:{labels:["Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Sales",data:[25,20,30,22,17,29]}]}},dotsChart:{chartData:{labels:["May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Performance",data:[10,18,28,23,28,40,36,46,52],pointRadius:10,pointHoverRadius:15,showLine:!1}]},extraOptions:{scales:{yAxes:[{gridLines:{color:f.a.colors.gray[200],zeroLineColor:f.a.colors.gray[200]}}]}}},doughnutChart:{chartData:{labels:["Danger","Warning","Success","Primary","Info"],datasets:[{data:[v(),v(),v(),v(),v()],backgroundColor:[f.a.colors.theme.danger,f.a.colors.theme.warning,f.a.colors.theme.success,f.a.colors.theme.primary,f.a.colors.theme.info],label:"Dataset 1"}]},extraOptions:{responsive:!0,legend:{position:"top"},animation:{animateScale:!0,animateRotate:!0}}},pieChart:{chartData:{labels:["Danger","Warning","Success","Primary","Info"],datasets:[{data:[v(),v(),v(),v(),v()],backgroundColor:[f.a.colors.theme.danger,f.a.colors.theme.warning,f.a.colors.theme.success,f.a.colors.theme.primary,f.a.colors.theme.info],label:"Dataset 1"}]},extraOptions:{responsive:!0,legend:{position:"top"},animation:{animateScale:!0,animateRotate:!0}}},barChartStacked:{chartData:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"Dataset 1",backgroundColor:f.a.colors.theme.danger,data:[v(),v(),v(),v(),v(),v(),v()]},{label:"Dataset 2",backgroundColor:f.a.colors.theme.primary,data:[v(),v(),v(),v(),v(),v(),v()]},{label:"Dataset 3",backgroundColor:f.a.colors.theme.success,data:[v(),v(),v(),v(),v(),v(),v()]}]},extraOptions:{tooltips:{mode:"index",intersect:!1},responsive:!0,scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]}}}}}},x=r(7),component=Object(x.a)(y,(function(){var t=this,e=t._self._c;return e("div",[e("base-header",{staticClass:"pb-6"},[e("div",{staticClass:"row align-items-center py-4"},[e("div",{staticClass:"col-lg-6 col-7"},[e("h6",{staticClass:"h2 text-white d-inline-block mb-0"},[t._v("Charts")]),t._v(" "),e("nav",{staticClass:"d-none d-md-inline-block ml-md-4",attrs:{"aria-label":"breadcrumb"}},[e("route-bread-crumb")],1)]),t._v(" "),e("div",{staticClass:"col-lg-6 col-5 text-right"},[e("base-button",{attrs:{size:"sm",type:"neutral"}},[t._v("New")]),t._v(" "),e("base-button",{attrs:{size:"sm",type:"neutral"}},[t._v("Filters")])],1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-3 col-md-6"},[e("stats-card",{attrs:{title:"Total traffic",type:"gradient-red","sub-title":"350,897",icon:"ni ni-active-40"}},[e("template",{slot:"footer"},[e("span",{staticClass:"text-success mr-2"},[e("i",{staticClass:"fa fa-arrow-up"}),t._v(" 3.48%")]),t._v(" "),e("span",{staticClass:"text-nowrap"},[t._v("Since last month")])])],2)],1),t._v(" "),e("div",{staticClass:"col-xl-3 col-md-6"},[e("stats-card",{attrs:{title:"Total traffic",type:"gradient-orange","sub-title":"2,356",icon:"ni ni-chart-pie-35"}},[e("template",{slot:"footer"},[e("span",{staticClass:"text-success mr-2"},[e("i",{staticClass:"fa fa-arrow-up"}),t._v(" 12.18%")]),t._v(" "),e("span",{staticClass:"text-nowrap"},[t._v("Since last month")])])],2)],1),t._v(" "),e("div",{staticClass:"col-xl-3 col-md-6"},[e("stats-card",{attrs:{title:"Sales",type:"gradient-green","sub-title":"924",icon:"ni ni-money-coins"}},[e("template",{slot:"footer"},[e("span",{staticClass:"text-danger mr-2"},[e("i",{staticClass:"fa fa-arrow-down"}),t._v(" 5.72%")]),t._v(" "),e("span",{staticClass:"text-nowrap"},[t._v("Since last month")])])],2)],1),t._v(" "),e("div",{staticClass:"col-xl-3 col-md-6"},[e("stats-card",{attrs:{title:"Performance",type:"gradient-info","sub-title":"49,65%",icon:"ni ni-chart-bar-32"}},[e("template",{slot:"footer"},[e("span",{staticClass:"text-success mr-2"},[e("i",{staticClass:"fa fa-arrow-up"}),t._v(" 54.8%")]),t._v(" "),e("span",{staticClass:"text-nowrap"},[t._v("Since last month")])])],2)],1)])]),t._v(" "),e("div",{staticClass:"container-fluid mt--6"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-6"},[e("card",[e("template",{slot:"header"},[e("h6",{staticClass:"surtitle"},[t._v("Overview")]),t._v(" "),e("h5",{staticClass:"h3 mb-0"},[t._v("Total sales")])]),t._v(" "),e("div",{staticClass:"chart"},[e("line-chart",{attrs:{height:350,"chart-data":t.salesChart.chartData}})],1)],2)],1),t._v(" "),e("div",{staticClass:"col-xl-6"},[e("card",[e("template",{slot:"header"},[e("h6",{staticClass:"surtitle"},[t._v("Performance")]),t._v(" "),e("h5",{staticClass:"h3 mb-0"},[t._v("Total orders")])]),t._v(" "),e("div",{staticClass:"chart"},[e("bar-chart",{attrs:{"chart-data":t.ordersChart.chartData,height:350}})],1)],2)],1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-6"},[e("card",[e("template",{slot:"header"},[e("h6",{staticClass:"surtitle"},[t._v("Growth")]),t._v(" "),e("h5",{staticClass:"h3 mb-0"},[t._v("Sales value")])]),t._v(" "),e("div",{staticClass:"chart"},[e("line-chart",{attrs:{height:350,"chart-data":t.dotsChart.chartData,"extra-options":t.dotsChart.extraOptions}})],1)],2)],1),t._v(" "),e("div",{staticClass:"col-xl-6"},[e("card",[e("template",{slot:"header"},[e("h6",{staticClass:"surtitle"},[t._v("Users")]),t._v(" "),e("h5",{staticClass:"h3 mb-0"},[t._v("Audience overview")])]),t._v(" "),e("div",{staticClass:"chart-area"},[e("doughnut-chart",{attrs:{height:350,"chart-data":t.doughnutChart.chartData,"extra-options":t.doughnutChart.extraOptions}})],1)],2)],1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-6"},[e("card",[e("template",{slot:"header"},[e("h6",{staticClass:"surtitle"},[t._v("Partners")]),t._v(" "),e("h5",{staticClass:"h3 mb-0"},[t._v("Affiliate traffic")])]),t._v(" "),e("div",{staticClass:"chart"},[e("pie-chart",{attrs:{height:350,"chart-data":t.pieChart.chartData,"extra-options":t.pieChart.extraOptions}})],1)],2)],1),t._v(" "),e("div",{staticClass:"col-xl-6"},[e("card",[e("template",{slot:"header"},[e("h6",{staticClass:"surtitle"},[t._v("Overview")]),t._v(" "),e("h5",{staticClass:"h3 mb-0"},[t._v("Product comparison")])]),t._v(" "),e("div",{staticClass:"chart-area"},[e("bar-chart",{attrs:{height:350,"chart-data":t.barChartStacked.chartData,"extra-options":t.barChartStacked.extraOptions}})],1)],2)],1)])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);