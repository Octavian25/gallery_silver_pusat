(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1130:function(a,e,t){},1269:function(a,e,t){"use strict";t.r(e);var n=t(8),s=t(9),l=t(15),r=t(11),i=t(10),o=t(1),c=t.n(o),u=t(31),m=t(33),b=t(46),d=t(321),p=t(29),g=t(76),h=t(19),v=t(320),k=t(22),f=t(228),E=t.n(f),O=(t(1130),t(159)),j=function(a){var e={};return a.user_id||(e.user_id="User Id Harus Diisi"),e},B=t(66),D=t.n(B),L=[{label:"Data Master",options:[{value:"/master-group",label:"Master Group"},{value:"/master-jenis",label:"Master jenis"},{value:"/master-gudang",label:"Master Gudang"},{value:"/master-baki",label:"Master Baki"},{value:"/master-bandrol",label:"Master Bandrol"},{value:"/master-kondisi-pembelian",label:"Master Kondisi Pembelian"},{value:"/master-parameter-harga-emas",label:"Master Parameter Point"}]},{label:"Data Barang",options:[{value:"/tambah-data-barang",label:"Tambah Data Barang"},{value:"/data-barang",label:"Data Barang"},{value:"/kirim-barang",label:"Kirim Barang"},{value:"/hancur-data-barang",label:"Hancur Data Barang"},{value:"/pindah-barang",label:"Pindah Barang"},{value:"/pindah-barang-satu-baki",label:"Pindah Barang Satu Baki"},{value:"/timbang-baki",label:"Timbang Baki"}]},{label:"Laporan Barang",options:[{value:"/laporan-detail-barang",label:"Laporan Barang Detail"},{value:"/laporan-tambah-barang",label:"Laporan Tambah Barang"},{value:"/laporan-timbang-baki",label:"Laporan Timbang Baki"},{value:"/laporan-hancur-barang",label:"Laporan Hancur Barang"},{value:"/laporan-pindah-barang",label:"Laporan Pindah Barang"},{value:"/laporan-barang-sumary",label:"Laporan Barang Sumary"}]},{label:"Laporan Otorisasi",options:[{value:"/laporan-otorisasi",label:"Laporan Otorisasi"}]},{label:"Manage User",options:[{value:"/data-users",label:"Data Users"},{value:"/hak-akses-users",label:"Hak Akses Users"}]},{label:"Utility",options:[{value:"/cetak-barcode",label:"Cetak Barcode"}]},{label:"Stock Opname",value:"/stock-opname"}],S=function(a){Object(r.a)(t,a);var e=Object(i.a)(t);function t(a){var s;return Object(n.a)(this,t),(s=e.call(this,a)).state={isLoading:!1},s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(O.e)())}},{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},c.a.createElement(v.a,{id:"user_id",name:"user_id",onChange:this.props.getDataUsers,label:"Pilih User Id",placeholder:"Pilih User Id",options:this.props.DataUsers.map(function(a){return{value:a.user_id,name:a.usere_name}}),component:k.f})),c.a.createElement("div",{className:"col-6"},c.a.createElement(v.a,{id:"nama_user",name:"nama_user",component:k.e,type:"text",label:"Nama User",defaultValue:this.state.nama,placeholder:"Masukan Nama User",readOnly:!0})),c.a.createElement("div",{className:"col-12",style:{height:220}},c.a.createElement(E.a,{options:L,selected:this.props.selected,filterPlaceholder:"Filter...",onChange:this.props.selectedAkses})),c.a.createElement("div",{className:"col-12"},c.a.createElement("button",{className:"btn btn-primary btn-block",disabled:this.props.isLoading,type:"submit"},this.props.isLoading?c.a.createElement(c.a.Fragment,null,c.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))),this.props.isLoading?c.a.createElement(D.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),t}(o.Component);S=Object(d.a)({form:"HeadFormHakAkses",enableReinitialize:!0,validate:j})(S);var U=Object(u.b)(function(a){return{DataUsers:a.manageusers.getDataUser}},null)(S),y=function(a){Object(r.a)(t,a);var e=Object(i.a)(t);function t(a){var s;return Object(n.a)(this,t),(s=e.call(this,a)).selectedAkses=function(a){s.setState({selected:a})},s.state={isLoading:!1,selected:[],nama:"samsul"},s.handleSubmit=s.handleSubmit.bind(Object(l.a)(s)),s.selectedAkses=s.selectedAkses.bind(Object(l.a)(s)),s}return Object(s.a)(t,[{key:"handleSubmit",value:function(a){var e=this;this.setState({isLoading:!0});var t=this.state.selected||[],n=[];t.forEach(function(e,t){var s={user_id:a.user_id,menu_id:e,menu_name:e};n.push(s)}),console.log(n),Object(h.g)("akses-user/add",n).then(function(a){Object(p.e)("success","Hak Akses Berhasil Disimpan")}).then(function(){e.setState({selected:[],isLoading:!1}),e.props.dispatch(Object(b.d)("HeadFormHakAkses"))}).catch(function(a){e.setState({isLoading:!1}),Object(p.e)("info","Terjadi Kesalahan Saat Mengirim Data")})}},{key:"getDataUsers",value:function(a){var e=this;Object(h.c)("sales/get/by-kode-sales/"+a).then(function(e){document.getElementById("nama_user").value=void 0===e.data.nama_sales?a:e.data.nama_sales});var t=[];Object(h.c)("akses-user/id/"+a).then(function(a){a.data.forEach(function(a){t.push(a.menu_name)}),e.setState({selected:t})}).catch(function(a){console.log(a)})}},{key:"render",value:function(){var a=this;return c.a.createElement("div",null,c.a.createElement("ol",{className:"breadcrumb float-xl-right"},c.a.createElement("li",{className:"breadcrumb-item"},c.a.createElement(m.b,{to:"#"},"Manage Users")),c.a.createElement("li",{className:"breadcrumb-item active"},"Hak Akses")),c.a.createElement("h1",{className:"page-header"},"Hak Akses "),c.a.createElement(g.a,null,c.a.createElement(g.c,null,"Hak Akses"),c.a.createElement("br",null),c.a.createElement("div",{className:"container"},c.a.createElement(U,{selected:this.state.selected,isLoading:this.state.isLoading,getDataUsers:function(e){return a.getDataUsers(e)},selectedAkses:function(e){return a.selectedAkses(e)},onSubmit:function(e){return a.handleSubmit(e)}})),c.a.createElement("br",null)))}}]),t}(c.a.Component);y=Object(d.a)({form:"FormHakAkses",enableReinitialize:!0})(y);e.default=Object(u.b)()(y)}}]);
//# sourceMappingURL=21.b5d24702.chunk.js.map