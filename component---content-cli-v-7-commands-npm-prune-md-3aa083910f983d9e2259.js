(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{"9o5h":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return m}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),o=n("O6H6"),i={},r={_frontmatter:i},c=o.a;function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm prune [[<@scope>/]<pkg>...] [--production] [--dry-run] [--json]\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,'This command removes "extraneous" packages.  If a package name is provided,\nthen only packages matching one of the supplied names are removed.'),Object(l.b)("p",null,"Extraneous packages are those present in the ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," folder that are\nnot listed as any package's dependency list."),Object(l.b)("p",null,"If the ",Object(l.b)("inlineCode",{parentName:"p"},"--production")," flag is specified or the ",Object(l.b)("inlineCode",{parentName:"p"},"NODE_ENV")," environment\nvariable is set to ",Object(l.b)("inlineCode",{parentName:"p"},"production"),", this command will remove the packages\nspecified in your ",Object(l.b)("inlineCode",{parentName:"p"},"devDependencies"),". Setting ",Object(l.b)("inlineCode",{parentName:"p"},"--no-production")," will negate\n",Object(l.b)("inlineCode",{parentName:"p"},"NODE_ENV")," being set to ",Object(l.b)("inlineCode",{parentName:"p"},"production"),"."),Object(l.b)("p",null,"If the ",Object(l.b)("inlineCode",{parentName:"p"},"--dry-run")," flag is used then no changes will actually be made."),Object(l.b)("p",null,"If the ",Object(l.b)("inlineCode",{parentName:"p"},"--json")," flag is used, then the changes ",Object(l.b)("inlineCode",{parentName:"p"},"npm prune")," made (or would\nhave made with ",Object(l.b)("inlineCode",{parentName:"p"},"--dry-run"),") are printed as a JSON object."),Object(l.b)("p",null,"In normal operation, extraneous modules are pruned automatically, so you'll\nonly need this command with the ",Object(l.b)("inlineCode",{parentName:"p"},"--production"),' flag.  However, in the real\nworld, operation is not always "normal".  When crashes or mistakes happen,\nthis command can help clean up any resulting garbage.'),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-uninstall"},"npm uninstall")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/configuring-npm/folders"},"npm folders")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-ls"},"npm ls"))))}m.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),o=n("aOgs"),i=n("q1tI"),r=n.n(i),c=n("7ljp"),m=n("pD55"),p=n("8Aig"),s=n("ReZb"),u=n("GCVy"),d=n("+6vE");var b=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},f=n("gnlW"),g=n("mwnC"),y=n("/Rw0"),O=n("dVM4"),E=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function j(e){var t=e.items,n=e.depth;return r.a.createElement(E,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(j,{items:e.items,depth:n+1}):null)})))}j.defaultProps={depth:0};var v=j,w=n("MfeC");function C(e){var t=w.a.getPath(e.location.pathname),n=w.a.getVariantAndPage(e.root,t);if(!n)return null;var a=w.a.getVariantsForPage(e.root,n.page),o=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),o.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,i.variant.title),r.a.createElement(C.Menu,{direction:e.direction,width:e.menuWidth},o)))}C.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var N=C,k=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),D=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,E=i.title,j=i.description,C=i.status,H=i.source,z=i.additionalContributors,W=void 0===z?[]:z,G=w.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:s.a,Note:u.a,Prompt:b,PromptReply:h,Screenshot:f.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(m.a,{title:E,description:j}),r.a.createElement(p.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(k,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(g.a,{editOnGitHub:n.themeOptions.editOnGitHub,location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},E),j))),null!=G?r.a.createElement(I,null,r.a.createElement(N,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:G,location:a})):null),n.tableOfContents.items?r.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(v,{items:n.tableOfContents.items})):null,r.a.createElement(D,null,C||H?r.a.createElement(l.k,{mb:3,alignItems:"center"},C?r.a.createElement(O.a,{status:C}):null,r.a.createElement(l.e,{mx:"auto"}),H?r.a.createElement(y.a,{href:H}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:o.b,mr:2}):r.a.createElement(l.r,{icon:o.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(v,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(d.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(W.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-cli-v-7-commands-npm-prune-md-3aa083910f983d9e2259.js.map