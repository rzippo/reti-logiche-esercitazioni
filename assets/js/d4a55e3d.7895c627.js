"use strict";(self.webpackChunkreti_logiche_esercitazioni=self.webpackChunkreti_logiche_esercitazioni||[]).push([[9054],{1449:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>t});const r=JSON.parse('{"id":"esercitazioni/Assembler/Documentazione/Debugger gdb","title":"Debugger gdb","description":"Riferimento rapido per i comandi del debugger gdb","source":"@site/docs/esercitazioni/Assembler/Documentazione/30. Debugger gdb.mdx","sourceDirName":"esercitazioni/Assembler/Documentazione","slug":"/esercitazioni/Assembler/Documentazione/Debugger gdb","permalink":"/reti-logiche-esercitazioni/esercitazioni/Assembler/Documentazione/Debugger gdb","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"description":"Riferimento rapido per i comandi del debugger gdb"},"sidebar":"esercitazioniSidebar","previous":{"title":"Sottoprogrammi utility","permalink":"/reti-logiche-esercitazioni/esercitazioni/Assembler/Documentazione/Sottoprogrammi utility"},"next":{"title":"Tabella ASCII","permalink":"/reti-logiche-esercitazioni/esercitazioni/Assembler/Documentazione/Tabella ASCII"}}');var s=n(4848),o=n(8453);const d={description:"Riferimento rapido per i comandi del debugger gdb"},l="Debugger gdb",c={},t=[{value:"Controllo dell&#39;esecuzione",id:"controllo-dellesecuzione",level:2},{value:"Problemi con <code>next</code>",id:"problemi-con-next",level:3},{value:"Ispezione dei registri",id:"ispezione-dei-registri",level:2},{value:"Ispezione della memoria",id:"ispezione-della-memoria",level:2},{value:"Gestione dei breakpoints",id:"gestione-dei-breakpoints",level:2},{value:"Conditional Breakpoints",id:"conditional-breakpoints",level:3},{value:"Watchpoints",id:"watchpoints",level:3}];function a(e){const i={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsxs)(i.h1,{id:"debugger-gdb",children:["Debugger ",(0,s.jsx)(i.code,{children:"gdb"})]})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"gdb"})," \xe8 un debugger a linea di comando che ci permette di eseguire un programma passo passo, seguendo lo stato del processore e della memoria."]}),"\n",(0,s.jsxs)(i.p,{children:["Il concetto fondamentale per un debugger \xe8 quello di ",(0,s.jsx)(i.em,{children:"breakpoint"}),", ossia un punto del codice dove l'esecuzione dovra fermarsi.\r\nI breakpoints ci permettono di eseguire rapidamente le parti del programma che non sono di interesse e fermarsi ad osservare solo le parti che ci interessano."]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:["Quella che segue \xe8 comunque una presentazione sintetica e semplificata.\r\nPer altre opzioni e funzionalit\xe0 del debugger, vedere la documentazione ufficiale o il comando ",(0,s.jsx)(i.code,{children:"help"}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"controllo-dellesecuzione",children:"Controllo dell'esecuzione"}),"\n",(0,s.jsxs)(i.p,{children:["Per istruzione corrente si intende ",(0,s.jsx)(i.em,{children:"la prossima da eseguire"}),".\r\nQuando il debugger si ferma ad un'istruzione, si ferma ",(0,s.jsx)(i.em,{children:"prima"})," di eseguirla."]}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Nome completo"}),(0,s.jsx)(i.th,{children:"Nome scorciatoia"}),(0,s.jsx)(i.th,{children:"Formato"}),(0,s.jsx)(i.th,{children:"Comportamento"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"frame"}),(0,s.jsx)(i.td,{children:"f"}),(0,s.jsx)(i.td,{children:"f"}),(0,s.jsx)(i.td,{children:"Mostra l'istruzione corrente."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"list"}),(0,s.jsx)(i.td,{children:"l"}),(0,s.jsx)(i.td,{children:"l"}),(0,s.jsx)(i.td,{children:"Mostra il sorgente attorno all'istruzione corrente."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"break"}),(0,s.jsx)(i.td,{children:"b"}),(0,s.jsxs)(i.td,{children:["b ",(0,s.jsx)(i.em,{children:"label"})]}),(0,s.jsxs)(i.td,{children:["Imposta un breakpoint alla prima istruzione dopo ",(0,s.jsx)(i.em,{children:"label"}),"."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"continue"}),(0,s.jsx)(i.td,{children:"c"}),(0,s.jsx)(i.td,{children:"c"}),(0,s.jsx)(i.td,{children:"Prosegue l'esecuzione del programma fino al prossimo breakpoint."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"step"}),(0,s.jsx)(i.td,{children:"s"}),(0,s.jsx)(i.td,{children:"s"}),(0,s.jsxs)(i.td,{children:["Esegue l'istruzione corrente, fermandosi immediatamente dopo. Se l'istruzione corrente \xe8 una ",(0,s.jsx)(i.code,{children:"call"}),", l'esecuzione si fermer\xe0 alla prima istruzione del sottoprogramma chiamato."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"next"}),(0,s.jsx)(i.td,{children:"n"}),(0,s.jsx)(i.td,{children:"n"}),(0,s.jsxs)(i.td,{children:["Esegue l'istruzione corrente, fermandosi all'istruzione successiva del sottoprogramma corrente. Se l'istruzione corrente \xe8 una ",(0,s.jsx)(i.code,{children:"call"}),", l'esecuzione si fermer\xe0\t",(0,s.jsx)(i.em,{children:"dopo"})," il ",(0,s.jsx)(i.code,{children:"ret"})," di del sottoprogramma chiamato. Nota: aggiungere una ",(0,s.jsx)(i.code,{children:"nop"})," dopo ogni ",(0,s.jsx)(i.code,{children:"call"})," prima di una nuova label."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"finish"}),(0,s.jsx)(i.td,{children:"fin"}),(0,s.jsx)(i.td,{children:"fin"}),(0,s.jsxs)(i.td,{children:["Continua l'esecuzione fino all'uscita dal sottoprogramma corrente (",(0,s.jsx)(i.code,{children:"ret"}),"). L'esecuzione si fermer\xe0 alla prima istruzione dopo la ",(0,s.jsx)(i.code,{children:"call"}),"."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"run"}),(0,s.jsx)(i.td,{children:"r"}),(0,s.jsx)(i.td,{children:"r"}),(0,s.jsx)(i.td,{children:"Avvia (o riavvia) l'esecuzione del programma. Chiede conferma."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"quit"}),(0,s.jsx)(i.td,{children:"q"}),(0,s.jsx)(i.td,{children:"q"}),(0,s.jsx)(i.td,{children:"Esce dal debugger. Chiede conferma."})]})]})]}),"\n",(0,s.jsxs)(i.p,{children:["I seguenti comandi sono ",(0,s.jsx)(i.em,{children:"definiti ad-hoc nell'ambiente del corso"}),", e non sono quindi tipici comandi di ",(0,s.jsx)(i.code,{children:"gdb"}),"."]}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Nome completo"}),(0,s.jsx)(i.th,{children:"Nome scorciatoia"}),(0,s.jsx)(i.th,{children:"Formato"}),(0,s.jsx)(i.th,{children:"Comportamento"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"rrun"}),(0,s.jsx)(i.td,{children:"rr"}),(0,s.jsx)(i.td,{children:"rr"}),(0,s.jsx)(i.td,{children:"Avvia (o riavvia) l'esecuzione del programma, senza chiedere conferma."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"qquit"}),(0,s.jsx)(i.td,{children:"qq"}),(0,s.jsx)(i.td,{children:"qq"}),(0,s.jsx)(i.td,{children:"Esce dal debugger, senza chiedere conferma."})]})]})]}),"\n",(0,s.jsxs)(i.h3,{id:"problemi-con-next",children:["Problemi con ",(0,s.jsx)(i.code,{children:"next"})]}),"\n",(0,s.jsxs)(i.p,{children:["Si possono talvolta incontrare problemi con il comportamento di ",(0,s.jsx)(i.code,{children:"next"}),", che derivano da come questa \xe8 definita e implementata.\r\nIl comando ",(0,s.jsx)(i.code,{children:"next"})," distingue i ",(0,s.jsx)(i.em,{children:"frame"})," come le sequenze di istruzioni che vanno da una label alla successiva.\r\nIl suo comportamento \xe8, in realt\xe0, di continuare l'esecuzione finch\xe9 non incontra di nuovo una nuova istruzione nello stesso ",(0,s.jsx)(i.em,{children:"frame"})," di partenza."]}),"\n",(0,s.jsxs)(i.p,{children:["Questa logica pu\xf2 essere facilmente rotta con del codice come il seguente, dove ",(0,s.jsx)(i.em,{children:"non esiste"})," una istruzione di ",(0,s.jsx)(i.code,{children:"punto_1"})," che viene incontrata dopo la ",(0,s.jsx)(i.code,{children:"call"}),".\r\nQuel che ne consegue \xe8 che il comando ",(0,s.jsx)(i.code,{children:"next"})," si comporta come ",(0,s.jsx)(i.code,{children:"continue"}),"."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-assembler",children:"punto_1:\r\n    ...\r\n    call newline\r\npunto_2:\r\n    ...\n"})}),"\n",(0,s.jsxs)(i.p,{children:["Per ovviare a questo problema, \xe8 una buona abitudine quella di aggiungere una ",(0,s.jsx)(i.code,{children:"nop"})," dopo ciascuna ",(0,s.jsx)(i.code,{children:"call"}),".\r\nTale ",(0,s.jsx)(i.code,{children:"nop"}),", appartenendo allo stesso ",(0,s.jsx)(i.em,{children:"frame"})," ",(0,s.jsx)(i.code,{children:"punto_1"}),", far\xe0 regolarmente sospendere l'esecuzione."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-assembler",children:"punto_1:\r\n    ...\r\n    call newline\r\n    nop\r\npunto_2:\r\n    ...\n"})}),"\n",(0,s.jsx)(i.h2,{id:"ispezione-dei-registri",children:"Ispezione dei registri"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Nome completo"}),(0,s.jsx)(i.th,{children:"Nome scorciatoia"}),(0,s.jsx)(i.th,{children:"Formato"}),(0,s.jsx)(i.th,{children:"Comportamento"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"info registers"}),(0,s.jsx)(i.td,{children:"i r"}),(0,s.jsx)(i.td,{children:"i r"}),(0,s.jsxs)(i.td,{children:["Mostra lo stato di (quasi) tutti i registri. Non mostra separatamente i sotto-registri, come ",(0,s.jsx)(i.code,{children:"%ax"}),"."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"info registers"}),(0,s.jsx)(i.td,{children:"i r"}),(0,s.jsxs)(i.td,{children:["i r ",(0,s.jsx)(i.em,{children:"reg"})]}),(0,s.jsxs)(i.td,{children:["Mostra lo stato del registro ",(0,s.jsx)(i.em,{children:"reg"})," specificato. ",(0,s.jsx)(i.em,{children:"reg"})," va specificato in minuscolo senza caratteri preposti, per esempio ",(0,s.jsx)(i.code,{children:"i r eax"}),". Si possono specificare anche sotto-registri, come ",(0,s.jsx)(i.code,{children:"%ax"}),", e pi\xf9 registri separati da spazio."]})]})]})]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"gdb"})," supporta viste alternative con il comando ",(0,s.jsx)(i.code,{children:"layout"})," che mettono pi\xf9 informazioni a schermo.\r\nIn particolare, ",(0,s.jsx)(i.code,{children:"layout regs"})," mostra l'equivalente di ",(0,s.jsx)(i.code,{children:"i r"})," e ",(0,s.jsx)(i.code,{children:"l"}),", evidenziando gli elementi che cambiano ad ogni step di esecuzione."]}),"\n",(0,s.jsx)(i.h2,{id:"ispezione-della-memoria",children:"Ispezione della memoria"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Nome completo"}),(0,s.jsx)(i.th,{children:"Nome scorciatoia"}),(0,s.jsx)(i.th,{children:"Formato"}),(0,s.jsx)(i.th,{children:"Comportamento"})]})}),(0,s.jsx)(i.tbody,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"x"}),(0,s.jsx)(i.td,{children:"x"}),(0,s.jsxs)(i.td,{children:["x/",(0,s.jsx)(i.em,{children:"NFU"})," ",(0,s.jsx)(i.em,{children:"addr"})]}),(0,s.jsxs)(i.td,{children:["Mostra lo stato della memoria a partire dall'indirizzo ",(0,s.jsx)(i.em,{children:"addr"}),", per le ",(0,s.jsx)(i.em,{children:"N"})," locazione di dimensione ",(0,s.jsx)(i.em,{children:"U"})," e interpretate con il formato ",(0,s.jsx)(i.em,{children:"F"}),". Comando con memoria, i valori di ",(0,s.jsx)(i.em,{children:"N"}),", ",(0,s.jsx)(i.em,{children:"F"})," e ",(0,s.jsx)(i.em,{children:"U"})," possono essere omessi (insieme allo ",(0,s.jsx)(i.code,{children:"/"}),") se uguali a prima."]})]})})]}),"\n",(0,s.jsxs)(i.p,{children:["Il comando ",(0,s.jsx)(i.code,{children:"x"})," sta per ",(0,s.jsx)(i.em,{children:"examine memory"}),", ma differenza degli altri non ha una versione estesa."]}),"\n",(0,s.jsxs)(i.p,{children:["Il parametro ",(0,s.jsx)(i.em,{children:"N"})," si specifica come un numero intero, il valore di default (all'avvio di ",(0,s.jsx)(i.code,{children:"gdb"}),") \xe8 1."]}),"\n",(0,s.jsxs)(i.p,{children:["Il parametro ",(0,s.jsx)(i.em,{children:"F"})," pu\xf2 essere"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"x"})," per esadecimale"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"d"})," per decimale"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"c"})," per ASCII"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"t"})," per binario"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"s"})," per stringa delimitata da ",(0,s.jsx)(i.code,{children:"0x00"})]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Il valore di default (all'avvio di ",(0,s.jsx)(i.code,{children:"gdb"}),") \xe8 ",(0,s.jsx)(i.code,{children:"x"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["Il parametro ",(0,s.jsx)(i.em,{children:"U"})," pu\xf2 essere"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"b"})," per byte"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"h"})," per word (2 byte)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"w"})," per long (4 byte)"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Il valore di default (all'avvio di ",(0,s.jsx)(i.code,{children:"gdb"}),") \xe8 ",(0,s.jsx)(i.code,{children:"h"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["L'argomento ",(0,s.jsx)(i.em,{children:"addr"})," pu\xf2 essere espresso in diversi modi, sia usando label che registri o espressioni basate su aritmetica dei puntatori.\r\nPer esempio:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["letterale esadecimale: ",(0,s.jsx)(i.code,{children:"x 0x56559066"})]}),"\n",(0,s.jsxs)(i.li,{children:["label: ",(0,s.jsx)(i.code,{children:"x &label"})]}),"\n",(0,s.jsxs)(i.li,{children:["registro puntatore: ",(0,s.jsx)(i.code,{children:"x $esi"})]}),"\n",(0,s.jsxs)(i.li,{children:["registro puntatore e registro indice: ",(0,s.jsx)(i.code,{children:"x (char*)$esi + $ecx"})]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Notare che nell'ultimo caso, dato che ci si basa su aritmetica dei puntatori, il tipo all'interno del cast determina la ",(0,s.jsx)(i.em,{children:"scala"}),", ossia la dimensione di ciascuna delle ",(0,s.jsx)(i.code,{children:"$ecx"})," locazioni del vettore da saltare.\r\nSi pu\xf2 usare ",(0,s.jsx)(i.code,{children:"(char*)"})," per 1 byte, ",(0,s.jsx)(i.code,{children:"(short*)"})," per 2 byte, ",(0,s.jsx)(i.code,{children:"(int*)"})," per 4 byte."]}),"\n",(0,s.jsxs)(i.p,{children:["Un alternativa a questo \xe8 lo scomporre, anche solo temporaneamente, le istruzioni con indirizzamento complesso. Per esempio, si pu\xf2 sostituire ",(0,s.jsx)(i.code,{children:"movb (%esi, %ecx), %al"})," con ",(0,s.jsx)(i.code,{children:"lea (%esi, %ecx), %ebx"})," seguita da ",(0,s.jsx)(i.code,{children:"movb (%ebx), %al"}),", cos\xec che si possa eseguire semplicemente ",(0,s.jsx)(i.code,{children:"x $ebx"})," nel debugger."]}),"\n",(0,s.jsx)(i.h2,{id:"gestione-dei-breakpoints",children:"Gestione dei breakpoints"}),"\n",(0,s.jsxs)(i.p,{children:["Oltre a crearli, i breakpoint possono anche essere rimossi o (dis)abilitati.\r\nQuesti comandi si basano sulla conoscenza dell'",(0,s.jsx)(i.em,{children:"id"})," di un breakpoint: questo viene stampato quando un breakpoint viene creato o raggiunto durante l'esecuzione,oppure si possono ristampare tutti usando ",(0,s.jsx)(i.code,{children:"info b"}),"."]}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Nome completo"}),(0,s.jsx)(i.th,{children:"Nome scorciatoia"}),(0,s.jsx)(i.th,{children:"Formato"}),(0,s.jsx)(i.th,{children:"Comportamento"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"info breakpoints"}),(0,s.jsx)(i.td,{children:"info b"}),(0,s.jsxs)(i.td,{children:["info b [",(0,s.jsx)(i.em,{children:"id"}),"]"]}),(0,s.jsxs)(i.td,{children:["Stampa informazioni sul breakpoint ",(0,s.jsx)(i.em,{children:"id"}),", o tutti se l'argomento \xe8 omesso."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"disable breakpoints"}),(0,s.jsx)(i.td,{children:"dis"}),(0,s.jsxs)(i.td,{children:["dis [",(0,s.jsx)(i.em,{children:"id"}),"]"]}),(0,s.jsxs)(i.td,{children:["Disabilita il breakpoint ",(0,s.jsx)(i.em,{children:"id"}),", o tutti se l'argomento \xe8 omesso."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"enable breakpoints"}),(0,s.jsx)(i.td,{children:"en"}),(0,s.jsxs)(i.td,{children:["en [",(0,s.jsx)(i.em,{children:"id"}),"]"]}),(0,s.jsxs)(i.td,{children:["Abilita il breakpoint ",(0,s.jsx)(i.em,{children:"id"}),", o tutti se l'argomento \xe8 omesso."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"delete breakpoints"}),(0,s.jsx)(i.td,{children:"d"}),(0,s.jsxs)(i.td,{children:["d [",(0,s.jsx)(i.em,{children:"id"}),"]"]}),(0,s.jsxs)(i.td,{children:["Rimuove il breakpoint ",(0,s.jsx)(i.em,{children:"id"}),", o tutti se l'argomento \xe8 omesso."]})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"conditional-breakpoints",children:"Conditional Breakpoints"}),"\n",(0,s.jsxs)(i.p,{children:["In alcuni casi, la complessit\xe0 del programma, l'uso intensivo di sottoprogrammi o lunghi loop possono rendere molto lungo trovare il punto giusto dell'esecuzione.\r\nA questo scopo, \xe8 possibile definire dei ",(0,s.jsx)(i.em,{children:"breakpoint condizionali"}),", per far s\xec che l'esecuzione si interrompa a tale breakpoint solo se la condiziona \xe8 verificata."]}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Nome completo"}),(0,s.jsx)(i.th,{children:"Nome scorciatoia"}),(0,s.jsx)(i.th,{children:"Formato"}),(0,s.jsx)(i.th,{children:"Comportamento"})]})}),(0,s.jsx)(i.tbody,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"condition"}),(0,s.jsx)(i.td,{children:"cond"}),(0,s.jsxs)(i.td,{children:["cond ",(0,s.jsx)(i.em,{children:"id"})," ",(0,s.jsx)(i.em,{children:"cond"})]}),(0,s.jsxs)(i.td,{children:["Imposta la condizione ",(0,s.jsx)(i.em,{children:"cond"})," per il breakpoint ",(0,s.jsx)(i.em,{children:"id"}),"."]})]})})]}),"\n",(0,s.jsxs)(i.p,{children:['La sintassi per una condizione \xe8 in "stile C", come il comando ',(0,s.jsx)(i.code,{children:"x"}),".\r\nAlcuni esempi di questa sintassi:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"cond 2 $al==5"})," per far s\xec che l'esecuzione si fermi al breakpoint 2 solo se il registro ",(0,s.jsx)(i.code,{children:"al"})," contiene il valore 5,"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"cond 2 (short *)$edi==-5"})," per far s\xec che l'esecuzione si fermi al breakpoint 2 solo se il registro ",(0,s.jsx)(i.code,{children:"edi"})," contiene l'indirizzo di una word di valore -5,"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"cond 2 (int *)&count!=0"})," per far s\xec che l'esecuzione si fermi al breakpoint 2 solo se la locazione di 4 byte a partire da ",(0,s.jsx)(i.code,{children:"count"})," contiene un valore diverso da 0,"]}),"\n",(0,s.jsx)(i.li,{}),"\n"]}),"\n",(0,s.jsx)(i.admonition,{type:"warning",children:(0,s.jsxs)(i.p,{children:["Fare attenzione alle conversioni automatiche di rappresentazione: quando si usa la rappresentazione decimale, ",(0,s.jsx)(i.code,{children:"gdb"})," interpreta automaticamente i valori come interi.\r\nUna condizione come ",(0,s.jsx)(i.code,{children:"cond 2 $al==128"}),", per quanto accettata dal debugger, sar\xe0 sempre falsa perch\xe9 la codifica ",(0,s.jsx)(i.code,{children:"0x80"})," \xe8 interpretata in decimale come l'intero ",(0,s.jsx)(i.code,{children:"-128"}),", mai come il naturale ",(0,s.jsx)(i.code,{children:"128"}),".\r\n\xc8 quindi una buona idea usare la notazione esadecimale in casi del genere, cio\xe8 quando il bit pi\xf9 significativo \xe8 1."]})}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsxs)(i.p,{children:["Una feature disponibile in molti IDE \xe8 quello di creare dipendenze tra breakpoint, cio\xe8 abilitare un breakpoint solo se \xe8 stato prima colpito un altro.\r\nQuesto per\xf2 \xe8 ",(0,s.jsx)(i.a,{href:"https://stackoverflow.com/questions/36976573/gdb-breakpoint-that-breaks-only-after-a-different-breakpoint-is-hit",children:"fin troppo ostico"})," da fare in ",(0,s.jsx)(i.code,{children:"gdb"}),"."]})}),"\n",(0,s.jsx)(i.h3,{id:"watchpoints",children:"Watchpoints"}),"\n",(0,s.jsxs)(i.p,{children:["I watchpoint sono come dei breapoint ma per dati (registri e memoria), non per il codice.\r\nSi creano indicando l'espressione del dato da controllare.\r\nSi gestiscono ",(0,s.jsx)(i.em,{children:"con gli stessi comandi per i breakpoint"}),"."]}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Nome completo"}),(0,s.jsx)(i.th,{children:"Nome scorciatoia"}),(0,s.jsx)(i.th,{children:"Formato"}),(0,s.jsx)(i.th,{children:"Comportamento"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"watchpoint"}),(0,s.jsx)(i.td,{children:"watch"}),(0,s.jsxs)(i.td,{children:["watch ",(0,s.jsx)(i.em,{children:"expr"})]}),(0,s.jsxs)(i.td,{children:["Imposta un watchpoint per l'espressione ",(0,s.jsx)(i.em,{children:"expr"}),"."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"info watchpoints"}),(0,s.jsx)(i.td,{children:"info wat"}),(0,s.jsxs)(i.td,{children:["info wat [",(0,s.jsx)(i.em,{children:"id"}),"]"]}),(0,s.jsxs)(i.td,{children:["Stampa informazioni sul watchpoint ",(0,s.jsx)(i.em,{children:"id"}),", o tutti se l'argomento \xe8 omesso."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"disable breakpoints"}),(0,s.jsx)(i.td,{children:"dis"}),(0,s.jsxs)(i.td,{children:["dis [",(0,s.jsx)(i.em,{children:"id"}),"]"]}),(0,s.jsxs)(i.td,{children:["Disabilita il breakpoint o watchpoint ",(0,s.jsx)(i.em,{children:"id"}),", o tutti se l'argomento \xe8 omesso."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"enable breakpoints"}),(0,s.jsx)(i.td,{children:"en"}),(0,s.jsxs)(i.td,{children:["en [",(0,s.jsx)(i.em,{children:"id"}),"]"]}),(0,s.jsxs)(i.td,{children:["Abilita il breakpoint o watchpoint ",(0,s.jsx)(i.em,{children:"id"}),", o tutti se l'argomento \xe8 omesso."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"delete breakpoints"}),(0,s.jsx)(i.td,{children:"d"}),(0,s.jsxs)(i.td,{children:["d [",(0,s.jsx)(i.em,{children:"id"}),"]"]}),(0,s.jsxs)(i.td,{children:["Rimuove il breakpoint o watchpoint ",(0,s.jsx)(i.em,{children:"id"}),", o tutti se l'argomento \xe8 omesso."]})]})]})]}),"\n",(0,s.jsxs)(i.p,{children:['Un watchpoint richiede la specifica di un registro o locazione nella stessa notazione "stile C" del comando ',(0,s.jsx)(i.code,{children:"x"}),", e interrompe l'esecuzione quando tale valore cambia.\r\nPer esempio, ",(0,s.jsx)(i.code,{children:"watch $eax"})," crea un watchpoint che interrompe l'esecuzione ogni volta che ",(0,s.jsx)(i.code,{children:"eax"})," cambia valore."]})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>d,x:()=>l});var r=n(6540);const s={},o=r.createContext(s);function d(e){const i=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(o.Provider,{value:i},e.children)}}}]);