(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"6Gk8":function(t,e,n){"use strict";var a=n("q1tI"),r=n.n(a),o=(n("tb+u"),n("GevN"),n("tmc/")),i=n.n(o),l=n("p3AD");var c=function(t){var e,n;function a(){return t.apply(this,arguments)||this}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this.props.children;return r.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(2.5)}},r.a.createElement("img",{src:i.a,alt:"Antoine Caron",style:{marginRight:Object(l.a)(.5),marginBottom:0,width:Object(l.a)(2),height:Object(l.a)(2)}}),t)},a}(r.a.Component);e.a=c},"6zF5":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n("q1tI"),r=n.n(a),o=n("WAGf"),i=function(t){var e=t.posts,n=void 0===e?[]:e,a=t.siteUrl;return r.a.createElement(o.a,{content:{"@context":"https://schema.org","@type":"ItemList",itemListElement:n.map((function(t,e){return{"@type":"ListItem",position:e+1,url:""+a+t.node.fields.slug}}))}})}},GH6y:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi");var a=n("q1tI"),r=n.n(a),o=n("vOnD"),i=n("Wbzz"),l=o.a.footer.withConfig({displayName:"socials__Footer",componentId:"sc-932uha-0"})(["display:flex;justify-content:space-between;margin-top:4rem;"]),c={Github:"https://github.com/Slashgear",Twitter:"https://twitter.com/Slashgear_",LinkedIn:"https://www.linkedin.com/in/antoine-caron-7089788a",DevTo:"https://dev.to/slashgear_",Medium:"https://medium.com/@Slashgear_"},s=function(){return r.a.createElement(l,null,r.a.createElement("div",null,Object.keys(c).map((function(t){return r.a.createElement("a",{key:t,href:c[t]},t)})).reduce((function(t,e){return[t," • ",e]}))),r.a.createElement("div",null,r.a.createElement(i.Link,{to:"/rss.xml"},"RSS")))}},TshS:function(t,e,n){"use strict";n.r(e),n.d(e,"blogIndexFragment",(function(){return E}));var a=n("q1tI"),r=n.n(a),o=n("Wbzz"),i=n("mwIZ"),l=n.n(i),c=n("TJpk"),s=n.n(c),m=n("9eSz"),p=n.n(m),u=n("6Gk8"),d=n("Bl7J"),f=n("p3AD"),h=n("GH6y"),g=n("6zF5");var y=function(t){var e,n;function a(){return t.apply(this,arguments)||this}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this,e=l()(this,"props.data.config"),n=l()(this,"props.data.allMarkdownRemark.edges"),a=l()(e,"frontmatter.title"),i=l()(e,"frontmatter.description"),c=l()(e,"html");return r.a.createElement(d.a,{location:this.props.location,config:e},r.a.createElement(s.a,{htmlAttributes:{lang:this.props.pageContext.language},meta:[{name:"description",content:i}],title:a}),r.a.createElement(g.a,{posts:n,siteUrl:this.props.data.site.siteMetadata.siteUrl}),r.a.createElement(u.a,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}})),n.map((function(e){var n=e.node,a=l()(n,"frontmatter.title")||n.fields.slug;return r.a.createElement("div",{key:n.fields.slug},r.a.createElement("h3",{style:{marginBottom:Object(f.a)(1/4)}},r.a.createElement(o.Link,{style:{boxShadow:"none"},to:n.fields.slug},a)),r.a.createElement("small",null,r.a.createElement("time",{dateTime:n.frontmatter.dateJson},n.frontmatter.date)),r.a.createElement("small",{style:{margin:"0 1rem"}},r.a.createElement("span",{role:"img","aria-label":"Time to read"},"🕐"),n.timeToRead," min"),r.a.createElement("small",null,(n.frontmatter.tags||[]).map((function(e){return r.a.createElement(o.Link,{style:{marginRight:"0.5rem"},key:e,to:"/"+t.props.pageContext.language+"/"+e},"#",e)}))),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:n.excerpt}}),n.frontmatter.hero&&r.a.createElement(p.a,{fluid:n.frontmatter.hero.childImageSharp.fluid,alt:n.frontmatter.title}))})),r.a.createElement(h.a,null))},a}(r.a.Component);e.default=y;var E="54727924"},"tmc/":function(t,e,n){t.exports=n.p+"static/profile-pic-6015f9a66916f3d0b4678826cc46ec6c.jpg"}}]);
//# sourceMappingURL=component---src-templates-blog-index-js-b0ab8e9d1837f64d24ea.js.map