(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1306:function(a,t,e){"use strict";e.r(t);var n=e(8),r=e(9),o=e(15),i=e(11),s=e(10),d=e(0),b=e(207),c=e(19),l=e(36),u=e(1),m=e.n(u),_=e(31),k=e(321),g=function(a){Object(i.a)(e,a);var t=Object(s.a)(e);function e(a){var r;return Object(n.a)(this,e),(r=t.call(this,a)).state={},r}return Object(r.a)(e,[{key:"componentDidMount",value:function(){setTimeout(function(){document.getElementById("nomor_pesanan").focus()},100)}},{key:"render",value:function(){var a=this;return m.a.createElement(m.a.Fragment,null,m.a.createElement("label",{htmlFor:""},"Masukan Nomor Pesanan"),m.a.createElement("div",{className:"input-group mb-3"},m.a.createElement("input",{type:"text",id:"nomor_pesanan",className:"form-control",placeholder:"Nomor Pesanan","aria-label":"Nomor Pesanan","aria-describedby":"basic-addon2"}),m.a.createElement("div",{className:"input-group-append"},m.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){return a.props.getNomorPesanan(document.getElementById("nomor_pesanan"))}},this.props.isLoadingPesanan?m.a.createElement(m.a.Fragment,null,m.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Search"):"Search"))))}}]),e}(u.Component);g=Object(k.a)({form:"ModalPesanan",enableReinitialize:!0})(g);var p=Object(_.b)(function(a){return{setCamera:a.databarang.setCamera,hideModal:a.datamaster.modalDialog}},null)(g),h=e(5),f=function(a){Object(i.a)(e,a);var t=Object(s.a)(e);function e(a){var r;return Object(n.a)(this,e),(r=t.call(this,a)).showBarangPesanan=function(){r.setState({fromModalPesanan:!0,formTambahBarang:!1}),r.props.dispatch(Object(d.bb)()),r.props.dispatch(Object(l.y)())},r.state={isEdit:!1,modalDialog:!1,isLoading:!1,formEdit:!1,loadingData:!1,databarang:[],dataPesanan:[],formTambahBarang:!1,fromModalPesanan:!1,isLoadingPesanan:!1,noPesanan:"",columns:[{dataField:"kode_barcode",text:"Kode Barcode",sort:!0},{dataField:"kode_group",text:"Kode Group"},{dataField:"kode_toko",text:"Kode Baki"},{dataField:"kode_dept",text:"Kode Jenis"},{dataField:"nama_barang",text:"Nama Barang"},{dataField:"berat",text:"Berat"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(a,t){return d.o.createElement("div",{className:"row text-center"},d.o.createElement("div",{className:"col-12"},d.o.createElement("button",{type:"button",onClick:function(){return r.showModalDuplikatBarang(t)},className:"btn btn-primary mr-3"},d.o.createElement("i",{className:"fa fa-copy"}))))}}]},r.handleSubmit=r.handleSubmit.bind(Object(o.a)(r)),r.showModalTambahBarang=r.showModalTambahBarang.bind(Object(o.a)(r)),r.tambahbarang=r.tambahbarang.bind(Object(o.a)(r)),r}return Object(r.a)(e,[{key:"componentDidMount",value:function(){localStorage.removeItem("estimasi_harga_tambah")}},{key:"tambahbarang",value:function(a){var t=this;this.setState({isLoading:!0});var e=a.kode_lokasi_toko.split("~"),n={no_kirim_bos:"-",kode_baki_label:"-",qty_input:1,id_barang_pesanan:"-",kode_group:a.kode_kategori,kode_dept:a.kode_jenis,kode_gudang:a.kode_gudang,kode_toko:e[0],susut_tukang:parseFloat(a.susut_tukang),kode_intern:a.kode_intern||"-",nama_barang:a.nama_barang,berat:parseFloat(a.berat),berat_asli:"PESANAN"===a.status_pesanan?parseFloat(a.berat):parseFloat(a.berat_asli)||0,tipe_barang:a.tipe_barang,kadar_modal:parseFloat(a.kadar_modal)||0,kadar:parseFloat(a.kadar),berat_cad:parseFloat(a.berat_cad),berat_susut:parseFloat(a.berat_susut),tujuan:a.tujuan,kadar_cetak:a.kadar_cetak,nama_atribut:a.nama_atribut||"-",berat_atribut:parseFloat(a.berat_atribut)||0,berat_plastik:parseFloat(a.berat_plastik)||0,harga_atribut:parseInt(a.harga_atribut)||0,tag_id:"-",berat_bandrol:0,no_pesanan:a.no_pesanan||"-"};setTimeout(function(){Object(c.j)("tambah-barang/create",n).then(function(e){var n=void 0!==a.foto?Object(h.c)(a.foto):void 0;void 0!==n&&Object(h.q)(n,"foto_produk/"+a.kode_barcode).then(function(a){}).catch(function(a){Object(d.v)("info","upload Foto Gagal, Silahkan Edit Didata Barang")}),Object(c.c)("barang/get/by-kode-baki?kode_baki="+a.kode_lokasi_toko).then(function(a){0===a.data.length?t.setState({databarang:[]}):t.setState({databarang:a.data}),t.setState({isLoading:!1})}).catch(function(a){t.setState({isLoading:!1,databarang:[]}),Object(d.v)("info","Kode Baki Yang Anda Dicari Tidak Ada")}),t.props.dispatch(Object(d.Z)("FormTambahBarang")),t.props.dispatch(Object(d.K)()),Object(d.v)("success","Data Barang Berhasil Di Tambahkan")}).catch(function(a){var e,n;t.setState({isLoading:!1}),Object(d.v)("info",(null===(e=a.response)||void 0===e?void 0:null===(n=e.data)||void 0===n?void 0:n.message)||"Gagal Tambah Barang Silahkan Coba Lagi")})},300)}},{key:"showModalDuplikatBarang",value:function(a){var t=this;Object(c.c)("imagebarang/get/by-kode-barcode/"+a.kode_barcode).then(function(e){var n={foto:e.data.dataimage,kode_barcode:a.kode_barcode,nama_barang:a.nama_barang,nama_atribut:a.nama_atribut||"-",harga_atribut:a.harga_atribut||0,kode_intern:a.kode_intern,kadar:a.kadar||0,kadar_cetak:a.kadar_cetak||0,kadar_modal:a.kadar_modal||0,kode_kategori:a.kode_group,kode_jenis:a.kode_dept,kode_lokasi_toko:a.kode_toko+"~"+a.kode_gudang,berat:a.berat,berat_asli:a.berat_asli,berat_atribut:a.berat_atribut||0,berat_plastik:a.berat_plastik||0,tag_id:a.tag_id,berat_bandrol:0};console.log(n),Object(d.ab)("data_kategori_jenis",n),t.setState({formTambahBarang:!0}),t.props.dispatch(Object(d.bb)()),t.props.dispatch(Object(b.f)(n))}).catch(function(e){var n={foto:"-",kode_barcode:a.kode_barcode,nama_barang:a.nama_barang,nama_atribut:a.nama_atribut||"-",harga_atribut:a.harga_atribut||0,kode_intern:a.kode_intern,kadar:a.kadar||0,kadar_cetak:a.kadar_cetak||0,kadar_modal:a.kadar_modal||0,kode_kategori:a.kode_group,kode_jenis:a.kode_dept,kode_lokasi_toko:a.kode_toko+"~"+a.kode_gudang,berat:a.berat,berat_asli:a.berat_asli,berat_atribut:a.berat_atribut||0,berat_plastik:a.berat_plastik||0,tag_id:a.tag_id,berat_bandrol:0};Object(d.ab)("data_kategori_jenis",n),t.setState({formTambahBarang:!0}),t.props.dispatch(Object(d.bb)()),t.props.dispatch(Object(b.f)(n))})}},{key:"showModalTambahBarang",value:function(a){Object(d.ab)("data_kategori_jenis",a),this.setState({formTambahBarang:!0}),this.props.dispatch(Object(d.bb)()),this.props.dispatch(Object(b.f)(a))}},{key:"getBarangPesanan",value:function(){Object(c.c)("pesanan/no/"+this.state.noPesanan).then(function(a){return console.log(a.data)}).catch(function(a){return Object(d.v)("info",a.response.data)})}},{key:"handleSubmit",value:function(a){var t=this;this.setState({isLoading:!0});var e={kode_barcode:a.kode_barcode,dataimage:a.foto},n={nama_barang:a.nama_barang,nama_atribut:a.nama_atribut,harga_atribut:a.harga_atribut,kode_intern:a.kode_intern,kadar:a.kadar,kadar_cetak:a.kadar_cetak};Object(d.S)("barang/edit/"+a.kode_barcode,n).then(function(){t.props.dispatch(Object(d.K)())}).then(function(){void 0===a.foto||Object(d.S)("imagebarang/add",e).then(function(a){}).catch(function(a){})}).then(function(){t.setState({databarang:[]}),t.props.dispatch(Object(d.Z)("HeadEditDataBarang")),t.props.dispatch(Object(b.e)(!1))}).then(function(){Object(d.v)("success","Data Berhasil Disimpan")}).then(function(){t.setState({isLoading:!1})}).catch(function(a){t.setState({isLoading:!1}),Object(d.v)("info","Barang Gagal Di Edit")})}},{key:"getNomorPesanan",value:function(a){var t=this;this.setState({isLoadingPesanan:!0}),Object(c.h)("pesanan/valid/no",{no_pesanan:a.value.trim()}).then(function(e){t.setState({isLoadingPesanan:!1});var n=e.data.detail_barang.map(function(t){return{kode_barcode:t.kode_barcode,nama_atribut:t.attribut||"-",harga_atribut:t.harga_atribut||0,kode_intern:"-",susut_tukang:e.data.susut_tukang||0,kadar:t.perkiraan_kadar,nama_barang:t.keterangan,ongkos:t.ongkos||0,berat_susut:t.berat_susut||0,berat_cad:t.berat_cad||0,tujuan:t.tujuan||"-",kadar_cetak:0,kadar_modal:t.kadar_modal||0,kode_kategori:t.kode_kategori,kode_jenis:t.kode_jenis||"",kode_lokasi_toko:t.kode_toko||"",berat:t.perkiraan_berat,berat_asli:t.perkiraan_berat||0,berat_atribut:t.berat_atribut||0,berat_plastik:t.berat_plastik||0,tag_id:t.tag_id||"-",berat_bandrol:0,no_pesanan:a.value,status:"PESANAN"}})[0];t.props.dispatch(Object(d.bb)()),t.props.dispatch(Object(b.f)(n)),t.setState({formTambahBarang:!0,fromModalPesanan:!1})}).catch(function(a){t.setState({isLoadingPesanan:!1}),Object(d.v)("info",void 0===a.response?"Terjadi Kesalahan Saat Request Data":a.response.data.message)})}},{key:"render",value:function(){var a=this,t={renderer:function(a){return d.o.createElement("div",{className:"container"},d.o.createElement("div",{className:"row"},d.o.createElement("div",{className:"col-12"},"Nama Atribut : ",a.nama_atribut," ",d.o.createElement("br",null),"Berat Atribut : ",a.berat_atribut," ",d.o.createElement("br",null),"Berat Plastik : ",a.berat_plastik," ",d.o.createElement("br",null),"Harga Atribut : ",a.harga_atribut," ",d.o.createElement("br",null),"Kode Intern : ",a.kode_intern," ",d.o.createElement("br",null),"Kadar : ",a.kadar," ",d.o.createElement("br",null),"Kadar Cetak : ",a.kadar_cetak," ",d.o.createElement("br",null),"Kode Toko : ",a.kode_toko," ",d.o.createElement("br",null),"Kode Gudang : ",a.kode_gudang," ",d.o.createElement("br",null),"Stock : ",a.stock_on_hand," ",d.o.createElement("br",null))))},showExpandColumn:!0,expandByColumnOnly:!0};return d.o.createElement("div",null,d.o.createElement("ol",{className:"breadcrumb float-xl-right"},d.o.createElement("li",{className:"breadcrumb-item"},d.o.createElement(d.h,{to:"#"},"Pesanan")),d.o.createElement("li",{className:"breadcrumb-item active"},"Pesanan Selesai")),d.o.createElement("h1",{className:"page-header"},"Pesanan Selesai "),d.o.createElement(d.l,null,d.o.createElement(d.n,null,"Data Barang"),d.o.createElement("br",null),d.o.createElement(d.m,null,d.o.createElement(d.u,{keyField:"kode_barang",exportCsv:!0,handleClick:function(){return a.showBarangPesanan()},tambahData:!0,btnText:"Pesanan Selesai",data:this.state.databarang,columns:this.state.columns,empty:!0,textEmpty:this.state.loadingData?d.o.createElement(d.o.Fragment,null," ",d.o.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari Data Barang"):"Data Barang Kosong",expandRow:t})),d.o.createElement("br",null),d.o.createElement(d.j,{size:"l",title:this.state.formTambahBarang?"Tambah Barang":this.state.fromModalPesanan?"Barang Pesanan":"Edit Barang",content:this.state.formTambahBarang?d.o.createElement(b.a,{isLoading:this.state.isLoading,onSubmit:function(t){return a.tambahbarang(t)}}):this.state.fromModalPesanan?d.o.createElement(p,{isLoadingPesanan:this.state.isLoadingPesanan,getNomorPesanan:function(t){return a.getNomorPesanan(t)},onSubmit:function(t){return a.tambahbarang(t)}}):d.o.createElement(b.c,{isLoading:this.state.isLoading,onSubmit:function(t){return a.handleSubmit(t)}})})))}}]),e}(d.o.Component);t.default=Object(d.w)()(f)}}]);
//# sourceMappingURL=47.d9817999.chunk.js.map