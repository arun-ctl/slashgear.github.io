(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"65Gh":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Antoine Caron","description":"Antoine Caron personal blog where you can read news about his open-source courses, packages.","social":{"twitter":"Slashgear_"},"siteUrl":"https://slashgear.github.io"}}}}')},T1Gm:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":"https://github.com/Slashgear/slashgear.github.io"}}}}')},YycZ:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"fields":{"slug":"/"},"frontmatter":{"language":"en","language_label":"English","language_option":"Post available in"}}},{"node":{"fields":{"slug":"/fr/"},"frontmatter":{"language":"fr","language_label":"Français","language_option":"Article disponible en"}}}]}}}')},yZlL:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return T})),n.d(t,"pageQuery",(function(){return L}));n("E5k/");var a=n("q1tI"),r=n.n(a),o=n("Wbzz"),i=n("mwIZ"),l=n.n(i),s=n("9eSz"),m=n.n(s),c=n("vOnD"),g=n("6Gk8"),d=n("Bl7J"),u=n("p3AD"),f=c.a.aside.withConfig({displayName:"tableOfContents__Aside",componentId:"sc-1id9l7o-0"})(["display:none;width:400px;nav{margin-left:0.5rem;}ul{list-style:none;}li{margin-bottom:0.5rem;overflow:hidden;white-space:nowrap;,wordwrap:normal;text-overflow:ellipsis;}li > ul{margin-top:0;margin-left:1rem;}a{color:currentColor;box-shadow:none;}a:hover{box-shadow:0 1px 0 0 currentColor;}@media screen and (min-width:1500px){&{display:block;position:fixed;top:7rem;right:2rem;font-size:0.8rem;}}"]),p=c.a.header.withConfig({displayName:"tableOfContents__Heading",componentId:"sc-1id9l7o-1"})(["margin-bottom:0.8rem;font-weight:bold;font-size:1.1rem;"]),h=function(e){var t=e.tableOfContents;return r.a.createElement(f,null,r.a.createElement(p,null,"Table of content"),r.a.createElement("nav",{dangerouslySetInnerHTML:{__html:t}}))},b=(n("pJf4"),n("q8oJ"),n("8npG"),n("YbXK"),n("cFtU"),n("rzGZ"),n("m210"),n("4DPX"),n("65Gh")),y=n("TJpk"),w=n.n(y),v=n("YycZ"),E=function(){return v.data};function _(e){return function(e){if(Array.isArray(e))return k(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var x=function(e){var t=e.description,n=e.lang,a=e.meta,o=e.title,i=e.image,l=e.translations,s=e.slug,m=b.data.site,c=E().allMarkdownRemark.edges.reduce((function(e,t){var n=t.node;return e[n.frontmatter.language]=n.fields.slug,e}),{}),g=t||m.siteMetadata.description,d=[],u=[];if(i&&(d=[{property:"og:image",content:m.siteMetadata.siteUrl+i.src},{name:"twitter:image",content:m.siteMetadata.siteUrl+i.src}]),l){for(var f=0;f<l.length;f+=2)u.push({rel:"alternate",hreflang:l[f],href:""+c[l[f]]+l[f+1]});u.push({rel:"alternate",hreflang:n,href:""+s})}return r.a.createElement(w.a,{htmlAttributes:{lang:n},title:o,link:u,titleTemplate:"%s | "+m.siteMetadata.title,meta:[{name:"description",content:g},{property:"og:title",content:o},{property:"og:description",content:g},{property:"og:type",content:"website"},{property:"og:locale",content:n},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:m.siteMetadata.social.twitter},{name:"twitter:title",content:o},{name:"twitter:description",content:g}].concat(_(d),[{name:"google-site-verification",content:"h1uQ_z8fdlLI60AmxP8vjy1H-bKSDlv0n5XolWfeDIo"}]).concat(a)})};x.defaultProps={lang:"en",meta:[],description:""};var C=x,S=(n("zTTH"),n("v9g0"),c.a.div.withConfig({displayName:"availableLanguages__Container",componentId:"lioydm-0"})(["padding:1rem;margin:2rem 0;font-weight:bold;background-color:hsla(268,53%,51%,30%);border-radius:0.75rem;border:solid hsla(268,53%,51%) 1px;"])),I=function(e){var t=e.language,n=e.translations,a=E(),i=a.allMarkdownRemark.edges.find((function(e){return e.node.frontmatter.language==t})).node.frontmatter.language_option;return n?r.a.createElement(S,null,i,":"," ",a.allMarkdownRemark.edges.map((function(e){var a=e.node;if(a.frontmatter.language!=t){var i=a.fields.slug;if(n){var l=n.findIndex((function(e){return e==a.frontmatter.language}));-1!==l&&(i+=n[l+1])}return r.a.createElement(o.Link,{key:i,style:{boxShadow:"none",textDecoration:"none"},to:i,hrefLang:a.frontmatter.language},a.frontmatter.language_label)}}))):null},O=n("T1Gm"),M=c.a.div.withConfig({displayName:"editOnGithub__Wrapper",componentId:"sc-1ubqci3-0"})(["margin-bottom:1rem;"]),A=function(e){var t=e.slug,n=O.data.site.siteMetadata.repository;return r.a.createElement(M,null,r.a.createElement("a",{href:n+"/edit/source/src/pages"+t+"index.md",target:"_blank"},"Edit this page on Github"))},j=c.a.div.withConfig({displayName:"blog-post__PostContent",componentId:"hrojot-0"})(["margin-top:2rem;"]);function T(e){var t=e.data,n=e.pageContext,a=n.previous,i=n.next,s=n.slug,c=e.location,f=t.markdownRemark,p=(l()(t,"config.frontmatter.title"),l()(t,"config.frontmatter.language")),b=l()(t,"config.html");f.excerpt;return r.a.createElement(d.a,{location:c,config:t.config,translations:f.frontmatter.translations},r.a.createElement(C,{title:f.frontmatter.title,description:f.frontmatter.description||f.excerpt,lang:f.frontmatter.language,translations:f.frontmatter.translations,image:f.frontmatter.hero?f.frontmatter.hero.childImageSharp.image:null,slug:s}),r.a.createElement("h1",{style:{color:"var(--header)"}},f.frontmatter.title),f.headings.length>1&&r.a.createElement(h,{tableOfContents:f.tableOfContents}),r.a.createElement("p",{style:Object.assign({},Object(u.b)(-.2),{display:"block",marginBottom:Object(u.a)(1),marginTop:Object(u.a)(-1)})},f.frontmatter.date),r.a.createElement(I,{language:p,translations:f.frontmatter.translations}),f.frontmatter.hero&&r.a.createElement(m.a,{fluid:f.frontmatter.hero.childImageSharp.fluid,alt:f.frontmatter.title}),r.a.createElement(j,{dangerouslySetInnerHTML:{__html:f.html}}),r.a.createElement(A,{slug:s}),r.a.createElement("hr",{style:{marginBottom:Object(u.a)(1)}}),r.a.createElement(g.a,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:b}})),r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,a&&r.a.createElement(o.Link,{to:a.fields.slug,rel:"prev"},"← ",a.frontmatter.title)),r.a.createElement("li",null,i&&r.a.createElement(o.Link,{to:i.fields.slug,rel:"next"},i.frontmatter.title," →"))))}var L="2591066889"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-19eaf620c76797dff9a1.js.map