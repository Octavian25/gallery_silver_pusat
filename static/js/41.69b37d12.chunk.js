(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1209:function(a,e,t){"use strict";t.r(e);var r=t(8),n=t(9),o=t(11),s=t(10),l=t(1),i=t.n(l),c=t(31),m=t(675),p=t(673),d=t(674),g=t(844),u=t(320),b=t(321),h=t(7),k=t(22),f=t(56),K=function(a,e){var t={};return a.kode||(t.kode="Kode Tidak Boleh Kosong"),a.nama_kategori||(t.nama_kategori="Nama Kategori Tidak Boleh Kosong"),a.harga_pergram||(t.harga_pergram="Harga / Gram Tidak Boleh Kosong"),a.presentase||(t.presentase="Presentase Tidak Boleh Kosong"),a.kadar||(t.kadar="Kadar Tidak Boleh Kosong"),t},M=t(66),E=t.n(M),y=function(a){Object(o.a)(t,a);var e=Object(s.a)(t);function t(){var a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=e.call.apply(e,[this].concat(o))).state={},a}return Object(n.a)(t,[{key:"render",value:function(){var a=this;return i.a.createElement(m.a,{backdrop:"static",keyboard:!1,isOpen:this.props.isOpen,toggle:function(){return a.props.dispatch(Object(h.Mb)())}},i.a.createElement(p.a,null," ",this.props.title," "),i.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},i.a.createElement(d.a,null,i.a.createElement(u.a,{name:"kode",component:k.e,type:"text",label:"Kode",placeholder:"Masukan Kode",readOnly:this.props.isEdit}),i.a.createElement(u.a,{name:"nama_kategori",component:k.e,type:"text",label:"Nama Kategori",placeholder:"Masukan Nama Kategori"}),i.a.createElement(u.a,{name:"harga_pergram",component:k.e,type:"text",label:"Harga / Gram",placeholder:"Masukan Harga / Gram",normalize:f.a}),i.a.createElement(u.a,{name:"presentase",component:k.e,type:"text",label:"Presentase",placeholder:"Masukan Presentase",normalize:f.c}),i.a.createElement(u.a,{name:"kadar",component:k.e,type:"text",label:"Kadar",placeholder:"Masukan Kadar"})),i.a.createElement(g.a,null,i.a.createElement("button",{className:"btn btn-white",onClick:function(){return a.props.dispatch(Object(h.Mb)())},type:"button",disabled:this.props.isLoading},"Batal"),i.a.createElement("button",{className:"btn btn-primary",disabled:this.props.submitting,type:"submit"},this.props.isLoading?i.a.createElement(i.a.Fragment,null,i.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data")),this.props.isLoading?i.a.createElement(E.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null))}}]),t}(l.Component);y=Object(b.a)({form:"ModalKategori",enableReinitialize:!0,validate:K})(y);e.default=Object(c.b)(function(a){if(null!==a.datamaster.ShowtModalKategori)return{initialValues:{kode:a.datamaster.ShowtModalKategori.kode,nama_kategori:a.datamaster.ShowtModalKategori.nama_kategori,harga_pergram:a.datamaster.ShowtModalKategori.harga_pergram,presentase:a.datamaster.ShowtModalKategori.presentase,kadar:a.datamaster.ShowtModalKategori.kadar}}},null)(y)},844:function(a,e,t){"use strict";var r=t(20),n=t(24),o=t(1),s=t.n(o),l=t(2),i=t.n(l),c=t(26),m=t.n(c),p=t(14),d={tag:p.n,className:i.a.string,cssModule:i.a.object},g=function(a){var e=a.className,t=a.cssModule,o=a.tag,l=Object(n.a)(a,["className","cssModule","tag"]),i=Object(p.j)(m()(e,"modal-footer"),t);return s.a.createElement(o,Object(r.a)({},l,{className:i}))};g.propTypes=d,g.defaultProps={tag:"div"},e.a=g}}]);
//# sourceMappingURL=41.69b37d12.chunk.js.map