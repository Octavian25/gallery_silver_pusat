(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1311:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a(9),o=a(15),s=a(11),r=a(10),d=a(1),c=a.n(d),l=a(33),u=a(76),p=a(7),m=a(31),h=a(28),b=a.n(h),f=a(29),g=a(46),k=a(19),E=a(5),j=a(60),_=a(224),O=a(320),v=a(321),J=a(22),D=a(792),y=a(66),S=a.n(y),M=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).state={listgroup:[],aktif:!1},i}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(k.c)("group/get/all").then(function(t){e.setState({listgroup:t.data})}).catch(function(e){console.log(e)}),setTimeout(function(){e.props.isEdit?document.getElementById("nama_dept").focus():document.getElementById("kode_group").focus()},100)}},{key:"setIndex",value:function(){document.getElementById("kode_dept").focus()}},{key:"render",value:function(){var e=this;return c.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},autoComplete:"off"},this.props.isEdit?c.a.createElement(c.a.Fragment,null,c.a.createElement(O.a,{name:"id",component:J.b,type:"hidden",readOnly:this.props.isEdit})):null,c.a.createElement("div",{className:"form-group"},c.a.createElement(O.a,{onChange:function(){return e.setIndex()},tabIndex:"1",id:"kode_group",label:"Kode Group",name:"kode_group",options:this.state.listgroup.filter(function(e){return void 0!==e.kode_group}).map(function(e){return{value:e.kode_group,name:e.kode_group+" - "+e.nama_group}}),value:this.props.kode_group,disabled:this.props.isEdit,placeholder:"Silahkan Pilih Kode Group",component:J.f})),c.a.createElement(O.a,{id:"kode_dept",tabIndex:"2",name:"kode_dept",component:J.e,type:"text",label:"Kode Jenis",readOnly:this.props.isEdit,placeholder:"Masukan Kode Jenis"}),c.a.createElement(O.a,{tabIndex:"3",id:"nama_dept",name:"nama_dept",component:J.e,type:"text",label:"Nama Jenis",onBlur:function(){return e.setState({aktif:!0})},placeholder:"Masukan Nama Jenis"}),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 text-right"},c.a.createElement("button",{className:"btn btn-white",onClick:function(){return e.props.dispatch(Object(p.Mb)())},type:"button",disabled:this.props.isLoading},"Batal"),"\xa0",c.a.createElement("button",{tabIndex:"3",className:this.state.aktif?"btn btn-primary":"btn btn-white",disabled:this.props.submitting,type:"submit"},this.props.isLoading?c.a.createElement(c.a.Fragment,null,c.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))),this.props.isLoading?c.a.createElement(S.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),a}(d.Component);M=Object(v.a)({form:"ModalDataJenis",enableReinitialize:!0,validate:D.a})(M);var w=Object(m.b)(function(e){if(null!==e.datamaster.ShowModalJenis)return{initialValues:{id:e.datamaster.ShowModalJenis.id,kode_group:e.datamaster.ShowModalJenis.kode_group,kode_dept:e.datamaster.ShowModalJenis.kode_dept,nama_dept:e.datamaster.ShowModalJenis.nama_dept}}},null)(M),x=function(e,t,a){b.a.fire({html:"Apakah Anda Yakin Ingin Menghapus <h1><b>Kode Jenis "+e+"</b> ?</h1>",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(function(e){e.isConfirmed&&Object(k.b)("jenis/delete/by-kode-jenis/"+t,{data:{kode_group:t}}).then(function(){Object(f.d)("Data Berhasil Di Hapus").then(function(){return a(Object(p.wb)())})}).catch(function(e){Object(f.e)("error",e.response.data)})})},N=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).state={isEdit:!1,modalDialog:!1,isLoading:!1,columns:[{dataField:"kode_group",text:"Kode Group"},{dataField:"kode_dept",text:"Kode Dept ",sort:!0},{dataField:"nama_dept",text:"Nama Dept"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(e,t){var a={id:t._id,kode_dept:t.kode_dept,nama_dept:t.nama_dept,kode_group:t.kode_group};return c.a.createElement("div",{className:"row text-center"},c.a.createElement("div",{className:"col-12"},c.a.createElement("button",{onClick:function(){return i.fomrEditDataJenis(a)},className:"btn btn-primary mr-3"}," ",c.a.createElement("i",{className:"fa fa-edit"})),c.a.createElement("button",{onClick:function(){return x(t.kode_dept,t._id,i.props.dispatch)},className:"btn btn-danger"},c.a.createElement("i",{className:"fa fa-trash"}))))}}]},i.handleSubmit=i.handleSubmit.bind(Object(o.a)(i)),i}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(p.wb)())}},{key:"handleSubmit",value:function(e){var t=this;if(this.setState({isLoading:!0}),void 0===e.kode_dept)return b.a.fire({title:"Oopss!! ",text:"Kode Group Harus Diisi !!!",icon:"info"}),this.setState({isLoading:!1}),!1;var a={nama_dept:e.nama_dept},n={kode_dept:e.kode_dept,nama_dept:e.nama_dept,kode_group:e.kode_group};console.log(e),console.log(e.id),this.state.isEdit?Object(k.k)("jenis/edit/by-kode-jenis/"+e.id,a).then(function(){t.props.dispatch(Object(p.Mb)())}).then(function(){Object(f.e)("success","Data Berhasil Diedit")}).then(function(){t.props.dispatch(Object(p.wb)())}).then(function(){t.setState({isLoading:!1})}).then(function(){t.props.dispatch(Object(g.d)("ModalDataJenis"))}).catch(function(e){Object(f.e)("info",void 0===e.response?"Terjadi Kesalahan Saat Megirim Data ":e.response.data),t.setState({isLoading:!1})}):Object(k.g)("jenis/add",n).then(function(){t.props.dispatch(Object(p.Mb)())}).then(function(){Object(f.e)("success","Data Berhasil Disimpan")}).then(function(){t.props.dispatch(Object(p.wb)())}).then(function(){t.props.dispatch(Object(g.d)("ModalDataJenis"))}).then(function(){t.setState({isLoading:!1})}).catch(function(e){return Object(E.a)(e,"jenis/reactive/by-kode-jenis/",n,t.props.dispatch,Object(p.wb)(),Object(p.Mb)(),"ModalDataJenis").then(function(){t.setState({isLoading:!1})})})}},{key:"fomrEditDataJenis",value:function(e){this.props.dispatch(Object(p.Rb)()),this.props.dispatch(Object(p.gb)(e)),this.setState({isEdit:!0})}},{key:"ShowModalJenis",value:function(){this.props.dispatch(Object(p.Rb)()),this.props.dispatch(Object(p.gb)(!1)),this.setState({isEdit:!1})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("ol",{className:"breadcrumb float-xl-right"},c.a.createElement("li",{className:"breadcrumb-item"},c.a.createElement(l.b,{to:"#"},"Data Master")),c.a.createElement("li",{className:"breadcrumb-item active"},"Master Jenis")),c.a.createElement("h1",{className:"page-header"},"Master Jenis "),c.a.createElement(u.a,null,c.a.createElement(u.c,null,"Master Jenis"),c.a.createElement("br",null),c.a.createElement("div",{className:"container"},c.a.createElement(j.a,{keyField:"kode_dept",tambahData:!0,handleClick:function(){return e.ShowModalJenis()},exportCsv:!0,data:this.props.DataJenis,columns:this.state.columns,empty:this.props.DataJenis,textEmpty:"Data Jenis Kosong"})),c.a.createElement("br",null),c.a.createElement(_.a,{size:"P",title:this.state.isEdit?"Edit Data Jenis":"Tambah Data Jenis",content:c.a.createElement(w,{isLoading:this.state.isLoading,isEdit:this.state.isEdit,onSubmit:function(t){return e.handleSubmit(t)}})})))}}]),a}(c.a.Component);t.default=Object(m.b)(function(e){return{DataJenis:e.datamaster.getDataJenis,hideModal:e.datamaster.modalDialog}},null)(N)},792:function(e,t,a){"use strict";t.a=function(e,t){var a={};return e.kode_group||(a.kode_kategori="Kode Kategori Tidak Boleh Kosong"),e.kode_jenis||(a.kode_jenis="Kode Jenis Tidak Boleh Kosong"),e.nama_jenis||(a.nama_jenis="Nama Jenis Tidak Boleh Kosong"),a}}}]);
//# sourceMappingURL=37.cf505623.chunk.js.map