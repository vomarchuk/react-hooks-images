(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{13:function(e,t,a){e.exports={section:"App_section__240-0",loader:"App_loader__38Whi",modalImg:"App_modalImg__2OBJq"}},15:function(e,t,a){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__uCjCU",imageGalleryItem_image:"ImageGalleryItem_imageGalleryItem_image__1JYVa"}},16:function(e,t,a){e.exports={overlay:"Modal_overlay__1gnwo",modal:"Modal_modal__IT3f1"}},27:function(e,t,a){e.exports={container:"Container_container__1EEyW"}},28:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__tyHTS"}},30:function(e,t,a){e.exports={button:"Button_button__GHucs"}},36:function(e,t,a){},5:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__gMri2",searchForm:"Searchbar_searchForm__3p5_A",searchForm_button:"Searchbar_searchForm_button__3fmXD",searchForm_button_label:"Searchbar_searchForm_button_label__1kmRo",searchForm_input:"Searchbar_searchForm_input__2ugIS"}},77:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(4),c=a.n(r),s=(a(36),a(17)),l=a(8),i=a(9),u=a(11),m=a(10),h=a(12),d=(a(37),a(26)),p=a.n(d),b=a(13),g=a.n(b),j=a(27),_=a.n(j),f=a(1),v=function(e){var t=e.children;return Object(f.jsx)("div",{className:_.a.container,children:t})},y=a(31),O=a(5),x=a.n(O);function w(e){var t=e.onSubmit,a=Object(n.useState)(""),o=Object(y.a)(a,2),r=o[0],c=o[1];console.log(t);return Object(f.jsx)("header",{className:x.a.searchbar,children:Object(f.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===r.trim())return h.b.error("Enter the names of the pictures");t(r),c("")},className:x.a.searchForm,children:[Object(f.jsx)("button",{type:"submit",className:x.a.searchForm_button,children:Object(f.jsx)("span",{className:x.a.searchForm_button_label,children:"Search"})}),Object(f.jsx)("input",{className:x.a.searchForm_input,type:"text",value:r,onChange:function(e){e.preventDefault(),c(e.currentTarget.value)},autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}var I=a(28),S=a.n(I),M=a(15),k=a.n(M),F=function(e){var t=e.webformatURL,a=e.tags,n=e.openModal,o=e.largeImageURL;return Object(f.jsx)("li",{className:k.a.imageGallery,children:Object(f.jsx)("img",{onClick:function(e){n(e.target.dataset.large)},src:t,alt:a,className:k.a.imageGalleryItem_image,"data-large":o})})},C=function(e){var t=e.search,a=e.openModal;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("ul",{className:S.a.imageGallery,children:t&&t.map((function(e){return Object(f.jsx)(F,{webformatURL:e.webformatURL,tags:e.webformatURL,openModal:a,largeImageURL:e.largeImageURL},e.id)}))})})},N=a(29),G=a.n(N),L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a="22192349-6b91fd76fde5f4977c0f7c9ea",n="https://pixabay.com/api/";return G.a.get("".concat(n,"?q=").concat(e,"&page=").concat(t,"&key=").concat(a,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},U=a(30),D=a.n(U),E=function(e){var t=e.incrementPage;return Object(f.jsx)("button",{type:"button",className:D.a.button,onClick:t,children:"Load mode"})},R=a(16),B=a.n(R),A=document.querySelector("#modal-root"),T=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleKeyDown=function(t){"Escape"===t.code&&e.props.closeModal()},e.handleBackdropClick=function(t){t.target===t.currentTarget&&e.props.closeModal()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this;return Object(r.createPortal)(Object(f.jsx)("div",{className:B.a.overlay,onClick:this.handleBackdropClick,children:Object(f.jsxs)("div",{className:B.a.modal,children:[Object(f.jsx)("button",{type:"button",onClick:function(){e.props.closeModal()},children:"Close"}),this.props.children]})}),A)}}]),a}(n.Component),J="idle",P="pending",V="resolved",q=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={searchValue:"",articles:[],status:J,page:1,error:"",showModal:!1,modalImage:""},e.handlerSearchForm=function(t){e.setState({searchValue:t,articles:[],page:1,status:P})},e.handleIncrement=function(){e.setState({page:e.state.page+1})},e.openModal=function(t){e.setState((function(e){return{showModal:!e.showModal,modalImage:t}}))},e.closeModal=function(){e.setState((function(e){return{showModal:!e.showModal,modalImage:""}}))},e}return Object(i.a)(a,[{key:"getImages",value:function(e,t){var a=this;L(e,t).then((function(e){return a.setState({articles:[].concat(Object(s.a)(a.state.articles),Object(s.a)(e))})})).catch((function(e){return a.setState({error:e})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this.state.searchValue,n=this.state.page;"pending"===this.state.status&&e.prevProps!==this.props&&(this.setState({status:V}),this.getImages(a,n)),"resolved"===this.state.status&&t.page!==n&&this.getImages(a,n),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.status,a=e.articles,n=e.showModal,o=e.modalImage;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(v,{children:Object(f.jsx)(w,{onSubmit:this.handlerSearchForm})}),n&&Object(f.jsx)(T,{closeModal:this.closeModal,children:Object(f.jsx)("img",{src:o,alt:"",className:g.a.modalImg})}),"pending"===t&&Object(f.jsx)(p.a,{className:g.a.loader,type:"BallTriangle",color:"#00BFFF",height:80,width:80}),"resolved"===t&&Object(f.jsx)("section",{className:g.a.section,children:Object(f.jsxs)(v,{children:[Object(f.jsx)(C,{search:a,openModal:this.openModal}),Object(f.jsx)(E,{incrementPage:this.handleIncrement})]})}),Object(f.jsx)(h.a,{autoClose:3e3})]})}}]),a}(n.Component);c.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(q,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.6df8fb12.chunk.js.map