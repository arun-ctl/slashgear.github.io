(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{TshS:function(e,t,n){"use strict";n.r(t),n.d(t,"blogIndexFragment",(function(){return b}));var a=n("q1tI"),r=n.n(a),o=n("Wbzz"),l=n("mwIZ"),i=n.n(l),s=n("TJpk"),m=n.n(s),c=n("9eSz"),p=n.n(c),u=n("6Gk8"),d=n("Bl7J"),h=n("p3AD"),f=(n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("vOnD").a.footer.withConfig({displayName:"socials__Footer",componentId:"sc-932uha-0"})(["display:flex;justify-content:space-between;margin-top:4rem;"])),g={Github:"https://github.com/Slashgear",Twitter:"https://twitter.com/Slashgear_",LinkedIn:"https://www.linkedin.com/in/antoine-caron-7089788a",DevTo:"https://dev.to/slashgear_",Medium:"https://medium.com/@Slashgear_"},E=function(){return r.a.createElement(f,null,r.a.createElement("div",null,Object.keys(g).map((function(e){return r.a.createElement("a",{key:e,href:g[e]},e)})).reduce((function(e,t){return[e," • ",t]}))),r.a.createElement("div",null,r.a.createElement(o.Link,{to:"/rss.xml"},"RSS")))},y=n("WAGf"),w=function(e){var t=e.posts,n=void 0===t?[]:t,a=e.siteUrl;return r.a.createElement(y.a,{content:{"@context":"https://schema.org","@type":"ItemList",itemListElement:n.map((function(e,t){return{"@type":"ListItem",position:t+1,url:""+a+e.node.fields.slug}}))}})};var v=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=i()(this,"props.data.config"),t=i()(this,"props.data.allMarkdownRemark.edges"),n=i()(e,"frontmatter.title"),a=i()(e,"frontmatter.description"),l=i()(e,"html");return r.a.createElement(d.a,{location:this.props.location,config:e},r.a.createElement(m.a,{htmlAttributes:{lang:this.props.pageContext.language},meta:[{name:"description",content:a}],title:n}),r.a.createElement(w,{posts:t,siteUrl:this.props.data.site.siteMetadata.siteUrl}),r.a.createElement(u.a,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:l}})),t.map((function(e){var t=e.node,n=i()(t,"frontmatter.title")||t.fields.slug;return r.a.createElement("div",{key:t.fields.slug},r.a.createElement("h3",{style:{marginBottom:Object(h.a)(1/4)}},r.a.createElement(o.Link,{style:{boxShadow:"none"},to:t.fields.slug},n)),r.a.createElement("small",null,r.a.createElement("time",{dateTime:t.frontmatter.dateJson},t.frontmatter.date)),r.a.createElement("small",{style:{margin:"0 1rem"}},r.a.createElement("span",{role:"img","aria-label":"Time to read"},"🕐"),t.timeToRead," min"),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}),t.frontmatter.hero&&r.a.createElement(p.a,{fluid:t.frontmatter.hero.childImageSharp.fluid,alt:t.frontmatter.title}))})),r.a.createElement(E,null))},a}(r.a.Component),b=(t.default=v,"2716030274")}}]);
//# sourceMappingURL=component---src-templates-blog-index-js-eb4f87c00480490e7afe.js.map