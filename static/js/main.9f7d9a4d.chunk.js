(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{61:function(e,t,c){},62:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var a=c(1),i=c(0),s=c.n(i),n=c(30),r=c.n(n),l=(c(61),c(11)),j=c(19),b=c(15),o=c(14),d=c(31),h=c(7),x=c(9),u=c(35),m=c(54),O=c(10),p=c(25);var f=function(){return Object(a.jsx)("footer",{className:"mt-5",children:Object(a.jsx)(x.a,{fluid:!0,children:Object(a.jsxs)(O.a,{className:"border-top justify-content-between p-3",children:[Object(a.jsx)(p.a,{className:"p-0",md:3,sm:12,children:"Sarah Cox-Barkley"}),Object(a.jsx)(p.a,{className:"p-0 d-flex justify-content-end",md:3,children:"\xa92020 All rights reserved"})]})})})},g=(c(62),c(50));var k=function(e){return Object(a.jsx)(g.a,{children:Object(a.jsx)(x.a,{fluid:!0,children:Object(a.jsx)(O.a,{className:"justify-content-center py-5",children:Object(a.jsxs)(p.a,{children:[e.title&&Object(a.jsx)("h1",{children:e.title}),e.subTitle&&Object(a.jsx)("h3",{children:e.subTitle}),e.text&&Object(a.jsx)("h3",{children:e.text})]})})})})},v=c(27),y=c(48);var C=function(e){var t=Object(y.b)({opacity:1,from:{opacity:0}});return Object(a.jsxs)(y.a.div,{className:"g-card-info",style:t,children:[Object(a.jsx)("p",{className:"g-card-title",children:e.title}),Object(a.jsx)("p",{className:"g-card-sub-title",children:e.subTitle})]})};var N=function(e){return Object(a.jsxs)("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)},children:[Object(a.jsx)("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&Object(a.jsx)(C,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link})]})},w=c.p+"static/media/WebDev.468d1083.jpg",I=c.p+"static/media/About.4a79a49b.jpg",S=c.p+"static/media/Photography.721fcf2d.jpg",T=function(e){Object(b.a)(c,e);var t=Object(o.a)(c);function c(e){var i;return Object(l.a)(this,c),(i=t.call(this,e)).handleCardClick=function(e,t){var c=Object(v.a)(i.state.items);c[e].selected=!c[e].selected,c.forEach((function(t){t.id!==e&&(t.selected=!1)})),i.setState({items:c})},i.makeItems=function(e){return e.map((function(e){return Object(a.jsx)(N,{item:e,click:function(t){return i.handleCardClick(e.id,t)}},e.id)}))},i.state={items:[{id:0,title:"Web Development",subTitle:"Full Stack Web Developer",imgSrc:w,selected:!1},{id:1,title:"Sarah Cox-Barkley",subTitle:"Creative Professional",imgSrc:I,selected:!1},{id:2,title:"Photography",subTitle:"View My Photography Website",imgSrc:S,link:"https://featherprintphotography.com",selected:!1}]},i}return Object(j.a)(c,[{key:"render",value:function(){return Object(a.jsx)(x.a,{fluid:!0,children:Object(a.jsx)(O.a,{className:"justify-content-around",children:this.makeItems(this.state.items)})})}}]),c}(s.a.Component);var P=function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)(k,{title:e.title,subTitle:e.subTitle,text:e.text}),Object(a.jsx)(T,{})]})};var _=function(e){return Object(a.jsx)(x.a,{fluid:!0,children:Object(a.jsx)(O.a,{className:"justify-content-center",children:Object(a.jsx)(p.a,{md:8,children:e.children})})})};var F=function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)(k,{title:e.title}),Object(a.jsx)(_,{children:Object(a.jsx)("p",{children:"I am a full stack web developer with a passion for small business branding and development. I love to learn new skills, and have a background in small business management, English studies, real estate, and I'm a certified yoga teacher. I live a fast-paced life, but you can sometimes find me lost in a good book."})})]})},W=c(53),D=c(17),A=c.p+"static/media/WanderlustAmerica.38b0b31a.png",B=c.p+"static/media/Vote2020.831284bb.png",V=c.p+"static/media/WeatherDashboard.70a4365d.png",H=c.p+"static/media/CodeQuiz.eaa4238c.png",L=c.p+"static/media/UserDirectory.6d80a00e.png";var E=function(){var e=Object(i.useState)(0),t=Object(W.a)(e,2),c=t[0],s=t[1];return Object(a.jsx)(x.a,{fluid:!0,children:Object(a.jsx)(O.a,{className:"justify-content-around",children:Object(a.jsxs)(D.a,{activeIndex:c,onSelect:function(e,t){s(e)},children:[Object(a.jsxs)(D.a.Item,{children:[Object(a.jsx)("img",{className:"d-block img-width",src:A,alt:"First slide"}),Object(a.jsxs)(D.a.Caption,{children:[Object(a.jsx)("h3",{children:"Wanderlust America"}),Object(a.jsx)("p",{children:Object(a.jsx)("a",{href:"https://campground-mapper.herokuapp.com/",target:"_blank",children:"Visit the Site"})})]})]}),Object(a.jsxs)(D.a.Item,{children:[Object(a.jsx)("img",{className:"d-block img-width",src:B,alt:"Second slide"}),Object(a.jsxs)(D.a.Caption,{children:[Object(a.jsx)("h3",{children:"Vote 2020"}),Object(a.jsx)("p",{children:Object(a.jsx)("a",{href:"https://b-dionysus.github.io/project1-Election/index.html",target:"_blank",children:"Visit the Site"})})]})]}),Object(a.jsxs)(D.a.Item,{children:[Object(a.jsx)("img",{className:"d-block img-width",src:V,alt:"Third slide"}),Object(a.jsx)(D.a.Caption,{children:Object(a.jsx)("p",{children:Object(a.jsx)("a",{href:"https://sarahlcox.github.io/weather-dashboard/",target:"_blank",children:"Weather Dashboard"})})})]}),Object(a.jsxs)(D.a.Item,{children:[Object(a.jsx)("img",{className:"d-block img-width",src:H,alt:"Fourth slide"}),Object(a.jsxs)(D.a.Caption,{children:[Object(a.jsx)("h3",{children:"Code Quiz"}),Object(a.jsx)("p",{children:Object(a.jsx)("a",{href:"https://sarahlcox.github.io/Homework_4-webapis-sbarkley/newindex.html",target:"_blank",children:"Visit the Site"})})]})]}),Object(a.jsxs)(D.a.Item,{children:[Object(a.jsx)("img",{className:"d-block img-width",src:L,alt:"Fourth slide"}),Object(a.jsxs)(D.a.Caption,{children:[Object(a.jsx)("h3",{children:"User Directory"}),Object(a.jsx)("p",{children:Object(a.jsx)("a",{href:"https://pacific-brushlands-70133.herokuapp.com/",target:"_blank",children:"Visit the Site"})})]})]})]})})})};var M=function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)(k,{title:e.title}),Object(a.jsx)(_,{children:Object(a.jsx)("p",{children:"Take a look around at the web development projects that I've created below."})}),Object(a.jsx)(E,{})]})},z=c.p+"static/media/Headshot.7b8f33ec.png",J=c(51);var Q=function(e){return Object(a.jsx)(J.a,{src:z,roundedCircle:!0})},U=c(55),G=c(28);var q=function(e){return Object(a.jsx)(U.a,{style:{width:"18rem"},children:Object(a.jsxs)(G.a,{variant:"flush",children:[Object(a.jsx)(G.a.Item,{children:Object(a.jsx)("a",{href:"mailto:sarahl.cox.22@gmail.com",target:"_blank",children:"sarahl.cox.22@gmail.com"})}),Object(a.jsx)(G.a.Item,{children:Object(a.jsx)("a",{href:"https://linkedin.com/in/sarahlcox22",target:"_blank",children:"LinkedIn"})}),Object(a.jsx)(G.a.Item,{children:Object(a.jsx)("a",{href:"https://github.com/sarahlcox",target:"_blank",children:"GitHub"})}),Object(a.jsx)(G.a.Item,{children:Object(a.jsx)("a",{href:"https://www.facebook.com/FeatherPrintPhoto",target:"_blank",children:"Facebook"})}),Object(a.jsx)(G.a.Item,{children:Object(a.jsx)("a",{href:"https://featherprintphotography.com/",target:"_blank",children:"My Website"})})]})})};var K=function(e){return Object(a.jsxs)(x.a,{fluid:!0,children:[Object(a.jsx)(k,{title:e.title}),Object(a.jsx)(_,{children:Object(a.jsxs)(O.a,{children:[Object(a.jsx)(O.a,{children:Object(a.jsx)(x.a,{className:"pic-container",children:Object(a.jsx)(Q,{})})}),Object(a.jsx)(O.a,{children:Object(a.jsx)(x.a,{children:Object(a.jsx)(q,{})})})]})})]})},R=function(e){Object(b.a)(c,e);var t=Object(o.a)(c);function c(e){var a;return Object(l.a)(this,c),(a=t.call(this,e)).state={title:"Sarah Cox-Barkley",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Projects",path:"/projects"},{title:"Contact",path:"/contact"}],home:{title:"Hi! I'm Sarah!",subTitle:"",text:""},about:{title:"About Me"},projects:{title:"Projects"},contact:{title:"Let's Connect!"}},a}return Object(j.a)(c,[{key:"render",value:function(){var e=this;return Object(a.jsx)(d.a,{children:Object(a.jsxs)(x.a,{className:"p-0",fluid:!0,children:[Object(a.jsxs)(u.a,{className:"border-bottom",bg:"transparent",expand:"lg",children:[Object(a.jsx)(u.a.Brand,{children:"Sarah Cox-Barkley"}),Object(a.jsx)(u.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),Object(a.jsx)(u.a.Collapse,{id:"navbar-toggle",children:Object(a.jsxs)(m.a,{className:"ml-auto",children:[Object(a.jsx)(d.b,{className:"nav-link",to:"/",children:"Home"}),Object(a.jsx)(d.b,{className:"nav-link",to:"/about",children:"About"}),Object(a.jsx)(d.b,{className:"nav-link",to:"/projects",children:"Projects"}),Object(a.jsx)(d.b,{className:"nav-link",to:"/contact",children:"Contact"})]})})]}),Object(a.jsx)(h.a,{path:"/",exact:!0,render:function(){return Object(a.jsx)(P,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),Object(a.jsx)(h.a,{path:"/sarah-cox-barkley-portfolio",exact:!0,render:function(){return Object(a.jsx)(P,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),Object(a.jsx)(h.a,{path:"/about",render:function(){return Object(a.jsx)(F,{title:e.state.about.title})}}),Object(a.jsx)(h.a,{path:"/projects",render:function(){return Object(a.jsx)(M,{title:e.state.projects.title})}}),Object(a.jsx)(h.a,{path:"/contact",render:function(){return Object(a.jsx)(K,{title:e.state.contact.title})}}),Object(a.jsx)(f,{})]})})}}]),c}(s.a.Component),X=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,76)).then((function(t){var c=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,n=t.getTTFB;c(e),a(e),i(e),s(e),n(e)}))};c(73);r.a.render(Object(a.jsx)(R,{}),document.getElementById("root")),X()}},[[74,1,2]]]);
//# sourceMappingURL=main.9f7d9a4d.chunk.js.map