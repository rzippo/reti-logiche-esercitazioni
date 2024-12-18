"use strict";(self.webpackChunkreti_logiche_esercitazioni=self.webpackChunkreti_logiche_esercitazioni||[]).push([[7651],{2249:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"esercitazioni/Verilog/Esercitazioni/Esercitazione 6","title":"Esercitazione 6","description":"","source":"@site/docs/esercitazioni/Verilog/Esercitazioni/6. Esercitazione SEI.mdx","sourceDirName":"esercitazioni/Verilog/Esercitazioni","slug":"/esercitazioni/Verilog/Esercitazioni/Esercitazione 6","permalink":"/reti-logiche-esercitazioni/esercitazioni/Verilog/Esercitazioni/Esercitazione 6","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"Esercitazione 6","title":"Esercitazione 6","description":""},"sidebar":"esercitazioniSidebar","previous":{"title":"Esercitazione 5","permalink":"/reti-logiche-esercitazioni/esercitazioni/Verilog/Esercitazioni/Esercitazione 5"},"next":{"title":"Documentazione","permalink":"/reti-logiche-esercitazioni/category/documentazione-1"}}');var n=s(4848),r=s(8453),t=s(6025);const l={id:"Esercitazione 6",title:"Esercitazione 6",description:""},c="Esercitazione 6",o={},d=[{value:"Esercizio 6.1: esame 2024-07-16",id:"esercizio-61-esame-2024-07-16",level:2},{value:"Esercizio 6.2: esame 2024-09-10",id:"esercizio-62-esame-2024-09-10",level:2}];function m(e){const i={a:"a",admonition:"admonition",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mdxAdmonitionTitle:"mdxAdmonitionTitle",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"esercitazione-6",children:"Esercitazione 6"})}),"\n",(0,n.jsx)(i.h2,{id:"esercizio-61-esame-2024-07-16",children:"Esercizio 6.1: esame 2024-07-16"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(9651).A+"",children:"Qui"})," testo e soluzione."]}),"\n",(0,n.jsx)(i.admonition,{title:"Provare da s\xe9",type:"tip",children:(0,n.jsx)(i.p,{children:"Provare a svolgere da s\xe9 l'esercizio,  prima di guardare la soluzione o andare oltre per la discussione."})}),"\n",(0,n.jsxs)(i.admonition,{type:"note",children:[(0,n.jsxs)(i.mdxAdmonitionTitle,{children:["Esercizi ",(0,n.jsx)(i.em,{children:"senza"})," sintesi di reti combinatorie"]}),(0,n.jsx)(i.p,{children:"Non tutti gli esercizi includono la sintesi di reti combinatorie, cos\xec come non tutti i pretest, esercizi di Assembler o domande all'orale coprono un dato argomento del corso."}),(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.em,{children:"Nel complesso"}),", ogni esame ambisce a coprire tutti gli argomenti del corso."]})]}),"\n",(0,n.jsxs)(i.p,{children:["L'aspetto particolare di questo esercizio \xe8 la richiesta di utilizzare microsottoprogrammi.\nQuesto significa codificare una serie di stati a cui si pu\xf2 saltare da diversi altri stati, a cui poi si intende tornare, proprio come i sottoprogrammi nel software.\nAl posto di ",(0,n.jsx)(i.code,{children:"call"})," e ",(0,n.jsx)(i.code,{children:"ret"}),", per\xf2, si usa il registro ",(0,n.jsx)(i.code,{children:"MJR"})," (Multiway Jump Register)."]}),"\n",(0,n.jsxs)(i.p,{children:["La struttura per la descrizione \xe8 la seguente.\nSiano ",(0,n.jsx)(i.code,{children:"S0"}),"...",(0,n.jsx)(i.code,{children:"SN"})," gli stati della sequenza principale, e siano ",(0,n.jsx)(i.code,{children:"Smp0"}),"...",(0,n.jsx)(i.code,{children:"SmpN"})," gli stati del microsottoprogramma.\nUno stato della sequenza principale pu\xf2 saltare ad un microsottoprogramma cos\xec"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-verilog",children:"    S0: begin\n        ...\n        MJR <= S1;\n        STAR <= Smp0;\n    end\n"})}),"\n",(0,n.jsx)(i.p,{children:"Al termine del microsottoprogramma si salter\xe0 poi alla sequenza principale cos\xec"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-verilog",children:"    SmpN: begin\n        ...\n        STAR <= MJR;\n    end\n"})}),"\n",(0,n.jsx)(i.p,{children:"All'interno del processore sEP8 visto nel corso si fa un uso massiccio di microsottoprogrammi per separare le varie operazioni del processore in sequenze generiche, atomiche e ben riconoscibili, come la fase di esecuzione di una specifica istruzione, l'accesso ad una locazione di memoria, l'accesso ad una interfaccia di I/O, etc."}),"\n",(0,n.jsxs)(i.p,{children:["Nella soluzione di questo esercizio, si usa un microsottoprogramma che esegue l'handshake e preleva un dato dal convertitore A/D.\nIl flusso principale non fa che saltare a questo microsottoprogramma 3 volte per prelevare i dati di cui ha bisogno.\nIn ",(0,n.jsx)(i.code,{children:"S3"}),", il calcolo \xe8 solo descritto."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-verilog",children:"...\nalways @(posedge clock) if(reset_ == 1) #3 begin\n    casex (STAR)\n        S0: begin\n            OUT <= 0;\n            MJR <= S1; \n            STAR <= S_read0;\n        end\n        S1: begin\n            X2 <= X0;\n            MJR <= S2;\n            STAR <= S_read0;\n        end\n        S2: begin\n            X1 <= X0;\n            MJR <= S3;\n            STAR <= S_read0;\n        end\n        S3: begin\n            OUT <= ((X0 + X1 + X2) >= 164) ? 1 : 0;\n            STAR <= S0;\n        end\n        \n        // microsottoprogramma per l'acquisizione di un campione\n        // il dato acquisito viene lasciato in X0\n        S_read0: begin\n            SOC <= 1; \n            STAR <= (eoc == 1'b0) ? S_read1 : S_read0;\n        end\n        S_read1: begin\n            SOC <= 0; \n            STAR <= (eoc == 1'b1) ? S_read2 : S_read1;\n        end\n        S_read2: begin\n            X0 <= x;\n            STAR <= MJR;\n        end\n    endcase\nend\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Un altro aspetto critico \xe8 come sintetizzare una rete del genere, cio\xe8 come si implementa effettivamente dell'hardware che si comporta in questo modo.\nL'aspetto chiave \xe8 il fatto che quando non si usano microsottoprogrammi, i valori assegnati a ",(0,n.jsx)(i.code,{children:"STAR"})," sono sempre delle costanti, che come abbiamo visto possono essere sintetizzate usando una ROM.\nI salti che usano ",(0,n.jsx)(i.code,{children:"MJR"})," invece no, perch\xe9, per l'appunto, usano un registro da cui viene letto il prossimo stato."]}),"\n",(0,n.jsxs)(i.p,{children:["Va quindi utilizzata una architettura ",(0,n.jsx)(i.em,{children:"diversa"}),".\nUna di quelle viste nel corso \xe8 cos\xec schematizzata."]}),"\n",(0,n.jsx)("img",{src:(0,t.Ay)("img/verilog/6/rom-microindirizzi-mjr.drawio.png")}),"\n",(0,n.jsx)(i.p,{children:"In questa architettura notiamo che si aggiunge un nuovo filo in uscita alla ROM per distinguere i salti (in)condizionati dai salti che leggono da MJR.\nPossiamo quindi sintetizzare la parte controllo di questo esercizio con una ROM come la seguente."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-verilog",children:"// Per utilizzare il registro MJR, va esteso il modello di sintesi della parte controllo e la relativa ROM, in modo da distinguere i salti guidati da MJR e non (salti incondizionati o a due vie).\n\n// Per distinguere questi salti da quelli guidati da MJR, introduciamo un altro multiplexer guidato dal campo m-type della ROM\n// Questo varr\xe0 0 per i salti incondizionati o a due vie e 1 per i salti guidati da MJR.\n\n// Per i salti incondizionati o a due vie, si utilizzano i campi m-addr T ed m-addr F della ROM, ed un multiplexer guidato da una delle variabile di condizionamento prodotte dalla parte operativa.\n// Dato che, in questo caso, abbiamo una sola variabile di condizionamento, non c'\xe8 bisogno di distinguerle tramite un multiplexer ed il campo c_eff della ROM, che quindi omettiamo.\n\n/* \nm-addr          | m-code      | m-addr T      | m-addr F      | m-type\n-------------------------------------------------------------------------\n001 (S1)        | 000000101   | 100 (S_read0) | 100 (S_read0) | 0\n000 (S0)        | 100000010   | 100 (S_read0) | 100 (S_read0) | 0\n010 (S2)        | 010000011   | 100 (S_read0) | 100 (S_read0) | 0\n011 (S3)        | 000001X00   | 000 (S0)      | 000 (S0)      | 0\n100 (S_read0)   | 0001X0000   | 100 (S_read0) | 101 (S_read1) | 0\n101 (S_read1)   | 000010000   | 110 (S_read2) | 101 (S_read1) | 0\n110 (S_read2)   | 001000000   | XXX           | XXX           | 1\n\n*/\n"})}),"\n",(0,n.jsxs)(i.admonition,{title:"Niente salti condizionati con MJR",type:"warning",children:[(0,n.jsx)(i.p,{children:"L'architettura presentata permette solo"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Salti incodinzionati a stato ",(0,n.jsx)(i.em,{children:"costante"}),", del tipo ",(0,n.jsx)(i.code,{children:"STAR <= S0;"}),", da sintetizzare con ",(0,n.jsx)(i.code,{children:"m-type = 0"}),", ",(0,n.jsx)(i.code,{children:"c_eff = X"}),", ",(0,n.jsx)(i.code,{children:"m-true = m-false = S0"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["Salti condizionati a stati ",(0,n.jsx)(i.em,{children:"costanti"}),", del tipo ",(0,n.jsx)(i.code,{children:"STAR <= c1 ? S0 : S1;"}),", da sintetizzare con ",(0,n.jsx)(i.code,{children:"m-type = 0"}),", ",(0,n.jsx)(i.code,{children:"c_eff = c1"}),", ",(0,n.jsx)(i.code,{children:"m-true = S0"}),", ",(0,n.jsx)(i.code,{children:"m-false = S1"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["Salti incondizionati a ",(0,n.jsx)(i.code,{children:"MJR"}),", del tipo ",(0,n.jsx)(i.code,{children:"STAR <= MJR;"}),", da sintetizzare con ",(0,n.jsx)(i.code,{children:"m-type = 1"}),", ",(0,n.jsx)(i.code,{children:"c_eff = X"}),", ",(0,n.jsx)(i.code,{children:"m-true = X"}),", ",(0,n.jsx)(i.code,{children:"m-false = X"}),"."]}),"\n"]}),(0,n.jsxs)(i.p,{children:["Non sono sintetizzabili invece salti del tipo ",(0,n.jsx)(i.code,{children:"STAR <= c1 ? MJR : S1"}),".\nPer far questo ci vorrebbe un'altra architettura, ",(0,n.jsx)(i.em,{children:"diversa"})," da quelle viste in questo corso."]})]}),"\n",(0,n.jsx)(i.h2,{id:"esercizio-62-esame-2024-09-10",children:"Esercizio 6.2: esame 2024-09-10"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(8690).A+"",children:"Qui"})," testo e soluzione."]}),"\n",(0,n.jsx)(i.admonition,{title:"Provare da s\xe9",type:"tip",children:(0,n.jsx)(i.p,{children:"Provare a svolgere da s\xe9 l'esercizio,  prima di guardare la soluzione o andare oltre per la discussione."})}),"\n",(0,n.jsxs)(i.p,{children:["Il primo aspetto interessante di questo esercizio \xe8 la ricezione di byte tramite linea seriale, la cui specifica \xe8 data dal testo.\nDalla specifica, quando un valore viene trasmesso si imposta la linea su 0, la lunghezza dell'intervallo in cui la linea \xe8 a 0 ci indica quale bit \xe8 stato trasmesso.\nCi sono due range dati: ",(0,n.jsxs)(i.span,{className:"katex",children:[(0,n.jsx)(i.span,{className:"katex-mathml",children:(0,n.jsx)(i.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(i.semantics,{children:[(0,n.jsxs)(i.mrow,{children:[(0,n.jsx)(i.mo,{stretchy:"false",children:"["}),(0,n.jsx)(i.mn,{children:"2"}),(0,n.jsx)(i.mo,{separator:"true",children:","}),(0,n.jsx)(i.mn,{children:"7"}),(0,n.jsx)(i.mo,{stretchy:"false",children:"]"})]}),(0,n.jsx)(i.annotation,{encoding:"application/x-tex",children:"[2, 7]"})]})})}),(0,n.jsx)(i.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(i.span,{className:"base",children:[(0,n.jsx)(i.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(i.span,{className:"mopen",children:"["}),(0,n.jsx)(i.span,{className:"mord",children:"2"}),(0,n.jsx)(i.span,{className:"mpunct",children:","}),(0,n.jsx)(i.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(i.span,{className:"mord",children:"7"}),(0,n.jsx)(i.span,{className:"mclose",children:"]"})]})})]})," periodi di clock per un bit 1, ",(0,n.jsxs)(i.span,{className:"katex",children:[(0,n.jsx)(i.span,{className:"katex-mathml",children:(0,n.jsx)(i.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(i.semantics,{children:[(0,n.jsxs)(i.mrow,{children:[(0,n.jsx)(i.mo,{stretchy:"false",children:"["}),(0,n.jsx)(i.mn,{children:"11"}),(0,n.jsx)(i.mo,{separator:"true",children:","}),(0,n.jsx)(i.mn,{children:"15"}),(0,n.jsx)(i.mo,{stretchy:"false",children:"]"})]}),(0,n.jsx)(i.annotation,{encoding:"application/x-tex",children:"[11, 15]"})]})})}),(0,n.jsx)(i.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(i.span,{className:"base",children:[(0,n.jsx)(i.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(i.span,{className:"mopen",children:"["}),(0,n.jsx)(i.span,{className:"mord",children:"11"}),(0,n.jsx)(i.span,{className:"mpunct",children:","}),(0,n.jsx)(i.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(i.span,{className:"mord",children:"15"}),(0,n.jsx)(i.span,{className:"mclose",children:"]"})]})})]})," per un bit 0."]}),"\n",(0,n.jsx)(i.admonition,{title:"Assenza di errori",type:"note",children:(0,n.jsxs)(i.p,{children:["In esercizi d'esame come questo, si ",(0,n.jsx)(i.em,{children:"assume"})," che non ci siano errori di alcun tipo nel trasmettitore o sulla linea.\nNon ci saranno quindi periodi di lunghezze diversa dagli intervalli indicati.\nLa distanza tra 7 e 11 permette di escludere ambiguit\xe0 nella misurazione della lunghezza degli intervalli."]})}),"\n",(0,n.jsxs)(i.p,{children:["Abbiamo quindi bisogno di due ingredienti.\nIl primo \xe8 un registro su cui campioniamo in shift continuo.\nDato che l'esercizio indica i bit inviati a partire dal pi\xf9 signficativo, si pu\xf2 campionare un byte eseguendo 8 volte ",(0,n.jsx)(i.code,{children:"BYTE <= {nuovo_bit, BYTE[7:1]};"}),".\nIl secondo ingrediente \xe8 aspettare che ",(0,n.jsx)(i.code,{children:"rxd"})," vada a 0, e poi ",(0,n.jsx)(i.em,{children:"contare"})," per quanti periodi di clock rimane a 0, per esempio con un registro ",(0,n.jsx)(i.code,{children:"COUNT"}),".\nPossiamo quindi calcolare ",(0,n.jsx)(i.code,{children:"nuovo_bit = (COUNT <= 7);"}),", che \xe8 ottimizzabile (ma non \xe8 indispensabile) notando che \xe8 equivalente a ",(0,n.jsx)(i.code,{children:"nuovo_bit = ~COUNT[3]"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["Il secondo aspetto interessante dell'esercizio riguarda il calcolo combinatorio da eseguire con i byte ricevuti.\nL'esercizio chiede di interpretarli come numeri ",(0,n.jsx)(i.em,{children:"interi"})," in complemento alla radice ",(0,n.jsxs)(i.span,{className:"katex",children:[(0,n.jsx)(i.span,{className:"katex-mathml",children:(0,n.jsx)(i.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(i.semantics,{children:[(0,n.jsxs)(i.mrow,{children:[(0,n.jsxs)(i.msub,{children:[(0,n.jsx)(i.mi,{children:"x"}),(0,n.jsx)(i.mn,{children:"0"})]}),(0,n.jsx)(i.mo,{separator:"true",children:","}),(0,n.jsx)(i.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(i.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(i.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(i.mo,{separator:"true",children:","}),(0,n.jsxs)(i.msub,{children:[(0,n.jsx)(i.mi,{children:"x"}),(0,n.jsx)(i.mi,{children:"n"})]})]}),(0,n.jsx)(i.annotation,{encoding:"application/x-tex",children:"x_0, ..., x_n"})]})})}),(0,n.jsx)(i.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(i.span,{className:"base",children:[(0,n.jsx)(i.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsxs)(i.span,{className:"mord",children:[(0,n.jsx)(i.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(i.span,{className:"msupsub",children:(0,n.jsxs)(i.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(i.span,{className:"vlist-r",children:[(0,n.jsx)(i.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(i.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(i.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(i.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(i.span,{className:"mord mtight",children:"0"})})]})}),(0,n.jsx)(i.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(i.span,{className:"vlist-r",children:(0,n.jsx)(i.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(i.span,{})})})]})})]}),(0,n.jsx)(i.span,{className:"mpunct",children:","}),(0,n.jsx)(i.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(i.span,{className:"mord",children:"..."}),(0,n.jsx)(i.span,{className:"mpunct",children:","}),(0,n.jsx)(i.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(i.span,{className:"mord",children:[(0,n.jsx)(i.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(i.span,{className:"msupsub",children:(0,n.jsxs)(i.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(i.span,{className:"vlist-r",children:[(0,n.jsx)(i.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(i.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(i.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(i.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(i.span,{className:"mord mathnormal mtight",children:"n"})})]})}),(0,n.jsx)(i.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(i.span,{className:"vlist-r",children:(0,n.jsx)(i.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(i.span,{})})})]})})]})]})})]}),", calcolandone di volta in volta la somma ",(0,n.jsxs)(i.span,{className:"katex",children:[(0,n.jsx)(i.span,{className:"katex-mathml",children:(0,n.jsx)(i.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(i.semantics,{children:[(0,n.jsx)(i.mrow,{children:(0,n.jsxs)(i.msub,{children:[(0,n.jsx)(i.mi,{children:"s"}),(0,n.jsx)(i.mi,{children:"i"})]})}),(0,n.jsx)(i.annotation,{encoding:"application/x-tex",children:"s_i"})]})})}),(0,n.jsx)(i.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(i.span,{className:"base",children:[(0,n.jsx)(i.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(i.span,{className:"mord",children:[(0,n.jsx)(i.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(i.span,{className:"msupsub",children:(0,n.jsxs)(i.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(i.span,{className:"vlist-r",children:[(0,n.jsx)(i.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(i.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(i.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(i.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(i.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,n.jsx)(i.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(i.span,{className:"vlist-r",children:(0,n.jsx)(i.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(i.span,{})})})]})})]})]})})]})," che \xe8 posta in uscita.\nQuando tale somma sar\xe0 non pi\xf9 rappresentabile, si torna alle condizioni al reset (ossia il prossimo campione sar\xe0 ",(0,n.jsxs)(i.span,{className:"katex",children:[(0,n.jsx)(i.span,{className:"katex-mathml",children:(0,n.jsx)(i.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(i.semantics,{children:[(0,n.jsx)(i.mrow,{children:(0,n.jsxs)(i.msub,{children:[(0,n.jsx)(i.mi,{children:"x"}),(0,n.jsx)(i.mn,{children:"0"})]})}),(0,n.jsx)(i.annotation,{encoding:"application/x-tex",children:"x_0"})]})})}),(0,n.jsx)(i.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(i.span,{className:"base",children:[(0,n.jsx)(i.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(i.span,{className:"mord",children:[(0,n.jsx)(i.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(i.span,{className:"msupsub",children:(0,n.jsxs)(i.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(i.span,{className:"vlist-r",children:[(0,n.jsx)(i.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(i.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(i.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(i.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(i.span,{className:"mord mtight",children:"0"})})]})}),(0,n.jsx)(i.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(i.span,{className:"vlist-r",children:(0,n.jsx)(i.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(i.span,{})})})]})})]})]})})]}),")."]}),"\n",(0,n.jsxs)(i.p,{children:["Per far questo utilizziamo iterativamente un sommatore, a cui colleghiamo in ingresso i registri ",(0,n.jsx)(i.code,{children:"S"})," (inizializzato a 0) e ",(0,n.jsx)(i.code,{children:"BYTE"}),". Sia ",(0,n.jsx)(i.code,{children:"s"})," l'uscita di tale sommatore.\nOgnivolta che un nuovo campione \xe8 stato ricevuto completamente, campioniamo la nuova somma con ",(0,n.jsx)(i.code,{children:"S <= s"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["Dato che si parla di numeri interi in complemento alla radice, come criterio di rappresentabilit\xe0 dobbiamo usare il filo di overflow ",(0,n.jsx)(i.code,{children:"ow"})," di questo sommatore.\nL'uscita ",(0,n.jsx)(i.code,{children:"c_out"})," \xe8 invece irrilevante, sarebbe di interesse sole se questi fossero numeri ",(0,n.jsx)(i.em,{children:"naturali"}),"."]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},9651:(e,i,s)=>{s.d(i,{A:()=>a});const a=s.p+"assets/files/2024-07-16-ex2-mjr-1920a9a77852e9d688f3e618a2b0207c.zip"},8690:(e,i,s)=>{s.d(i,{A:()=>a});const a=s.p+"assets/files/2024-09-10-ex2-rxd-somma-3ce552a6ad089cf3929e17962afbd86d.zip"},8453:(e,i,s)=>{s.d(i,{R:()=>t,x:()=>l});var a=s(6540);const n={},r=a.createContext(n);function t(e){const i=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),a.createElement(r.Provider,{value:i},e.children)}}}]);