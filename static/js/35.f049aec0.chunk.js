(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1309:function(e,a,t){"use strict";t.r(a);var n=t(8),r=t(9),i=t(11),o=t(10),l=t(1),s=t.n(l),c=t(33),d=t(76),u=t(115),b=t.n(u),m=t(31),p=t(88),h=t.n(p),f=t(7),g=t(320),E=t(321),k=t(22),v=t(793),j=t(66),O=t.n(j),B=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=a.call.apply(a,[this].concat(i))).state={aktif:!1},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.props.isEdit?document.getElementById("berat_bandrol").focus():document.getElementById("keterangan").focus()},100)}},{key:"render",value:function(){var e=this;return s.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off",onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}},s.a.createElement(g.a,{id:"keterangan",tabIndex:"1",name:"keterangan",component:k.e,type:"text",label:"Keterangan",readOnly:this.props.isEdit,placeholder:"Masukan Keterangan"}),s.a.createElement(g.a,{tabIndex:"2",id:"berat_bandrol",name:"berat_bandrol",component:k.a,type:"text",label:"Berat Bandrol",onBlur:function(){return e.setState({aktif:!0})},placeholder:"Berat Bandrol"}),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12 text-right"},s.a.createElement("button",{className:"btn btn-white",onClick:function(){return e.props.dispatch(Object(f.Mb)())},type:"button",disabled:this.props.isLoading},"Batal"),"\xa0",s.a.createElement("button",{tabIndex:"3",className:this.state.aktif?"btn btn-primary":"btn btn-white",disabled:this.props.submitting,type:"submit"},this.props.isLoading?s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))),this.props.isLoading?s.a.createElement(O.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),t}(l.Component);B=Object(E.a)({form:"FormBandrol",enableReinitialize:!0,validate:v.a})(B);var y=Object(m.b)(function(e){if(null!==e.datamaster.ShowModalBandrol)return{initialValues:{keterangan:e.datamaster.ShowModalBandrol.keterangan,berat_bandrol:e.datamaster.ShowModalBandrol.berat_bandrol}}},null)(B),N=t(29),S=t(46),D=t(19),M=t(224),w=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={isEdit:!1,modalDialog:!1,columns:[{dataField:"keterangan",text:"Keterangan "},{dataField:"berat_bandrol",text:"Berat Bandrol "},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(e,a){var t={keterangan:a.keterangan,berat_bandrol:a.berat_bandrol};return s.a.createElement("div",{className:"row text-center"},s.a.createElement("div",{className:"col-12"},s.a.createElement("button",{onClick:function(){return r.formEditDataKategori(t)},className:"btn btn-primary mr-3"},s.a.createElement("i",{className:"fa fa-edit"}))))}}]},r}return Object(r.a)(t,[{key:"handleSubmit",value:function(e){var a=this;this.setState({isLoading:!0});var t={berat_bandrol:e.berat_bandrol},n={keterangan:e.keterangan,berat_bandrol:e.berat_bandrol};this.state.isEdit?Object(D.k)("parabandrol/edit/by-keterangan/"+e.keterangan,t).then(function(){a.props.dispatch(Object(f.Mb)())}).then(function(){Object(N.e)("success","Data Berhasil Diedit")}).then(function(){a.props.dispatch(Object(f.rb)())}).then(function(){a.setState({isLoading:!1})}).then(function(){a.props.dispatch(Object(S.d)("FormBandrol"))}).catch(function(e){Object(N.e)("info","Terjadi Kesalahan Saat Mengirim Data"),a.setState({isLoading:!1})}):Object(D.g)("pababandrol/add",n).then(function(){a.props.dispatch(Object(f.Mb)())}).then(function(){Object(N.e)("success","Data Berhasil Disimpan")}).then(function(){a.props.dispatch(Object(f.rb)())}).then(function(){a.props.dispatch(Object(S.d)("FormBandrol"))}).then(function(){a.setState({isLoading:!1})}).catch(function(e){return a.ErrorHandling(e)})}},{key:"ErrorHandling",value:function(e){this.setState({isLoading:!1}),Object(N.a)(e)}},{key:"componentDidMount",value:function(){this.props.dispatch(Object(f.rb)())}},{key:"formEditDataKategori",value:function(e){this.props.dispatch(Object(f.Rb)()),this.props.dispatch(Object(f.bb)(e)),this.setState({isEdit:!0})}},{key:"showModalKategori",value:function(){this.props.dispatch(Object(f.Rb)()),this.props.dispatch(Object(f.bb)(!1)),this.setState({isEdit:!1})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("ol",{className:"breadcrumb float-xl-right"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(c.b,{to:"#"},"Data Master")),s.a.createElement("li",{className:"breadcrumb-item active"},"Master Bandrol")),s.a.createElement("h1",{className:"page-header"},"Master Bandrol "),s.a.createElement(d.a,null,s.a.createElement(d.c,null,"Master Bandrol"),s.a.createElement("br",null),s.a.createElement("div",{className:"container"},s.a.createElement(h.a,{keyField:"keterangan",data:this.props.DataBandrol||[],columns:this.state.columns,search:!0,exportCSV:{fileName:"Export Master Gudang.csv"}},function(a){return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-6 mb-3"},0===e.props.DataBandrol.length?s.a.createElement("button",{onClick:function(){return e.showModalKategori()},className:"btn btn-primary"},s.a.createElement("i",{className:"fa fa-plus"})):null),s.a.createElement("div",{className:"col-12"},s.a.createElement(b.a,a.baseProps),s.a.createElement("br",null)))})),s.a.createElement("br",null),s.a.createElement(M.a,{size:"P",title:this.state.isEdit?"Edit Data Bandrol":"Tambah Data Bandrol",content:s.a.createElement(y,{isEdit:this.state.isEdit,isLoading:this.state.isLoading,onSubmit:function(a){return e.handleSubmit(a)}})})))}}]),t}(s.a.Component);a.default=Object(m.b)(function(e){return{DataBandrol:e.datamaster.getBandrol,hideModal:e.datamaster.modalDialog}},null)(w)},793:function(e,a,t){"use strict";a.a=function(e,a){var t={};return e.kode_gudang||(t.kode_gudang="Kode Gudang Tidak Boleh Kosong"),e.nama_gudang||(t.nama_gudang="Nama Gudang Tidak Boleh Kosong"),t}}}]);
//# sourceMappingURL=35.f049aec0.chunk.js.map