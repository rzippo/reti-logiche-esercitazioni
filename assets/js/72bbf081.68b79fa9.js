"use strict";(self.webpackChunkreti_logiche_esercitazioni=self.webpackChunkreti_logiche_esercitazioni||[]).push([[1435],{109:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>l});var n=r(4848),o=r(8453);const t={sidebar_position:2},a="Introduzione",s={id:"esercitazioni/Introduzione",title:"Introduzione",description:"Perch\xe9 compilare, testare, debuggare",source:"@site/docs/esercitazioni/2. Introduzione.md",sourceDirName:"esercitazioni",slug:"/esercitazioni/Introduzione",permalink:"/reti-logiche-esercitazioni/esercitazioni/Introduzione",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"esercitazioniSidebar",previous:{title:"Esercitazioni di Reti Logiche",permalink:"/reti-logiche-esercitazioni/"},next:{title:"Assembler",permalink:"/reti-logiche-esercitazioni/category/assembler"}},c={},l=[{value:"Perch\xe9 compilare, testare, debuggare",id:"perch\xe9-compilare-testare-debuggare",level:2},{value:"Ambienti utilizzati",id:"ambienti-utilizzati",level:2},{value:"Domande e ricevimenti",id:"domande-e-ricevimenti",level:2}];function d(e){const i={blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"introduzione",children:"Introduzione"})}),"\n",(0,n.jsx)(i.h2,{id:"perch\xe9-compilare-testare-debuggare",children:"Perch\xe9 compilare, testare, debuggare"}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:"If debugging is the process of removing bugs, then programming must be the process of putting them in."})}),"\n",(0,n.jsx)(i.p,{children:"Edsger W. Dijkstra"}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["Si parta dal presupposto che fare errori ",(0,n.jsx)(i.em,{children:"succede"}),".\r\nMeno \xe8 banale il progetto o esercizio, pi\xf9 \xe8 facile che da qualche parte si sbagli.\r\nLa parte importante \xe8 riuscire a cogliere e rimuovere questi errori prima che sia troppo tardi, sia che si tratti di rilasciare un software in produzione o di consegnare l'esercizio a un esame."]}),"\n",(0,n.jsx)(i.p,{children:"In queste esercitazioni vedremo questo processo in contesti specifici (software scritto in assembler e reti logiche descritte in Verilog) ma la linea si applica in generale in tutti gli altri ambiti dell'ingegneria informatica."}),"\n",(0,n.jsxs)(i.p,{children:["Dunque il codice, di qualunque tipo sia, non va solo scritto, va ",(0,n.jsx)(i.em,{children:"provato"}),".\r\nCome identificare, trovare e rimuovere gli errori \xe8 invece una capacit\xe0 pratica che va ",(0,n.jsx)(i.em,{children:"esercitata"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"ambienti-utilizzati",children:"Ambienti utilizzati"}),"\n",(0,n.jsx)(i.p,{children:"Gli strumenti a disposizione per provare e testare il codice, cos\xec come la loro praticit\xe0 d'uso possono cambiare molto in base ad architettura, sistema operativo, e generale potenza delle macchine utilizzate."}),"\n",(0,n.jsx)(i.p,{children:"Dato che il corso \xe8 collegato a un esame, ci si concentrer\xe0 sullo stesso ambiente che sar\xe0 disponibile all'esame, che \xe8 dunque basato su PC desktop con Windows 10 e architettura x86.\r\nIl software e le istruzioni a disposizione riguarderanno questa combinazione."}),"\n",(0,n.jsxs)(i.p,{children:["Per altre architetture e sistemi operativi, il supporto \xe8 sporadico e ",(0,n.jsx)(i.em,{children:"best effort"}),", con nessuna garanzia da parte dei docenti che funzioni.\r\nDovrete, con molta probabilit\xe0, litigare con il vostro computer per far funzionare il tutto."]}),"\n",(0,n.jsx)(i.h2,{id:"domande-e-ricevimenti",children:"Domande e ricevimenti"}),"\n",(0,n.jsx)(i.p,{children:"Siamo a disposizione per rispondere a domande, spiegare esercizi, colmare lacune.\r\nGli orari ufficiali di ricevimento sono comunicati durante il corso e tenuti aggiornati sulle pagine personali.\r\n\xc8 sempre una buona idea scrivere prima, via email o Teams, per evitare impegni concomitanti o risolvere pi\xf9 rapidamente in via testuale.\r\nIn caso di dubbi su esercizi, aiuta molto allegare il testo dell'esercizio (foto o pdf) e il codice sorgente (sempre e solo file testuale, non foto o file binari)."}),"\n",(0,n.jsxs)(i.p,{children:["Non \xe8 raro che gli studenti si sentano in imbarazzo o comunque evitino di fare domande, quindi ci spendo qualche parola in pi\xf9.\r\nFuori dall'esame, \xe8 nostro ",(0,n.jsx)(i.em,{children:"compito"})," insegnare, e questo include rispondere alle domande.\r\n\xc8 un ",(0,n.jsx)(i.em,{children:"diritto"})," degli studenti chiedere ricevimenti e avere risposte.\r\nAvere dubbi o lacune \xe8 in questo contesto ",(0,n.jsx)(i.em,{children:"positivo"}),", perch\xe9 sapere di non sapere qualcosa \xe8 un primo passo per imparare."]})]})}function u(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,i,r)=>{r.d(i,{R:()=>a,x:()=>s});var n=r(6540);const o={},t=n.createContext(o);function a(e){const i=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(t.Provider,{value:i},e.children)}}}]);