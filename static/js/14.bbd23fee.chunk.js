(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1272:function(a,e,t){"use strict";t.r(e);var n=t(8),r=t(9),l=t(15),o=t(11),i=t(10),c=t(1),s=t.n(c),u=t(31),m=t(33),d=t(318),b=t(5),g=t(29),p=t(60),f=t(76),h=t(19),_=t(320),k=t(321),E=t(22),v=t(714),O=t(66),y=t.n(O),B=function(a){Object(o.a)(t,a);var e=Object(i.a)(t);function t(a){var r;return Object(n.a)(this,t),(r=e.call(this,a)).state={date:new Date("Y-m-d"),columns:[{dataField:"nama_barang",text:"Nama Barang",footer:""},{dataField:"berat",text:"Berat",formatter:function(a){return s.a.createElement("span",null,parseFloat(a).toFixed(1))},footer:function(a){return parseFloat(a.reduce(function(a,e){return a+e},0)).toFixed(1)}},{dataField:"berat_nota",text:"Berat Nota",formatter:function(a){return s.a.createElement("span",null,parseFloat(a).toFixed(1))},footer:function(a){return parseFloat(a.reduce(function(a,e){return a+e},0)).toFixed(1)}},{dataField:"harga_nota",text:"Harga Nota",formatter:function(a){return s.a.createElement("span",null,parseInt(a).toLocaleString("kr-KO"))},footer:function(a){return parseInt(a.reduce(function(a,e){return a+e},0)).toLocaleString("kr-KO")}},{dataField:"harga",text:"Harga",formatter:function(a){return s.a.createElement("span",null,parseInt(a).toLocaleString("kr-KO"))},footer:function(a){return parseInt(a.reduce(function(a,e){return a+e},0)).toLocaleString("kr-KO")}},{dataField:"harga_rata",text:"Harga Rata",formatter:function(a){return s.a.createElement("span",null,parseInt(a).toLocaleString("kr-KO"))},footer:function(a){return parseInt(a.reduce(function(a,e){return a+e},0)).toLocaleString("kr-KO")}},{dataField:"kondisi",text:"Kondisi",footer:""}]},r}return Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(a){"Enter"===a.key&&a.preventDefault()},autoComplete:"off"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-4"},s.a.createElement(_.a,{id:"no_faktur_group",name:"no_faktur_group",component:E.b,type:"hidden",readOnly:!0}),s.a.createElement(_.a,{name:"nama_customer",component:E.e,type:"text",readOnly:!0,label:"Nama Customer",placeholder:"Masukan Nama Customer"})),s.a.createElement("div",{className:"col-4"},s.a.createElement(_.a,{name:"no_hp",component:E.e,type:"text",readOnly:!0,label:"No Hp",placeholder:"Masukan No Hp"})),s.a.createElement("div",{className:"col-4"},s.a.createElement(_.a,{name:"alamat_customer",component:E.e,type:"text",readOnly:!0,label:"Alamat Customer",placeholder:"Masukan Alamat Customer"})),s.a.createElement("div",{className:"col-12"},s.a.createElement(p.a,{keyField:"nama_barang",exportCsv:!1,data:this.props.detail_barang,columns:this.state.columns,pagination:"off",empty:!0,textEmpty:"Data Barang Kosong"})),s.a.createElement("div",{className:"col-3"},s.a.createElement("button",{type:"button",onClick:this.props.back,className:"btn btn-primary btn-block"},s.a.createElement("i",{className:"fa fa-arrow-left"})," Kembali")),s.a.createElement("div",{className:"col-9"},s.a.createElement("button",{tabIndex:"2",className:"btn btn-primary btn-block",disabled:this.props.isLoadingBatalBeli,type:"submit"},this.props.isLoadingBatalBeli?s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Membatal"):"Batal Pembelian"))),s.a.createElement("br",null),this.props.isLoadingBatalBeli?s.a.createElement(y.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),t}(c.Component);B=Object(k.a)({form:"HeadBatalBeli",enableReinitialize:!0,validate:v.a})(B);var S=Object(u.b)(function(a){return{detail_barang:a.pembelian.showModalBatalBeli.detail_barang,initialValues:{no_faktur_group:a.pembelian.showModalBatalBeli.no_faktur_group,nama_customer:a.pembelian.showModalBatalBeli.nama_customer,no_hp:a.pembelian.showModalBatalBeli.no_hp,alamat_customer:a.pembelian.showModalBatalBeli.alamat_customer}}})(B),L=t(712),N=function(a){Object(o.a)(t,a);var e=Object(i.a)(t);function t(a){var r;return Object(n.a)(this,t),(r=e.call(this,a)).state={isLoading:!1,isLoadingBatal:!1,FormModal:""},r.setStartDate=r.setStartDate.bind(Object(l.a)(r)),r.setLastDate=r.setLastDate.bind(Object(l.a)(r)),r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"setStartDate",value:function(a){this.setState({tgl_awal:new Date(a)})}},{key:"setLastDate",value:function(a){this.setState({tgl_akhir:new Date(a)})}},{key:"render",value:function(){var a=this;return s.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(a){"Enter"===a.key&&a.preventDefault()},autoComplete:"off"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(_.a,{name:"tgl_awal",component:E.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:function(e){return a.setStartDate(e)},placeholder:"Masukan Tanggal Dari"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(_.a,{name:"tgl_akhir",component:E.c,type:"text",selected:this.state.tgl_akhir,onChange:function(e){return a.setLastDate(e)},label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),s.a.createElement("div",{className:"col-4"},s.a.createElement("label",null," \xa0"),s.a.createElement("button",{className:"btn btn-primary btn-block",disabled:this.props.isLoading,type:"submit"},this.props.isLoading?s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Pembelian"))),this.props.isLoading?s.a.createElement(y.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),t}(c.Component);N=Object(k.a)({form:"HeadPembelian",enableReinitialize:!0,validate:L.a})(N);var j=Object(u.b)(function(a){return{initialValues:{tgl_awal:Object(b.j)(),tgl_akhir:Object(b.j)()}}})(N),F=t(223),x=function(a){Object(o.a)(t,a);var e=Object(i.a)(t);function t(a){var r;return Object(n.a)(this,t),(r=e.call(this,a)).state={isLoadingServicesSelesai:!1,isLoadingBatalBeli:!1,isLoading:!1,dataservices:[],FormModal:!1,pembayaran:!1,columns:[{dataField:"no_faktur_beli",text:"No FB",footerAttrs:{colSpan:"3"},footer:"Total"},{dataField:"nama_customer",text:"Nama Customer"},{dataField:"no_hp",text:"No Hp"},{dataField:"harga",text:"Harga",formatter:function(a){return s.a.createElement("span",null,parseInt(a).toLocaleString("kr-KO"))},footer:function(a){return parseInt(a.reduce(function(a,e){return a+e},0)).toLocaleString("kr-KO")}},{dataField:"harga_nota",text:"Harga Nota",formatter:function(a){return s.a.createElement("span",null,parseInt(a).toLocaleString("kr-KO"))},footer:function(a){return parseInt(a.reduce(function(a,e){return a+e},0)).toLocaleString("kr-KO")}},{dataField:"harga_rata",text:"Harga Rata",formatter:function(a){return s.a.createElement("span",null,parseInt(a).toLocaleString("kr-KO"))},footer:function(a){return parseInt(a.reduce(function(a,e){return a+e},0)).toLocaleString("kr-KO")}},{dataField:"kondisi",text:"Kondisi",footer:""},{dataField:"ambil",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(a,e,t){return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("button",{type:"button","data-tooltip":"Batal Pembelian",onClick:function(){return r.shoBatalPembelian(e)},className:"btn btn-danger"},s.a.createElement("i",{className:"fa fa-file-export"})),"\xa0",s.a.createElement("button",{"data-tooltip":"Reprint Pembelian",type:"button",onClick:function(){return r.ReprintPembelian(e)},className:"btn btn-success mr-3"},s.a.createElement("i",{className:"fa fa-print"}))))},footer:""}]},r.handleSubmit=r.handleSubmit.bind(Object(l.a)(r)),r}return Object(r.a)(t,[{key:"ReprintPembelian",value:function(a){var e={no_faktur_group:a.no_faktur_group};Object(h.g)("pembelian/get/bynota",e).then(function(a){var e="";a.data.notabeli.forEach(function(a,t){var n=a.head.n_alamat_customer.length;e="========================================\nTanggal          : ".concat(a.head.tgl_system,"\nNama Customer    : ").concat(a.head.nama_customer,"\nNo Hp            : ").concat(a.head.no_hp,"\nAlamat Customer  : ").concat(a.head.n_alamat_customer.split(0,20),"\n"),n>20&&(e+="                   ".concat(a.head.n_alamat_customer.split(0,20),"\n")),n>40&&(e+="                   ".concat(a.head.n_alamat_customer.split(40,20),"\n")),e+="========================================\n",e+="Keterangan\n",e+="========================================\n";var r=0,l=0;a.detail.forEach(function(a,t){r+=a.harga,l+=a.harga_nota,e+="No Faktur Beli : ".concat(a.no_faktur_beli,"\n"),e+="Jenis Barang   : ".concat(a.kode_dept,"\n"),e+="Nama Barang    : ".concat(a.nama_barang,"\n"),e+="Berat          : ".concat(a.berat.toFixed(3),"\n"),e+="Harga          : ".concat(a.harga.toLocaleString("kr-KO"),"\n"),e+="========================================\n"}),e+="Total          : ".concat(r.toLocaleString("kr-KO"),"\n"),e+="========================================\n",e+="Harga Waktu Beli   : ".concat(r.toLocaleString("kr-KO"),"\n"),e+="Harga Waktu Jual   : ".concat(l.toLocaleString("kr-KO"),"\n"),e+="\n\n\n\n\n\n\n"}),document.getElementById("myInput").value=e}).then(function(){console.log("masuk");var a=document.createElement("a"),e=new Blob([document.getElementById("myInput").value],{type:"text/plain;charset=utf-8"});a.href=URL.createObjectURL(e),a.download="autoprint_pembelian.txt",document.body.appendChild(a),a.click()}).catch(function(a){})}},{key:"shoBatalPembelian",value:function(a){var e=this,t={no_faktur_group:a.no_faktur_group};Object(h.g)("batalpembelian/get/by-faktur",t).then(function(a){0===a.data.length?(Object(g.e)("info",a.data.message),e.setState({FormModal:!1})):(e.setState({FormModal:!0}),a.data.forEach(function(a,t){var n={no_faktur_group:a._id.no_faktur_group,tgl_system:a._id.tgl_system,kode_sales:a._id.kode_sales,nama_customer:a._id.nama_customer,no_hp:a._id.no_hp,alamat_customer:a._id.alamat_customer,kode_gudang:a._id.kode_gudang,detail_barang:a.detail_barang};e.props.dispatch(Object(d.b)(n))}))}).catch(function(a){console.log(a),Object(g.e)("info","Terjadi Kesalahan Saat Request Data"),e.setState({FormModal:!1})})}},{key:"handleSubmit",value:function(a){var e=this,t={tgl_awal:Object(b.f)(F(new Date(a.tgl_awal)).format("YYYY-MM-DD")),tgl_akhir:Object(b.f)(F(new Date(a.tgl_akhir)).format("YYYY-MM-DD"))};Object(b.o)("tgl_laporan",JSON.stringify(t)),this.setState({isLoading:!0}),Object(h.g)("pembelian/get/by-tanggal",t).then(function(a){0===a.data.length?(Object(g.e)("info","Data Pembelian Tidak Ada"),e.setState({isLoading:!1,datapembelian:[]})):(Object(g.e)("success","Data Pembelian Tersedia"),e.setState({isLoading:!1,datapembelian:a.data}))}).catch(function(a){Object(g.e)("info","Data Pembelian Tidak Ada"),e.setState({isLoading:!1,datapembelian:[]})})}},{key:"batalPembelian",value:function(a){var e=this;this.setState({isLoadingBatalBeli:!0}),setTimeout(function(){var t={no_faktur_group:a.no_faktur_group};Object(h.g)("batalpembelian/simpan",t).then(function(a){Object(g.e)("success",a.data.message),e.setState({FormModal:!1,isLoadingBatalBeli:!1});var t=0===Object(b.n)("tgl_laporan").length?[]:JSON.parse(Object(b.n)("tgl_laporan"));Object(h.g)("pembelian/get/by-tanggal",t).then(function(a){e.setState({datapembelian:a.data})})}).catch(function(a){Object(g.e)("info","Data Pembelian Tidak Ada"),e.setState({FormModal:!1,isLoading:!1,isLoadingBatalBeli:!1})})},500)}},{key:"back",value:function(){this.setState({FormModal:!1})}},{key:"render",value:function(){var a=this;return s.a.createElement("div",null,s.a.createElement("ol",{className:"breadcrumb float-xl-right"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(m.b,{to:"#"},"Pembelian")),s.a.createElement("li",{className:"breadcrumb-item active"},"Lihat Pembelian")),s.a.createElement("h1",{className:"page-header"},"Lihat Pembelian "),s.a.createElement(f.a,null,s.a.createElement("textarea",{style:{display:"none"},id:"myInput",rows:"100",cols:"100"}),s.a.createElement(f.c,null," ",!0===this.state.FormModal?"Batal Pembelian":"Lihat Pembelian"),s.a.createElement("br",null),s.a.createElement("div",{className:"container"},!0===this.state.FormModal?s.a.createElement(S,{back:function(){return a.back()},isLoadingBatalBeli:this.state.isLoadingBatalBeli,onSubmit:function(e){return a.batalPembelian(e)}}):s.a.createElement(s.a.Fragment,null,s.a.createElement(j,{onSubmit:function(e){return a.handleSubmit(e)},isLoading:this.state.isLoading}),s.a.createElement(p.a,{keyField:"no_faktur_group",exportCsv:!1,data:this.state.datapembelian,columns:this.state.columns,empty:!0,textEmpty:"Data Barang Kosong"}))),s.a.createElement("br",null)),this.state.isLoading?s.a.createElement(y.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),t}(s.a.Component);e.default=Object(u.b)(null)(x)},712:function(a,e,t){"use strict";e.a=function(a){var e={};return a.user_id||(e.user_id="User Id Tidak Boleh Kosong"),a.user_name||(e.user_name="Username Tidak Boleh Kosong"),a.level||(e.level="Level Harus Dipilih "),e}},714:function(a,e,t){"use strict";e.a=function(a){var e={};return a.tgl_selesai||(e.tgl_selesai="Tanggal Selesai Tidak Boleh Kosong"),a.tgl_ambil||(e.tgl_ambil="Tanggal Tidak Boleh Kosong"),e}}}]);
//# sourceMappingURL=14.bbd23fee.chunk.js.map