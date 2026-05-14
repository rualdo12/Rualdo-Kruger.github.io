import{B as c,j as s,t as d,E as m}from"./main-1oJXdVT6.js";const h=c.whatsapp,n=e=>{const t=encodeURIComponent(String(e||"").trim());return`https://wa.me/${h}?text=${t}`},o={service:(e,t)=>n(`Hi Rualdo. I am interested in the *${e}* offer (${t}).

Can you share next steps and what it is best suited for?`),audit:()=>n(`Hi Rualdo. I would like to request a *Mining Opportunity Snapshot*.

Company: [paste company]
Website: [paste website]
Main service: [paste service]
Target region/commodity: [paste target]`),auditLead:({name:e,email:t,linkedin:i,challenge:r})=>n(`Mining Opportunity Snapshot Request
Name: ${e}
Email: ${t}
LinkedIn: ${i||"N/A"}
Main challenge: ${r||"N/A"}`),retainer:()=>n(`Hi Rualdo. I am interested in the *Qualified Mining Opportunity System*.

I would like to discuss a structured opportunity pipeline for our technical firm.`),general:()=>n("Hi Rualdo. I found SHOCKWAVE Systems and want to discuss mining opportunity intelligence for our technical firm."),portfolio:e=>n(`Hi Rualdo. I saw your work on *${e}* and I am interested in improving our commercial visibility in the mining sector.`)},f=({intent:e="general",label:t,serviceName:i,servicePrice:r,className:p="",source:l="unknown"})=>{const a={audit:o.audit(),retainer:o.retainer(),general:o.general(),service:o.service(i||"Service",r||"Custom"),portfolio:o.portfolio(i||"your portfolio project")},u=a[e]||a.general;return s.jsx("a",{href:u,target:"_blank",rel:"noopener noreferrer",className:p||"inline-flex items-center gap-2 rounded-md bg-[#25D366] px-5 py-3 font-bold text-white hover:brightness-110 transition",onClick:()=>{d(m.WHATSAPP_CLICK,{source_page:l,cta_label:t||"Chat on WhatsApp",intent:e,service:i||"",price:r||""})},children:s.jsx("span",{children:t||"Chat on WhatsApp"})})};export{f as W};
