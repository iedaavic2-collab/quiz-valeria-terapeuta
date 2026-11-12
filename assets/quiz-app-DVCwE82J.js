const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/quiz-router-CFCr3cnj.js","assets/jsx-runtime-C27Mmbu5.js","assets/screens-IwFTnqNA.js","assets/index-CyPfMg6f.js","assets/quiz-tracking-CPPmEs6j.js","assets/lead-scoring-Di_9JRce.js","assets/quiz-router-v2-BlA40mNr.js","assets/quiz-router-gratis-curto-BZWA6Rbs.js","assets/quiz-router-pago-curto-DTkvdNuV.js","assets/quiz-router-profissao-Bwi5pdjm.js"])))=>i.map(i=>d[i]);
import{a as e,n as t,t as n}from"./jsx-runtime-C27Mmbu5.js";import{a as r,c as i,l as a,o,r as s}from"./quiz-tracking-CPPmEs6j.js";import{C as c,T as l}from"./index-CyPfMg6f.js";var u=e(t(),1),d=n(),f={default:[],27:[],37:[],47:[],v2:[],cor:[],direto:[],"direto-oferta":[],"pago-curto":[],"direto-19":[],profissao:[],gratis:[37],"gratis-curto":[]},p={"gratis-curto":15,profissao:36},m=(0,u.createContext)(null);function h(e){return e===`v2`||e===`gratis-curto`||e===`profissao`?{variante:e}:{}}function g(e){return p[e]??40}function _({children:e,variant:t=`default`}){let[n,s]=(0,u.useState)(1),[c,l]=(0,u.useState)({diag:{},voc:{}}),p=(0,u.useRef)(new Set);(0,u.useEffect)(()=>{a(),i(),o()},[]),(0,u.useEffect)(()=>{typeof window<`u`&&window.scrollTo({top:0,left:0,behavior:`auto`}),p.current.has(n)||(p.current.add(n),r(n,`view`,h(t)))},[n,t]);let _=(0,u.useMemo)(()=>({step:n,total:g(t),variant:t,next:()=>s(e=>{r(e,`next`,h(t));let n=g(t),i=f[t],a=Math.min(n,e+1);for(;i.includes(a)&&a<n;)a+=1;return a}),back:()=>s(e=>{r(e,`back`,h(t));let n=f[t],i=Math.max(1,e-1);for(;n.includes(i)&&i>1;)--i;return i}),goTo:e=>s(e),answers:c,set:e=>l(t=>({...t,...e})),setDiag:(e,t)=>l(n=>({...n,diag:{...n.diag,[e]:t}})),setVoc:(e,t)=>l(n=>({...n,voc:{...n.voc,[e]:t}}))}),[n,c,t]);return(0,d.jsx)(m.Provider,{value:_,children:e})}function v(){let e=(0,u.useContext)(m);if(!e)throw Error(`useQuiz must be used within QuizProvider`);return e}function y(){let{next:e}=v();return(0,u.useEffect)(()=>{let e=(window.requestIdleCallback??(e=>window.setTimeout(e,200)))(()=>{l(()=>import(`./quiz-router-CFCr3cnj.js`),__vite__mapDeps([0,1,2,3,4,5]))});return()=>{let t=window.cancelIdleCallback??window.clearTimeout;try{t(e)}catch{}}},[]),(0,d.jsx)(`div`,{className:`min-h-screen bg-[var(--brand-bg-light)] text-[var(--brand-text)]`,children:(0,d.jsxs)(`div`,{className:`mx-auto w-full max-w-[460px] px-4 pb-6 pt-4`,children:[(0,d.jsx)(`div`,{className:`overflow-hidden rounded-2xl shadow-lg ring-1 ring-[var(--brand-card-line)]`,children:(0,d.jsx)(`img`,{src:c.src,srcSet:c.srcSet,sizes:c.sizes,alt:`Diagnóstico das 5 Feridas Emocionais`,className:`block w-full object-cover`,width:1536,height:1024,fetchPriority:`high`,decoding:`async`,loading:`eager`})}),(0,d.jsx)(`div`,{className:`mt-5 text-center`,children:(0,d.jsx)(`span`,{className:`inline-block rounded-full bg-[var(--brand-navy)]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--brand-navy)]`,children:`Diagnóstico Gratuito · 2 Minutos`})}),(0,d.jsxs)(`div`,{className:`mt-2 flex items-center justify-center gap-1.5 text-[12px] text-[var(--brand-text)]/90`,children:[(0,d.jsx)(`span`,{className:`text-amber-400`,children:`★★★★★`}),(0,d.jsx)(`span`,{children:`4.9 · +20.000 mulheres já fizeram esse diagnóstico`})]}),(0,d.jsxs)(`h1`,{className:`mt-4 text-center text-[24px] font-extrabold leading-[1.6] tracking-tight text-[var(--brand-navy-2)] sm:text-[28px]`,children:[`Qual das 5`,` `,(0,d.jsx)(`span`,{style:{textDecoration:`underline`,textDecorationColor:`var(--brand-navy)`,textDecorationThickness:`3px`,textUnderlineOffset:`4px`},children:`feridas emocionais`}),` `,`ainda está no comando da sua vida?`]}),(0,d.jsx)(`p`,{className:`mt-3 text-center text-[15px] leading-snug text-[var(--brand-text)]/95`,children:`Faça o diagnóstico gratuito e descubra em poucos minutos, e se essa ferida pode virar uma profissão de até R$ 10.000 por mês.`}),(0,d.jsxs)(`div`,{className:`mt-5`,children:[(0,d.jsx)(`button`,{onClick:e,onPointerEnter:()=>void l(()=>import(`./quiz-router-CFCr3cnj.js`),__vite__mapDeps([0,1,2,3,4,5])),className:`btn-yellow`,children:`Começar meu diagnóstico agora`}),(0,d.jsx)(`p`,{className:`mt-2 text-center text-[11px] text-[var(--brand-muted)]`,children:`Leva menos de 2 minutos • 100% confidencial`})]})]})})}var b=`/quiz-valeria-terapeuta/assets/abertura-homem-RgFRi-JC.webp`,x=`/quiz-valeria-terapeuta/assets/abertura-mulher-CeryH_il.webp`,S=`
.abertura{
  --vinho:#3a0a1c; --vinho-2:#4a1026; --vinho-3:#1e050e;
  --ouro:#d9a94e; --ouro-claro:#f2cf83; --ouro-escuro:#a87b2c;
  --tinta:#fff; --tinta-2:#e0c9cf; --tinta-3:#a98793;
  /* "Cormorant Abertura" e "Inter Abertura" sao as fontes desta tela cortadas
     nas letras dela, que o SERVIDOR poe no <head> (src/server.ts) — chegam
     com o HTML e a tela nao pula quando a fonte troca. Ficam fora do
     JavaScript de proposito: sao 50 KB que o celular nao precisa ler duas
     vezes. Ver scripts/fontes-abertura.mjs. */
  --serif:"Cormorant Garamond","Cormorant Abertura",Georgia,"Times New Roman",serif;
  position:fixed;inset:0;z-index:50;overflow-y:auto;-webkit-overflow-scrolling:touch;
  background:
    radial-gradient(120% 62% at 50% -6%, #5a1230 0%, rgba(90,18,48,0) 60%),
    radial-gradient(90% 50% at 50% 104%, #3d0a1f 0%, rgba(61,10,31,0) 62%),
    linear-gradient(180deg,#3a0a1c 0%,#1e050e 100%);
  color:var(--tinta);text-align:center;
  font-family:"Inter Abertura",Inter,-apple-system,BlinkMacSystemFont,system-ui,sans-serif;
}
.abertura *{box-sizing:border-box;margin:0;padding:0}
.abertura .ab-topo{
  position:sticky;top:0;z-index:2;
  background:linear-gradient(180deg,#2a0713 0%,#2a0713 82%,rgba(42,7,19,.94) 100%);
  border-bottom:1px solid rgba(255,255,255,.06);text-align:left;
}
.abertura .ab-faixa{display:flex;align-items:center;gap:9px;padding:11px 16px 10px}
.abertura .ab-marca{font-family:var(--serif);font-size:18px;font-weight:700;color:var(--tinta)}
.abertura .ab-marca b{color:var(--ouro);font-weight:700}
.abertura .ab-prog{height:3px;background:rgba(255,255,255,.07)}
.abertura .ab-prog i{display:block;height:100%;width:2.6%;border-radius:0 3px 3px 0;
  background:linear-gradient(90deg,var(--ouro-escuro),var(--ouro-claro))}
.abertura .ab-miolo{max-width:460px;margin:0 auto;padding:clamp(8px,1.8vh,18px) 20px clamp(12px,2.4vh,26px)}
.abertura .ab-medalhao{margin:0 auto clamp(6px,1.4vh,13px);width:clamp(40px,7vh,62px);height:clamp(40px,7vh,62px);position:relative}
.abertura .ab-medalhao svg{width:100%;height:100%;display:block}
.abertura .ab-medalhao::after{content:"";position:absolute;inset:-12px;border-radius:50%;pointer-events:none;
  background:radial-gradient(circle,rgba(217,169,78,.22) 0%,rgba(217,169,78,0) 68%)}
.abertura .ab-sobre{font-size:10.5px;font-weight:700;letter-spacing:.13em;text-transform:uppercase;
  color:var(--tinta-3);margin-bottom:clamp(5px,1.2vh,11px)}
.abertura .ab-sobre b{color:var(--ouro);font-weight:700}
.abertura .ab-titulo{font-family:var(--serif);font-size:clamp(24px,4.4vh,31px);line-height:1.12;font-weight:700;
  letter-spacing:-.014em;text-wrap:balance;margin-bottom:clamp(6px,1.3vh,11px)}
.abertura .ab-titulo em{font-style:italic;font-weight:600;color:var(--ouro-claro)}
.abertura .ab-promessa{font-family:var(--serif);font-style:italic;font-weight:600;font-size:clamp(14.5px,2.5vh,17px);
  line-height:1.34;color:var(--tinta-2);max-width:19em;margin:0 auto clamp(6px,1.4vh,12px)}
.abertura .ab-promessa b{color:var(--ouro);font-weight:600;font-style:italic}
.abertura .ab-corpo{font-size:13.5px;line-height:1.55;color:var(--tinta-3);max-width:24em;margin:0 auto}
.abertura .ab-corpo strong{color:var(--tinta-2);font-weight:600}
.abertura .ab-fio{display:flex;align-items:center;justify-content:center;gap:12px;
  margin:clamp(8px,1.8vh,17px) auto clamp(7px,1.6vh,15px);max-width:200px}
.abertura .ab-fio span{flex:1;height:1px;background:linear-gradient(90deg,transparent,rgba(217,169,78,.26),transparent)}
.abertura .ab-fio i{width:5px;height:5px;transform:rotate(45deg);background:var(--ouro);border-radius:1px}
.abertura .ab-pergunta{font-family:var(--serif);font-size:clamp(19px,3.3vh,23px);font-weight:700;
  letter-spacing:-.005em;margin-bottom:clamp(7px,1.5vh,12px)}
.abertura .ab-opcoes{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.abertura .ab-opcao{-webkit-appearance:none;appearance:none;display:block;width:100%;padding:0;cursor:pointer;
  background:linear-gradient(180deg,#4d1128 0%,#2c0814 100%);
  border:1px solid rgba(255,255,255,.10);border-radius:16px;overflow:hidden;text-align:center;
  box-shadow:0 12px 26px -18px rgba(0,0,0,.9);
  transition:border-color .16s ease,transform .16s ease,box-shadow .16s ease}
.abertura .ab-opcao:hover,.abertura .ab-opcao:focus-visible{border-color:var(--ouro);transform:translateY(-2px);
  box-shadow:0 16px 30px -18px rgba(217,169,78,.45);outline:none}
/* A foto e o cartão viram a mesma coisa. Assar o degradê dentro do arquivo não
   funciona: ele fica no pé do 3:4 e some no corte quadrado. Aqui acompanha
   qualquer corte. */
.abertura .ab-moldura{position:relative;display:block}
.abertura .ab-moldura::after{display:none}
/* Corte QUADRADO ancorado no alto: com 3:4 aparece meio metro de parede clara
   atrás da pessoa e a foto vira um retângulo claro colado na tela. */
.abertura .ab-foto{display:block;width:100%;height:clamp(104px,21vh,168px);object-fit:cover;object-position:50% 10%}
.abertura .ab-rotulo{display:block;padding:2px 8px clamp(7px,1.4vh,12px);position:relative;
  font-family:var(--serif);font-size:clamp(15px,2.7vh,18px);font-weight:700;color:var(--tinta)}
.abertura .ab-rotulo::before{content:"";display:block;width:26px;height:2px;margin:0 auto clamp(5px,1.1vh,9px);border-radius:2px;
  background:linear-gradient(90deg,var(--ouro-escuro),var(--ouro-claro))}
.abertura .ab-rodape{margin-top:clamp(7px,1.5vh,13px);font-size:11.5px;color:var(--tinta-3)}
/* Abaixo de 620px de altura ÚTIL (iPhone SE e menores, ou qualquer aparelho
   com a barra do navegador aberta) o parágrafo de apoio sai. Ele repete o que
   a manchete e a promessa já dizem e custa três linhas — e três linhas são a
   diferença entre a pessoa ver os dois cards e ter que rolar. */
/* A faixa do meio (iPhone 13 mini e 14 com a barra aberta): o parágrafo ainda
   cabe, mas por 10-20px a linha de reasseguração ficava fora. Aperta o
   parágrafo em vez de escondê-lo — ele ainda tem trabalho a fazer aqui. */
@media (max-height:660px){
  .abertura .ab-corpo{font-size:12.5px;line-height:1.4;max-width:22em}
  .abertura .ab-titulo{font-size:clamp(23px,4.1vh,27px)}
  .abertura .ab-miolo{padding-bottom:4px}
}
@media (max-height:700px){
  .abertura .ab-corpo{font-size:12.5px;line-height:1.45}
  .abertura .ab-medalhao::after{display:none}
  .abertura .ab-miolo{padding-bottom:8px}
}
@media (max-height:620px){
  .abertura .ab-corpo{display:none}
  .abertura .ab-fio{margin:9px auto 8px}
}
@keyframes ab-pulsa{0%,100%{transform:scale(1)}14%{transform:scale(1.14)}28%{transform:scale(1)}42%{transform:scale(1.1)}70%{transform:scale(1)}}
.abertura .ab-medalhao svg path:first-of-type{transform-box:fill-box;transform-origin:50% 50%;animation:ab-pulsa 1.6s ease-in-out infinite}
@media (prefers-reduced-motion:reduce){.abertura .ab-opcao{transition:none}.abertura .ab-medalhao svg path:first-of-type{animation:none}}
`;function C(){let{next:e,set:t}=v();(0,u.useEffect)(()=>{let e=(window.requestIdleCallback??(e=>window.setTimeout(e,200)))(()=>{l(()=>import(`./quiz-router-CFCr3cnj.js`),__vite__mapDeps([0,1,2,3,4,5]))});return()=>{let t=window.cancelIdleCallback??window.clearTimeout;try{t(e)}catch{}}},[]);let n=n=>{window.__qgen=n,window.__qgenAplica&&window.__qgenAplica(),t({genero:n}),e()};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`style`,{dangerouslySetInnerHTML:{__html:S}}),(0,d.jsxs)(`div`,{className:`abertura`,children:[(0,d.jsxs)(`div`,{className:`ab-topo`,children:[(0,d.jsxs)(`div`,{className:`ab-faixa`,children:[(0,d.jsxs)(`svg`,{width:`26`,height:`26`,viewBox:`0 0 40 40`,fill:`none`,"aria-hidden":`true`,children:[(0,d.jsx)(`circle`,{cx:`20`,cy:`20`,r:`17`,stroke:`#d9a94e`,strokeWidth:`1.8`}),(0,d.jsx)(`path`,{d:`M20 27.5 C20 27.5 12.5 22.6 12.5 17.8 C12.5 15.2 14.5 13.4 16.8 13.4 C18.3 13.4 19.4 14.2 20 15.2 C20.6 14.2 21.7 13.4 23.2 13.4 C25.5 13.4 27.5 15.2 27.5 17.8 C27.5 22.6 20 27.5 20 27.5 Z`,fill:`none`,stroke:`#d9a94e`,strokeWidth:`1.7`,strokeLinejoin:`round`})]}),(0,d.jsxs)(`span`,{className:`ab-marca`,children:[`Curadas `,(0,d.jsx)(`b`,{children:`para Curar`})]})]}),(0,d.jsx)(`div`,{className:`ab-prog`,children:(0,d.jsx)(`i`,{})})]}),(0,d.jsxs)(`div`,{className:`ab-miolo`,children:[(0,d.jsx)(`div`,{className:`ab-medalhao`,children:(0,d.jsxs)(`svg`,{viewBox:`0 0 100 100`,fill:`none`,"aria-hidden":`true`,children:[(0,d.jsx)(`circle`,{cx:`50`,cy:`50`,r:`46`,stroke:`rgba(217,169,78,.32)`,strokeWidth:`1`}),(0,d.jsx)(`circle`,{cx:`50`,cy:`50`,r:`37`,stroke:`#d9a94e`,strokeWidth:`1.6`}),(0,d.jsx)(`path`,{d:`M50 70 C50 70 30 57 30 44 C30 37.2 35.2 32.4 41.2 32.4 C45.2 32.4 48.3 34.6 50 37.2 C51.7 34.6 54.8 32.4 58.8 32.4 C64.8 32.4 70 37.2 70 44 C70 57 50 70 50 70 Z`,fill:`none`,stroke:`#f2cf83`,strokeWidth:`2.2`,strokeLinejoin:`round`}),(0,d.jsx)(`path`,{d:`M38 24 L50 20 L62 24`,fill:`none`,stroke:`rgba(217,169,78,.6)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,d.jsx)(`path`,{d:`M38 78 L50 82 L62 78`,fill:`none`,stroke:`rgba(217,169,78,.6)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]})}),(0,d.jsxs)(`p`,{className:`ab-sobre`,children:[(0,d.jsx)(`b`,{children:`Curadas para Curar`}),` · com Valéria Tarso`]}),(0,d.jsxs)(`h1`,{className:`ab-titulo`,children:[`Existe uma `,(0,d.jsx)(`em`,{children:`ferida emocional`}),` decidindo por você. Descubra qual.`]}),(0,d.jsxs)(`p`,{className:`ab-promessa`,children:[`E veja se a sua história pode virar uma profissão de até `,(0,d.jsx)(`b`,{children:`R$ 10.000 por mês`}),`. Diagnóstico gratuito.`]}),(0,d.jsxs)(`div`,{className:`ab-fio`,children:[(0,d.jsx)(`span`,{}),(0,d.jsx)(`i`,{}),(0,d.jsx)(`span`,{})]}),(0,d.jsx)(`p`,{className:`ab-pergunta`,children:`Você é homem ou mulher?`}),(0,d.jsx)(`div`,{className:`ab-opcoes`,children:[{rotulo:`Homem`,foto:b},{rotulo:`Mulher`,foto:x}].map(e=>(0,d.jsxs)(`button`,{type:`button`,className:`ab-opcao`,onClick:()=>n(e.rotulo),onPointerEnter:()=>void l(()=>import(`./quiz-router-CFCr3cnj.js`),__vite__mapDeps([0,1,2,3,4,5])),children:[(0,d.jsx)(`span`,{className:`ab-moldura`,children:(0,d.jsx)(`img`,{className:`ab-foto`,src:e.foto,alt:e.rotulo,fetchPriority:`high`})}),(0,d.jsx)(`span`,{className:`ab-rotulo`,children:e.rotulo})]},e.rotulo))}),(0,d.jsx)(`p`,{className:`ab-rodape`,children:`Leva menos de 2 minutos • 100% confidencial`})]})]})]})}var w=(0,u.lazy)(()=>l(()=>import(`./quiz-router-CFCr3cnj.js`),__vite__mapDeps([0,1,2,3,4,5]))),T=(0,u.lazy)(()=>l(()=>import(`./quiz-router-v2-BlA40mNr.js`),__vite__mapDeps([6,1,2,3,4,5]))),E=(0,u.lazy)(()=>l(()=>import(`./quiz-router-gratis-curto-BZWA6Rbs.js`),__vite__mapDeps([7,1,3,2,4,5]))),D=(0,u.lazy)(()=>l(()=>import(`./quiz-router-pago-curto-DTkvdNuV.js`),__vite__mapDeps([8,1,3,2,4,5]))),O=(0,u.lazy)(()=>l(()=>import(`./quiz-router-profissao-Bwi5pdjm.js`),__vite__mapDeps([9,1,3,4,5,2])));function k(){let{step:e,variant:t}=v();return t===`profissao`?(0,d.jsx)(u.Suspense,{fallback:(0,d.jsx)(`div`,{className:`min-h-screen bg-[var(--brand-bg-light)]`}),children:(0,d.jsx)(O,{})}):e===1?t===`direto`||t===`direto-oferta`||t===`pago-curto`||t===`direto-19`?(0,d.jsx)(C,{}):(0,d.jsx)(y,{}):(0,d.jsx)(u.Suspense,{fallback:(0,d.jsx)(`div`,{className:`min-h-screen bg-[var(--brand-bg-light)]`}),children:(0,d.jsx)(t===`v2`?T:t===`gratis-curto`?E:t===`pago-curto`?D:w,{})})}function A({variant:e=`default`}){return s(e),(0,d.jsx)(_,{variant:e,children:(0,d.jsx)(k,{})})}export{v as n,A as t};