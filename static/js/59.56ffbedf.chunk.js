(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1283:function(e,a,t){"use strict";t.r(a);var n=t(8),s=t(9),i=t(15),l=t(11),o=t(10),c=t(1),r=t.n(c),d=t(33),m=t(76),u=t(7),b=t(31),p=t(28),h=t.n(p),f=t(29),S=t(46),E=t(19),k=t(5),O=t(60),g=t(320),j=t(321),v=t(22),_=function(e,a){var t={};return e.kode_sales||(t.kode_sales="Kode Sales Tidak Boleh Kosong"),e.nama_sales||(t.nama_sales="Nama Sales Tidak Boleh Kosong"),t},y=t(66),M=t.n(y),D=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(n.a)(this,t);for(var s=arguments.length,i=new Array(s),l=0;l<s;l++)i[l]=arguments[l];return(e=a.call.apply(a,[this].concat(i))).state={aktif:!1},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.props.isEdit?document.getElementById("nama_sales").focus():document.getElementById("kode_sales").focus()},100)}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},autoComplete:"off"},this.props.isEdit?r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{name:"id",component:v.b,type:"hidden",readOnly:this.props.isEdit})):null,r.a.createElement(g.a,{tabIndex:"1",id:"kode_sales",name:"kode_sales",component:v.e,type:"text",label:"Kode Sales",placeholder:"Masukan Kode Sales",readOnly:this.props.isEdit}),r.a.createElement(g.a,{id:"nama_sales",tabIndex:"2",name:"nama_sales",component:v.e,type:"text",label:"Nama Sales",onBlur:function(){return e.setState({aktif:!0})},placeholder:"Masukan Nama Sales"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 text-right"},r.a.createElement("button",{className:"btn btn-white",onClick:function(){return e.props.dispatch(Object(u.Mb)())},type:"button",disabled:this.props.isLoading},"Batal"),"\xa0",r.a.createElement("button",{tabIndex:"3",className:this.state.aktif?"btn btn-primary":"btn btn-white",disabled:this.props.submitting,type:"submit"},this.props.isLoading?r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))),this.props.isLoading?r.a.createElement(M.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),t}(c.Component);D=Object(j.a)({form:"ModalDataSales",enableReinitialize:!0,validate:_})(D);var w=Object(b.b)(function(e){if(null!==e.datamaster.ShowModalSales)return{initialValues:{id:e.datamaster.ShowModalSales.id,kode_sales:e.datamaster.ShowModalSales.kode_sales,nama_sales:e.datamaster.ShowModalSales.nama_sales}}},null)(D),N=t(224),x=function(e,a,t){h.a.fire({html:"Apakah Anda Yakin Ingin Menghapus <h1><b>Kode Sales "+e+"</b> ?</h1>",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(function(e){e.isConfirmed&&Object(E.b)("sales/delete/by-kode-sales/"+a).then(function(){Object(f.d)("Data Berhasil Di Hapus").then(function(){return t(Object(u.Ab)())})}).catch(function(e){Object(f.e)("error",e.response.data)})})},B=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(e){var s;return Object(n.a)(this,t),(s=a.call(this,e)).state={isEdit:!1,modalDialog:!1,isLoading:!1,columns:[{dataField:"kode_sales",text:"Kode Sales",sort:!0},{dataField:"nama_sales",text:"Nama Sales"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(e,a){var t={id:a._id,kode_sales:a.kode_sales,nama_sales:a.nama_sales};return r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{onClick:function(){return s.formEditSales(t)},className:"btn btn-primary mr-3"},r.a.createElement("i",{className:"fa fa-edit"})),r.a.createElement("button",{onClick:function(){return x(a.kode_sales,a._id,s.props.dispatch)},className:"btn btn-danger"},r.a.createElement("i",{className:"fa fa-trash"}))))}}]},s.handleSubmit=s.handleSubmit.bind(Object(i.a)(s)),s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(u.Ab)())}},{key:"handleSubmit",value:function(e){var a=this;this.setState({isLoading:!0});var t={nama_sales:e.nama_sales},n={kode_sales:e.kode_sales,nama_sales:e.nama_sales};this.state.isEdit?Object(E.k)("sales/edit/by-kode-sales/"+e.id,t).then(function(){a.props.dispatch(Object(u.Mb)())}).then(function(){Object(f.e)("success","Data Berhasil Diedit")}).then(function(){a.props.dispatch(Object(u.Ab)())}).then(function(){a.setState({isLoading:!1})}).then(function(){a.props.dispatch(Object(S.d)("ModalDataSales"))}).catch(function(e){Object(f.e)("info",void 0===e.response?"Terjadi Kesalahan Saat Megirim Data ":e.response.data),a.setState({isLoading:!1})}):Object(E.g)("sales/add",n).then(function(){a.props.dispatch(Object(u.Mb)())}).then(function(){Object(f.e)("success","Data Berhasil Simpan")}).then(function(){a.props.dispatch(Object(u.Ab)())}).then(function(){a.props.dispatch(Object(S.d)("ModalDataSales"))}).then(function(){a.setState({isLoading:!1})}).catch(function(e){return Object(k.a)(e,"sales/reactive/by-kode-sales/",n,a.props.dispatch,Object(u.Ab)(),Object(u.Mb)(),"ModalDataSales").then(function(){a.setState({isLoading:!1})})})}},{key:"formEditSales",value:function(e){this.props.dispatch(Object(u.Rb)()),this.props.dispatch(Object(u.ob)(e)),this.setState({isEdit:!0})}},{key:"showModalSales",value:function(){this.props.dispatch(Object(u.Rb)()),this.props.dispatch(Object(u.ob)(!1)),this.setState({isEdit:!1})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("ol",{className:"breadcrumb float-xl-right"},r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement(d.b,{to:"#"},"Data Master")),r.a.createElement("li",{className:"breadcrumb-item active"},"Master Sales")),r.a.createElement("h1",{className:"page-header"},"Master Sales "),r.a.createElement(m.a,null,r.a.createElement(m.c,null,"Master Sales"),r.a.createElement("br",null),r.a.createElement("div",{className:"container"},r.a.createElement(O.a,{keyField:"kode_sales",tambahData:!0,handleClick:function(){return e.showModalSales()},exportCsv:!0,data:this.props.DataSales,columns:this.state.columns,empty:this.props.DataSales,textEmpty:"Data Sales Kosong"})),r.a.createElement("br",null),r.a.createElement(N.a,{title:this.state.isEdit?"Edit Data Sales":"Tambah Data Sales",size:"P",content:r.a.createElement(w,{isLoading:this.state.isLoading,isEdit:this.state.isEdit,onSubmit:function(a){return e.handleSubmit(a)}})})))}}]),t}(r.a.Component);a.default=Object(b.b)(function(e){return{DataSales:e.datamaster.getDataSales,hideModal:e.datamaster.modalDialog}},null)(B)}}]);
//# sourceMappingURL=59.56ffbedf.chunk.js.map