(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{1200:function(e,t,a){"use strict";a.r(t);var l=a(8),n=a(9),r=a(15),o=a(11),c=a(10),s=a(1),i=a.n(s),m=a(31),E=a(320),u=a(321),d=a(22),g=a(5),p=a(60),h=a(77),b=a(51),S=a.n(b),k=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(n.a)(a,[{key:"render",value:function(){var e=0,t=0,a=0,l=0;return this.props.data.forEach(function(n,r){n.detail.forEach(function(n,r){n.detail_barang.forEach(function(e,n){a+=parseInt(e.ongkos)*parseInt(e.jumlah),l+=e.jumlah,t+=e.berat}),e+=n.detail_barang.length})}),i.a.createElement(i.a.Fragment,null,i.a.createElement(S.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Transaksi Service",sheet:"Laporan Transaksi Service",buttonText:"Export Exel"}),i.a.createElement("table",{rowkey:"kode_member",id:"table-to-xls",style:{display:"none"}},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{colSpan:"7",style:{textAlign:"center"}}," ","LAPORAN TRANSAKSI SERVICE"," ")),i.a.createElement("tr",null,i.a.createElement("th",{colSpan:"7"}," Periode ")),i.a.createElement("tr",null,i.a.createElement("th",{colSpan:"7"}," ",0===Object(g.n)("tgl_laporan").length?null:JSON.parse(Object(g.n)("tgl_laporan")).tgl_awal+"s/d"+JSON.parse(Object(g.n)("tgl_laporan")).tgl_akhir," ")),i.a.createElement("tr",null,i.a.createElement("th",{colSpan:"7"}," TOKO :  ",Object(g.l)().nama_toko," ")),i.a.createElement("tr",null,i.a.createElement("th",{colSpan:"7"}," ALAMAT :  ",Object(g.l)().alamat_toko," ")),i.a.createElement("tr",null,i.a.createElement("th",{colSpan:"7"})),i.a.createElement("tr",null,i.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"TANGGAL TRANSAKSI"),i.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE SALES"),i.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA CUSTOMER"),i.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NO HP"),i.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"ALAMAT CUSTOMER"),i.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE GUDANG"),i.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"TOTAL SERVICE"))),i.a.createElement("tbody",null,this.props.data.map(function(e,t){return i.a.createElement("div",{key:t},i.a.createElement(i.a.Fragment,null,i.a.createElement("tr",{key:t},i.a.createElement("th",{colSpan:"7",style:{textAlign:"left",border:"1px solid #000"}},"No Service"," ",e._id.no_faktur_service," "))),e.detail.map(function(e,t){return i.a.createElement(i.a.Fragment,null,i.a.createElement("tr",{key:t},i.a.createElement("td",null," ",e.tgl_system),i.a.createElement("td",null," ",e.kode_sales),i.a.createElement("td",null," ",e.nama_customer),i.a.createElement("td",null," ",e.no_hp),i.a.createElement("td",null," ",e.alamat_customer),i.a.createElement("td",{style:{textAlign:"center"}}," ",e.kode_gudang),i.a.createElement("td",{style:{textAlign:"center"}}," ",e.total)),i.a.createElement("tr",null,i.a.createElement("th",{colSpan:"7"}," ","Detail Barang"," ")),i.a.createElement("tr",null,i.a.createElement("th",{colSpan:"3",style:{backgroundColor:"#E8E5E5",color:"#000"}}," ","NAMA BARANG"," "),i.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," ","BERAT"," "),i.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," ","JUMLAH"," "),i.a.createElement("th",{colSpan:"2",style:{backgroundColor:"#E8E5E5",color:"#000"}}," ","DESKRIPSI"," ")),i.a.createElement(i.a.Fragment,null,e.detail_barang.map(function(e,t){return i.a.createElement(i.a.Fragment,null,i.a.createElement("tr",null,i.a.createElement("td",{colSpan:"3",style:{textAlign:"center"}}," ",e.nama_barang),i.a.createElement("td",{style:{textAlign:"center"}}," ",parseFloat(e.berat.toFixed(3))),i.a.createElement("td",{style:{textAlign:"center"}}," ",e.jumlah),i.a.createElement("td",{colSpan:"2",style:{textAlign:"center"}}," ",e.deskripsi)))})))}))})),i.a.createElement("tfoot",null,i.a.createElement("tr",null,i.a.createElement("th",{colSpan:"7",style:{border:"1px solid #000",textAlign:"left"}},"Total Berat : ",t.toFixed(3),i.a.createElement("br",null),"Total Jumlah : ",l,i.a.createElement("br",null),"Total Ongkos : ",a.toLocaleString("kr-KO")," ",i.a.createElement("br",null),"Total Barang : ",e,i.a.createElement("br",null))))))}}]),a}(s.Component),f=a(34),O=(a(53),function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]&&arguments[3],new f.default("l","mm",[297,210])),l=[],n=[],r=30,o=0,c=0,s=0,i=0;a.setFontSize(15),a.text("LAPORAN SERVICES",14,15),a.setFontSize(20),a.text(Object(g.l)().nama_toko,200,15),a.setFontSize(8);var m=Object(g.l)().alamat_toko.length;m>20&&a.text(Object(g.l)().alamat_toko.slice(0,48),200,20),m>50&&a.text(Object(g.l)().alamat_toko.slice(48,90),200,25),a.setFontSize(10),a.setProperties({title:"LAPORAN SERVICES"}),a.text("PERIODE : ".concat(0===Object(g.n)("tgl_laporan").length?null:JSON.parse(Object(g.n)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(g.n)("tgl_laporan")).tgl_akhir),14,25),e=[[{content:"TANGGAL TRANSAKSI"},{content:"KODE SALES"},{content:"NAMA CUSTOMER"},{content:"NO HP"},{content:"ALAMAT CUSTOMER"},{content:"KODE GUDANG"},{content:"Total Service",styles:{halign:"right"}}]],t.forEach(function(e,t){var a=[{content:"No Services : ".concat(e._id.no_faktur_service," "),colSpan:7}];l.push(a),e.detail.forEach(function(e,t){var a=[e.tgl_system,e.kode_sales,e.nama_customer,e.no_hp,e.alamat_customer,e.kode_gudang,{content:e.total.toLocaleString("kr-KO"),styles:{halign:"right"}}];l.push(a),e.detail_barang.forEach(function(e,t){n=[{content:"Detail Barang",colSpan:7,styles:{halign:"center"}}],l.push(n),l.push([{content:"Nama Barang",colSpan:2,styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"BERAT",styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"JUMLAH",styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"Ongkos",styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"Deskripsi",colSpan:3,styles:{fillColor:"#E8E5E5",textColor:"#000"}}]),i+=parseInt(e.ongkos)*parseInt(e.jumlah),s+=e.jumlah,c+=e.berat;var a=[{content:e.nama_barang,colSpan:2},e.berat.toFixed(3),e.jumlah,(parseInt(e.ongkos)*parseInt(e.jumlah)).toLocaleString("kr-KO"),{content:e.deskripsi,colSpan:2}];l.push(a)}),o+=e.detail_barang.length})});var E=[{content:"Printed By ".concat(JSON.parse(Object(g.n)("userdata")).user_id," / ").concat(Object(g.k)()),colSpan:8,styles:{fontStyle:"italic",textColor:"#000"}}];l.push(E),a.autoTable({head:e,body:l,startY:r,theme:"plain",rowPageBreak:"avoid",margin:{top:10},footStyles:{fontSize:8},bodyStyles:{fontSize:8},headStyles:{fontSize:8,fillColor:"#E8E5E5",textColor:"#000"},tableLineColor:[255,255,255],tableLineWidth:1}),r=a.autoTableEndPosY()+3,l=[],a.text("User                          : ".concat(JSON.parse(Object(g.n)("userdata")).user_id),14,r+10),a.text("Cetak                        : ".concat(Object(g.k)()),14,r+16),a.text("Total Berat                : ".concat(c.toFixed(3)),14,r+22),a.text("Total Jumlah             : ".concat(s),14,r+28),a.text("Total Ongkos            : ".concat(parseInt(i).toLocaleString("kr-KO")),14,r+34),a.text("Total Barang             : ".concat(o),14,r+40);var u=a.internal.getNumberOfPages(),d=a.internal.pageSize.width,p=a.internal.pageSize.height;a.setFontSize(10);for(var h=1;h<u+1;h++){var b=d/2,S=p-10;a.setPage(h),a.text("".concat(h," of ").concat(u),b,S,{align:"center"})}var k=a.output("datauristring"),O=window.open();O.document.open(),O.document.write("<html><head><title>LAPORAN SERVICES</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+k+"></embed></body></html>")}),y=a(66),_=a.n(y),x=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={date:new Date},n.setStartDate=n.setStartDate.bind(Object(r.a)(n)),n.setLastDate=n.setLastDate.bind(Object(r.a)(n)),n}return Object(n.a)(a,[{key:"exportPdf",value:function(){O(this.props.LaporanServices)}},{key:"setStartDate",value:function(e){this.setState({tgl_awal:new Date(e)})}},{key:"setLastDate",value:function(e){this.setState({tgl_akhir:new Date(e)})}},{key:"render",value:function(){var e=this,t=0,a=[];this.props.LaporanServices.forEach(function(e,l){e.detail.forEach(function(e,l){a.push(e),t+=e.total})});var l=[{dataField:"no_faktur_service",text:"No Faktur",footerAttrs:{colSpan:"7"},footer:function(e,t,l,n){return i.a.createElement("div",null,"Total Services : ",a.length," ")}},{dataField:"tgl_system",text:"Tgl Transaksi"},{dataField:"kode_sales",text:"Kode Sales"},{dataField:"nama_customer",text:"Nama Customer"},{dataField:"no_hp",text:"No Hp"},{dataField:"alamat_customer",text:"Alamat Customer"},{dataField:"kode_gudang",text:"Kode Gudang"},{dataField:"total",text:"Total Service",headerClasses:"text-right",footer:function(e,a,l,n){return i.a.createElement("div",{className:"text-right"},t.toLocaleString("kr-KO")," ")},formatter:function(e){return i.a.createElement("div",{className:"text-right"},e.toLocaleString("kr-KO"))}}];return i.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-4"},i.a.createElement(E.a,{name:"tgl_awal",component:d.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:function(t){return e.setStartDate(t)},placeholder:"Masukan Tanggal Dari"})),i.a.createElement("div",{className:"col-lg-4"},i.a.createElement(E.a,{name:"tgl_akhir",component:d.c,type:"text",selected:this.state.tgl_akhir,onChange:function(t){return e.setLastDate(t)},label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),i.a.createElement("div",{className:"col-lg-4"},i.a.createElement("div",{className:"text-right"},i.a.createElement("label",null,"\xa0"),i.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?i.a.createElement(i.a.Fragment,null,i.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),i.a.createElement("div",{className:"col-lg-12"},i.a.createElement(p.a,{keyField:"no_hp",data:this.props.export?a:[],columns:l,empty:!0,textEmpty:"Data Laporan Transaksi Service Kosong"})),i.a.createElement("div",{className:this.props.export?"col-lg-12":"col-lg-12 d-none"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-6"},i.a.createElement("button",{onClick:function(){return e.exportPdf()},className:"btn btn-warning btn-block"}," ","Export PDF"," ")),i.a.createElement("div",{className:"col-lg-6"},i.a.createElement(k,{data:this.props.LaporanServices}))))),this.props.isLoading?i.a.createElement(_.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),a}(s.Component);x=Object(u.a)({form:"HeadFormLaporanService",enableReinitialize:!0,validate:h.a})(x);t.default=Object(m.b)(function(e){return{initialValues:{tgl_awal:Object(g.j)(),tgl_akhir:Object(g.j)()}}})(x)}}]);
//# sourceMappingURL=111.5d03ab3a.chunk.js.map