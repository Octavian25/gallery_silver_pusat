(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1198:function(t,e,a){"use strict";a.r(e);var n=a(8),l=a(9),r=a(15),o=a(11),c=a(10),i=a(1),s=a.n(i),g=a(31),u=a(320),d=a(321),E=a(7),h=a(22),m=a(5),p=a(60),b=a(794),k=a(51),S=a.n(k),A=function(t){Object(o.a)(a,t);var e=Object(c.a)(a);function a(t){var l;return Object(n.a)(this,a),(l=e.call(this,t)).state={},l}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(S.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Transaksi Penjualan Sales Detail",sheet:"Laporan Transaksi Penjualan Sales Detail",buttonText:"Export Exel"}),s.a.createElement("table",{id:"table-to-xls",style:{display:"none"}},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"12",style:{textAlign:"center"}}," ","LAPORAN TRANSAKSI PENJUALAN SALES DETAIL"," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"12"}," Periode  ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"12"}," ",0===Object(m.n)("tgl_laporan").length?null:JSON.parse(Object(m.n)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(m.n)("tgl_laporan")).tgl_akhir," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"12"}," TOKO :  ",Object(m.l)().nama_toko," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"12"}," ALAMAT :  ",Object(m.l)().alamat_toko," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"12"}))),this.props.data.map(function(t,e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",{style:{textAlign:"left"}},"Kode Sales : ",t._id.kode_sales),s.a.createElement("td",{colSpan:"11"}," ")),s.a.createElement("tr",null,s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NO FAKTUR"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE DEPT"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE BARCODE"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA BARANG"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA ATRIBUT"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"BERAT"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"ONGKOS"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"HARGA JUAL"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"BERAT ATRIBUT"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"HARGA ATRIBUT"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"HARGA GRAM"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"HARGA TOTAL")),t.detail.map(function(t,e){return s.a.createElement("tr",null,s.a.createElement("td",null,t.no_faktur_jual),s.a.createElement("td",null,t.kode_dept),s.a.createElement("td",null,t.kode_barcode),s.a.createElement("td",{style:{whiteSpace:"nowrap"}},t.nama_barang),s.a.createElement("td",null,t.nama_atribut),s.a.createElement("td",{style:{textAlign:"right"}},void 0!==t.berat?Object(m.g)(t.berat,3):0),s.a.createElement("td",{style:{textAlign:"right"}},void 0!==t.ongkos?t.ongkos.toLocaleString("kr-KO"):0),s.a.createElement("td",{style:{textAlign:"right"}},void 0!==t.harga_jual?t.harga_jual.toLocaleString("kr-KO"):0),s.a.createElement("td",{style:{textAlign:"right"}},void 0!==t.berat_atribut?Object(m.g)(t.berat_atribut,3):0),s.a.createElement("td",{style:{textAlign:"right"}},void 0!==t.harga_atribut?t.harga_atribut.toLocaleString("kr-KO"):0),s.a.createElement("td",{style:{textAlign:"right"}},void 0!==t.harga_gram?t.harga_gram.toLocaleString("kr-KO"):0),s.a.createElement("td",{style:{textAlign:"right"}},void 0!==t.harga_total?t.harga_total.toLocaleString("kr-KO"):0))})),s.a.createElement("tfoot",null,s.a.createElement("tr",null,s.a.createElement("td",{colSpan:"4",style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"}},"Total Penjualan :  ",t.detail.length),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," "),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",t.detail.map(function(t){return t.berat}).reduce(function(t,e){return t+e},0),"  "),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",t.detail.map(function(t){return t.ongkos}).reduce(function(t,e){return t+e},0).toLocaleString("kr-KO"),"  "),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",t.detail.map(function(t){return t.harga_jual}).reduce(function(t,e){return t+e},0).toLocaleString("kr-KO")," "),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",t.detail.map(function(t){return t.berat_atribut}).reduce(function(t,e){return t+e},0).toLocaleString("kr-KO"),"  "),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",t.detail.map(function(t){return t.harga_atribut}).reduce(function(t,e){return t+e},0).toLocaleString("kr-KO")," "),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",t.detail.map(function(t){return t.harga_gram}).reduce(function(t,e){return t+e},0).toLocaleString("kr-KO")," "),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",t.detail.map(function(t){return t.harga_total}).reduce(function(t,e){return t+e},0).toLocaleString("kr-KO")," ")),s.a.createElement("tr",null,s.a.createElement("td",{colSpan:"12"}))))})))}}]),a}(i.Component),f=a(34),O=(a(53),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]&&arguments[3],new f.default("l","mm",[297,210])),a=[],n=[],l=30;e.setFontSize(15),e.text("LAPORAN PENJUALAN SALES",14,15),e.setFontSize(20),e.text(Object(m.l)().nama_toko,200,15),e.setFontSize(8);var r=Object(m.l)().alamat_toko.length;r>20&&e.text(Object(m.l)().alamat_toko.slice(0,48),200,20),r>50&&e.text(Object(m.l)().alamat_toko.slice(48,90),200,25),e.setFontSize(10),e.setProperties({title:"LAPORAN PENJUALAN SALES"}),e.text("PERIODE : ".concat(0===Object(m.n)("tgl_laporan").length?null:JSON.parse(Object(m.n)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(m.n)("tgl_laporan")).tgl_akhir),14,25),t.forEach(function(t,r){n=[[{content:"KODE SALES : ".concat(t._id.kode_sales),colSpan:12}],[{content:"NO FAKTUR"},{content:"KODE DEPT"},{content:"KODE BARCODE"},{content:"NAMA BARANG"},{content:"BERAT",styles:{halign:"right"}},{content:"ONGKOS",styles:{halign:"right"}},{content:"HARGA JUAL",styles:{halign:"right"}},{content:"NAMA ATRIBUT"},{content:"BERAT ATRIBUT",styles:{halign:"right"}},{content:"HARGA ATRIBUT",styles:{halign:"right"}},{content:"HARGA GRAM",styles:{halign:"right"}},{content:"HARGA TOTAL",styles:{halign:"right"}}]];var o=0,c=0,i=0,s=0,g=0,u=0,d=0;t.detail.forEach(function(t,e){var n=[t.no_faktur_jual,t.kode_dept,t.kode_barcode,t.nama_barang,{content:Object(m.g)(parseInt(t.berat),3),styles:{halign:"right"}},{content:parseInt(t.ongkos).toLocaleString("kr-KO"),styles:{halign:"right"}},{content:parseInt(t.harga_jual).toLocaleString("kr-KO"),styles:{halign:"right"}},t.nama_atribut,{content:Object(m.g)(t.berat_atribut,3),styles:{halign:"right"}},{content:parseInt(t.harga_atribut).toLocaleString("kr-KO"),styles:{halign:"right"}},{content:parseInt(t.harga_gram).toLocaleString("kr-KO"),styles:{halign:"right"}},{content:parseInt(t.harga_total).toLocaleString("kr-KO"),styles:{halign:"right"}}];parseFloat(t.berat),parseInt(t.ongkos),parseInt(t.harga_jual),parseInt(t.berat_atribut),parseInt(t.harga_atribut),parseInt(t.harga_gram),parseInt(t.harga_total),g+=parseFloat(t.harga_jual),i+=parseFloat(t.harga_atribut),s+=parseFloat(t.berat_atribut),c+=parseFloat(t.harga_gram),o+=parseFloat(t.harga_total),u+=parseFloat(t.ongkos),d+=parseFloat(t.berat),a.push(n)}),t.detail.length;var E=[{content:"Total Penjualan : ".concat(t.detail.length),colSpan:4,styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(d.toFixed(3)),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(u).toLocaleString("kr-KO")),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(g).toLocaleString("kr-KO")),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"",styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(s.toFixed(3)),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(i).toLocaleString("kr-KO")),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(c).toLocaleString("kr-KO")),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(o).toLocaleString("kr-KO")),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}}];a.push(E),e.autoTable({head:n,body:a,startY:l,theme:"plain",rowPageBreak:"avoid",margin:{top:10},bodyStyles:{fontSize:8},headStyles:{fontSize:8,fillColor:"#E8E5E5",textColor:"#000"},tableLineColor:[255,255,255],tableLineWidth:1}),a=[],n=[],l=e.autoTableEndPosY()+20});var o=[{content:"Printed By ".concat(JSON.parse(Object(m.n)("userdata")).user_id," / ").concat(Object(m.k)()),colSpan:12,styles:{fontStyle:"italic",textColor:"#000"}}];a.push(o),l=e.autoTableEndPosY()+3,a=[];var c=e.internal.getNumberOfPages(),i=e.internal.pageSize.width,s=e.internal.pageSize.height;e.setFontSize(10);for(var g=1;g<c+1;g++){var u=i/2,d=s-10;e.setPage(g),e.text("".concat(g," of ").concat(c),u,d,{align:"center"})}var E=e.output("datauristring"),h=window.open();h.document.open(),h.document.write("<html><head><title>LAPORAN PENJUALAN SALES</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+E+"></embed></body></html>")}),x=a(66),y=a.n(x),_=function(t){Object(o.a)(a,t);var e=Object(c.a)(a);function a(t){var l;return Object(n.a)(this,a),(l=e.call(this,t)).state={},l}return Object(l.a)(a,[{key:"render",value:function(){return console.log(this.props.data),s.a.createElement(s.a.Fragment,null,s.a.createElement(S.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Transaksi Penjualan Sales Rekap",sheet:"Laporan Transaksi Penjualan Sales Rekap",buttonText:"Export Exel"}),s.a.createElement("table",{id:"table-to-xls",style:{display:"none"}},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"4",style:{textAlign:"center"}}," ","LAPORAN TRANSAKSI PENJUALAN SALES REKAP"," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"4"}," Periode  ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"4"}," ",0===Object(m.n)("tgl_laporan").length?null:JSON.parse(Object(m.n)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(m.n)("tgl_laporan")).tgl_akhir," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"4"}," TOKO :  ",Object(m.l)().nama_toko," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"4"}," ALAMAT :  ",Object(m.l)().alamat_toko," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"4"}))),this.props.data.map(function(t,e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE SALES"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"BERAT"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"ONGKOS"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"RUPIAH")),s.a.createElement("tr",null,s.a.createElement("td",null,t.detail[0].kode_sales),s.a.createElement("td",{style:{textAlign:"right"}},Object(m.g)(t.detail[0].berat,3)),s.a.createElement("td",{style:{textAlign:"right"}},Object(m.m)(t.detail[0].ongkos).toLocaleString("kr-KO")),s.a.createElement("td",{style:{textAlign:"right"}},t.detail[0].harga_total.toLocaleString("kr-KO")))),s.a.createElement("tfoot",null,s.a.createElement("tr",null,s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"}},"Total Penjualan :  ",t.detail.length),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",Object(m.g)(t.detail.map(function(t){return t.berat}).reduce(function(t,e){return t+e},0),2),"  "),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",t.detail.map(function(t){return t.ongkos}).reduce(function(t,e){return Object(m.m)(t+e)},0).toLocaleString("kr-KO"),"  "),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",t.detail.map(function(t){return t.harga_total}).reduce(function(t,e){return t+e},0).toLocaleString("kr-KO")," ")),s.a.createElement("tr",null,s.a.createElement("td",{colSpan:"4"}))))})))}}]),a}(i.Component),L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]&&arguments[3],new f.default("l","mm",[297,210])),a=[],n=[],l=30;e.setFontSize(15),e.text("LAPORAN PENJUALAN SALES REKAP",14,15),e.setFontSize(20),e.text(Object(m.l)().nama_toko,200,15),e.setFontSize(8);var r=Object(m.l)().alamat_toko.length;r>20&&e.text(Object(m.l)().alamat_toko.slice(0,48),200,20),r>50&&e.text(Object(m.l)().alamat_toko.slice(48,90),200,25),e.setFontSize(10),e.setProperties({title:"LAPORAN PENJUALAN SALES REKAP"}),e.text("PERIODE : ".concat(0===Object(m.n)("tgl_laporan").length?null:JSON.parse(Object(m.n)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(m.n)("tgl_laporan")).tgl_akhir),14,25),t.forEach(function(t,r){n=[[{content:"KODE SALES"},{content:"BERAT",styles:{halign:"right"}},{content:"ONGKOS",styles:{halign:"right"}},{content:"RUPIAH",styles:{halign:"right"}}]];var o=[t.detail[0].kode_sales,{content:Object(m.g)(t.detail.map(function(t){return t.berat||0}).reduce(function(t,e){return t+e},0),2),styles:{halign:"right"}},{content:parseInt(t.detail.map(function(t){return parseInt(t.ongkos)}).reduce(function(t,e){return t+e},0)).toLocaleString("kr-KO"),styles:{halign:"right"}},{content:parseInt(t.detail.map(function(t){return parseInt(t.harga_total)}).reduce(function(t,e){return t+e},0)).toLocaleString("kr-KO"),styles:{halign:"right"}}];parseFloat(t.detail[0].berat),parseInt(t.detail[0].ongkos),parseInt(t.detail[0].harga_total),a.push(o),t.detail.length;var c=[{content:"Total Penjualan : ".concat(t.detail.length),colSpan:1,styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(Object(m.g)(t.detail.map(function(t){return t.berat||0}).reduce(function(t,e){return t+e},0),3)),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(t.detail.map(function(t){return parseInt(t.ongkos||0)}).reduce(function(t,e){return t+e},0)).toLocaleString("kr-KO")),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(t.detail.map(function(t){return parseInt(t.harga_total||0)}).reduce(function(t,e){return t+e},0)).toLocaleString("kr-KO")),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}}];a.push(c),e.autoTable({head:n,body:a,startY:l,theme:"plain",rowPageBreak:"avoid",margin:{top:10},bodyStyles:{fontSize:8},headStyles:{fontSize:8,fillColor:"#E8E5E5",textColor:"#000"},tableLineColor:[255,255,255],tableLineWidth:1}),a=[],n=[],l=e.autoTableEndPosY()+20});var o=[{content:"Printed By ".concat(JSON.parse(Object(m.n)("userdata")).user_id," / ").concat(Object(m.k)()),colSpan:12,styles:{fontStyle:"italic",textColor:"#000"}}];a.push(o),l=e.autoTableEndPosY()+3,a=[];var c=e.internal.getNumberOfPages(),i=e.internal.pageSize.width,s=e.internal.pageSize.height;e.setFontSize(10);for(var g=1;g<c+1;g++){var u=i/2,d=s-10;e.setPage(g),e.text("".concat(g," of ").concat(c),u,d,{align:"center"})}var E=e.output("datauristring"),h=window.open();h.document.open(),h.document.write("<html><head><title>LAPORAN PENJUALAN SALES REKAP</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+E+"></embed></body></html>")},v=function(t){Object(o.a)(a,t);var e=Object(c.a)(a);function a(t){var l;return Object(n.a)(this,a),(l=e.call(this,t)).state={date:new Date,isRekap:!1},l.setStartDate=l.setStartDate.bind(Object(r.a)(l)),l.setLastDate=l.setLastDate.bind(Object(r.a)(l)),l}return Object(l.a)(a,[{key:"exportPdf",value:function(){this.props.isRekap?O(this.props.LaporanPenjualanSales):L(this.props.LaporanPenjualanSales)}},{key:"setStartDate",value:function(t){this.setState({tgl_awal:new Date(t)})}},{key:"setLastDate",value:function(t){this.setState({tgl_akhir:new Date(t)})}},{key:"componentDidMount",value:function(){this.props.dispatch(Object(E.Ab)()),this.props.change("kode_sales","SEMUA"),this.props.change("type","REKAP")}},{key:"render",value:function(){var t=this,e=[],a=0,n=0,l=0,r=0,o=0;this.props.LaporanPenjualanSales.forEach(function(t){t.detail.forEach(function(t){e.push(t),a+=t.berat,n+=t.ongkos,l+=t.harga_jual,r+=t.harga_total,o+=t.harga_gram})});var c=[{dataField:"no_faktur_jual",text:"NO FJ",footerAttrs:{colSpan:"3"},footer:function(t,a,n,l){return s.a.createElement("div",null,"Total Barang : ",e.length," ")}},{dataField:"kode_barcode",text:"Kode Barcode"},{dataField:"nama_barang",text:"Nama Barang"},{dataField:"berat",text:"Berat",headerClasses:"text-right",footer:function(t,e,n,l){return s.a.createElement("div",{className:"text-right"},Object(m.g)(a,3)," ")},formatter:function(t){return s.a.createElement("div",{className:"text-right"}," ",Object(m.g)(t,3)," ")}},{dataField:"ongkos",text:"Ongkos",headerClasses:"text-right",footer:function(t,e,a,l){return s.a.createElement("div",{className:"text-right"},n.toLocaleString("kr-KO")," ")},formatter:function(t){return s.a.createElement("div",{className:"text-right"},void 0===t?0:t.toLocaleString("kr-KO"))}},{dataField:"harga_jual",text:"Harga Jual",headerClasses:"text-right",footer:function(t,e,a,n){return s.a.createElement("div",{className:"text-right"},l.toLocaleString("kr-KO")," ")},formatter:function(t){return s.a.createElement("div",{className:"text-right"},void 0===t?0:t.toLocaleString("kr-KO"))}},{dataField:"harga_gram",text:"Harga/Gram",headerClasses:"text-right",footer:function(t,e,a,n){return s.a.createElement("div",{className:"text-right"},o.toLocaleString("kr-KO")," ")},formatter:function(t){return s.a.createElement("div",{className:"text-right"},void 0===t?0:t.toLocaleString("kr-KO"))}},{dataField:"harga_total",text:"Harga Total",headerClasses:"text-right",footer:function(t,e,a,n){return s.a.createElement("div",{className:"text-right"},r.toLocaleString("kr-KO")," ")},formatter:function(t){return s.a.createElement("div",{className:"text-right"},void 0===t?0:t.toLocaleString("kr-KO"))}}],i=[{dataField:"kode_sales",text:"Kode Sales",footer:""},{dataField:"berat",text:"Berat",headerClasses:"text-right",footer:function(t,e,n,l){return s.a.createElement("div",{className:"text-right"},Object(m.g)(a,3)," ")},formatter:function(t){return s.a.createElement("div",{className:"text-right"}," ",Object(m.g)(t,3)," ")}},{dataField:"ongkos",text:"Ongkos",headerClasses:"text-right",footer:function(t,e,a,l){return s.a.createElement("div",{className:"text-right"},n.toLocaleString("kr-KO")," ")},formatter:function(t){return s.a.createElement("div",{className:"text-right"},t.toLocaleString("kr-KO"))}},{dataField:"harga_total",text:"Harga Total",headerClasses:"text-right",footer:function(t,e,a,n){return s.a.createElement("div",{className:"text-right"},r.toLocaleString("kr-KO")," ")},formatter:function(t){return s.a.createElement("div",{className:"text-right"},t.toLocaleString("kr-KO"))}}],g=[{value:"SEMUA",name:"SEMUA"}];return this.props.datasales.map(function(t){var e={value:t.kode_sales,name:t.kode_sales+" - "+t.nama_sales};return g.push(e),!0}),s.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(t){"Enter"===t.key&&t.preventDefault()},autoComplete:"off"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(u.a,{id:"tgl_awal",name:"tgl_awal",component:h.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:function(e){return t.setStartDate(e)},placeholder:"Masukan Tanggal Dari"})),s.a.createElement("div",{className:"col-lg-3 setLastDate"},s.a.createElement(u.a,{name:"tgl_akhir",component:h.c,type:"text",selected:this.state.tgl_akhir,onChange:function(e){return t.setLastDate(e)},label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(u.a,{label:"Kode Sales",name:"kode_sales",options:g,placeholder:"Silahkan Pilih Nama Sales",component:h.f})),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(u.a,{name:"type",component:h.f,options:[{value:"DETAIL",name:"Detail"},{value:"REKAP",name:"Rekap"}],label:"Type",placeholder:"Pilih Type"})),s.a.createElement("div",{className:"col-lg-12 mb-2"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement(p.a,{keyField:"kode_barcode",data:this.props.export?e:[],columns:this.props.isRekap?c:i,empty:!0,textEmpty:"Data Laporan Transaksi Penjualan Sales Kosong"})),s.a.createElement("div",{className:this.props.export?"col-lg-12":"col-lg-12 d-none"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("button",{type:"button",onClick:function(){return t.exportPdf()},className:"btn btn-warning btn-block"}," ","Export PDF"," ")),s.a.createElement("div",{className:"col-lg-6"},this.props.isRekap?s.a.createElement(A,{data:this.props.LaporanPenjualanSales}):s.a.createElement(_,{data:this.props.LaporanPenjualanSales}))))),this.props.isLoading?s.a.createElement(y.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),a}(i.Component);v=Object(d.a)({form:"HeadFormLaporanPenjualanSales",enableReinitialize:!0,validate:b.a})(v);e.default=Object(g.b)(function(t){return{datasales:t.datamaster.getDataSales,initialValues:{tgl_awal:Object(m.j)(),tgl_akhir:Object(m.j)()}}})(v)},794:function(t,e,a){"use strict";e.a=function(t){var e={};return t.tanggal_awal||(e.tanggal_awal="Tanggal Tidak Boleh Kosong"),t.sampai_tgl||(e.sampai_tgl="Tanggal Tidak Boleh Kosong"),t.kode_sales||(e.kode_sales="Kode Tidak Boleh Kosong"),e}}}]);
//# sourceMappingURL=28.f2c87969.chunk.js.map