(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1238:function(a,e,t){"use strict";t.r(e);var n=t(8),o=t(9),r=t(15),s=t(11),l=t(10),i=t(1),m=t.n(i),c=t(31),u=t(33),p=t(28),g=t.n(p),d=t(73),h=t(76),b=t(101),_=t.n(b),f=t(46),E=t(321),k=t(7),v=t(5),j=t(224),O=t(29),S=t(60),M=t(19),N=t(712),y=t(320),B=t(22),C=t(56),D=t(719),H=t(66),T=t.n(H),w=[{value:"MEMBER",name:"MEMBER"},{value:"NONMEMBER",name:"NON MEMBER"}],x=function(a){Object(s.a)(t,a);var e=Object(l.a)(t);function t(a){var o;return Object(n.a)(this,t),(o=e.call(this,a)).state={showMember:!0},o}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(k.Ab)());var a=null===localStorage.getItem("data_customer_hutang_tmp")?[]:JSON.parse(localStorage.getItem("data_customer_hutang_tmp")||[]);a&&"MEMBER"===a.jenis_pelanggan?this.setState({showMember:!1}):(this.setState({showMember:!0}),this.props.change("jenis_pelanggan","NONMEMBER"))}},{key:"changemember",value:function(a){"MEMBER"===a?(this.setState({showMember:!1}),document.getElementById("kode_customer").focus()):(document.getElementById("nama_customer").focus(),this.props.change("kode_customer",""),this.props.change("nama_customer",""),this.props.change("no_hp",""),this.props.change("alamat_customer",""),this.setState({showMember:!0}))}},{key:"getMember",value:function(a){var e=this;Object(M.c)("member/get/by-kode-member/"+a).then(function(a){0===a.data.length?Object(O.e)("info","Member Yang Anda Masukan Tidak Ada !!!"):a.data.forEach(function(a,t){e.props.change("nama_customer",a.nama_customer),e.props.change("no_hp",a.no_hp),e.props.change("alamat_customer",a.alamat_customer)})}).catch(function(a){Object(O.e)("info","Terjadi Kesalahan SIlahkan Ulangi Kembali !!!")})}},{key:"render",value:function(){var a=this;return m.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(a){"Enter"===a.key&&a.preventDefault()},autoComplete:"off"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-4"},m.a.createElement(y.a,{name:"kode_sales",label:"Pilih Kode Sales",placeholder:"Masukan Kode Sales",options:this.props.DataSales.filter(function(a){return void 0!==a.kode_sales}).map(function(a){return{value:a.kode_sales,name:a.kode_sales}}),component:B.f})),m.a.createElement("div",{className:"col-4"},m.a.createElement(y.a,{name:"jenis_pelanggan",label:"Pilih Pelanggan",onChange:function(e){return a.changemember(e)},placeholder:"Silahkan Pilih Pelanggan",options:w,component:B.f})),m.a.createElement("div",{className:"col-4"},m.a.createElement(y.a,{id:"kode_customer",name:"kode_customer",onChange:function(e){return a.getMember(e.target.value)},component:B.e,type:"text",readOnly:this.state.showMember,label:"Kode Customer",placeholder:"Masukan Kode Customer"})),m.a.createElement("div",{className:"col-4"},m.a.createElement(y.a,{id:"nama_customer",name:"nama_customer",component:B.e,type:"text",label:"Nama Customer",placeholder:"Masukan Nama Customer"})),m.a.createElement("div",{className:"col-4"},m.a.createElement(y.a,{name:"no_hp",component:B.e,type:"text",normalize:C.c,label:"No Hp",placeholder:"Masukan No Hp"})),m.a.createElement("div",{className:"col-4"},m.a.createElement(y.a,{name:"alamat_customer",component:B.e,type:"textarea",label:"Alamat Customer",placeholder:"Masukan Alamat Customer"}))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-8"}),m.a.createElement("div",{className:"col-4"},m.a.createElement("button",{className:"btn btn-primary btn-block",disabled:this.props.isLoadingDataCustomer,type:"submit"},this.props.isLoadingDataCustomer?m.a.createElement(m.a.Fragment,null,m.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))),this.props.isLoading?m.a.createElement(T.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),t}(i.Component);x=Object(E.a)({form:"ModalDataCustomer",enableReinitialize:!0,validate:D.a})(x);var F=Object(c.b)(function(a){var e=null===localStorage.getItem("data_customer_hutang_tmp")?[]:JSON.parse(localStorage.getItem("data_customer_hutang_tmp")||[]);return{initialValues:{kode_sales:e.kode_sales||"",jenis_pelanggan:e.jenis_pelanggan||"",kode_customer:e.kode_customer||"",nama_customer:e.nama_customer||"",no_hp:e.no_hp||"",alamat_customer:e.alamat_customer||""},DataSales:a.datamaster.getDataSales}},null)(x),L=t(223),I=t(324),J=t(138),K=function(a,e){var t={};return a.tgl_hutang||(t.tgl_hutang="Tanggal Hutang Tidak Boleh Kosong"),a.emasdanplastik||(t.emasdanplastik="Berat Emas + Plastik Tidak Boleh Kosong"),a.jml_hutang||(t.jml_hutang="Jumlah Hutang Tidak Boleh Kosong"),a.bunga||(t.bunga="Bunga / Bulan Tidak Boleh Kosong"),a.lama_pinjam||(t.lama_pinjam="Lama Pinjam Tidak Boleh Kosong"),t},R=Object(J.createNumberMask)({prefix:"Rp. ",locale:"kr-KO"}),P=function(a){Object(s.a)(t,a);var e=Object(l.a)(t);function t(a){var o;return Object(n.a)(this,t),(o=e.call(this,a)).state={isLoadingBatal:!1},o.setStartDate=o.setStartDate.bind(Object(r.a)(o)),o}return Object(o.a)(t,[{key:"setStartDate",value:function(a){this.setState({tgl_hutang:new Date(a)})}},{key:"componentDidMount",value:function(){var a=this,e=0,t=JSON.parse(localStorage.getItem("data_barang_hutang_tmp"));null!==t&&t.forEach(function(t,n){e+=t.berat,a.props.change("berat_emas",parseFloat(e).toFixed(1)),a.props.change("emasdanplastik",parseFloat(e).toFixed(1))}),setTimeout(function(){document.getElementById("emasdanplastik").focus()},100)}},{key:"hitungTotal",value:function(){this.props.change("bunga_rp",this.props.bunga_rp),this.props.change("besar_kembali",this.props.besar_kembali),this.props.change("tgl_jth_tempo",this.props.tgl_jatuh_tempo)}},{key:"batalHutang",value:function(){var a=this;this.setState({isLoadingBatal:!0}),setTimeout(function(){localStorage.setItem("data_customer_hutang_tmp",JSON.stringify([])),localStorage.setItem("data_barang_hutang_tmp",JSON.stringify([])),a.props.dispatch(Object(d.o)([])),a.props.dispatch(Object(f.d)("ModalHutang")),a.props.dispatch(Object(k.Mb)())},300)}},{key:"cekBeratEmas",value:function(a){var e=document.getElementById("berat_emas").value;if(parseFloat(a)<parseFloat(e))return Object(O.e)("info","Berat Yang Diinputkan Tidak Boleh Lebih Kecil Dari Berat Emas"),this.props.change("emasdanplastik",""),document.getElementById("emasdanplastik").focus(),!1}},{key:"render",value:function(){var a=this;return m.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(a){"Enter"===a.key&&a.preventDefault()},autoComplete:"off"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-4"},m.a.createElement(y.a,{readOnly:!0,id:"berat_emas",name:"berat_emas",component:B.e,type:"text",label:"Berat Emas",placeholder:"Masukan Berat Emas"})),m.a.createElement("div",{className:"col-4"},m.a.createElement(y.a,{name:"tgl_hutang",component:B.c,label:"Tanggal Hutang",type:"text",selected:this.state.tgl_hutang,onChange:function(e){return a.setStartDate(e)},placeholder:"Masukan Tanggal Dari"})),m.a.createElement("div",{className:"col-4"},m.a.createElement(y.a,{id:"emasdanplastik",name:"emasdanplastik",type:"text",component:B.e,normalize:C.a,onBlur:function(e){return a.cekBeratEmas(e.target.value)},label:"Berat Emas + Plastik",placeholder:"Masukan Berat Emas + Plastik"})),m.a.createElement("div",{className:"col-4"},m.a.createElement(y.a,Object.assign({name:"jml_hutang",component:B.e,type:"telp"},R,{onChange:this.hitungTotal(),label:"Jumlah Hutang",placeholder:"Masukan Jumlah Hutang"}))),m.a.createElement("div",{className:"col-4"},m.a.createElement(y.a,{name:"bunga",component:B.e,type:"text",normalize:C.c,onChange:this.hitungTotal(),label:"Bunga / Bulan ( % )",placeholder:"Masukan Bunga / Bulan ( % )"})),m.a.createElement("div",{className:"col-4"},m.a.createElement(y.a,{name:"lama_pinjam",component:B.e,type:"text",normalize:C.c,onChange:this.hitungTotal(),label:"Lama Pinjam",placeholder:"Masukan Lama Pinjam"})),m.a.createElement("div",{className:"col-4"},m.a.createElement(y.a,{readOnly:!0,name:"tgl_jth_tempo",component:B.e,type:"text",label:"Tanggal Jatuh Tempo",placeholder:"Masukan Tanggal Jatuh Tempo"})),m.a.createElement("div",{className:"col-4"},m.a.createElement(y.a,{readOnly:!0,name:"bunga_rp",component:B.e,normalize:C.c,type:"text",label:"Bunga Rp",placeholder:"Masukan Bunga Rp"})),m.a.createElement("div",{className:"col-4"},m.a.createElement(y.a,{readOnly:!0,name:"besar_kembali",component:B.e,type:"text",label:"Besar Kembali",placeholder:"Masukan Besar Kembali"})),m.a.createElement("div",{className:"col-8"}),m.a.createElement("div",{className:"col-2"}),m.a.createElement("div",{className:"col-2"},m.a.createElement("button",{className:"btn btn-primary btn-block",disabled:this.props.isLoadingHutang,type:"submit"},this.props.isLoadingHutang?m.a.createElement(m.a.Fragment,null,m.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):m.a.createElement(m.a.Fragment,null,m.a.createElement("i",{className:"fas fa-paper-plane"})," \xa0 Simpan Data")))),this.props.isLoadingHutang?m.a.createElement(T.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),t}(i.Component);P=Object(E.a)({form:"ModalHutang",enableReinitialize:!0,validate:K})(P);var z=Object(c.b)(function(a){var e=Object(I.a)("ModalHutang")(a,"jml_hutang","bunga","lama_pinjam","tgl_hutang"),t=e.jml_hutang,n=e.bunga,o=e.lama_pinjam,r=e.tgl_hutang,s=parseFloat(n||0)/parseFloat(100)*parseFloat(t||0)*(parseFloat(o||0)/parseFloat(30)),l=parseFloat(t||0)+parseFloat(s||0),i=new Date(r),m=L(i.setDate(i.getDate()+parseInt(o||0))).format("YYYY-MM-DD");return{initialValues:{tgl_hutang:Object(v.k)()},bunga_rp:parseFloat(s).toLocaleString("kr-KO"),besar_kembali:parseFloat(l).toLocaleString("kr-KO"),tgl_jatuh_tempo:m,datakondisi:a.datamaster.getDataKondisiBarang,kategori:a.datamaster.GetDataGroup}})(P),Y=t(69),A=t.n(Y),W=t(100),G=function(a,e){var t={};return a.nama_barang||(t.nama_barang="Nama Barang Tidak Boleh Kosong"),a.berat||(t.berat="Berat Tidak Boleh Kosong"),a.jumlah||(t.jumlah="Jumlah Tidak Boleh Kosong"),t},U=t(0),V=t(36),q=function(a){Object(s.a)(t,a);var e=Object(l.a)(t);function t(a){var o;return Object(n.a)(this,t),(o=e.call(this,a)).state={visible:!0,loadimage:U.L,ModalWebCam:!1,isLoading:!1,harga_jual:!0,berat_jual:!0,hargapergram:!0,ongkos:!0,total:!0,gambar:!1},o}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var a=this;this.props.dispatch(Object(k.Db)()),this.props.dispatch(Object(k.y)()),setTimeout(function(){a.props.dispatch(Object(V.t)(!1))},100)}},{key:"handleTakePhoto",value:function(){var a=Object(W.a)(A.a.mark(function a(e){var t,n;return A.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t=Object(v.c)(e),a.next=4,Object(v.r)(t);case 4:n=a.sent,this.props.dispatch(Object(V.t)(n)),this.props.change("foto",n),document.getElementById("nama_barang_hutang").focus(),a.next=12;break;case 10:a.prev=10,a.t0=a.catch(0);case 12:case"end":return a.stop()}},a,this,[[0,10]])}));return function(e){return a.apply(this,arguments)}}()},{key:"showModalWebcam",value:function(){this.props.dispatch(Object(V.t)(!1)),this.props.dispatch(Object(k.Rb)()),this.setState({ModalWebCam:!0})}},{key:"loadcamera",value:function(){var a=this;return m.a.createElement(U.a,{onTakePhoto:function(e){a.handleTakePhoto(e)}})}},{key:"render",value:function(){var a=this;return m.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(a){"Enter"===a.key&&a.preventDefault()},autoComplete:"off"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-12 text-center"},m.a.createElement(y.a,{readOnly:!0,name:"foto",type:"hidden",component:B.b}),!0===this.state.ModalWebCam&&!1===this.props.setCamera?m.a.createElement("div",{className:"container"},this.loadcamera()):m.a.createElement(m.a.Fragment,null,m.a.createElement("img",{src:void 0===this.props.foto?!1===this.props.setCamera?U.L:this.props.setCamera:this.props.setCamera?this.props.setCamera:this.props.foto,alt:"img",height:"245px",width:"355px"}))),m.a.createElement("div",{className:"col-lg-12 text-center"},m.a.createElement("br",null)),m.a.createElement("div",{className:"col-lg-12 text-center"},m.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return a.showModalWebcam()}}," ","WebCam"," ")),m.a.createElement("div",{className:"col-lg-12 text-center"},m.a.createElement("br",null)),m.a.createElement("div",{className:"col-4"},m.a.createElement(y.a,{id:"nama_barang_hutang",name:"nama_barang",component:B.e,type:"text",label:"Nama Barang",placeholder:"Masukan Nama Barang"})),m.a.createElement("div",{className:"col-4"},m.a.createElement(y.a,{name:"berat",component:B.e,normalize:C.a,type:"text",label:"Berat",placeholder:"Masukan Berat"})),m.a.createElement("div",{className:"col-4"},m.a.createElement(y.a,{name:"jumlah",defaultValue:"1",component:B.e,type:"jumlah",normalize:C.c,label:"Jumlah",placeholder:"Masukan Jumlah"})),m.a.createElement("div",{className:"col-12 text-right"},m.a.createElement("label",null,"\xa0"),m.a.createElement("button",{className:"btn btn-primary ",disabled:this.props.isLoading,type:"submit"},this.props.isLoading?m.a.createElement(m.a.Fragment,null,m.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):m.a.createElement(m.a.Fragment,null,m.a.createElement("i",{className:"fas fa-paper-plane"})," \xa0 Simpan Data")))),this.props.isLoading?m.a.createElement(T.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),t}(i.Component);q=Object(E.a)({form:"ModalTambahBarang",enableReinitialize:!0,validate:G})(q);var Q=Object(c.b)(function(a){return{initialValues:{jumlah:"1"},datakondisi:a.datamaster.getKondisiPinjaman,kategori:a.datamaster.GetDataGroup,foto:a.databarang.showEditBarang.foto,setCamera:a.databarang.setCamera}})(q),X=function(a){Object(s.a)(t,a);var e=Object(l.a)(t);function t(a){var o;return Object(n.a)(this,t),(o=e.call(this,a)).state={isLoadingDataCustomer:!1,isLoadingBatal:!1,isLoadingHutang:!1,FormModal:""},o}return Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"ShowModalCustomer",value:function(){this.setState({FormModal:"ShowModalCustomer"}),this.props.dispatch(Object(k.Rb)())}},{key:"ShowModalBarang",value:function(){this.props.dispatch(Object(k.Rb)()),this.setState({FormModal:"ShowModalBarang"})}},{key:"ShowModalHutang",value:function(){var a=JSON.parse(localStorage.getItem("data_customer_hutang_tmp")),e=JSON.parse(localStorage.getItem("data_barang_hutang_tmp"));if(null===e||0===e.length||null===a||0===a.length)return Object(O.e)("info","Data Customer / Data Barang Belum Diisi"),!1;this.props.dispatch(Object(k.Rb)()),this.setState({FormModal:"ShowModalHutang"})}},{key:"handleSubmit",value:function(a){var e=this,t={alamat_customer:a.alamat_customer||"-",jenis_pelanggan:a.jenis_pelanggan||"NONMEMBER",kode_customer:"NONMEMBER"===a.jenis_pelanggan?"NONMEMBER":a.kode_customer,kode_sales:a.kode_sales,nama_customer:a.nama_customer||"REGULER",no_hp:a.no_hp||"-"};this.setState({isLoadingDataCustomer:!0}),localStorage.setItem("data_customer_hutang_tmp",JSON.stringify(t)),setTimeout(function(){e.setState({isLoadingDataCustomer:!1}),e.props.dispatch(Object(k.Mb)())},500)}},{key:"simpanTransaksiHutang",value:function(a){var e=this,t=JSON.parse(localStorage.getItem("data_customer_hutang_tmp")),n=JSON.parse(localStorage.getItem("data_barang_hutang_tmp")),o=[];n.forEach(function(a,e){var t={nama_barang:a.nama_barang,kondisi:a.kondisi_barang,kategori:a.kategori,foto:a.foto,berat:parseFloat(a.berat),jumlah:parseInt(a.jumlah)};o.push(t)});var r={kode_sales:t.kode_sales,nama_customer:t.nama_customer,alamat_customer:t.alamat_customer,kode_member:"NONMEMBER"===t.jenis_pelanggan?t.jenis_pelanggan:t.kode_customer,no_hp:t.no_hp,tgl_hutang:Object(v.f)(_()(new Date(a.tgl_hutang)).format("YYYY-MM-DD")),tgl_tempo:a.tgl_jth_tempo,jumlah_hutang:parseInt(a.jml_hutang),lama_pinjam:parseInt(a.lama_pinjam),bunga:parseFloat(a.bunga),berat_emas:parseFloat(a.berat_emas),berat_bruto:parseFloat(a.emasdanplastik),detail_barang:o};this.setState({isLoadingHutang:!0}),setTimeout(function(){Object(M.g)("hutang/simpan",r).then(function(a){Object(O.e)("success",a.data.message),e.setState({isLoadingHutang:!1}),e.props.dispatch(Object(f.d)("ModalHutang"))}).then(function(){localStorage.setItem("data_customer_hutang_tmp",JSON.stringify([])),localStorage.setItem("data_barang_hutang_tmp",JSON.stringify([])),e.props.dispatch(Object(d.o)([])),e.setState({isLoadingHutang:!1})}).then(function(){e.props.dispatch(Object(k.Mb)())}).catch(function(a){e.setState({isLoadingHutang:!1}),Object(O.e)("info","Transaksi Gagal Disimpan")})},500)}},{key:"batalHutang",value:function(){var a=this;this.setState({isLoadingBatal:!0}),setTimeout(function(){localStorage.setItem("data_customer_hutang_tmp",JSON.stringify([])),localStorage.setItem("data_barang_hutang_tmp",JSON.stringify([])),a.props.dispatch(Object(d.o)([])),a.props.dispatch(Object(f.d)("ModalHutang")),a.props.dispatch(Object(k.Mb)()),a.setState({isLoadingBatal:!1})},300)}},{key:"simpanBarang",value:function(a){var e={nama_barang:a.nama_barang||"-",kondisi_barang:a.kondisi_barang||"-",kategori:a.kategori||"-",berat:parseFloat(a.berat)||0,jumlah:parseInt(a.jumlah)||0,foto:a.foto||"-"},t=JSON.parse(localStorage.getItem("data_barang_hutang_tmp"))||[];t.push(e),document.getElementById("nama_barang_hutang").focus(),this.props.dispatch(Object(f.d)("ModalTambahBarang")),this.props.dispatch(Object(d.o)(t)),localStorage.setItem("data_barang_hutang_tmp",JSON.stringify(t)),this.props.dispatch(Object(k.Mb)())}},{key:"render",value:function(){var a=this;return m.a.createElement(h.a,null,m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-12"},m.a.createElement(S.a,{keyField:"nama_barang",exportCsv:!1,data:0===this.props.setBarangHutang.length?JSON.parse(localStorage.getItem("data_barang_hutang_tmp"))||[]:this.props.setBarangHutang||[],tambahData:!0,btnText:"Data Customer",handleClick:function(){return a.ShowModalCustomer()},columns:this.props.columns,btnOptional:!0,namaCustomer:!0,jenisCustomer:!0,form:"Hutang",btnTextOptional:"Data Barang",handleClickOptional:function(){return a.ShowModalBarang()},btnOptional2:!0,btnTextOptional2:"Data Hutang",handleClickOptional2:function(){return a.ShowModalHutang()},empty:!0,textEmpty:"Data Barang Kosong"}))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-6"},m.a.createElement("button",{onClick:function(){return a.batalHutang()},className:"btn btn-warning",disabled:this.state.isLoadingBatal,type:"button"},this.state.isLoadingBatal?m.a.createElement(m.a.Fragment,null,m.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Reset"):"Reset"))),m.a.createElement(j.a,{size:"ShowModalBarang"===this.state.FormModal?"l":"xl",title:m.a.createElement(Z,{state:this.state.FormModal}),content:"ShowModalCustomer"===this.state.FormModal?m.a.createElement(F,{isLoadingDataCustomer:this.state.isLoadingDataCustomer,onSubmit:function(e){return a.handleSubmit(e)}}):"ShowModalBarang"===this.state.FormModal?m.a.createElement(Q,{onSubmit:function(e){return a.simpanBarang(e)}}):m.a.createElement(z,{isLoadingHutang:this.state.isLoadingHutang,onSubmit:function(e){return a.simpanTransaksiHutang(e)}})}))}}]),t}(i.Component);function Z(a,e){return"ShowModalCustomer"===a.state?"Form Data Customer":"ShowModalBarang"===a.state?"Form Data Barang":"Form Data Hutang"}X=Object(E.a)({form:"HeadHutang",enableReinitialize:!0,validate:N.a})(X);var $=Object(c.b)(function(a){return{setBarangHutang:a.hutang.setBarangHutang,DataSales:a.datamaster.getDataSales,hideModal:a.datamaster.modalDialog}},null)(X),aa=function(a){Object(s.a)(t,a);var e=Object(l.a)(t);function t(a){var o;return Object(n.a)(this,t),(o=e.call(this,a)).state={isLoading:!1,columns:[{dataField:"nama_barang",text:"Nama Barang",footer:""},{dataField:"berat",text:"Berat",footer:function(a){return parseFloat(a.reduce(function(a,e){return a+e},0)).toFixed(1)}},{dataField:"jumlah",text:"Jumlah",formatter:function(a){return m.a.createElement("span",null,parseInt(a).toLocaleString("kr-KO"))},footer:function(a){return parseInt(a.reduce(function(a,e){return a+e},0)).toLocaleString("kr-KO")}},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(a,e,t){return m.a.createElement("div",{className:"row text-center"},m.a.createElement("div",{className:"col-12"},m.a.createElement("button",{type:"button",onClick:function(){return o.hapusdata(t)},className:"btn btn-danger mr-3"},m.a.createElement("i",{className:"fa fa-trash"}))))},footer:""}]},o.handleSubmit=o.handleSubmit.bind(Object(r.a)(o)),o}return Object(o.a)(t,[{key:"hapusdata",value:function(a){var e=this;g.a.fire({title:"Anda Yakin !!",text:"Ingin Menghapus Data Ini ?",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(function(t){if(t.isConfirmed){var n=JSON.parse(localStorage.getItem("data_barang_hutang_tmp"));n.splice(a,1),localStorage.setItem("data_barang_hutang_tmp",JSON.stringify(n)),e.props.dispatch(Object(d.o)(n)),e.setState({berhasil:"ok"})}})}},{key:"handleSubmit",value:function(a){}},{key:"componentWillUnmount",value:function(){localStorage.setItem("data_customer_hutang_tmp",JSON.stringify([])),localStorage.setItem("data_barang_hutang_tmp",JSON.stringify([]))}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("ol",{className:"breadcrumb float-xl-right"},m.a.createElement("li",{className:"breadcrumb-item"},m.a.createElement(u.b,{to:"#"},"Hutang")),m.a.createElement("li",{className:"breadcrumb-item active"},"Transaksi Hutang")),m.a.createElement("h1",{className:"page-header"},"Transaksi Hutang "),m.a.createElement(h.a,null,m.a.createElement(h.c,null,"Transaksi Hutang"),m.a.createElement("br",null),m.a.createElement("div",{className:"container"},m.a.createElement($,{isLoading:this.state.isLoading,columns:this.state.columns})),m.a.createElement("br",null)))}}]),t}(m.a.Component);e.default=Object(c.b)(null)(aa)},712:function(a,e,t){"use strict";e.a=function(a){var e={};return a.user_id||(e.user_id="User Id Tidak Boleh Kosong"),a.user_name||(e.user_name="Username Tidak Boleh Kosong"),a.level||(e.level="Level Harus Dipilih "),e}},719:function(a,e,t){"use strict";e.a=function(a){var e={};return a.kode_sales||(e.kode_sales="Kode Sales Harus Dipilih"),a.nama_customer||(e.nama_customer="Nama Customer Harus Diisi"),a.no_hp||(e.no_hp="No Hp Harus Diisi"),a.alamat||(e.alamat="Alamat Harus Diisi"),e}}}]);
//# sourceMappingURL=13.34cbf117.chunk.js.map