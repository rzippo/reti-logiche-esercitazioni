"use strict";(self.webpackChunkreti_logiche_esercitazioni=self.webpackChunkreti_logiche_esercitazioni||[]).push([[475],{87:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>t});var n=r(4848),s=r(8453);const d={description:"Riferimento rapido per i comandi del debugger gdb"},o="Debugger gdb",l={id:"esercitazioni/Assembler/Documentazione/Debugger gdb",title:"Debugger gdb",description:"Riferimento rapido per i comandi del debugger gdb",source:"@site/docs/esercitazioni/Assembler/Documentazione/3. Debugger gdb.mdx",sourceDirName:"esercitazioni/Assembler/Documentazione",slug:"/esercitazioni/Assembler/Documentazione/Debugger gdb",permalink:"/reti-logiche-esercitazioni/esercitazioni/Assembler/Documentazione/Debugger gdb",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Riferimento rapido per i comandi del debugger gdb"},sidebar:"esercitazioniSidebar",previous:{title:"Sottoprogrammi utility",permalink:"/reti-logiche-esercitazioni/esercitazioni/Assembler/Documentazione/Sottoprogrammi utility"},next:{title:"Tabella ASCII",permalink:"/reti-logiche-esercitazioni/esercitazioni/Assembler/Documentazione/Tabella ASCII"}},c={},t=[{value:"Controllo dell&#39;esecuzione",id:"controllo-dellesecuzione",level:2},{value:"Problemi con <code>next</code>",id:"problemi-con-next",level:3},{value:"Ispezione dei registri",id:"ispezione-dei-registri",level:2},{value:"Ispezione della memoria",id:"ispezione-della-memoria",level:2}];function a(e){const i={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsxs)(i.h1,{id:"debugger-gdb",children:["Debugger ",(0,n.jsx)(i.code,{children:"gdb"})]})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"gdb"})," \xe8 un debugger a linea di comando che ci permette di eseguire un programma passo passo, seguendo lo stato del processore e della memoria."]}),"\n",(0,n.jsxs)(i.p,{children:["Il concetto fondamentale per un debugger \xe8 quello di ",(0,n.jsx)(i.em,{children:"breakpoint"}),", ossia un punto del codice dove l'esecuzione dovra fermarsi.\r\nI breakpoints ci permettono di eseguire rapidamente le parti del programma che non sono di interesse e fermarsi ad osservare solo le parti che ci interessano."]}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.p,{children:["Quella che segue \xe8 comunque una presentazione sintetica e semplificata.\r\nPer altre opzioni e funzionalit\xe0 del debugger, vedere la documentazione ufficiale o il comando ",(0,n.jsx)(i.code,{children:"help"}),"."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"controllo-dellesecuzione",children:"Controllo dell'esecuzione"}),"\n",(0,n.jsxs)(i.p,{children:["Per istruzione corrente si intende ",(0,n.jsx)(i.em,{children:"la prossima da eseguire"}),".\r\nQuando il debugger si ferma ad un'istruzione, si ferma ",(0,n.jsx)(i.em,{children:"prima"})," di eseguirla."]}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Nome completo"}),(0,n.jsx)(i.th,{children:"Nome scorciatoia"}),(0,n.jsx)(i.th,{children:"Formato"}),(0,n.jsx)(i.th,{children:"Comportamento"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"frame"}),(0,n.jsx)(i.td,{children:"f"}),(0,n.jsx)(i.td,{children:"f"}),(0,n.jsx)(i.td,{children:"Mostra l'istruzione corrente."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"list"}),(0,n.jsx)(i.td,{children:"l"}),(0,n.jsx)(i.td,{children:"l"}),(0,n.jsx)(i.td,{children:"Mostra il sorgente attorno all'istruzione corrente."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"break"}),(0,n.jsx)(i.td,{children:"b"}),(0,n.jsxs)(i.td,{children:["b ",(0,n.jsx)(i.em,{children:"label"})]}),(0,n.jsxs)(i.td,{children:["Imposta un breakpoint alla prima istruzione dopo ",(0,n.jsx)(i.em,{children:"label"}),"."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"delete break"}),(0,n.jsx)(i.td,{children:"d b"}),(0,n.jsx)(i.td,{children:"d b label"}),(0,n.jsxs)(i.td,{children:["Rimuove il breakpoint alla posizione ",(0,n.jsx)(i.em,{children:"label"}),"."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"continue"}),(0,n.jsx)(i.td,{children:"c"}),(0,n.jsx)(i.td,{children:"c"}),(0,n.jsx)(i.td,{children:"Prosegue l'esecuzione del programma fino al prossimo breakpoint."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"step"}),(0,n.jsx)(i.td,{children:"s"}),(0,n.jsx)(i.td,{children:"s"}),(0,n.jsxs)(i.td,{children:["Esegue l'istruzione corrente, fermandosi immediatamente dopo. Se l'istruzione corrente \xe8 una ",(0,n.jsx)(i.code,{children:"call"}),", l'esecuzione si fermer\xe0 alla prima istruzione del sottoprogramma chiamato."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"next"}),(0,n.jsx)(i.td,{children:"n"}),(0,n.jsx)(i.td,{children:"n"}),(0,n.jsxs)(i.td,{children:["Esegue l'istruzione corrente, fermandosi all'istruzione successiva del sottoprogramma corrente. Se l'istruzione corrente \xe8 una ",(0,n.jsx)(i.code,{children:"call"}),", l'esecuzione si fermer\xe0\t",(0,n.jsx)(i.em,{children:"dopo"})," il ",(0,n.jsx)(i.code,{children:"ret"})," di del sottoprogramma chiamato. Nota: aggiungere una ",(0,n.jsx)(i.code,{children:"nop"})," dopo ogni ",(0,n.jsx)(i.code,{children:"call"})," prima di una nuova label."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"finish"}),(0,n.jsx)(i.td,{children:"fin"}),(0,n.jsx)(i.td,{children:"fin"}),(0,n.jsxs)(i.td,{children:["Continua l'esecuzione fino all'uscita dal sottoprogramma corrente (",(0,n.jsx)(i.code,{children:"ret"}),"). L'esecuzione si fermer\xe0 alla prima istruzione dopo la ",(0,n.jsx)(i.code,{children:"call"}),"."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"run"}),(0,n.jsx)(i.td,{children:"r"}),(0,n.jsx)(i.td,{children:"r"}),(0,n.jsx)(i.td,{children:"Avvia (o riavvia) l'esecuzione del programma. Chiede conferma."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"quit"}),(0,n.jsx)(i.td,{children:"q"}),(0,n.jsx)(i.td,{children:"q"}),(0,n.jsx)(i.td,{children:"Esce dal debugger. Chiede conferma."})]})]})]}),"\n",(0,n.jsxs)(i.p,{children:["I seguenti comandi sono ",(0,n.jsx)(i.em,{children:"definiti ad-hoc nell'ambiente del corso"}),", e non sono quindi tipici comandi di ",(0,n.jsx)(i.code,{children:"gdb"}),"."]}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Nome completo"}),(0,n.jsx)(i.th,{children:"Nome scorciatoia"}),(0,n.jsx)(i.th,{children:"Formato"}),(0,n.jsx)(i.th,{children:"Comportamento"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"rrun"}),(0,n.jsx)(i.td,{children:"rr"}),(0,n.jsx)(i.td,{children:"rr"}),(0,n.jsx)(i.td,{children:"Avvia (o riavvia) l'esecuzione del programma, senza chiedere conferma."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"qquit"}),(0,n.jsx)(i.td,{children:"qq"}),(0,n.jsx)(i.td,{children:"qq"}),(0,n.jsx)(i.td,{children:"Esce dal debugger, senza chiedere conferma."})]})]})]}),"\n",(0,n.jsxs)(i.h3,{id:"problemi-con-next",children:["Problemi con ",(0,n.jsx)(i.code,{children:"next"})]}),"\n",(0,n.jsxs)(i.p,{children:["Si possono talvolta incontrare problemi con il comportamento di ",(0,n.jsx)(i.code,{children:"next"}),", che derivano da come questa \xe8 definita e implementata.\r\nIl comando ",(0,n.jsx)(i.code,{children:"next"})," distingue i ",(0,n.jsx)(i.em,{children:"frame"})," come le sequenze di istruzioni che vanno da una label alla successiva.\r\nIl suo comportamento \xe8, in realt\xe0, di continuare l'esecuzione finch\xe9 non incontra di nuovo una nuova istruzione nello stesso ",(0,n.jsx)(i.em,{children:"frame"})," di partenza."]}),"\n",(0,n.jsxs)(i.p,{children:["Questa logica pu\xf2 essere facilmente rotta con del codice come il seguente, dove ",(0,n.jsx)(i.em,{children:"non esiste"})," una istruzione di ",(0,n.jsx)(i.code,{children:"punto_1"})," che viene incontrata dopo la ",(0,n.jsx)(i.code,{children:"call"}),".\r\nQuel che ne consegue \xe8 che il comando ",(0,n.jsx)(i.code,{children:"next"})," si comporta come ",(0,n.jsx)(i.code,{children:"continue"}),"."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-assembler",children:"punto_1:\r\n    ...\r\n    call newline\r\npunto_2:\r\n    ...\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Per ovviare a questo problema, \xe8 una buona abitudine quella di aggiungere una ",(0,n.jsx)(i.code,{children:"nop"})," dopo ciascuna ",(0,n.jsx)(i.code,{children:"call"}),".\r\nTale ",(0,n.jsx)(i.code,{children:"nop"}),", appartenendo allo stesso ",(0,n.jsx)(i.em,{children:"frame"})," ",(0,n.jsx)(i.code,{children:"punto_1"}),", far\xe0 regolarmente sospendere l'esecuzione."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-assembler",children:"punto_1:\r\n    ...\r\n    call newline\r\n    nop\r\npunto_2:\r\n    ...\n"})}),"\n",(0,n.jsx)(i.h2,{id:"ispezione-dei-registri",children:"Ispezione dei registri"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Nome completo"}),(0,n.jsx)(i.th,{children:"Nome scorciatoia"}),(0,n.jsx)(i.th,{children:"Formato"}),(0,n.jsx)(i.th,{children:"Comportamento"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"info registers"}),(0,n.jsx)(i.td,{children:"i r"}),(0,n.jsx)(i.td,{children:"i r"}),(0,n.jsxs)(i.td,{children:["Mostra lo stato di (quasi) tutti i registri. Non mostra separatamente i sotto-registri, come ",(0,n.jsx)(i.code,{children:"%ax"}),"."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"info registers"}),(0,n.jsx)(i.td,{children:"i r"}),(0,n.jsxs)(i.td,{children:["i r ",(0,n.jsx)(i.em,{children:"reg"})]}),(0,n.jsxs)(i.td,{children:["Mostra lo stato del registro ",(0,n.jsx)(i.em,{children:"reg"})," specificato. ",(0,n.jsx)(i.em,{children:"reg"})," va specificato in minuscolo senza caratteri preposti, per esempio ",(0,n.jsx)(i.code,{children:"i r eax"}),". Si possono specificare anche sotto-registri, come ",(0,n.jsx)(i.code,{children:"%ax"}),", e pi\xf9 registri separati da spazio."]})]})]})]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"gdb"})," supporta viste alternative con il comando ",(0,n.jsx)(i.code,{children:"layout"})," che mettono pi\xf9 informazioni a schermo.\r\nIn particolare, ",(0,n.jsx)(i.code,{children:"layout regs"})," mostra l'equivalente di ",(0,n.jsx)(i.code,{children:"i r"})," e ",(0,n.jsx)(i.code,{children:"l"}),", evidenziando gli elementi che cambiano ad ogni step di esecuzione."]}),"\n",(0,n.jsx)(i.h2,{id:"ispezione-della-memoria",children:"Ispezione della memoria"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Nome completo"}),(0,n.jsx)(i.th,{children:"Nome scorciatoia"}),(0,n.jsx)(i.th,{children:"Formato"}),(0,n.jsx)(i.th,{children:"Comportamento"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"x"}),(0,n.jsx)(i.td,{children:"x"}),(0,n.jsxs)(i.td,{children:["x/",(0,n.jsx)(i.em,{children:"NFU"})," ",(0,n.jsx)(i.em,{children:"addr"})]}),(0,n.jsxs)(i.td,{children:["Mostra lo stato della memoria a partire dall'indirizzo ",(0,n.jsx)(i.em,{children:"addr"}),", per le ",(0,n.jsx)(i.em,{children:"N"})," locazione di dimensione ",(0,n.jsx)(i.em,{children:"U"})," e interpretate con il formato ",(0,n.jsx)(i.em,{children:"F"}),". Comando con memoria, i valori di ",(0,n.jsx)(i.em,{children:"N"}),", ",(0,n.jsx)(i.em,{children:"F"})," e ",(0,n.jsx)(i.em,{children:"U"})," possono essere omessi (insieme allo ",(0,n.jsx)(i.code,{children:"/"}),") se uguali a prima."]})]})})]}),"\n",(0,n.jsxs)(i.p,{children:["Il comando ",(0,n.jsx)(i.code,{children:"x"})," sta per ",(0,n.jsx)(i.em,{children:"examine memory"}),", ma differenza degli altri non ha una versione estesa."]}),"\n",(0,n.jsxs)(i.p,{children:["Il parametro ",(0,n.jsx)(i.em,{children:"N"})," si specifica come un numero intero, il valore di default (all'avvio di ",(0,n.jsx)(i.code,{children:"gdb"}),") \xe8 1."]}),"\n",(0,n.jsxs)(i.p,{children:["Il parametro ",(0,n.jsx)(i.em,{children:"F"})," pu\xf2 essere"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"x"})," per esadecimale"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"d"})," per decimale"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"c"})," per ASCII"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"t"})," per binario"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"s"})," per stringa delimitata da ",(0,n.jsx)(i.code,{children:"0x00"})]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["Il valore di default (all'avvio di ",(0,n.jsx)(i.code,{children:"gdb"}),") \xe8 ",(0,n.jsx)(i.code,{children:"x"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["Il parametro ",(0,n.jsx)(i.em,{children:"U"})," pu\xf2 essere"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"b"})," per byte"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"h"})," per word (2 byte)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"w"})," per long (4 byte)"]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["Il valore di default (all'avvio di ",(0,n.jsx)(i.code,{children:"gdb"}),") \xe8 ",(0,n.jsx)(i.code,{children:"h"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["L'argomento ",(0,n.jsx)(i.em,{children:"addr"})," pu\xf2 essere espresso in diversi modi, sia usando label che registri o espressioni basate su aritmetica dei puntatori.\r\nPer esempio:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["letterale esadecimale: ",(0,n.jsx)(i.code,{children:"x 0x56559066"})]}),"\n",(0,n.jsxs)(i.li,{children:["label: ",(0,n.jsx)(i.code,{children:"x &label"})]}),"\n",(0,n.jsxs)(i.li,{children:["registro puntatore: ",(0,n.jsx)(i.code,{children:"x $esi"})]}),"\n",(0,n.jsxs)(i.li,{children:["registro puntatore e registro indice: ",(0,n.jsx)(i.code,{children:"x (char*)$esi + $ecx"})]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["Notare che nell'ultimo caso, dato che ci si basa su aritmetica dei puntatori, il tipo all'interno del cast determina la ",(0,n.jsx)(i.em,{children:"scala"}),", ossia la dimensione di ciascuna delle ",(0,n.jsx)(i.code,{children:"$ecx"})," locazioni del vettore da saltare.\r\nSi pu\xf2 usare ",(0,n.jsx)(i.code,{children:"(char*)"})," per 1 byte, ",(0,n.jsx)(i.code,{children:"(short*)"})," per 2 byte, ",(0,n.jsx)(i.code,{children:"(int*)"})," per 4 byte."]}),"\n",(0,n.jsxs)(i.p,{children:["Un alternativa a questo \xe8 lo scomporre, anche solo temporaneamente, le istruzioni con indirizzamento complesso. Per esempio, si pu\xf2 sostituire ",(0,n.jsx)(i.code,{children:"movb (%esi, %ecx), %al"})," con ",(0,n.jsx)(i.code,{children:"lea (%esi, %ecx), %ebx"})," seguita da ",(0,n.jsx)(i.code,{children:"movb (%ebx), %al"}),", cos\xec che si possa eseguire semplicemente ",(0,n.jsx)(i.code,{children:"x $ebx"})," nel debugger."]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,i,r)=>{r.d(i,{R:()=>o,x:()=>l});var n=r(6540);const s={},d=n.createContext(s);function o(e){const i=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(d.Provider,{value:i},e.children)}}}]);