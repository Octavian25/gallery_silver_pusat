(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{1263:function(e,t,a){"use strict";a.r(t);var n=a(8),l=a(9),r=a(15),o=a(11),c=a(10),i=a(1),s=a.n(i),m=a(33),d=a(76),E=a(31),u=a(19),b=a(321),g=a(320),p=a(22),h=a(5),f=a(60),k=a(77),O=a(51),_=a.n(O),A=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={},l}return Object(l.a)(a,[{key:"render",value:function(){var e=0,t=0;return this.props.data.forEach(function(a,n){a.detail.forEach(function(a,n){a.stock_on_hand,t+=a.berat_atribut,e+=a.berat}),a.detail.length}),s.a.createElement(s.a.Fragment,null,s.a.createElement(_.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Terima Barang",sheet:"Laporan Terima Barang",buttonText:"Export Exel"}),s.a.createElement("table",{rowkey:"kode_member",id:"table-to-xls",style:{display:"none"}},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"10"}," Periode ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"10"}," ",0===Object(h.n)("tgl_laporan").length?null:JSON.parse(Object(h.n)("tgl_laporan")).tgl_awal+"s/d"+JSON.parse(Object(h.n)("tgl_laporan")).tgl_akhir," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"10"}," TOKO :  ",Object(h.l)().nama_toko," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"10"}," ALAMAT :  ",Object(h.l)().alamat_toko," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"10"})),s.a.createElement("tr",null,s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NO"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"TANGGAL TERIMA"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE BARANG"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE BARCODE"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE INTERN"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA BARANG"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE GUDANG"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE TOKO"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA ATRIBUT"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT ATRIBUT"))),s.a.createElement("tbody",null,this.props.data.map(function(e,t){return s.a.createElement(s.a.Fragment,null,e.detail.map(function(e,a){return s.a.createElement(s.a.Fragment,null,s.a.createElement("tr",null,s.a.createElement("td",{style:{textAlign:"center"}}," ",++t),s.a.createElement("td",{style:{textAlign:"center"}}," ",e.tgl_terima),s.a.createElement("td",null," ",e.kode_barang),s.a.createElement("td",{style:{textAlign:"center"}}," ",e.kode_barcode),s.a.createElement("td",null," ",e.kode_intern),s.a.createElement("td",null," ",e.nama_barang),s.a.createElement("td",{style:{textAlign:"center"}}," ",e.kode_gudang),s.a.createElement("td",{style:{textAlign:"center"}}," ",e.kode_toko),s.a.createElement("td",null," ",e.berat),s.a.createElement("td",null," ",e.nama_atribut),s.a.createElement("td",null," ",e.berat_atribut)))}))})),s.a.createElement("tfoot",null,s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"8",style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"}}," ","Total"," "),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},e.toFixed(3)),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," "),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},t)))))}}]),a}(i.Component),v=a(34),x=(a(53),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]&&arguments[3],new v.default("l","mm",[297,210])),a=[],n=30,l=0,r=0;t.setFontSize(15),t.text("LAPORAN TERIMA BARANG",14,15),t.setFontSize(20),t.text(Object(h.l)().nama_toko,200,15),t.setFontSize(8);var o=Object(h.l)().alamat_toko.length;o>20&&t.text(Object(h.l)().alamat_toko.slice(0,48),200,20),o>50&&t.text(Object(h.l)().alamat_toko.slice(48,90),200,25),t.setFontSize(10),t.setProperties({title:"Laporan Terima Barang"}),t.text("PERIODE : ".concat(0===Object(h.n)("tgl_laporan").length?null:JSON.parse(Object(h.n)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(h.n)("tgl_laporan")).tgl_akhir),14,25);var c=1;e.forEach(function(e,t){e.detail.forEach(function(e,t){var n=[c,{content:e.tgl_terima,style:{halign:"center"}},e.kode_barang,e.kode_barcode,e.kode_intern,e.nama_barang,e.kode_gudang,e.kode_toko,e.berat.toFixed(3),e.nama_atribut,e.berat_atribut.toFixed(3)];a.push(n),parseFloat(e.stock_on_hand),parseFloat(e.berat_atribut),parseFloat(e.berat),parseFloat(e.stock_on_hand),l+=parseFloat(e.berat),r+=parseFloat(e.berat_atribut),++c}),e.detail.length});var i=[{content:"Total ",colSpan:8,styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(l.toFixed(3)),styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"",styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(r.toFixed(3)),styles:{fillColor:"#E8E5E5",textColor:"#000"}}];a.push(i);var s=[{colSpan:9,content:"Printed By ".concat(JSON.parse(Object(h.n)("userdata")).user_id," / ").concat(Object(h.k)()),styles:{fontStyle:"italic",textColor:"#000"}}];a.push(s),t.autoTable({head:[[{content:"NO"},{content:"TANGGAL TERIMA"},{content:"KODE BARANG"},{content:"KODE BARCODE"},{content:"KODE INTERN"},{content:"NAMA BARANG"},{content:"KODE GUDANG"},{content:"KODE BAKI"},{content:"BERAT"},{content:"NAMA ATRIBUTE"},{content:"BERAT ATRIBUTE"}]],body:a,foot:[],startY:n,theme:"plain",rowPageBreak:"avoid",margin:{top:20},headStyles:{fillColor:"#E8E5E5",textColor:"#000"}}),n=t.autoTableEndPosY()+10;var m=t.internal.getNumberOfPages(),d=t.internal.pageSize.width,E=t.internal.pageSize.height;t.setFontSize(10);for(var u=1;u<m+1;u++){var b=d/2,g=E-10;t.setPage(u),t.text("".concat(u," of ").concat(m),b,g,{align:"center"})}var p=t.output("datauristring"),f=window.open();f.document.open(),f.document.write("<html><head><title>Laporan Terima Barang</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+p+"></embed></body></html>")}),y=a(66),N=a.n(y),T=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={date:new Date},l.handleSubmit=l.handleSubmit.bind(Object(r.a)(l)),l.setStartDate=l.setStartDate.bind(Object(r.a)(l)),l.setLastDate=l.setLastDate.bind(Object(r.a)(l)),l}return Object(l.a)(a,[{key:"handleSubmit",value:function(e){console.log(e)}},{key:"exportPdf",value:function(){x(this.props.dataterimabarang)}},{key:"setStartDate",value:function(e){this.setState({tgl_awal:new Date(e)})}},{key:"setLastDate",value:function(e){this.setState({tgl_akhir:new Date(e)})}},{key:"render",value:function(){var e=this,t=[],a=0;this.props.dataterimabarang.forEach(function(e){e.detail.forEach(function(e){t.push(e),a+=e.berat})});var n=[{dataField:"tgl_terima",text:"Tanggal Terima",footerAttrs:{colSpan:"4"},footer:function(e,a,n,l){return s.a.createElement("div",null,"Total Barang : ",t.length," ")}},{dataField:"kode_barang",text:"Kode Barang"},{dataField:"kode_barcode",text:"Kode Barcode"},{dataField:"nama_barang",text:"Nama Barang"},{dataField:"berat",text:"Berat",footer:function(e,t,n,l){return s.a.createElement("div",null,a.toFixed(3)," ")},formatter:function(e){return e.toFixed(3)}}];return s.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(g.a,{name:"tgl_awal",component:p.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:function(t){return e.setStartDate(t)},placeholder:"Masukan Tanggal Dari"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(g.a,{name:"tgl_akhir",component:p.c,type:"text",selected:this.state.tgl_akhir,onChange:function(t){return e.setLastDate(t)},label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),s.a.createElement("div",{className:this.props.export?"col-lg-4  d-none":"col-lg-4"},s.a.createElement("div",{className:"text-right"},s.a.createElement("label",null,"\xa0"),s.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),s.a.createElement("div",{className:this.props.export?"col-lg-4":"col-lg-4 d-none"},s.a.createElement("div",{className:"text-right"},s.a.createElement("label",null,"\xa0"),s.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),s.a.createElement("div",{className:"col-12"},s.a.createElement(f.a,{keyField:"kode_gudang",data:this.props.export?t:[],columns:n,empty:!0,textEmpty:"Data Laporan Terima Barang Kosong"})),s.a.createElement("div",{className:this.props.export?"col-lg-12":"col-lg-12 d-none"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("button",{onClick:function(){return e.exportPdf()},className:"btn btn-warning btn-block"}," ","Export PDF"," ")),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement(A,{data:this.props.dataterimabarang}))))),this.props.isLoading?s.a.createElement(N.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),a}(i.Component);T=Object(b.a)({form:"HeadLaporanTerimaBarang",enableReinitialize:!0,validate:k.a})(T);var S=Object(E.b)(function(e){return{initialValues:{tgl_awal:Object(h.j)(),tgl_akhir:Object(h.j)()}}})(T),j=a(29),D=a(223),C=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={isEdit:!1,modalDialog:!1,dataterimabarang:[],export:!1},l.handleSubmit=l.handleSubmit.bind(Object(r.a)(l)),l}return Object(l.a)(a,[{key:"handleSubmit",value:function(e){var t=this;this.setState({isLoading:!0});var a={tgl_awal:Object(h.f)(D(new Date(e.tgl_awal)).format("YYYY-MM-DD")),tgl_akhir:Object(h.f)(D(new Date(e.tgl_akhir)).format("YYYY-MM-DD"))};Object(u.i)("terimabarang/get/report",a).then(function(e){0===e.data.length?(Object(j.e)("info","Data Yang Anda Cari Tidak Ada"),t.setState({export:!1,isLoading:!1})):(Object(j.e)("success","Laporan Terima Barang Tersedia"),Object(h.o)("tgl_laporan",JSON.stringify(a)),t.setState({export:!0,isLoading:!1,dataterimabarang:e.data}))}).catch(function(e){t.setState({export:!1,isLoading:!1}),Object(j.e)("info","Data Yang Anda Cari Tidak Ada")})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("ol",{className:"breadcrumb float-xl-right"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(m.b,{to:"#"},"Laporan Barang")),s.a.createElement("li",{className:"breadcrumb-item active"},"Laporan Terima Barang")),s.a.createElement("h1",{className:"page-header"},"Laporan Terima Barang "),s.a.createElement(d.a,null,s.a.createElement(d.c,null,"Filter Laporan"),s.a.createElement("br",null),s.a.createElement("div",{className:"container"},s.a.createElement(S,{export:this.state.export,isLoading:this.state.isLoading,dataterimabarang:this.state.dataterimabarang,onSubmit:function(t){return e.handleSubmit(t)}})),s.a.createElement("br",null)))}}]),a}(s.a.Component);C=Object(b.a)({form:"LaporanTerimaBarang",enableReinitialize:!0})(C);t.default=Object(E.b)(function(e){return{hideModal:e.datamaster.modalDialog}},null)(C)}}]);
//# sourceMappingURL=74.36c41bb3.chunk.js.map