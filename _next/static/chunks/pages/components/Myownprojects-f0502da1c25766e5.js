(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[144],{4556:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Myownprojects",function(){return r(7426)}])},7426:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var c=r(5893),a=r(7294),n=r(682),s=r(8182),i=r(9491),o=r.n(i),d=r(1664),l=r.n(d),m=r(5675),p=r.n(m);function u(e){let{projects:t}=e,[r,i]=(0,a.useState)(!1);return(0,c.jsxs)(n.Z,{className:"py-2",id:"github-projects",children:[(0,c.jsx)("h1",{className:"mb-5",children:"My Github projects"}),(0,c.jsx)("div",{className:"".concat(o().gridp),children:t&&t.map(e=>(0,c.jsx)(l(),{href:e.url,target:"_blank",children:(0,c.jsx)("div",{className:o().itemp,children:(0,c.jsxs)(s.Z,{mb:4,className:o().projectcard,onClick:()=>i("modal-".concat(e.id)),children:[(0,c.jsxs)("div",{className:o().imagecontent,children:[(0,c.jsx)(s.Z.Img,{variant:"top",src:e.image}),(0,c.jsx)(p(),{src:"/assets/icons/".concat(e.technology,".svg"),alt:e.technology,width:50,height:50,className:o().icon,priority:!0})]}),(0,c.jsxs)(s.Z.Body,{children:[(0,c.jsx)(s.Z.Title,{className:o().titlecard,children:e.title}),(0,c.jsx)(s.Z.Text,{children:e.description})]})]})})},e.id))})]})}},9491:function(e){e.exports={gridp:"projects_gridp__ztYEL",itemp:"projects_itemp__XT6HS",titlecard:"projects_titlecard__07q4M",seebutton:"projects_seebutton__CEnc9",btneye:"projects_btneye___tPKT",projectcard:"projects_projectcard__XKM8K",imagecontent:"projects_imagecontent__Q12KL",icon:"projects_icon__Vmm_H"}},8182:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var c=r(4184),a=r.n(c),n=r(7294),s=r(6792),i=r(6611),o=r(9602),d=r(5893);let l=n.forwardRef(({bsPrefix:e,className:t,variant:r,as:c="img",...n},i)=>{let o=(0,s.vE)(e,"card-img");return(0,d.jsx)(c,{ref:i,className:a()(r?`${o}-${r}`:o,t),...n})});l.displayName="CardImg";var m=r(9059);let p=n.forwardRef(({bsPrefix:e,className:t,as:r="div",...c},i)=>{let o=(0,s.vE)(e,"card-header"),l=(0,n.useMemo)(()=>({cardHeaderBsPrefix:o}),[o]);return(0,d.jsx)(m.Z.Provider,{value:l,children:(0,d.jsx)(r,{ref:i,...c,className:a()(t,o)})})});p.displayName="CardHeader";let u=(0,o.Z)("h5"),_=(0,o.Z)("h6"),j=(0,i.Z)("card-body"),h=(0,i.Z)("card-title",{Component:u}),f=(0,i.Z)("card-subtitle",{Component:_}),x=(0,i.Z)("card-link",{Component:"a"}),g=(0,i.Z)("card-text",{Component:"p"}),N=(0,i.Z)("card-footer"),v=(0,i.Z)("card-img-overlay"),b=n.forwardRef(({bsPrefix:e,className:t,bg:r,text:c,border:n,body:i,children:o,as:l="div",...m},p)=>{let u=(0,s.vE)(e,"card");return(0,d.jsx)(l,{ref:p,...m,className:a()(t,u,r&&`bg-${r}`,c&&`text-${c}`,n&&`border-${n}`),children:i?(0,d.jsx)(j,{children:o}):o})});b.displayName="Card",b.defaultProps={body:!1};var y=Object.assign(b,{Img:l,Title:h,Subtitle:f,Body:j,Link:x,Text:g,Header:p,Footer:N,ImgOverlay:v})},9059:function(e,t,r){"use strict";var c=r(7294);let a=c.createContext(null);a.displayName="CardHeaderContext",t.Z=a}},function(e){e.O(0,[925,664,774,888,179],function(){return e(e.s=4556)}),_N_E=e.O()}]);